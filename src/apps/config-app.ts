import { holders } from '../core/holders';
import { LitElement, css, html } from 'lit';
// import { property } from 'lit/decorators.js';
import { store } from '../core/store';
import { logTools } from '../core/log-tools';

const { HortimagicStore, saveStore, loadStore, reactive } = store;
class HmConfigApp extends LitElement {
    // 返回一个只读的、响应式的快照
    storeSnap = reactive.snapshot(HortimagicStore);

    static styles = css`
        .config-item {
            margin: 10px 0;
        }
    `;

    render() {
        return html`
            <div class="config-item">
                <hm-cell title-name="自动保存设置" description="修改设置或脚本列表后，将自动保存设置。"> 
                    <hm-switch 
                        ?checked="${this.storeSnap.autoSave}"
                        @hm-switch-change="${(e: CustomEvent) => {
                HortimagicStore.autoSave = e.detail.checked;
                saveStore();
            }}"
                    ></hm-switch>
                </hm-cell>
            </div>
            
            <div class="config-item">
                <hm-cell title-name="允许LOG输出" description="是否允许LOG级别的日志输出"> 
                    <hm-switch 
                        ?checked="${this.storeSnap.logFlag.log}"
                        @hm-switch-change="${(e: CustomEvent) => {
                HortimagicStore.logFlag.log = e.detail.checked;
            }}"
                    ></hm-switch>
                </hm-cell>
            </div>
            
            <div class="config-item">
                <hm-cell title-name="允许INFO输出" description="是否允许INFO级别的日志输出"> 
                    <hm-switch 
                        ?checked="${this.storeSnap.logFlag.info}"
                        @hm-switch-change="${(e: CustomEvent) => {
                HortimagicStore.logFlag.info = e.detail.checked;
            }}"
                    ></hm-switch>
                </hm-cell>
            </div>
            
            <div class="config-item">
                <hm-cell title-name="允许DEBUG输出" description="是否允许DEBUG级别的日志输出"> 
                    <hm-switch 
                        ?checked="${this.storeSnap.logFlag.debug}"
                        @hm-switch-change="${(e: CustomEvent) => {
                HortimagicStore.logFlag.debug = e.detail.checked;
            }}"
                    ></hm-switch>
                </hm-cell>
            </div>
            
            <div class="config-item">
                <hm-cell title-name="允许WARN输出" description="是否允许WARN级别的日志输出"> 
                    <hm-switch 
                        ?checked="${this.storeSnap.logFlag.warn}"
                        @hm-switch-change="${(e: CustomEvent) => {
                HortimagicStore.logFlag.warn = e.detail.checked;
            }}"
                    ></hm-switch>
                </hm-cell>
            </div>
            
            <div class="config-item">
                <hm-cell title-name="允许ERROR输出" description="是否允许ERROR级别的日志输出"> 
                    <hm-switch 
                        ?checked="${this.storeSnap.logFlag.error}"
                        @hm-switch-change="${(e: CustomEvent) => {
                HortimagicStore.logFlag.error = e.detail.checked;
            }}"
                    ></hm-switch>
                </hm-cell>
            </div>
            <div class="config-item">
                <hm-cell title-name="发送日志" description="打印要发送的消息"> 
                    <hm-switch 
                        ?checked="${this.storeSnap.messageLogFlag.send}"
                        @hm-switch-change="${(e: CustomEvent) => {
                HortimagicStore.messageLogFlag.send = e.detail.checked;
            }}"
                    ></hm-switch>
                </hm-cell>
            </div>
            <div class="config-item">
                <hm-cell title-name="接收日志" description="打印接收到的消息"> 
                    <hm-switch 
                        ?checked="${this.storeSnap.messageLogFlag.receive}"
                        @hm-switch-change="${(e: CustomEvent) => {
                HortimagicStore.messageLogFlag.receive = e.detail.checked;
            }}"
                    ></hm-switch>
                </hm-cell>
            </div>
            <div class="config-item">
                <hm-cell title-name="解码日志" description="打印解码后的消息"> 
                    <hm-switch 
                        ?checked="${this.storeSnap.messageLogFlag.decode}"
                        @hm-switch-change="${(e: CustomEvent) => {
                HortimagicStore.messageLogFlag.decode = e.detail.checked;
            }}"
                    ></hm-switch>
                </hm-cell>
            </div>
            <div class="config-item">
                <hm-cell title-name="触发日志" description="打印要触发的消息"> 
                    <hm-switch 
                        ?checked="${this.storeSnap.messageLogFlag.emit}"
                        @hm-switch-change="${(e: CustomEvent) => {
                HortimagicStore.messageLogFlag.emit = e.detail.checked;
            }}"
                    ></hm-switch>
                </hm-cell>
            </div>
            
            <div class="config-item">
                    <hm-input
                        label="日志列表长度"
                        type="number"
                        .value="${this.storeSnap.logListLength}"
                        @hm-input-change="${(e: CustomEvent) => {
                const value = parseInt(e.detail.value) || 100;
                HortimagicStore.logListLength = value;
                logTools.logger.debug('log list length changed:', value);
            }}"
                    ></hm-input>
            </div>
`;
    }
}

export function initConfigApp() {
    customElements.define('hm-config-app', HmConfigApp);
    let panel = document.createElement('hm-move-panel');
    panel.titleContent = '设置';
    panel.icon = 'config';
    panel.leftButtonText = "读取"
    panel.leftIcon = 'load';
    panel.addEventListener('left-button-click', function () {
        loadStore();
    });
    panel.rightButtonText = "保存"
    panel.rightIcon = 'save';
    panel.addEventListener('right-button-click', function () {
        saveStore();
    });
    // panel.showMovePanel();
    holders.movePanelHolder.appendChild(panel);
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