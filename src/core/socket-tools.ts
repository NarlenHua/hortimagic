import { information } from "../main";
import { decoder } from "./decoder";
import { Emitter } from "./Emitter";
import { logTools } from "./log-tools";
import { store } from "./store";
import { tools } from "./tools";

const Tag = 'socket-tools';

/**
 * socket工具集合
 */
export const socketTools = {
    messageEmitter: new Emitter(),
    /** 发送前的处理函数 */
    async beforeSend(message: string): Promise<string | null> { return message; },
    /** 原始发送函数 */
    originalSend(message: string) { return message; },
    /** 发送后的处理函数 */
    afterSend(message: string) { return message; },
    /** 发送消息函数 */
    async send(message: string) {
        if (store.HortimagicStore.messageLogFlag.send) logTools.logger.debug(Tag, '发送', { message });
        let temp = await socketTools.beforeSend(message);
        try {
            if (temp != null) {
                socketTools.originalSend(temp);
                socketTools.afterSend(temp);
            }
        } catch (error) {
            logTools.logger.error(Tag, error);
        }
    },
    /** 接收前的处理函数 */
    async beforeOnmessage(message: string): Promise<string | null> {
        if (store.HortimagicStore.messageLogFlag.decode) logTools.logger.debug(Tag, '解码', { message });
        decoder.decodeMessage(message);
        return message;
    },
    /** 原始接收函数 */
    originalOnmessage(message: string) { return message; },
    /** 接收后的处理函数 */
    async afterOnmessage(message: string) {
        for (let messageObj of decoder.messageObjList) {
            /** 如果允许消息解析日志输出 */
            if (information.messageDebug && store.HortimagicStore.messageLogFlag.emit) {
                logTools.logger.debug(Tag, `触发${decoder.judegMessageClass(messageObj)}消息`, {
                    messageObj,
                    message
                });
            }
            socketTools.messageEmitter.emit(decoder.judegMessageClass(messageObj), messageObj)
        };
        return message;
    },
    /** 接收消息函数 */
    async onmessage(message: string) {
        if (store.HortimagicStore.messageLogFlag.receive) { logTools.logger.debug(Tag, '接收', { message }); }
        let temp = await socketTools.beforeOnmessage(message);
        try {
            if (temp != null) {
                socketTools.originalOnmessage(temp);
                // 不等待异步函数实现“多线程”的目的
                socketTools.afterOnmessage(temp);
            }
        } catch (error) {
            logTools.logger.error('捕获到错误', error);
        }
    },
    /** 初始化socket */
    async initSocket() {
        logTools.logger.debug(Tag, '代理网络');
        for (let index = 0; index < 30; index++) {
            try {
                logTools.logger.debug(Tag, '等待网络连接', index);
                // @ts-ignore
                if (window["socket"].__onmessage == undefined && window["socket"]._onmessage != undefined && window["socket"].send != undefined) {
                    logTools.logger.debug(Tag, '网络连接成功');
                    break;
                }
                else {
                    // 等待一下
                    await tools.sleep(500);
                    continue;
                }
            } catch (error) {
                logTools.logger.error(Tag, error);
            }
        }
        // @ts-ignore
        if (window["socket"].__onmessage == undefined && window["socket"]._onmessage != undefined && window["socket"].send != undefined) {
        } else {
            logTools.logger.error('连接失败')
            return;
        }
        // 等待一下
        // await sleep(500);
        // 发送
        // @ts-ignore
        socketTools.originalSend = window["socket"].send;
        // 覆写原来的发送函数
        // @ts-ignore
        window["socket"].send = socketTools.send;
        // 接收
        // @ts-ignore
        socketTools.originalOnmessage = window["socket"]._onmessage;
        // 覆写接收函数
        // @ts-ignore
        window["socket"]._onmessage = socketTools.onmessage;
    }



}
