/**
 * 基于组件等组成的工具
 */

import { notificationHolder } from "../holders/notification";
import { dialogApp } from "./dialog-app";

/**
 * 消失通知函数
 */
let notice = {
    success(title: string, content: string, displayTime: number = 2000) {
        let notice = document.createElement('hm-notification');
        notice.title = title;
        notice.content = content;
        notice.displayTime = displayTime;
        notice.backgroundColor = 'rgba(57, 231, 34, 0.7)';
        notice.color = 'rgb(255,255,255)';
        notificationHolder.append(notice);
    },
    warning(title: string, content: string, displayTime: number = 2000) {
        let notice = document.createElement('hm-notification');
        notice.title = title;
        notice.content = content;
        notice.displayTime = displayTime;
        notice.backgroundColor = 'rgba(255,193,7,0.7)';
        notice.color = 'rgb(255,255,255)';
        notificationHolder.append(notice);
    },
    error(title: string, content: string, displayTime: number = 2000) {
        let notice = document.createElement('hm-notification');
        notice.title = title;
        notice.content = content;
        notice.displayTime = displayTime;
        notice.backgroundColor = 'rgba(255,0,0,0.7)';
        notice.color = 'rgb(255,255,255)';
        notificationHolder.append(notice);
    },
    normal(title: string, content: string, displayTime: number = 2000) {
        let notice = document.createElement('hm-notification');
        notice.title = title;
        notice.content = content;
        notice.displayTime = displayTime;
        notice.backgroundColor = 'rgba(33,33,33,0.7)';
        notice.color = 'rgb(255,255,255)';
        notificationHolder.append(notice);
    }
}
/**
 * 确认弹窗函数
 * @param message 消息提示
 * @param confirmCallback 选择确认时的回调函数
 * @param cancelCallback 选择取消时的回调函数
 * @param closeCallback 关闭弹窗时的回调函数
 * @example ```javascript
 * hortimagic.apps.app_tools.confirm('hhhhhhhhhhhhhh',()=>{console.log('qqqqqqqqqqq')},()=>{console.log('cccccccccccc')})
 * ``` 
 */
function confirm(message: string, confirmCallback?: Function, cancelCallback?: Function, closeCallback?: Function) {
    dialogApp.message = message;
    if (confirmCallback)
        dialogApp.confirmCallback = confirmCallback;
    else
        dialogApp.confirmCallback = null;
    if (cancelCallback)
        dialogApp.cancelCallback = cancelCallback;
    else
        dialogApp.cancelCallback = null;
    if (closeCallback)
        dialogApp.closeCallback = closeCallback;
    else
        dialogApp.closeCallback = null;
    dialogApp.dialogOpen = true;
    console.debug('弹窗已打开', dialogApp)
}

export {
    notice,
    confirm
}