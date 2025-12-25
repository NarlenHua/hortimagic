// import { movePanelHolder } from '../holders/move-panel';
// import { LitElement, css, html } from 'lit';
// import { property } from 'lit/decorators.js';
// import { storeBind, storeOn } from '../core/storeDecorators';
// import { loggerList, sharedDataStore } from '../core/globalStore';
// import { logger } from '../core/logger';
// // import { logger } from '../core/logger';

// // import *as script_tool from '../core/script-tools';
// // import { notice } from '../easy-tools';


// class HmLogApp extends LitElement {
//     @property({ type: Array })
//     @storeBind(sharedDataStore, 'loggerList')
//     loggerList = loggerList;
//     @storeOn(sharedDataStore, 'loggerList')
//     ondataChange(newValue: any) {
//         this.loggerList = newValue;
//         logger.log('Value changed to:', newValue);
//     }
//     static styles = css`
// `;

//     temp: Array<any> = [];
//     //     ${this.loggerList.map((item) => {
//     //                 return html`
//     // <p>${item[0]} ${item[1]} ${item[2]}</p>
//     // `})}
//     render() {
//         this.temp = []
//         for (let i = 0; i < this.loggerList.length; i++) {
//             const item = this.loggerList[i];
//             this.temp.push(html`
// <p>${item[0]} ${item[1]} ${item[2]}</p>
// `)
//         }
//         return html`
// <hm-button @hm-button-click=${() => {
//                 logger.debug('log', this.loggerList);
//                 logger.debug('log', loggerList);
//             }}>打印数据</hm-button>
//             ${this.temp}

// `;
//     }
// }

// export function initLogApp() {
//     customElements.define('hm-log-app', HmLogApp);
//     let panel = document.createElement('hm-move-panel');
//     panel.titleContent = '日志';
//     panel.icon = 'log';

//     panel.showMovePanel();
//     movePanelHolder.appendChild(panel);
//     let template = `<hm-log-app></hm-log-app>`;
//     panel.innerHTML = template;
//     let menuItem = document.createElement('hm-menu');
//     menuItem.content = "日志";
//     menuItem.isMenuItem = true;
//     menuItem.icon = 'log';

//     menuItem.addEventListener('hm-menu-click', function () {
//         panel.putTopToggel();
//     });
//     return menuItem;
// }