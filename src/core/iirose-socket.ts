import { decodeMessage, messageObjList } from "./decoder";
import { emitter } from "./event-emitter";
import { sleep } from "./tools";

// 发送消息
async function beforeSend(message: string): Promise<string | null> {
    return message;
}
function originalSend(message: string) { return message; }
function afterSend(message: string) {
    return message;
}
async function send(message: string) {
    console.log('发送', { message });
    let temp = await sockets.beforeSend(message);
    try {
        if (temp != null) {
            sockets.originalSend(temp);
            sockets.afterSend(temp);
        }
    } catch (error) {
        console.error('捕获到错误', error);
    }
}
// 接收消息
async function beforeOnmessage(message: string): Promise<string | null> {
    // console.log('解码消息', { message });
    decodeMessage(message);
    return message;
}

function originalOnmessage(message: string) { return message; }
async function afterOnmessage(message: string) {
    // console.log('准备触发', message, messageObjList);
    for (let messageObj of messageObjList) {
        console.log(`触发${messageObj.messageClass}事件`, {
            message,
            messageObj
        });
        emitter.emit(messageObj.messageClass, messageObj)
    };
    return message;
}
async function onmessage(message: string) {
    // console.log('接收', { message });
    let temp = await sockets.beforeOnmessage(message);
    try {
        if (temp != null) {
            sockets.originalOnmessage(temp);
            // 不等待异步函数实现“多线程”的目的
            sockets.afterOnmessage(temp);
        }
    } catch (error) {
        console.error('捕获到错误', error);
    }
}


// 初始化fSocket
async function initSocket() {
    console.debug('代理网络');
    for (let index = 0; index < 30; index++) {
        try {
            console.debug('等待网络连接', index);
            // @ts-ignore
            if (window["socket"].__onmessage == undefined && window["socket"]._onmessage != undefined && window["socket"].send != undefined) {
                console.debug('网络连接成功');
                break;
            }
            else {
                // 等待一下
                await sleep(500);
                continue;
            }
        } catch (error) {
            console.error(error);
        }
    }
    // @ts-ignore
    if (window["socket"].__onmessage == undefined && window["socket"]._onmessage != undefined && window["socket"].send != undefined) {
    } else {
        console.error('连接失败')
        return;
    }
    // 等待一下
    // await sleep(500);
    // 发送
    // @ts-ignore
    sockets.originalSend = window["socket"].send;
    // 覆写原来的发送函数
    // @ts-ignore
    window["socket"].send = sockets.send;
    // 接收
    // @ts-ignore
    sockets.originalOnmessage = window["socket"]._onmessage;
    // 覆写接收函数
    // @ts-ignore
    window["socket"]._onmessage = sockets.onmessage;
}
const sockets = {
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
export {
    sockets,
    initSocket
}

