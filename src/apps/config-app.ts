import { movePanelHolder } from '../holders/move-panel';
import { LitElement, css, html } from 'lit';
import { property } from 'lit/decorators.js';
import { storeBind } from '../core/storeDecorators';
import { hortimagicConfig, HortimagicConfigStore, readHortimagicConfigStore, saveHortimagicConfigStore } from '../core/globalStore';
import { logger } from '../core/logger';

// import *as script_tool from '../core/script-tools';
// import { notice } from '../easy-tools';


class HmConfigApp extends LitElement {
    @property({ type: Boolean })
    @storeBind(HortimagicConfigStore, 'allowNotice')
    allowHortimagicNotice = true;
    @property({ type: Number })
    @storeBind(HortimagicConfigStore, 'logLevel')
    logLevel = hortimagicConfig.logLevel;

    static styles = css`
`;

    render() {
        return html`
 <hm-cell title-name="启用通知" descripthion="使用Hortimagic通知功能"> 
 <hm-switch 
    ?checked="${this.allowHortimagicNotice}"
    open-icon="led-on"
    close-icon="led-off"
    @hm-switch-change="${(e: CustomEvent) => {
                logger.debug('switch state:', e.detail.checked)
            }}"
  ></hm-switch>
</hm-cell>
<hm-cell title-name="日志等级" descripthion="日志等级">
  <hm-select
    .labelList="${[
                ['log', 0],
                ['debug', 1],
                ['info', 2],
                ['warn', 3],
                ['error', 4],
            ]}"
    .index="${hortimagicConfig.logLevel / 1}"
    @change="${(e: CustomEvent) => {
                logger.debug(e.detail);
                this.logLevel = e.detail.value;
            }}"
  >
  </hm-select>
</hm-cell>

<p>${this.logLevel}</p>
`;
    }
}

export function initConfigApp() {
    customElements.define('hm-config-app', HmConfigApp);
    let panel = document.createElement('hm-move-panel');
    panel.titleContent = '设置';
    panel.icon = 'config';
    panel.leftButtonText = "读取"
    panel.addEventListener('left-button-click', function () {
        readHortimagicConfigStore();
    });
    panel.rightButtonText = "保存"
    panel.addEventListener('right-button-click', function () {
        saveHortimagicConfigStore();
    });
    panel.showMovePanel();
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