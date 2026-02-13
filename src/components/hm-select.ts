import { LitElement, css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { createRef, ref, type Ref } from 'lit/directives/ref.js';

/**
 * HmSelect 自定义下拉选择组件
 * 
 * 使用示例：
 * ```html
 * <!-- 基础用法 -->
 * <hm-select 
 *   index="1"
 *   label-list='[{"name": "选项1", "value": 1}, {"name": "选项2", "value": 2}]'>
 * </hm-select>
 * 
 * <!-- 监听选择变化事件 -->
 * <hm-select 
 *   id="mySelect"
 *   index="0"
 *   label-list='[{"name": "苹果", "value": "apple"}, {"name": "香蕉", "value": "banana"}]'>
 * </hm-select>
 * 
 * <script>
 *   document.getElementById('mySelect').addEventListener('hm-select-change', (e) => {
 *     console.log(`选择了: ${e.detail.name}, 值: ${e.detail.value}, 索引: ${e.detail.index}`);
 *   });
 * </script>
 * ```
 * 
 * 也可以通过JavaScript动态设置属性：
 * ```javascript
 * const selectEl = document.createElement('hm-select');
 * selectEl.labelList = [
 *   { name: '春季', value: 'spring' },
 *   { name: '夏季', value: 'summer' },
 *   { name: '秋季', value: 'autumn' },
 *   { name: '冬季', value: 'winter' }
 * ];
 * selectEl.addEventListener('hm-select-change', (e) => {
 *   console.log(e.detail); // { index: number, value: any, name: string }
 * });
 * ```
 */
@customElement('hm-select')
export class HmSelect extends LitElement {
  /**
   * 当前选中项的索引，默认为 0
   * @type {number}
   * @default 0
   */
  @property({ type: Number, reflect: true })
  index: number = 0;

  /**
   * 当前选中项的值
   * @type {any}
   * @default 0
   */
  @property({ reflect: true })
  value: any = 0;

  /**
   * 选择项列表，每个项为 {name: string, value: any} 的对象
   * @type {Array<{name: string, value: any}>}
   * @default [{ name: '选项0', value: 0 }, { name: '选项1', value: 1 }, { name: '选项2', value: 2 }]
   */
  @property({ attribute: 'label-list' })
  labelList: Array<{ name: string, value: any }> = [
    { name: '选项0', value: 0 },
    { name: '选项1', value: 1 },
    { name: '选项2', value: 2 }
  ];

  /**
   * 是否禁用选择器
   * @type {boolean}
   * @default false
   */
  @property({ type: Boolean })
  disabled: boolean = false;

  private _selectRef: Ref<HTMLSelectElement> = createRef();

  static styles = css`
    :host {
      display: inline-block;
      position: relative;
    }
    
    .select-wrapper {
      display: inline-block;
      position: relative;
    }
    
    select {
      padding: 8px 30px 8px 12px;
      border: 1px solid #ccc;
      border-radius: 4px;
      background-color: #fff;
      font-size: 14px;
      cursor: pointer;
      appearance: none;
      min-width: 120px;
      outline: none;
    }
    
    select:focus {
      border-color: #007cba;
      box-shadow: 0 0 0 2px rgba(0, 124, 186, 0.3);
    }
    
    select:disabled {
      background-color: #f5f5f5;
      cursor: not-allowed;
      opacity: 0.6;
    }
    
    .select-arrow {
      position: absolute;
      right: 10px;
      top: 50%;
      transform: translateY(-50%);
      pointer-events: none;
      width: 0;
      height: 0;
      border-left: 5px solid transparent;
      border-right: 5px solid transparent;
      border-top: 5px solid #999;
    }
  `;

  connectedCallback() {
    super.connectedCallback();
    // 设置默认选中项
    this.index = this.index < this.labelList.length ? this.index : 0;

    // 根据index设置当前值
    if (this.index < this.labelList.length) {
      this.value = this.labelList[this.index].value;
    }
  }

  render() {
    return html`
      <div class="select-wrapper">
        <select 
          ${ref(this._selectRef)}
          .value="${this.index}"
          ?disabled="${this.disabled}"
          @change="${this._handleChange}"
        >
          ${this.labelList.map((item, idx) => html`
            <option .value="${idx}">${item.name}</option>
          `)}
        </select>
        <div class="select-arrow"></div>
      </div>
    `;
  }

  /**
   * 处理选择项改变事件
   * @param {Event} event - 选择框的change事件
   * @private
   */
  private _handleChange(event: Event) {
    const target = event.target as HTMLSelectElement;
    const newIndex = parseInt(target.value);

    if (newIndex !== this.index && newIndex >= 0 && newIndex < this.labelList.length) {
      this.index = newIndex;
      this.value = this.labelList[newIndex].value;

      // 触发自定义事件，传递选项名称、值和索引
      this.dispatchEvent(new CustomEvent('hm-select-change', {
        detail: {
          index: this.index,
          value: this.value,
          name: this.labelList[this.index].name
        },
        bubbles: true,
        composed: true
      }));
    }
  }
}