import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

/**
 * 单元格组件
 * 用于展示列表内容或选项，采用左右分栏布局
 * 
 * @slot title - 标题内容（左侧）
 * @slot description - 描述信息（左侧）
 * @slot content - 主要内容（右侧）
 * 
 * @cssprop --hm-cell-padding - 内边距
 * @cssprop --hm-cell-border - 边框样式
 * @cssprop --hm-cell-background - 背景颜色
 * 
 * @example
 * ```html
 * <!-- 基础用法 -->
 * <hm-cell 
 *   titleName="单元格标题" 
 *   descripthion="这是描述信息" 
 *   content="内容区域">
 * </hm-cell>
 * 
 * <!-- 使用插槽自定义内容 -->
 * <hm-cell>
 *   <div slot="title">自定义标题</div>
 *   <div slot="description">自定义描述</div>
 *   <div slot="content">自定义内容</div>
 * </hm-cell>
 * 
 * <!-- 带点击事件 -->
 * <hm-cell 
 *   titleName="可点击标题" 
 *   content="点击查看详情"
 *   .titleClickCallback="${() => console.log('标题被点击')}"
 *   .contentClickCallback="${() => console.log('内容被点击')}">
 * </hm-cell>
 * 
 * <!-- 自定义样式 -->
 * <hm-cell 
 *   titleName="自定义样式" 
 *   content="特殊样式"
 *   style="--hm-cell-background: #f0f8ff; --hm-cell-title-color: #1890ff;">
 * </hm-cell>
 * ```
 */
@customElement('hm-cell')
export class HmCell extends LitElement {
  /** 标题，使用slot后失效 */
  @property()
  titleName = "单元格";
  /** 标题下方描述，使用slot后失效 */
  @property()
  descripthion = "描述信息";
  /** 右侧正文，使用slot后失效 */
  @property()
  content = "内容";
  /** 标题点击回调函数 */
  @property()
  titleClickCallback = () => { }
  /** 正文点击回调函数 */
  @property()
  contentClickCallback = () => { }
  render() {
    return html`
<div class="cell" part="cell">
  <div
    class="left-section"
    part="left-section"
    @click="${this.titleClickCallback}"
  >
    <div class="title" part="title">
      <slot name="title">${this.titleName}</slot>
    </div>
    <div class="description" part="description">
      <slot name="description">${this.descripthion}</slot>
    </div>
  </div>
  <div
    class="right-section"
    part="right-section"
    @click="${this.contentClickCallback}"
  >
    <div class="content" part="content">
      <slot name="content">${this.content}</slot>
    </div>
  </div>
</div>

`;
  }

  static styles = css`
    :host {
      display: block;
      width: 100%;
    }
    .cell {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      min-height: 60px;
      padding: var(--hm-cell-padding, 12px 16px);
      background: var(--hm-cell-background, #ffffff);
      border: var(--hm-cell-border, 1px dashed #e0e0e0);
      box-sizing: border-box;
      font-family: system-ui, -apple-system, sans-serif;
    }

    .left-section {
      display: flex;
      flex-direction: column;
      justify-content: center;
      flex: 1;
      min-width: 0; /* 允许文本截断 */
    }

    .title {
      font-size: var(--hm-cell-title-font-size, 18px);
      font-weight: var(--hm-cell-title-font-weight, 600);
      color: var(--hm-cell-title-color, #000000);
      line-height: 1.4;
      margin-bottom: 2px;
    }

    .description {
      font-size: var(--hm-cell-description-font-size, 14px);
      color: var(--hm-cell-description-color, #666666);
      line-height: 1.4;
    }

    .right-section {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      margin-left: auto;
      padding-left: 16px;
    }

    .content {
      font-size: var(--hm-cell-content-font-size, 16px);
      color: var(--hm-cell-content-color, #333333);
      text-align: right;
      padding-right: var(--hm-cell-content-padding-right, 30px);
    }

    /* 响应式设计 */
    @media (max-width: 480px) {
      .cell {
        padding: var(--hm-cell-mobile-padding, 10px 12px);
        min-height: 50px;
      }
      
      .title {
        font-size: var(--hm-cell-mobile-title-font-size, 16px);
      }
      
      .description {
        font-size: var(--hm-cell-mobile-description-font-size, 12px);
      }
      
      .content {
        font-size: var(--hm-cell-mobile-content-font-size, 14px);
        padding-right: var(--hm-cell-mobile-content-padding-right, 16px);
      }
    }
    /* 当鼠标或触摸悬停在整个单元格上时，改变内部文本的样式 */
    .cell:hover .title,
    .cell:hover .description,
    .cell:hover .content {
      /* 使用CSS变量允许自定义，并提供默认高亮颜色 */
      color: var(--hm-cell-hover-font-color, #1890ff);
      /* 可选：增加字体粗细使其更突出 */
      font-weight: var(--hm-cell-hover-font-weight, 600);
      /* 可选：添加文字阴影增强视觉效果 */
      text-shadow: var(--hm-cell-hover-text-shadow, 0 0 5px rgba(24, 144, 255, 0.2));
    }
  `;
}
