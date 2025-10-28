import { LitElement, css, html } from 'lit'
import { customElement, property, query } from 'lit/decorators.js'

/** 
 * 滑动单元格组件
 * 实现左右滑动显示操作按钮的交互效果
 * 
 * @slot content - 主内容区域
 * @slot left-actions - 左侧操作按钮组
 * @slot right-actions - 右侧操作按钮组
 * 
 * @example
 * <hm-swipe-cell>
 *   <!-- 主内容 -->
 *   <div slot="content">...</div>
 *   <!-- 左侧操作按钮 -->
 *   <div slot="left-actions">...</div>
 *   <!-- 右侧操作按钮 -->
 *   <div slot="right-actions">...</div>
 * </hm-swipe-cell>
 */
@customElement('hm-swipe-cell')
export class HmSwipeCell extends LitElement {
    @property() _isDragging = false;
    @property() _startX = 0;
    @property() _currentTranslate = 0;
    @property() _prevTranslate = 0;
    @property() _animationId = 0;
    @property() _velocity = 0;
    @property() _lastX = 0;
    @property() _lastTime = 0;
    @property() _isOpen = false;
    @property() rightButtonName = '右侧按钮';
    /**
     * 右边按钮点击回调函数
     */
    @property()
    rightButtonCallback = function () {
        console.debug('点击了一下');
    };

    @query('.slider') sliderElement!: HTMLElement;
    @query('.content') contentElement!: HTMLElement;
    @query('.left-actions') leftActions!: HTMLElement;
    @query('.right-actions') rightActions!: HTMLElement;

    leftActionsWidth: number = 0;
    rightActionsWidth: number = 0;

    static styles = css`
        :host {
            display: block;
            overflow: hidden;
            position: relative;
            user-select: none;
            touch-action: pan-y;
            height: 60px;
            background: #f9f9f9;
            border-radius: 8px;
            margin: 10px 0;
        }
        .swipe-container {
            position: relative;
            width: 100%;
            height: 100%;
            background: white;
            border-radius: 8px;
            box-shadow: 0 1px 3px rgba(0,0,0,0.1);
            overflow: hidden;
        }
        
        .slider {
            position: relative;
            width: 100%;
            height: 100%;
            transition: transform 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
            will-change: transform;
            z-index: 2;
            background: white;
        }
        
        .content {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 0 15px;
            height: 100%;
            width: 100%;
            position: relative; // 改为相对定位
            top: 0;
            left: 0;
            background: white;
            box-sizing: border-box;
            border-radius: 8px;
        }
        
        .actions {
            position: absolute;
            top: 0;
            bottom: 0;
            display: flex;
            align-items: center;
            z-index: 1;
            transition: transform 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
        
        .left-actions {
            left: 0;
            padding-left: 10px;
            transform: translateX(-100%);
        }
        
        .right-actions {
            right: 0;
            padding-right: 10px;
            transform: translateX(100%);
        }
        
        .action-btn {
            height: 44px;
            border: none;
            color: white;
            padding: 0 20px;
            cursor: pointer;
            font-size: 14px;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: all 0.2s ease;
            border-radius: 6px;
            margin: 0 4px;
            min-width: 80px;
            font-weight: 500;
        }
        
        .action-btn:hover {
            transform: scale(1.05);
            filter: brightness(1.1);
        }
        
        .action-btn:active {
            transform: scale(0.95);
        }
        
        .action-btn.favorite {
            background: linear-gradient(135deg, #2196F3, #1976D2);
        }
        
        .action-btn.delete {
            background: linear-gradient(135deg, #f44336, #d32f2f);
        }
        
        .action-btn.mark {
            background: linear-gradient(135deg, #FF9800, #F57C00);
        }
        
        .action-btn.archive {
            background: linear-gradient(135deg, #9C27B0, #7B1FA2);
        }
        
        .action-btn.share {
            background: linear-gradient(135deg, #4CAF50, #388E3C);
        }
        
        .action-btn.edit {
            background: linear-gradient(135deg, #607D8B, #455A64);
        }
        .contentslot{
        width: 100%;
        }
    `;
    firstUpdated() {
        this.calculateActionWidths();
        this.addEventListeners();
    }

    disconnectedCallback() {
        super.disconnectedCallback();
        this.removeEventListeners();
    }

    calculateActionWidths() {
        this.leftActionsWidth = this.leftActions ? this.leftActions.offsetWidth : 0;
        this.rightActionsWidth = this.rightActions ? this.rightActions.offsetWidth : 0;
    }

    addEventListeners() {
        this.sliderElement.addEventListener('mousedown', this.onDragStart);
        this.sliderElement.addEventListener('touchstart', this.onTouchStart, { passive: false });

        document.addEventListener('mousemove', this.onDragMove);
        document.addEventListener('touchmove', this.onTouchMove, { passive: false });

        document.addEventListener('mouseup', this.onDragEnd);
        document.addEventListener('touchend', this.onTouchEnd);
    }

    removeEventListeners() {
        this.sliderElement.removeEventListener('mousedown', this.onDragStart);
        this.sliderElement.removeEventListener('touchstart', this.onTouchStart);

        document.removeEventListener('mousemove', this.onDragMove);
        document.removeEventListener('touchmove', this.onTouchMove);

        document.removeEventListener('mouseup', this.onDragEnd);
        document.removeEventListener('touchend', this.onTouchEnd);
    }

    onDragStart = (e: MouseEvent) => {
        e.preventDefault();
        this.startDrag(e.clientX);
        this.sliderElement.style.cursor = 'grabbing';
        this.sliderElement.style.transition = 'none';
    }

    onTouchStart = (e: TouchEvent) => {
        e.preventDefault();
        this.startDrag(e.touches[0].clientX);
        this.sliderElement.style.transition = 'none';
    }

    startDrag = (clientX: number) => {
        this._isDragging = true;
        this._startX = clientX;
        this._lastX = clientX;
        this._lastTime = Date.now();
        this._isOpen = Math.abs(this._prevTranslate) > 10;
        // 每次拖动开始时重新计算按钮宽度
        this.calculateActionWidths();
    }

    onDragMove = (e: MouseEvent) => {
        if (!this._isDragging) return;
        e.preventDefault();
        this.handleMove(e.clientX);
    }

    onTouchMove = (e: TouchEvent) => {
        if (!this._isDragging) return;
        e.preventDefault();
        this.handleMove(e.touches[0].clientX);
    }

    handleMove(currentX: number) {
        const currentTime = Date.now();
        const timeDiff = currentTime - this._lastTime;

        if (timeDiff > 0) {
            this._velocity = (currentX - this._lastX) / timeDiff;
            this._lastX = currentX;
            this._lastTime = currentTime;
        }

        const diff = currentX - this._startX;
        let newTranslate = this._prevTranslate + diff;

        // 限制滑动范围，确保按钮紧贴内容边界
        if (newTranslate > this.leftActionsWidth) {
            // 添加弹性效果，超过边界时增加阻力
            const overshoot = newTranslate - this.leftActionsWidth;
            newTranslate = this.leftActionsWidth + this.easeOut(overshoot, 30);
        } else if (newTranslate < -this.rightActionsWidth) {
            const overshoot = newTranslate + this.rightActionsWidth;
            newTranslate = -this.rightActionsWidth + this.easeOut(overshoot, 30);
        }

        this._currentTranslate = newTranslate;
        this.updateSliderPosition();
    }

    // 弹性效果函数，使超出边界时有缓冲效果
    easeOut(overshoot: number, maxResistance: number): number {
        maxResistance;
        return overshoot * 0.2;
    }

    onDragEnd = () => {
        this.finishDrag();
        this.sliderElement.style.cursor = 'grab';
    }

    onTouchEnd = () => {
        this.finishDrag();
    }

    finishDrag() {
        this._isDragging = false;
        this.sliderElement.style.transition = 'transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)';

        // 降低阈值，使按钮更容易跟随显示
        const threshold = 5; // 进一步降低阈值，提高灵敏度
        const velocityThreshold = 0.1; // 降低速度阈值

        let targetTranslate = 0;

        // 优化判断逻辑，优先考虑滑动距离
        if (this._currentTranslate > threshold ||
            (this._currentTranslate > 0 && this._velocity > velocityThreshold)) {
            // 显示左侧按钮，确保完全展开
            targetTranslate = this.leftActionsWidth;
        } else if (this._currentTranslate < -threshold ||
            (this._currentTranslate < 0 && this._velocity < -velocityThreshold)) {
            // 显示右侧按钮，确保完全展开
            targetTranslate = -this.rightActionsWidth;
        } else {
            // 未达阈值，恢复原位
            targetTranslate = 0;
        }

        // 优化已打开状态的处理逻辑
        if (this._isOpen) {
            // 降低关闭阈值，使关闭操作更灵敏
            const closeThreshold = 5; // 进一步降低关闭阈值
            if ((this._prevTranslate > 0 && this._currentTranslate < this._prevTranslate - closeThreshold) ||
                (this._prevTranslate < 0 && this._currentTranslate > this._prevTranslate + closeThreshold)) {
                targetTranslate = 0;
            } else {
                // 保持当前打开状态
                targetTranslate = this._prevTranslate;
            }
        }

        this._currentTranslate = targetTranslate;
        this._prevTranslate = targetTranslate;

        this.updateSliderPosition();
        this._velocity = 0;
    }

    updateSliderPosition() {
        if (this._animationId) {
            cancelAnimationFrame(this._animationId);
        }

        this._animationId = requestAnimationFrame(() => {
            this.sliderElement.style.transform = `translateX(${this._currentTranslate}px)`;

            // 优化按钮跟随逻辑，确保按钮始终紧贴内容边界
            if (this._currentTranslate > 0) {
                // 向右滑动时，左侧按钮从左侧平滑跟随
                const leftProgress = Math.min(this._currentTranslate / this.leftActionsWidth, 1);
                this.leftActions.style.transform = `translateX(${-100 + (leftProgress * 100)}%)`;
                this.rightActions.style.transform = 'translateX(100%)';
            } else if (this._currentTranslate < 0) {
                // 向左滑动时，右侧按钮从右侧平滑跟随
                const rightProgress = Math.min(-this._currentTranslate / this.rightActionsWidth, 1);
                this.rightActions.style.transform = `translateX(${100 - (rightProgress * 100)}%)`;
                this.leftActions.style.transform = 'translateX(-100%)';
            } else {
                // 居中时隐藏所有按钮
                this.leftActions.style.transform = 'translateX(-100%)';
                this.rightActions.style.transform = 'translateX(100%)';
            }
        });
    }

    render() {
        return html`
<div class="swipe-container">
  <div class="actions left-actions">
    <slot name="left-actions"> </slot>
  </div>
  <div class="slider">
      <slot name="content" class="content">
        <hm-cell></hm-cell>
      </slot>
  </div>
  <div class="actions right-actions">
    <slot name="right-actions">
      <hm-button type="primary" @hm-button-click="${this.rightButtonCallback}"
        >${this.rightButtonName}</hm-button
      >
    </slot>
  </div>
</div>
`;
    }
}
