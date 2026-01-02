/**
 * 事件监听器类型定义，表示一个可以接收任意参数的函数
 */
type Listener = (...args: any[]) => void;

/**
 * Emitter 类提供事件驱动的编程模式，允许对象间通过事件进行通信
 * 支持事件监听、取消监听、一次性监听和事件触发功能
 */
export class Emitter {
    /**
     * 存储事件名称和对应监听器数组的映射
     * @private
     */
    private events: { [key: string]: Listener[] } = {};

    /**
     * 为指定事件添加监听器
     * @param eventName 事件名称
     * @param listener 事件触发时要调用的回调函数
     * @example
     * ```ts
     * const emitter = new Emitter();
     * emitter.on('test', (data) => console.log('接收到数据:', data));
     * emitter.emit('test', { message: 'Hello' }); // 输出: 接收到数据: { message: 'Hello' }
     * ```
     */
    on(eventName: string, listener: Listener): void {
        if (!this.events[eventName]) this.events[eventName] = [];
        this.events[eventName].push(listener);
    }

    /**
     * 移除指定事件的监听器
     * @param eventName 事件名称
     * @param listener 要移除的监听器函数，如果未提供则移除该事件的所有监听器
     * @example
     * ```ts
     * const emitter = new Emitter();
     * const listener = (data) => console.log(data);
     * emitter.on('test', listener);
     * emitter.off('test', listener); // 移除特定监听器
     * emitter.off('test'); // 移除所有 'test' 事件的监听器
     * ```
     */
    off(eventName: string, listener?: Listener): void {
        if (!this.events[eventName]) return;
        if (listener) {
            this.events[eventName] = this.events[eventName].filter(fn => fn !== listener);
        } else {
            delete this.events[eventName];
        }
    }

    /**
     * 为指定事件添加一次性监听器，监听器在第一次触发后将被移除
     * @param eventName 事件名称
     * @param listener 事件触发时要调用的回调函数，只执行一次
     * @example
     * ```ts
     * const emitter = new Emitter();
     * emitter.once('start', () => console.log('仅执行一次'));
     * emitter.emit('start'); // 输出: 仅执行一次
     * emitter.emit('start'); // 没有输出，因为监听器已被移除
     * ```
     */
    once(eventName: string, listener: Listener): void {
        const onceWrapper: Listener = (...args) => {
            listener(...args);
            this.off(eventName, onceWrapper);
        };
        this.on(eventName, onceWrapper);
    }

    /**
     * 触发指定事件，并传递参数给监听器
     * @param eventName 事件名称
     * @param args 传递给监听器的参数
     * @returns 如果至少有一个监听器被调用则返回 true，否则返回 false
     * @example
     * ```ts
     * const emitter = new Emitter();
     * emitter.on('greet', (name, age) => console.log(`你好 ${name}, 你 ${age} 岁了`));
     * emitter.emit('greet', '小明', 25); // 输出: 你好 小明, 你 25 岁了
     * ```
     */
    emit(eventName: string, ...args: any[]): boolean {
        const listeners = this.events[eventName];
        if (!listeners || listeners.length === 0) return false;
        // 使用副本防止遍历时修改
        [...listeners].forEach(fn => fn(...args));
        return true;
    }
}

// 以下是完整的使用示例
/*
// 示例1：基本事件监听和触发
const emitter = new Emitter();

// 监听事件
emitter.on('dataReceived', (data) => {
  console.log('收到数据:', data);
});

// 触发事件
emitter.emit('dataReceived', { id: 1, value: 'example' }); // 输出: 收到数据: { id: 1, value: 'example' }

// 示例2：一次性事件监听
emitter.once('startup', () => {
  console.log('系统启动了一次');
});

emitter.emit('startup'); // 输出: 系统启动了一次
emitter.emit('startup'); // 无输出，因为once的监听器已被移除

// 示例3：移除监听器
const handler = (msg) => console.log('消息:', msg);
emitter.on('message', handler);
emitter.emit('message', '测试消息'); // 输出: 消息: 测试消息

emitter.off('message', handler); // 移除特定监听器
emitter.emit('message', '这不会被处理'); // 无输出

// 示例4：多个监听器
emitter.on('multiEvent', () => console.log('第一个监听器'));
emitter.on('multiEvent', () => console.log('第二个监听器'));
emitter.emit('multiEvent'); // 输出: 第一个监听器 和 第二个监听器
*/