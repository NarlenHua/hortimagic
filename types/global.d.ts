// 以下类型定义由 AI 根据 iirosewindow.js 内容「逆向猜测」生成，仅供开发时参考。
// 因原始代码为混淆/压缩产物，真实签名可能与猜测存在偏差，请结合运行时调试校准。

declare global {
    /* ---------------------------------- */
    /* 1. 全局变量（按字母序）           */
    /* ---------------------------------- */

    /** AI 生成：房间主色调，16 进制字符串，如 `"ff5722"` */
    let roomColor: string;

    /** AI 生成：是否启用面板底部栏，对应 Cookie 值 `"panelBottomBar"` 的布尔转换 */
    let panelStyle: boolean;

    /** AI 生成：浏览器视口高/宽，实时更新 */
    let browserHeight: number;
    let browserWidth: number;

    /** AI 生成：性能倍率，用于动画时长缩放 */
    let speedRatio: number;

    /** AI 生成：用户唯一标识，13 位字符串 */
    let uid: string;

    /** AI 生成：当前房间号，如 `"5b7cda6765b16"` */
    let roomn: string;

    /** AI 生成：是否处于移动端 */
    let isMobile: boolean;

    /** AI 生成：是否启用「精简数据」模式，影响图片/视频懒播行为 */
    let reduceDataUsageProbe: boolean;

    /** AI 生成：全局 socket 实例，WebSocket 已封装 */
    let socket: WebSocket & {
        /** AI 生成：向服务端发送原始消息，自动补全尾部 `\n` */
        send(raw: string): void;
    };

    /** AI 生成：主输入框 jQuery 对象 */
    let moveinput: JQuery<HTMLInputElement>;

    /** AI 生成：主输入框原生节点，与 moveinput 指向同一元素 */
    let moveinputO: HTMLInputElement;

    /**
     * 消息弹窗
     * @param message 主要的消息内容，可以是文本或HTML,或者任何可以得到结果的东西
     * @param other 可选参数，如果提供，它是一个数组，包含额外的信息，如按钮文本、确认消息等。
     * @param isHtml 布尔值，指示消息是否已经是HTML格式，如果是，则不会对消息进行HTML转义。
     * @param standby 备用消息内容，当t未提供时使用。
     * @param operation 布尔值，可能用于控制是否在某些情况下不执行某些操作，如锁定屏幕或页面模糊。
     */
    function _alert(
        message: any,
        other?: string[],
        isHtml?: boolean,
        standby?: string,
        operation?: boolean
    ): void;

    /** AI 生成：系统状态数组，保存 17 种图标名，如 `"message-processing"` */
    let statusarr: string[];

    /** AI 生成：系统提示音文件名数组，含 22 条相对路径 */
    let soundarr: string[];

    /** AI 生成：时区映射表，城市名 -> 与 UTC 小时偏移量 */
    let timeZoneArr: Record<string, number>;

    /** AI 生成：国籍映射表，二位国家码 -> 中英文名称，如 `AD:"安道尔共和国 Andorra"` */
    let nationality: Record<string, string>;

    /** AI 生成：头像框/帽子配饰坐标数据，索引到 `[path, [x,y,w,h]]` */
    let accessoryArr: Record<number, [string, [number, number, number, number, number, number]]>;

    /* ---------------------------------- */
    /* 2. 主要命名空间                   */
    /* ---------------------------------- */

    /** AI 生成：工具函数集合 */
    namespace Utils {
        let Sound: {
            /**
             * 播放花园常见的声音
             * @param num 编号，0~9
             * @param other 其他参数
             * @returns 
             */
            play(num: number, other?: any): any;
        }

        // 19998行
        /**
         * 预览音频，播放音频
         * @param url 音频链接
         */
        function previewSound(url: string): any;
        /** AI 生成：滤镜与文本处理子模块 */
        namespace Filter {
            /** AI 生成：过滤公开聊天内容，返回过滤后字符串 */
            function pubMsg(raw: string): string;

            /** AI 生成：将 `(_hr) 消息 (_hr)` 转成引用 DOM 片段 */
            function refMsg(html: string, margin?: 0 | 1 | 2): string;

            /** AI 生成：将房间地址语法 `[*roomId*]` 转成可点击链接 */
            function roomAdress(html: string): string;

            /** AI 生成：将媒体链接转成对应表情符号，用于通知摘要 */
            function iconFilterMsg(html: string): string;
        }
        let filter: {
            all: [];
            pubchat: null;
            prichat: null;
            danmaku: null;
            /**
             * 运行过滤器
             */
            run: (e, t) => any;
        }

        /** AI 生成：事件/媒体相关 */
        namespace Event {
            /** AI 生成：统一处理 audio/video 标签事件，o 参数为行为码 */
            function media(
                action: 0 | 1 | 2 | 3 | 4 | 9 | 10 | 11 | 12 | 13,
                $target: JQuery,
                o?: any,
                i?: any
            ): void;

            /** AI 生成：点击视频区域时进入/退出影院模式 */
            function onVideoPointerClick(e: MouseEvent): void;
        }

        /** AI 生成：移动端生命周期钩子 */
        namespace Mobile {
            function onStop(): void;
            function onStart(): void;
        }

        /** AI 生成：服务层，含上传、翻译、时区、面板保存等 */
        namespace service {
            /** AI 生成：上传文件入口，自动区分图片/媒体/普通文件 */
            function upload(input: HTMLInputElement, mode: 0 | 1): void;

            /** AI 生成：将网络图片转存至本站并插入输入框 */
            function uploadUrlImg(url: string, callback: (url: string) => void, useAgent?: boolean): void;

            /** AI 生成：获取视频自适应尺寸 `[width, height]` */
            function getVideoSize(ratio: number): [number, number];

            /** AI 生成：获取时区描述文本，如 `UTC +8   /   18:30` */
            function getTimeZone(cityOrStar?: string): string;

            /** AI 生成：打开/关闭表情面板 */
            function emoji(): void;

            /** AI 生成：保存当前面板状态，用于断线恢复 */
            function panelSave(): void;

            /** AI 生成：资源回收，清理公屏/私聊过多消息 */
            function resourceGC(limit?: number): void;
            function resourceGC_PM(pmBox: JQuery, limit?: number): void;

            /** AI 生成：处理输入框快捷指令，返回 `true` 表示已消费 */
            function moveinputDo(cmd: string, noSend?: boolean): boolean;

            /** AI 生成：构造离线私聊窗口，成功返回 `1` */
            function offlinePmBuildHelper(targetUid: string, temp?: string): 0 | 1;

            /** AI 生成：管理员相关子模块 */
            namespace admin {
                function init(raw: string): void;
                function set(global: 0 | 1, type: "0" | "1" | "2" | "3", expired: string, comment: string): void;
                function setInput(enable: boolean, type?: number, placeholder?: string): void;
                function control(type: 0 | 1 | 2, enable: boolean, level: 1 | 2 | 3): void;
            }
        }

        /** AI 生成：小型工具函数 */
        namespace smallTools {
            /** AI 生成：格式化小数，保留 `digit` 位 */
            function formatDecimal(num: number, digit: number): string;

            /** AI 生成：拼接网易云歌手数组 */
            function combineArtist(ar: Array<{ name: string }>): string;

            /** AI 生成：返回当前 Unix 时间戳（秒） */
            function getTime(): number;

            /** AI 生成：补零日期 `2025/06/05` */
            function dateFill(y: number, m: number, d: number): string;
        }
    }

    /* ---------------------------------- */
    /* 3. 扩展系统（Ext）                */
    /* ---------------------------------- */

    /** AI 生成：官方扩展 API 命名空间 */
    namespace Ext {
        let Variable: Record<string, any>;
        let Function: Record<string, Function>;
        let Class: Record<string, Function>;
        let Object: Record<string, any>;
        let Constant: Record<string, any>;
        let Storage: Record<string, any>;
        let Package: any[];
        let Temporary: Record<string, any>;
        let Fallback: Record<string, any>;
        let Event: {
            resize: Record<string, Function>;
            beforeunload: Record<string, Function>;
            contextmenu: Record<string, Function>;
        };

        /** AI 生成：扩展资源区 */
        namespace Assets {
            let settings: Record<string, any>;
            let database: Record<string, any>;
        }

        /** AI 生成：每个扩展实例的服务端点 */
        namespace Service {
            let instances: Record<string, ExtInstance>;
            function getInstance(extId: string): ExtInstance;
        }

        /** AI 生成：工具集合 */
        namespace Utils { }

        interface ExtInstance {
            /** AI 生成：读写扩展本地设置 */
            settings(key: string): any;
            settings(key: string, val: any): void;

            /** AI 生成：读写扩展持久化数据库 */
            database(key: string): any;
            database(key: string, val: any): void;

            /** AI 生成：向服务端发送扩展消息 */
            send(cmd: string | string[], body: string): void;

            /** AI 生成：接收到服务端消息时回调 */
            receive(cmd: string, body: string): void;

            removeSettings(key: string): void;
            removeDatabase(key: string): void;

            /** AI 生成：隔离的 localStorage 工具 */
            localStorage: {
                setItem(key: string, val: string): void;
                getItem(key: string): string | null;
                removeItem(key: string): void;
            };

            /** AI 生成：扩展事件管理 */
            event: {
                add(event: "resize" | "beforeunload" | "contextmenu", key: string, cb: Function): void;
                remove(event: "resize" | "beforeunload" | "contextmenu", key: string): void;
                get(event: "resize" | "beforeunload" | "contextmenu", key: string): Function | undefined;
            };
        }
    }

    /* ---------------------------------- */
    /* 4. 杂项工具函数                   */
    /* ---------------------------------- */

    /** AI 生成：将字符串转小写，内部实现跳过 Unicode 大写 */
    function toLowerCase(str: string): string;

    /**
     * HTML反转义函数，用于将字符串e中的HTML特殊字符转换为HTML实体。
     *它检查字符串中是否包含&、<、>、"、'和\，并相应地替换为&amp;、&lt;、&gt;、&quot;、&#039;和&#092;。
     *这个函数没有处理非断空格（&nbsp;）。
     */
    function htmlspecialchars(str: string): string;

    /**
     * HTML反转义函数，用于将字符串e中的HTML实体转换回特殊字符。
     *它检查字符串中是否包含&#092;、&#039;、&quot;、&gt;、&lt;和&amp;，并相应地替换为\、'、"、>、<和&。
    */
    function unhtmlspecialchars(str: string): string;

    /** AI 生成：将 hex 色值转 `r,g,b` 字符串 */
    function hex2rgb(hex: string): string;

    /** AI 生成：将 `r,g,b` 字符串转 hex */
    function rgb2hex(rgb: string): string;

    /** AI 生成：根据颜色亮度返回是否属于「浅色」 */
    function darkOrLight(color: string, asRgb?: boolean): boolean;

    /** AI 生成：头像链接转换，支持系统头像、外链、GIF 拦截等 */
    function avatarconv(url: string, noFallback?: boolean): string;

    /** AI 生成：配饰图片链接转换 */
    function imgconvAccessory(id: number | string): string;

    /** AI 生成：聚焦输入框并返回自身（PC 端） */
    function focusI<T extends JQuery>(input: T): T;

    /** AI 生成：执行快捷指令，如 `getname`、`getuid`、`high2` 高亮等 */
    function runCmd(cmd: "getname" | "getuid" | "high2" | string, arg?: string): void;

    /** AI 生成：弹出图片查看器 */
    function showImg(src: string, show?: boolean): void;

    /** AI 生成：弹出音频/视频查看器 */
    function showMedia(isVideo: boolean, src: string, show?: boolean): void;

    /** AI 生成：请求指定用户资料卡片 */
    function getProfile(uid: string, fromMap?: boolean): void;

    /** AI 生成：展示用户详情弹窗（精简/完整双模式） */
    function whois(
        raw: string,
        data: string[],
        extra?: [number, [number, number]]
    ): void;

    /** AI 生成：页面加载完毕回调，由 `<body onload>` 触发 */
    function loadIsDone(): void;

    /** AI 生成：模糊背景，t 为模糊像素值，`"0"` 表示关闭 */
    function blurFunc(e: any, t: string): void;

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
}

export { };