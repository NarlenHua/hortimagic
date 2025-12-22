type Listener = (...args: any[]) => void;

/**
 * 事件触发器类，用于管理事件的订阅和发布
 * 
 * @example
 * ```typescript
 * const emitter = new EventEmitter();
 * 
 * // 订阅事件
 * emitter.on('data', (message) => {
 *   console.log('Received:', message);
 * });
 * 
 * // 发布事件
 * emitter.emit('data', 'Hello World');
 * 
 * // 订阅一次性事件
 * emitter.once('startup', () => {
 *   console.log('Startup event triggered');
 * });
 * 
 * // 取消订阅特定监听器
 * const listener = (data) => console.log(data);
 * emitter.on('update', listener);
 * emitter.off('update', listener);
 * 
 * // 取消订阅整个事件
 * emitter.off('update');
 * ```
 */
export class EventEmitter {
    private events: Map<string, Set<Listener>> = new Map();

    /**
     * 添加事件监听器
     * @param event 事件名称
     * @param listener 监听器函数
     * @returns 返回当前实例，支持链式调用
     * 
     * @example
     * ```typescript
     * const emitter = new EventEmitter();
     * 
     * // 添加监听器
     * emitter.on('click', (data) => {
     *   console.log('Button clicked with data:', data);
     * });
     * 
     * // 链式调用
     * emitter
     *   .on('event1', () => console.log('Event 1'))
     *   .on('event2', () => console.log('Event 2'));
     * ```
     */
    on(event: string, listener: Listener): this {
        if (!this.events.has(event)) {
            this.events.set(event, new Set());
        }
        this.events.get(event)!.add(listener);
        return this;
    }

    /**
     * 添加一次性事件监听器，触发后自动移除
     * @param event 事件名称
     * @param listener 监听器函数
     * @returns 返回当前实例，支持链式调用
     * 
     * @example
     * ```typescript
     * const emitter = new EventEmitter();
     * 
     * // 添加一次性监听器
     * emitter.once('initialized', () => {
     *   console.log('Initialized - this will only run once');
     * });
     * 
     * emitter.emit('initialized'); // 输出: Initialized - this will only run once
     * emitter.emit('initialized'); // 无输出
     * ```
     */
    once(event: string, listener: Listener): this {
        const onceWrapper: Listener = (...args: any[]) => {
            listener(...args);
            this.off(event, onceWrapper);
        };
        return this.on(event, onceWrapper);
    }

    /**
     * 移除事件监听器
     * @param event 事件名称
     * @param listener 可选，指定要移除的监听器函数，如果不提供则移除该事件的所有监听器
     * @returns 返回当前实例，支持链式调用
     * 
     * @example
     * ```typescript
     * const emitter = new EventEmitter();
     * 
     * const handler = (data) => console.log(data);
     * emitter.on('data', handler);
     * 
     * // 移除特定监听器
     * emitter.off('data', handler);
     * 
     * // 移除事件的所有监听器
     * emitter.off('data');
     * ```
     */
    off(event: string, listener?: Listener): this {
        if (!this.events.has(event)) return this;

        if (listener) {
            this.events.get(event)!.delete(listener);
        } else {
            this.events.delete(event); // 移除所有该事件的监听器
        }
        return this;
    }

    /**
     * 触发事件
     * @param event 事件名称
     * @param args 传递给监听器的参数
     * @returns 如果有监听器则返回true，否则返回false
     * 
     * @example
     * ```typescript
     * const emitter = new EventEmitter();
     * 
     * emitter.on('greet', (name, age) => {
     *   console.log(`Hello ${name}, you are ${age} years old`);
     * });
     * 
     * // 触发事件并传递参数
     * emitter.emit('greet', 'Alice', 30);
     * ```
     */
    emit(event: string, ...args: any[]): boolean {
        const listeners = this.events.get(event);
        if (!listeners || listeners.size === 0) return false;

        listeners.forEach(fn => fn(...args));
        return true;
    }
}