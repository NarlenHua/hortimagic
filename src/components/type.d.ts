import type { HmNotification } from "./hm-notification";
import type { HmIcon } from "./hm-icon";
import type { HmMenu } from "./hm-menu";
import type { HmMovePanel } from "./hm-move-panel";
import type { HmCell } from "./hm-cell";
import type { HmSwipeCell } from "./hm-swipe-cell";
import type { HcSwitch, HmSwitch } from "./hm-switch";
import type { HmAccordion } from "./hm-accordion";
import type { HmInput } from "./hm-input";
import type { HmDialog } from "./hm-dialog";

declare global {
    interface HTMLElementTagNameMap {
        "hm-icon": HmIcon;
        'hm-menu': HmMenu
        "hm-move-panel": HmMovePanel;
        "hm-notification": HmNotification;
        'hm-cell': HmCell;
        "hm-swipe-cell": HmSwipeCell;
        'hm-switch': HmSwitch;
        'hm-accordion': HmAccordion;
        'hm-input': HmInput;
        'hm-dialog': HmDialog;
    }
}

// import { LitElement, css, html, render } from 'lit';
// import { customElement, property } from 'lit/decorators.js';


// @customElement('hm-')
// export class Hm extends LitElement {
//   @property({ type: String })
//   icon = 'magic-wand';
//   /** 触发点击事件 */
//   handelClick() {
//     this.dispatchEvent(new CustomEvent('hmclick'));
//   }
//   static styles = css`
// :host {
//   display: inline-block;
// }
// `;

//   render() {
//     return html``;
//   }
// }