
/// <reference path="../types/vite-env.d.ts" />
/// <reference path="../types/global.d.ts" />
/// <reference path="../src/components/type.d.ts"/>
import { CSSResult } from 'lit';
import { LitElement } from 'lit';
import { proxy } from 'valtio/vanilla';
import { snapshot } from 'valtio/vanilla';
import { subscribe } from 'valtio/vanilla';
import { TemplateResult } from 'lit-html';

/** 添加脚本到列表
 * @param script 脚本对象
 * @returns 是否添加成功
 */
declare function addScriptToList(script: Script): boolean;

/**
 * 向页面添加一个样式元素
 * @param css css字符串
 */
declare function addStyle(css: string): void;

declare function afterOnmessage(message: string): Promise<string>;

declare function afterSend(message: string): string;

declare namespace apps {
    export {
        main_app,
        dialog_app
    }
}
export { apps }

declare function beforeOnmessage(message: string): Promise<string | null>;

declare function beforeSend(message: string): Promise<string | null>;

/**
 * 切换房间
 * @param {string} roomId 房间ID
 */
declare function changeRoom(roomId: string): void;

declare function clearScriptList(): void;

declare namespace components {
    export {
        hm_move_panel,
        hm_icon,
        hm_menu,
        hm_notification,
        hm_button,
        hm_cell,
        hm_select,
        hm_swipe_cell,
        hm_switch,
        hm_accordion,
        hm_input,
        hm_dialog
    }
}
export { components }

/**
 * 去除css字符串中的多余空白字符、注释
 * @param css 要压缩的css字符串
 * @returns 去除空白字符的字符串
 */
declare function compressCSS(css: string): string;

/**
 * 去除html字符串中的多余空白字符、注释
 * @param html 要压缩的html字符串
 * @returns 去除空白字符的字符串
 */
declare function compressHTML(html: string): string;

/**
 * 确认弹窗函数
 * @param message 消息提示
 * @param confirmCallback 选择确认时的回调函数
 * @param cancelCallback 选择取消时的回调函数
 * @param closeCallback 关闭弹窗时的回调函数
 * @example ```javascript
 * hortimagic.easy_tools.confirm('hhhhhhhhhhhhhh',()=>{console.log('qqqqqqqqqqq')},()=>{console.log('cccccccccccc')})
 * ```
 */
declare function confirm_2(message: string, confirmCallback?: Function, cancelCallback?: Function, closeCallback?: Function): void;
export { confirm_2 as confirm }

declare namespace core {
    export {
        tools,
        Message,
        socket_tools,
        encoder,
        decoder,
        elements_hooks,
        Emitter,
        log_tools,
        store,
        script_tools
    }
}
export { core }

/**
 * 弹幕消息类
 * 用于表示弹幕类型的消息
 */
declare class Danmu {
    /** 用户名 */
    username: string;
    /** 头像链接 */
    avatar: string;
    /** 消息 */
    message: string;
    /** 消息颜色 */
    color: string;
    /** 性别 */
    gender: string;
    /** 时间戳 */
    timeStamp: string;
    /** 唯一id */
    uid: string;
}

/**
 * 生成弹幕消息
 * @param message 消息
 * @param color 颜色
 * @param v v,默认是0
 * @returns 返回格式化好的弹幕消息
 */
declare function danmu(message: string, color: string, v?: string): string;

/**
 * 解析消息字符串并将对应的消息对象添加到消息列表中
 * @param message 原消息字符串
 */
declare function decodeMessage(message: string): void;

export declare namespace decoder {
    export {
        judegMessageClass,
        decodeMessage,
        messageObjList
    }
}

export declare namespace dialog {
    export {
        initDialogHolder,
        dialogHolder
    }
}

export declare namespace dialog_app {
    export {
        initDialogApp,
        HmDialogApp,
        dialogApp
    }
}

/**
 * 默认的对话框模块
 */
declare const dialogApp: HmDialogApp;

/** 弹窗容器 */
declare let dialogHolder: HTMLDivElement;

declare namespace easy_tools {
    export {
        confirm_2 as confirm,
        notice
    }
}
export { easy_tools }

/** 原来界面的元素 */
declare let elements: {
    /** 移动窗口父元素,移动窗口容器 */
    movePanelHolder: Element | null;
    /** 侧边菜单按钮 */
    functionHolder: Element | null;
    /** 侧边菜单按钮列表 */
    functionButtonGroupList: Element[];
    /** 主消息列表的父元素 */
    msgholderBox: Element | null;
    /** home界面的消息列表父元素 */
    homeHolderMsgBox: Element | null;
    /** 最近会话列表 */
    sessionHolderPmTaskBoxItems: Element[];
    /** 主输入元素盒子 */
    moveinputDisplay: Element | null;
    /** 主输入元素 */
    moveinput: HTMLElement | null;
    /** 可以打开home界面 */
    moveinputSendBtnFunc: Element | null;
    /** 发送按钮 */
    moveinputSendBtnSend: Element | null;
};

export declare namespace elements_hooks {
    export {
        refreshAll,
        initHooks,
        elements,
        Hooks
    }
}

/**
 * Emitter 类提供事件驱动的编程模式，允许对象间通过事件进行通信
 * 支持事件监听、取消监听、一次性监听和事件触发功能
 */
declare class Emitter {
    /**
     * 存储事件名称和对应监听器数组的映射
     * @private
     */
    private events;
    /**
     * 为指定事件添加监听器
     * @param eventName 事件名称
     * @param listener 事件触发时要调用的回调函数
     * @example
     * ```ts
     * const emitter = new Emitter();
     * emitter.on('test', (data) => console.log('接收到数据:', data));
     * emitter.emit('test', { message: 'Hello' }); // 输出: 接收到数据: { message: 'Hello' }
     * ```
     */
    on(eventName: string, listener: Listener): void;
    /**
     * 移除指定事件的监听器
     * @param eventName 事件名称
     * @param listener 要移除的监听器函数，如果未提供则移除该事件的所有监听器
     * @example
     * ```ts
     * const emitter = new Emitter();
     * const listener = (data) => console.log(data);
     * emitter.on('test', listener);
     * emitter.off('test', listener); // 移除特定监听器
     * emitter.off('test'); // 移除所有 'test' 事件的监听器
     * ```
     */
    off(eventName: string, listener?: Listener): void;
    /**
     * 为指定事件添加一次性监听器，监听器在第一次触发后将被移除
     * @param eventName 事件名称
     * @param listener 事件触发时要调用的回调函数，只执行一次
     * @example
     * ```ts
     * const emitter = new Emitter();
     * emitter.once('start', () => console.log('仅执行一次'));
     * emitter.emit('start'); // 输出: 仅执行一次
     * emitter.emit('start'); // 没有输出，因为监听器已被移除
     * ```
     */
    once(eventName: string, listener: Listener): void;
    /**
     * 触发指定事件，并传递参数给监听器
     * @param eventName 事件名称
     * @param args 传递给监听器的参数
     * @returns 如果至少有一个监听器被调用则返回 true，否则返回 false
     * @example
     * ```ts
     * const emitter = new Emitter();
     * emitter.on('greet', (name, age) => console.log(`你好 ${name}, 你 ${age} 岁了`));
     * emitter.emit('greet', '小明', 25); // 输出: 你好 小明, 你 25 岁了
     * ```
     */
    emit(eventName: string, ...args: any[]): boolean;
}

export declare namespace encoder {
    export {
        publicChat,
        privateChat,
        hidden,
        musicCard,
        videoCard,
        like,
        danmu,
        withdrawn,
        stockRequest
    }
}

declare function findScriptByName(name: string): number;

declare function findScriptByUrl(url: string): number;

/**
 * 创造一个新的私聊气泡，搭配静默发送私聊消息才能和“正常一样使用。
 * @param {string} targetUid 目标UID
 * @param {string} content 正文
 * @param {string} messageId 消息气泡的ID
 */
declare function generatePrivateMessageBubble(targetUid: string, content: string, messageId: string): void;

/**
 * 获取所有在线用户的信息
 * @returns 用户消息列表
 */
declare function getAllOnlineUserInfo(): {
    name: any;
    uid: any;
    color: any;
    avatar: any;
    roomId: any;
    personalizedSignature: any;
}[] | null;

/** 获取svg代码 */
declare function getIcon(name: string): string;

/**
 * 通过uid获取在线用户的信息
 * @param {string} uid
 * @returns 用户消息
 */
declare function getOnlineUserInfoById(uid: string): {
    name: string;
    uid: string;
    color: string;
    avatar: string;
    roomId: string;
    personalizedSignature: string;
} | null;

/**
 * 获取当前房间ID
 * @returns 返回当前用户的UID，没找到返回null
 */
declare function getRoomId(): string | null;

/**
 * 通过房间id返回房间消息
 * @param roomId 房间的id
 * @returns 返回返回消息
 */
declare function getRoomInfoById(roomId: string): {
    name: string;
    roomPath: Array<string>;
    color: string;
    description: string;
    roomImage: string;
    currentUserNum: number | "hidden";
    ownerName: string;
    member: Array<{
        name: string;
        auth: "member" | "admin" | "unknow";
    }>;
} | null;

/**
 * 获取用户蔷薇输入颜色
 * @returns 获取不到返回null
 */
declare function getUserInputColor(): string | null;

/**
 * 获取当前用户的名字
 * @returns 返回当前用户的名字，没找到返回null
 */
declare function getUserName(): string | null;

/**
 * 获取当前用户的UID
 * @returns 返回当前用户的UID，没找到返回null
 */
declare function getUserUid(): string | null;

/**
 * 隐藏消息类
 * 用于表示隐藏类型的消息
 */
declare class Hidden {
    /** 消息的标题，名字？主题 */
    messageName: string;
    /** 发送过来的唯一标识 */
    uid: string;
    /** 数据 */
    data: string;
}

/**
 * 生成隐藏的消息
 * @param messageNmae 消息的标题或者名字
 * @param uid 要发送的对象
 * @param data 消息数据
 * @returns 返回生成的数据
 */
declare function hidden(messageNmae: string, uid: string, data: string): string;

export declare namespace hm_accordion {
    export {
        HmAccordion
    }
}

export declare namespace hm_button {
    export {
        HmButton
    }
}

export declare namespace hm_cell {
    export {
        HmCell
    }
}

export declare namespace hm_dialog {
    export {
        HmDialog
    }
}

export declare namespace hm_icon {
    export {
        registerIcon,
        getIcon,
        iconMap,
        HmIcon
    }
}

export declare namespace hm_input {
    export {
        HmInput
    }
}

export declare namespace hm_menu {
    export {
        HmMenu
    }
}

export declare namespace hm_move_panel {
    export {
        movePanelItemList,
        movePanelItemMaxZindex,
        HmMovePanel
    }
}

export declare namespace hm_notification {
    export {
        HmNotification
    }
}

export declare namespace hm_select {
    export {
        HmSelect
    }
}

export declare namespace hm_swipe_cell {
    export {
        HmSwipeCell
    }
}

export declare namespace hm_switch {
    export {
        HmSwitch
    }
}

/**
 * 折叠面板
 * @example
 * <hm-accordion title-content="标题内容"></hm-accordion>
 * <hm-accordion>
 <span slot="header">我的折叠面板</span>
 <div>内容项 1</div>
 <div>内容项 2</div>
 </hm-accordion>
 */
declare class HmAccordion extends LitElement {
    maxHeight: string;
    /** 折叠项 */
    items: any[];
    /** 标题内容 */
    titleContent: string;
    /** 是否展开 */
    expanded: boolean;
    static styles: CSSResult;
    /** 开关容器 */
    togglePanel(): void;
    render(): TemplateResult<1>;
}

/**
 * 按钮组件
 *
 * @example
 * ```html
 * <!-- 基础用法 -->
 * <hm-button content="普通按钮"></hm-button>
 *
 * <!-- 带图标按钮 -->
 * <hm-button icon="plus" content="添加"></hm-button>
 *
 * <!-- 自定义颜色 -->
 * <hm-button
 *   content="自定义样式"
 *   color="#ffffff"
 *   background="#4caf50">
 * </hm-button>
 *
 * <!-- 禁用状态 -->
 * <hm-button content="禁用按钮" .enable="${false}"></hm-button>
 *
 * <!-- 加载状态 -->
 * <hm-button content="加载中" .loading="${true}"></hm-button>
 *
 * <!-- 自定义尺寸 -->
 * <hm-button content="大按钮" width="200px" height="50px"></hm-button>
 * <hm-button content="小按钮" width="60px" height="30px" fontSize="8px"></hm-button>
 * ```
 */
declare class HmButton extends LitElement {
    /** 按钮图标 */
    icon: string;
    /** 按钮文字内容 */
    content: string;
    /** 字体大小 */
    fontSize: string;
    /** 字体颜色 */
    color: string;
    /** 背景颜色 */
    background: string;
    width: string;
    height: string;
    /** 是否启用 */
    enable: boolean;
    /** 是否加载中 */
    loading: boolean;
    static styles: CSSResult;
    render(): TemplateResult<1>;
    private _handleClick;
}

/**
 * 单元格组件
 * 用于展示列表内容或选项，采用左右分栏布局
 *
 * @slot title - 标题内容（左侧）
 * @slot description - 描述信息（左侧）
 * @slot content - 主要内容（右侧）
 *
 * @cssprop --hm-cell-padding - 内边距
 * @cssprop --hm-cell-border - 边框样式
 * @cssprop --hm-cell-background - 背景颜色
 *
 * @example
 * <hm-cell title-name="标题" descripthion="描述信息" content="内容"></hm-cell>
 */
declare class HmCell extends LitElement {
    /** 标题，使用slot后失效 */
    titleName: string;
    /** 标题下方描述，使用slot后失效 */
    descripthion: string;
    /** 右侧正文，使用slot后失效 */
    content: string;
    /** 标题点击回调函数 */
    titleClickCallback: () => void;
    /** 正文点击回调函数 */
    contentClickCallback: () => void;
    render(): TemplateResult<1>;
    static styles: CSSResult;
}

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
declare class HmDialog extends LitElement {
    static styles: CSSResult;
    isOpen: boolean;
    dialog: this;
    open(): void;
    close(): void;
    /** 确认，触发 dialog-close dialog-confirm事件*/
    confirm(): void;
    /** 取消，触发 dialog-close dialog-cancel事件*/
    cancel(): void;
    updated(changedProperties: Map<string, unknown>): void;
    render(): TemplateResult<1>;
}

/**
 * 对话框模块
 * @slot - 默认slot
 */
declare class HmDialogApp extends LitElement {
    dialogOpen: boolean;
    message: string;
    closeCallback: Function | null;
    cancelCallback: Function | null;
    confirmCallback: Function | null;
    /** 触发点击事件 */
    handelClick(): void;
    static styles: CSSResult;
    render(): TemplateResult<1>;
}

/** 图标组件
 * @example
 * <hm-icon icon="magic-wand"></hm-icon>
 * <hm-icon icon="close"></hm-icon>
 * <hm-icon icon="open"></hm-icon>
 * <hm-icon icon="arrow-up"></hm-icon>
 */
declare class HmIcon extends LitElement {
    /** 图标名称 */
    icon: string;
    size: string;
    /** 触发点击事件 */
    handelClick(): void;
    static styles: CSSResult;
    render(): TemplateResult<1>;
}

/**
 * @example <caption>基本使用</caption>
 * <hm-input label="用户名" placeholder="请输入用户名"></hm-input>
 *
 * @example <caption>带图标的输入框</caption>
 * <hm-input label="密码" icon="password" placeholder="请输入密码"></hm-input>
 *
 * @example <caption>禁用状态</caption>
 * <hm-input label="禁用输入框" value="已禁用" enable="false"></hm-input>
 *
 * @example <caption>只读状态</caption>
 * <hm-input label="只读输入框" value="只读内容" readonly="true"></hm-input>
 */
declare class HmInput extends LitElement {
    type: string;
    /** 按钮图标 */
    icon: string;
    /** 输入框标签 */
    label: string;
    /** 占位符文本 */
    placeholder: string;
    /** 是否启用 */
    enable: boolean;
    readonly: boolean;
    value: string;
    static styles: CSSResult;
    private _handleKeyDown;
    private _handleInput;
    render(): TemplateResult<1>;
}

declare class HmMenu extends LitElement {
    /** 图标 */
    icon: string;
    /** 内容 */
    content: string;
    /** 标记 */
    flag: boolean;
    /** 是否是菜单项（二级菜单） */
    isMenuItem: boolean;
    static styles: CSSResult;
    /** 触发点击事件 */
    handleClick(): void;
    render(): TemplateResult<1>;
}

/** 移动面板组件 */
declare class HmMovePanel extends LitElement {
    /** 主内容区宽 */
    width: number;
    /** 主内容区高 */
    height: number;
    headerBackgroundColor: string;
    headerColor: string;
    bodyBackgroundColor: string;
    bodyColor: string;
    footerBackgroundColor: string;
    /** 按钮背景 */
    buttonBackground: string;
    /** 按钮文字色 */
    buttonColor: string;
    /** 标题 */
    titleContent: string;
    leftButtonText: string;
    rightButtonText: string;
    /** 显示状态,不建议直接修改，请使用showMovePanel()和hideMovePanel()方法，否则无法触发对应事件 */
    isDisplay: boolean;
    zIndex: number;
    /** 左上角图标 */
    icon: string;
    /** 左下角图标 */
    leftIcon: string;
    /** 右下角图标 */
    rightIcon: string;
    left: number;
    top: number;
    static styles: CSSResult;
    constructor();
    /** 关闭移动窗口 */
    hideMovePanel(): void;
    /** 显示移动窗口 */
    showMovePanel(): void;
    /** 显示状态翻转 */
    toogleDisplay(): void;
    dragging: boolean;
    mouseDragging(e: MouseEvent): void;
    touchDragging(e: TouchEvent): void;
    putTop(): boolean;
    /**
     * 切换元素的置顶状态和显示状态
     *
     * 当元素的zIndex不等于最大移动面板层级时，将元素置于顶层并显示移动面板；
     * 当元素的zIndex等于最大移动面板层级时，切换元素的显示状态
     */
    putTopToggel(): void;
    render(): TemplateResult<1>;
    _handleClose(): void;
    handleLeftButtonClick(): void;
    handleRightButtonClick(): void;
}

/** 通知消息组件
 * @example
 * ```html
 * <!-- 基础用法 -->
 <hm-notification
 title="提示"
 content="这是一条通知信息">
 </hm-notification>

 <!-- 自定义颜色 -->
 <hm-notification
 title="成功"
 content="操作成功"
 text-color="#ffffff"
 background-color="#4caf50">
 </hm-notification>

 <!-- 自定义显示时间(3秒) -->
 <hm-notification
 title="提示"
 content="这条信息显示3秒"
 display-time="3000">
 </hm-notification>
 ```
 */
declare class HmNotification extends LitElement {
    /** 左边图标 */
    leftIcon: string;
    /** 标题 */
    title: string;
    /** 正文 */
    content: string;
    /** 右边图标*/
    rightIcon: string;
    /** 显示时间,单位毫秒 */
    displayTime: number;
    color: string;
    backgroundColor: string;
    static styles: CSSResult;
    firstUpdated(): void;
    private startLeaveAnimation;
    render(): TemplateResult<1>;
}

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
declare class HmSelect extends LitElement {
    /**
     * 当前选中项的索引，默认为 0
     * @type {number}
     */
    index: number;
    /**
     * 当前选中项的值
     * @type {any}
     */
    value: any;
    /**
     * 选择项列表，每个项为 [label, value] 的数组格式
     * @type {Array<Array<string | any>>}
     */
    labelList: (string | any)[][];
    /**
     * 是否禁用选择器
     * @type {boolean}
     */
    disabled: boolean;
    private selectRef;
    static styles: CSSResult;
    constructor();
    connectedCallback(): void;
    render(): TemplateResult<1>;
    /**
     * 处理选择项改变事件
     * @param {Event} e - change 事件
     * @private
     */
    private _handleChange;
    /**
     * 获取当前选中的值
     * @returns {any} 当前选中的值，返回labelList中对应项的实际值类型
     */
    getValue(): any;
    /**
     * 设置选中值
     * @param {any} value - 要设置的值，可以是字符串或数字等类型
     */
    setValue(value: any): void;
}

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
declare class HmSwipeCell extends LitElement {
    _isDragging: boolean;
    _startX: number;
    _currentTranslate: number;
    _prevTranslate: number;
    _animationId: number;
    _velocity: number;
    _lastX: number;
    _lastTime: number;
    _isOpen: boolean;
    rightButtonName: string;
    /**
     * 右边按钮点击回调函数
     */
    rightButtonCallback: () => void;
    sliderElement: HTMLElement;
    contentElement: HTMLElement;
    leftActions: HTMLElement;
    rightActions: HTMLElement;
    leftActionsWidth: number;
    rightActionsWidth: number;
    static styles: CSSResult;
    firstUpdated(): void;
    disconnectedCallback(): void;
    calculateActionWidths(): void;
    addEventListeners(): void;
    removeEventListeners(): void;
    onDragStart: (e: MouseEvent) => void;
    onTouchStart: (e: TouchEvent) => void;
    startDrag: (clientX: number) => void;
    onDragMove: (e: MouseEvent) => void;
    onTouchMove: (e: TouchEvent) => void;
    handleMove(currentX: number): void;
    easeOut(overshoot: number, maxResistance: number): number;
    onDragEnd: () => void;
    onTouchEnd: () => void;
    finishDrag(): void;
    updateSliderPosition(): void;
    render(): TemplateResult<1>;
}

/**
 * 滑动开关组件
 *
 * @example
 * ```html
 * <!-- 基础用法 -->
 * <hm-switch></hm-switch>
 *
 * <!-- 默认开启 -->
 * <hm-switch checked></hm-switch>
 *
 * <!-- 禁用状态 -->
 * <hm-switch disabled></hm-switch>
 *
 * <!-- 加载状态 -->
 * <hm-switch loading></hm-switch>
 *
 * <!-- 自定义颜色 -->
 * <hm-switch color="#ff4757"></hm-switch>
 *
 * <!-- 带图标 -->
 * <hm-switch openIcon="check" closeIcon="close"></hm-switch>
 *
 * <!-- 监听状态变化 -->
 * <hm-switch @hm-switch-change="${(e) => logger.log('hm-switch','开关状态:', e.detail.checked)}"></hm-switch>
 * ```
 */
declare class HmSwitch extends LitElement {
    /** 开关状态 */
    checked: boolean;
    /** 是否禁用 */
    disabled: boolean;
    /** 加载状态 */
    loading: boolean;
    /** 开关打开时的颜色 */
    color: string;
    /** 自定义开启状态内容 */
    openContent: string;
    /** 自定义关闭状态内容 */
    closeContent: string;
    /** 自定义开启状态图标 */
    openIcon: string;
    /** 自定义关闭状态图标 */
    closeIcon: string;
    change(): void;
    render(): TemplateResult<1>;
    static styles: CSSResult;
}

declare namespace holders {
    export {
        move_panel,
        menu,
        notification,
        dialog
    }
}
export { holders }

/** 钩子函数 */
declare let Hooks: {
    elementHooks: {
        moveinput: {
            oninputBefore: () => boolean;
            oninputAfter: () => boolean;
            onblurBefore: () => boolean;
            onblurAfter: () => boolean;
            onfocusBefore: () => boolean;
            onfocusAfter: () => boolean;
        };
    };
    functionHooks: {
        processer: {
            onBefore: (e: any, s: any, t: any, r: any) => boolean;
            onAfter: (e: any, s: any, t: any, r: any) => boolean;
        };
    };
    replaceMoveinput: () => void;
    replaceButtonProcesser: () => void;
};

/**
 * hortiMagicStore存储库
 */
declare const HortimagicStore: {
    /** 是否自动保存 */
    autoSave: boolean;
    /** 日志是否开启 */
    logFlag: {
        log: boolean;
        info: boolean;
        debug: boolean;
        warn: boolean;
        error: boolean;
    };
    /** 消息日志是否开启 */
    messageLogFlag: {
        send: boolean;
        decode: boolean;
        emit: boolean;
        receive: boolean;
    };
    /** 日志列表最大长度 */
    logListLength: number;
    /** 脚本列表 */
    scriptList: Script[];
};

/**
 * html特殊符号反转义
 * @param {string} e
 * @returns {string}
 */
declare function htmlSpecialCharsDecode(e: string): string;

/**
 * html特殊符号转义
 * @param {string} e
 * @returns {string}
 */
declare function htmlSpecialCharsEscape(e: string): string;

/** 存储图标的map类型数据
 * key: 图标名称
 * value: 图标svg代码
 * 遍历图标名称的方式如下：
 * @example
 * for (const [iconName, iconSvg] of iconMap) {}
 */
declare const iconMap: Map<string, string>;

/** package配置信息 */
export declare const information: {
    /** 项目名称 */
    name: string;
    /** 项目版本 */
    version: string;
    /** 项目更新日志 */
    changelog: string;
    /** 项目描述 */
    description: string;
    /** 项目作者 */
    author: string;
    /** 项目许可证 */
    license: string;
    /** 项目仓库 */
    repository: {
        type: string;
        url: string;
    };
    /** 项目构建时间 */
    buildTime: string;
    /** 项目是否注入完成 */
    ingected: boolean;
};

declare const ingectedUrlList: string[];

/** 注入脚本,不论它是否使能
 * @param script 脚本对象
 */
declare function ingecteScript(script: Script): boolean;

declare function ingecteScriptList(): void;

declare function init(): Promise<void>;

/** 初始化对话框模块 */
declare function initDialogApp(): Promise<void>;

/** 初始化弹窗容器 */
declare function initDialogHolder(): void;

/**
 * 注入钩子函数
 */
declare function initHooks(): void;

/** 初始化菜单容器 */
declare function initMenuHolder(): void;

/** 初始化移动面板容器 */
declare function initMovePanelHolder(): void;

/** 初始化通知容器 */
declare function initNotificationHolder(): void;

declare function initSocket(): Promise<void>;

declare function initStore(): void;

/**
 * 判断消息类型并返回对应的类型字符串
 * @param message
 */
declare function judegMessageClass(messageObj: MessageClass): "hidden" | "public" | "private" | "danmu" | "withdrawn" | "system" | "stock" | "unknown";

/**
 * 编码点赞消息
 * @param targetUid 目标id
 * @param content 正文
 * @returns 格式化好的消息
 */
declare function like(targetUid: string, content?: string): string;

/**
 * 事件监听器类型定义，表示一个可以接收任意参数的函数
 */
declare type Listener = (...args: any[]) => void;

/**
 * 加载store
 */
declare function loadStore(): void;

export declare namespace log_tools {
    export {
        logEmitter,
        logger
    }
}

/**
 * 日志事件发射器
 * 每次日志输出时都会触发'log'事件
 */
declare const logEmitter: Emitter;

/**
 * 日志记录器
 * 根据配置中的日志级别来决定是否输出日志
 * 只有当配置的日志级别与当前输出的日志级别匹配时才会输出日志
 */
export declare const logger: {
    /**
     * 记录普通日志
     * 只有在配置的日志级小于等于DEBUG时才会输出
     * @param args 要输出的参数
     */
    log(tag: string, ...args: any[]): void;
    /**
     * 输出调试日志
     * 仅在配置的日志级别小于等于DEBUG时才会输出
     * @param args 要输出的参数
     */
    debug(tag: string, ...args: any[]): void;
    /**
     * 输出信息日志
     * 仅在配置的日志级别小于等于INFO时才会输出
     * @param args 要输出的参数
     */
    info(tag: string, ...args: any[]): void;
    /**
     * 输出警告日志
     * 仅在配置的日志级别小于等于WARN时才会输出
     * @param args 要输出的参数
     */
    warn(tag: string, ...args: any[]): void;
    /**
     * 输出错误日志
     * 仅在配置的日志级别小于等于ERROR时才会输出
     * @param args 要输出的参数
     */
    error(tag: string, ...args: any[]): void;
};

export declare namespace main_app {
    export {
        init
    }
}

export declare namespace menu {
    export {
        initMenuHolder,
        menuHolder
    }
}

/** 菜单容器 */
declare let menuHolder: HTMLDivElement;

export declare namespace Message {
    export {
        MessageClass,
        Public,
        Private,
        Hidden,
        Danmu,
        Withdrawn,
        System,
        Stock,
        Unkonw
    }
}

/**
 * 所有消息类型的联合类型
 * 用于类型检查和类型安全
 */
declare type MessageClass = Public | Private | Hidden | Danmu | Withdrawn | System | Stock | Unkonw;

declare const messageEmitter: Emitter;

/** 解析好后的消息列表 */
declare let messageObjList: MessageClass[];

export declare namespace move_panel {
    export {
        initMovePanelHolder,
        movePanelHolder
    }
}

/** 移动面板容器 */
declare let movePanelHolder: HTMLDivElement;

/** 创建的窗口列表 */
declare let movePanelItemList: HmMovePanel[];

/** 窗口基础的层级，每新建一个加一,从99999开始加 */
declare let movePanelItemMaxZindex: number;

/**
 * 生成一个音乐卡片消息
 * @param typeId 音乐平台从0开始
 * @param title 音乐名字
 * @param singerName 歌手名字
 * @param coverUrl 封面图片链接
 * @param color 颜色
 * @param resolutionRatio 音乐的压缩率
 */
declare function musicCard(typeId: string, title: string, singerName: string, coverUrl: string, color: string, resolutionRatio: string): string;

/**
 * 消失通知函数
 * @example
 * ```javascript
 * // 显示成功通知
 * hortimagic.easy_tools.notice.success('操作成功', '您的操作已成功完成');
 *
 * // 显示警告通知
 * hortimagic.easy_tools.notice.warning('警告', '请注意检查输入信息', 5000);
 *
 * // 显示错误通知
 * hortimagic.easy_tools.notice.error('错误', '操作失败，请重试');
 *
 * // 显示普通通知
 * hortimagic.easy_tools.notice.normal('提示', '这是一条普通提示信息');
 * ```
 */
export declare const notice: {
    /**
     * 显示成功通知
     * 创建并显示一个成功状态的通知组件
     * @param title - 通知的标题文本
     * @param content - 通知的内容文本
     * @param displayTime - 通知显示的时间（毫秒），默认为3000毫秒
     * @returns 无返回值
     */
    success(title: string, content: string, displayTime?: number): void;
    /**
     * 显示警告通知
     * 创建并显示一个警告状态的通知组件
     * @param title - 通知的标题文本
     * @param content - 通知的内容文本
     * @param displayTime - 通知显示的时间（毫秒），默认为3000毫秒
     * @returns 无返回值
     */
    warning(title: string, content: string, displayTime?: number): void;
    /**
     * 显示错误通知
     * 创建并显示一个错误状态的通知组件
     * @param title - 通知的标题文本
     * @param content - 通知的内容文本
     * @param displayTime - 通知显示的时间（毫秒），默认为3000毫秒
     * @returns 无返回值
     */
    error(title: string, content: string, displayTime?: number): void;
    /**
     * 显示普通通知
     * 创建并显示一个普通状态的通知组件
     * @param title - 通知的标题文本
     * @param content - 通知的内容文本
     * @param displayTime - 通知显示的时间（毫秒），默认为3000毫秒
     * @returns 无返回值
     */
    normal(title: string, content: string, displayTime?: number): void;
};

export declare namespace notification {
    export {
        initNotificationHolder,
        notificationHolder
    }
}

/** 渲染的容器元素 */
declare let notificationHolder: HTMLDivElement;

declare function onmessage_2(message: string): Promise<void>;

declare function originalOnmessage(message: string): string;

declare function originalSend(message: string): string;

/**
 * 私聊消息类
 * 用于表示私聊消息
 */
declare class Private {
    /** 时间戳 */
    timeStamp: string;
    /** 头像链接 */
    headPortrait: string;
    /** 名字 */
    name: string;
    /** 消息 */
    message: string;
    /** 消息颜色 */
    color: string;
    /** 性别 */
    gender: string;
    /** 唯一标识UID */
    uid: string;
    /** 消息唯一标识 */
    messageUid: string;
}

/**
 * 生成隐藏发送的私聊消息，自己看不到
 * @param uid 对方的UID
 * @param message 消息
 * @param color 消息颜色
 * @returns 返回格式化好的消息
 */
declare function privateChat(uid: string, message: string, color: string): string;

/**
 * 公共消息类
 * 用于表示公共频道中的消息
 */
declare class Public {
    /** 时间戳 */
    timeStamp: string;
    /** 头像链接 */
    headPortrait: string;
    /** 名字 */
    name: string;
    /** 消息 */
    message: string;
    /** 消息气泡背景颜色 */
    color: string;
    /** 性别 */
    gender: string;
    /** 唯一标识 */
    uid: string;
    /** 称号 */
    designation: string;
    /** 消息UID */
    messageUid: string;
}

/**
 * 生成公屏消息
 * @param message 消息
 * @param color 消息颜色
 * @returns 返回格式化好的消息
 */
declare function publicChat(message: string, color: string): string;

/**
 * 导出valtio响应式状态管理库常用方法
 * @example
 * // 创建响应式状态
 * const state = reactive.proxy({ count: 0 })
 *
 * // 订阅状态变化
 * reactive.subscribe(state, () => {
 *   console.log('state has changed to', state)
 * })
 *
 * // 获取状态快照
 * const snap = reactive.snapshot(state)
 *
 * // 在组件中使用（注意：snapshot返回的是只读快照，不能直接修改）
 * // 需要通过原始proxy对象进行修改
 * const updateState = () => {
 *   state.count++ // 直接修改原始proxy对象
 * }
 *
 * // 无React环境使用示例：
 * // 1. 创建状态
 * const counterStore = proxy({ count: 0 });
 *
 * // 2. 修改状态
 * counterStore.count++;
 *
 * // 3. 获取快照（用于显示）
 * const snap = snapshot(counterStore);
 * console.log(snap.count); // 输出当前值
 *
 * // 4. 订阅变化
 * subscribe(counterStore, () => {
 *   console.log('counter changed');
 * });
 */
declare const reactive: {
    proxy: typeof proxy;
    subscribe: typeof subscribe;
    /**
     * 获取快照
     * @param {object} store
     * @returns {object} 一个静态的快照
     */
    snapshot: typeof snapshot;
};

/**
 * 更新一些element
 */
declare function refreshAll(): void;

/** 提供静态方法用于外部注册图标 */
declare function registerIcon(name: string, svgContent: string): void;

declare function removeScriptFromList(script: Script): boolean;

/**
 * 保存store
 */
declare function saveStore(): void;

/** 脚本类 */
declare class Script {
    /** 名字 */
    name: string;
    /** 唯一链接 */
    url: string;
    /** 是否启用,默认启用 */
    enable: boolean;
    constructor(name: string, url: string, enable?: boolean);
}

export declare namespace script_tools {
    export {
        addScriptToList,
        updateScriptInList,
        removeScriptFromList,
        findScriptByUrl,
        findScriptByName,
        clearScriptList,
        ingecteScript,
        ingecteScriptList,
        ingectedUrlList,
        Script
    }
}

declare function send(message: string): Promise<void>;

/**
 * 异步延时函数
 * @param  ms
 */
declare function sleep(ms: number): Promise<unknown>;

export declare namespace socket_tools {
    export {
        initSocket,
        messageEmitter,
        socketTools
    }
}

declare const socketTools: {
    beforeSend: typeof beforeSend;
    originalSend: typeof originalSend;
    afterSend: typeof afterSend;
    send: typeof send;
    beforeOnmessage: typeof beforeOnmessage;
    originalOnmessage: typeof originalOnmessage;
    afterOnmessage: typeof afterOnmessage;
    onmessage: typeof onmessage_2;
    initSocket: typeof initSocket;
};

/**
 * 股票消息类
 * 用于表示股票相关数据消息
 */
declare class Stock {
    /**
     * '*' 表示股价过低无法买股票
     * '>' 表示卖出的股票超出数量
     * '<' 表示余额不够
     * 数字表示正常
     */
    result: string;
    /** 股价 */
    stockPrice: number;
    /** 总股数 */
    totalStock: number;
    /** 持股数 */
    holdingAmount: number;
    /** 总金 */
    totalEquity: number;
    /** 账户余额 */
    balance: number;
}

/**
 * 生成股票请求消息
 * @param count 股票数量，不填或等于0时返回正常查看
 * @returns
 */
declare function stockRequest(count: number | undefined): string;

export declare namespace store {
    export {
        saveStore,
        loadStore,
        initStore,
        reactive,
        HortimagicStore
    }
}

/**
 * 切换房间
 * @param {string} roomId
 */
declare function switchRoom(roomId: string): void;

/**
 * 系统消息类
 * 用于表示系统通知类消息
 */
declare class System {
    /** 消息列表 */
    userMessageList: string[];
}

export declare namespace tools {
    export {
        sleep,
        compressHTML,
        compressCSS,
        addStyle,
        htmlSpecialCharsEscape,
        htmlSpecialCharsDecode,
        getUserName,
        getUserUid,
        getRoomId,
        getRoomInfoById,
        getOnlineUserInfoById,
        getAllOnlineUserInfo,
        changeRoom,
        getUserInputColor,
        generatePrivateMessageBubble,
        switchRoom
    }
}

/**
 * 未知消息类
 * 用于表示无法识别的消息类型
 */
declare class Unkonw {
    /** 未知消息的原型 */
    message: string;
}

declare function updateScriptInList(script: Script): boolean;

/**
 * 生成一个视频卡片消息
 * @param typeId 视频平台从0开始
 * @param title 视频名字
 * @param singerName 制作者名字
 * @param coverUrl 封面图片链接
 * @param color 颜色
 * @param resolutionRatio 分辨率，64会被识别成1080p
 */
declare function videoCard(typeId: string, title: string, singerName: string, coverUrl: string, color: string, resolutionRatio: string, time: string): string;

/**
 * 撤回消息类
 * 用于表示撤回操作的消息
 */
declare class Withdrawn {
    /** 可选的，撤回私聊对象窗口的UID */
    privateUID: string;
    /** 需要要撤回的气泡用户uid */
    uid: string;
    /** 消息唯一标识，一串随机数 */
    messageUid: string;
    /** 数据唯一标识，上面两个组合在一起 */
    dataUid: string;
}

/**
 * 生成撤回的消息
 * @param randomNumber 指定消息的随机数如：491855401763
 * @param privateUID 私聊对象的UID
 * @returns
 */
declare function withdrawn(randomNumber: string, privateUID?: string): string;

export { }

  