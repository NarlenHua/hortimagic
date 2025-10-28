import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

/**
 * 滑动开关组件
 * 
 * @example
 * ```html
 * <!-- 基础用法 -->
 * <hm-switch></hm-switch>
 * 
 * <!-- 默认开启 -->
 * <hm-switch checked></hm-switch>
 * 
 * <!-- 禁用状态 -->
 * <hm-switch disabled></hm-switch>
 * 
 * <!-- 加载状态 -->
 * <hm-switch loading></hm-switch>
 * 
 * <!-- 自定义颜色 -->
 * <hm-switch color="#ff4757"></hm-switch>
 * 
 * <!-- 带图标 -->
 * <hm-switch openIcon="check" closeIcon="close"></hm-switch>
 * 
 * <!-- 监听状态变化 -->
 * <hm-switch @hm-switch-change="${(e) => console.log('开关状态:', e.detail.checked)}"></hm-switch>
 * ```
 */
@customElement('hm-switch')
export class HmSwitch extends LitElement {
  /** 开关状态 */
  @property({ type: Boolean }) checked = false;
  /** 是否禁用 */
  @property({ type: Boolean }) disabled = false;
  /** 加载状态 */
  @property({ type: Boolean }) loading = false;

  /** 开关打开时的颜色 */
  @property({ type: String }) color = '#1890ff';

  /** 自定义开启状态内容 */
  @property({ type: String }) openContent = '';

  /** 自定义关闭状态内容 */
  @property({ type: String }) closeContent = '';
  /** 自定义开启状态图标 */
  @property({ type: String }) openIcon = '';

  /** 自定义关闭状态图标 */
  @property({ type: String }) closeIcon = '';

  change() {
    if (this.disabled || this.loading) return;
    this.checked = !this.checked;
    // console.debug('changed!!');
    // 触发自定义事件供外部监听
    this.dispatchEvent(new CustomEvent('hm-switch-change', {
      detail: { checked: this.checked },
      bubbles: true,
      composed: true
    }));
  }

  render() {
    return html`
<div
  class="switch ${this.disabled ? 'disabled' : ''} ${this.loading ? 'loading' : ''} ${this.checked ? 'checked' : ''}"
  @click="${this.change}"
  @touchstart="${this.change}"
  style="--switch-color: ${this.color}"
>
  <div class="switch-inner">
    ${this.checked ?
        (this.openIcon ? html`<hm-icon icon="${this.openIcon}" size="14px"></hm-icon>` :
          this.openContent ? html`<span>${this.openContent}</span>` : '') :
        (this.closeIcon ? html`<hm-icon icon="${this.closeIcon}" size="14px"></hm-icon>` :
          this.closeContent ? html`<span>${this.closeContent}</span>` : '')}
  </div>
</div>
        `;
  }

  static styles = css`
      .switch {
        position: relative;
        display: inline-block;
        width: 44px;
        height: 22px;
        vertical-align: middle;
        border: 1px solid #ccc;
        border-radius: 20px;
        background-color: #ccc;
        cursor: pointer;
        transition: all 0.3s;
        user-select: none;
      }
      
      .switch.checked {
        background-color: var(--switch-color, #1890ff);
        border-color: var(--switch-color, #1890ff);
      }
      
      .switch.disabled {
        cursor: not-allowed;
        opacity: 0.6;
      }
      
      .switch.loading {
        cursor: wait;
        opacity: 0.6;
      }
      
      .switch-inner {
        position: absolute;
        top: 2px;
        left: 2px;
        width: 18px;
        height: 18px;
        background-color: #fff;
        border-radius: 50%;
        transition: all 0.3s;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 12px;
      }
      
      .switch.checked .switch-inner {
        left: calc(100% - 20px);
      }
      
      .switch.loading::after {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        width: 12px;
        height: 12px;
        margin-top: -6px;
        margin-left: -6px;
        border: 2px solid transparent;
        border-top-color: currentColor;
        border-radius: 50%;
        animation: rotate 1s linear infinite;
      }
      
      @keyframes rotate {
        from {
          transform: rotate(0deg);
        }
        to {
          transform: rotate(360deg);
        }
      }
      
      hm-icon {
        font-size: 12px;
        width: 12px;
        height: 12px;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    `;
}