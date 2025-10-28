async function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
function compressHTML(html) {
  html = html.replace(/>\s+</g, "><");
  html = html.replace(/\s{2,}/g, " ");
  html = html.replace(/<!--[\s\S]*?-->/g, "");
  html = html.trim();
  return html;
}
function compressCSS(css) {
  css = css.replace(/\s{2,}/g, " ");
  css = css.replace(/\/\*[\s\S]*?\*\//g, "");
  css = css.replace(/\s*([{};:,])\s*/g, "$1");
  css = css.replace(/;\s*}/g, "}");
  css = css.trim();
  return css;
}
function addStyle(css) {
  let s2 = document.createElement("style");
  s2.innerText = css;
  document.body.append(s2);
}
function htmlSpecialCharsEscape(e2) {
  e2 = e2.replace(`&`, "&amp;");
  e2 = e2.replace(`<`, "&lt;");
  e2 = e2.replace(`>`, "&gt;");
  e2 = e2.replace(`"`, "&quot;");
  e2 = e2.replace(`'`, "&#039;");
  e2 = e2.replace(`\\`, "&#092;");
  return e2;
}
function htmlSpecialCharsDecode(e2) {
  e2 = e2.replace("&lt;", `<`);
  e2 = e2.replace("&gt;", `>`);
  e2 = e2.replace("&quot;", `"`);
  e2 = e2.replace("&#039;", `'`);
  e2 = e2.replace("&#092;", `\\`);
  e2 = e2.replace("&amp;", `&`);
  return e2;
}
function getUserName() {
  if (window["myself"]) return window["myself"];
  else return null;
}
function getUserUid() {
  if (window["uid"]) return window["uid"];
  else return null;
}
function getRoomId() {
  if (window["roomn"]) return window["roomn"];
  else return null;
}
function getRoomInfoById(roomId) {
  let roomInfoArray = window.Objs.mapHolder?.Assets?.roomJson?.[roomId];
  if (roomInfoArray) {
    let roomInfoPart = roomInfoArray[5].split("&&").map((o2) => o2.split(" & "));
    let imageAndDescription = htmlSpecialCharsDecode(roomInfoPart[0][0]);
    let firstSpaceIndex = imageAndDescription.indexOf(" ");
    return {
      name: roomInfoArray[1],
      color: roomInfoArray[2],
      roomPath: roomInfoArray[0].split("_"),
      description: imageAndDescription.slice(firstSpaceIndex + 1),
      roomImage: imageAndDescription.slice(0, firstSpaceIndex),
      currentUserNum: typeof roomInfoArray[7] == "number" ? roomInfoArray[7] : "hidden",
      ownerName: roomInfoPart[1][0],
      member: roomInfoPart[4].map((o2) => ({
        name: htmlSpecialCharsDecode(o2.slice(1)),
        auth: o2[0] == "0" ? "member" : o2[0] == "1" ? "admin" : "unknow"
      }))
    };
  } else return null;
}
function getOnlineUserInfoById(uid) {
  uid = String(uid);
  let userInfoArray = window.Objs.mapHolder?.function?.findUserByUid?.(uid);
  if (userInfoArray) {
    return {
      name: userInfoArray[2],
      uid,
      color: userInfoArray[3],
      avatar: userInfoArray[0],
      roomId: userInfoArray[4],
      personalizedSignature: userInfoArray[6]
    };
  } else return null;
}
function getAllOnlineUserInfo() {
  let userInfoMapObj = window.Objs.mapHolder.Assets.userJson;
  if (userInfoMapObj) {
    return Object.keys(userInfoMapObj).map((key) => {
      let o2 = userInfoMapObj[key];
      return {
        name: o2[2],
        uid: o2[8],
        color: o2[3],
        avatar: o2[0],
        roomId: o2[4],
        personalizedSignature: o2[6]
      };
    });
  } else return null;
}
function changeRoom(roomId) {
  roomId = String(roomId);
  if (roomId)
    window.Objs.mapHolder?.function?.roomchanger(roomId);
}
function getUserProfilePictureUrl() {
  if (window.avatar2 && window.avatarconv)
    return window.avatarconv(window.avatar2);
  return null;
}
function getUserInputColor() {
  if (window.inputcolorhex) return window.inputcolorhex;
  return null;
}
function generatePrivateMessageBubble(targetUid, content, messageId) {
  if (window.privatechatfunc)
    window.privatechatfunc(
      [
        Math.floor(Date.now() / 1e3).toString(10),
        // 0
        getUserUid(),
        // 1
        htmlSpecialCharsEscape(getUserName()),
        // 2
        htmlSpecialCharsEscape(getUserProfilePictureUrl()),
        // 3
        htmlSpecialCharsEscape(content),
        // 4
        htmlSpecialCharsEscape(getUserInputColor()),
        // 5
        "",
        // 6
        htmlSpecialCharsEscape(getUserInputColor()),
        // 7
        "",
        // 8
        "",
        // 9
        messageId,
        // 10
        targetUid,
        // 11
        "",
        // 12
        "",
        // 13
        "",
        // 14
        "",
        // 15
        ""
        // 16
      ].join(">")
    );
}
function switchRoom(roomId) {
  if (window.Objs.mapHolder?.function?.roomchanger)
    window.Objs.mapHolder.function.roomchanger(roomId);
}
const tools = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  addStyle,
  changeRoom,
  compressCSS,
  compressHTML,
  generatePrivateMessageBubble,
  getAllOnlineUserInfo,
  getOnlineUserInfoById,
  getRoomId,
  getRoomInfoById,
  getUserInputColor,
  getUserName,
  getUserProfilePictureUrl,
  getUserUid,
  htmlSpecialCharsDecode,
  htmlSpecialCharsEscape,
  sleep,
  switchRoom
}, Symbol.toStringTag, { value: "Module" }));
class Public {
  constructor() {
    this.timeStamp = "";
    this.headPortrait = "";
    this.name = "";
    this.message = "";
    this.color = "";
    this.gender = "";
    this.uid = "";
    this.designation = "";
    this.messageUid = "";
    this.messageClass = "public";
  }
}
class Private {
  constructor() {
    this.timeStamp = "";
    this.headPortrait = "";
    this.name = "";
    this.message = "";
    this.color = "";
    this.gender = "";
    this.uid = "";
    this.messageUid = "";
    this.messageClass = "private";
  }
}
class Hidden {
  constructor() {
    this.messageName = "";
    this.uid = "";
    this.data = "";
    this.messageClass = "hidden";
  }
}
class Danmu {
  constructor() {
    this.username = "";
    this.avatar = "";
    this.message = "";
    this.color = "";
    this.gender = "";
    this.timeStamp = "";
    this.uid = "";
    this.messageClass = "danmu";
  }
}
class Withdrawn {
  constructor() {
    this.privateUID = "";
    this.uid = "";
    this.messageUid = "";
    this.dataUid = "";
    this.messageClass = "withdrawn";
  }
}
class System {
  constructor() {
    this.userMessageList = [];
    this.messageClass = "system";
  }
}
class Stock {
  constructor() {
    this.result = "";
    this.stockPrice = NaN;
    this.totalStock = NaN;
    this.holdingAmount = NaN;
    this.totalEquity = NaN;
    this.balance = NaN;
    this.messageClass = "stock";
  }
}
class Unkonw {
  constructor() {
    this.message = "";
    this.messageClass = "unkonw";
  }
}
const Message = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Danmu,
  Hidden,
  Private,
  Public,
  Stock,
  System,
  Unkonw,
  Withdrawn
}, Symbol.toStringTag, { value: "Module" }));
let messageObjList = [];
function publicChat$1(message) {
  let messageObj = new Public();
  let message_list = message.split(">");
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
function privateChat$1(message) {
  let messageObj = new Private();
  let message_list = message.split(">");
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
function danmu$1(message) {
  let messageObj = new Danmu();
  let message_list = message.split(">");
  messageObj.username = message_list[0];
  messageObj.message = message_list[1];
  messageObj.color = message_list[2];
  messageObj.gender = message_list[4];
  messageObj.avatar = message_list[5];
  messageObj.timeStamp = message_list[6];
  messageObj.uid = message_list[7];
  return messageObj;
}
function hidden$1(message) {
  let messageObj = new Hidden();
  let temp;
  temp = message.match(/(?<=^[/]<).*(?=>[0-9|a-z]{13}:.*)/gs);
  messageObj.messageName = temp == null ? "" : temp[0];
  temp = message.match(/(?<=^[/]<.*>)[0-9|a-z]{13}(?=:.*)/gs);
  messageObj.uid = temp == null ? "" : temp[0];
  temp = message.match(/(?<=^[/]<.*>[0-9|a-z]{13}:).*/gs);
  messageObj.data = temp == null ? "" : temp[0];
  return messageObj;
}
function withdrawn$1(message) {
  let messageObj = new Withdrawn();
  if (message[2] == "#") {
    messageObj.privateUID = "";
    messageObj.uid = message.slice(3, 16);
    messageObj.messageUid = message.slice(17, 29);
    messageObj.dataUid = message.slice(3, 29);
  } else {
    messageObj.privateUID = message.slice(3, 16);
    messageObj.uid = message.slice(17, 30);
    messageObj.messageUid = message.slice(31);
    messageObj.dataUid = message.slice(17);
  }
  return messageObj;
}
function system(message) {
  let messageObj = new System();
  messageObj.userMessageList = message.split("<");
  return messageObj;
}
function stock(message) {
  let messageObj = new Stock();
  messageObj.result = message[2];
  if (messageObj.result == "*") {
    return messageObj;
  } else if (messageObj.result == ">") {
    messageObj.holdingAmount = parseInt(message.slice(2));
    return messageObj;
  } else if (messageObj.result == "<") {
    messageObj.balance = parseInt(message.slice(2));
    return messageObj;
  } else {
    let L2 = message.split('"');
    if (L2.length == 5) {
      messageObj.stockPrice = parseFloat(L2[2]);
      messageObj.totalStock = parseInt(L2[0].slice(1));
      messageObj.holdingAmount = parseInt(L2[3]);
      messageObj.totalEquity = parseFloat(L2[1]);
      messageObj.balance = parseFloat(L2[4]);
      return messageObj;
    } else if (L2.length == 4) {
      messageObj.stockPrice = parseFloat(L2[1]) / parseInt(L2[0].slice(1));
      messageObj.totalStock = parseInt(L2[0].slice(1));
      messageObj.holdingAmount = parseInt(L2[2]);
      messageObj.totalEquity = parseFloat(L2[1]);
      messageObj.balance = parseFloat(L2[3]);
      return messageObj;
    }
  }
  return messageObj;
}
function unkonw(message) {
  let messageObj = new Unkonw();
  messageObj.message = message;
  return messageObj;
}
function decodeMessage(message) {
  messageObjList = [];
  if (/^"[^"].*/gs.test(message)) {
    let temp_list = message.slice(1).split("<");
    for (let i3 = temp_list.length - 1; i3 >= 0; i3--)
      messageObjList.push(publicChat$1(temp_list[i3]));
  } else if (/^"".*/gs.test(message)) {
    let temp_list = message.slice(1).split("<");
    for (let i3 = temp_list.length - 1; i3 >= 0; i3--) {
      messageObjList.push(privateChat$1(temp_list[i3]));
    }
  } else if (/^=.*/gs.test(message)) {
    let temp_list = message.slice(1).split("<");
    for (let i3 = temp_list.length - 1; i3 >= 0; i3--) {
      messageObjList.push(danmu$1(temp_list[i3]));
    }
  } else if (/^[/]<.*>[0-9|a-z]{13}:.*/gs.test(message)) {
    messageObjList.push(hidden$1(message));
  } else if (/^v0.*/gs.test(message)) {
    messageObjList.push(withdrawn$1(message));
  } else if (/^%\*".*/gs.test(message)) {
    messageObjList.push(system(message));
  } else if (/^>.*/gs.test(message)) {
    messageObjList.push(stock(message));
  } else {
    messageObjList.push(unkonw(message));
  }
}
const decoder = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  decodeMessage,
  get messageObjList() {
    return messageObjList;
  }
}, Symbol.toStringTag, { value: "Module" }));
var tinyEmitter = { exports: {} };
var hasRequiredTinyEmitter;
function requireTinyEmitter() {
  if (hasRequiredTinyEmitter) return tinyEmitter.exports;
  hasRequiredTinyEmitter = 1;
  function E2() {
  }
  E2.prototype = {
    on: function(name2, callback, ctx) {
      var e2 = this.e || (this.e = {});
      (e2[name2] || (e2[name2] = [])).push({
        fn: callback,
        ctx
      });
      return this;
    },
    once: function(name2, callback, ctx) {
      var self = this;
      function listener() {
        self.off(name2, listener);
        callback.apply(ctx, arguments);
      }
      listener._ = callback;
      return this.on(name2, listener, ctx);
    },
    emit: function(name2) {
      var data = [].slice.call(arguments, 1);
      var evtArr = ((this.e || (this.e = {}))[name2] || []).slice();
      var i3 = 0;
      var len = evtArr.length;
      for (i3; i3 < len; i3++) {
        evtArr[i3].fn.apply(evtArr[i3].ctx, data);
      }
      return this;
    },
    off: function(name2, callback) {
      var e2 = this.e || (this.e = {});
      var evts = e2[name2];
      var liveEvents = [];
      if (evts && callback) {
        for (var i3 = 0, len = evts.length; i3 < len; i3++) {
          if (evts[i3].fn !== callback && evts[i3].fn._ !== callback)
            liveEvents.push(evts[i3]);
        }
      }
      liveEvents.length ? e2[name2] = liveEvents : delete e2[name2];
      return this;
    }
  };
  tinyEmitter.exports = E2;
  tinyEmitter.exports.TinyEmitter = E2;
  return tinyEmitter.exports;
}
var tinyEmitterExports = requireTinyEmitter();
let emitter = new tinyEmitterExports.TinyEmitter();
const eventEmitter = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  TinyEmitter: tinyEmitterExports.TinyEmitter,
  emitter
}, Symbol.toStringTag, { value: "Module" }));
async function beforeSend(message) {
  return message;
}
function originalSend(message) {
  return message;
}
function afterSend(message) {
  return message;
}
async function send(message) {
  console.log("发送", { message });
  let temp = await sockets.beforeSend(message);
  try {
    if (temp != null) {
      sockets.originalSend(temp);
      sockets.afterSend(temp);
    }
  } catch (error) {
    console.error("捕获到错误", error);
  }
}
async function beforeOnmessage(message) {
  decodeMessage(message);
  return message;
}
function originalOnmessage(message) {
  return message;
}
async function afterOnmessage(message) {
  for (let messageObj of messageObjList) {
    console.log(`触发${messageObj.messageClass}事件`, {
      message,
      messageObj
    });
    emitter.emit(messageObj.messageClass, messageObj);
  }
  return message;
}
async function onmessage(message) {
  let temp = await sockets.beforeOnmessage(message);
  try {
    if (temp != null) {
      sockets.originalOnmessage(temp);
      sockets.afterOnmessage(temp);
    }
  } catch (error) {
    console.error("捕获到错误", error);
  }
}
async function initSocket() {
  console.debug("代理网络");
  for (let index2 = 0; index2 < 30; index2++) {
    try {
      console.debug("等待网络连接", index2);
      if (window["socket"].__onmessage == void 0 && window["socket"]._onmessage != void 0 && window["socket"].send != void 0) {
        console.debug("网络连接成功");
        break;
      } else {
        await sleep(500);
        continue;
      }
    } catch (error) {
      console.error(error);
    }
  }
  if (window["socket"].__onmessage == void 0 && window["socket"]._onmessage != void 0 && window["socket"].send != void 0) ;
  else {
    console.error("连接失败");
    return;
  }
  sockets.originalSend = window["socket"].send;
  window["socket"].send = sockets.send;
  sockets.originalOnmessage = window["socket"]._onmessage;
  window["socket"]._onmessage = sockets.onmessage;
}
const sockets = {
  beforeSend,
  originalSend,
  afterSend,
  send,
  beforeOnmessage,
  originalOnmessage,
  afterOnmessage,
  onmessage,
  initSocket
};
const iiroseSocket = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  initSocket,
  sockets
}, Symbol.toStringTag, { value: "Module" }));
function publicChat(message, color) {
  if (message === "cut") {
    return `{0${JSON.stringify({
      m: message,
      mc: color,
      i: Math.random().toString().slice(2, 12)
    })}`;
  }
  return JSON.stringify({
    m: message,
    mc: color,
    i: Math.random().toString().slice(2, 12)
  });
}
function privateChat(uid, message, color) {
  return JSON.stringify({
    g: uid,
    m: message,
    mc: color,
    i: Math.random().toString().slice(2, 12)
  });
}
function hidden(messageNmae, uid, data) {
  return `/<${messageNmae}>${uid}:${data}`;
}
function musicCard(typeId, title, singerName, coverUrl, color, resolutionRatio) {
  let mediaCardContent = `m__4=${typeId}>${title}>${singerName}>${coverUrl}>${color}>${resolutionRatio}`;
  return publicChat(mediaCardContent, color);
}
function videoCard(typeId, title, singerName, coverUrl, color, resolutionRatio, time) {
  let mediaCardContent = `m__4*${typeId}>${title}>${singerName}>${coverUrl}>${color}>${resolutionRatio}>${time}`;
  return publicChat(mediaCardContent, color);
}
function like(targetUid, content = "") {
  return `+*${targetUid}${content}`;
}
function danmu(message, color, v2 = "0") {
  return `~{"t":"${message}","c":"${color}","v":${v2}}`;
}
function withdrawn(randomNumber, privateUID = "") {
  if (privateUID == "")
    return `v0#${randomNumber}`;
  else
    return `v0*${privateUID}#${randomNumber}`;
}
function stockRequest(count) {
  if (count == void 0)
    return ">#";
  else if (count > 0)
    return `>$${Math.round(Math.abs(count))}`;
  else if (count < 0)
    return `>@${Math.round(Math.abs(count))}`;
  else return ">#";
}
const encoder = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  danmu,
  hidden,
  like,
  musicCard,
  privateChat,
  publicChat,
  stockRequest,
  videoCard,
  withdrawn
}, Symbol.toStringTag, { value: "Module" }));
let elements = {
  /** 移动窗口父元素,移动窗口容器 */
  movePanelHolder: document.querySelector("#movePanelHolder"),
  /** 侧边菜单按钮 */
  functionHolder: document.querySelector("#functionHolder"),
  /** 侧边菜单按钮列表 */
  functionButtonGroupList: [
    ...document.querySelectorAll(".functionButton.functionButtonGroup")
  ],
  /** 主消息列表的父元素 */
  msgholderBox: document.querySelector("#msgholder .fullBox.msgholderBox"),
  /** home界面的消息列表父元素 */
  homeHolderMsgBox: document.querySelector(
    `#homeHolder .homeHolderMsgContentBox .homeHolderMsgBox.fullBox`
  ),
  /** 最近会话列表 */
  sessionHolderPmTaskBoxItems: [
    ...document.querySelectorAll(`.sessionHolderPmTaskBoxItem.whoisTouch2`)
  ],
  /** 主输入元素盒子 */
  moveinputDisplay: document.querySelector("#moveinputDisplay"),
  /** 主输入元素 */
  moveinput: document.getElementById("moveinput"),
  /** 可以打开home界面 */
  moveinputSendBtnFunc: document.querySelector(
    "#moveinputDisplay #moveinputSendBtnFunc"
  ),
  /** 发送按钮 */
  moveinputSendBtnSend: document.querySelector(
    "#moveinputDisplay #moveinputSendBtnSend"
  )
};
function refreshAll() {
  elements.movePanelHolder = document.querySelector("#movePanelHolder");
  elements.functionHolder = document.querySelector("#functionHolder");
  elements.functionButtonGroupList = [
    ...document.querySelectorAll(".functionButton.functionButtonGroup")
  ];
  elements.msgholderBox = document.querySelector(
    `#msgholder .fullBox .fullBox.msgholderBox`
  );
  elements.homeHolderMsgBox = document.querySelector(
    `#homeHolder .homeHolderMsgContentBox .homeHolderMsgBox.fullBox`
  );
  elements.sessionHolderPmTaskBoxItems = [
    ...document.querySelectorAll(`.sessionHolderPmTaskBoxItem.whoisTouch2`)
  ];
  elements.moveinputDisplay = document.querySelector("#moveinputDisplay");
  elements.moveinput = document.getElementById("moveinput");
  elements.moveinputSendBtnFunc = document.querySelector(
    "#moveinputDisplay #moveinputSendBtnFunc"
  );
  elements.moveinputSendBtnSend = document.querySelector(
    "#moveinputDisplay #moveinputSendBtnSend"
  );
}
let Hooks = {
  elementHooks: {
    moveinput: {
      oninputBefore: () => {
        return true;
      },
      oninputAfter: () => {
        return true;
      },
      onblurBefore: () => {
        return true;
      },
      onblurAfter: () => {
        return true;
      },
      onfocusBefore: () => {
        return true;
      },
      onfocusAfter: () => {
        return true;
      }
    }
  },
  functionHooks: {
    processer: {
      // @ts-ignore
      onBefore: (e2, s2, t2, r2) => {
        return true;
      },
      // @ts-ignore
      onAfter: (e2, s2, t2, r2) => {
        return true;
      }
    }
  },
  replaceMoveinput: () => {
    try {
      let temp = elements.moveinput.oninput;
      elements.moveinput.oninput = function() {
        if (Hooks.elementHooks.moveinput.oninputBefore() == true) {
          temp?.call(elements.moveinput);
          Hooks.elementHooks.moveinput.oninputAfter();
        }
      };
    } catch (error) {
      console.error("替换错误", error);
    }
    try {
      let temp = elements.moveinput.oninput;
      elements.moveinput.onblur = function() {
        if (Hooks.elementHooks.moveinput.onblurBefore() == true) {
          temp?.call(elements.moveinput);
          Hooks.elementHooks.moveinput.onblurAfter();
        }
      };
    } catch (error) {
      console.error("替换错误", error);
    }
    try {
      let temp = elements.moveinput.oninput;
      elements.moveinput.onfocus = function() {
        if (Hooks.elementHooks.moveinput.onfocusBefore() == true) {
          temp?.call(elements.moveinput);
          Hooks.elementHooks.moveinput.onfocusAfter();
        }
      };
    } catch (error) {
      console.error("替换错误", error);
    }
  },
  replaceButtonProcesser: () => {
    try {
      let temp = buttonProcesser;
      buttonProcesser = (e2, s2, t2, r2) => {
        if (Hooks.functionHooks.processer.onBefore(e2, s2, t2, r2) == true) {
          temp(e2, s2, t2, r2);
          Hooks.functionHooks.processer.onAfter(e2, s2, t2, r2);
        }
      };
    } catch (error) {
      console.error("替换错误", error);
    }
  }
};
function initHooks() {
  console.log("增加钩子函数");
  Hooks.replaceMoveinput();
  Hooks.replaceButtonProcesser();
}
const elementsHooks = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Hooks,
  elements,
  initHooks,
  refreshAll
}, Symbol.toStringTag, { value: "Module" }));
class Script {
  constructor(name2, url, enable = true, ingected = false) {
    this.name = name2;
    this.url = url;
    this.enable = enable;
    this.ingected = ingected;
  }
}
let scriptList = [];
function addScriptToList(script) {
  if (script.name == "" || script.url == "") {
    _alert("脚本名字或链接不能为空");
    return false;
  }
  for (let s2 of scriptList) {
    if (s2.name === script.name) {
      s2.url = script.url;
      s2.enable = script.enable;
      s2.ingected = script.ingected;
      return false;
    }
    if (s2.url === script.url) {
      s2.name = script.name;
      s2.enable = script.enable;
      s2.ingected = script.ingected;
      return false;
    }
  }
  scriptList.push(script);
  return true;
}
function removeScriptFromList(script) {
  scriptList = scriptList.filter((s2) => s2.name !== script.name && s2.url !== script.url);
}
function injectScript(script) {
  if (script.ingected) {
    _alert(`脚本 ${script.name} 已经注入`);
    return script.ingected;
  }
  const scriptElement = document.createElement("script");
  scriptElement.src = script.url;
  scriptElement.onload = () => {
    _alert(`脚本 ${script.name} 注入成功`);
    script.ingected = true;
  };
  scriptElement.onerror = () => {
    _alert(`脚本 ${script.name} 注入失败`);
    script.enable = false;
  };
  document.head.appendChild(scriptElement);
  return script.ingected;
}
function injectScriptList(list) {
  for (let script of list) {
    if (script.enable && !script.ingected) {
      injectScript(script);
    }
  }
}
function readScriptList() {
  let temp = localStorage.getItem("hortiMagicScriptList");
  scriptList = temp == null ? [] : JSON.parse(temp);
  for (let script of scriptList) {
    script.ingected = false;
  }
}
function saveScriptList() {
  localStorage.setItem("hortiMagicScriptList", JSON.stringify(scriptList));
  _alert("脚本列表已保存");
}
function ingectlocalScript() {
  readScriptList();
  injectScriptList(scriptList);
}
const scriptTools = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Script,
  addScriptToList,
  ingectlocalScript,
  injectScript,
  injectScriptList,
  readScriptList,
  removeScriptFromList,
  saveScriptList,
  get scriptList() {
    return scriptList;
  }
}, Symbol.toStringTag, { value: "Module" }));
const index$3 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Message,
  decoder,
  elements_hooks: elementsHooks,
  encoder,
  eventEmitter,
  iirose_socket: iiroseSocket,
  script_tools: scriptTools,
  tools
}, Symbol.toStringTag, { value: "Module" }));
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t$4 = globalThis, e$6 = t$4.ShadowRoot && (void 0 === t$4.ShadyCSS || t$4.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, s$2 = Symbol(), o$5 = /* @__PURE__ */ new WeakMap();
let n$3 = class n {
  constructor(t2, e2, o2) {
    if (this._$cssResult$ = true, o2 !== s$2) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = t2, this.t = e2;
  }
  get styleSheet() {
    let t2 = this.o;
    const s2 = this.t;
    if (e$6 && void 0 === t2) {
      const e2 = void 0 !== s2 && 1 === s2.length;
      e2 && (t2 = o$5.get(s2)), void 0 === t2 && ((this.o = t2 = new CSSStyleSheet()).replaceSync(this.cssText), e2 && o$5.set(s2, t2));
    }
    return t2;
  }
  toString() {
    return this.cssText;
  }
};
const r$4 = (t2) => new n$3("string" == typeof t2 ? t2 : t2 + "", void 0, s$2), i$4 = (t2, ...e2) => {
  const o2 = 1 === t2.length ? t2[0] : e2.reduce(((e3, s2, o3) => e3 + ((t3) => {
    if (true === t3._$cssResult$) return t3.cssText;
    if ("number" == typeof t3) return t3;
    throw Error("Value passed to 'css' function must be a 'css' function result: " + t3 + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
  })(s2) + t2[o3 + 1]), t2[0]);
  return new n$3(o2, t2, s$2);
}, S$1 = (s2, o2) => {
  if (e$6) s2.adoptedStyleSheets = o2.map(((t2) => t2 instanceof CSSStyleSheet ? t2 : t2.styleSheet));
  else for (const e2 of o2) {
    const o3 = document.createElement("style"), n3 = t$4.litNonce;
    void 0 !== n3 && o3.setAttribute("nonce", n3), o3.textContent = e2.cssText, s2.appendChild(o3);
  }
}, c$2 = e$6 ? (t2) => t2 : (t2) => t2 instanceof CSSStyleSheet ? ((t3) => {
  let e2 = "";
  for (const s2 of t3.cssRules) e2 += s2.cssText;
  return r$4(e2);
})(t2) : t2;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const { is: i$3, defineProperty: e$5, getOwnPropertyDescriptor: h$1, getOwnPropertyNames: r$3, getOwnPropertySymbols: o$4, getPrototypeOf: n$2 } = Object, a$1 = globalThis, c$1 = a$1.trustedTypes, l$1 = c$1 ? c$1.emptyScript : "", p$1 = a$1.reactiveElementPolyfillSupport, d$1 = (t2, s2) => t2, u$1 = { toAttribute(t2, s2) {
  switch (s2) {
    case Boolean:
      t2 = t2 ? l$1 : null;
      break;
    case Object:
    case Array:
      t2 = null == t2 ? t2 : JSON.stringify(t2);
  }
  return t2;
}, fromAttribute(t2, s2) {
  let i3 = t2;
  switch (s2) {
    case Boolean:
      i3 = null !== t2;
      break;
    case Number:
      i3 = null === t2 ? null : Number(t2);
      break;
    case Object:
    case Array:
      try {
        i3 = JSON.parse(t2);
      } catch (t3) {
        i3 = null;
      }
  }
  return i3;
} }, f$1 = (t2, s2) => !i$3(t2, s2), b = { attribute: true, type: String, converter: u$1, reflect: false, useDefault: false, hasChanged: f$1 };
Symbol.metadata ??= Symbol("metadata"), a$1.litPropertyMetadata ??= /* @__PURE__ */ new WeakMap();
let y$1 = class y extends HTMLElement {
  static addInitializer(t2) {
    this._$Ei(), (this.l ??= []).push(t2);
  }
  static get observedAttributes() {
    return this.finalize(), this._$Eh && [...this._$Eh.keys()];
  }
  static createProperty(t2, s2 = b) {
    if (s2.state && (s2.attribute = false), this._$Ei(), this.prototype.hasOwnProperty(t2) && ((s2 = Object.create(s2)).wrapped = true), this.elementProperties.set(t2, s2), !s2.noAccessor) {
      const i3 = Symbol(), h2 = this.getPropertyDescriptor(t2, i3, s2);
      void 0 !== h2 && e$5(this.prototype, t2, h2);
    }
  }
  static getPropertyDescriptor(t2, s2, i3) {
    const { get: e2, set: r2 } = h$1(this.prototype, t2) ?? { get() {
      return this[s2];
    }, set(t3) {
      this[s2] = t3;
    } };
    return { get: e2, set(s3) {
      const h2 = e2?.call(this);
      r2?.call(this, s3), this.requestUpdate(t2, h2, i3);
    }, configurable: true, enumerable: true };
  }
  static getPropertyOptions(t2) {
    return this.elementProperties.get(t2) ?? b;
  }
  static _$Ei() {
    if (this.hasOwnProperty(d$1("elementProperties"))) return;
    const t2 = n$2(this);
    t2.finalize(), void 0 !== t2.l && (this.l = [...t2.l]), this.elementProperties = new Map(t2.elementProperties);
  }
  static finalize() {
    if (this.hasOwnProperty(d$1("finalized"))) return;
    if (this.finalized = true, this._$Ei(), this.hasOwnProperty(d$1("properties"))) {
      const t3 = this.properties, s2 = [...r$3(t3), ...o$4(t3)];
      for (const i3 of s2) this.createProperty(i3, t3[i3]);
    }
    const t2 = this[Symbol.metadata];
    if (null !== t2) {
      const s2 = litPropertyMetadata.get(t2);
      if (void 0 !== s2) for (const [t3, i3] of s2) this.elementProperties.set(t3, i3);
    }
    this._$Eh = /* @__PURE__ */ new Map();
    for (const [t3, s2] of this.elementProperties) {
      const i3 = this._$Eu(t3, s2);
      void 0 !== i3 && this._$Eh.set(i3, t3);
    }
    this.elementStyles = this.finalizeStyles(this.styles);
  }
  static finalizeStyles(s2) {
    const i3 = [];
    if (Array.isArray(s2)) {
      const e2 = new Set(s2.flat(1 / 0).reverse());
      for (const s3 of e2) i3.unshift(c$2(s3));
    } else void 0 !== s2 && i3.push(c$2(s2));
    return i3;
  }
  static _$Eu(t2, s2) {
    const i3 = s2.attribute;
    return false === i3 ? void 0 : "string" == typeof i3 ? i3 : "string" == typeof t2 ? t2.toLowerCase() : void 0;
  }
  constructor() {
    super(), this._$Ep = void 0, this.isUpdatePending = false, this.hasUpdated = false, this._$Em = null, this._$Ev();
  }
  _$Ev() {
    this._$ES = new Promise(((t2) => this.enableUpdating = t2)), this._$AL = /* @__PURE__ */ new Map(), this._$E_(), this.requestUpdate(), this.constructor.l?.forEach(((t2) => t2(this)));
  }
  addController(t2) {
    (this._$EO ??= /* @__PURE__ */ new Set()).add(t2), void 0 !== this.renderRoot && this.isConnected && t2.hostConnected?.();
  }
  removeController(t2) {
    this._$EO?.delete(t2);
  }
  _$E_() {
    const t2 = /* @__PURE__ */ new Map(), s2 = this.constructor.elementProperties;
    for (const i3 of s2.keys()) this.hasOwnProperty(i3) && (t2.set(i3, this[i3]), delete this[i3]);
    t2.size > 0 && (this._$Ep = t2);
  }
  createRenderRoot() {
    const t2 = this.shadowRoot ?? this.attachShadow(this.constructor.shadowRootOptions);
    return S$1(t2, this.constructor.elementStyles), t2;
  }
  connectedCallback() {
    this.renderRoot ??= this.createRenderRoot(), this.enableUpdating(true), this._$EO?.forEach(((t2) => t2.hostConnected?.()));
  }
  enableUpdating(t2) {
  }
  disconnectedCallback() {
    this._$EO?.forEach(((t2) => t2.hostDisconnected?.()));
  }
  attributeChangedCallback(t2, s2, i3) {
    this._$AK(t2, i3);
  }
  _$ET(t2, s2) {
    const i3 = this.constructor.elementProperties.get(t2), e2 = this.constructor._$Eu(t2, i3);
    if (void 0 !== e2 && true === i3.reflect) {
      const h2 = (void 0 !== i3.converter?.toAttribute ? i3.converter : u$1).toAttribute(s2, i3.type);
      this._$Em = t2, null == h2 ? this.removeAttribute(e2) : this.setAttribute(e2, h2), this._$Em = null;
    }
  }
  _$AK(t2, s2) {
    const i3 = this.constructor, e2 = i3._$Eh.get(t2);
    if (void 0 !== e2 && this._$Em !== e2) {
      const t3 = i3.getPropertyOptions(e2), h2 = "function" == typeof t3.converter ? { fromAttribute: t3.converter } : void 0 !== t3.converter?.fromAttribute ? t3.converter : u$1;
      this._$Em = e2;
      const r2 = h2.fromAttribute(s2, t3.type);
      this[e2] = r2 ?? this._$Ej?.get(e2) ?? r2, this._$Em = null;
    }
  }
  requestUpdate(t2, s2, i3) {
    if (void 0 !== t2) {
      const e2 = this.constructor, h2 = this[t2];
      if (i3 ??= e2.getPropertyOptions(t2), !((i3.hasChanged ?? f$1)(h2, s2) || i3.useDefault && i3.reflect && h2 === this._$Ej?.get(t2) && !this.hasAttribute(e2._$Eu(t2, i3)))) return;
      this.C(t2, s2, i3);
    }
    false === this.isUpdatePending && (this._$ES = this._$EP());
  }
  C(t2, s2, { useDefault: i3, reflect: e2, wrapped: h2 }, r2) {
    i3 && !(this._$Ej ??= /* @__PURE__ */ new Map()).has(t2) && (this._$Ej.set(t2, r2 ?? s2 ?? this[t2]), true !== h2 || void 0 !== r2) || (this._$AL.has(t2) || (this.hasUpdated || i3 || (s2 = void 0), this._$AL.set(t2, s2)), true === e2 && this._$Em !== t2 && (this._$Eq ??= /* @__PURE__ */ new Set()).add(t2));
  }
  async _$EP() {
    this.isUpdatePending = true;
    try {
      await this._$ES;
    } catch (t3) {
      Promise.reject(t3);
    }
    const t2 = this.scheduleUpdate();
    return null != t2 && await t2, !this.isUpdatePending;
  }
  scheduleUpdate() {
    return this.performUpdate();
  }
  performUpdate() {
    if (!this.isUpdatePending) return;
    if (!this.hasUpdated) {
      if (this.renderRoot ??= this.createRenderRoot(), this._$Ep) {
        for (const [t4, s3] of this._$Ep) this[t4] = s3;
        this._$Ep = void 0;
      }
      const t3 = this.constructor.elementProperties;
      if (t3.size > 0) for (const [s3, i3] of t3) {
        const { wrapped: t4 } = i3, e2 = this[s3];
        true !== t4 || this._$AL.has(s3) || void 0 === e2 || this.C(s3, void 0, i3, e2);
      }
    }
    let t2 = false;
    const s2 = this._$AL;
    try {
      t2 = this.shouldUpdate(s2), t2 ? (this.willUpdate(s2), this._$EO?.forEach(((t3) => t3.hostUpdate?.())), this.update(s2)) : this._$EM();
    } catch (s3) {
      throw t2 = false, this._$EM(), s3;
    }
    t2 && this._$AE(s2);
  }
  willUpdate(t2) {
  }
  _$AE(t2) {
    this._$EO?.forEach(((t3) => t3.hostUpdated?.())), this.hasUpdated || (this.hasUpdated = true, this.firstUpdated(t2)), this.updated(t2);
  }
  _$EM() {
    this._$AL = /* @__PURE__ */ new Map(), this.isUpdatePending = false;
  }
  get updateComplete() {
    return this.getUpdateComplete();
  }
  getUpdateComplete() {
    return this._$ES;
  }
  shouldUpdate(t2) {
    return true;
  }
  update(t2) {
    this._$Eq &&= this._$Eq.forEach(((t3) => this._$ET(t3, this[t3]))), this._$EM();
  }
  updated(t2) {
  }
  firstUpdated(t2) {
  }
};
y$1.elementStyles = [], y$1.shadowRootOptions = { mode: "open" }, y$1[d$1("elementProperties")] = /* @__PURE__ */ new Map(), y$1[d$1("finalized")] = /* @__PURE__ */ new Map(), p$1?.({ ReactiveElement: y$1 }), (a$1.reactiveElementVersions ??= []).push("2.1.1");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t$3 = globalThis, i$2 = t$3.trustedTypes, s$1 = i$2 ? i$2.createPolicy("lit-html", { createHTML: (t2) => t2 }) : void 0, e$4 = "$lit$", h = `lit$${Math.random().toFixed(9).slice(2)}$`, o$3 = "?" + h, n$1 = `<${o$3}>`, r$2 = document, l = () => r$2.createComment(""), c = (t2) => null === t2 || "object" != typeof t2 && "function" != typeof t2, a = Array.isArray, u = (t2) => a(t2) || "function" == typeof t2?.[Symbol.iterator], d = "[ 	\n\f\r]", f = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, v = /-->/g, _ = />/g, m = RegExp(`>|${d}(?:([^\\s"'>=/]+)(${d}*=${d}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"), p = /'/g, g = /"/g, $ = /^(?:script|style|textarea|title)$/i, y2 = (t2) => (i3, ...s2) => ({ _$litType$: t2, strings: i3, values: s2 }), x = y2(1), T = Symbol.for("lit-noChange"), E = Symbol.for("lit-nothing"), A = /* @__PURE__ */ new WeakMap(), C = r$2.createTreeWalker(r$2, 129);
function P(t2, i3) {
  if (!a(t2) || !t2.hasOwnProperty("raw")) throw Error("invalid template strings array");
  return void 0 !== s$1 ? s$1.createHTML(i3) : i3;
}
const V = (t2, i3) => {
  const s2 = t2.length - 1, o2 = [];
  let r2, l2 = 2 === i3 ? "<svg>" : 3 === i3 ? "<math>" : "", c2 = f;
  for (let i4 = 0; i4 < s2; i4++) {
    const s3 = t2[i4];
    let a2, u2, d2 = -1, y3 = 0;
    for (; y3 < s3.length && (c2.lastIndex = y3, u2 = c2.exec(s3), null !== u2); ) y3 = c2.lastIndex, c2 === f ? "!--" === u2[1] ? c2 = v : void 0 !== u2[1] ? c2 = _ : void 0 !== u2[2] ? ($.test(u2[2]) && (r2 = RegExp("</" + u2[2], "g")), c2 = m) : void 0 !== u2[3] && (c2 = m) : c2 === m ? ">" === u2[0] ? (c2 = r2 ?? f, d2 = -1) : void 0 === u2[1] ? d2 = -2 : (d2 = c2.lastIndex - u2[2].length, a2 = u2[1], c2 = void 0 === u2[3] ? m : '"' === u2[3] ? g : p) : c2 === g || c2 === p ? c2 = m : c2 === v || c2 === _ ? c2 = f : (c2 = m, r2 = void 0);
    const x2 = c2 === m && t2[i4 + 1].startsWith("/>") ? " " : "";
    l2 += c2 === f ? s3 + n$1 : d2 >= 0 ? (o2.push(a2), s3.slice(0, d2) + e$4 + s3.slice(d2) + h + x2) : s3 + h + (-2 === d2 ? i4 : x2);
  }
  return [P(t2, l2 + (t2[s2] || "<?>") + (2 === i3 ? "</svg>" : 3 === i3 ? "</math>" : "")), o2];
};
class N {
  constructor({ strings: t2, _$litType$: s2 }, n3) {
    let r2;
    this.parts = [];
    let c2 = 0, a2 = 0;
    const u2 = t2.length - 1, d2 = this.parts, [f2, v2] = V(t2, s2);
    if (this.el = N.createElement(f2, n3), C.currentNode = this.el.content, 2 === s2 || 3 === s2) {
      const t3 = this.el.content.firstChild;
      t3.replaceWith(...t3.childNodes);
    }
    for (; null !== (r2 = C.nextNode()) && d2.length < u2; ) {
      if (1 === r2.nodeType) {
        if (r2.hasAttributes()) for (const t3 of r2.getAttributeNames()) if (t3.endsWith(e$4)) {
          const i3 = v2[a2++], s3 = r2.getAttribute(t3).split(h), e2 = /([.?@])?(.*)/.exec(i3);
          d2.push({ type: 1, index: c2, name: e2[2], strings: s3, ctor: "." === e2[1] ? H : "?" === e2[1] ? I : "@" === e2[1] ? L : k }), r2.removeAttribute(t3);
        } else t3.startsWith(h) && (d2.push({ type: 6, index: c2 }), r2.removeAttribute(t3));
        if ($.test(r2.tagName)) {
          const t3 = r2.textContent.split(h), s3 = t3.length - 1;
          if (s3 > 0) {
            r2.textContent = i$2 ? i$2.emptyScript : "";
            for (let i3 = 0; i3 < s3; i3++) r2.append(t3[i3], l()), C.nextNode(), d2.push({ type: 2, index: ++c2 });
            r2.append(t3[s3], l());
          }
        }
      } else if (8 === r2.nodeType) if (r2.data === o$3) d2.push({ type: 2, index: c2 });
      else {
        let t3 = -1;
        for (; -1 !== (t3 = r2.data.indexOf(h, t3 + 1)); ) d2.push({ type: 7, index: c2 }), t3 += h.length - 1;
      }
      c2++;
    }
  }
  static createElement(t2, i3) {
    const s2 = r$2.createElement("template");
    return s2.innerHTML = t2, s2;
  }
}
function S(t2, i3, s2 = t2, e2) {
  if (i3 === T) return i3;
  let h2 = void 0 !== e2 ? s2._$Co?.[e2] : s2._$Cl;
  const o2 = c(i3) ? void 0 : i3._$litDirective$;
  return h2?.constructor !== o2 && (h2?._$AO?.(false), void 0 === o2 ? h2 = void 0 : (h2 = new o2(t2), h2._$AT(t2, s2, e2)), void 0 !== e2 ? (s2._$Co ??= [])[e2] = h2 : s2._$Cl = h2), void 0 !== h2 && (i3 = S(t2, h2._$AS(t2, i3.values), h2, e2)), i3;
}
class M {
  constructor(t2, i3) {
    this._$AV = [], this._$AN = void 0, this._$AD = t2, this._$AM = i3;
  }
  get parentNode() {
    return this._$AM.parentNode;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  u(t2) {
    const { el: { content: i3 }, parts: s2 } = this._$AD, e2 = (t2?.creationScope ?? r$2).importNode(i3, true);
    C.currentNode = e2;
    let h2 = C.nextNode(), o2 = 0, n3 = 0, l2 = s2[0];
    for (; void 0 !== l2; ) {
      if (o2 === l2.index) {
        let i4;
        2 === l2.type ? i4 = new R(h2, h2.nextSibling, this, t2) : 1 === l2.type ? i4 = new l2.ctor(h2, l2.name, l2.strings, this, t2) : 6 === l2.type && (i4 = new z(h2, this, t2)), this._$AV.push(i4), l2 = s2[++n3];
      }
      o2 !== l2?.index && (h2 = C.nextNode(), o2++);
    }
    return C.currentNode = r$2, e2;
  }
  p(t2) {
    let i3 = 0;
    for (const s2 of this._$AV) void 0 !== s2 && (void 0 !== s2.strings ? (s2._$AI(t2, s2, i3), i3 += s2.strings.length - 2) : s2._$AI(t2[i3])), i3++;
  }
}
class R {
  get _$AU() {
    return this._$AM?._$AU ?? this._$Cv;
  }
  constructor(t2, i3, s2, e2) {
    this.type = 2, this._$AH = E, this._$AN = void 0, this._$AA = t2, this._$AB = i3, this._$AM = s2, this.options = e2, this._$Cv = e2?.isConnected ?? true;
  }
  get parentNode() {
    let t2 = this._$AA.parentNode;
    const i3 = this._$AM;
    return void 0 !== i3 && 11 === t2?.nodeType && (t2 = i3.parentNode), t2;
  }
  get startNode() {
    return this._$AA;
  }
  get endNode() {
    return this._$AB;
  }
  _$AI(t2, i3 = this) {
    t2 = S(this, t2, i3), c(t2) ? t2 === E || null == t2 || "" === t2 ? (this._$AH !== E && this._$AR(), this._$AH = E) : t2 !== this._$AH && t2 !== T && this._(t2) : void 0 !== t2._$litType$ ? this.$(t2) : void 0 !== t2.nodeType ? this.T(t2) : u(t2) ? this.k(t2) : this._(t2);
  }
  O(t2) {
    return this._$AA.parentNode.insertBefore(t2, this._$AB);
  }
  T(t2) {
    this._$AH !== t2 && (this._$AR(), this._$AH = this.O(t2));
  }
  _(t2) {
    this._$AH !== E && c(this._$AH) ? this._$AA.nextSibling.data = t2 : this.T(r$2.createTextNode(t2)), this._$AH = t2;
  }
  $(t2) {
    const { values: i3, _$litType$: s2 } = t2, e2 = "number" == typeof s2 ? this._$AC(t2) : (void 0 === s2.el && (s2.el = N.createElement(P(s2.h, s2.h[0]), this.options)), s2);
    if (this._$AH?._$AD === e2) this._$AH.p(i3);
    else {
      const t3 = new M(e2, this), s3 = t3.u(this.options);
      t3.p(i3), this.T(s3), this._$AH = t3;
    }
  }
  _$AC(t2) {
    let i3 = A.get(t2.strings);
    return void 0 === i3 && A.set(t2.strings, i3 = new N(t2)), i3;
  }
  k(t2) {
    a(this._$AH) || (this._$AH = [], this._$AR());
    const i3 = this._$AH;
    let s2, e2 = 0;
    for (const h2 of t2) e2 === i3.length ? i3.push(s2 = new R(this.O(l()), this.O(l()), this, this.options)) : s2 = i3[e2], s2._$AI(h2), e2++;
    e2 < i3.length && (this._$AR(s2 && s2._$AB.nextSibling, e2), i3.length = e2);
  }
  _$AR(t2 = this._$AA.nextSibling, i3) {
    for (this._$AP?.(false, true, i3); t2 !== this._$AB; ) {
      const i4 = t2.nextSibling;
      t2.remove(), t2 = i4;
    }
  }
  setConnected(t2) {
    void 0 === this._$AM && (this._$Cv = t2, this._$AP?.(t2));
  }
}
class k {
  get tagName() {
    return this.element.tagName;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  constructor(t2, i3, s2, e2, h2) {
    this.type = 1, this._$AH = E, this._$AN = void 0, this.element = t2, this.name = i3, this._$AM = e2, this.options = h2, s2.length > 2 || "" !== s2[0] || "" !== s2[1] ? (this._$AH = Array(s2.length - 1).fill(new String()), this.strings = s2) : this._$AH = E;
  }
  _$AI(t2, i3 = this, s2, e2) {
    const h2 = this.strings;
    let o2 = false;
    if (void 0 === h2) t2 = S(this, t2, i3, 0), o2 = !c(t2) || t2 !== this._$AH && t2 !== T, o2 && (this._$AH = t2);
    else {
      const e3 = t2;
      let n3, r2;
      for (t2 = h2[0], n3 = 0; n3 < h2.length - 1; n3++) r2 = S(this, e3[s2 + n3], i3, n3), r2 === T && (r2 = this._$AH[n3]), o2 ||= !c(r2) || r2 !== this._$AH[n3], r2 === E ? t2 = E : t2 !== E && (t2 += (r2 ?? "") + h2[n3 + 1]), this._$AH[n3] = r2;
    }
    o2 && !e2 && this.j(t2);
  }
  j(t2) {
    t2 === E ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, t2 ?? "");
  }
}
class H extends k {
  constructor() {
    super(...arguments), this.type = 3;
  }
  j(t2) {
    this.element[this.name] = t2 === E ? void 0 : t2;
  }
}
class I extends k {
  constructor() {
    super(...arguments), this.type = 4;
  }
  j(t2) {
    this.element.toggleAttribute(this.name, !!t2 && t2 !== E);
  }
}
class L extends k {
  constructor(t2, i3, s2, e2, h2) {
    super(t2, i3, s2, e2, h2), this.type = 5;
  }
  _$AI(t2, i3 = this) {
    if ((t2 = S(this, t2, i3, 0) ?? E) === T) return;
    const s2 = this._$AH, e2 = t2 === E && s2 !== E || t2.capture !== s2.capture || t2.once !== s2.once || t2.passive !== s2.passive, h2 = t2 !== E && (s2 === E || e2);
    e2 && this.element.removeEventListener(this.name, this, s2), h2 && this.element.addEventListener(this.name, this, t2), this._$AH = t2;
  }
  handleEvent(t2) {
    "function" == typeof this._$AH ? this._$AH.call(this.options?.host ?? this.element, t2) : this._$AH.handleEvent(t2);
  }
}
class z {
  constructor(t2, i3, s2) {
    this.element = t2, this.type = 6, this._$AN = void 0, this._$AM = i3, this.options = s2;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(t2) {
    S(this, t2);
  }
}
const j = t$3.litHtmlPolyfillSupport;
j?.(N, R), (t$3.litHtmlVersions ??= []).push("3.3.1");
const B = (t2, i3, s2) => {
  const e2 = s2?.renderBefore ?? i3;
  let h2 = e2._$litPart$;
  if (void 0 === h2) {
    const t3 = s2?.renderBefore ?? null;
    e2._$litPart$ = h2 = new R(i3.insertBefore(l(), t3), t3, void 0, s2 ?? {});
  }
  return h2._$AI(t2), h2;
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const s = globalThis;
let i$1 = class i extends y$1 {
  constructor() {
    super(...arguments), this.renderOptions = { host: this }, this._$Do = void 0;
  }
  createRenderRoot() {
    const t2 = super.createRenderRoot();
    return this.renderOptions.renderBefore ??= t2.firstChild, t2;
  }
  update(t2) {
    const r2 = this.render();
    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(t2), this._$Do = B(r2, this.renderRoot, this.renderOptions);
  }
  connectedCallback() {
    super.connectedCallback(), this._$Do?.setConnected(true);
  }
  disconnectedCallback() {
    super.disconnectedCallback(), this._$Do?.setConnected(false);
  }
  render() {
    return T;
  }
};
i$1._$litElement$ = true, i$1["finalized"] = true, s.litElementHydrateSupport?.({ LitElement: i$1 });
const o$2 = s.litElementPolyfillSupport;
o$2?.({ LitElement: i$1 });
(s.litElementVersions ??= []).push("4.2.1");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t$2 = (t2) => (e2, o2) => {
  void 0 !== o2 ? o2.addInitializer((() => {
    customElements.define(t2, e2);
  })) : customElements.define(t2, e2);
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const o$1 = { attribute: true, type: String, converter: u$1, reflect: false, hasChanged: f$1 }, r$1 = (t2 = o$1, e2, r2) => {
  const { kind: n3, metadata: i3 } = r2;
  let s2 = globalThis.litPropertyMetadata.get(i3);
  if (void 0 === s2 && globalThis.litPropertyMetadata.set(i3, s2 = /* @__PURE__ */ new Map()), "setter" === n3 && ((t2 = Object.create(t2)).wrapped = true), s2.set(r2.name, t2), "accessor" === n3) {
    const { name: o2 } = r2;
    return { set(r3) {
      const n4 = e2.get.call(this);
      e2.set.call(this, r3), this.requestUpdate(o2, n4, t2);
    }, init(e3) {
      return void 0 !== e3 && this.C(o2, void 0, t2, e3), e3;
    } };
  }
  if ("setter" === n3) {
    const { name: o2 } = r2;
    return function(r3) {
      const n4 = this[o2];
      e2.call(this, r3), this.requestUpdate(o2, n4, t2);
    };
  }
  throw Error("Unsupported decorator location: " + n3);
};
function n2(t2) {
  return (e2, o2) => "object" == typeof o2 ? r$1(t2, e2, o2) : ((t3, e3, o3) => {
    const r2 = e3.hasOwnProperty(o3);
    return e3.constructor.createProperty(o3, t3), r2 ? Object.getOwnPropertyDescriptor(e3, o3) : void 0;
  })(t2, e2, o2);
}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const e$3 = (e2, t2, c2) => (c2.configurable = true, c2.enumerable = true, Reflect.decorate && "object" != typeof t2 && Object.defineProperty(e2, t2, c2), c2);
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function e$2(e2, r2) {
  return (n3, s2, i3) => {
    const o2 = (t2) => t2.renderRoot?.querySelector(e2) ?? null;
    return e$3(n3, s2, { get() {
      return o2(this);
    } });
  };
}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function r(r2) {
  return (n3, e2) => e$3(n3, e2, { async get() {
    return await this.updateComplete, this.renderRoot?.querySelector(r2) ?? null;
  } });
}
var __defProp$b = Object.defineProperty;
var __getOwnPropDesc$b = Object.getOwnPropertyDescriptor;
var __decorateClass$b = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc$b(target, key) : target;
  for (var i3 = decorators.length - 1, decorator; i3 >= 0; i3--)
    if (decorator = decorators[i3])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result) __defProp$b(target, key, result);
  return result;
};
let movePanelItemList = [];
let movePanelItemMaxZindex = 99999;
let HmMovePanel = class extends i$1 {
  constructor() {
    super();
    this.width = 320;
    this.height = 490;
    this.headerBackgroundColor = "rgba(66,134,182,0.9)";
    this.headerColor = "rgb(255,255,255)";
    this.bodyBackgroundColor = "rgba(255,255,255,0.7)";
    this.bodyColor = "rgba(23, 23, 23, 0.9)";
    this.footerBackgroundColor = "rgba(255,255,255,0.7)";
    this.buttonBackgroundColor = "rgba(255,255,255,0.9)";
    this.buttonColor = "rgba(66,134,182,0.9)";
    this.titleContent = "面板";
    this.leftButtonText = "按钮1";
    this.rightButtonText = "按钮2";
    this.isDisplay = false;
    this.zIndex = movePanelItemMaxZindex;
    this.icon = "magic-wand";
    this.left = (window.innerWidth - this.width) / 2;
    this.top = (window.innerHeight - (this.height + 80)) / 2;
    this.dragging = false;
    movePanelItemList.push(this);
    this.zIndex = ++movePanelItemMaxZindex;
  }
  handleLeftClick() {
    this.hideMovePanel();
  }
  handleRightClick() {
    this.hideMovePanel();
  }
  /** 关闭移动窗口 */
  hideMovePanel() {
    this.isDisplay = false;
    console.debug("关闭事件");
    this.dispatchEvent(new CustomEvent("close", {
      detail: { isDisplay: this.isDisplay, message: "关闭事件" },
      bubbles: true,
      composed: true
    }));
  }
  /** 显示移动窗口 */
  showMovePanel() {
    this.isDisplay = true;
    console.debug("显示事件");
    this.dispatchEvent(new CustomEvent("show", {
      detail: { isDisplay: this.isDisplay },
      bubbles: true,
      composed: true
    }));
  }
  /** 显示状态翻转 */
  toogleDisplay() {
    if (this.isDisplay) {
      this.hideMovePanel();
    } else {
      this.showMovePanel();
    }
  }
  mouseDragging(e2) {
    let templeft = this.left;
    let temptop = this.top;
    let offsetX = e2.clientX - templeft;
    let offsetY = e2.clientY - temptop;
    this.dragging == false && (this.dragging = true);
    document.onmousemove = (e22) => {
      if (this.dragging) {
        this.left = e22.clientX - offsetX;
        this.top = e22.clientY - offsetY;
      }
    };
    document.onmouseup = () => {
      this.dragging && (this.dragging = false);
      document.onmousemove = null;
    };
  }
  // 适配移动端
  touchDragging(e2) {
    let templeft = this.left;
    let temptop = this.top;
    let offsetX = e2.touches[0].clientX - templeft;
    let offsetY = e2.touches[0].clientY - temptop;
    this.dragging == false && (this.dragging = true);
    document.ontouchmove = (e22) => {
      if (this.dragging) {
        this.left = e22.touches[0].clientX - offsetX;
        this.top = e22.touches[0].clientY - offsetY;
      }
    };
    document.ontouchend = () => {
      this.dragging && (this.dragging = false);
      document.onmousemove = null;
    };
  }
  // 置顶窗口
  putTop() {
    let res = false;
    if (movePanelItemList.includes(this)) {
      for (let i3 = 0; i3 < movePanelItemList.length; i3++) {
        if (movePanelItemList[i3].zIndex > this.zIndex)
          movePanelItemList[i3].zIndex = movePanelItemList[i3].zIndex - 1;
      }
      this.zIndex = movePanelItemMaxZindex;
      res = true;
    } else {
      res = false;
    }
    return res;
  }
  /**
   * 切换元素的置顶状态和显示状态
   * 
   * 当元素的zIndex不等于最大移动面板层级时，将元素置于顶层并显示移动面板；
   * 当元素的zIndex等于最大移动面板层级时，切换元素的显示状态
   */
  putTopToggel() {
    if (this.zIndex != movePanelItemMaxZindex) {
      this.putTop();
      this.showMovePanel();
    } else {
      this.toogleDisplay();
    }
  }
  render() {
    return x`
<div
  class="panel"
  style="
    width: ${this.width}px;
    height: ${this.height + 80}px;
    left: ${this.left}px;
    top: ${this.top}px;
    display: ${this.isDisplay ? "block" : "none"};
    z-index: ${this.zIndex};
    "
    @mousedown="${this.putTop}"
    @touchstart="${this.putTop}"
>
  <div
    class="header"
    style="background-color: ${this.headerBackgroundColor}; color: ${this.headerColor};"
    @mousedown="${this.mouseDragging}"
    @touchstart="${this.touchDragging}"
  >
    <div class="header-left">
      <div class="header-icon">
        <slot name="left-icon" class="left-icon">
          <hm-icon icon="${this.icon}" size="24px"></hm-icon>
        </slot>
      </div>
      <div class="header-title">${this.titleContent}</div>
    </div>
    <div class="header-close" @click="${this._handleClose}">
      <slot name="right-icon" class="right-icon">
        <hm-icon icon="close" size="18px"></hm-icon>
      </slot>
    </div>
  </div>
  <div
    class="body"
    style="background-color: ${this.bodyBackgroundColor}; color: ${this.bodyColor}; height:${this.height}px;width:${this.width}px;"
  >
    <slot></slot>
  </div>
  <div class="footer" style="background-color: ${this.footerBackgroundColor};width:${this.width}px;">
    <hm-button
      class="footer-button footer-button-left"  
      icon="magic-wand"
      width="100%"
      backgroundColor="${this.buttonBackgroundColor}"
      color="${this.buttonColor}"
      @click="${this._handleLeftButtonClick}"
    >
      ${this.leftButtonText}
      </hm-button>
    <hm-button
      class="footer-button footer-button-right"
      icon="magic-wand"
      width="100%"
      backgroundColor="${this.buttonColor}"
      color="${this.buttonBackgroundColor}"
      @click="${this._handleRightButtonClick}"
    >
      ${this.rightButtonText}
    </hm-button>
  </div>
</div>

                `;
  }
  _handleClose() {
    this.hideMovePanel();
  }
  _handleLeftButtonClick() {
    this.dispatchEvent(new CustomEvent("left-button-click", {
      detail: { message: "左侧按钮被点击" },
      bubbles: true,
      composed: true
    }));
  }
  _handleRightButtonClick() {
    this.dispatchEvent(new CustomEvent("right-button-click", {
      detail: { message: "右侧按钮被点击" },
      bubbles: true,
      composed: true
    }));
  }
};
HmMovePanel.styles = i$4`
.panel {
  position: absolute;
  display: block;
}

.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 40px;
}
.header-left {
  display: flex;
  align-items: center;
}

.header-icon {
  display: flex;
  align-items: center;
  margin-left: 24px;
  margin-right: 24px;
}
.left-icon {
  display: flex;
  align-items: center;
}
.header-title {
  margin-right: auto;
  font-size: 16px !important;
  opacity: 0.7;
  font-weight: bold;
  height: 100%;
  line-height: 40px;
}


.header-close {
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  higth: 40px;
}

.body {
  display: block;
  position: absolute;
  top: 40px;
  overflow: auto;
  scrollbar-width: none; /* Firefox */
}
.body::-webkit-scrollbar {
  display: none; /* Chrome/Safari/Webkit */
}

.footer {
  display: flex;
  position: absolute;
  height: 40px;
  bottom: 0px;
  width: 100%; /* 添加宽度占满父容器 */
  box-sizing: border-box; /* 确保padding不会增加元素总宽度 */
}

.footer-button {
  flex: 1;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.2s;
}

.footer-button:active {
  transform: scale(0.98);
}
`;
__decorateClass$b([
  n2({ type: Number })
], HmMovePanel.prototype, "width", 2);
__decorateClass$b([
  n2({ type: Number })
], HmMovePanel.prototype, "height", 2);
__decorateClass$b([
  n2({ type: String, attribute: "header-background-color" })
], HmMovePanel.prototype, "headerBackgroundColor", 2);
__decorateClass$b([
  n2({ type: String, attribute: "header-color" })
], HmMovePanel.prototype, "headerColor", 2);
__decorateClass$b([
  n2({ type: String, attribute: "body-background-color" })
], HmMovePanel.prototype, "bodyBackgroundColor", 2);
__decorateClass$b([
  n2({ type: String, attribute: "body-color" })
], HmMovePanel.prototype, "bodyColor", 2);
__decorateClass$b([
  n2({ type: String, attribute: "footer-background-color" })
], HmMovePanel.prototype, "footerBackgroundColor", 2);
__decorateClass$b([
  n2({ type: String, attribute: "button-background-color" })
], HmMovePanel.prototype, "buttonBackgroundColor", 2);
__decorateClass$b([
  n2({ type: String, attribute: "button-color" })
], HmMovePanel.prototype, "buttonColor", 2);
__decorateClass$b([
  n2({ type: String })
], HmMovePanel.prototype, "titleContent", 2);
__decorateClass$b([
  n2({ type: String, attribute: "left-button-text" })
], HmMovePanel.prototype, "leftButtonText", 2);
__decorateClass$b([
  n2({ type: String, attribute: "right-button-text" })
], HmMovePanel.prototype, "rightButtonText", 2);
__decorateClass$b([
  n2({ type: Boolean, attribute: "is-display" })
], HmMovePanel.prototype, "isDisplay", 2);
__decorateClass$b([
  n2({ type: Number })
], HmMovePanel.prototype, "zIndex", 2);
__decorateClass$b([
  n2({ type: String })
], HmMovePanel.prototype, "icon", 2);
__decorateClass$b([
  n2({ type: Number })
], HmMovePanel.prototype, "left", 2);
__decorateClass$b([
  n2({ type: Number })
], HmMovePanel.prototype, "top", 2);
__decorateClass$b([
  r(".body")
], HmMovePanel.prototype, "body", 2);
HmMovePanel = __decorateClass$b([
  t$2("hm-move-panel")
], HmMovePanel);
const hmMovePanel = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  get HmMovePanel() {
    return HmMovePanel;
  },
  movePanelItemList,
  get movePanelItemMaxZindex() {
    return movePanelItemMaxZindex;
  }
}, Symbol.toStringTag, { value: "Module" }));
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t$1 = { CHILD: 2 }, e$1 = (t2) => (...e2) => ({ _$litDirective$: t2, values: e2 });
class i2 {
  constructor(t2) {
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AT(t2, e2, i3) {
    this._$Ct = t2, this._$AM = e2, this._$Ci = i3;
  }
  _$AS(t2, e2) {
    return this.update(t2, e2);
  }
  update(t2, e2) {
    return this.render(...e2);
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
class e extends i2 {
  constructor(i3) {
    if (super(i3), this.it = E, i3.type !== t$1.CHILD) throw Error(this.constructor.directiveName + "() can only be used in child bindings");
  }
  render(r2) {
    if (r2 === E || null == r2) return this._t = void 0, this.it = r2;
    if (r2 === T) return r2;
    if ("string" != typeof r2) throw Error(this.constructor.directiveName + "() called with a non-string value");
    if (r2 === this.it) return this._t;
    this.it = r2;
    const s2 = [r2];
    return s2.raw = s2, this._t = { _$litType$: this.constructor.resultType, strings: s2, values: [] };
  }
}
e.directiveName = "unsafeHTML", e.resultType = 1;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
class t extends e {
}
t.directiveName = "unsafeSVG", t.resultType = 2;
const o = e$1(t);
var __defProp$a = Object.defineProperty;
var __getOwnPropDesc$a = Object.getOwnPropertyDescriptor;
var __decorateClass$a = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc$a(target, key) : target;
  for (var i3 = decorators.length - 1, decorator; i3 >= 0; i3--)
    if (decorator = decorators[i3])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result) __defProp$a(target, key, result);
  return result;
};
const iconMap = /* @__PURE__ */ new Map([
  ["magic-wand", '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m12.64 1.87l-.84 2.48a.41.41 0 0 0 0 .37l1.57 2.1a.4.4 0 0 1-.33.64h-2.62a.43.43 0 0 0-.33.17l-1.46 2.1a.4.4 0 0 1-.71-.11l-.78-2.5a.38.38 0 0 0-.26-.26l-2.5-.78a.4.4 0 0 1-.11-.71l2.14-1.51a.43.43 0 0 0 .17-.33V.91a.4.4 0 0 1 .6-.33l2.1 1.57a.41.41 0 0 0 .37.05l2.48-.84a.4.4 0 0 1 .51.51m-5.6 5.09L.5 13.5" stroke-width="1"/></svg>'],
  ["close", '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M6.4 19L5 17.6l5.6-5.6L5 6.4L6.4 5l5.6 5.6L17.6 5L19 6.4L13.4 12l5.6 5.6l-1.4 1.4l-5.6-5.6z"/></svg>'],
  ["open", '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M4 21q-.425 0-.712-.288T3 20v-6q0-.425.288-.712T4 13t.713.288T5 14v3.6L17.6 5H14q-.425 0-.712-.288T13 4t.288-.712T14 3h6q.425 0 .713.288T21 4v6q0 .425-.288.713T20 11t-.712-.288T19 10V6.4L6.4 19H10q.425 0 .713.288T11 20t-.288.713T10 21z"/></svg>'],
  ["arrow-up", '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M16.21 16H7.79a1.76 1.76 0 0 1-1.59-1a2.1 2.1 0 0 1 .26-2.21l4.21-5.1a1.76 1.76 0 0 1 2.66 0l4.21 5.1A2.1 2.1 0 0 1 17.8 15a1.76 1.76 0 0 1-1.59 1"/></svg>'],
  ["arrow-down", '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M12 17a1.72 1.72 0 0 1-1.33-.64l-4.21-5.1a2.1 2.1 0 0 1-.26-2.21A1.76 1.76 0 0 1 7.79 8h8.42a1.76 1.76 0 0 1 1.59 1.05a2.1 2.1 0 0 1-.26 2.21l-4.21 5.1A1.72 1.72 0 0 1 12 17"/></svg>'],
  ["template", '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><defs><mask id="SVGZZ153dkC"><path fill="#4d4d4d" stroke="#fff" stroke-linejoin="round" stroke-width="4" d="M23 4H4v22h19zm21 30H4v9h40zm0-30H31v8h13zm0 14H31v8h13z"/></mask></defs><path fill="currentColor" d="M0 0h48v48H0z" mask="url(#SVGZZ153dkC)"/></svg>'],
  ["js", '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path fill="currentColor" d="M10.77 7.3h.002c1.045.393 2.479.93 2.479 2.45a2.5 2.5 0 0 1-.224 1.02a2.5 2.5 0 0 1-1.515 1.364a2.5 2.5 0 0 1-1.035.115a2 2 0 0 1-.214.012a2.5 2.5 0 0 1-1.673-.65a2.52 2.52 0 0 1-.838-1.859c0-.202.078-.39.22-.532a.77.77 0 0 1 1.06 0a.74.74 0 0 1 .221.53c0 .952 1.041 1 1.25 1s1.25-.048 1.25-1c0-.413-.447-.648-1.514-1.048h-.003C9.19 8.307 7.753 7.77 7.753 6.25q.005-.537.224-1.02a2.5 2.5 0 0 1 .614-.842a2.5 2.5 0 0 1 .9-.52a3.5 3.5 0 0 1 2.023 0a2.52 2.52 0 0 1 1.738 2.381c0 .201-.078.39-.22.531a.77.77 0 0 1-1.061 0a.74.74 0 0 1-.22-.53c0-.952-1.041-1-1.25-1s-1.25.048-1.25 1c0 .413.447.648 1.514 1.048zM5.751 4.5c0-.2.078-.388.22-.53a.77.77 0 0 1 1.06 0c.142.141.22.33.22.53v5a2.75 2.75 0 0 1-4.695 1.945A2.73 2.73 0 0 1 1.75 9.5V9c0-.2.078-.388.22-.53a.77.77 0 0 1 1.061 0c.142.141.22.33.22.53v.5c0 .33.134.652.366.884c.465.465 1.303.465 1.768 0c.232-.233.366-.555.366-.884z"/></svg>'],
  ["filter", '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M3 4c2.01 2.59 7 9 7 9v7h4v-7s4.98-6.41 7-9z"/></svg>'],
  ["filter-off", '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M3.004 1.59L3 1.586L1.586 3l4.928 4.928L10 12.818V21h4v-5.585l7 7l1.41-1.41L3 1.595zm12.266 9.446L21 3H7.234z"/></svg>']
]);
function registerIcon(name2, svgContent) {
  iconMap.set(name2, svgContent);
}
function getIcon(name2) {
  return iconMap.get(name2) || '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m12.64 1.87l-.84 2.48a.41.41 0 0 0 0 .37l1.57 2.1a.4.4 0 0 1-.33.64h-2.62a.43.43 0 0 0-.33.17l-1.46 2.1a.4.4 0 0 1-.71-.11l-.78-2.5a.38.38 0 0 0-.26-.26l-2.5-.78a.4.4 0 0 1-.11-.71l2.14-1.51a.43.43 0 0 0 .17-.33V.91a.4.4 0 0 1 .6-.33l2.1 1.57a.41.41 0 0 0 .37.05l2.48-.84a.4.4 0 0 1 .51.51m-5.6 5.09L.5 13.5" stroke-width="1"/></svg>';
}
let HmIcon = class extends i$1 {
  constructor() {
    super(...arguments);
    this.icon = "magic-wand";
    this.size = "16px";
  }
  /** 触发点击事件 */
  handelClick() {
    this.dispatchEvent(new CustomEvent("hm-icon-click"));
  }
  render() {
    return x`
<div class="icon" 
style="width:${this.size}; height:${this.size};"
@click="${this.handelClick}"
>
    ${o(getIcon(this.icon))}
</div>
`;
  }
};
HmIcon.styles = i$4`
:host {
  display: inline-block;
}
.icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
}

.icon svg {
  width: 100%;
  height: 100%;
}
`;
__decorateClass$a([
  n2({ type: String })
], HmIcon.prototype, "icon", 2);
__decorateClass$a([
  n2({ type: String })
], HmIcon.prototype, "size", 2);
HmIcon = __decorateClass$a([
  t$2("hm-icon")
], HmIcon);
const hmIcon = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  get HmIcon() {
    return HmIcon;
  },
  getIcon,
  registerIcon
}, Symbol.toStringTag, { value: "Module" }));
var __defProp$9 = Object.defineProperty;
var __getOwnPropDesc$9 = Object.getOwnPropertyDescriptor;
var __decorateClass$9 = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc$9(target, key) : target;
  for (var i3 = decorators.length - 1, decorator; i3 >= 0; i3--)
    if (decorator = decorators[i3])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result) __defProp$9(target, key, result);
  return result;
};
let HmMenu = class extends i$1 {
  constructor() {
    super(...arguments);
    this.icon = "magic-wand";
    this.content = "HortiMagic";
    this.flag = false;
    this.isMenuItem = false;
  }
  /** 触发点击事件 */
  handleClick() {
    if (!this.isMenuItem)
      this.flag = !this.flag;
    this.dispatchEvent(new CustomEvent("hm-menu-click"));
  }
  render() {
    return x`
<div
  class="menu ${this.isMenuItem ? "is-menu-item" : "not-menu-item"}"
  style="display:${this.isMenuItem && !this.flag ? "none" : "flex"}"
  @click="${this.handleClick}"
>
  <hm-icon class="left icon" icon="${this.icon}" size="24px"></hm-icon>
  <div class="content">
    <slot name="content"> ${this.content} </slot>
  </div>
  <div class="right">
    <slot name="right">
      ${this.isMenuItem ? "" : x`<hm-icon
        class="icon right"
        icon="${this.flag ? "arrow-up" : "arrow-down"}"
      ></hm-icon
      >`}
    </slot>
  </div>
</div>




`;
  }
};
HmMenu.styles = i$4`
:host {
  color: rgb(33,33,33);
  height: 56px;
}
.menu:hover {
  color: rgba(255, 255, 0, 1);
}
.menu {
  height: 56px;
  align-items: center;
}
.icon {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 56px;
  width: 56px;
}
.left {
  margin-right: 16px;
  color: rgb(117,117,117);
}
.right {
  position: absolute;
  right: 2px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.content {
  font-size: 16px;
  font-weight:bold;
  margin-right:auto;
}
.is-menu-item {
  background:rgb(240,240,240);
}
.not-menu-item {
 background:rgb(255,255,255);
}
`;
__decorateClass$9([
  n2({ type: String })
], HmMenu.prototype, "icon", 2);
__decorateClass$9([
  n2({ type: String })
], HmMenu.prototype, "content", 2);
__decorateClass$9([
  n2({ type: Boolean })
], HmMenu.prototype, "flag", 2);
__decorateClass$9([
  n2({ type: Boolean })
], HmMenu.prototype, "isMenuItem", 2);
HmMenu = __decorateClass$9([
  t$2("hm-menu")
], HmMenu);
const hmMenu = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  get HmMenu() {
    return HmMenu;
  }
}, Symbol.toStringTag, { value: "Module" }));
var __defProp$8 = Object.defineProperty;
var __getOwnPropDesc$8 = Object.getOwnPropertyDescriptor;
var __decorateClass$8 = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc$8(target, key) : target;
  for (var i3 = decorators.length - 1, decorator; i3 >= 0; i3--)
    if (decorator = decorators[i3])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result) __defProp$8(target, key, result);
  return result;
};
let HmNotification = class extends i$1 {
  constructor() {
    super(...arguments);
    this.leftIcon = "magic-wand";
    this.title = "HortiMagic";
    this.content = "Hello iirose!";
    this.rightIcon = "";
    this.displayTime = 999999;
    this.color = "rgb(33,33,33)";
    this.backgroundColor = "rgba(255,255,255,0.9)";
  }
  // 组件挂载后启动定时器
  firstUpdated() {
    if (this.displayTime > 0) {
      setTimeout(() => {
        this.startLeaveAnimation();
      }, this.displayTime);
    }
  }
  startLeaveAnimation() {
    this.setAttribute("leaving", "");
    setTimeout(() => {
      this.remove();
    }, 300);
  }
  render() {
    return x`
<div
  class="hm-notification"
  style="${this.color ? `border-color: ${this.color};` : ""} 
            ${this.color ? `color: ${this.color};` : ""} 
            ${this.backgroundColor ? `background-color: ${this.backgroundColor};` : ""}"
>
  ${this.leftIcon ? x`
  <div class="icondiv">
    <hm-icon icon="${this.leftIcon}" size="24px"></hm-icon>
  </div>
  ` : ""}

  <div class="hm-notification-main">
    <div class="hm-notification-title">${this.title}</div>
    <div class="hm-notification-content">${this.content}</div>
  </div>
  ${this.rightIcon ? x`
  <div class="icondiv">
    <hm-icon icon="${this.rightIcon}" size="24px"></hm-icon>
  </div>
  ` : ""}
</div>
`;
  }
};
HmNotification.styles = i$4`
:host{
  display: block;
  width: auto;
  z-index: 9999999;
  margin: 2px;
  animation: slideInRight 0.3s ease-out forwards;
}

:host([leaving]) {
  animation: slideOutRight 0.3s ease-in forwards;
}

@keyframes slideInRight {
  from {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
}

@keyframes slideOutRight {
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }
}

.hm-notification{ 
  display: flex;
  align-items: center;
  width:fit-content;
  max-width: 320px;
  border-radius: 10px;
  
}
.hm-notification-main{
  margin-right: 8px;
  padding: 8px;
}
.hm-notification-title{
  font-size: 16px;
  font-weight: bold;
}
.hm-notification-content{
  font-size: 14px;
}
.icondiv{
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
}
`;
__decorateClass$8([
  n2()
], HmNotification.prototype, "leftIcon", 2);
__decorateClass$8([
  n2()
], HmNotification.prototype, "title", 2);
__decorateClass$8([
  n2()
], HmNotification.prototype, "content", 2);
__decorateClass$8([
  n2()
], HmNotification.prototype, "rightIcon", 2);
__decorateClass$8([
  n2()
], HmNotification.prototype, "displayTime", 2);
__decorateClass$8([
  n2()
], HmNotification.prototype, "color", 2);
__decorateClass$8([
  n2()
], HmNotification.prototype, "backgroundColor", 2);
HmNotification = __decorateClass$8([
  t$2("hm-notification")
], HmNotification);
const hmNotification = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  get HmNotification() {
    return HmNotification;
  }
}, Symbol.toStringTag, { value: "Module" }));
var __defProp$7 = Object.defineProperty;
var __getOwnPropDesc$7 = Object.getOwnPropertyDescriptor;
var __decorateClass$7 = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc$7(target, key) : target;
  for (var i3 = decorators.length - 1, decorator; i3 >= 0; i3--)
    if (decorator = decorators[i3])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result) __defProp$7(target, key, result);
  return result;
};
let HmButton = class extends i$1 {
  constructor() {
    super(...arguments);
    this.icon = "";
    this.content = "";
    this.fontSize = "14px";
    this.color = "";
    this.background = "";
    this.width = "";
    this.height = "";
    this.enable = true;
    this.loading = false;
  }
  render() {
    const buttonStyle = `
          ${this.color ? `color: ${this.color};` : ""}
          ${this.background ? `background-color: ${this.background};` : ""}
          ${this.width ? `width: ${this.width};` : ""}
          ${this.height ? `height: ${this.height};` : ""}
          ${this.fontSize ? `font-size: ${this.fontSize};` : "14px"}
        `;
    return x`
          <button 
            class="button" 
            style="${buttonStyle}"
            ?disabled="${!this.enable || this.loading}"
            @click="${this._handleClick}">
            
            ${this.loading ? x`
              <div class="loading-spinner"></div>
            ` : this.icon ? x`
              <slot name="icon">
                <hm-icon icon="${this.icon}" style="margin-right: 8px;"></hm-icon>
              </slot>
            ` : ""}
            
            <span class="button-content">
              <slot>${this.content}</slot>
            </span>
          </button>
        `;
  }
  _handleClick(e2) {
    if (!this.enable || this.loading) {
      e2.stopPropagation();
      return;
    }
    this.dispatchEvent(new CustomEvent("hm-button-click"));
  }
};
HmButton.styles = i$4`
      :host {
        display: inline-block;
      }
      
      .button {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        border: none;
        border-radius: 4px;
        padding: 8px 16px;
        cursor: pointer;
        transition: all 0.3s;
        opacity: 1;
        // 添加鼠标悬停动画
        &:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
        }
      }
      
      .button:disabled {
        cursor: not-allowed;
        opacity: 0.6;
      }
      
      .button.loading {
        cursor: not-allowed;
      }
      
      .loading-spinner {
        width: 14px;
        height: 14px;
        border: 2px solid transparent;
        border-top-color: currentColor;
        border-radius: 50%;
        animation: rotate 1s linear infinite;
        margin-right: 8px;
      }
      
      @keyframes rotate {
        from {
          transform: rotate(0deg);
        }
        to {
          transform: rotate(360deg);
        }
      }
      
      .button-content {
        display: flex;
        align-items: center;
      }
    `;
__decorateClass$7([
  n2({ type: String })
], HmButton.prototype, "icon", 2);
__decorateClass$7([
  n2({ type: String })
], HmButton.prototype, "content", 2);
__decorateClass$7([
  n2({ type: String })
], HmButton.prototype, "fontSize", 2);
__decorateClass$7([
  n2({ type: String })
], HmButton.prototype, "color", 2);
__decorateClass$7([
  n2({ type: String })
], HmButton.prototype, "background", 2);
__decorateClass$7([
  n2({ type: String })
], HmButton.prototype, "width", 2);
__decorateClass$7([
  n2({ type: String })
], HmButton.prototype, "height", 2);
__decorateClass$7([
  n2({ type: Boolean })
], HmButton.prototype, "enable", 2);
__decorateClass$7([
  n2({ type: Boolean })
], HmButton.prototype, "loading", 2);
HmButton = __decorateClass$7([
  t$2("hm-button")
], HmButton);
const hmButton = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  get HmButton() {
    return HmButton;
  }
}, Symbol.toStringTag, { value: "Module" }));
var __defProp$6 = Object.defineProperty;
var __getOwnPropDesc$6 = Object.getOwnPropertyDescriptor;
var __decorateClass$6 = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc$6(target, key) : target;
  for (var i3 = decorators.length - 1, decorator; i3 >= 0; i3--)
    if (decorator = decorators[i3])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result) __defProp$6(target, key, result);
  return result;
};
let HmCell = class extends i$1 {
  constructor() {
    super(...arguments);
    this.titleName = "单元格";
    this.descripthion = "描述信息";
    this.content = "内容";
    this.titleClickCallback = () => {
    };
    this.contentClickCallback = () => {
    };
  }
  render() {
    return x`
<div class="cell" part="cell">
  <div
    class="left-section"
    part="left-section"
    @click="${this.titleClickCallback}"
  >
    <div class="title" part="title">
      <slot name="title">${this.titleName}</slot>
    </div>
    <div class="description" part="description">
      <slot name="description">${this.descripthion}</slot>
    </div>
  </div>
  <div
    class="right-section"
    part="right-section"
    @click="${this.contentClickCallback}"
  >
    <div class="content" part="content">
      <slot name="content">${this.content}</slot>
    </div>
  </div>
</div>

`;
  }
};
HmCell.styles = i$4`
    :host {
      display: block;
      width: 100%;
    }
    .cell {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      min-height: 60px;
      padding: var(--hm-cell-padding, 12px 16px);
      background: var(--hm-cell-background, #ffffff);
      border: var(--hm-cell-border, 1px dashed #e0e0e0);
      box-sizing: border-box;
      font-family: system-ui, -apple-system, sans-serif;
    }

    .left-section {
      display: flex;
      flex-direction: column;
      justify-content: center;
      flex: 1;
      min-width: 0; /* 允许文本截断 */
    }

    .title {
      font-size: var(--hm-cell-title-font-size, 18px);
      font-weight: var(--hm-cell-title-font-weight, 600);
      color: var(--hm-cell-title-color, #000000);
      line-height: 1.4;
      margin-bottom: 2px;
    }

    .description {
      font-size: var(--hm-cell-description-font-size, 14px);
      color: var(--hm-cell-description-color, #666666);
      line-height: 1.4;
    }

    .right-section {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      margin-left: auto;
      padding-left: 16px;
    }

    .content {
      font-size: var(--hm-cell-content-font-size, 16px);
      color: var(--hm-cell-content-color, #333333);
      text-align: right;
      padding-right: var(--hm-cell-content-padding-right, 30px);
    }

    /* 响应式设计 */
    @media (max-width: 480px) {
      .cell {
        padding: var(--hm-cell-mobile-padding, 10px 12px);
        min-height: 50px;
      }
      
      .title {
        font-size: var(--hm-cell-mobile-title-font-size, 16px);
      }
      
      .description {
        font-size: var(--hm-cell-mobile-description-font-size, 12px);
      }
      
      .content {
        font-size: var(--hm-cell-mobile-content-font-size, 14px);
        padding-right: var(--hm-cell-mobile-content-padding-right, 16px);
      }
    }
    /* 当鼠标或触摸悬停在整个单元格上时，改变内部文本的样式 */
    .cell:hover .title,
    .cell:hover .description,
    .cell:hover .content {
      /* 使用CSS变量允许自定义，并提供默认高亮颜色 */
      color: var(--hm-cell-hover-font-color, #1890ff);
      /* 可选：增加字体粗细使其更突出 */
      font-weight: var(--hm-cell-hover-font-weight, 600);
      /* 可选：添加文字阴影增强视觉效果 */
      text-shadow: var(--hm-cell-hover-text-shadow, 0 0 5px rgba(24, 144, 255, 0.2));
    }
  `;
__decorateClass$6([
  n2()
], HmCell.prototype, "titleName", 2);
__decorateClass$6([
  n2()
], HmCell.prototype, "descripthion", 2);
__decorateClass$6([
  n2()
], HmCell.prototype, "content", 2);
__decorateClass$6([
  n2()
], HmCell.prototype, "titleClickCallback", 2);
__decorateClass$6([
  n2()
], HmCell.prototype, "contentClickCallback", 2);
HmCell = __decorateClass$6([
  t$2("hm-cell")
], HmCell);
const hmCell = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  get HmCell() {
    return HmCell;
  }
}, Symbol.toStringTag, { value: "Module" }));
var __defProp$5 = Object.defineProperty;
var __getOwnPropDesc$5 = Object.getOwnPropertyDescriptor;
var __decorateClass$5 = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc$5(target, key) : target;
  for (var i3 = decorators.length - 1, decorator; i3 >= 0; i3--)
    if (decorator = decorators[i3])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result) __defProp$5(target, key, result);
  return result;
};
let HmSwipeCell = class extends i$1 {
  constructor() {
    super(...arguments);
    this._isDragging = false;
    this._startX = 0;
    this._currentTranslate = 0;
    this._prevTranslate = 0;
    this._animationId = 0;
    this._velocity = 0;
    this._lastX = 0;
    this._lastTime = 0;
    this._isOpen = false;
    this.rightButtonName = "右侧按钮";
    this.rightButtonCallback = function() {
      console.debug("点击了一下");
    };
    this.leftActionsWidth = 0;
    this.rightActionsWidth = 0;
    this.onDragStart = (e2) => {
      e2.preventDefault();
      this.startDrag(e2.clientX);
      this.sliderElement.style.cursor = "grabbing";
      this.sliderElement.style.transition = "none";
    };
    this.onTouchStart = (e2) => {
      e2.preventDefault();
      this.startDrag(e2.touches[0].clientX);
      this.sliderElement.style.transition = "none";
    };
    this.startDrag = (clientX) => {
      this._isDragging = true;
      this._startX = clientX;
      this._lastX = clientX;
      this._lastTime = Date.now();
      this._isOpen = Math.abs(this._prevTranslate) > 10;
      this.calculateActionWidths();
    };
    this.onDragMove = (e2) => {
      if (!this._isDragging) return;
      e2.preventDefault();
      this.handleMove(e2.clientX);
    };
    this.onTouchMove = (e2) => {
      if (!this._isDragging) return;
      e2.preventDefault();
      this.handleMove(e2.touches[0].clientX);
    };
    this.onDragEnd = () => {
      this.finishDrag();
      this.sliderElement.style.cursor = "grab";
    };
    this.onTouchEnd = () => {
      this.finishDrag();
    };
  }
  firstUpdated() {
    this.calculateActionWidths();
    this.addEventListeners();
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    this.removeEventListeners();
  }
  calculateActionWidths() {
    this.leftActionsWidth = this.leftActions ? this.leftActions.offsetWidth : 0;
    this.rightActionsWidth = this.rightActions ? this.rightActions.offsetWidth : 0;
  }
  addEventListeners() {
    this.sliderElement.addEventListener("mousedown", this.onDragStart);
    this.sliderElement.addEventListener("touchstart", this.onTouchStart, { passive: false });
    document.addEventListener("mousemove", this.onDragMove);
    document.addEventListener("touchmove", this.onTouchMove, { passive: false });
    document.addEventListener("mouseup", this.onDragEnd);
    document.addEventListener("touchend", this.onTouchEnd);
  }
  removeEventListeners() {
    this.sliderElement.removeEventListener("mousedown", this.onDragStart);
    this.sliderElement.removeEventListener("touchstart", this.onTouchStart);
    document.removeEventListener("mousemove", this.onDragMove);
    document.removeEventListener("touchmove", this.onTouchMove);
    document.removeEventListener("mouseup", this.onDragEnd);
    document.removeEventListener("touchend", this.onTouchEnd);
  }
  handleMove(currentX) {
    const currentTime = Date.now();
    const timeDiff = currentTime - this._lastTime;
    if (timeDiff > 0) {
      this._velocity = (currentX - this._lastX) / timeDiff;
      this._lastX = currentX;
      this._lastTime = currentTime;
    }
    const diff = currentX - this._startX;
    let newTranslate = this._prevTranslate + diff;
    if (newTranslate > this.leftActionsWidth) {
      const overshoot = newTranslate - this.leftActionsWidth;
      newTranslate = this.leftActionsWidth + this.easeOut(overshoot, 30);
    } else if (newTranslate < -this.rightActionsWidth) {
      const overshoot = newTranslate + this.rightActionsWidth;
      newTranslate = -this.rightActionsWidth + this.easeOut(overshoot, 30);
    }
    this._currentTranslate = newTranslate;
    this.updateSliderPosition();
  }
  // 弹性效果函数，使超出边界时有缓冲效果
  easeOut(overshoot, maxResistance) {
    return overshoot * 0.2;
  }
  finishDrag() {
    this._isDragging = false;
    this.sliderElement.style.transition = "transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)";
    const threshold = 5;
    const velocityThreshold = 0.1;
    let targetTranslate = 0;
    if (this._currentTranslate > threshold || this._currentTranslate > 0 && this._velocity > velocityThreshold) {
      targetTranslate = this.leftActionsWidth;
    } else if (this._currentTranslate < -threshold || this._currentTranslate < 0 && this._velocity < -velocityThreshold) {
      targetTranslate = -this.rightActionsWidth;
    } else {
      targetTranslate = 0;
    }
    if (this._isOpen) {
      const closeThreshold = 5;
      if (this._prevTranslate > 0 && this._currentTranslate < this._prevTranslate - closeThreshold || this._prevTranslate < 0 && this._currentTranslate > this._prevTranslate + closeThreshold) {
        targetTranslate = 0;
      } else {
        targetTranslate = this._prevTranslate;
      }
    }
    this._currentTranslate = targetTranslate;
    this._prevTranslate = targetTranslate;
    this.updateSliderPosition();
    this._velocity = 0;
  }
  updateSliderPosition() {
    if (this._animationId) {
      cancelAnimationFrame(this._animationId);
    }
    this._animationId = requestAnimationFrame(() => {
      this.sliderElement.style.transform = `translateX(${this._currentTranslate}px)`;
      if (this._currentTranslate > 0) {
        const leftProgress = Math.min(this._currentTranslate / this.leftActionsWidth, 1);
        this.leftActions.style.transform = `translateX(${-100 + leftProgress * 100}%)`;
        this.rightActions.style.transform = "translateX(100%)";
      } else if (this._currentTranslate < 0) {
        const rightProgress = Math.min(-this._currentTranslate / this.rightActionsWidth, 1);
        this.rightActions.style.transform = `translateX(${100 - rightProgress * 100}%)`;
        this.leftActions.style.transform = "translateX(-100%)";
      } else {
        this.leftActions.style.transform = "translateX(-100%)";
        this.rightActions.style.transform = "translateX(100%)";
      }
    });
  }
  render() {
    return x`
<div class="swipe-container">
  <div class="actions left-actions">
    <slot name="left-actions"> </slot>
  </div>
  <div class="slider">
      <slot name="content" class="content">
        <hm-cell></hm-cell>
      </slot>
  </div>
  <div class="actions right-actions">
    <slot name="right-actions">
      <hm-button type="primary" @hm-button-click="${this.rightButtonCallback}"
        >${this.rightButtonName}</hm-button
      >
    </slot>
  </div>
</div>
`;
  }
};
HmSwipeCell.styles = i$4`
        :host {
            display: block;
            overflow: hidden;
            position: relative;
            user-select: none;
            touch-action: pan-y;
            height: 60px;
            background: #f9f9f9;
            border-radius: 8px;
            margin: 10px 0;
        }
        .swipe-container {
            position: relative;
            width: 100%;
            height: 100%;
            background: white;
            border-radius: 8px;
            box-shadow: 0 1px 3px rgba(0,0,0,0.1);
            overflow: hidden;
        }
        
        .slider {
            position: relative;
            width: 100%;
            height: 100%;
            transition: transform 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
            will-change: transform;
            z-index: 2;
            background: white;
        }
        
        .content {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 0 15px;
            height: 100%;
            width: 100%;
            position: relative; // 改为相对定位
            top: 0;
            left: 0;
            background: white;
            box-sizing: border-box;
            border-radius: 8px;
        }
        
        .actions {
            position: absolute;
            top: 0;
            bottom: 0;
            display: flex;
            align-items: center;
            z-index: 1;
            transition: transform 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
        
        .left-actions {
            left: 0;
            padding-left: 10px;
            transform: translateX(-100%);
        }
        
        .right-actions {
            right: 0;
            padding-right: 10px;
            transform: translateX(100%);
        }
        
        .action-btn {
            height: 44px;
            border: none;
            color: white;
            padding: 0 20px;
            cursor: pointer;
            font-size: 14px;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: all 0.2s ease;
            border-radius: 6px;
            margin: 0 4px;
            min-width: 80px;
            font-weight: 500;
        }
        
        .action-btn:hover {
            transform: scale(1.05);
            filter: brightness(1.1);
        }
        
        .action-btn:active {
            transform: scale(0.95);
        }
        
        .action-btn.favorite {
            background: linear-gradient(135deg, #2196F3, #1976D2);
        }
        
        .action-btn.delete {
            background: linear-gradient(135deg, #f44336, #d32f2f);
        }
        
        .action-btn.mark {
            background: linear-gradient(135deg, #FF9800, #F57C00);
        }
        
        .action-btn.archive {
            background: linear-gradient(135deg, #9C27B0, #7B1FA2);
        }
        
        .action-btn.share {
            background: linear-gradient(135deg, #4CAF50, #388E3C);
        }
        
        .action-btn.edit {
            background: linear-gradient(135deg, #607D8B, #455A64);
        }
        .contentslot{
        width: 100%;
        }
    `;
__decorateClass$5([
  n2()
], HmSwipeCell.prototype, "_isDragging", 2);
__decorateClass$5([
  n2()
], HmSwipeCell.prototype, "_startX", 2);
__decorateClass$5([
  n2()
], HmSwipeCell.prototype, "_currentTranslate", 2);
__decorateClass$5([
  n2()
], HmSwipeCell.prototype, "_prevTranslate", 2);
__decorateClass$5([
  n2()
], HmSwipeCell.prototype, "_animationId", 2);
__decorateClass$5([
  n2()
], HmSwipeCell.prototype, "_velocity", 2);
__decorateClass$5([
  n2()
], HmSwipeCell.prototype, "_lastX", 2);
__decorateClass$5([
  n2()
], HmSwipeCell.prototype, "_lastTime", 2);
__decorateClass$5([
  n2()
], HmSwipeCell.prototype, "_isOpen", 2);
__decorateClass$5([
  n2()
], HmSwipeCell.prototype, "rightButtonName", 2);
__decorateClass$5([
  n2()
], HmSwipeCell.prototype, "rightButtonCallback", 2);
__decorateClass$5([
  e$2(".slider")
], HmSwipeCell.prototype, "sliderElement", 2);
__decorateClass$5([
  e$2(".content")
], HmSwipeCell.prototype, "contentElement", 2);
__decorateClass$5([
  e$2(".left-actions")
], HmSwipeCell.prototype, "leftActions", 2);
__decorateClass$5([
  e$2(".right-actions")
], HmSwipeCell.prototype, "rightActions", 2);
HmSwipeCell = __decorateClass$5([
  t$2("hm-swipe-cell")
], HmSwipeCell);
const hmSwipeCell = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  get HmSwipeCell() {
    return HmSwipeCell;
  }
}, Symbol.toStringTag, { value: "Module" }));
var __defProp$4 = Object.defineProperty;
var __getOwnPropDesc$4 = Object.getOwnPropertyDescriptor;
var __decorateClass$4 = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc$4(target, key) : target;
  for (var i3 = decorators.length - 1, decorator; i3 >= 0; i3--)
    if (decorator = decorators[i3])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result) __defProp$4(target, key, result);
  return result;
};
let HmSwitch = class extends i$1 {
  constructor() {
    super(...arguments);
    this.checked = false;
    this.disabled = false;
    this.loading = false;
    this.color = "#1890ff";
    this.openContent = "";
    this.closeContent = "";
    this.openIcon = "";
    this.closeIcon = "";
  }
  change() {
    if (this.disabled || this.loading) return;
    this.checked = !this.checked;
    this.dispatchEvent(new CustomEvent("hm-switch-change", {
      detail: { checked: this.checked },
      bubbles: true,
      composed: true
    }));
  }
  render() {
    return x`
<div
  class="switch ${this.disabled ? "disabled" : ""} ${this.loading ? "loading" : ""} ${this.checked ? "checked" : ""}"
  @click="${this.change}"
  @touchstart="${this.change}"
  style="--switch-color: ${this.color}"
>
  <div class="switch-inner">
    ${this.checked ? this.openIcon ? x`<hm-icon icon="${this.openIcon}" size="14px"></hm-icon>` : this.openContent ? x`<span>${this.openContent}</span>` : "" : this.closeIcon ? x`<hm-icon icon="${this.closeIcon}" size="14px"></hm-icon>` : this.closeContent ? x`<span>${this.closeContent}</span>` : ""}
  </div>
</div>
        `;
  }
};
HmSwitch.styles = i$4`
      .switch {
        position: relative;
        display: inline-block;
        width: 44px;
        height: 22px;
        vertical-align: middle;
        border: 1px solid #ccc;
        border-radius: 20px;
        background-color: #ccc;
        cursor: pointer;
        transition: all 0.3s;
        user-select: none;
      }
      
      .switch.checked {
        background-color: var(--switch-color, #1890ff);
        border-color: var(--switch-color, #1890ff);
      }
      
      .switch.disabled {
        cursor: not-allowed;
        opacity: 0.6;
      }
      
      .switch.loading {
        cursor: wait;
        opacity: 0.6;
      }
      
      .switch-inner {
        position: absolute;
        top: 2px;
        left: 2px;
        width: 18px;
        height: 18px;
        background-color: #fff;
        border-radius: 50%;
        transition: all 0.3s;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 12px;
      }
      
      .switch.checked .switch-inner {
        left: calc(100% - 20px);
      }
      
      .switch.loading::after {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        width: 12px;
        height: 12px;
        margin-top: -6px;
        margin-left: -6px;
        border: 2px solid transparent;
        border-top-color: currentColor;
        border-radius: 50%;
        animation: rotate 1s linear infinite;
      }
      
      @keyframes rotate {
        from {
          transform: rotate(0deg);
        }
        to {
          transform: rotate(360deg);
        }
      }
      
      hm-icon {
        font-size: 12px;
        width: 12px;
        height: 12px;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    `;
__decorateClass$4([
  n2({ type: Boolean })
], HmSwitch.prototype, "checked", 2);
__decorateClass$4([
  n2({ type: Boolean })
], HmSwitch.prototype, "disabled", 2);
__decorateClass$4([
  n2({ type: Boolean })
], HmSwitch.prototype, "loading", 2);
__decorateClass$4([
  n2({ type: String })
], HmSwitch.prototype, "color", 2);
__decorateClass$4([
  n2({ type: String })
], HmSwitch.prototype, "openContent", 2);
__decorateClass$4([
  n2({ type: String })
], HmSwitch.prototype, "closeContent", 2);
__decorateClass$4([
  n2({ type: String })
], HmSwitch.prototype, "openIcon", 2);
__decorateClass$4([
  n2({ type: String })
], HmSwitch.prototype, "closeIcon", 2);
HmSwitch = __decorateClass$4([
  t$2("hm-switch")
], HmSwitch);
const hmSwitch = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  get HmSwitch() {
    return HmSwitch;
  }
}, Symbol.toStringTag, { value: "Module" }));
var __defProp$3 = Object.defineProperty;
var __getOwnPropDesc$3 = Object.getOwnPropertyDescriptor;
var __decorateClass$3 = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc$3(target, key) : target;
  for (var i3 = decorators.length - 1, decorator; i3 >= 0; i3--)
    if (decorator = decorators[i3])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result) __defProp$3(target, key, result);
  return result;
};
let HmAccordion = class extends i$1 {
  constructor() {
    super(...arguments);
    this.maxHeight = "500px";
    this.items = [];
    this.expanded = false;
  }
  /** 开关容器 */
  togglePanel() {
    this.expanded = !this.expanded;
  }
  render() {
    return x`
      <div class="accordion-container" style="max-height: ${this.maxHeight}">
        <div class="accordion-header" @click=${this.togglePanel}>
          <slot name="header">面板标题</slot>
          <div class="accordion-toggle">
            ${!this.expanded ? x`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
                  </svg>` : x`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M7.247 4.86l-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z"/>
                  </svg>`}
          </div>
        </div>
        
        <div class="accordion-content" ?hidden=${!this.expanded}>
          ${this.items.length > 0 ? this.items.map(
      (item) => x`<div class="accordion-item">${item}</div>`
    ) : x`<slot></slot>`}
        </div>
        
        <div class="accordion-footer" ?hidden=${!this.expanded}>
          <slot name="footer">
            <hm-button @hm-button-click="${() => {
      this.expanded = false;
    }}">关闭</hm-button>
          </slot>
        </div>
      </div>
    `;
  }
};
HmAccordion.styles = i$4`
    :host {
      display: block;
      width: 100%;
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    }
    
    .accordion-container {
      display: flex;
      flex-direction: column;
      border-radius: 8px;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
      background-color: white;
      overflow: hidden;
      transition: all 0.3s ease;
    }
    
    .accordion-header {
      padding: 16px 20px;
      background-color: #f8f9fa;
      border-bottom: 1px solid #e9ecef;
      font-size: 1.25rem;
      font-weight: 600;
      color: #212529;
      display: flex;
      justify-content: space-between;
      align-items: center;
      cursor: pointer;
      transition: background-color 0.2s;
    }
    
    .accordion-header:hover {
      background-color: #e9ecef;
    }
    
    .accordion-toggle {
      transition: transform 0.3s ease;
      width: 24px;
      height: 24px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    
    .accordion-content {
      flex: 1;
      overflow-y: auto;
      padding: 0;
      background-color: #ffffff;
      transition: max-height 0.3s ease, opacity 0.3s ease;
    }
    
    .accordion-footer {
      padding: 12px 20px;
      background-color: #f8f9fa;
      border-top: 1px solid #e9ecef;
      display: flex;
      justify-content: flex-end;
      gap: 10px;
    }
    
    .accordion-item {
      padding: 12px 20px;
      border-bottom: 1px solid #e9ecef;
      transition: background-color 0.2s;
    }
    
    .accordion-item:last-child {
      border-bottom: none;
    }
    
    .accordion-item:hover {
      background-color: #f8f9fa;
    }
  `;
__decorateClass$3([
  n2({ type: String, attribute: "max-height" })
], HmAccordion.prototype, "maxHeight", 2);
__decorateClass$3([
  n2({ type: Array })
], HmAccordion.prototype, "items", 2);
__decorateClass$3([
  n2({ type: Boolean })
], HmAccordion.prototype, "expanded", 2);
HmAccordion = __decorateClass$3([
  t$2("hm-accordion")
], HmAccordion);
const hmAccordion = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  get HmAccordion() {
    return HmAccordion;
  }
}, Symbol.toStringTag, { value: "Module" }));
var __defProp$2 = Object.defineProperty;
var __getOwnPropDesc$2 = Object.getOwnPropertyDescriptor;
var __decorateClass$2 = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc$2(target, key) : target;
  for (var i3 = decorators.length - 1, decorator; i3 >= 0; i3--)
    if (decorator = decorators[i3])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result) __defProp$2(target, key, result);
  return result;
};
let HmInput = class extends i$1 {
  constructor() {
    super(...arguments);
    this.type = "text";
    this.icon = "";
    this.label = "输入框";
    this.placeholder = "";
    this.enable = true;
    this.readonly = false;
    this.value = "";
  }
  // 添加键盘事件处理方法，阻止事件冒泡
  _handleKeyDown(e2) {
    e2.stopPropagation();
  }
  // 添加输入事件处理方法，触发自定义事件
  _handleInput(e2) {
    const target = e2.target;
    this.value = target.value;
    this.dispatchEvent(new CustomEvent("hm-input-change", {
      detail: { value: this.value },
      bubbles: true,
      composed: true
    }));
  }
  render() {
    return x`
<div class="input-container">
  <span class="label">${this.label}</span>
  ${this.icon ? x`<hm-icon icon="${this.icon}" class="icon"></hm-icon>` : ""}
  <input 
    type="${this.type}"
    value="${this.value}"
    ?disabled="${!this.enable}"
    ?readonly="${this.readonly}"
    placeholder="${this.placeholder}"
    style="padding-left: ${this.icon ? "24px" : "8px"};"
    @keydown="${this._handleKeyDown}"
    @input="${this._handleInput}"
  />
  <slot name="right">
  </slot>
</div>
    `;
  }
};
HmInput.styles = i$4`
    :host {
        display: block;
    }
    .input-container {
        display: flex;
        align-items: center;
    }
    .label {
        margin-right: 8px;
    }
    input {
        flex: 1;
        padding: 8px 12px;
        border: 1px solid #d9d9d9;
        border-radius: 4px;
        font-size: 14px;
        outline: none;
        transition: all 0.2s ease;
    }
    input:disabled {
        background-color: #f5f5f5;
        color: #999;
        border-color: #ddd;
        cursor: not-allowed;
    }
    input[readonly] {
        background-color: #f5f5f5;
        cursor: default;
    }
    .icon {
        margin-right: 8px;
        width: 16px;
        height: 16px;
    }
`;
__decorateClass$2([
  n2({ type: String })
], HmInput.prototype, "type", 2);
__decorateClass$2([
  n2({ type: String })
], HmInput.prototype, "icon", 2);
__decorateClass$2([
  n2({ type: String })
], HmInput.prototype, "label", 2);
__decorateClass$2([
  n2({ type: String })
], HmInput.prototype, "placeholder", 2);
__decorateClass$2([
  n2({ type: Boolean })
], HmInput.prototype, "enable", 2);
__decorateClass$2([
  n2({ type: Boolean })
], HmInput.prototype, "readonly", 2);
__decorateClass$2([
  n2()
], HmInput.prototype, "value", 2);
HmInput = __decorateClass$2([
  t$2("hm-input")
], HmInput);
const hmInput = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  get HmInput() {
    return HmInput;
  }
}, Symbol.toStringTag, { value: "Module" }));
var __defProp$1 = Object.defineProperty;
var __getOwnPropDesc$1 = Object.getOwnPropertyDescriptor;
var __decorateClass$1 = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc$1(target, key) : target;
  for (var i3 = decorators.length - 1, decorator; i3 >= 0; i3--)
    if (decorator = decorators[i3])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result) __defProp$1(target, key, result);
  return result;
};
let HmDialog = class extends i$1 {
  constructor() {
    super(...arguments);
    this.isOpen = false;
    this.dialog = this;
  }
  open() {
    this.isOpen = true;
    this.dispatchEvent(new CustomEvent("hm-dialog-open"));
  }
  close() {
    this.isOpen = false;
    this.dispatchEvent(new CustomEvent("hm-dialog-close"));
  }
  /** 确认，触发 dialog-close dialog-confirm事件*/
  confirm() {
    this.close();
    this.dispatchEvent(new CustomEvent("hm-dialog-confirm"));
  }
  /** 取消，触发 dialog-close dialog-cancel事件*/
  cancel() {
    this.close();
    this.dispatchEvent(new CustomEvent("hm-dialog-cancel"));
  }
  updated(changedProperties) {
    if (changedProperties.has("isOpen")) {
      if (this.isOpen) {
        this.style.display = "block";
      } else {
        this.style.display = "none";
      }
    }
  }
  render() {
    return x`
<div class="overlay"
@click="${this.close}"
></div>
<div class="content">
    <slot></slot>
    <div class="footer">
        <slot name="footer">
            <hm-button @click="${() => {
      this.cancel();
      console.debug("取消");
    }}">取消</hm-button>
            <hm-button @click="${() => {
      this.confirm();
      console.debug("确定");
    }}">确定</hm-button>
        </slot>
    </div>
</div>
    `;
  }
};
HmDialog.styles = i$4`
        :host {
            display: none;
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: 1000;
        }
        :host([isopen]) {
            display: block;
        }
        .overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.5);
        }
        
        .content {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: white;
            border-radius: 4px;
            min-width: 300px;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
            padding: 20px;
        }
        
        .footer {
            display: flex;
            justify-content: flex-end;
            gap: 10px;
            margin-top: 20px;
        }
        
        hm-button {
            min-width: 80px;
        }
    `;
__decorateClass$1([
  n2({ type: Boolean, attribute: "isopen" })
], HmDialog.prototype, "isOpen", 2);
HmDialog = __decorateClass$1([
  t$2("hm-dialog")
], HmDialog);
const hmDialog = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  get HmDialog() {
    return HmDialog;
  }
}, Symbol.toStringTag, { value: "Module" }));
const index$2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hm_accordion: hmAccordion,
  hm_button: hmButton,
  hm_cell: hmCell,
  hm_dialog: hmDialog,
  hm_icon: hmIcon,
  hm_input: hmInput,
  hm_menu: hmMenu,
  hm_move_panel: hmMovePanel,
  hm_notification: hmNotification,
  hm_swipe_cell: hmSwipeCell,
  hm_switch: hmSwitch
}, Symbol.toStringTag, { value: "Module" }));
let menuHolder = document.createElement("div");
function initMenuHolder() {
  menuHolder.id = "hmMenuHolder";
  let img = document.querySelector("#functionHolderImg");
  console.debug(img);
  console.debug(menuHolder);
  if (img !== null) {
    img.parentElement.insertAdjacentElement("afterend", menuHolder);
  }
}
const menu = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  initMenuHolder,
  menuHolder
}, Symbol.toStringTag, { value: "Module" }));
let movePanelHolder = document.createElement("div");
function initMovePanelHolder() {
  movePanelHolder.id = "hmMovePanelHolder";
  document.body.append(movePanelHolder);
}
const movePanel = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  initMovePanelHolder,
  movePanelHolder
}, Symbol.toStringTag, { value: "Module" }));
let notificationHolder = document.createElement("div");
function initNotificationHolder() {
  notificationHolder.id = "hmNotificationHolder";
  document.body.append(notificationHolder);
}
let notice = {
  success(title, content, displayTime = 2e3) {
    let notice2 = document.createElement("hm-notification");
    notice2.title = title;
    notice2.content = content;
    notice2.displayTime = displayTime;
    notice2.backgroundColor = "rgba(57, 231, 34, 0.7)";
    notice2.color = "rgb(255,255,255)";
    notificationHolder.append(notice2);
  },
  warning(title, content, displayTime = 2e3) {
    let notice2 = document.createElement("hm-notification");
    notice2.title = title;
    notice2.content = content;
    notice2.displayTime = displayTime;
    notice2.backgroundColor = "rgba(255,193,7,0.7)";
    notice2.color = "rgb(255,255,255)";
    notificationHolder.append(notice2);
  },
  error(title, content, displayTime = 2e3) {
    let notice2 = document.createElement("hm-notification");
    notice2.title = title;
    notice2.content = content;
    notice2.displayTime = displayTime;
    notice2.backgroundColor = "rgba(255,0,0,0.7)";
    notice2.color = "rgb(255,255,255)";
    notificationHolder.append(notice2);
  },
  normal(title, content, displayTime = 2e3) {
    let notice2 = document.createElement("hm-notification");
    notice2.title = title;
    notice2.content = content;
    notice2.displayTime = displayTime;
    notice2.backgroundColor = "rgba(33,33,33,0.7)";
    notice2.color = "rgb(255,255,255)";
    notificationHolder.append(notice2);
  }
};
const notification = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  initNotificationHolder,
  notice,
  notificationHolder
}, Symbol.toStringTag, { value: "Module" }));
let dialogHolder = document.createElement("div");
function initDialogHolder() {
  dialogHolder.id = "hmDialogHolder";
  document.body.append(dialogHolder);
}
const dialog = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  dialogHolder,
  initDialogHolder
}, Symbol.toStringTag, { value: "Module" }));
async function initExampleApp() {
  let panel = document.createElement("hm-move-panel");
  panel.titleContent = "组件模板";
  panel.icon = "template";
  movePanelHolder.appendChild(panel);
  let template = x`

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
="${(e2) => console.log("开关状态:", e2.detail.checked)}"></hm-switch>
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
  .titleClickCallback="${() => console.log("标题被点击")}"
  .contentClickCallback="${() => console.log("内容被点击")}"
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
  @click="${() => notice.success("成功", "这是成功提示", 2e3)}"
></hm-button>
<hm-button
  content="普通通知"
  @click="${() => notice.normal("普通", "这是普通提示", 3e3)}"
></hm-button>
<hm-button
  content="警告通知"
  @click="${() => notice.warning("警告", "这是警告提示", 4e3)}"
></hm-button>
<hm-button
  content="错误通知"
  @click="${() => notice.error("错误", "这是错误提示", 5e3)}"
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
  B(template, await panel.body);
  let menuItem = document.createElement("hm-menu");
  menuItem.content = "组件模板";
  menuItem.isMenuItem = true;
  menuItem.icon = "template";
  menuItem.addEventListener("hm-menu-click", function() {
    panel.putTopToggel();
  });
  return menuItem;
}
const exampleApp = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  initExampleApp
}, Symbol.toStringTag, { value: "Module" }));
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __decorateClass = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc(target, key) : target;
  for (var i3 = decorators.length - 1, decorator; i3 >= 0; i3--)
    if (decorator = decorators[i3])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result) __defProp(target, key, result);
  return result;
};
let HmScriptApp = class extends i$1 {
  constructor() {
    super(...arguments);
    this.scriptName = "";
    this.scriptUrl = "";
    this.scriptEnable = true;
    this.scriptIngected = false;
    this.dialogOpen = false;
    this.scriptList = scriptList;
  }
  render() {
    return x`
<hm-dialog
  ?isopen="${this.dialogOpen}"
  @hm-dialog-close="${() => {
      this.dialogOpen = false;
    }}"
  @hm-dialog-confirm="${() => {
      if (this.scriptName.trim() == "" || this.scriptUrl.trim() == "") {
        notice.error("脚本管理", "请填写完整的脚本信息");
        return;
      }
      this.scriptEnable = true;
      this.scriptIngected = false;
      let script = new Script(
        this.scriptName,
        this.scriptUrl,
        this.scriptEnable,
        this.scriptIngected
      );
      addScriptToList(script);
      saveScriptList();
      this.scriptList = scriptList;
    }}"
>
  <h2>修改或添加脚本</h2>
  <hm-input
    label="脚本名称"
    placeholder="请输入脚本名称"
    value="${this.scriptName}"
    @hm-input-change="${(e2) => {
      this.scriptName = e2.detail.value;
      console.debug(this.scriptName);
    }}"
  ></hm-input>
  <hm-input
    label="脚本链接"
    placeholder="请输入https的脚本链接"
    value="${this.scriptUrl}"
    @hm-input-change="${(e2) => {
      this.scriptUrl = e2.detail.value;
      console.debug(this.scriptUrl);
    }}"
  ></hm-input>
</hm-dialog>

<hm-accordion>
  <span slot="header">脚本列表</span>
  ${this.scriptList.map((script) => {
      return x`
<hm-swipe-cell>
  <div slot="left-actions">
    <hm-button
      @hm-button-click="${() => {
        removeScriptFromList(script);
        saveScriptList();
        this.scriptList = scriptList;
      }}"
      >删除</hm-button
    >
  </div>
  <hm-cell
    slot="content"
    titleName="${script.name}"
    descripthion="${script.url}"
  >
    <hm-switch
      slot="content"
      ?checked="${script.enable}"
      @hm-switch-change="${(e2) => {
        script.enable = e2.detail.checked;
        addScriptToList(script);
        saveScriptList();
        this.scriptList = scriptList;
      }}"
    ></hm-switch>
  </hm-cell>

  <div slot="right-actions">
    <hm-button
      @hm-button-click="${() => {
        this.scriptName = script.name;
        this.scriptUrl = script.url;
        this.dialogOpen = true;
      }}"
      >修改</hm-button
    >
    <hm-button
      ?enable="${!script.ingected}"
      @hm-button-click="${() => {
        script.ingected = injectScript(script);
        addScriptToList(script);
        this.scriptList = scriptList;
      }}"
      >运行</hm-button
    >
  </div>
</hm-swipe-cell>

`;
    })}
  <div slot="footer">
    <hm-button
      @click="${() => {
      readScriptList();
      this.scriptList = scriptList;
    }}"
      >刷新</hm-button
    >
    <hm-button
      @click="${() => {
      this.scriptName = "";
      this.scriptUrl = "";
      this.scriptEnable = true;
      this.scriptIngected = false;
      this.dialogOpen = true;
    }}"
      >添加</hm-button
    >
    <hm-button @click="${() => {
      saveScriptList();
    }}"
      >保存</hm-button
    >
  </div>
</hm-accordion>

    `;
  }
};
HmScriptApp.styles = i$4`
:host {
  display:block;
  width: 100%;
}
`;
__decorateClass([
  n2({ type: String })
], HmScriptApp.prototype, "scriptName", 2);
__decorateClass([
  n2({ type: String })
], HmScriptApp.prototype, "scriptUrl", 2);
__decorateClass([
  n2({ type: Boolean })
], HmScriptApp.prototype, "scriptEnable", 2);
__decorateClass([
  n2({ type: Boolean })
], HmScriptApp.prototype, "scriptIngected", 2);
__decorateClass([
  n2({ type: Boolean })
], HmScriptApp.prototype, "dialogOpen", 2);
__decorateClass([
  n2({ type: Array })
], HmScriptApp.prototype, "scriptList", 2);
HmScriptApp = __decorateClass([
  t$2("hm-script-app")
], HmScriptApp);
async function initScriptApp() {
  let panel = document.createElement("hm-move-panel");
  panel.titleContent = "脚本管理";
  panel.icon = "js";
  movePanelHolder.appendChild(panel);
  let template = x`
  <hm-script-app></hm-script-app>
  `;
  B(template, await panel.body);
  let menuItem = document.createElement("hm-menu");
  menuItem.content = "脚本管理";
  menuItem.isMenuItem = true;
  menuItem.icon = "js";
  menuItem.addEventListener("hm-menu-click", function() {
    panel.putTopToggel();
  });
  return menuItem;
}
const name = "hortimagic";
const version = "1.0.0";
const author = "Narlen";
const description = "园艺魔法，花园插件";
const keywords = ["iirose", "plugins", "hortimagic"];
const repository = { "type": "git", "url": "https://github.com/NarlenHua/hortimagic.git" };
const license = "MIT";
const type = "module";
const scripts = { "dev": "vite", "build": "tsc && vite build", "preview": "vite preview" };
const dependencies = { "lit": "^3.3.1", "terser": "^5.44.0", "tiny-emitter": "^2.1.0", "vite-plugin-dts": "^4.5.4" };
const devDependencies = { "@types/node": "^24.9.1", "typescript": "~5.9.3", "vite": "^7.1.7" };
const main$1 = "dist/Horticraft.life.js";
const module = "dist/HortiCraft.es.js";
const typings = "dist/index.d.ts";
const types = "dist/index.d.ts";
const files = ["dist", "src/components", "types"];
const pkg = {
  name,
  "private": false,
  version,
  author,
  description,
  keywords,
  repository,
  license,
  type,
  scripts,
  dependencies,
  devDependencies,
  main: main$1,
  module,
  typings,
  types,
  files
};
async function init() {
  try {
    initNotificationHolder();
    initMenuHolder();
    initMovePanelHolder();
    initDialogHolder();
    notice.normal(pkg.name, "注入网络钩子函数");
    await initSocket();
    notice.normal(pkg.name, "注入钩子函数");
    refreshAll();
    initHooks();
    notice.normal(pkg.name, "注入脚本");
    ingectlocalScript();
    notice.normal(pkg.name, "生成菜单");
    let menu2 = document.createElement("hm-menu");
    menu2.content = "HortiMagic";
    menu2.isMenuItem = false;
    menuHolder.appendChild(menu2);
    let exampleMenu = await initExampleApp();
    let scriptMenu = await initScriptApp();
    menu2.addEventListener("hm-menu-click", function() {
      exampleMenu.flag = menu2.flag;
      scriptMenu.flag = menu2.flag;
    });
    menuHolder.append(menu2, exampleMenu, scriptMenu);
    notice.success(pkg.name, `${pkg.version} 已加载`, 3e3);
  } catch (error) {
    console.error(error);
  }
}
const mainApp = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  init
}, Symbol.toStringTag, { value: "Module" }));
const index$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  example_app: exampleApp,
  main_app: mainApp
}, Symbol.toStringTag, { value: "Module" }));
const index = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  dialog,
  menu,
  move_panel: movePanel,
  notification
}, Symbol.toStringTag, { value: "Module" }));
const information = {
  /** 项目名称 */
  name: pkg.name,
  /** 项目版本 */
  version: pkg.version,
  /** 项目描述 */
  description: pkg.description,
  /** 项目作者 */
  author: pkg.author,
  /** 项目许可证 */
  license: pkg.license,
  /** 项目仓库 */
  repository: pkg.repository,
  /** 项目构建时间 */
  buildTime: (/* @__PURE__ */ new Date()).toISOString()
};
async function main() {
  init();
}
main();
export {
  index$1 as apps,
  index$2 as components,
  index$3 as core,
  index as holders,
  information
};
