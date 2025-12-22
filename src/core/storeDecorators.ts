// decorators.ts
import { Store } from './Store';
import { StoreItem } from './Store';

type StoreKey = string;

// 清理函数类型
type CleanupFn = () => void;

// 监听器容器接口
interface ListenerContainer {
    listeners: CleanupFn[];
}

// 工具：获取或创建实例的监听器容器
function getListenerContainer(instance: any): ListenerContainer {
    if (!instance._storeListeners) {
        instance._storeListeners = { listeners: [] };
    }
    return instance._storeListeners;
}

// 双向绑定
export function storeBind(store: Store, key: StoreKey) {
    return function (target: any, propertyKey: string) {
        let internalValue: any = undefined;

        const descriptor: PropertyDescriptor = {
            get() {
                const item = store.get(key);
                return item ? item.value : internalValue;
            },
            set(newValue: any) {
                internalValue = newValue;
                const item = store.get(key);
                if (item) {
                    item.value = newValue;
                } else {
                    store.add(key, newValue);
                }
            },
            enumerable: true,
            configurable: true,
        };

        Object.defineProperty(target, propertyKey, descriptor);
    };
}

// 单向同步
export function storeSync(store: Store, key: StoreKey) {
    return function (target: any, _propertyKey: string) {
        const init = () => {
            const item = store.get(key);
            if (item) {
                target[_propertyKey] = item.value;
                const update = (v: any) => (target[_propertyKey] = v);
                item.on('change', update);

                const container = getListenerContainer(target);
                container.listeners.push(() => item.off('change', update));
            } else {
                const onAdd = (addedKey: string, addedItem: StoreItem<any>) => {
                    if (addedKey === key) {
                        target[_propertyKey] = addedItem.value;
                        const update = (v: any) => (target[_propertyKey] = v);
                        addedItem.on('change', update);
                        const container = getListenerContainer(target);
                        container.listeners.push(() => addedItem.off('change', update));
                        store.off('add', onAdd);
                    }
                };
                store.on('add', onAdd);
                const container = getListenerContainer(target);
                container.listeners.push(() => store.off('add', onAdd));
            }
        };

        setupInitHook(target, init);
    };
}

// 持续监听
export function storeOn(store: Store, key: StoreKey) {
    return function (target: any, _propertyKey: string, descriptor: PropertyDescriptor) {
        const method = descriptor.value;
        const init = () => {
            const item = store.get(key);
            if (item) {
                const handler = method.bind(target);
                item.on('change', handler);
                const container = getListenerContainer(target);
                container.listeners.push(() => item.off('change', handler));
            } else {
                const onAdd = (addedKey: string, addedItem: StoreItem<any>) => {
                    if (addedKey === key) {
                        const handler = method.bind(target);
                        addedItem.on('change', handler);
                        const container = getListenerContainer(target);
                        container.listeners.push(() => addedItem.off('change', handler));
                        store.off('add', onAdd);
                    }
                };
                store.on('add', onAdd);
                const container = getListenerContainer(target);
                container.listeners.push(() => store.off('add', onAdd));
            }
        };
        setupInitHook(target, init);
    };
}

// 仅监听一次
export function storeOnce(store: Store, key: StoreKey) {
    return function (target: any, _propertyKey: string, descriptor: PropertyDescriptor) {
        const method = descriptor.value;
        const init = () => {
            const item = store.get(key);
            if (item) {
                item.once('change', method.bind(target));
                // once 内部自动 off，无需清理
            } else {
                const onAdd = (addedKey: string, addedItem: StoreItem<any>) => {
                    if (addedKey === key) {
                        addedItem.once('change', method.bind(target));
                        store.off('add', onAdd);
                    }
                };
                store.on('add', onAdd);
                const container = getListenerContainer(target);
                container.listeners.push(() => store.off('add', onAdd));
            }
        };
        setupInitHook(target, init);
    };
}

// 自动注入 destroy 方法
export function storeRemoveOn() {
    return function <T extends new (...args: any[]) => any>(constructor: T) {
        if (constructor.prototype.destroy) return constructor;

        constructor.prototype.destroy = function () {
            const container: ListenerContainer | undefined = this._storeListeners;
            if (container?.listeners) {
                container.listeners.forEach((cleanup: CleanupFn) => cleanup());
                container.listeners = [];
            }
        };

        return constructor;
    };
}

// 辅助：设置初始化钩子
function setupInitHook(target: any, initFn: () => void) {
    const originalCtor = target.constructor;
    if (!originalCtor.prototype._decorated) {
        const original = originalCtor.prototype.constructor;
        originalCtor.prototype.constructor = function (...args: any[]) {
            const instance = new original(...args);
            if (typeof instance._initStoreDecorators === 'function') {
                instance._initStoreDecorators();
            } else {
                initFn.call(instance);
            }
            return instance;
        };
        originalCtor.prototype._decorated = true;
    }

    if (!target._initStoreDecorators) {
        target._initStoreDecorators = function () {
            initFn.call(this);
        };
    } else {
        const prev = target._initStoreDecorators;
        target._initStoreDecorators = function () {
            prev.call(this);
            initFn.call(this);
        };
    }
}