import { decodeMessage, judegMessageClass, messageObjList } from "./decoder";
import { Emitter } from "./Emitter";
import { logger } from "./log-tools";
import { HortimagicStore } from "./store";
import { sleep } from "./tools";

const Tag = 'socket-tools';
export const messageEmitter = new Emitter();
// 发送消息
async function beforeSend(message: string): Promise<string | null> {
    return message;
}
function originalSend(message: string) { return message; }
function afterSend(message: string) {
    return message;
}
async function send(message: string) {
    if (HortimagicStore.messageLogFlag.send) logger.debug(Tag, '发送', { message });
    let temp = await socketTools.beforeSend(message);
    try {
        if (temp != null) {
            socketTools.originalSend(temp);
            socketTools.afterSend(temp);
        }
    } catch (error) {
        logger.error(Tag, error);
    }
}
// 接收消息
async function beforeOnmessage(message: string): Promise<string | null> {
    if (HortimagicStore.messageLogFlag.decode) logger.debug(Tag, '解码', { message });
    decodeMessage(message);
    return message;
}

function originalOnmessage(message: string) { return message; }
async function afterOnmessage(message: string) {
    // logger.debug(Tag,'准备触发', message, messageObjList);
    for (let messageObj of messageObjList) {
        if (HortimagicStore.messageLogFlag.emit) {
            logger.debug(Tag, `触发${judegMessageClass(messageObj)}消息`, {
                message,
                messageObj
            });
        }
        messageEmitter.emit(judegMessageClass(messageObj), messageObj)
    };
    return message;
}
async function onmessage(message: string) {
    if (HortimagicStore.messageLogFlag.receive) { logger.debug(Tag, '接收', { message }); }
    let temp = await socketTools.beforeOnmessage(message);
    try {
        if (temp != null) {
            socketTools.originalOnmessage(temp);
            // 不等待异步函数实现“多线程”的目的
            socketTools.afterOnmessage(temp);
        }
    } catch (error) {
        logger.error('捕获到错误', error);
    }
}


// 初始化fSocket
export async function initSocket() {
    logger.debug(Tag, '代理网络');
    for (let index = 0; index < 30; index++) {
        try {
            logger.debug(Tag, '等待网络连接', index);
            // @ts-ignore
            if (window["socket"].__onmessage == undefined && window["socket"]._onmessage != undefined && window["socket"].send != undefined) {
                logger.debug(Tag, '网络连接成功');
                break;
            }
            else {
                // 等待一下
                await sleep(500);
                continue;
            }
        } catch (error) {
            logger.error(Tag, error);
        }
    }
    // @ts-ignore
    if (window["socket"].__onmessage == undefined && window["socket"]._onmessage != undefined && window["socket"].send != undefined) {
    } else {
        logger.error('连接失败')
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
export const socketTools = {
    beforeSend,
    originalSend,
    afterSend,
    send,
    beforeOnmessage,
    originalOnmessage,
    afterOnmessage,
    onmessage,
    initSocket
}


