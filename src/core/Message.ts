
class Public {
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
    readonly messageClass = 'public';
}
class Private {
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
    readonly messageClass = 'private';
}
class Hidden {
    /** 消息的标题，名字？主题 */
    messageName: string = '';
    /** 发送过来的唯一标识 */
    uid: string = '';
    /** 数据 */
    data: string = '';
    /** 消息类型 */
    readonly messageClass = 'hidden';
}
class Danmu {
    /** 用户名 */
    username: string = '';
    /**  */
    avatar: string = '';
    /** 消息 */
    message: string = '';
    /**  */
    color: string = '';
    /**  */
    gender: string = '';
    /**  */
    timeStamp: string = '';
    /** 唯一id */
    uid: string = '';
    /** 消息类型 */
    readonly messageClass = 'danmu';
}
class Withdrawn {
    /** 可选的，撤回私聊对象窗口的UID */
    privateUID: string = '';
    /** 需要要撤回的气泡用户uid */
    uid: string = '';
    /** 消息唯一标识，一串随机数 */
    messageUid: string = '';
    /** 数据唯一标识，上面两个组合在一起 */
    dataUid: string = '';
    /** 消息类型 */
    readonly messageClass = 'withdrawn';
}
class System {
    /** 消息列表 */
    userMessageList: string[] = [];
    /** 消息类型 */
    readonly messageClass = 'system';
}
class Stock {
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
    readonly messageClass = 'stock';
}
class Unkonw {
    /** 未知消息的原型 */
    message: string = '';
    /** 消息类型 */
    readonly messageClass = 'unkonw';
}

export {
    Public,
    Private,
    Hidden,
    Danmu,
    Withdrawn,
    System,
    Stock,
    Unkonw
}