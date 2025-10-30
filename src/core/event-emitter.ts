import { TinyEmitter } from "tiny-emitter";

/**
 * 事件触发器
 */
let emitter: TinyEmitter = new TinyEmitter();

export {
    TinyEmitter,
    /**
     * 事件触发器
     * @example```js
     * emitter.on("eventName", (data) => {})
     * emitter.emit("eventName", data)
     * emitter.off("eventName", (data) => {})
     * emitter.once("eventName", (data) => {})
     * 
     * on(event: string, callback: Function, ctx?: any): this;
     * once(event: string, callback: Function, ctx?: any): this;
     * emit(event: string, ...args: any[]): this;
     * off(event: string, callback?: Function): this;
     * ```
     */
    emitter
}