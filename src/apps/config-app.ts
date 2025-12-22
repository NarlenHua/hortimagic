import { movePanelHolder } from '../holders/move-panel';
import { LitElement, css, html } from 'lit';
import { property } from 'lit/decorators.js';
// import *as script_tool from '../core/script-tools';
// import { notice } from '../easy-tools';


class HmConfigApp extends LitElement {
    @property({ type: Boolean })
    allowHortimagicNotice = true;

    // :host {
    //   display:block;
    //   width: 100%;
    // }
    static styles = css`
`;

    render() {
        return html`
 <hm-cell title-name="开启新通知" descripthion="使用Hortimagic通知功能"> 
 <hm-switch 
    slot="content"
    ?checked="${this.allowHortimagicNotice}"
    open-icon="led-on"
    close-icon="led-off"
    @hm-switch-change="${(e: CustomEvent) => {
                console.log('switch state:', e.detail.checked)
            }}"
  ></hm-switch>
`;
    }
}

export function initConfigApp() {
    customElements.define('hm-config-app', HmConfigApp);
    let panel = document.createElement('hm-move-panel');
    panel.titleContent = '设置';
    panel.icon = 'config';
    // panel.showMovePanel();
    movePanelHolder.appendChild(panel);
    let template = `
  <hm-config-app></hm-config-app>
  `;
    panel.innerHTML = template;
    let menuItem = document.createElement('hm-menu');
    menuItem.content = "设置";
    menuItem.isMenuItem = true;
    menuItem.icon = 'config';

    menuItem.addEventListener('hm-menu-click', function () {
        panel.putTopToggel();
    });
    return menuItem;
}