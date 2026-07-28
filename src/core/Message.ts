/**
 * 公共消息类
 * 用于表示公共频道中的消息
 */
export class Public {
    /** 时间戳 */
    timeStamp: string = '';
    /** 头像链接 */
    headPortrait: string = '';
    /** 名字 */
    name: string = '';
    /** 消息 */
    message: string = '';
    /** 消息气泡背景颜色 */
    color: string = '';
    /** 性别 */
    gender: string = '';
    /** 唯一标识 */
    uid: string = '';
    /** 称号 */
    designation: string = '';
    /** 消息UID */
    messageUid: string = '';
    /** 消息类别 */
    // readonly messageClass = 'public';
}

/**
 * 私聊消息类
 * 用于表示私聊消息
 */
export class Private {
    /** 时间戳 */
    timeStamp: string = '';
    /** 头像链接 */
    headPortrait: string = '';
    /** 名字 */
    name: string = '';
    /** 消息 */
    message: string = '';
    /** 消息颜色 */
    color: string = '';
    /** 性别 */
    gender: string = '';
    /** 唯一标识UID */
    uid: string = '';
    /** 消息唯一标识 */
    messageUid: string = '';
    /** 消息类型 */
    // readonly messageClass = 'private';
}

/**
 * 隐藏消息类
 * 用于表示隐藏类型的消息
 */
export class Hidden {
    /** 消息的标题，名字？主题 */
    messageName: string = '';
    /** 发送过来的唯一标识 */
    uid: string = '';
    /** 数据 */
    data: string = '';
    /** 消息类型 */
    // readonly messageClass = 'hidden';
}

/**
 * 弹幕消息类
 * 用于表示弹幕类型的消息
 */
export class Danmu {
    /** 用户名 */
    username: string = '';
    /** 头像链接 */
    avatar: string = '';
    /** 消息 */
    message: string = '';
    /** 消息颜色 */
    color: string = '';
    /** 性别 */
    gender: string = '';
    /** 时间戳 */
    timeStamp: string = '';
    /** 唯一id */
    uid: string = '';
    /** 消息类型 */
    // readonly messageClass = 'danmu';
}

/**
 * 撤回消息类
 * 用于表示撤回操作的消息
 */
export class Withdrawn {
    /** 可选的，撤回私聊对象窗口的UID */
    privateUID: string = '';
    /** 需要要撤回的气泡用户uid */
    uid: string = '';
    /** 消息唯一标识，一串随机数 */
    messageUid: string = '';
    /** 数据唯一标识，上面两个组合在一起 */
    dataUid: string = '';
    /** 消息类型 */
    // readonly messageClass = 'withdrawn';
}

/**
 * 系统消息类
 * 用于表示系统通知类消息
 */
export class System {
    /** 消息列表 */
    userMessageList: string[] = [];
    /** 消息类型 */
    // readonly messageClass = 'system';
}

/**
 * 股票消息类
 * 用于表示股票相关数据消息
 */
export class Stock {
    /** 
     * '*' 表示股价过低无法买股票
     * '>' 表示卖出的股票超出数量
     * '<' 表示余额不够
     * 数字表示正常
     */
    result: string = '';
    /** 股价 */
    stockPrice: number = NaN;
    /** 总股数 */
    totalStock: number = NaN;
    /** 持股数 */
    holdingAmount: number = NaN;
    /** 总金 */
    totalEquity: number = NaN;
    /** 账户余额 */
    balance: number = NaN;
    /** 消息类型 */
    // readonly messageClass = 'stock';
}

/**
 * 未知消息类
 * 用于表示无法识别的消息类型
 */
export class Unkonw {
    /** 未知消息的原型 */
    message: string = '';
    /** 消息类型 */
    // readonly messageClass = 'unkonw';
}

/**
 * 所有消息类型的联合类型
 * 用于类型检查和类型安全
 */
export type MessageClass =
    Public |
    Private |
    Hidden |
    Danmu |
    Withdrawn |
    System |
    Stock |
    Unkonw;

