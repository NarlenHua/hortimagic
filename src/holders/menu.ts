/** 菜单容器 */
export let menuHolder: HTMLDivElement = document.createElement('div');

/** 初始化菜单容器 */
export function initMenuHolder() {
    menuHolder.id = 'hmMenuHolder';
    let img = document.querySelector('#functionHolderImg');
    console.debug(img)
    console.debug(menuHolder);
    if (img !== null) {
        //@ts-ignore
        img.parentElement.insertAdjacentElement('afterend', menuHolder);
    }
    // // 将menuHolder插入到img元素的父元素之后
    // if (img && img.parentElement) {
    //     img.parentElement.insertAdjacentElement('afterend', menuHolder);
    // } else {
    //     document.body.append(menuHolder);
    // }
}