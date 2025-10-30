import { movePanelHolder } from '../holders/move-panel';
import { LitElement, css, html, render } from 'lit';
import { property } from 'lit/decorators.js';
import *as script_tool from '../core/script-tools';
import { notice } from './app-tools';


class HmScriptApp extends LitElement {
  @property({ type: String })
  scriptName = '';
  @property({ type: String })
  scriptUrl = '';
  @property({ type: Boolean })
  scriptEnable = true;
  @property({ type: Boolean })
  scriptIngected = false;

  @property({ type: Boolean })
  dialogOpen = false;
  /**
   * 脚本列表
   * 不要直接操作这个列表，这个列表仅作为响应式来显示列表
   * 想要修改脚本列表可请修改script_tool.scriptList，
   * 可以调用script_tool.addScriptToList()和script_tool.removeScriptFromList()
   */
  @property({ type: Array })
  scriptList: script_tool.Script[] = script_tool.scriptList;
  static styles = css`
:host {
  display:block;
  width: 100%;
}
`;

  render() {
    return html`
<hm-dialog
  ?isopen="${this.dialogOpen}"
  @hm-dialog-close="${() => {
        this.dialogOpen =
          false;
      }}"
  @hm-dialog-confirm="${() => {
        if (this.scriptName.trim() == '' ||
          this.scriptUrl.trim() == '') {
          notice.error('脚本管理', '请填写完整的脚本信息');
          return;
        } this.scriptEnable = true; this.scriptIngected = false; let script =
          new script_tool.Script(this.scriptName, this.scriptUrl, this.scriptEnable,
            this.scriptIngected); script_tool.addScriptToList(script);
        script_tool.saveScriptList(); this.scriptList = script_tool.scriptList;
      }}"
>
  <h2>修改或添加脚本</h2>
  <hm-input
    label="脚本名称"
    placeholder="请输入脚本名称"
    value="${this.scriptName}"
    @hm-input-change="${(e: CustomEvent) => { this.scriptName = e.detail.value; console.debug(this.scriptName); }}"
  ></hm-input>
  <hm-input
    label="脚本链接"
    placeholder="请输入https的脚本链接"
    value="${this.scriptUrl}"
    @hm-input-change="${(e: CustomEvent) => { this.scriptUrl = e.detail.value; console.debug(this.scriptUrl); }}"
  ></hm-input>
</hm-dialog>

<hm-accordion>
  <span slot="header">脚本列表</span>
  ${this.scriptList.map((script) => {
        return html`
<hm-swipe-cell>
  <div slot="left-actions">
    <hm-button
      @hm-button-click="${() => {
            script_tool.removeScriptFromList(script);
            script_tool.saveScriptList();
            this.scriptList = script_tool.scriptList;
          }
          }"
      >删除</hm-button
    >
  </div>
  <hm-cell
    slot="content"
    titleName="${script.name}"
    descripthion="${script.url}"
  >
    <hm-switch
      slot="content"
      ?checked="${script.enable}"
      @hm-switch-change="${(e: CustomEvent) => {
            script.enable = e.detail.checked;
            script_tool.addScriptToList(script);
            script_tool.saveScriptList();
            this.scriptList = script_tool.scriptList;
          }
          }"
    ></hm-switch>
  </hm-cell>

  <div slot="right-actions">
    <hm-button
      @hm-button-click="${() => {
            this.scriptName = script.name;
            this.scriptUrl = script.url;
            this.dialogOpen = true;
          }
          }"
      >修改</hm-button
    >
    <hm-button
      ?enable="${!script.ingected}"
      @hm-button-click="${() => {
            script.ingected = script_tool.injectScript(script);
            /** 更新一下
             * 把运行结果覆盖到list
             */
            script_tool.addScriptToList(script);
            this.scriptList = script_tool.scriptList;
          }
          }"
      >运行</hm-button
    >
  </div>
</hm-swipe-cell>

`
      })}
  <div slot="footer">
    <hm-button
      @click="${() => { script_tool.readScriptList(); this.scriptList = script_tool.scriptList; }}"
      >刷新</hm-button
    >
    <hm-button
      @click="${() => {
        this.scriptName = '';
        this.scriptUrl = '';
        this.scriptEnable = true;
        this.scriptIngected = false;
        this.dialogOpen = true;
      }}"
      >添加</hm-button
    >
    <hm-button @click="${() => { script_tool.saveScriptList(); }}"
      >保存</hm-button
    >
  </div>
</hm-accordion>

    `;
  }
}

async function initScriptApp() {
  customElements.define('hm-script-app', HmScriptApp);
  let panel = document.createElement('hm-move-panel');
  panel.titleContent = '脚本管理';
  panel.icon = 'js';
  // panel.showMovePanel();
  movePanelHolder.appendChild(panel);
  let template = html`
  <hm-script-app></hm-script-app>
  `;
  render(template, await panel.body);
  let menuItem = document.createElement('hm-menu');
  menuItem.content = "脚本管理";
  menuItem.isMenuItem = true;
  menuItem.icon = 'js';

  menuItem.addEventListener('hm-menu-click', function () {
    panel.putTopToggel();
  });
  return menuItem;
}
export {
  initScriptApp
}