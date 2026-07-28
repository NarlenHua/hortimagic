import { Emitter } from "./Emitter";
import { store } from "./store";

/**
 * 日志工具
 */
export const logTools = {
    /**
     * 日志事件触发器
     * 每次日志输出时都会触发'log'|'debug'|'info'|'warn'|'error'事件
     */
    logEmitter: new Emitter(),
    /**
     * 日志记录器
     * 根据配置中的日志级别来决定是否输出日志
     * 只有当配置的日志级别与当前输出的日志级别匹配时才会输出日志
     */
    logger: {
        /**
         * 记录普通日志
         * 只有在配置的日志级小于等于DEBUG时才会输出
         * @param args 要输出的参数
         */
        log(...args: any[]): void {
            if (store.HortimagicStore.logFlag.log) {
                logTools.logEmitter.emit('log', ...args);
                console.log(...args);
            }
        },
        /**
         * 输出调试日志
         * 仅在配置的日志级别小于等于DEBUG时才会输出
         * @param args 要输出的参数
         */
        debug(...args: any[]): void {
            if (store.HortimagicStore.logFlag.debug) {
                logTools.logEmitter.emit('debug', ...args);
                console.debug(...args);
            }
        },
        /**
         * 输出信息日志
         * 仅在配置的日志级别小于等于INFO时才会输出
         * @param args 要输出的参数
         */
        info(...args: any[]): void {
            if (store.HortimagicStore.logFlag.info) {
                logTools.logEmitter.emit('info', ...args);
                console.info(...args);
            }
        },
        /**
         * 输出警告日志
         * 仅在配置的日志级别小于等于WARN时才会输出
         * @param args 要输出的参数
         */
        warn(...args: any[]): void {
            if (store.HortimagicStore.logFlag.warn) {
                logTools.logEmitter.emit('warn', ...args);
                console.warn(...args);
            }
        },
        /**
         * 输出错误日志
         * 仅在配置的日志级别小于等于ERROR时才会输出
         * @param args 要输出的参数
         */
        error(...args: any[]): void {
            if (store.HortimagicStore.logFlag.error) {
                logTools.logEmitter.emit('error', ...args);
                console.error(...args);
            }
        },
    }
}