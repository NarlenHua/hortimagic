import { LitElement, css, html } from 'lit';
import { customElement, property, queryAsync } from 'lit/decorators.js';

/** 创建的窗口列表 */
export let movePanelItemList: HmMovePanel[] = [];
/** 窗口基础的层级，每新建一个加一,从99999开始加 */
export let movePanelItemMaxZindex: number = 99999;

/** 移动面板组件 */
@customElement('hm-move-panel')
export class HmMovePanel extends LitElement {
  /** 主内容区宽 */
  @property({ type: Number })
  width = 320;
  /** 主内容区高 */
  @property({ type: Number })
  height = 490;
  @property({ type: String, attribute: 'header-background-color' })
  headerBackgroundColor = 'rgba(66,134,182,0.9)';
  @property({ type: String, attribute: 'header-color' })
  headerColor = 'rgb(255,255,255)';
  @property({ type: String, attribute: 'body-background-color' })
  bodyBackgroundColor = 'rgba(255,255,255,0.7)';
  @property({ type: String, attribute: 'body-color' })
  bodyColor = 'rgba(23, 23, 23, 0.9)';
  @property({ type: String, attribute: 'footer-background-color' })
  footerBackgroundColor = 'rgba(255,255,255,0.7)';
  @property({ type: String, attribute: 'button-background-color' })
  buttonBackgroundColor = 'rgba(255,255,255,0.9)';
  @property({ type: String, attribute: 'button-color' })
  buttonColor = 'rgba(66,134,182,0.9)';
  /** 标题 */
  @property({ type: String }) titleContent = '面板';
  @property({ type: String, attribute: 'left-button-text' })
  leftButtonText = '按钮1';
  @property({ type: String, attribute: 'right-button-text' })
  rightButtonText = '按钮2';
  /** 显示状态,不建议直接修改，请使用show()和hide()方法，否则无法触发对应事件 */
  @property({ type: Boolean, attribute: 'is-display' })
  isDisplay = false;
  @property({ type: Number })
  zIndex = movePanelItemMaxZindex;
  /** 左上角图标 */
  @property({ type: String })
  icon = 'magic-wand'
  /* 定位左边 */
  @property({ type: Number })
  left = (window.innerWidth - this.width) / 2;
  /* 定位顶部 */
  @property({ type: Number })
  top = (window.innerHeight - (this.height + 80)) / 2;

  handleLeftClick() {
    this.hideMovePanel();
  }
  handleRightClick() {
    this.hideMovePanel();
  }
  /**
   * 组件内部的body元素
   */
  @queryAsync('.body')
  body!: Promise<HTMLDivElement>;

  static styles = css`
.panel {
  position: absolute;
  display: block;
}

.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 40px;
}
.header-left {
  display: flex;
  align-items: center;
}

.header-icon {
  display: flex;
  align-items: center;
  margin-left: 24px;
  margin-right: 24px;
}
.left-icon {
  display: flex;
  align-items: center;
}
.header-title {
  margin-right: auto;
  font-size: 16px !important;
  opacity: 0.7;
  font-weight: bold;
  height: 100%;
  line-height: 40px;
}


.header-close {
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  higth: 40px;
}

.body {
  display: block;
  position: absolute;
  top: 40px;
  overflow: auto;
  scrollbar-width: none; /* Firefox */
}
.body::-webkit-scrollbar {
  display: none; /* Chrome/Safari/Webkit */
}

.footer {
  display: flex;
  position: absolute;
  height: 40px;
  bottom: 0px;
  width: 100%; /* 添加宽度占满父容器 */
  box-sizing: border-box; /* 确保padding不会增加元素总宽度 */
}

.footer-button {
  flex: 1;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.2s;
}

.footer-button:active {
  transform: scale(0.98);
}
`;

  constructor() {
    super();
    // 添加到窗口列表
    movePanelItemList.push(this);
    // 设置初始层级
    this.zIndex = ++movePanelItemMaxZindex;
  }
  /** 关闭移动窗口 */
  hideMovePanel() {
    this.isDisplay = false;
    console.debug('关闭事件');
    this.dispatchEvent(new CustomEvent('close', {
      detail: { isDisplay: this.isDisplay, message: '关闭事件' },
      bubbles: true,
      composed: true
    }));
  }
  /** 显示移动窗口 */
  showMovePanel() {
    this.isDisplay = true;
    console.debug('显示事件');
    this.dispatchEvent(new CustomEvent('show', {
      detail: { isDisplay: this.isDisplay },
      bubbles: true,
      composed: true
    }));
  }
  /** 显示状态翻转 */
  toogleDisplay() {
    if (this.isDisplay) {
      this.hideMovePanel();
    } else {
      this.showMovePanel();
    }
  }
  // 添加拖动功能
  dragging = false
  mouseDragging(e: MouseEvent) {
    // console.debug('标题按下');
    // 窗口原本位置
    let templeft = this.left;
    // 窗口原本位置
    let temptop = this.top;

    // 窗口左上角的偏移量
    let offsetX = e.clientX - templeft;
    let offsetY = e.clientY - temptop;

    // console.debug('鼠标位置', e.clientX, e.clientY);
    // console.debug('窗口位置', templeft, temptop);
    (this.dragging == false) && (this.dragging = true);
    document.onmousemove = (e) => {
      if (this.dragging) {
        this.left = e.clientX - offsetX;
        this.top = e.clientY - offsetY;
      }
    }
    document.onmouseup = () => {
      // console.debug('标题抬起');
      this.dragging && (this.dragging = false);
      document.onmousemove = null
    }
  }
  // 适配移动端
  touchDragging(e: TouchEvent) {
    // console.debug('触摸标题按下');
    // 窗口原本位置
    let templeft = this.left;
    // 窗口原本位置
    let temptop = this.top;

    // 窗口左上角的偏移量
    let offsetX = e.touches[0].clientX - templeft;
    let offsetY = e.touches[0].clientY - temptop;

    // console.debug('触摸鼠标位置', e.touches[0].clientX, e.touches[0].clientY);
    // console.debug('触摸窗口位置', templeft, temptop);
    (this.dragging == false) && (this.dragging = true);
    document.ontouchmove = (e) => {
      if (this.dragging) {
        this.left = e.touches[0].clientX - offsetX;
        this.top = e.touches[0].clientY - offsetY;
      }
    }
    document.ontouchend = () => {
      // console.debug('标题抬起');
      this.dragging && (this.dragging = false);
      document.onmousemove = null
    }
  }
  // 置顶窗口
  putTop() {
    // console.debug('置顶窗口');
    let res = false;
    if (movePanelItemList.includes(this)) {
      // 先把比它大的都减小一层
      for (let i = 0; i < movePanelItemList.length; i++) {
        if (movePanelItemList[i].zIndex > this.zIndex)
          movePanelItemList[i].zIndex = movePanelItemList[i].zIndex - 1;
      }
      // 再把自己设置成最高的
      this.zIndex = movePanelItemMaxZindex;
      res = true;
      // console.debug('置顶窗口成功');
    } else {
      // console.warn('置顶失败，窗口不在列表中');
      res = false;
    }
    return res;
  }

  /**
   * 切换元素的置顶状态和显示状态
   * 
   * 当元素的zIndex不等于最大移动面板层级时，将元素置于顶层并显示移动面板；
   * 当元素的zIndex等于最大移动面板层级时，切换元素的显示状态
   */
  putTopToggel() {
    // 如果当前层级不是最顶层，则置顶并显示移动面板
    if (this.zIndex != movePanelItemMaxZindex) {
      this.putTop();
      this.showMovePanel();
    } else {
      // 如果已经是顶层，则切换显示状态
      this.toogleDisplay();
    }
  }
  render() {
    return html`
<div
  class="panel"
  style="
    width: ${this.width}px;
    height: ${this.height + 80}px;
    left: ${this.left}px;
    top: ${this.top}px;
    display: ${this.isDisplay ? 'block' : 'none'};
    z-index: ${this.zIndex};
    "
    @mousedown="${this.putTop}"
    @touchstart="${this.putTop}"
>
  <div
    class="header"
    style="background-color: ${this.headerBackgroundColor}; color: ${this.headerColor};"
    @mousedown="${this.mouseDragging}"
    @touchstart="${this.touchDragging}"
  >
    <div class="header-left">
      <div class="header-icon">
        <slot name="left-icon" class="left-icon">
          <hm-icon icon="${this.icon}" size="24px"></hm-icon>
        </slot>
      </div>
      <div class="header-title">${this.titleContent}</div>
    </div>
    <div class="header-close" @click="${this._handleClose}">
      <slot name="right-icon" class="right-icon">
        <hm-icon icon="close" size="18px"></hm-icon>
      </slot>
    </div>
  </div>
  <div
    class="body"
    style="background-color: ${this.bodyBackgroundColor}; color: ${this.bodyColor}; height:${this.height}px;width:${this.width}px;"
  >
    <slot></slot>
  </div>
  <div class="footer" style="background-color: ${this.footerBackgroundColor};width:${this.width}px;">
    <hm-button
      class="footer-button footer-button-left"  
      icon="magic-wand"
      width="100%"
      backgroundColor="${this.buttonBackgroundColor}"
      color="${this.buttonColor}"
      @click="${this._handleLeftButtonClick}"
    >
      ${this.leftButtonText}
      </hm-button>
    <hm-button
      class="footer-button footer-button-right"
      icon="magic-wand"
      width="100%"
      backgroundColor="${this.buttonColor}"
      color="${this.buttonBackgroundColor}"
      @click="${this._handleRightButtonClick}"
    >
      ${this.rightButtonText}
    </hm-button>
  </div>
</div>

                `;
  }

  _handleClose() {
    this.hideMovePanel();
  }

  _handleLeftButtonClick() {
    this.dispatchEvent(new CustomEvent('left-button-click', {
      detail: { message: '左侧按钮被点击' },
      bubbles: true,
      composed: true
    }));
  }

  _handleRightButtonClick() {
    this.dispatchEvent(new CustomEvent('right-button-click', {
      detail: { message: '右侧按钮被点击' },
      bubbles: true,
      composed: true
    }));
  }
}
