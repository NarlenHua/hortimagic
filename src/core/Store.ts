import { TinyEmitter } from "tiny-emitter";

/**
 * 仓库类
 * @description 仓库类，用于存储数据，并监听数据变化
 * 
 */
export class Store {
    /**
     * 事件触发器
     * @example ```js
     * // 使用案例
     * emitter.on("eventName", (data) => {})
     * emitter.emit("eventName", data)
     * emitter.off("eventName", (data) => {})
     * emitter.once("eventName", (data) => {})
     * // 原型
     * on(event: string, callback: Function, ctx?: any): this;
     * once(event: string, callback: Function, ctx?: any): this;
     * emit(event: string, ...args: any[]): this;
     * off(event: string, callback?: Function): this;
     * ```
     */
    emitter: TinyEmitter = new TinyEmitter();
    private storeMap = new Map();

    // 移除 Map 对象的所有键/值对 。
    clear() {
        this.storeMap.clear();
        this.emitter.emit("clear");
    }
    // 设置键值对
    set(key: string, value: any) {
        this.storeMap.set(key, value);
        this.emitter.emit("set", key, value);
    }
    // 返回键对应的值，如果不存在，则返回 undefined。
    get(key: string) {
        return this.storeMap.get(key);
    }
    // 返回一个布尔值，用于判断 Map 中是否包含键对应的值。
    has(key: string) {
        return this.storeMap.has(key);
    }
    // 删除 Map 中的元素，删除成功返回 true，失败返回 false。
    delete(key: string) {
        let res = this.storeMap.delete(key);
        if (res)
            this.emitter.emit("delete", key);
        return res;
    }
    // 返回 Map 对象键/值对的数量。
    size() {
        return this.storeMap.size;
    }
    // 返回一个 Iterator 对象， 包含了 Map 对象中每个元素的键 。

    keys() {
        return this.storeMap.keys();
    }
    // 返回一个新的Iterator对象，包含了Map对象中每个元素的值 。
    values() {
        return this.storeMap.values();
    }
    // 返回一个包含 Map 中所有键值对的迭代器 。
    entries() {
        return this.storeMap.entries();
    }
}