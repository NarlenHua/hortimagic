import { Emitter } from "./Emitter";
import { HortimagicStore } from "./store";
/**
 * 日志事件发射器
 * 每次日志输出时都会触发'log'事件
 */
export const logEmitter = new Emitter();
/**
 * 日志记录器
 * 根据配置中的日志级别来决定是否输出日志
 * 只有当配置的日志级别与当前输出的日志级别匹配时才会输出日志
 */
export const logger = {
    /**
     * 记录普通日志
     * 只有在配置的日志级小于等于DEBUG时才会输出
     * @param args 要输出的参数
     */
    log(tag: string, ...args: any[]): void {
        if (HortimagicStore.logFlag.log) {
            logEmitter.emit('log', tag, ...args);
            console.log(tag, ...args);
        }
    },
    /**
     * 输出调试日志
     * 仅在配置的日志级别小于等于DEBUG时才会输出
     * @param args 要输出的参数
     */
    debug(tag: string, ...args: any[]): void {
        if (HortimagicStore.logFlag.debug) {
            logEmitter.emit('log', tag, ...args);
            console.debug(tag, ...args);
        }
    },
    /**
     * 输出信息日志
     * 仅在配置的日志级别小于等于INFO时才会输出
     * @param args 要输出的参数
     */
    info(tag: string, ...args: any[]): void {
        if (HortimagicStore.logFlag.info) {
            logEmitter.emit('log', tag, ...args);
            console.info(tag, ...args);
        }
    },
    /**
     * 输出警告日志
     * 仅在配置的日志级别小于等于WARN时才会输出
     * @param args 要输出的参数
     */
    warn(tag: string, ...args: any[]): void {
        if (HortimagicStore.logFlag.warn) {
            logEmitter.emit('log', tag, ...args);
            console.warn(tag, ...args);
        }
    },
    /**
     * 输出错误日志
     * 仅在配置的日志级别小于等于ERROR时才会输出
     * @param args 要输出的参数
     */
    error(tag: string, ...args: any[]): void {
        if (HortimagicStore.logFlag.error) {
            logEmitter.emit('log', tag, ...args);
            console.error(tag, ...args);
        }
    },
};