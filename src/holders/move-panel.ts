/** 移动面板容器 */
export let movePanelHolder: HTMLDivElement = document.createElement('div');

/** 初始化移动面板容器 */
export function initMovePanelHolder() {
    movePanelHolder.id = 'hmMovePanelHolder';
    document.body.append(movePanelHolder);
}