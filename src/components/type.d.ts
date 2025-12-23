import type { HmNotification } from "./hm-notification";
import type { HmButton } from "./hm-button";
import type { HmIcon } from "./hm-icon";
import type { HmMenu } from "./hm-menu";
import type { HmMovePanel } from "./hm-move-panel";
import type { HmCell } from "./hm-cell";
import type { HmSelect } from "./hm-select";
import type { HmSwipeCell } from "./hm-swipe-cell";
import type { HmSwitch } from "./hm-switch";
import type { HmAccordion } from "./hm-accordion";
import type { HmInput } from "./hm-input";
import type { HmDialog } from "./hm-dialog";

declare global {
    interface HTMLElementTagNameMap {
        'hm-accordion': HmAccordion;
        'hm-button': HmButton;
        'hm-cell': HmCell;
        'hm-dialog': HmDialog;
        'hm-input': HmInput;
        'hm-menu': HmMenu
        "hm-move-panel": HmMovePanel;
        "hm-notification": HmNotification;
        "hm-select": HmSelect,
        "hm-swipe-cell": HmSwipeCell;
        'hm-switch': HmSwitch;
        "hm-icon": HmIcon;
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

// customElements.define('hm-', Hm);