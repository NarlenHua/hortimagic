/**
 * Iirose 聊天室全局类型定义文件
 * 
 * ⚠️ 注意：此文件由 AI 自动生成，用于描述 iirose.com 聊天室网站的全局变量、函数和对象类型
 * 
 * 使用说明：
 * - 本文件定义了 iirose 聊天室客户端的全局 API
 * - 所有类型都基于对原始 JavaScript 代码的分析
 * - 参数说明已添加到注释中
 * - 使用时请根据实际运行环境进行验证
 * 
 * 生成时间: 2026-04-06
 * 生成工具: AI Assistant (Lingma)
 * 
 * 更新说明:
 * - 添加了更多全局对象定义 (Objs, Variable, Probe, Init, Constant, Assets等)
 * - 完善了 Utils 对象的类型定义
 * - 添加了设备相关的全局变量
 * - 补充了更多工具函数和事件处理函数
 */

declare global {
    // ==================== 构建时常量 ====================
    // 由 vite.config.ts 的 define 定义，构建时替换为实际值

    /** 项目名称 */
    const __NAME__: string;
    /** 项目版本号 */
    const __VERSION__: string;
    /** 项目描述 */
    const __DESCRIPTION__: string;
    /** 作者信息 */
    const __AUTHOR__: string;
    /** 开源协议 */
    const __LICENSE__: string;
    /** 仓库地址 */
    const __REPOSITORY__: string;
    /** 构建时间 (ISO 8601) */
    const __BUILD_TIME__: string;

    // ==================== 基础全局变量 ====================

    /** 用户状态数组，包含各种状态图标名称 */
    const statusarr: string[];

    /** 音效资源路径数组 */
    const soundarr: string[];

    /** 时区配置对象，键为城市名，值为时区偏移量（小时） */
    const timeZoneArr: Record<string, number>;

    /** 国籍/地区代码映射，键为国家代码，值为中文和英文名称 */
    const nationality: Record<string, string>;

    /** 装饰品/头饰配置数组，键为装饰品ID，值为[图片路径, 坐标数组] */
    const accessoryArr: Record<number, [string, number[]]>;

    /** 浏览器窗口高度 */
    let browserHeight: number;

    /** 浏览器窗口宽度 */
    let browserWidth: number;

    /** 速度比例系数 */
    const speedRatio: number;

    /** 静态资源URL前缀 */
    const static: string;

    /** 截取后的静态资源URL（从第4个字符开始） */
    const staticCut4: string;

    /** 是否支持懒加载 */
    const supportLazyLoad: boolean;

    /** 面板样式标志（基于Cookie判断） */
    const panelStyle: boolean;

    /** 面板参数配置 */
    let panelParam: any;

    // ==================== 设备和平台相关变量 ====================

    /** 设备类型标识 (5=iOS, 6=Android, 7=Windows Phone, 8=iPad, 9=iPod, 11=其他移动设备) */
    declare const device: number;

    /** 设备版本号 */
    declare const deviceVersion: number;

    /** 是否为移动设备 */
    declare const isMobile: boolean;

    /** 是否为 iOS 设备 */
    declare const isIos: boolean;

    /** 是否为横屏模式 */
    declare let portrait: boolean;

    /** 商城是否为横屏模式 */
    declare let shopPortrait: boolean;

    /** Whois 面板是否为横屏模式 */
    declare let whoisPortrait: boolean;

    /** 页面是否处于失焦状态 */
    declare let pageBlur: number;

    /** 页面是否可见 */
    declare let pageVisible: number;

    // ==================== 主题和样式相关变量 ====================

    /** 主题类型 (0=深色, 1=浅色) */
    declare const theme: number;

    /** 是否使用经典深色主题 */
    declare const darkThemeClassical: boolean;

    /** 面板透明度设置 */
    declare const panelOpacity: boolean;

    /** 用户信息模式标志 */
    declare const uInfoMode: boolean;

    /** 当前房间号 */
    declare const roomn: string;

    /** 当前用户ID的小写形式 */
    declare const myself2L: string;

    /** 当前用户UID */
    declare const uid: string;

    // ==================== 通知和声音相关变量 ====================

    /** 通知权限是否已授予 */
    declare let NotificationsGranted: boolean;

    /** 公共聊天消息通知开关 */
    declare const pubChatNoti: number;

    /** 私聊消息通知开关 */
    declare const priChatNoti: number;

    /** 邮件消息通知开关 */
    declare const mailMsgNoti: number;

    /** 弹幕消息通知开关 */
    declare const danmakuMsgNoti: number;

    /** 系统消息通知开关 */
    declare const systemMsgNoti: number;

    /** @提及消息通知开关 */
    declare const atMsgNoti: number;

    /** 高亮消息通知开关 */
    declare const highLightMsgNoti: number;

    /** 是否静音 */
    declare let muteProbe: boolean;

    /** 系统声音探测标志 */
    declare const systemsoundprobe: boolean;

    /** 文本转语音播放器探测标志 */
    declare const textToSpeechPlayerprobe: boolean;

    // ==================== 视频和媒体相关变量 ====================

    /** 是否在视频房间 */
    declare const videoRoom: boolean;

    /** 是否在共享视频房间 */
    declare const shareVideoRoom: boolean;

    /** 是否不播放视频 */
    declare const donotPlayVideo: boolean;

    /** 影院模式标志 */
    declare const cinemaMode: boolean;

    /** 视频暗色指针标志 */
    declare let videoDarkerPointer: number;

    /** 是否启用 Faze 效果 */
    declare const noFaze: boolean;

    // ==================== 数据优化相关变量 ====================

    /** 减少数据使用级别1 */
    declare const reduceDataUsage1: boolean;

    /** 减少数据使用级别4 */
    declare const reduceDataUsage4: boolean;

    /** 减少数据使用级别6 */
    declare const reduceDataUsage6: boolean;

    // ==================== 聊天相关变量 ====================

    /** 聊天计划模式标志 */
    declare const chatPlanMode: boolean;

    /** 是否有密码 */
    declare const password: boolean;

    /** 高亮数组 */
    declare let highlightarr: string[];

    /** 等级数组 */
    declare const rankArr: string[];

    /** 等级图标数组 */
    declare const rankIconArr: string[];

    /** 语言数组（多语言支持） */
    declare const languageArr: any[][];

    // ==================== Cookie 相关函数 ====================

    /**
     * 读取 Cookie 值
     * @param name Cookie 名称
     * @returns Cookie 值
     */
    declare function Cookie(name: string): string | undefined;

    /**
     * 设置 Cookie 值
     * @param name Cookie 名称
     * @param value Cookie 值
     * @param days 过期天数（可选）
     */
    declare function Cookie(name: string, value: any, days?: number): void;

    /**
     * 删除 Cookie
     * @param name Cookie 名称
     */
    declare function removeCookie(name: string): void;

    /**
     * 读取真实 Cookie 值
     * @param name Cookie 名称
     * @returns Cookie 值
     */
    declare function CookieReal(name: string): string | undefined;

    /**
     * 删除真实 Cookie
     * @param name Cookie 名称
     */
    declare function removeCookieReal(name: string): void;

    // ==================== HTML 转义相关函数 ====================

    /**
     * HTML 特殊字符转义
     * @param str 需要转义的字符串
     * @returns 转义后的字符串
     * @description 将 &, <, >, ", ', \ 等字符转换为 HTML 实体
     */
    declare function htmlspecialchars(str: string): string;

    /**
     * HTML 特殊字符反转义
     * @param str 需要反转义的字符串
     * @returns 反转义后的字符串
     * @description 将 HTML 实体转换回原始字符
     */
    declare function unhtmlspecialchars(str: string): string;

    /**
     * HTML 特殊字符完全反转义（支持多种编码格式）
     * @param str 需要反转义的字符串
     * @returns 反转义后的字符串
     */
    declare function unhtmlspecialcharsAll(str: string): string;

    /**
     * HTML 特殊字符转义（简化版，只处理部分字符）
     * @param str 需要转义的字符串
     * @returns 转义后的字符串
     */
    declare function htmlspecialchars2(str: string): string;

    /**
     * HTML 特殊字符转义（处理空格等）
     * @param str 需要转义的字符串
     * @returns 转义后的字符串
     */
    declare function htmlspecialchars3(str: string): string;

    /**
     * HTML 特殊字符反转义（简化版）
     * @param str 需要反转义的字符串
     * @returns 反转义后的字符串
     */
    declare function unhtmlspecialchars2(str: string): string;

    /**
     * HTML 特殊字符反转义（版本3）
     * @param str 需要反转义的字符串
     * @returns 反转义后的字符串
     */
    declare function unhtmlspecialchars3(str: string): string;

    /**
     * HTML 特殊字符反转义（版本3_）
     * @param str 需要反转义的字符串
     * @returns 反转义后的字符串
     */
    declare function unhtmlspecialchars3_(str: string): string;

    // ==================== 颜色转换函数 ====================

    /**
     * 十六进制颜色转 RGB
     * @param hex 十六进制颜色值（如 "ff0000" 或 "f00"）
     * @returns RGB 字符串（如 "255,0,0"）
     */
    declare function hex2rgb(hex: string): string;

    /**
     * RGB 颜色转十六进制
     * @param rgb RGB 字符串（如 "255,0,0"）
     * @returns 十六进制颜色值（如 "ff0000"）
     */
    declare function rgb2hex(rgb: string): string;

    /**
     * 判断颜色是深色还是浅色
     * @param color 颜色值（RGB 字符串或十六进制）
     * @param isRgb 是否为 RGB 格式
     * @returns true 表示浅色，false 表示深色
     * @description 通过计算颜色亮度来判断，阈值为 382
     */
    declare function darkOrLight(color: string, isRgb?: boolean): boolean;

    // ==================== 图片/头像转换函数 ====================

    /**
     * 头像路径转换
     * @param avatar 头像标识符或URL
     * @param noCheck 是否跳过检查（默认 false）
     * @returns 完整的头像 URL
     * @description 如果 avatar 为空或是系统默认值，返回默认头像；否则拼接完整路径
     */
    declare function avatarconv(avatar: string | number, noCheck?: boolean): string;

    /**
     * 装饰品图片路径转换
     * @param accessoryId 装饰品 ID
     * @returns 完整的装饰品图片 URL
     */
    declare function imgconvAccessory(accessoryId: number): string;

    // ==================== 面板相关函数 ====================

    /**
     * 计算面板尺寸
     * @param size 基础尺寸
     * @param holder 面板持有者名称
     * @param box 盒子名称（可选）
     * @param index 索引（可选）
     * @returns 调整后的尺寸
     * @description 根据 panelStyle 和 panelParam 配置调整面板大小
     */
    declare function panelSize(size: number, holder: string, box?: string, index?: number): number;

    /**
     * 面板模式调整
     * @param holder 面板持有者名称
     * @param box 盒子名称（可选）
     * @param index 索引（可选）
     * @param padding 内边距值（可选）
     * @description 根据配置调整面板样式和布局
     */
    declare function panelMod(holder: string, box?: string, index?: number, padding?: number): void;

    // ==================== 提示/警告函数 ====================

    /**
     * 显示警告/提示消息
     * @param message 消息内容
     * @param titleArray 标题数组 [标题, 副标题, 图标]（可选）
     * @param isHtml 消息是否为 HTML 格式（默认 false）
     * @param defaultTitle 默认标题（可选）
     * @param noNotify 是否不发送通知（默认 false）
     * @description 在页面上显示浮动提示消息，支持动画效果和声音提示
     */
    declare function _alert(
        message: string,
        titleArray?: [string, string, string?],
        isHtml?: boolean,
        defaultTitle?: string,
        noNotify?: boolean
    ): void;

    // ==================== 模糊效果函数 ====================

    /**
     * 应用模糊效果
     * @param element 目标元素
     * @param blurValue 模糊值（像素），0 表示移除模糊
     * @description 通过 CSS filter 实现模糊效果
     */
    declare function blurFunc(element: HTMLElement, blurValue: number): void;

    // ==================== 加载完成函数 ====================

    /**
     * 加载完成处理函数
     * @description 初始化完成后执行的操作，包括设置事件监听器、检查房间跳转等
     */
    declare function loadIsDone(): void;

    // ==================== 焦点处理函数 ====================

    /**
     * 聚焦输入框
     * @param element jQuery 元素或 DOM 元素
     * @returns 输入框元素
     * @description 在非移动设备上自动聚焦到输入框
     */
    declare function focusI(element: any): any;

    // ==================== 命令执行函数 ====================

    /**
     * 执行聊天命令
     * @param command 命令名称
     * @param parameter 命令参数
     * @description 支持的命令包括：
     * - getname: 插入用户名 [*用户名*]
     * - getuid: 插入用户ID [:@用户ID@]
     * - high2: 高亮管理
     */
    declare function runCmd(command: string, parameter: string): void;

    // ==================== 图片显示函数 ====================

    /**
     * 显示图片
     * @param imageUrl 图片 URL
     * @param show 是否显示（默认 true）
     * @description 在相册查看器中显示图片
     */
    declare function showImg(imageUrl: string, show?: boolean): void;

    /**
     * 显示媒体（视频/音频）
     * @param isVideo 是否为视频（true）或音频（false）
     * @param mediaUrl 媒体 URL
     * @param show 是否显示（默认 true）
     * @description 在媒体查看器中显示视频或音频
     */
    declare function showMedia(isVideo: boolean, mediaUrl: string, show?: boolean): void;

    // ==================== 用户资料相关函数 ====================

    /**
     * 获取用户资料
     * @param userIdentifier 用户标识符（用户名或用户数据数组）
     * @param fromList 是否从用户列表中查找（默认 false）
     * @description 查询用户信息并发送请求到服务器
     */
    declare function getProfile(userIdentifier: string | any[], fromList?: boolean): void;

    /**
     * 显示用户详细信息（Whois）
     * @param userData 用户数据字符串或数组
     * @param extraData 额外数据
     * @param callbackData 回调数据（可选）
     * @description 在用户信息面板中显示详细的用户资料
     */
    declare function whois(userData: string | any[], extraData: any[], callbackData?: any): void;

    // ==================== 工具函数 ====================

    /**
     * 字符串转小写（优化版本）
     * @param str 需要转换的字符串
     * @returns 小写字符串
     * @description 比原生 toLowerCase 更快的实现
     */
    declare function toLowerCase(str: string): string;

    // ==================== 主要全局对象 ====================

    /**
     * 对象容器，存储各个功能模块的对象引用
     * @description 包含所有UI组件和功能模块的引用
     */
    declare const Objs: {
        /** body 元素 */
        body: any;

        /** 面板持有者 */
        panelHolder: any;

        /** 隐藏面板 */
        hidePanel: any;

        /** 移动面板持有者 */
        movePanelHolder: any;

        /** 功能面板持有者 */
        functionPanelHolder: any;

        /** 选择框持有者 */
        selectHolder: {
            This: any;
            selectHolderBox: any;
            bgObj: any;
            emptyNotAllow: number;
        };

        /** 系统对象 */
        system: Record<string, any>;

        /** 中心样式表 */
        centerStyleSheets: any[];

        /** 警告提示框对象 */
        alertHolder: {
            This: any;
            Variable: {
                taskArr: any[];
                probe: number;
            };
        };

        /** 效果持有者 */
        effectHolder: {
            This: any;
        };

        /** 库存/仓库对象 */
        repertory: {
            mediaBox: any;
            wallpaperBlurBox: any;
            wallpaperBlur: any;
            pubBgBox: any;
            albumShowHolder: any;
            albumShow: HTMLImageElement;
            audioShowHolder: any;
            audioShow: HTMLAudioElement;
            videoShowHolder: any;
            videoShow: HTMLVideoElement;
            myvideoholder: any;
            mainHolder: any;
            mainContainer: any;
            contentCopyHolder: HTMLElement;
            roomListDarker: any;
            topHolder: any;
            bodyBG: any;
            screendarker: any;
            bgImgBox: any;
            downloadFile: HTMLElement;
        };

        /** 媒体管理器 */
        mediaManager: Record<string, any>;

        /** API 对象 */
        API: Record<string, any>;

        /** 按钮 JSON */
        btnJson: {
            sleepModeBtn: any;
            wallpaperLoadingBtn: any;
            wallpaperVideoSwitchBtn: any;
            bgMoveBtn: any;
            lyricBtn: any;
        };

        /** 电话持有者 */
        phoneHolder: Record<string, any>;

        /** 主页对象 */
        homeHolder?: any;
        /** 地图对象 */
        mapHolder?: any;
        /** 用户信息对象 */
        userInfoHolder?: any;
        userInfoHolder2?: any;
        /** 房间信息对象 */
        roomInfoHolder?: any;
        roomInfoHolder2?: any;
        /** 时间线对象 */
        timelineHolder?: any;
        /** 上传对象 */
        uploadHolder?: any;
        /** 设置对象 */
        setupHolder?: any;
        /** 关于对象 */
        aboutHolder?: any;
        /** 商店对象 */
        shopHolder?: any;
        /** 商城对象 */
        mallHolder?: any;
        /** 帖子对象 */
        postHolder?: any;
        /** 通知对象 */
        noticeHolder?: any;
        /** 角色设置对象 */
        roleSetHolder?: any;
        /** 帮助对象 */
        helpHolder?: any;
        /** 弹幕发送对象 */
        danmakuSendHolder?: any;
        /** 心情对象 */
        moodHolder?: any;
        /** 状态对象 */
        statusHolder?: any;
        /** Buzz 对象 */
        buzzHolder?: any;
        /** 通话对象 */
        callHolder?: any;
        /** 用户搜索对象 */
        userSearchHolder?: any;
        /** 财富对象 */
        wealthHolder?: any;
        /** 媒体列表对象 */
        mediaListHolder?: any;
        /** 任务对象 */
        taskHolder?: any;
        /** 论坛对象 */
        forumHolder?: any;
        /** 变更对象 */
        changesHolder?: any;
        /** 上传助手对象 */
        uploadHelperHolder?: any;
        /** Whois 连接对象 */
        whoisConnectionHolder?: any;
        /** 需求对象 */
        demandHolder?: any;
        /** 房间启动画面对象 */
        roomSplashHolder?: any;
        /** Emoji 搜索对象 */
        emojiSearchHolder?: any;
        /** 留言对象 */
        leaveMsgHolder?: any;
        /** 锁屏对象 */
        lockScreenHolder?: any;
        /** 同步对象 */
        syncHolder?: any;
        /** 库存/仓库对象 */
        repertory?: any;
        /** YouTube 共享对象 */
        shareYoutube?: any;
        // 其他动态添加的对象...
        [key: string]: any;
    };

    /**
     * 全局变量存储对象
     * @description 存储运行时需要的各种变量和状态
     */
    declare const Variable: {
        /** 正则表达式集合 */
        regexp: any;
        /** CSS 相关变量 */
        Css: any;
        /** Whois 数组 */
        whoisArr: any[];
        /** 当前用户信息对象 */
        currentUserInfoObj?: any;
        /** 堆栈信息 */
        Stack: any;
        /** 调整大小任务 */
        resizeTask: Record<string, Function>;
        /** 调度任务 */
        schedule?: string;
        /** PM 任务 */
        pmTask: any;
        /** PM 对象 JSON */
        pmObjJson: any;
        /** 文本相关 */
        Text: any;
        /** 设置 */
        Settings: any;
        /** 通用面板缩放比例 */
        commonPanelScale: number;
        /** Whois 缩放比例 */
        whoisScaleN: number;
        /** 影院模式盒子比例 */
        cinemaModeBoxN: number;
        /** 显示状态 */
        display: any;
        // 其他动态变量...
        [key: string]: any;
    };

    /**
     * 探测/检测对象
     * @description 存储各种功能的状态检测和初始化标志
     */
    declare const Probe: {
        /** 初始化状态 */
        init: Record<string, number>;
        /** 锁屏状态 */
        lockScreen?: boolean;
        /** 睡眠模式 */
        sleepMode?: boolean;
        /** 空媒体播放器 */
        emptyMediaPlayer?: boolean;
        /** 阻止 GIF 图标 */
        blockGifIcon?: boolean;
        /** 表情显示状态 */
        isEmojiShowing?: boolean;
        /** 手势检测 */
        gesture?: boolean;
        /** 私人消息新消息 */
        pmNewMsg?: boolean;
        /** 视频自适应大小 */
        videoAdaptiveSize?: boolean;
        /** 家庭位置 */
        homePos?: number;
        /** 消息合并 */
        msgCombine?: boolean;
        /** YouTube 播放中 */
        demandYoutubePlaying?: boolean;
        /** 扩展 PM 数据 */
        extPmData?: boolean;
        /** 功能持有者动画 */
        functionHolderAnimate?: boolean;
        /** UR 显示 */
        URDisplay?: number;
        // 其他探测变量...
        [key: string]: any;
    };

    /**
     * 初始化工具对象
     * @description 提供各种初始化功能
     */
    declare const Init: {
        /** 结束初始化 */
        end: () => void;
        /** 完整面板初始化 */
        fullPanel: (type: number) => void;
        /** 图片调整器初始化 */
        imgResizer: () => void;
        /** YouTube 初始化 */
        youtube: any;
        /** 房间加载完成回调 */
        onRoomLoad: () => void;
        /** 面部表情持有者初始化 */
        faceHolder: () => void;
        /** 扩展 PM 初始化 */
        extPm: (flag: number) => void;
        // 其他初始化函数...
        [key: string]: any;
    };

    /**
     * 常量定义对象
     * @description 存储系统中的各种常量
     */
    declare const Constant: {
        /** URL 相关常量 */
        URL: {
            uploadFile: string;
            uploadImg: string;
            uploadMedia: string;
            uploadStream: string;
            uploadedPrefixFile: string;
            uploadedPrefixImg: string;
            uploadedPrefixMedia: string;
            uploadedPrefixStream: string;
        };

        /** 房间 ID */
        rid: {
            communication: string;
            residence: string;
            hotel: string;
            sandbox: string;
            space: string;
        };

        /** 通知类型 */
        NOTIFY: {
            PUBCHAT: number;  // 公共聊天
            PRICHAT: number;  // 私聊
            MAIL: number;     // 邮件
            DUM: number;      // 弹幕
            SYS: number;      // 系统
            AT: number;       // @提及
            HL: number;       // 高亮
        };

        /** 机器人配置 */
        BOT: string[][];
        BOT_NAME: string[];
        BOT_UID: string[];

        /** 快捷方式 */
        Shortcuts: {
            member: string[];
            all: string[];
        };

        /** 资源配置 */
        Assets: {
            uploadSizeLimitFile: number;
            uploadSizeLimitImg: number;
            uploadSizeLimitMedia: number;
            uploadSizeLimitStream: number;
        };

        /** 其他配置 */
        Others: {
            transform: string;
            functionBtnNoCloseArr: number[];
            socketMsgSplitChar: Uint8Array;
            apk: string[];
        };

        /** 性别颜色 */
        sexColor: string[];

        /** 鼠标事件 */
        mouseEnter: string;
        mouseLeave: string;

        // 其他常量...
        [key: string]: any;
    };

    /**
     * 资源对象
     * @description 存储系统资源和配置
     */
    declare const Assets: {
        /** 数据 */
        Data: {
            mixBlendMode: string[];
            charToNum: string;
            scoreColorArr: string[];
        };

        /** 资源 */
        Resource: Record<string, any>;

        /** 格式 */
        Format: {
            img: string[];
            audio: string[];
        };

        /** 谈话过滤器数组 */
        talkFilterArr: any[][];

        /** 设置（从 localStorage 读取） */
        settings: Record<string, any>;

        /** 数据库（从 localStorage 读取） */
        database: Record<string, any>;

        /** 过滤器 */
        filter: {
            uploadImg: string[];
            uploadImg2: string[];
            audio: string[];
            media: string[];
            uploadFile: string[];
        };

        /** 音频图标 */
        iconAudio: string[];

        /** 视频图标 */
        iconVideo: string[];

        /** 隐藏完整面板列表 */
        hideFullPanelList: string[];

        /** 选择框配置 */
        select: {
            infoSelectJSON: Record<string, any[]>;
            msgSelectJSON: Record<string, any[]>;
            serviceSelectJSON: Record<string, any[]>;
            diceSelectJSON: Record<string, any[]>;
            settingsSelectJSON: Record<string, any[]>;
            selectArr0_10: any[];
            botGameSelectJSON: Record<string, any[]>;
        };

        /** 后退系统 */
        backward: any;

        /** 回车键系统 */
        enterKey: any;

        /** 通知 Emoji */
        notiEmoji: any;

        /** 我的 Emoji */
        myEmoji?: any[];

        /** 扩展 PM */
        extPm?: Record<string, any>;

        // 其他资源...
        [key: string]: any;
    };

    /**
     * 临时数据存储
     * @description 存储运行时临时数据
     */
    declare const Temporary: {
        /** 警告数组 */
        alertArr?: any[];
        /** YouTube 任务 */
        youtubeTask?: any[];
        /** 引导结束回调 */
        onGuideOver?: () => void;
        // 其他临时数据...
        [key: string]: any;
    };

    /**
     * 回退/降级数据
     * @description 提供默认值和降级方案
     */
    declare const Fallback: {
        /** 电台数据 */
        radio: string;

        /** Emoji 扩展 */
        emojiExt: string;

        /** 需求图片 */
        demandPic: {
            url: string;
            color: string;
        };

        /** 角色扮演默认值 */
        rolePlay: {
            img: string;
            name: string;
            sex: string;
        };

        /** 图片回退 */
        img: {
            systemMsgNotify: string;
            anonymousBgImg: string;
            roomCover: string;
        };

        /** 字符回退 */
        chars: {
            invisible: string;
            space: string;
        };

        /** 库回退 */
        lib: {
            demand: string;
        };

        /** 默认图标 */
        icon: string;

        /** Socket IP 数组 */
        socketIpArr: string[];

        /** Socket IP 基础 */
        socketIpBase: string;

        /** Socket IP AntiDDOS */
        socketIpAntiDDOS: string;

        /** 默认背景 */
        defaultBg: string;

        /** 电话铃声 */
        phoneRingTone: string;

        /** 配置 */
        config: {
            functionPos: string;
        };
    };

    /**
     * 主对象（主要在移动端使用）
     * @description 提供原生桥接功能
     */
    declare const Main: {
        /** 打开 URL */
        openUrl: (url: string) => void;
        /** 通知 Toast */
        notifyToast: (message: string, flag?: boolean) => void;
        /** 更新通知信息 */
        updateNotificationInfo: (...args: any[]) => void;
        /** 重新加载 */
        reload: () => void;
        // 其他主对象方法...
        [key: string]: any;
    };

    /**
     * Socket 通信对象
     * @description 处理与服务器的 WebSocket 通信
     */
    declare const socket: {
        /** 发送消息 */
        send: (message: string) => void;
        // 其他 socket 方法...
        [key: string]: any;
    };

    /**
     * URL 配置对象
     * @description 存储各种 API 和资源 URL
     */
    declare const Urls: {
        /** API 基础 URL */
        api: string;

        /** 上传相关 URL */
        upload: {
            file: string;
            img: string;
            media: string;
            stream: string;
        };

        /** 已上传前缀 */
        uploadedPrefix: {
            file: string;
            img: string;
            media: string;
            stream: string;
        };

        /** 代理 S */
        agentS?: string;

        // 其他 URL 配置...
        [key: string]: any;
    };

    // ==================== Ext 扩展对象 ====================

    /**
     * 扩展对象，提供插件/扩展功能的支持
     */
    declare namespace Ext {
        /** 扩展变量存储 */
        const Variable: Record<string, any>;

        /** 扩展函数存储 */
        const Function: Record<string, Function>;

        /** 扩展类存储 */
        const Class: Record<string, any>;

        /** 扩展对象存储 */
        const Object: Record<string, any>;

        /** 扩展常量存储 */
        const Constant: Record<string, any>;

        /** 扩展存储（持久化） */
        const Storage: Record<string, any>;

        /** 扩展包列表 */
        const Package: any[];

        /** 扩展资源 */
        namespace Assets {
            /** 扩展设置（从 localStorage 读取） */
            const settings: Record<string, any>;

            /** 扩展数据库（从 localStorage 读取） */
            const database: Record<string, any>;
        }

        /** 临时数据存储 */
        const Temporary: Record<string, any>;

        /** 降级/回退数据 */
        const Fallback: Record<string, any>;

        /** 事件处理 */
        namespace Event {
            /** 窗口调整大小事件 */
            const resize: Record<string, Function>;

            /** 页面卸载前事件 */
            const beforeunload: Record<string, Function>;

            /** 右键菜单事件 */
            const contextmenu: Record<string, Function>;
        }

        /** 服务管理 */
        namespace Service {
            /** 服务实例缓存 */
            const instances: Record<string, any>;

            /**
             * 获取服务实例
             * @param serviceName 服务名称
             * @returns 服务实例对象
             * @description 如果实例不存在则创建新实例
             */
            function getInstance(serviceName: string): {
                /**
                 * 获取或设置扩展设置
                 * @param key 设置键名
                 * @param value 设置值（可选，不提供则为获取）
                 * @returns 设置值（获取时）或 undefined（设置时）
                 */
                settings(key: string, value?: any): any;

                /**
                 * 获取或设置扩展数据库
                 * @param key 数据库键名
                 * @param value 数据库值（可选，不提供则为获取）
                 * @returns 数据库值（获取时）或 undefined（设置时）
                 */
                database(key: string, value?: any): any;

                /**
                 * 删除扩展设置
                 * @param key 设置键名
                 */
                removeSettings(key: string): void;

                /**
                 * 删除扩展数据库
                 * @param key 数据库键名
                 */
                removeDatabase(key: string): void;

                /**
                 * 发送消息到服务器
                 * @param data 发送的数据（字符串或数组）
                 * @param target 目标（可选）
                 */
                send(data: string | string[], target?: string): void;

                /**
                 * 接收消息处理
                 * @param data 接收的数据
                 * @param source 数据来源
                 */
                receive(data: any, source?: string): void;

                /** 本地存储操作 */
                localStorage: {
                    /**
                     * 设置本地存储项
                     * @param key 键名
                     * @param value 值
                     */
                    setItem(key: string, value: string): void;

                    /**
                     * 获取本地存储项
                     * @param key 键名
                     * @returns 存储的值
                     */
                    getItem(key: string): string | null;

                    /**
                     * 删除本地存储项
                     * @param key 键名
                     */
                    removeItem(key: string): void;
                };

                /** 事件管理 */
                event: {
                    /**
                     * 添加事件监听器
                     * @param eventType 事件类型（resize/beforeunload/contextmenu）
                     * @param eventName 事件名称
                     * @param handler 事件处理函数
                     */
                    add(eventType: string, eventName: string, handler: Function): void;

                    /**
                     * 移除事件监听器
                     * @param eventType 事件类型
                     * @param eventName 事件名称
                     */
                    remove(eventType: string, eventName: string): void;

                    /**
                     * 获取事件监听器
                     * @param eventType 事件类型
                     * @param eventName 事件名称
                     * @returns 事件处理函数
                     */
                    get(eventType: string, eventName: string): Function | undefined;
                };
            };
        }

        /** 工具函数集合 */
        const Utils: Record<string, any>;
    }

    /**
     * 扩展运行时数据
     * @description 存储不同阶段执行的扩展代码
     */
    declare const extRunAtData: {
        /** 开始时执行的代码 */
        start: Record<string, string>;
        /** 结束时执行的代码 */
        end: Record<string, string>;
        /** DOM 加载时执行的代码 */
        domLoad: Record<string, string>;
        /** 加载开始时执行的代码 */
        loadStart: Record<string, string>;
        /** 加载结束时执行的代码 */
        loadEnd: Record<string, string>;
        /** 结束开始时执行的代码 */
        endStart: Record<string, string>;
        /** 结束结束时执行的代码 */
        endEnd: Record<string, string>;
        /** 房间加载开始时执行的代码 */
        roomLoadStart: Record<string, string>;
        /** 房间加载结束时执行的代码 */
        roomLoadEnd: Record<string, string>;
        /** 全部就绪时执行的代码 */
        allReady: Record<string, string>;
        /** 页面首次显示开始时执行的代码 */
        pageFirstShowStart: Record<string, string>;
        /** 页面首次显示结束时执行的代码 */
        pageFirstShowEnd: Record<string, string>;
    };

    /**
     * 执行扩展代码
     * @param event 事件名称（对应 extRunAtData 的键）
     * @description 在指定阶段执行注册的扩展代码
     */
    declare function extRunAt(event: keyof typeof extRunAtData): void;

    /**
     * 触发扩展事件
     * @param eventType 事件类型（resize/beforeunload/contextmenu）
     * @description 执行注册的所有该类型的事件处理函数
     */
    declare function extEvent(eventType: string): void;

    // ==================== Mod 模板对象 ====================

    /**
     * 模板处理对象
     * @description 提供 HTML 模板生成和图片处理功能
     */
    declare const Mod: {
        /**
         * 扩展私聊消息模板
         * @param uid 用户ID
         * @param avatar 头像
         * @param color 颜色
         * @param name 用户名
         * @param sex 性别 (1=男, 2=女)
         * @param time 时间戳
         * @param message 消息内容
         * @param active 是否激活
         * @returns HTML 字符串
         */
        extPm: (uid: string, avatar: string, color: string, name: string, sex: number, time: number, message: string, active: boolean) => string;

        /**
         * 私聊消息模板
         * @param msgData 消息数据数组
         * @param time 时间戳
         * @param content 消息内容
         * @param raw 原始数据
         * @param timestamp 时间戳字符串
         * @param effect 效果编号
         * @param target 目标对象
         * @returns HTML 字符串
         */
        pmMsg: (msgData: any[], time: number, content: string, raw: string, timestamp: string, effect?: number, target?: any) => string;

        /**
         * 资源处理
         * @param type 类型 (0=壁纸)
         * @param id 资源ID
         * @param element 目标元素
         * @param flag 标志
         */
        assets: (type: number, id: string, element: any, flag?: any) => void;

        /**
         * 模板生成器
         * @param templateId 模板ID (1-30+)
         * @param args 模板参数（可变参数）
         * @returns 渲染后的 HTML 字符串
         * @description 支持多种模板类型：
         * - 1: 图标/文本
         * - 4: 关闭按钮
         * - 5: 按钮
         * - 7: 空状态显示
         * - 8: 分隔线
         * - 9: 双栏布局
         * - 10: 商店商品项
         * - 11: 加载动画
         * - 12: 内容项背景
         * - 13-14: 面板持有者
         * - 15: 关闭按钮
         * - 16: 圆形按钮
         * - 17: 功能按钮
         * - 18: 图片加载器
         * - 19: 设置按钮
         * - 20: 上传帮助器
         * - 21: 移动面板关闭按钮
         * - 22-30: 其他模板...
         */
        template: (templateId: number, ...args: any[]) => string;

        /**
         * 图片处理
         * @param src 图片源
         * @param bgColor 背景颜色
         * @param width 宽度
         * @param height 高度
         * @param fit 适配方式
         * @param other 其他参数
         * @returns img 标签 HTML
         */
        img: (src?: string, bgColor?: string, width?: number, height?: number, fit?: string, ...other: any[]) => string;

        /**
         * HTML 保护
         */
        Html: {
            protectChatBgVideoClick: string;
        };

        /**
         * 样式工具
         */
        style: {
            /**
             * 生成渐变样式
             * @param color 颜色
             * @param direction 方向
             * @returns CSS 渐变字符串
             */
            gradient: (color: string, direction: string) => string;
        };
    };

    // ==================== Api 对象 ====================

    /**
     * API 对象
     * @description 提供第三方 API 集成
     */
    declare const Api: {
        /** YouTube API */
        Youtube?: any;
        // 其他 API 模块...
        [key: string]: any;
    };

    // ==================== Info 对象 ====================

    /**
     * 信息对象
     * @description 存储系统信息
     */
    declare const Info: {
        /** 语言代码 */
        lang?: string;
        // 其他信息...
        [key: string]: any;
    };

    // ==================== Urls 配置对象 ====================

    /**
     * URL 配置对象
     * @description 存储各种 API 和资源 URL
     */
    declare const Urls: {
        /** API 基础 URL */
        api: string;

        /** 上传相关 URL */
        upload: {
            file: string;
            img: string;
            media: string;
            stream: string;
        };

        /** 已上传前缀 */
        uploadedPrefix: {
            file: string;
            img: string;
            media: string;
            stream: string;
        };

        /** 代理 S */
        agentS?: string;

        // 其他 URL 配置...
        [key: string]: any;
    };

    // ==================== Constant 常量对象 ====================

    /**
     * 常量定义对象
     * @description 存储系统中的各种常量
     */
    declare const Constant: {
        /** URL 相关常量 */
        URL: {
            uploadFile: string;
            uploadImg: string;
            uploadMedia: string;
            uploadStream: string;
            uploadedPrefixFile: string;
            uploadedPrefixImg: string;
            uploadedPrefixMedia: string;
            uploadedPrefixStream: string;
        };

        /** 房间 ID */
        rid: {
            communication: string;
            residence: string;
            hotel: string;
            sandbox: string;
            space: string;
        };

        /** 通知类型 */
        NOTIFY: {
            PUBCHAT: number;  // 公共聊天
            PRICHAT: number;  // 私聊
            MAIL: number;     // 邮件
            DUM: number;      // 弹幕
            SYS: number;      // 系统
            AT: number;       // @提及
            HL: number;       // 高亮
        };

        /** 机器人配置 */
        BOT: string[][];
        BOT_NAME: string[];
        BOT_UID: string[];

        /** 快捷方式 */
        Shortcuts: {
            member: string[];
            all: string[];
        };

        /** 资源配置 */
        Assets: {
            uploadSizeLimitFile: number;
            uploadSizeLimitImg: number;
            uploadSizeLimitMedia: number;
            uploadSizeLimitStream: number;
        };

        /** 其他配置 */
        Others: {
            transform: string;
            functionBtnNoCloseArr: number[];
            socketMsgSplitChar: Uint8Array;
            apk: string[];
        };

        /** 性别颜色 */
        sexColor: string[];

        /** 鼠标事件 */
        mouseEnter: string;
        mouseLeave: string;

        // 其他常量...
        [key: string]: any;
    };

    // ==================== Fallback 回退对象 ====================

    /**
     * 回退/降级数据
     * @description 提供默认值和降级方案
     */
    declare const Fallback: {
        /** 电台数据 */
        radio: string;

        /** Emoji 扩展 */
        emojiExt: string;

        /** 需求图片 */
        demandPic: {
            url: string;
            color: string;
        };

        /** 角色扮演默认值 */
        rolePlay: {
            img: string;
            name: string;
            sex: string;
        };

        /** 图片回退 */
        img: {
            systemMsgNotify: string;
            anonymousBgImg: string;
            roomCover: string;
        };

        /** 字符回退 */
        chars: {
            invisible: string;
            space: string;
        };

        /** 库回退 */
        lib: {
            demand: string;
        };

        /** 默认图标 */
        icon: string;

        /** Socket IP 数组 */
        socketIpArr: string[];

        /** Socket IP 基础 */
        socketIpBase: string;

        /** Socket IP AntiDDOS */
        socketIpAntiDDOS: string;

        /** 默认背景 */
        defaultBg: string;

        /** 电话铃声 */
        phoneRingTone: string;

        /** 配置 */
        config: {
            functionPos: string;
        };
    };

    // ==================== Assets 资源对象 ====================

    /**
     * 资源对象
     * @description 存储系统资源和配置
     */
    declare const Assets: {
        /** 数据 */
        Data: {
            mixBlendMode: string[];
            charToNum: string;
            scoreColorArr: string[];
        };

        /** 资源 */
        Resource: Record<string, any>;

        /** 格式 */
        Format: {
            img: string[];
            audio: string[];
        };

        /** 谈话过滤器数组 */
        talkFilterArr: any[][];

        /** 设置（从 localStorage 读取） */
        settings: Record<string, any>;

        /** 数据库（从 localStorage 读取） */
        database: Record<string, any>;

        /** 过滤器 */
        filter: {
            uploadImg: string[];
            uploadImg2: string[];
            audio: string[];
            media: string[];
            uploadFile: string[];
        };

        /** 音频图标 */
        iconAudio: string[];

        /** 视频图标 */
        iconVideo: string[];

        /** 隐藏完整面板列表 */
        hideFullPanelList: string[];

        /** 选择框配置 */
        select: {
            infoSelectJSON: Record<string, any[]>;
            msgSelectJSON: Record<string, any[]>;
            serviceSelectJSON: Record<string, any[]>;
            diceSelectJSON: Record<string, any[]>;
            settingsSelectJSON: Record<string, any[]>;
            selectArr0_10: any[];
            botGameSelectJSON: Record<string, any[]>;
        };

        /** 后退系统 */
        backward: any;

        /** 回车键系统 */
        enterKey: any;

        /** 通知 Emoji */
        notiEmoji: any;

        /** 我的 Emoji */
        myEmoji?: any[];

        /** 扩展 PM */
        extPm?: Record<string, any>;

        // 其他资源...
        [key: string]: any;
    };

    // ==================== Utils 工具对象 ====================

    /**
     * 工具对象，提供各种实用功能
     */
    declare const Utils: {
        /** 移动端工具 */
        Mobile: {
            /** 停止处理（页面失焦） */
            onStop: () => void;
            /** 开始处理（页面聚焦） */
            onStart: () => void;
        };

        /** 过滤器 */
        Filter: {
            /** 公共消息过滤 */
            pubMsg: (msg: string) => string;
            /** 引用消息过滤 */
            refMsg: (msg: string, type?: number) => string;
            /** 引用消息安全检查 */
            refMsgSafeCheck: (msg: string) => string;
            /** 房间地址过滤 */
            roomAdress: (msg: string, flag?: string) => string;
            /** 图标过滤消息 */
            iconFilterMsg: (msg: string) => string;
        };

        /** 事件处理 */
        Event: {
            /** 媒体事件处理 */
            media: (eventType: number, element: any, param1?: any, param2?: any) => void;
            /** 视频指针点击事件 */
            onVideoPointerClick: (event: Event) => void;
            /** 消息显示切换事件 */
            onMsgDisplaySwitch: (type?: string, flag?: boolean) => void;
            /** 滚动事件 */
            scroll: Function;
            /** 阻止事件传播 */
            stopPropagation: (event: Event) => void;
        };

        /** 私聊工具 */
        privateChat: {
            /** 节点遍历 */
            nodeForeach: (count: number, container: any, flag1?: boolean, flag2?: boolean, reverse?: boolean) => void;
        };

        /** 库存/仓库工具 */
        repertory: {
            /** 新手引导 */
            guideNewComer: () => void;
        };

        /** 服务工具 */
        service: {
            /** 上传文件 */
            upload: (input: HTMLInputElement, mode: number) => void;
            /** 上传 URL 图片 */
            uploadUrlImg: (url: string, callback: Function, useProxy?: boolean) => void;
            /** 获取视频尺寸 */
            getVideoSize: (ratio: number) => [number, number];
            /** 翻译 */
            translate: (type: number, fallback?: string) => string;
            /** 获取时区 */
            getTimeZone: (timezone?: string) => string;
            /** Emoji 切换 */
            emoji: () => void;
            /** 设置房间信息 Cookie */
            setRoomInfoCookie: (name: string, attr: string, color: string, owner: string, info: string) => void;
            /** 调度任务管理 */
            schedule: (action: number, data?: any) => any;
            /** 撤回消息 */
            revokeMsg: (isPublic: boolean, data: string) => void;
            /** 保存状态 */
            saveStatus: (type: number, flag?: boolean) => void;
            /** 同步 PM 突袭 */
            syncPmRaid: () => void;
            /** 无动画模式 */
            noAnimate: (flag: boolean) => void;
            /** 媒体后台/前台切换 */
            mediaBFSwitch: () => void;
            /** 壁纸视频处理 */
            wallpaperVideo: (restore?: boolean) => void;
            /** 公共输入框聚焦 */
            onfocusPublic: () => void;
            /** 关闭 Emoji */
            closeEmoji: (force?: boolean) => void;
            /** 调整视频大小 */
            adjustVideoSize: (video: any, ratio: number[], restore?: boolean, width?: number, height?: number, flag?: boolean) => void;
            /** 比较滚动 */
            compareScroll: (element: any, height: number) => boolean;
            /** 滚动消息框到底部 */
            scrollMsgBoxToBottom: (box: any, parent?: any) => void;
            /** 获取缩放比例 */
            getScale: (element: any) => number;
            /** 获取文本颜色 */
            getTextColor: (color: string, flag?: boolean) => string;
            /** 是否为 GIF */
            isGif: (url: string) => boolean;
            /** 跳转到人数最多的房间 */
            jumpToMaxPplRoom: () => void;
            /** 隐藏留言持有者 */
            hideLeaveMsgHolder: () => void;
            /** 肖像或风景判断 */
            portraitOrLandscape: (ratio: number[]) => boolean;
            /** 图片包含处理 */
            imgContain: (maxWidth: number, maxHeight: number) => void;
            /** 自动发送链接 */
            autoSendLink: (link: string, input?: any, flag?: boolean) => void;
            /** 视图显示控制 */
            View: {
                show: (flag1: number, flag2: number) => boolean;
            };
            /** 图片就绪处理 */
            imgReady: {
                set: (img: HTMLImageElement, src: string) => void;
                add: (img: HTMLImageElement, onLoad?: Function, onError?: Function, onAbort?: Function) => void;
            };
            /** 资源工具 */
            Resource: {
                /** 通知声音
                 * 如私聊消息声音
                 * Utils.Resource.notiSound("privatechat")
                 */
                notiSound: (type: string) => void;
            };
            /** 小工具 */
            smallTools: {
                getTime: () => number;
                formatDecimal: (num: number, decimals: number) => string;
            };
            /** 通知 */
            notification: (title: string, icon: string, body: string, tag: number) => void;
            /** 文本转语音 */
            textToSpeech: (tag: number, text: string, lang: string) => void;
            /** 图片处理 */
            img: (container: any, src: string, bgColor?: string) => any;
            /** 获取时间字符串 */
            getTimeStr: (timestamp: number) => string;
            /** 设置 */
            settings: (key: string, value?: any) => any;
            // 其他服务方法...
            [key: string]: any;
        };

        /** 声音工具 */
        Sound: {
            play: (index: number) => void;
        };

        // 其他工具方法...
        [key: string]: any;
    };

    // ==================== 其他全局函数 ====================

    /**
     * 按钮处理器
     */
    declare let buttonProcesser = function (e, s, t, r) { };

    /**
     * 插入文本到输入框
     * @param input 输入框元素
     * @param text 要插入的文本
     * @param mode 插入模式
     */
    declare function insertText(input: HTMLElement, text: string, mode: number): void;

    /**
     * 改变面板
     * @param type 类型
     * @param flag 标志
     * @param animate 是否动画
     * @returns 回调函数
     */
    declare function changePanel(type: number, flag: number, animate?: boolean): Function;

    /**
     * 面板动画
     * @param type 动画类型
     * @param direction 方向
     * @param callback 回调函数
     * @param element 目标元素
     * @param effectNum 效果编号
     */
    declare function panelAnimate(type: number, direction: number, callback?: Function, element?: any, effectNum?: number): void;

    /**
     * 静音功能
     * @param element 媒体元素
     * @param mute 是否静音
     * @param flag 标志
     */
    declare function muteFunc(element: HTMLMediaElement, mute?: boolean, flag?: boolean): void;

    /**
     * 静音声音
     * @param flag 标志
     */
    declare function muteSound(flag?: number): void;

    /**
     * 窗口大小修复器
     */
    declare function windowSizeFixer(): void;

    /**
     * _div 移动器
     * @param element jQuery 元素
     * @param callback 回调函数
     * @param x X 轴偏移
     * @param y Y 轴偏移
     */
    declare function divmover(element: any, callback: Function | null, x: number, y: number): void;

    /**
     * 发送 Bug 报告
     * @param error 错误对象
     * @param context 上下文信息
     */
    declare function sendBug(error: Error, context: string): void;

    // ==================== 其他全局变量 ====================

    /** 发送 Bug 报告函数 */
    declare const sendBug: Function;

    /** 初始化存储对象 */
    declare const InitStorage: Record<string, any>;

    /** URL 配置对象 */
    declare const Urls: any;

    /** 临时字符串变量 */
    declare let strTmp: string;
    declare let strTmp2: string;
    declare let strTmp3: string;
    declare let strTmp4: string;

    /** 临时对象变量 */
    declare let objTmp: any;
    declare let objTmp2: any;

    /** 错误处理函数 */
    declare let onerror: Function | null;

    /** 是否加载成功 */
    declare let loadSuccess: boolean;

    /** 分 zIndex 编号 */
    declare let divzindexnum: number;

    /** 是否查看日志 */
    declare let seeLog: boolean;

    /** 公共消息框 */
    declare const pubMsgBox: any;

    /** 消息持有者 */
    declare const msgholder: any;

    /** 输入框 */
    declare const moveinput: any;
    declare const inputholdermain: any;

    /** 移动输入发送按钮 */
    declare const moveinputSendBtnSend: any;

    /** 面部按钮 */
    declare const faceButton: any;

    /** 新手引导持有者 */
    declare let guideNewComerHolder: any;

    /** 统一消息框房间标志 */
    declare const unifiedMsgBoxRoom: boolean;

    /** 角色扮演房间标志 */
    declare const rolePlayRoom: boolean;

    /** 角色消息日志 */
    declare const roleMsgLog: any;

    /** PM 全屏标志 */
    declare const pmFull: boolean;

    /** 沉浸式聊天标志 */
    declare const immersionChat: boolean;

    /** 纯聊天室标志 */
    declare const pureChatRoom: boolean;

    /** 允许移动设备后台播放视频 */
    declare const allowMobilePlayVideoBackground: boolean;

    /** 是否是媒体共享房间 */
    declare const isMediaShareRoom: boolean;

    /** 共享媒体当前时间 */
    declare let shareMediaCurrentTime: number;

    /** 视频播放器 */
    declare const videoPlayer: any;
    declare const videoPlayer2: any;
    declare const videoMain: any;

    /** 视频调整大小数组 */
    declare const videoResizeArr: any[];

    /** 共享媒体对象 */
    declare const shareMediaObj: any;

    /** 标题消息私有数量 */
    declare let titleMsgPNum: number;

    /** 标题消息数量 */
    declare let titleMsgNum: number;

    /** 标题留言私有数量 */
    declare let titleLeavemsgPNum: number;

    /** 变量 notication body */
    declare let Variable_noticationBody: string;

    /** 样式表对象 */
    declare const styleSheetsobj: any[];

    /** 模糊模式 */
    declare const blurMode: string;

    /** 去帮助标志 */
    declare let goHelp: number;

    // ==================== 速度变量（动态生成）====================

    /** 速度值 5000ms */
    declare let speed5000: number;
    /** 速度值 3000ms */
    declare let speed3000: number;
    /** 速度值 1000ms */
    declare let speed1000: number;
    /** 速度值 500ms */
    declare let speed500: number;
    /** 速度值 250ms */
    declare let speed250: number;
    /** 速度值 200ms */
    declare let speed200: number;
    /** 速度值 168ms */
    declare let speed168: number;
    /** 速度值 100ms */
    declare let speed100: number;
    /** 速度值 50ms */
    declare let speed50: number;

    /** 速度字符串 5000ms（CSS transition） */
    declare let speed5000s: string;
    /** 速度字符串 3000ms（CSS transition） */
    declare let speed3000s: string;
    /** 速度字符串 1000ms（CSS transition） */
    declare let speed1000s: string;
    /** 速度字符串 500ms（CSS transition） */
    declare let speed500s: string;
    /** 速度字符串 250ms（CSS transition） */
    declare let speed250s: string;
    /** 速度字符串 200ms（CSS transition） */
    declare let speed200s: string;
    /** 速度字符串 168ms（CSS transition） */
    declare let speed168s: string;
    /** 速度字符串 100ms（CSS transition） */
    declare let speed100s: string;
    /** 速度字符串 50ms（CSS transition） */
    declare let speed50s: string;

    // ==================== 用户相关信息 ====================

    /** 当前用户名 */
    declare let myself: string;
    /** 当前用户名（小写） */
    declare let myselfL: string;
    /** 当前用户ID */
    declare let myself2: string;
    /** 当前用户性别 */
    declare let sex: string;
    /** 当前用户名颜色 */
    declare let namecolor: string;
    /** 当前用户头像 */
    declare let avatar: string;
    /** 当前用户头像2 */
    declare let avatar2: string;
    /** 当前用户标签图片 */
    declare let labelImg: string;
    /** 当前用户对话框图片 */
    declare let dialogImg: string;
    /** 当前用户背景图片 */
    declare let bgImg: string;
    /** 当前用户等级 */
    declare let rank: string;
    /** 当前用户装饰品 */
    declare let accessory: string;

    // ==================== 语言和功能标志 ====================

    /** 语言类型 */
    declare let languageType: number;

    /** Beta 世界标志 */
    declare let betaWorld: boolean;

    // ==================== 其他运行时变量 ====================

    /** 资源持有者 */
    declare let resourceHolder: any;
    /** 日期对象 */
    declare let date: any;
    /** 是否支持触摸 */
    declare let supportTouch: boolean;
    /** 是否为 Firefox 浏览器 */
    declare let isFirefox: boolean;
    /** 是否为 PC 客户端 */
    declare let isPcApp: boolean;

    // ==================== WebRTC 相关变量 ====================

    /** WebRTC Peer 对象 */
    declare let peer: any;
    /** 本端 Peer ID */
    declare let myPeerId: string;
    /** 通话处理对象 */
    declare let callHandle: any;
    /** 本端媒体流 */
    declare let myStream: MediaStream;
    /** 本端私有媒体流 */
    declare let myPriStream: MediaStream;
    /** 对端私有视频 ID */
    declare let priPeerVideoId: string;
    /** 聊天媒体 ID */
    declare let chatMediaId: string;
    /** 聊天媒体类型 */
    declare let chatMediaType: string;
    /** Peer 通话时钟 */
    declare let peerCallClock: any;
    /** Peer 处理数组 */
    declare let peerHandle: any[];

    // ==================== 声音探测变量 ====================

    /** 游戏声音探测 */
    declare let gamesoundprobe: number;
    /** Buzz 声音探测 */
    declare let buzzsoundprobe: number;
    /** 点击声音探测 */
    declare let clicksoundprobe: number;
    /** 选择声音探测 */
    declare let selectsoundprobe: number;
    /** 动画声音探测 */
    declare let animationsoundprobe: number;
    /** 特效声音探测 */
    declare let effectsoundprobe: number;

    // ==================== 样式相关变量 ====================

    /** 主样式表索引 */
    declare let mainStyleSheetsIndex: number;
    /** 输入框占位符样式声明 */
    declare let moveinputPlaceHolder: CSSStyleDeclaration;

    // ==================== 音量控制函数 ====================

    /**
     * 消息音量变化处理
     * @param type 消息类型
     * @param volume 音量值
     * @param flag 标志（可选）
     */
    declare function msgvolumechgange(type: string, volume: number, flag?: number): void;

    /**
     * ============================================
     * 此文件由 AI 自动生成
     * 基于对 iirose.js 源代码的分析和推断
     * 用于提供 TypeScript 类型提示和检查
     * 
     * 生成时间: 2026-04-06
     * 源代码大小: 36712 行
     * 定义的全局对象: 15+
     * 定义的全局函数: 50+
     * 定义的全局变量: 200+
     * 
     * 注意：由于是基于代码分析生成的类型定义，
     * 可能存在不准确或不完整的地方。
     * 建议在实际使用中根据运行情况进行验证和修正。
     * ============================================
     */


    /** 软件版本 */
    declare let appVersion: string;
    // 未知行
    declare let Api: {
        md: {
            // 使用字符串生成网页元素
            render(param: string): string;
        }
    }
    /**
     * 按钮处理
     * @param e 
     * @param s 
     * @param t 
     * @param r 
     */
    declare let buttonProcesser: (e: any, s: any, t: any, r: any) => any;

    declare let Objs: {
        Assets: {

        }
        mapHolder: {
            /**
             * 切换房间
             * @param {string} roomId
             */
            roomchanger: (roomId: string) => void,
            findUserByUid: (uid: string) => any,
        }
    };
    /** 用户昵称 */
    declare let myself = '' as string;
    /** 输入框颜色十六进制 */
    declare let inputcolorhex: string;
    /** 私聊函数 */
    declare let privatechatfunc: (e: any) => void;
}
export { };
