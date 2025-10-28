import { LitElement, css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

/**
 * 按钮组件
 * 
 * @example
 * ```html
 * <!-- 基础用法 -->
 * <hm-button content="普通按钮"></hm-button>
 * 
 * <!-- 带图标按钮 -->
 * <hm-button icon="plus" content="添加"></hm-button>
 * 
 * <!-- 自定义颜色 -->
 * <hm-button 
 *   content="自定义样式" 
 *   color="#ffffff" 
 *   background="#4caf50">
 * </hm-button>
 * 
 * <!-- 禁用状态 -->
 * <hm-button content="禁用按钮" .enable="${false}"></hm-button>
 * 
 * <!-- 加载状态 -->
 * <hm-button content="加载中" .loading="${true}"></hm-button>
 * 
 * <!-- 自定义尺寸 -->
 * <hm-button content="大按钮" width="200px" height="50px"></hm-button>
 * <hm-button content="小按钮" width="60px" height="30px" fontSize="8px"></hm-button>
 * ```
 */
@customElement('hm-button')
export class HmButton extends LitElement {
  /** 按钮图标 */
  @property({ type: String })
  icon = '';

  /** 按钮文字内容 */
  @property({ type: String })
  content = '';
  /** 字体大小 */
  @property({ type: String })
  fontSize = '14px'
  /** 字体颜色 */
  @property({ type: String })
  color = '';

  /** 背景颜色 */
  @property({ type: String })
  background = '';
  @property({ type: String })
  width = '';
  @property({ type: String })
  height = '';

  /** 是否启用 */
  @property({ type: Boolean })
  enable = true;

  /** 是否加载中 */
  @property({ type: Boolean })
  loading = false;


  static styles = css`
      :host {
        display: inline-block;
      }
      
      .button {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        border: none;
        border-radius: 4px;
        padding: 8px 16px;
        cursor: pointer;
        transition: all 0.3s;
        opacity: 1;
        // 添加鼠标悬停动画
        &:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
        }
      }
      
      .button:disabled {
        cursor: not-allowed;
        opacity: 0.6;
      }
      
      .button.loading {
        cursor: not-allowed;
      }
      
      .loading-spinner {
        width: 14px;
        height: 14px;
        border: 2px solid transparent;
        border-top-color: currentColor;
        border-radius: 50%;
        animation: rotate 1s linear infinite;
        margin-right: 8px;
      }
      
      @keyframes rotate {
        from {
          transform: rotate(0deg);
        }
        to {
          transform: rotate(360deg);
        }
      }
      
      .button-content {
        display: flex;
        align-items: center;
      }
    `;

  render() {
    const buttonStyle = `
          ${this.color ? `color: ${this.color};` : ''}
          ${this.background ? `background-color: ${this.background};` : ''}
          ${this.width ? `width: ${this.width};` : ''}
          ${this.height ? `height: ${this.height};` : ''}
          ${this.fontSize ? `font-size: ${this.fontSize};` : '14px'}
        `;

    return html`
          <button 
            class="button" 
            style="${buttonStyle}"
            ?disabled="${!this.enable || this.loading}"
            @click="${this._handleClick}">
            
            ${this.loading ? html`
              <div class="loading-spinner"></div>
            ` : this.icon ? html`
              <slot name="icon">
                <hm-icon icon="${this.icon}" style="margin-right: 8px;"></hm-icon>
              </slot>
            ` : ''}
            
            <span class="button-content">
              <slot>${this.content}</slot>
            </span>
          </button>
        `;
  }

  private _handleClick(e: MouseEvent) {
    if (!this.enable || this.loading) {
      e.stopPropagation();
      return;
    }

    this.dispatchEvent(new CustomEvent('hm-button-click'));
  }
}
