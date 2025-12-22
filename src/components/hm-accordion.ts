import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
/**
 * 折叠面板
 * @example
 * <hm-accordion title-content="标题内容"></hm-accordion>
 * <hm-accordion>
    <span slot="header">我的折叠面板</span>
    <div>内容项 1</div>
    <div>内容项 2</div>
  </hm-accordion>
 */
@customElement('hm-accordion')
export class HmAccordion extends LitElement {
  @property({ type: String, attribute: 'max-height' })
  maxHeight = '500px';

  /** 折叠项 */
  @property({ type: Array })
  items: any[] = [];
  /** 标题内容 */
  @property({ type: String, attribute: 'title-content' })
  titleContent = '标题内容';
  /** 是否展开 */
  @property({ type: Boolean })
  expanded = false;

  static styles = css`
    :host {
      display: block;
      width: 100%;
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    }
    
    .accordion-container {
      display: flex;
      flex-direction: column;
      border-radius: 8px;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
      background-color: white;
      overflow: hidden;
      transition: all 0.3s ease;
    }
    
    .accordion-header {
      padding: 16px 20px;
      background-color: #f8f9fa;
      border-bottom: 1px solid #e9ecef;
      font-size: 1.25rem;
      font-weight: 600;
      color: #212529;
      display: flex;
      justify-content: space-between;
      align-items: center;
      cursor: pointer;
      transition: background-color 0.2s;
    }
    
    .accordion-header:hover {
      background-color: #e9ecef;
    }
    
    .accordion-toggle {
      transition: transform 0.3s ease;
      width: 24px;
      height: 24px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    
    .accordion-content {
      flex: 1;
      overflow-y: auto;
      padding: 0;
      background-color: #ffffff;
      transition: max-height 0.3s ease, opacity 0.3s ease;
    }
    
    .accordion-footer {
      padding: 12px 20px;
      background-color: #f8f9fa;
      border-top: 1px solid #e9ecef;
      display: flex;
      justify-content: flex-end;
      gap: 10px;
    }
    
    .accordion-item {
      padding: 12px 20px;
      border-bottom: 1px solid #e9ecef;
      transition: background-color 0.2s;
    }
    
    .accordion-item:last-child {
      border-bottom: none;
    }
    
    .accordion-item:hover {
      background-color: #f8f9fa;
    }
  `;
  /** 开关容器 */
  togglePanel() {
    this.expanded = !this.expanded;
  }

  render() {
    return html`
      <div class="accordion-container" style="max-height: ${this.maxHeight}">
        <div class="accordion-header" @click=${this.togglePanel}>
          <slot name="header">${this.titleContent}</slot>
          <div class="accordion-toggle">
            ${!this.expanded
        ? html`<hm-icon icon="arrow-down"></hm-icon>`
        : html`<hm-icon icon="arrow-up"></hm-icon>`}
          </div>
        </div>
        
        <div class="accordion-content" ?hidden=${!this.expanded}>
          ${this.items.length > 0
        ? this.items.map(
          (item) => html`<div class="accordion-item">${item}</div>`
        )
        : html`<slot></slot>`}
        </div>
        
        <div class="accordion-footer" ?hidden=${!this.expanded}>
          <slot name="footer">
            <hm-button @hm-button-click="${() => { this.expanded = false }}">关闭</hm-button>
          </slot>
        </div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'hm-accordion': HmAccordion;
  }
}
