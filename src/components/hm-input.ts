import { LitElement, css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

/**
 * @example <caption>基本使用</caption>
 * <hm-input label="用户名" placeholder="请输入用户名"></hm-input>
 *
 * @example <caption>带图标的输入框</caption>
 * <hm-input label="密码" icon="password" placeholder="请输入密码"></hm-input>
 *
 * @example <caption>禁用状态</caption>
 * <hm-input label="禁用输入框" value="已禁用" enable="false"></hm-input>
 *
 * @example <caption>只读状态</caption>
 * <hm-input label="只读输入框" value="只读内容" readonly="true"></hm-input>
 */
@customElement('hm-input')
export class HmInput extends LitElement {
    @property({ type: String })
    type = 'text';
    /** 按钮图标 */
    @property({ type: String })
    icon = '';
    /** 输入框标签 */
    @property({ type: String })
    label = '输入框';

    /** 占位符文本 */
    @property({ type: String })
    placeholder = '';

    /** 是否启用 */
    @property({ type: Boolean })
    enable = true;

    @property({ type: Boolean })
    readonly = false;

    @property()
    value = '';

    static styles = css`
    :host {
        display: block;
    }
    .input-container {
        display: flex;
        align-items: center;
    }
    .label {
        margin-right: 8px;
    }
    input {
        flex: 1;
        padding: 8px 12px;
        border: 1px solid #d9d9d9;
        border-radius: 4px;
        font-size: 14px;
        outline: none;
        transition: all 0.2s ease;
    }
    input:disabled {
        background-color: #f5f5f5;
        color: #999;
        border-color: #ddd;
        cursor: not-allowed;
    }
    input[readonly] {
        background-color: #f5f5f5;
        cursor: default;
    }
    .icon {
        margin-right: 8px;
        width: 16px;
        height: 16px;
    }
`;

    // 添加键盘事件处理方法，阻止事件冒泡
    private _handleKeyDown(e: KeyboardEvent) {
        e.stopPropagation();
    }

    // 添加输入事件处理方法，触发自定义事件
    private _handleInput(e: Event) {
        const target = e.target as HTMLInputElement;
        this.value = target.value;
        this.dispatchEvent(new CustomEvent('hm-input-change', {
            detail: { value: this.value },
            bubbles: true,
            composed: true
        }));
    }

    render() {
        return html`
<div class="input-container">
  <span class="label">${this.label}</span>
  ${this.icon ? html`<hm-icon icon="${this.icon}" class="icon"></hm-icon>` : ''}
  <input 
    type="${this.type}"
    value="${this.value}"
    ?disabled="${!this.enable}"
    ?readonly="${this.readonly}"
    placeholder="${this.placeholder}"
    style="padding-left: ${this.icon ? '24px' : '8px'};"
    @keydown="${this._handleKeyDown}"
    @input="${this._handleInput}"
  />
  <slot name="right">
  </slot>
</div>
    `;
    }

}