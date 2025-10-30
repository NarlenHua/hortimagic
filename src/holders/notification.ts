/** 渲染的容器元素 */
let notificationHolder: HTMLDivElement = document.createElement('div');;

/** 初始化通知容器 */
function initNotificationHolder() {
    notificationHolder.id = 'hmNotificationHolder';
    notificationHolder.style.zIndex = '999999';
    document.body.append(notificationHolder);
}



export {
    initNotificationHolder,
    notificationHolder,
}