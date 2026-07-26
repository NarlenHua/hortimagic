/**
 * 基于组件等组成的工具
 */

import { holders } from "./core/holders";
import { dialogApp } from "./apps/dialog-app";
export const easyTools = {
    /**
     * 消失通知函数
     * @example
     * ```javascript
     * // 显示成功通知
     * hortimagic.easy_tools.notice.success('操作成功', '您的操作已成功完成');
     * 
     * // 显示警告通知
     * hortimagic.easy_tools.notice.warning('警告', '请注意检查输入信息', 5000);
     * 
     * // 显示错误通知
     * hortimagic.easy_tools.notice.error('错误', '操作失败，请重试');
     * 
     * // 显示普通通知
     * hortimagic.easy_tools.notice.normal('提示', '这是一条普通提示信息');
     * ```
     */
    notice: {
        /**
         * 显示成功通知
         * 创建并显示一个成功状态的通知组件
         * @param title - 通知的标题文本
         * @param content - 通知的内容文本
         * @param displayTime - 通知显示的时间（毫秒），默认为3000毫秒
         * @returns 无返回值
         */
        success(title: string, content: string, displayTime: number = 3000) {
            let notice = document.createElement('hm-notification');
            notice.title = title;
            notice.content = content;
            notice.displayTime = displayTime;
            notice.backgroundColor = 'rgba(57, 231, 34, 0.7)';
            notice.color = 'rgb(255,255,255)';
            holders.notificationHolder.append(notice);
        },
        /**
         * 显示警告通知
         * 创建并显示一个警告状态的通知组件
         * @param title - 通知的标题文本
         * @param content - 通知的内容文本
         * @param displayTime - 通知显示的时间（毫秒），默认为3000毫秒
         * @returns 无返回值
         */
        warning(title: string, content: string, displayTime: number = 3000) {
            let notice = document.createElement('hm-notification');
            notice.title = title;
            notice.content = content;
            notice.displayTime = displayTime;
            notice.backgroundColor = 'rgba(255,193,7,0.7)';
            notice.color = 'rgb(255,255,255)';
            holders.notificationHolder.append(notice);
        },
        /**
         * 显示错误通知
         * 创建并显示一个错误状态的通知组件
         * @param title - 通知的标题文本
         * @param content - 通知的内容文本
         * @param displayTime - 通知显示的时间（毫秒），默认为3000毫秒
         * @returns 无返回值
         */
        error(title: string, content: string, displayTime: number = 3000) {
            let notice = document.createElement('hm-notification');
            notice.title = title;
            notice.content = content;
            notice.displayTime = displayTime;
            notice.backgroundColor = 'rgba(255,0,0,0.7)';
            notice.color = 'rgb(255,255,255)';
            holders.notificationHolder.append(notice);
        },
        /**
         * 显示普通通知
         * 创建并显示一个普通状态的通知组件
         * @param title - 通知的标题文本
         * @param content - 通知的内容文本
         * @param displayTime - 通知显示的时间（毫秒），默认为3000毫秒
         * @returns 无返回值
         */
        normal(title: string, content: string, displayTime: number = 3000) {
            let notice = document.createElement('hm-notification');
            notice.title = title;
            notice.content = content;
            notice.displayTime = displayTime;
            notice.backgroundColor = 'rgba(33,33,33,0.7)';
            notice.color = 'rgb(255,255,255)';
            holders.notificationHolder.append(notice);
        }
    },
    /**
     * 确认弹窗函数
     * @param message 消息提示
     * @param confirmCallback 选择确认时的回调函数
     * @param cancelCallback 选择取消时的回调函数
     * @param closeCallback 关闭弹窗时的回调函数
     * @example ```javascript
     * hortimagic.easy_tools.confirm('hhhhhhhhhhhhhh',()=>{console.log('qqqqqqqqqqq')},()=>{console.log('cccccccccccc')})
     * ``` 
     */
    confirm(message: string, confirmCallback?: Function, cancelCallback?: Function, closeCallback?: Function) {
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
}
/**
 * 简单快速工具集
 * @example
 * ```javascript
 * // 显示不同类型的通知
 * hortimagic.easy_tools.notice.success('操作成功', '您的操作已成功完成');
 * hortimagic.easy_tools.notice.warning('警告', '请注意检查输入信息', 5000);
 * hortimagic.easy_tools.notice.error('错误', '操作失败，请重试');
 * hortimagic.easy_tools.notice.normal('提示', '这是一条普通提示信息');
 * 
 * // 显示确认对话框
 * hortimagic.easy_tools.confirm(
 *   '您确定要执行此操作吗？', 
 *   () => { console.log('用户点击了确认'); }, 
 *   () => { console.log('用户点击了取消'); },
 *   () => { console.log('对话框已关闭'); }
 * );
 * ```
 */