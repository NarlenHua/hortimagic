
/**
 * 容器元素
 */
export const holders = {

    /** 弹窗容器 */
    dialogHolder: document.createElement('div') as HTMLDivElement,

    /** 初始化弹窗容器 */
    initDialogHolder() {
        holders.dialogHolder.id = 'hmDialogHolder';
        holders.dialogHolder.style.zIndex = '999999';
        document.body.append(holders.dialogHolder);
    },
    /** 菜单容器 */
    menuHolder: document.createElement('div') as HTMLDivElement,

    /** 初始化菜单容器 */
    initMenuHolder() {
        holders.menuHolder.id = 'hmMenuHolder';
        let img = document.querySelector('#functionHolderImg');
        // console.debug(img)
        // console.debug(holders.menuHolder);
        if (img !== null && img.parentElement !== null) {

            img.parentElement.insertAdjacentElement('afterend', holders.menuHolder);
        }
        // // 将menuHolder插入到img元素的父元素之后
        // if (img && img.parentElement) {
        //     img.parentElement.insertAdjacentElement('afterend', menuHolder);
        // } else {
        //     document.body.append(menuHolder);
        // }
    },
    /** 移动面板容器 */
    movePanelHolder: document.createElement('div') as HTMLDivElement,

    /** 初始化移动面板容器 */
    initMovePanelHolder() {
        holders.movePanelHolder.id = 'hmMovePanelHolder';
        holders.movePanelHolder.style.zIndex = '999999';
        document.body.append(holders.movePanelHolder);
    },
    /** 渲染的容器元素 */
    notificationHolder: document.createElement('div') as HTMLDivElement,

    /** 初始化通知容器 */
    initNotificationHolder() {
        holders.notificationHolder.id = 'hmNotificationHolder';
        holders.notificationHolder.style.zIndex = '999999';
        document.body.append(holders.notificationHolder);
    }
}