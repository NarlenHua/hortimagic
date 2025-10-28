import { LitElement, css, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'


/** 通知消息组件
 * @example
 * ```html
 * <!-- 基础用法 -->
<hm-notification 
  title="提示" 
  content="这是一条通知信息">
</hm-notification>

<!-- 自定义颜色 -->
<hm-notification 
  title="成功" 
  content="操作成功" 
  text-color="#ffffff" 
  background-color="#4caf50">
</hm-notification>

<!-- 自定义显示时间(3秒) -->
<hm-notification 
  title="提示" 
  content="这条信息显示3秒" 
  display-time="3000">
</hm-notification>
```
 */
@customElement('hm-notification')
export class HmNotification extends LitElement {
  /** 左边图标 */
  @property()
  leftIcon = 'magic-wand';

  /** 标题 */
  @property()
  title = 'HortiMagic';

  /** 正文 */
  @property()
  content = 'Hello iirose!';

  /** 右边图标*/
  @property()
  rightIcon = '';

  /** 显示时间,单位毫秒 */
  @property()
  displayTime = 999999;

  // 自定义字体颜色属性
  @property()
  color = 'rgb(33,33,33)';

  // 自定义背景颜色属性
  @property()
  backgroundColor = 'rgba(255,255,255,0.9)';

  static styles = css`
:host{
  display: block;
  width: auto;
  z-index: 9999999;
  margin: 2px;
  animation: slideInRight 0.3s ease-out forwards;
}

:host([leaving]) {
  animation: slideOutRight 0.3s ease-in forwards;
}

@keyframes slideInRight {
  from {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
}

@keyframes slideOutRight {
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }
}

.hm-notification{ 
  display: flex;
  align-items: center;
  width:fit-content;
  max-width: 320px;
  border-radius: 10px;
  
}
.hm-notification-main{
  margin-right: 8px;
  padding: 8px;
}
.hm-notification-title{
  font-size: 16px;
  font-weight: bold;
}
.hm-notification-content{
  font-size: 14px;
}
.icondiv{
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
}
`;

  // 组件挂载后启动定时器
  firstUpdated() {
    if (this.displayTime > 0) {
      setTimeout(() => {
        this.startLeaveAnimation();
      }, this.displayTime);
    }
  }

  private startLeaveAnimation() {
    this.setAttribute('leaving', '');

    // 动画结束后移除元素
    setTimeout(() => {
      this.remove();
    }, 300); // 与动画时长保持一致
  }

  render() {
    return html`
<div
  class="hm-notification"
  style="${this.color ? `border-color: ${this.color};` : ''} 
            ${this.color ? `color: ${this.color};` : ''} 
            ${this.backgroundColor ? `background-color: ${this.backgroundColor};` : ''}"
>
  ${this.leftIcon ? html`
  <div class="icondiv">
    <hm-icon icon="${this.leftIcon}" size="24px"></hm-icon>
  </div>
  ` : ''}

  <div class="hm-notification-main">
    <div class="hm-notification-title">${this.title}</div>
    <div class="hm-notification-content">${this.content}</div>
  </div>
  ${this.rightIcon ? html`
  <div class="icondiv">
    <hm-icon icon="${this.rightIcon}" size="24px"></hm-icon>
  </div>
  ` : ''}
</div>
`;
  }


}

declare global {
  interface HTMLElementTagNameMap {
    "hm-notification": HmNotification;
  }
}