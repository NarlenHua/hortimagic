// Store.ts （在原有基础上追加）

import { EventEmitter } from './EventEmitter';

export class StoreItem<T> extends EventEmitter {
    private _value: T;

    constructor(initialValue: T) {
        super();
        this._value = initialValue;
    }

    get value(): T {
        return this._value;
    }

    set value(newValue: T) {
        if (Object.is(this._value, newValue)) return;
        this._value = newValue;
        this.emit('change', newValue);
    }

    triggerChange(): void {
        this.emit('change', this._value);
    }
}

export class Store extends EventEmitter {
    private items = new Map<string, StoreItem<any>>();

    add(key: string, initialValue: any): StoreItem<any> {
        if (this.items.has(key)) {
            console.warn(`Store item "${key}" already exists.`);
            return this.items.get(key)!;
        }
        const item = new StoreItem(initialValue);
        this.items.set(key, item);
        this.emit('add', key, item);
        return item;
    }

    get<T = any>(key: string): StoreItem<T> | undefined {
        return this.items.get(key);
    }

    remove(key: string): boolean {
        if (!this.items.has(key)) return false;
        const item = this.items.get(key)!;
        this.items.delete(key);
        this.emit('remove', key, item);
        return true;
    }

    getValue<T = any>(key: string): T | undefined {
        return this.items.get(key)?.value;
    }

    setValue<T = any>(key: string, value: T): void {
        const item = this.items.get(key);
        if (item) {
            item.value = value;
        } else {
            this.add(key, value);
        }
    }

    has(key: string): boolean {
        return this.items.has(key);
    }

    // ========================
    // 持久化功能（新增）
    // ========================

    /**
     * 将 Store 中所有数据保存到 localStorage
     * @param storageKey localStorage 的键名，例如 'app-store'
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
                console.warn(`[Store] Skipping non-serializable item: ${key}`, err);
            }
        }

        try {
            localStorage.setItem(storageKey, JSON.stringify(serializableData));
        } catch (err) {
            console.error(`[Store] Failed to save to localStorage under key "${storageKey}"`, err);
        }
    }

    /**
     * 从 localStorage 加载数据并恢复到 Store
     * @param storageKey localStorage 的键名
     */
    loadFromLocalStorage(storageKey: string): void {
        let rawData: string | null = null;
        try {
            rawData = localStorage.getItem(storageKey);
            if (!rawData) return;
        } catch (err) {
            console.error(`[Store] Failed to read from localStorage key "${storageKey}"`, err);
            return;
        }

        let parsed: Record<string, any>;
        try {
            parsed = JSON.parse(rawData);
        } catch (err) {
            console.error(`[Store] Invalid JSON in localStorage key "${storageKey}"`, err);
            return;
        }

        if (typeof parsed !== 'object' || parsed === null) {
            console.warn(`[Store] Unexpected data type in localStorage: ${typeof parsed}`);
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