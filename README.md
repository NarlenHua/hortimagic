# HortiMagic - 蔷薇花园脚本管理插件

HortiMagic（园艺魔法）是一个基于 [Lit](https://lit.dev/) 构建的蔷薇花园（iirose）浏览器插件，提供一套丰富的 Web Components UI 组件库和脚本管理功能，用于增强花园的使用体验。

## 功能特性

- **UI 组件库**: 基于 Lit 的 Web Components，提供菜单、按钮、对话框、通知、开关、输入框、选择器、手风琴等常用组件
- **脚本管理**: 支持动态添加、管理和运行外部脚本
- **状态管理**: 使用 [valtio](https://github.com/pmndrs/valtio) 实现响应式状态管理，配置自动持久化保存
- **网络钩子**: 提供消息发送和接收的拦截钩子，可拦截和处理 WebSocket 通信
- **配置系统**: 内置可视化配置面板，支持自定义插件参数
- **日志系统**: 内置分级日志记录功能，便于调试和监控插件运行状态
- **通知系统**: 提供美观的通知组件和编程式 API（支持 success / warning / error / normal）

## 核心组件

- [hm-accordion](./src/components/hm-accordion.ts) - 手风琴折叠面板
- [hm-button](./src/components/hm-button.ts) - 按钮
- [hm-cell](./src/components/hm-cell.ts) - 列表单元格
- [hm-dialog](./src/components/hm-dialog.ts) - 对话框
- [hm-icon](./src/components/hm-icon.ts) - 图标
- [hm-input](./src/components/hm-input.ts) - 输入框
- [hm-menu](./src/components/hm-menu.ts) - 菜单
- [hm-move-panel](./src/components/hm-move-panel.ts) - 可拖拽移动面板
- [hm-notification](./src/components/hm-notification.ts) - 通知提示
- [hm-select](./src/components/hm-select.ts) - 选择器
- [hm-swipe-cell](./src/components/hm-swipe-cell.ts) - 滑动操作单元格
- [hm-switch](./src/components/hm-switch.ts) - 开关

## 快速开始

在花园中使用插件：

1. 打开花园终端（左侧菜单）
2. 输入 `js` 命令
3. 粘贴插件的脚本链接即可加载使用

## 开发

### 环境要求

- [Node.js](https://nodejs.org/) >= 18
- npm >= 9

### 命令

```bash
# 安装依赖
npm install

# 启动开发服务器（支持 HMR 热更新）
npm run dev

# 生产构建
npm run build

# 预览构建产物
npm run preview
```

### 项目结构

```
hortimagic/
├── script/                 # 构建与部署脚本
│   ├── build-plugin.ts     # Vite 构建后处理插件
│   ├── upload.ts           # 上传脚本
│   └── upload.config.json  # 上传配置
├── src/
│   ├── apps/               # 应用模块
│   │   ├── config-app.ts   # 配置面板应用
│   │   ├── dialog-app.ts   # 对话框应用
│   │   ├── log-app.ts      # 日志面板应用
│   │   ├── main-app.ts     # 主应用入口
│   │   ├── script-app.ts   # 脚本管理应用
│   │   └── index.ts
│   ├── components/         # Lit Web Components
│   │   ├── type.d.ts       # 组件类型声明
│   │   └── index.ts
│   ├── core/               # 核心功能模块
│   │   ├── decoder.ts      # 消息解码器
│   │   ├── elements-hooks.ts # DOM 元素钩子
│   │   ├── Emitter.ts      # 事件发射器
│   │   ├── encoder.ts      # 消息编码器
│   │   ├── holders.ts      # DOM 容器管理
│   │   ├── log-tools.ts    # 日志工具
│   │   ├── Message.ts      # 消息处理
│   │   ├── script-tools.ts # 脚本管理工具
│   │   ├── socket-tools.ts # WebSocket 网络工具
│   │   ├── store.ts        # valtio 状态管理
│   │   ├── tools.ts        # 通用工具函数
│   │   └── index.ts
│   ├── easy-tools.ts       # 基于组件的便捷工具 API
│   └── main.ts             # 插件入口文件
├── types/                  # TypeScript 类型声明
│   ├── global.d.ts         # 全局类型声明
│   └── vite-env.d.ts       # Vite 环境类型
├── vite.config.ts          # Vite 构建配置
├── tsconfig.json           # TypeScript 配置
└── package.json
```

### 构建产物

构建后输出到 `dist/` 目录：

| 文件 | 说明 |
| ---- | ---- |
| `hortimagic.iife.js` | IIFE 格式产物（用于运行时注入） |
| `hortimagic.js` | ES Module 格式产物 |
| `hortimagic.user.js` | 用户脚本格式 |
| `hortimagic.txt` | 纯文本脚本格式 |
| `index.d.ts` | TypeScript 类型声明文件 |

## 技术栈

| 技术 | 用途 |
| ---- | ---- |
| [Lit](https://lit.dev/) | Web Components 组件框架 |
| [valtio](https://github.com/pmndrs/valtio) | 响应式状态管理 |
| [Vite](https://vitejs.dev/) | 构建工具 |
| [TypeScript](https://www.typescriptlang.org/) | 类型安全 |
| [terser](https://github.com/terser/terser) | 代码压缩 |
| [vite-plugin-dts](https://github.com/qmhc/vite-plugin-dts) | 类型声明生成 |

## 许可证

[MIT](./LICENSE)

## 联系方式

如有问题，可通过以下方式联系作者：

- 花园房间：[留不住别样年华](https://iirose.com/#s=61aef798c94e6&act=i:61aef798c94e6)
- QQ群：[56246005](https://qun.qq.com/universal-share/share?ac=1&authKey=bWDSbs%2Bly0dpxZm%2Ff8OsufXeRWSn6fhRWfaz6K%2FJDCKY%2Bt05wP%2BsKeRkovoMfdfQ&busi_data=eyJncm91cENvZGUiOiI5OTU5MzE3MTAiLCJ0b2tlbiI6Im1NSVpiOUhWeE91ZDFLTERla2hiMzdaWDlBd2h3Z2s2ZFREMWMxbUhSaktNSTVIUUxOTkR6RjFQS0tnTWRjNUEiLCJ1aW4iOiIyOTE4NTIzNjk1In0%3D&data=L0gUu0j7KKkHQgShTclZcmvfKQKp7VSQOxmMKJcxhHUviRlnP5nY6pDW-PXvV305qdl4W8DIal1MqjUAPFoJEg&svctype=4&tempid=h5_group_info)

## 下载

[v1.2.0 下载](https://r.iirose.com/f/26/7/29/4/4107-6W.txt)
