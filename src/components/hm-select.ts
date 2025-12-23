import { LitElement, css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { createRef, ref } from 'lit/directives/ref.js';
import type { Ref } from 'lit/directives/ref.js';

/**
 * HmSelect 是一个可自定义的下拉选择组件，基于 LitElement 构建
 * 
 * @example
 * 基本用法:
 * ```html
 * <hm-select .labelList="${[['选项1', 'value1'], ['选项2', 'value2']]}" @change="${(e) => logger.log('hm-select',e.detail)}"></hm-select>
 * ```
 * 
 * @example
 * 禁用状态:
 * ```html
 * <hm-select .labelList="${[['选项1', 'value1'], ['选项2', 'value2']]}" disabled></hm-select>
 * ```
 * 
 * @example
 * 带默认选中项:
 * ```html
 * <hm-select .labelList="${[['选项1', 'value1'], ['选项2', 'value2']]}" .index="${1}"></hm-select>
 * ```
 * 
 * @example
 * 使用数字值:
 * ```html
 * <hm-select .labelList="${[['一', 1], ['二', 2], ['三', 3]]}" .index="${0}"></hm-select>
 * ```
 * 
 * @slot - 默认插槽，用于放置额外内容
 * @fires change - 当选择项改变时触发，携带 { value, label, index } 信息
 */
@customElement('hm-select')
export class HmSelect extends LitElement {
  /**
   * 当前选中项的索引，默认为 0
   * @type {number}
   */
  @property({ type: Number, reflect: true })
  index = 0;

  /**
   * 当前选中项的值
   * @type {any}
   */
  @property({ reflect: true })
  value: any = 0;

  /**
   * 选择项列表，每个项为 [label, value] 的数组格式
   * @type {Array<Array<string | any>>}
   */
  @property({ type: Array, attribute: 'label-list' })
  labelList: (string | any)[][] = [['0', 0]];

  /**
   * 是否禁用选择器
   * @type {boolean}
   */
  @property({ type: Boolean })
  disabled = false;

  private selectRef: Ref<HTMLSelectElement> = createRef();

  static styles = css`
    :host {
      display: inline-block;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
      font-size: 14px;
    }

    .select-wrapper {
      position: relative;
      display: inline-block;
    }

    select {
      width: 100%;
      padding: 8px 12px;
      border: 1px solid #ccc;
      border-radius: 4px;
      background-color: #fff;
      font-size: inherit;
      cursor: pointer;
      box-sizing: border-box;
      appearance: none;
      padding-right: 30px;
    }

    select:focus {
      outline: none;
      border-color: #007cba;
      box-shadow: 0 0 0 2px rgba(0, 124, 186, 0.3);
    }

    select:disabled {
      background-color: #f5f5f5;
      color: #999;
      cursor: not-allowed;
    }

    .select-icon {
      position: absolute;
      right: 8px;
      top: 50%;
      transform: translateY(-50%);
      pointer-events: none;
      color: #666;
    }

    .select-wrapper::after {
      content: '';
      position: absolute;
      right: 10px;
      top: 50%;
      transform: translateY(-50%) rotate(0deg);
      border-left: 5px solid transparent;
      border-right: 5px solid transparent;
      border-top: 5px solid #666;
      pointer-events: none;
    }
  `;

  constructor() {
    super();
    // 初始化时设置默认值
  }

  connectedCallback() {
    super.connectedCallback();
    // 设置默认选中项
    this.index = this.index < this.labelList.length ? this.index : 0;

    // 根据index设置当前值
    if (this.index < this.labelList.length) {
      this.value = this.labelList[this.index][1];
    }
  }

  render() {
    return html`
      <div class="select-wrapper">
        <select 
          ${ref(this.selectRef)}
          ?disabled="${this.disabled}"
          @change="${this._handleChange}"
        >
          ${this.labelList.map(([label, value], idx) => html`
            <option 
              value="${value}" 
              ?selected="${idx === this.index}"
            >
              ${label}
            </option>
          `)}
        </select>
        <span class="select-icon"></span>
      </div>
    `;
  }

  /**
   * 处理选择项改变事件
   * @param {Event} e - change 事件
   * @private
   */
  private _handleChange(e: Event) {
    const selectElement = e.target as HTMLSelectElement;
    const selectedIndex = selectElement.selectedIndex;
    const selectedOption = selectElement.options[selectedIndex];

    // 更新组件内部状态
    this.index = selectedIndex;
    // 从labelList中找到对应的实际值类型，而不是直接使用字符串
    if (selectedIndex < this.labelList.length) {
      this.value = this.labelList[selectedIndex][1];
    } else {
      this.value = selectedOption.value;
    }

    // 触发自定义事件，传递当前选中的值
    this.dispatchEvent(new CustomEvent('change', {
      detail: {
        value: selectedOption.value,
        label: selectedOption.text,
        index: selectedIndex
      },
      bubbles: true,
      composed: true
    }));
  }

  /**
   * 获取当前选中的值
   * @returns {any} 当前选中的值，返回labelList中对应项的实际值类型
   */
  getValue(): any {
    if (this.selectRef.value) {
      // 获取当前选中的值
      const selectValue = this.selectRef.value.value;
      // 尝试从labelList中找到匹配项并返回原始值
      const selectedIndex = Array.from(this.selectRef.value.options)
        .findIndex(option => option.value === selectValue);

      if (selectedIndex !== -1 && selectedIndex < this.labelList.length) {
        return this.labelList[selectedIndex][1];
      }

      // 如果没找到匹配项，返回当前DOM值
      return selectValue;
    }
    return this.value;
  }

  /**
   * 设置选中值
   * @param {any} value - 要设置的值，可以是字符串或数字等类型
   */
  setValue(value: any) {
    // 查找labelList中匹配的索引
    const idx = this.labelList.findIndex(item => item[1] === value);

    if (this.selectRef.value) {
      if (idx !== -1) {
        // 如果找到匹配项，使用该项的实际值（转换为字符串设置到DOM）
        this.selectRef.value.value = String(this.labelList[idx][1]);
      } else {
        // 如果未找到匹配项，尝试直接设置值
        this.selectRef.value.value = String(value);
      }
    }

    // 同时更新组件内部的value和index
    this.value = value;
    if (idx !== -1) {
      this.index = idx;
    }
  }
}