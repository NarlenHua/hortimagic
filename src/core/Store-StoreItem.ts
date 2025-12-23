// Store.ts
import { EventEmitter } from './EventEmitter';
import { logger } from './logger';

/**
 * StoreItem 类表示 Store 中的一个数据项
 * 它继承自 EventEmitter，允许监听值的变化
 * 
 * @example
 * // 创建一个 StoreItem 实例
 * const item = new StoreItem<number>(42);
 * 
 * // 监听值的变化
 * item.on('change', (newValue) => {
 *   logger.log('Value changed to:', newValue);
 * });
 * 
 * // 修改值
 * item.value = 100; // 会触发 change 事件
 */
export class StoreItem<T> extends EventEmitter {
    private _value: T;

    /**
     * 构造函数
     * @param initialValue 初始值
     */
    constructor(initialValue: T) {
        super();
        this._value = initialValue;
    }

    /**
     * 获取当前值
     */
    get value(): T {
        return this._value;
    }

    /**
     * 设置新值，如果新值与当前值不同，则触发 change 事件
     * @param newValue 新值
     */
    set value(newValue: T) {
        if (Object.is(this._value, newValue)) return;
        this._value = newValue;
        this.emit('change', newValue);
    }

    /**
     * 手动触发 change 事件，即使值没有改变
     */
    triggerChange(): void {
        this.emit('change', this._value);
    }
}

/**
 * Store 类提供了一个基于键值对的数据存储系统
 * 它继承自 EventEmitter，允许监听存储变化
 * 
 * @example
 * // 创建 Store 实例
 * const store = new Store();
 * 
 * // 添加数据项
 * const countItem = store.add('count', 0);
 * 
 * // 监听特定项的变化
 * countItem.on('change', (newValue) => {
 *   logger.log('Count changed to:', newValue);
 * });
 * 
 * // 设置值
 * store.setValue('count', 5);
 * 
 * // 获取值
 * const count = store.getValue('count'); // 返回 5
 * 
 * @example
 * // 使用持久化功能
 * const store = new Store();
 * store.add('username', 'john');
 * 
 * // 保存到 localStorage
 * store.persistToLocalStorage('my-app-data');
 * 
 * // 从 localStorage 加载
 * const newStore = new Store();
 * newStore.loadFromLocalStorage('my-app-data');
 */
export class Store extends EventEmitter {
    private items = new Map<string, StoreItem<any>>();

    /**
     * 添加一个新的 StoreItem
     * @param key 键名
     * @param initialValue 初始值
     * @returns 返回新创建或已存在的 StoreItem
     * 
     * @example
     * const store = new Store();
     * const item = store.add('name', 'John');
     * logger.log(item.value); // 'John'
     */
    add(key: string, initialValue: any): StoreItem<any> {
        if (this.items.has(key)) {
            logger.warn(`Store item "${key}" already exists.`);
            return this.items.get(key)!;
        }
        const item = new StoreItem(initialValue);
        this.items.set(key, item);
        this.emit('add', key, item);
        return item;
    }

    /**
     * 获取指定键的 StoreItem
     * @param key 键名
     * @returns 返回对应的 StoreItem 或 undefined
     * 
     * @example
     * const store = new Store();
     * store.add('count', 0);
     * const item = store.get('count');
     * logger.log(item?.value); // 0
     */
    get<T = any>(key: string): StoreItem<T> | undefined {
        return this.items.get(key);
    }

    /**
     * 移除指定键的 StoreItem
     * @param key 键名
     * @returns 如果存在并成功移除则返回 true，否则返回 false
     * 
     * @example
     * const store = new Store();
     * store.add('temp', 'data');
     * const removed = store.remove('temp'); // true
     * const notRemoved = store.remove('nonexistent'); // false
     */
    remove(key: string): boolean {
        if (!this.items.has(key)) return false;
        const item = this.items.get(key)!;
        this.items.delete(key);
        this.emit('remove', key, item);
        return true;
    }

    /**
     * 获取指定键的值
     * @param key 键名
     * @returns 返回对应的值或 undefined
     * 
     * @example
     * const store = new Store();
     * store.add('name', 'John');
     * const name = store.getValue('name'); // 'John'
     * const missing = store.getValue('missing'); // undefined
     */
    getValue<T = any>(key: string): T | undefined {
        return this.items.get(key)?.value;
    }

    /**
     * 设置指定键的值
     * @param key 键名
     * @param value 值
     * 
     * @example
     * const store = new Store();
     * store.setValue('count', 10); // 如果不存在则添加
     * store.setValue('count', 20); // 如果存在则更新
     * logger.log(store.getValue('count')); // 20
     */
    setValue<T = any>(key: string, value: T): void {
        const item = this.items.get(key);
        if (item) {
            item.value = value;
        } else {
            this.add(key, value);
        }
        return this.items.get(key)?.value;
    }

    /**
     * 检查是否存在指定键的 StoreItem
     * @param key 键名
     * @returns 如果存在返回 true，否则返回 false
     * 
     * @example
     * const store = new Store();
     * store.add('name', 'John');
     * logger.log(store.has('name')); // true
     * logger.log(store.has('age')); // false
     */
    has(key: string): boolean {
        return this.items.has(key);
    }

    // ========================
    // 持久化功能（新增）
    // ========================

    /**
     * 将 Store 中所有数据保存到 localStorage
     * @param storageKey localStorage 的键名，例如 'app-store'
     * 
     * @example
     * const store = new Store();
     * store.add('username', 'john');
     * store.add('theme', 'dark');
     * store.persistToLocalStorage('my-app-storage');
     */
    persistToLocalStorage(storageKey: string): void {
        const serializableData: Record<string, any> = {};

        for (const [key, item] of this.items.entries()) {
            try {
                // 尝试序列化，跳过函数、undefined、Symbol 等
                const value = item.value;
                if (value === undefined || typeof value === 'function' || typeof value === 'symbol') {
                    continue;
                }
                // 验证是否可 JSON 序列化
                JSON.stringify(value); // 若失败会抛出异常
                serializableData[key] = value;
            } catch (err) {
                logger.warn('Store', `Skipping non-serializable item: ${key}`, err);
            }
        }

        try {
            localStorage.setItem(storageKey, JSON.stringify(serializableData));
            logger.info('Store', `Saved to localStorage under key "${storageKey}"`);
        } catch (err) {
            logger.error('Store', `Failed to save to localStorage under key "${storageKey}"`, err);
        }
    }

    /**
     * 从 localStorage 加载数据并恢复到 Store
     * @param storageKey localStorage 的键名
     * 
     * @example
     * const store = new Store();
     * store.loadFromLocalStorage('my-app-storage');
     * 
     * // 现在 store 包含之前保存的数据
     * const username = store.getValue('username');
     */
    loadFromLocalStorage(storageKey: string): void {
        let rawData: string | null = null;
        try {
            rawData = localStorage.getItem(storageKey);
            if (!rawData) return;
            else {
                logger.info('Store', `Loaded from localStorage under key "${storageKey}"`);
            }
        } catch (err) {
            logger.error('Store', `Failed to read from localStorage key "${storageKey}"`, err);
            return;
        }

        let parsed: Record<string, any>;
        try {
            parsed = JSON.parse(rawData);
        } catch (err) {
            logger.error('Store', `Invalid JSON in localStorage key "${storageKey}"`, err);
            return;
        }

        if (typeof parsed !== 'object' || parsed === null) {
            logger.warn('Store', `Unexpected data type in localStorage: ${typeof parsed}`);
            return;
        }

        for (const [key, value] of Object.entries(parsed)) {
            if (this.has(key)) {
                // 已存在：更新值（会触发 change 事件）
                this.setValue(key, value);
            } else {
                // 不存在：新增（会触发 add + change 事件）
                this.add(key, value);
            }
        }
    }
}