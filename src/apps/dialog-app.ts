import { LitElement, css, html } from 'lit';
import { property } from 'lit/decorators.js';
import { dialogHolder } from '../holders/dialog';

class HmDialogApp extends LitElement {
    @property({ type: Boolean })
    dialogOpen = false;

    @property({ type: String })
    message = '请做出选择';

    @property({ type: Function })
    closeCallback: Function | null = null;
    @property({ type: Function })
    cancelCallback: Function | null = null;
    @property({ type: Function })
    confirmCallback: Function | null = null;
    /** 触发点击事件 */
    handelClick() {
        this.dispatchEvent(new CustomEvent('hmclick'));
    }
    static styles = css`
`;

    render() {
        return html`
<hm-dialog
  ?isopen="${this.dialogOpen}"
  @hm-dialog-close="${() => {
                this.dialogOpen =
                    false;
            }}"
  @hm-dialog-cancel="${() => {
                if (this.cancelCallback) this.cancelCallback();
            }}"
  @hm-dialog-confirm="${() => {
                if (this.confirmCallback) this.confirmCallback();
            }}"
>
  <p>${this.message}</p>
</hm-dialog>
        `;
    }
}
let dialogApp: HmDialogApp;
/** 初始化对话框模块 */
async function initDialogApp() {
    customElements.define('hm-dialog-app', HmDialogApp);
    dialogApp = document.createElement('hm-dialog-app') as HmDialogApp;
    dialogApp.dialogOpen = false;
    dialogApp.message = '请做出选择';
    dialogApp.closeCallback = null;
    dialogApp.cancelCallback = null;
    dialogApp.confirmCallback = null;
    dialogHolder.append(dialogApp);
}
export {
    dialogApp,
    initDialogApp
}