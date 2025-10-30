import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

/**
 * @example
 * <hm-dialog isopen>
 *   <h2>对话框标题</h2>
 *   <p>这是对话框内容</p>
 * </hm-dialog>
 * 
 * @example
 * <hm-dialog>
 *   <h2>带自定义按钮的对话框</h2>
 *   <p>这是对话框内容</p>
 *   <div slot="footer">
 *     <hm-button @click="handleCancel">取消</hm-button>
 *     <hm-button @click="handleConfirm">确定</hm-button>
 *   </div>
 * </hm-dialog>
 */
@customElement('hm-dialog')
export class HmDialog extends LitElement {
    static styles = css`
        :host {
            display: none;
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: 999999;
        }
        :host([isopen]) {
            display: block;
        }
        .overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.5);
        }
        
        .content {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: white;
            border-radius: 4px;
            min-width: 300px;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
            padding: 20px;
            color:rgb(0,0,0)
        }
        
        .footer {
            display: flex;
            justify-content: flex-end;
            gap: 10px;
            margin-top: 20px;
        }
        
        hm-button {
            min-width: 80px;
        }
    `;

    // 修改属性名以匹配使用的属性
    @property({ type: Boolean, attribute: 'isopen' })
    isOpen = false;
    // isOpen = true;

    dialog = this;

    open() {
        this.isOpen = true;
        this.dispatchEvent(new CustomEvent('hm-dialog-open'));
    }

    close() {
        this.isOpen = false;
        this.dispatchEvent(new CustomEvent('hm-dialog-close'));
    }

    /** 确认，触发 dialog-close dialog-confirm事件*/
    confirm() {
        // console.debug("确认对话框事件");
        this.close();
        this.dispatchEvent(new CustomEvent('hm-dialog-confirm'));
    }

    /** 取消，触发 dialog-close dialog-cancel事件*/
    cancel() {
        this.close();
        this.dispatchEvent(new CustomEvent('hm-dialog-cancel'));
    }

    updated(changedProperties: Map<string, unknown>) {
        if (changedProperties.has('isOpen')) {
            if (this.isOpen) {
                this.style.display = 'block';
            } else {
                this.style.display = 'none';
            }
        }
    }

    render() {
        return html`
<div class="overlay"
@click="${this.close}"
></div>
<div class="content">
    <slot></slot>
    <div class="footer">
        <slot name="footer">
            <hm-button @click="${() => { this.cancel(); console.debug("取消") }}">取消</hm-button>
            <hm-button @click="${() => { this.confirm(); console.debug("确定") }}">确定</hm-button>
        </slot>
    </div>
</div>
    `;
    }
}