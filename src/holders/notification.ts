/** 渲染的容器元素 */
let notificationHolder: HTMLDivElement = document.createElement('div');;

/** 初始化通知容器 */
function initNotificationHolder() {
    notificationHolder.id = 'hmNotificationHolder';
    notificationHolder.style.zIndex = '999999';
    document.body.append(notificationHolder);
}

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

export {
    initNotificationHolder,
    notificationHolder,
    notice
}