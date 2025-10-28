import { Public, Private, Hidden, Danmu, Withdrawn, Stock, System, Unkonw } from "./Message";

/** 解析好后的消息列表 */
let messageObjList: (
    Public |
    Private |
    Hidden |
    Danmu |
    Withdrawn |
    System |
    Stock |
    Unkonw
)[] = [];

function publicChat(message: string) {
    let messageObj = new Public();
    let message_list = message.split('>');
    messageObj.timeStamp = message_list[0];
    messageObj.headPortrait = message_list[1];
    messageObj.name = message_list[2];
    messageObj.message = message_list[3];
    messageObj.color = message_list[5];
    messageObj.gender = message_list[6];
    messageObj.uid = message_list[8];
    messageObj.designation = message_list[9];
    messageObj.messageUid = message_list[10];
    return messageObj;
}
function privateChat(message: string) {
    // ""1726160459>61aef798c94e6>留不住别样年华>http://r.iirose.com/i/23/8/17/12/0120-9Y.jpg#e>1>6b4d44>>6b4d44>2>>593356694306
    let messageObj = new Private();
    let message_list = message.split('>');
    messageObj.timeStamp = message_list[0].slice(1);
    messageObj.uid = message_list[1];
    messageObj.name = message_list[2];
    messageObj.headPortrait = message_list[3];
    messageObj.message = message_list[4];
    messageObj.color = message_list[5];
    messageObj.gender = message_list[8];
    messageObj.messageUid = message_list[10];
    return messageObj;
}

function danmu(message: string) {
    // =narlen>http://r.iirose.com/i/23/12/17/9/4944-6D.jpg>7f544c>7f544c>2>anime/63>1726212024>655352ad667a8>>350>0>0,0,0.5>f0
    let messageObj = new Danmu();
    // console.log('弹幕消息', message)
    let message_list = message.split('>');
    messageObj.username = message_list[0];
    messageObj.message = message_list[1];
    messageObj.color = message_list[2];
    messageObj.gender = message_list[4];
    messageObj.avatar = message_list[5];
    messageObj.timeStamp = message_list[6];
    messageObj.uid = message_list[7];
    return messageObj;
}

function hidden(message: string) {
    let messageObj = new Hidden();
    let temp;
    temp = message.match(/(?<=^[/]<).*(?=>[0-9|a-z]{13}:.*)/gs);
    messageObj.messageName = (temp == null) ? '' : temp[0];
    temp = message.match(/(?<=^[/]<.*>)[0-9|a-z]{13}(?=:.*)/gs);
    messageObj.uid = (temp == null) ? '' : temp[0];
    temp = message.match(/(?<=^[/]<.*>[0-9|a-z]{13}:).*/gs);
    messageObj.data = (temp == null) ? '' : temp[0];
    return messageObj;
}
/**解码撤回消息 */
function withdrawn(message: string) {
    // `v0#62506af353dd9_491855401763"`
    // `v0#61aef798c94e6_656602774703"`
    // `v0*61aef798c94e6"62506af353dd9_015913147468`
    // console.log('撤回类型的原消息', message);
    let messageObj = new Withdrawn();
    if (message[2] == '#') {
        messageObj.privateUID = '';
        messageObj.uid = message.slice(3, 16);
        messageObj.messageUid = message.slice(17, 29);
        messageObj.dataUid = message.slice(3, 29);
    }
    else {
        messageObj.privateUID = message.slice(3, 16);
        messageObj.uid = message.slice(17, 30);
        messageObj.messageUid = message.slice(31);
        messageObj.dataUid = message.slice(17);
    }
    return messageObj;
}
function system(message: string) {
    let messageObj = new System();
    messageObj.userMessageList = message.split('<');
    return messageObj;
}
function stock(message: string) {
    // 查看">#"
    // '>1507"1507"1"0"21.021'
    // 买了一个">$1"
    // '>1508"1508"1"20.021'
    // 卖了一个">@1"
    // '>1507"1507"0"21.021'
    // 购买超出数量">$99999"
    // 余额这么多'><20.676'
    // 卖出超出持有的股票数量">@9999"
    // 只有1股'>>1'
    // 股票价格太低(低于0.1)购买失败
    // ">*"
    // >1000  "3177.2   "3.1772 "0      "21.732
    // >1001  "3180.3   "1      "18.555
    // >1000  "3177.2   "0      "21.732
    let messageObj = new Stock();
    messageObj.result = message[2];
    // console.log('正在解析的股票消息', message);
    if (messageObj.result == '*') {
        return messageObj;
    } else if (messageObj.result == '>') {
        messageObj.holdingAmount = parseInt(message.slice(2))
        return messageObj;
    } else if (messageObj.result == '<') {
        messageObj.balance = parseInt(message.slice(2))
        return messageObj;
    } else {
        let L = message.split('"');
        if (L.length == 5) {
            messageObj.stockPrice = parseFloat(L[2]);
            messageObj.totalStock = parseInt(L[0].slice(1));
            messageObj.holdingAmount = parseInt(L[3]);
            messageObj.totalEquity = parseFloat(L[1]);
            messageObj.balance = parseFloat(L[4]);
            return messageObj;
        } else if (L.length == 4) {
            messageObj.stockPrice = parseFloat(L[1]) / parseInt(L[0].slice(1));
            messageObj.totalStock = parseInt(L[0].slice(1));
            messageObj.holdingAmount = parseInt(L[2]);
            messageObj.totalEquity = parseFloat(L[1]);
            messageObj.balance = parseFloat(L[3]);
            return messageObj;
        }
    }
    // else {
    //   return messageObj;
    // }
    return messageObj;
}
function unkonw(message: string) {
    let messageObj = new Unkonw();
    messageObj.message = message;
    return messageObj;
}

function decodeMessage(message: string) {
    messageObjList = [];
    if (/^"[^"].*/gs.test(message)) {
        // 房间的消息
        let temp_list = message.slice(1).split('<')
        for (let i = temp_list.length - 1; i >= 0; i--)
            messageObjList.push(publicChat(temp_list[i]))
    } else if (/^"".*/gs.test(message)) {
        // 私聊消息
        let temp_list = message.slice(1).split('<')
        for (let i = temp_list.length - 1; i >= 0; i--) {
            messageObjList.push(privateChat(temp_list[i]))
        }
    } else if (/^=.*/gs.test(message)) {
        // 弹幕消息
        let temp_list = message.slice(1).split('<')
        for (let i = temp_list.length - 1; i >= 0; i--) {
            messageObjList.push(danmu(temp_list[i]))
        }
    } else if (/^[/]<.*>[0-9|a-z]{13}:.*/gs.test(message)) {
        // 隐式消息
        messageObjList.push(hidden(message));
    } else if (/^v0.*/gs.test(message)) {
        // 撤回消息
        messageObjList.push(withdrawn(message));
    } else if (/^%\*".*/gs.test(message)) {
        // 系统消息
        messageObjList.push(system(message));
    } else if (/^>.*/gs.test(message)) {
        // 股票消息
        messageObjList.push(stock(message));
    } else {
        // 未知消息
        messageObjList.push(unkonw(message));
    }
    // console.log('正在解码消息', { message, list: messageObjList });
}
export {
    messageObjList,
    decodeMessage,
}