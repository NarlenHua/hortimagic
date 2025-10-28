/** 移动面板容器 */
export let movePanelHolder: HTMLDivElement = document.createElement('div');

/** 初始化移动面板容器 */
export function initMovePanelHolder() {
    movePanelHolder.id = 'hmMovePanelHolder';
    movePanelHolder.style.zIndex = '999999';
    document.body.append(movePanelHolder);
}