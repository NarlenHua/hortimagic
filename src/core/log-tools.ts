import { BareEmitter } from "./Emitter-Store";
import { logLevel, allowLogging } from "./store";
/**
 * 日志级别枚举
 * 定义了不同级别的日志，用于控制日志输出
 */
export const LogLevel = {
    /** 普通日志级别 */
    LOG: 0,
    /** 调试日志级别 */
    DEBUG: 1,
    /** 信息日志级别 */
    INFO: 2,
    /** 警告日志级别 */
    WARN: 3,
    /** 错误日志级别 */
    ERROR: 4,
};
/**
 * 日志事件发射器
 * 每次日志输出时都会触发'log'事件
 */
export const logEmitter = new BareEmitter();
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
        if (logLevel.value <= LogLevel.LOG && allowLogging) {
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
        if (logLevel.value <= LogLevel.DEBUG && allowLogging) {
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
        if (logLevel.value <= LogLevel.INFO && allowLogging) {
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
        if (logLevel.value <= LogLevel.WARN && allowLogging) {
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
        if (logLevel.value <= LogLevel.ERROR && allowLogging) {
            logEmitter.emit('log', tag, ...args);
            console.error(tag, ...args);
        }
    },
};