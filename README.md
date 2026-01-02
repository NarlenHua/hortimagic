# HortiMagic - 蔷薇花园脚本管理插件

HortiMagic（园艺魔法）是一个基于Lit构建的蔷薇花园（iirose）浏览器插件，提供了一套丰富的UI组件和脚本管理功能，用于增强花园的使用体验。

## 功能特性

- **UI组件库**: 提供多种常用的UI组件，如菜单、按钮、对话框、通知、开关、输入框等
- **脚本管理**: 支持动态添加、管理和运行外部脚本
- **状态管理**: 使用valtio实现响应式状态管理，支持自动保存设置
- **网络钩子**: 提供消息发送和接收的钩子函数，可以拦截和处理网络请求
- **配置系统**: 提供用户界面来配置插件的各种设置
- **日志系统**: 内置日志记录功能，便于调试和监控插件运行状态
- **通知系统**: 提供美观的通知组件和API

## 核心组件

- [hm-accordion](./src/components/hm-accordion.ts) - 手风琴组件
- [hm-button](./src/components/hm-button.ts) - 按钮组件
- [hm-cell](./src/components/hm-cell.ts) - 列表单元格组件
- [hm-dialog](./src/components/hm-dialog.ts) - 对话框组件
- [hm-icon](./src/components/hm-icon.ts) - 图标组件
- [hm-input](./src/components/hm-input.ts) - 输入框组件
- [hm-menu](./src/components/hm-menu.ts) - 菜单组件
- [hm-move-panel](./src/components/hm-move-panel.ts) - 可移动面板组件
- [hm-notification](./src/components/hm-notification.ts) - 通知组件
- [hm-select](./src/components/hm-select.ts) - 选择器组件
- [hm-swipe-cell](./src/components/hm-swipe-cell.ts) - 滑动单元格组件
- [hm-switch](./src/components/hm-switch.ts) - 开关组件

## 安装使用

1. 在花园中打开终端（左侧菜单）
2. 输入`js`命令
3. 输入本插件的脚本链接即可使用

## 开发

### 环境搭建

```bash
# 安装依赖
npm install

# 开发模式
npm run dev

# 构建
npm run build
```

### 项目结构

```
src/
├── apps/           # 应用模块
│   ├── config-app.ts     # 配置应用
│   ├── dialog-app.ts     # 对话框应用
│   ├── log-app.ts        # 日志应用
│   ├── main-app.ts       # 主应用
│   ├── script-app.ts     # 脚本管理应用
│   └── index.ts
├── components/     # UI组件
├── core/           # 核心功能
│   ├── Emitter.ts        # 事件发射器
│   ├── Message.ts        # 消息处理
│   ├── decoder.ts        # 消息解码器
│   ├── encoder.ts        # 消息编码器
│   ├── elements-hooks.ts # DOM元素钩子
│   ├── log-tools.ts      # 日志工具
│   ├── script-tools.ts   # 脚本管理工具
│   ├── socket-tools.ts   # 网络连接工具
│   ├── store.ts          # 状态管理
│   └── tools.ts          # 通用工具
├── holders/        # DOM容器
├── easy-tools.ts   # 简化工具
└── main.ts         # 入口文件
```

## 依赖

- [lit](https://lit.dev/) - 轻量级Web组件库
- [valtio](https://github.com/pmndrs/valtio) - Reaction-like状态管理
- [terser](https://github.com/terser/terser) - JavaScript压缩工具

## 许可证

MIT License

## 联系方式

如果遇到问题，可以联系作者：

1. 花园房间：[留不住别样年华](https://iirose.com/#s=61aef798c94e6&act=i:61aef798c94e6)
2. QQ群：[56246005](https://qun.qq.com/universal-share/share?ac=1&authKey=bWDSbs%2Bly0dpxZm%2Ff8OsufXeRWSn6fhRWfaz6K%2FJDCKY%2Bt05wP%2BsKeRkovoMfdfQ&busi_data=eyJncm91cENvZGUiOiI5OTU5MzE3MTAiLCJ0b2tlbiI6Im1NSVpiOUhWeE91ZDFLTERla2hiMzdaWDlBd2h3Z2s2ZFREMWMxbUhSaktNSTVIUUxOTkR6RjFQS0tnTWRjNUEiLCJ1aW4iOiIyOTE4NTIzNjk1In0%3D&data=L0gUu0j7KKkHQgShTclZcmvfKQKp7VSQOxmMKJcxhHUviRlnP5nY6pDW-PXvV305qdl4W8DIal1MqjUAPFoJEg&svctype=4&tempid=h5_group_info)