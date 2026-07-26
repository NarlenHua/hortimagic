import { LitElement, html } from 'lit';
import { property } from 'lit/decorators.js';
import { scriptTools, Script } from '../core/script-tools';
import { store } from '../core/store';
import { easyTools } from '../easy-tools';
import { holders } from '../core';
// import { logger } from '../main';

const Tag = 'hm-script-app';

class HmScriptApp extends LitElement {
  @property({ type: String })
  scriptName = '';
  @property({ type: String })
  scriptUrl = '';
  @property({ type: Boolean })
  scriptEnable = true;
  @property({ type: Boolean })
  scriptinjected = false;

  @property({ type: Boolean })
  dialogOpen = false;

  private isUpdate = false;



  // 返回一个只读的快照
  storeSnap = store.reactive.snapshot(store.HortimagicStore);

  constructor() {
    super();
    store.reactive.subscribe(store.HortimagicStore, () => {
      this.storeSnap = store.reactive.snapshot(store.HortimagicStore);
      this.requestUpdate();
    });
  }
  // <hm-button @hm-button-click="${() => {
  //     logger.debug(Tag, '镜像', this.storeSnap.scriptList);
  //     logger.debug(Tag, '存储对象', HortimagicStore.scriptList);
  //   }}">当前信息</hm-button>

  render() {
    return html`
<hm-dialog ?isopen="${this.dialogOpen}"
  @hm-dialog-close="${() => {
        this.dialogOpen = false;
        this.isUpdate = false;
      }}"
  @hm-dialog-confirm="${() => {
        if (this.scriptName.trim() == "" || this.scriptUrl.trim() == "") {
          easyTools.notice.error(Tag, "请填写完整的脚本信息"); return;
        }
        // logger.debug(Tag, '要添加的脚本', `${this.scriptName}${this.scriptUrl}`);
        this.scriptEnable = true;
        this.scriptinjected = false;
        let script = new Script(this.scriptName, this.scriptUrl, this.scriptEnable);
        let res = false;
        if (this.isUpdate)
          res = scriptTools.updateScriptInList(script);
        else
          res = scriptTools.addScriptToList(script);
        if (res) {
          easyTools.notice.success(Tag, "脚本添加成功");
        } else {
          easyTools.notice.error(Tag, "脚本添加失败");
        }
        /** 关闭修改标志 */
        this.isUpdate = false;
        this.dialogOpen = false;
        this.storeSnap = store.reactive.snapshot(store.HortimagicStore);
        /** 刷新渲染 */
        // this.requestUpdate();
      }}"
>
  <h2>修改或添加脚本</h2>
  <hm-input
    label=" 脚本名称"
    placeholder="请输入脚本名称"
    value="${this.scriptName}"
    @hm-input-change="${(e: CustomEvent) => { this.scriptName = e.detail.value; }}"
  >
  </hm-input>
  <hm-input
    label="脚本链接"
    placeholder="请输入https的脚本链接"
    value="${this.scriptUrl}"
    @hm-input-change="${(e: CustomEvent) => { this.scriptUrl = e.detail.value; }}"
  >
  </hm-input>

</hm-dialog>

<hm-accordion>
    <span slot="header"> 脚本列表 </span>
    ${this.storeSnap.scriptList.map((script) => {
        return html`
    <hm-swipe-cell>
      <div slot="left-actions">
        <hm-button
          icon="delete"
          @hm-button-click="${() => {
            let res = scriptTools.removeScriptFromList(script);
            if (res) {
              easyTools.notice.success(Tag, "脚本删除成功");
            } else {
              easyTools.notice.error(Tag, "脚本已经不在脚本列表中");
            }
            this.storeSnap = store.reactive.snapshot(store.HortimagicStore);
            /** 刷新渲染 */
            // this.requestUpdate();
          }
          }"
          >删除</hm-button
        >
      </div>
      <hm-cell title-name="${script.name}" descripthion="${script.url}">
        <hm-switch
          ?checked="${script.enable}"
          @hm-switch-change="${(e: CustomEvent) => {
            let sc = new Script(script.name, script.url, e.detail.checked);
            let res = scriptTools.updateScriptInList(sc);
            if (res) {
              easyTools.notice.success(Tag, "脚本修改成功");
            } else {
              easyTools.notice.error(Tag, "脚本修改失败");
            }
            this.storeSnap = store.reactive.snapshot(store.HortimagicStore);
          }
          }"
        ></hm-switch>
      </hm-cell>
      <div slot="right-actions">
        <hm-button
          icon="edit"
          @hm-button-click="${() => {
            this.scriptName = script.name;
            this.scriptUrl = script.url;
            this.scriptEnable = script.enable;
            /** 打开修改标志位 */
            this.isUpdate = true;
            this.dialogOpen = true;
            // script_tool.addScriptToList(script);
          }
          }"
          >修改</hm-button
        >
        <hm-button
          icon="run"
          ?enable="${!scriptTools.injectedUrlList.includes(script.url)}"
          @hm-button-click="${() => {
            let res = scriptTools.injecteScript(script);
            if (res) {
              easyTools.notice.success(Tag, "脚本运行成功");
            } else {
              easyTools.notice.error(Tag, "脚本运行失败,脚本已经在运行了");
            }
            this.storeSnap = store.reactive.snapshot(store.HortimagicStore);
          }
          }"
          >运行</hm-button
        >
      </div>
    </hm-swipe-cell>
    ` })
      }
    <div slot="footer">
      <hm-button
        icon="refresh"
        @click="${() => {
        store.loadStore();
        this.storeSnap = store.reactive.snapshot(store.HortimagicStore);
        /** 刷新渲染 */
        // this.requestUpdate();
      }}"
      >
        刷新
      </hm-button>
      <hm-button
        icon="post-add"
        @click="${() => {
        this.dialogOpen = true;
      }}"
      >
        添加
      </hm-button>
      <hm-button
        icon="save"
        @click="${() => {
        store.saveStore();
      }}">
            保存
        </hm-button>
    </div>
</hm-accordion>`;
  }
}

export function initScriptApp() {
  customElements.define('hm-script-app', HmScriptApp);
  let panel = document.createElement('hm-move-panel');
  panel.titleContent = '脚本管理';
  panel.icon = 'js';
  panel.leftButtonText = "读取"
  panel.leftIcon = 'load';
  panel.addEventListener('left-button-click', function () {
    store.loadStore();
  });
  panel.rightButtonText = "保存"
  panel.rightIcon = 'save';
  panel.addEventListener('right-button-click', function () {
    store.saveStore();
  });
  // panel.showMovePanel();
  holders.movePanelHolder.appendChild(panel);
  let template = `<hm-script-app> </hm-script-app>
    `;
  panel.innerHTML = template;
  let menuItem = document.createElement('hm-menu');
  menuItem.content = "脚本管理";
  menuItem.isMenuItem = true;
  menuItem.icon = 'js';

  menuItem.addEventListener('hm-menu-click', function () {
    panel.putTopToggel();
  });
  return menuItem;
}