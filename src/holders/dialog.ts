/** 移动面板容器 */
export let dialogHolder: HTMLDivElement = document.createElement('div');

/** 初始化移动面板容器 */
export function initDialogHolder() {
    dialogHolder.id = 'hmDialogHolder';
    document.body.append(dialogHolder);
}