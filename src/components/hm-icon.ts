import { LitElement, css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { unsafeSVG } from 'lit/directives/unsafe-svg.js';

/** 存储图标的map类型数据
 * key: 图标名称
 * value: 图标svg代码
 * 遍历图标名称的方式如下：
 * @example
 * for (const [iconName, iconSvg] of iconMap) {}
 */
export const iconMap = new Map([
    ['magic-wand', '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m12.64 1.87l-.84 2.48a.41.41 0 0 0 0 .37l1.57 2.1a.4.4 0 0 1-.33.64h-2.62a.43.43 0 0 0-.33.17l-1.46 2.1a.4.4 0 0 1-.71-.11l-.78-2.5a.38.38 0 0 0-.26-.26l-2.5-.78a.4.4 0 0 1-.11-.71l2.14-1.51a.43.43 0 0 0 .17-.33V.91a.4.4 0 0 1 .6-.33l2.1 1.57a.41.41 0 0 0 .37.05l2.48-.84a.4.4 0 0 1 .51.51m-5.6 5.09L.5 13.5" stroke-width="1"/></svg>'],
    ['close', '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M6.4 19L5 17.6l5.6-5.6L5 6.4L6.4 5l5.6 5.6L17.6 5L19 6.4L13.4 12l5.6 5.6l-1.4 1.4l-5.6-5.6z"/></svg>'],
    ['open', '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M4 21q-.425 0-.712-.288T3 20v-6q0-.425.288-.712T4 13t.713.288T5 14v3.6L17.6 5H14q-.425 0-.712-.288T13 4t.288-.712T14 3h6q.425 0 .713.288T21 4v6q0 .425-.288.713T20 11t-.712-.288T19 10V6.4L6.4 19H10q.425 0 .713.288T11 20t-.288.713T10 21z"/></svg>'],
    ['led-on', '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M11 0v4h2V0zm7.3 2.29l-3.06 3l1.4 1.42l3.06-3zm-12.59 0L4.29 3.71l3 3l1.42-1.42zM12 6a4 4 0 0 0-4 4v6H6v2h3v5h2v-5h2v5h2v-5h3v-2h-2v-6a4 4 0 0 0-4-4M2 9v2h4V9zm16 0v2h4V9z"/></svg>'],
    ['led-off', '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M12 6a4 4 0 0 0-4 4v6H6v2h3v5h2v-5h2v5h2v-5h3v-2h-2v-6a4 4 0 0 0-4-4"/></svg>'],
    ['arrow-up', '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M16.21 16H7.79a1.76 1.76 0 0 1-1.59-1a2.1 2.1 0 0 1 .26-2.21l4.21-5.1a1.76 1.76 0 0 1 2.66 0l4.21 5.1A2.1 2.1 0 0 1 17.8 15a1.76 1.76 0 0 1-1.59 1"/></svg>'],
    ['arrow-down', '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M12 17a1.72 1.72 0 0 1-1.33-.64l-4.21-5.1a2.1 2.1 0 0 1-.26-2.21A1.76 1.76 0 0 1 7.79 8h8.42a1.76 1.76 0 0 1 1.59 1.05a2.1 2.1 0 0 1-.26 2.21l-4.21 5.1A1.72 1.72 0 0 1 12 17"/></svg>'],
    ['template', '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><defs><mask id="SVGZZ153dkC"><path fill="#4d4d4d" stroke="#fff" stroke-linejoin="round" stroke-width="4" d="M23 4H4v22h19zm21 30H4v9h40zm0-30H31v8h13zm0 14H31v8h13z"/></mask></defs><path fill="currentColor" d="M0 0h48v48H0z" mask="url(#SVGZZ153dkC)"/></svg>'],
    ['js', '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path fill="currentColor" d="M10.77 7.3h.002c1.045.393 2.479.93 2.479 2.45a2.5 2.5 0 0 1-.224 1.02a2.5 2.5 0 0 1-1.515 1.364a2.5 2.5 0 0 1-1.035.115a2 2 0 0 1-.214.012a2.5 2.5 0 0 1-1.673-.65a2.52 2.52 0 0 1-.838-1.859c0-.202.078-.39.22-.532a.77.77 0 0 1 1.06 0a.74.74 0 0 1 .221.53c0 .952 1.041 1 1.25 1s1.25-.048 1.25-1c0-.413-.447-.648-1.514-1.048h-.003C9.19 8.307 7.753 7.77 7.753 6.25q.005-.537.224-1.02a2.5 2.5 0 0 1 .614-.842a2.5 2.5 0 0 1 .9-.52a3.5 3.5 0 0 1 2.023 0a2.52 2.52 0 0 1 1.738 2.381c0 .201-.078.39-.22.531a.77.77 0 0 1-1.061 0a.74.74 0 0 1-.22-.53c0-.952-1.041-1-1.25-1s-1.25.048-1.25 1c0 .413.447.648 1.514 1.048zM5.751 4.5c0-.2.078-.388.22-.53a.77.77 0 0 1 1.06 0c.142.141.22.33.22.53v5a2.75 2.75 0 0 1-4.695 1.945A2.73 2.73 0 0 1 1.75 9.5V9c0-.2.078-.388.22-.53a.77.77 0 0 1 1.061 0c.142.141.22.33.22.53v.5c0 .33.134.652.366.884c.465.465 1.303.465 1.768 0c.232-.233.366-.555.366-.884z"/></svg>'],
    ['filter', '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M3 4c2.01 2.59 7 9 7 9v7h4v-7s4.98-6.41 7-9z"/></svg>'],
    ['filter-off', '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M3.004 1.59L3 1.586L1.586 3l4.928 4.928L10 12.818V21h4v-5.585l7 7l1.41-1.41L3 1.595zm12.266 9.446L21 3H7.234z"/></svg>'],
    ['eye', '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M16 11v2h-1v1h-1v1h-1v1h-2v-1h-1v-1H9v-1H8v-2h2v-1h1V8h2v1h1v1h1v1z"/><path fill="currentColor" d="M22 11V9h-1V8h-1V7h-1V6h-2V5H7v1H5v1H4v1H3v1H2v2H1v2h1v2h1v1h1v1h1v1h2v1h10v-1h2v-1h1v-1h1v-1h1v-2h1v-2zm-4 2h-1v2h-1v1h-1v1h-2v1h-2v-1H9v-1H8v-1H7v-2H6v-2h1V9h1V8h1V7h2V6h2v1h2v1h1v1h1v2h1z"/></svg>'],
    ['eye-off', '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M2 13H1v-2h1V9h1V8h1V7h1V6h2V5h8v1h-1v1h-1V6h-2v1H9v1H8v1H7v2H6v2h1v1H6v1H5v1H3v-1H2z"/><path fill="currentColor" d="M8 11h1v1H8zm3-3h1v1h-1zm-2 9H8v1H7v1H6v1H5v1H4v1H3v-1H2v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1V9h1V8h1V7h1V6h1V5h1V4h1V3h1V2h1v1h1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1H9zm3-2h1v1h-1zm1-1h1v1h-1zm2-2h1v1h-1zm-1 1h1v1h-1z"/><path fill="currentColor" d="M23 11v2h-1v2h-1v1h-1v1h-1v1h-2v1H9v-1h1v-1h1v1h2v-1h2v-1h1v-1h1v-2h1v-2h-1v-1h1V9h1V8h2v1h1v2z"/></svg>'],
    ['config', '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="4"><path d="m24 4l-6 6h-8v8l-6 6l6 6v8h8l6 6l6-6h8v-8l6-6l-6-6v-8h-8z"/><path d="M24 30a6 6 0 1 0 0-12a6 6 0 0 0 0 12Z"/></g></svg>'],
    ['log', '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path fill="currentColor" fill-rule="evenodd" d="M3.5 2.5v11h9v-11zM3 1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zm5 10a.75.75 0 0 1 .75-.75h1.75a.75.75 0 0 1 0 1.5H8.75A.75.75 0 0 1 8 11m-2 1a1 1 0 1 0 0-2a1 1 0 0 0 0 2m2-4a.75.75 0 0 1 .75-.75h1.75a.75.75 0 0 1 0 1.5H8.75A.75.75 0 0 1 8 8M6 9a1 1 0 1 0 0-2a1 1 0 0 0 0 2m2-4a.75.75 0 0 1 .75-.75h1.75a.75.75 0 0 1 0 1.5H8.75A.75.75 0 0 1 8 5M6 6a1 1 0 1 0 0-2a1 1 0 0 0 0 2" clip-rule="evenodd"/></svg>'],
    ['edit', '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path fill="currentColor" fill-opacity="0" stroke-dasharray="44" stroke-dashoffset="44" d="M7 17v-4l10 -10l4 4l-10 10h-4"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.3s" dur="0.5s" to="0"/><animate fill="freeze" attributeName="fill-opacity" begin="1s" dur="0.15s" to="0.3"/></path><g fill="none"><path stroke-dasharray="20" d="M3 21h18"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.3s" values="20;0"/></path><path stroke-dasharray="8" stroke-dashoffset="8" d="M14 6l4 4"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.8s" dur="0.2s" to="0"/></path></g></g></svg>'],
    ['run', '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path fill="currentColor" d="M4.506 3.503L12.501 8l-8 4.5zm-.004-1.505C3.718 1.998 3 2.626 3 3.5v9c0 .874.718 1.502 1.502 1.502c.245 0 .496-.061.733-.195l8-4.5c1.019-.573 1.019-2.041 0-2.615l-8-4.499a1.5 1.5 0 0 0-.733-.195"/></svg>'],
    ['delete', '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M7 4a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2h4a1 1 0 1 1 0 2h-1.069l-.867 12.142A2 2 0 0 1 17.069 22H6.93a2 2 0 0 1-1.995-1.858L4.07 8H3a1 1 0 0 1 0-2h4zm2 2h6V4H9zM6.074 8l.857 12H17.07l.857-12zM10 10a1 1 0 0 1 1 1v6a1 1 0 1 1-2 0v-6a1 1 0 0 1 1-1m4 0a1 1 0 0 1 1 1v6a1 1 0 1 1-2 0v-6a1 1 0 0 1 1-1"/></svg>'],
    ['video', '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 15.75v-7.5a2 2 0 0 1 2-2h8.5a2 2 0 0 1 2 2v7.5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2m17.168-8.759l-4 3.563a.5.5 0 0 0-.168.373v1.778a.5.5 0 0 0 .168.373l4 3.563a.5.5 0 0 0 .832-.374V7.365a.5.5 0 0 0-.832-.374"/></svg>'],
    ['play-video', '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path fill="currentColor" d="M85.527 80.647a4.97 4.97 0 0 0 4.973-4.974V24.327a4.97 4.97 0 0 0-4.973-4.974H14.474A4.97 4.97 0 0 0 9.5 24.327v51.346a4.97 4.97 0 0 0 4.974 4.974zm-4.974-9.948H19.446V29.301h61.107z"/><path fill="currentColor" d="m64.819 50.288l-11.98 6.913l-11.974 6.917V36.462l11.974 6.918z"/></svg>'],
    ['game', '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M7.96 13.33h32.08a3.455 3.455 0 0 1 3.46 3.448v14.429a3.455 3.455 0 0 1-3.446 3.464H7.96A3.455 3.455 0 0 1 4.5 31.22V16.793a3.455 3.455 0 0 1 3.446-3.464z" stroke-width="1"/><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M13.25 16.938v5.401H8.11v3.385h5.14v5.338h3.577v-5.338h5.334V22.34h-5.334v-5.4zm19.513 9.68a2.58 2.58 0 0 1-2.582 2.583h0a2.58 2.58 0 0 1-2.58-2.583a2.582 2.582 0 1 1 5.162-.001zm7.076-5.235a2.58 2.58 0 0 1-2.58 2.584h0a2.58 2.58 0 0 1-2.583-2.583v0A2.58 2.58 0 0 1 37.26 18.8h0a2.58 2.58 0 0 1 2.581 2.583" stroke-width="1"/></svg>'],
    ['save', '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M64 48c-8.726 0-16 7.274-16 16v384c0 8.726 7.274 16 16 16h215v-16H64V64h63.375v97.53c0 3.924 3.443 7.095 7.72 7.095h169.81c4.277 0 7.72-3.17 7.72-7.094V64h69.22c.428.318.8.548 1.467 1.094c2.05 1.675 4.962 4.264 8.375 7.406c6.827 6.283 15.65 14.837 24.313 23.5s17.217 17.486 23.5 24.313c3.142 3.413 5.73 6.324 7.406 8.374c.546.668.776 1.04 1.094 1.47V330.25l16 16V128c0-2.68-.657-3.402-1.03-4.156a15 15 0 0 0-1.095-1.844c-.74-1.1-1.575-2.19-2.594-3.438c-2.036-2.492-4.768-5.55-8.03-9.093c-6.524-7.09-15.155-16-23.938-24.782s-17.692-17.414-24.78-23.938c-3.545-3.262-6.6-5.994-9.094-8.03c-1.247-1.02-2.337-1.855-3.438-2.595c-.55-.37-1.09-.72-1.844-1.094c-.754-.373-1.477-1.03-4.156-1.03zm87.72 16h48.56c4.277 0 7.72 4.425 7.72 9.938v70.124c0 5.513-3.443 9.938-7.72 9.938h-48.56c-4.277 0-7.72-4.425-7.72-9.938V73.938c0-5.512 3.443-9.937 7.72-9.937zM114 212c-4.432 0-8 3.568-8 8v184c0 4.432 3.568 8 8 8h165v-28h-76.72l15.345-15.375l128-128L352 234.28l6.375 6.345L406 288.25V220c0-4.432-3.568-8-8-8zm238 47.75L245.75 366H297v128h110V366h51.25zM448 384v64h-23v16h23c8.726 0 16-7.274 16-16v-64z"/></svg>'],
    ['load', '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M64 48c-8.726 0-16 7.274-16 16v384c0 8.726 7.274 16 16 16h236.25l-16-16H64V64h63.375v97.53c0 3.924 3.443 7.095 7.72 7.095h169.81c4.277 0 7.72-3.17 7.72-7.094V64h69.22c.428.318.8.548 1.467 1.094c2.05 1.675 4.962 4.264 8.375 7.406c6.827 6.283 15.65 14.837 24.313 23.5s17.217 17.486 23.5 24.313c3.142 3.413 5.73 6.324 7.406 8.374c.546.668.776 1.04 1.094 1.47V366h16V128c0-2.68-.657-3.402-1.03-4.156a15 15 0 0 0-1.095-1.844c-.74-1.1-1.575-2.19-2.594-3.438c-2.036-2.492-4.768-5.55-8.03-9.093c-6.524-7.09-15.155-16-23.938-24.782s-17.692-17.414-24.78-23.938c-3.545-3.262-6.6-5.994-9.094-8.03c-1.247-1.02-2.337-1.855-3.438-2.595c-.55-.37-1.09-.72-1.844-1.094c-.754-.373-1.477-1.03-4.156-1.03zm87.72 16h48.56c4.277 0 7.72 4.425 7.72 9.938v70.124c0 5.513-3.443 9.938-7.72 9.938h-48.56c-4.277 0-7.72-4.425-7.72-9.938V73.938c0-5.512 3.443-9.937 7.72-9.937zM114 212c-4.432 0-8 3.568-8 8v184c0 4.432 3.568 8 8 8h134.25l-30.625-30.625L202.28 366H279V238h127v-18c0-4.432-3.568-8-8-8zm183 44v128h-51.25L352 490.25L458.25 384H407V256zm167 147.75l-16 16V448h-28.25l-16 16H448c8.726 0 16-7.274 16-16z"/></svg>'],
    ['refresh', '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M17.65 6.35A7.96 7.96 0 0 0 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08A5.99 5.99 0 0 1 12 18c-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4z"/></svg>'],
    ['post-add','<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M5 21q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h9v2H5v14h14v-9h2v9q0 .825-.587 1.413T19 21zm3-4v-2h8v2zm0-3v-2h8v2zm0-3V9h8v2zm9-2V7h-2V5h2V3h2v2h2v2h-2v2z"/></svg>'],
    
]);

/** 提供静态方法用于外部注册图标 */
export function registerIcon(name: string, svgContent: string) {
    iconMap.set(name, svgContent);
}

/** 获取svg代码 */
export function getIcon(name: string) {
    // 修复：从 iconMap 中获取对应图标，如果没有则返回默认图标
    return iconMap.get(name) || '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m12.64 1.87l-.84 2.48a.41.41 0 0 0 0 .37l1.57 2.1a.4.4 0 0 1-.33.64h-2.62a.43.43 0 0 0-.33.17l-1.46 2.1a.4.4 0 0 1-.71-.11l-.78-2.5a.38.38 0 0 0-.26-.26l-2.5-.78a.4.4 0 0 1-.11-.71l2.14-1.51a.43.43 0 0 0 .17-.33V.91a.4.4 0 0 1 .6-.33l2.1 1.57a.41.41 0 0 0 .37.05l2.48-.84a.4.4 0 0 1 .51.51m-5.6 5.09L.5 13.5" stroke-width="1"/></svg>';
}

/** 图标组件
 * @example
 * <hm-icon icon="magic-wand"></hm-icon>
 * <hm-icon icon="close"></hm-icon>
 * <hm-icon icon="open"></hm-icon>
 * <hm-icon icon="arrow-up"></hm-icon>
 */
@customElement('hm-icon')
export class HmIcon extends LitElement {
    /** 图标名称 */
    @property({ type: String })
    icon = 'magic-wand';

    @property({ type: String })
    size = '16px';

    /** 触发点击事件 */
    handelClick() {
        this.dispatchEvent(new CustomEvent('hm-icon-click'));
    }
    static styles = css`
:host {
  display: inline-block;
}
.icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
}

.icon svg {
  width: 100%;
  height: 100%;
}
`;

    render() {
        return html`
<div class="icon" 
style="width:${this.size}; height:${this.size};"
@click="${this.handelClick}"
>
    ${unsafeSVG(getIcon(this.icon))}
</div>
`;
    }
}