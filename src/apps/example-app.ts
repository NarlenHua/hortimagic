// import { html, render } from 'lit-html';
import { html, render } from 'lit';
import { movePanelHolder } from '../holders/move-panel';
import { notice } from '../holders/notification';

async function initExampleApp() {
  let panel = document.createElement('hm-move-panel');
  panel.titleContent = '组件模板';
  panel.icon = 'template';
  // panel.showMovePanel();
  movePanelHolder.appendChild(panel);

  let template = html`

<h3>输入框</h3>
基本使用
<hm-input label="用户名" placeholder="请输入用户名"></hm-input>
带图标的输入框
<hm-input label="密码" icon="password" placeholder="请输入密码"></hm-input>
禁用状态
<hm-input label="禁用输入框" value="已禁用" enable="false"></hm-input>
只读状态
<hm-input label="只读输入框" value="只读内容" readonly="true"></hm-input>
<h3>折叠面板</h3>
  <hm-accordion>
 <span slot="header">我的折叠面板</span>
 <div>内容项 1</div>
 <div>内容项 2</div>
</hm-accordion>
<h3>滑动开关</h3>
<!-- 基础用法 -->
<hm-switch></hm-switch>

<!-- 默认开启 -->
<hm-switch checked></hm-switch>

<!-- 禁用状态 -->
<hm-switch disabled></hm-switch>

<!-- 加载状态 -->
<hm-switch loading></hm-switch>

<!-- 自定义颜色 -->
<hm-switch color="#ff4757"></hm-switch>
hc-s
<!-- 带图标 -->
<hm-switch openIcon="check" closeIcon="close"></hm-switch>

<!-- 监听状态变化 -->
<hm-switch  

@hm-switch-change 
="${(e: CustomEvent) => console.log('开关状态:', e.detail.checked)}"></hm-switch>
<h3>滑动单元格</h3>
<hm-swipe-cell>
  <!-- 主内容 -->
  <div slot="content">主内容</div>
  <!-- 左侧操作按钮 -->
  <div slot="left-actions">左侧操作</div>
  <!-- 右侧操作按钮 -->
  <div slot="right-actions">右侧操作</div>
</hm-swipe-cell>
<hm-swipe-cell>
  <!-- 主内容 -->
    <hm-cell
    slot="content"
      titleName="单元格标题"
      descripthion="这是描述信息"
      content="内容区域"
    >
    </hm-cell>
  <!-- 左侧操作按钮 -->
  <div slot="left-actions"><hm-button>删除</hm-button></div>
  <!-- 右侧操作按钮 -->
  <div slot="right-actions">
    <hm-button>修改</hm-button>
    <hm-button>运行</hm-button>
  </div>
</hm-swipe-cell>

<h3>单元格</h3>
  <hm-cell>
    <hm-switch slot="content"></hm-switch>
  </hm-cell>
<hm-cell titleName="单元格标题" descripthion="这是描述信息" content="内容区域">
</hm-cell>
<!-- 使用插槽自定义内容 -->
<hm-cell>
  <div slot="title">自定义标题</div>
  <div slot="description">自定义描述</div>
  <div slot="content">自定义内容</div>
</hm-cell>

<!-- 带点击事件 -->
<hm-cell
  titleName="可点击标题"
  content="点击查看详情"
  .titleClickCallback="${() => console.log('标题被点击')}"
  .contentClickCallback="${() => console.log('内容被点击')}"
>
</hm-cell>

<!-- 自定义样式 -->
<hm-cell
  titleName="自定义样式"
  content="特殊样式"
  style="--hm-cell-background: #f0f8ff; --hm-cell-title-color: #1890ff"
>
</hm-cell>
<h3>通知</h3>
<hm-button
  content="成功通知"
  @click="${() => notice.success('成功', '这是成功提示', 2000)}"
></hm-button>
<hm-button
  content="普通通知"
  @click="${() => notice.normal('普通', '这是普通提示', 3000)}"
></hm-button>
<hm-button
  content="警告通知"
  @click="${() => notice.warning('警告', '这是警告提示', 4000)}"
></hm-button>
<hm-button
  content="错误通知"
  @click="${() => notice.error('错误', '这是错误提示', 5000)}"
></hm-button>
<h3>按钮</h3>

<!-- 基础用法 -->
<hm-button content="普通按钮"></hm-button>

<!-- 带图标按钮 -->
<hm-button icon="plus" content="添加"></hm-button>

<!-- 自定义颜色 -->
<hm-button content="自定义样式" color="#ffffff" background="#4caf50"></hm-button>
</hm-button>

<!-- 禁用状态 -->
<hm-button content="禁用按钮" .enable="${false}"></hm-button>

<!-- 加载状态 -->
<hm-button content="加载中" .loading="${true}"></hm-button>

<!-- 自定义尺寸 -->
<hm-button content="大按钮" width="200px" height="50px"></hm-button>
<hm-button content="小按钮" width="60px" height="30px" fontSize="8px"></hm-button>
<h3>图标</h3>
<hm-icon></hm-icon>
  `;
  render(template, await panel.body);
  let menuItem = document.createElement('hm-menu');
  menuItem.content = "组件模板";
  menuItem.isMenuItem = true;
  menuItem.icon = 'template';

  menuItem.addEventListener('hm-menu-click', function () {
    panel.putTopToggel();
  });
  return menuItem;
}
export {
  initExampleApp
}