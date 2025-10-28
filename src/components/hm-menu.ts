import { LitElement, css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('hm-menu')
export class HmMenu extends LitElement {
  @property({ type: String })
  icon = 'magic-wand';
  @property({ type: String })
  content = 'HortiMagic';
  @property({ type: Boolean })
  flag = false;
  @property({ type: Boolean })
  isMenuItem = false;



  static styles = css`
:host {
  color: rgb(33,33,33);
  height: 56px;
}
.menu:hover {
  color: rgba(255, 255, 0, 1);
}
.menu {
  height: 56px;
  align-items: center;
}
.icon {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 56px;
  width: 56px;
}
.left {
  margin-right: 16px;
  color: rgb(117,117,117);
}
.right {
  position: absolute;
  right: 2px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.content {
  font-size: 16px;
  font-weight:bold;
  margin-right:auto;
}
.is-menu-item {
  background:rgb(240,240,240);
}
.not-menu-item {
 background:rgb(255,255,255);
}
`;

  /** 触发点击事件 */
  handleClick() {
    if (!this.isMenuItem)
      this.flag = !this.flag;
    this.dispatchEvent(new CustomEvent('hm-menu-click'));
  }

  render() {
    return html`
<div
  class="menu ${this.isMenuItem ? 'is-menu-item' : 'not-menu-item'}"
  style="display:${this.isMenuItem && !this.flag ? 'none' : 'flex'}"
  @click="${this.handleClick}"
>
  <hm-icon class="left icon" icon="${this.icon}" size="24px"></hm-icon>
  <div class="content">
    <slot name="content"> ${this.content} </slot>
  </div>
  <div class="right">
    <slot name="right">
      ${this.isMenuItem ? '' : html`<hm-icon
        class="icon right"
        icon="${this.flag ? 'arrow-up' : 'arrow-down'}"
      ></hm-icon
      >`}
    </slot>
  </div>
</div>




`;
  }
}