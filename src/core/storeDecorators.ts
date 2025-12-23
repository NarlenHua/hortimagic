// 装饰器：用于将类属性与 Store 中的值进行绑定
import { Store } from './Store-StoreItem';
import { StoreItem } from './Store-StoreItem';

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

/**
 * 双向绑定装饰器 - 将类属性与 Store 中的值进行双向绑定
 * 当 Store 中的值变化时，类属性也会更新；当类属性变化时，Store 中的值也会更新
 * 
 * @example
 * ```typescript
 * // 创建一个 Store 实例
 * const myStore = new Store();
 * 
 * // 在类中使用装饰器
 * class MyClass {
 *   @storeBind(myStore, 'myKey')
 *   myProperty: string;
 * }
 * 
 * const instance = new MyClass();
 * instance.myProperty = 'hello'; // 这会更新 Store 中 'myKey' 的值
 * logger.log(myStore.get('myKey').value); // 输出: 'hello'
 * 
 * myStore.get('myKey').value = 'world'; // 这会更新类属性
 * logger.log(instance.myProperty); // 输出: 'world'
 * ```
 */
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

/**
 * 单向同步装饰器 - 将 Store 中的值单向同步到类属性
 * 当 Store 中的值变化时，类属性会更新，但类属性变化不会影响 Store
 * 
 * @example
 * ```typescript
 * // 创建一个 Store 实例
 * const myStore = new Store();
 * myStore.add('myKey', 'initial value');
 * 
 * // 在类中使用装饰器
 * class MyClass {
 *   @storeSync(myStore, 'myKey')
 *   myProperty: string;
 * }
 * 
 * const instance = new MyClass();
 * logger.log(instance.myProperty); // 输出: 'initial value'
 * 
 * myStore.get('myKey').value = 'new value';
 * logger.log(instance.myProperty); // 输出: 'new value'
 * 
 * instance.myProperty = 'local value'; // 这不会影响 Store
 * logger.log(myStore.get('myKey').value); // 仍然是: 'new value'
 * ```
 */
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

/**
 * 持续监听装饰器 - 监听 Store 中值的变化并执行方法
 * 当 Store 中的值变化时，被装饰的方法会被调用
 * 
 * @example
 * ```typescript
 * // 创建一个 Store 实例
 * const myStore = new Store();
 * myStore.add('myKey', 'initial value');
 * 
 * // 在类中使用装饰器
 * class MyClass {
 *   @storeOn(myStore, 'myKey')
 *   onMyKeyChange(newValue: any) {
 *     logger.log('Value changed to:', newValue);
 *   }
 * }
 * 
 * const instance = new MyClass();
 * myStore.get('myKey').value = 'new value'; // 这会触发 onMyKeyChange 方法
 * // 输出: 'Value changed to: new value'
 * ```
 */
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

/**
 * 仅监听一次装饰器 - 监听 Store 中值的下一次变化并执行方法
 * 当 Store 中的值下一次变化时，被装饰的方法会被调用，然后监听器自动移除
 * 
 * @example
 * ```typescript
 * // 创建一个 Store 实例
 * const myStore = new Store();
 * myStore.add('myKey', 'initial value');
 * 
 * // 在类中使用装饰器
 * class MyClass {
 *   @storeOnce(myStore, 'myKey')
 *   onMyKeyChange(newValue: any) {
 *     logger.log('Value changed to:', newValue);
 *   }
 * }
 * 
 * const instance = new MyClass();
 * myStore.get('myKey').value = 'first change'; // 这会触发 onMyKeyChange 方法
 * // 输出: 'Value changed to: first change'
 * 
 * myStore.get('myKey').value = 'second change'; // 这不会触发方法，因为监听器已自动移除
 * ```
 */
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

/**
 * 自动清理装饰器 - 为类自动注入 destroy 方法
 * 当调用实例的 destroy 方法时，会自动清理所有 Store 监听器
 * 
 * @example
 * ```typescript
 * // 在类上使用装饰器
 * @storeRemoveOn()
 * class MyClass {
 *   @storeOn(myStore, 'myKey')
 *   onMyKeyChange(newValue: any) {
 *     logger.log('Value changed to:', newValue);
 *   }
 * }
 * 
 * const instance = new MyClass();
 * // ... 使用实例 ...
 * instance.destroy(); // 这会清理所有 Store 监听器
 * ```
 */
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