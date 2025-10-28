/**
 * 异步延时函数
 * @param  ms
 */
async function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
/**
 * 去除html字符串中的多余空白字符、注释
 * @param html 要压缩的html字符串
 * @returns 去除空白字符的字符串
 */
function compressHTML(html: string): string {
  // 去除HTML中的多余空白字符
  html = html.replace(/>\s+</g, "><"); // 去除标签之间的多余空白
  html = html.replace(/\s{2,}/g, " "); // 去除多余的空格
  html = html.replace(/<!--[\s\S]*?-->/g, ""); // 去除HTML注释
  html = html.trim(); // 去除首尾空白
  return html;
}
/**
 * 去除css字符串中的多余空白字符、注释
 * @param css 要压缩的css字符串
 * @returns 去除空白字符的字符串
 */
function compressCSS(css: string): string {
  // 去除CSS中的多余空白字符
  css = css.replace(/\s{2,}/g, " "); // 去除多余的空格
  css = css.replace(/\/\*[\s\S]*?\*\//g, ""); // 去除CSS注释
  css = css.replace(/\s*([{};:,])\s*/g, "$1"); // 去除属性和选择器之间的多余空白
  css = css.replace(/;\s*}/g, "}"); // 去除分号后的多余空白
  css = css.trim(); // 去除首尾空白
  return css;
}
/**
 * 向页面添加一个样式元素
 * @param css css字符串
 */
function addStyle(css: string) {
  let s = document.createElement("style");
  s.innerText = css;
  document.body.append(s);
}
/**
 * html特殊符号转义
 * @param {string} e
 * @returns {string}
 */
function htmlSpecialCharsEscape(e: string): string {
  e = e.replace(`&`, "&amp;");
  e = e.replace(`<`, "&lt;");
  e = e.replace(`>`, "&gt;");
  e = e.replace(`"`, "&quot;");
  e = e.replace(`'`, "&#039;");
  e = e.replace(`\\`, "&#092;");
  return e;
}
/**
 * html特殊符号反转义
 * @param {string} e
 * @returns {string}
 */
function htmlSpecialCharsDecode(e: string): string {
  e = e.replace("&lt;", `<`);
  e = e.replace("&gt;", `>`);
  e = e.replace("&quot;", `"`);
  e = e.replace("&#039;", `'`);
  e = e.replace("&#092;", `\\`);
  e = e.replace("&amp;", `&`);
  return e;
}

/**
 * 获取当前用户的名字
 * @returns 返回当前用户的名字，没找到返回null
 */
function getUserName(): string | null {
  // @ts-ignore
  if (window["myself"]) return window["myself"];
  else return null;
}
/**
 * 获取当前用户的UID
 * @returns 返回当前用户的UID，没找到返回null
 */
function getUserUid(): string | null {
  // @ts-ignore
  if (window["uid"]) return window["uid"];
  else return null;
}
/**
 * 获取当前房间ID
 * @returns 返回当前用户的UID，没找到返回null
 */
function getRoomId(): string | null {
  // @ts-ignore
  if (window["roomn"]) return window["roomn"];
  else return null;
}
/**
 * 通过房间id返回房间消息
 * @param roomId 房间的id
 * @returns 返回返回消息
 */
function getRoomInfoById(roomId: string): {
  name: string;
  roomPath: Array<string>;
  color: string;
  description: string;
  roomImage: string;
  currentUserNum: number | "hidden";
  ownerName: string;
  member: Array<{ name: string; auth: "member" | "admin" | "unknow" }>;
} | null {
  // @ts-ignore
  let roomInfoArray = window.Objs.mapHolder?.Assets?.roomJson?.[roomId];
  if (roomInfoArray) {
    /** @type {Array<Array<string>>} */
    let roomInfoPart: Array<Array<string>> = roomInfoArray[5]
      .split("&&")
      .map((o: string) => o.split(" & "));
    let imageAndDescription = htmlSpecialCharsDecode(roomInfoPart[0][0]);
    let firstSpaceIndex = imageAndDescription.indexOf(" ");
    return {
      name: roomInfoArray[1],
      color: roomInfoArray[2],
      roomPath: roomInfoArray /** @type {string} */[0]
        .split("_"),
      description: imageAndDescription.slice(firstSpaceIndex + 1),
      roomImage: imageAndDescription.slice(0, firstSpaceIndex),
      currentUserNum:
        typeof roomInfoArray[7] == "number" ? roomInfoArray[7] : "hidden",
      ownerName: roomInfoPart[1][0],
      member: roomInfoPart[4].map((o: string) => ({
        name: htmlSpecialCharsDecode(o.slice(1)),
        auth: o[0] == "0" ? "member" : o[0] == "1" ? "admin" : "unknow",
      })),
    };
  } else return null;
}
/**
 * 通过uid获取在线用户的信息
 * @param {string} uid
 * @returns 用户消息
 */
function getOnlineUserInfoById(uid: string): {
  name: string;
  uid: string;
  color: string;
  avatar: string;
  roomId: string;
  personalizedSignature: string;
} | null {
  uid = String(uid);
  // @ts-ignore
  let userInfoArray = window.Objs.mapHolder?.function?.findUserByUid?.(uid);
  if (userInfoArray) {
    return {
      name: userInfoArray[2],
      uid: uid,
      color: userInfoArray[3],
      avatar: userInfoArray[0],
      roomId: userInfoArray[4],
      personalizedSignature: userInfoArray[6],
    };
  } else return null;
}
/**
 * 获取所有在线用户的信息
 * @returns 用户消息列表
 */
function getAllOnlineUserInfo():
  | {
      name: any;
      uid: any;
      color: any;
      avatar: any;
      roomId: any;
      personalizedSignature: any;
    }[]
  | null {
  // @ts-ignore
  let userInfoMapObj = window.Objs.mapHolder.Assets.userJson;
  if (userInfoMapObj) {
    return Object.keys(userInfoMapObj).map((key) => {
      let o = userInfoMapObj[key];
      return {
        name: o[2],
        uid: o[8],
        color: o[3],
        avatar: o[0],
        roomId: o[4],
        personalizedSignature: o[6],
      };
    });
  } else return null;
}

/**
 * 切换房间
 * @param {string} roomId 房间ID
 */
function changeRoom(roomId: string) {
  roomId = String(roomId);
  if (roomId)
    // @ts-ignore
    window.Objs.mapHolder?.function?.roomchanger(roomId);
}

/**
 * 获取用户蔷薇头像url
 * @returns {string}
 */
function getUserProfilePictureUrl(): string | null {
  // @ts-ignore
  if (window.avatar2 && window.avatarconv)
    // @ts-ignore
    return window.avatarconv(window.avatar2);
  return null;
}

/**
 * 获取用户蔷薇输入颜色
 * @returns 获取不到返回null
 */
function getUserInputColor(): string | null {
  // @ts-ignore
  if (window.inputcolorhex) return window.inputcolorhex;
  return null;
}

/**
 * 创造一个新的私聊气泡，搭配静默发送私聊消息才能和“正常一样使用。
 * @param {string} targetUid 目标UID
 * @param {string} content 正文
 * @param {string} messageId 消息气泡的ID
 */
function generatePrivateMessageBubble(
  targetUid: string,
  content: string,
  messageId: string
) {
  // @ts-ignore
  if (window.privatechatfunc)
    // @ts-ignore
    window.privatechatfunc(
      [
        Math.floor(Date.now() / 1000).toString(10), // 0
        getUserUid(), // 1
        htmlSpecialCharsEscape(getUserName() as string), // 2
        htmlSpecialCharsEscape(getUserProfilePictureUrl() as string), // 3
        htmlSpecialCharsEscape(content), // 4
        htmlSpecialCharsEscape(getUserInputColor() as string), // 5
        "", // 6
        htmlSpecialCharsEscape(getUserInputColor() as string), // 7
        "", // 8
        "", // 9
        messageId, // 10
        targetUid, // 11
        "", // 12
        "", // 13
        "", // 14
        "", // 15
        "", // 16
      ].join(">")
    );
}

/**
 * 切换房间
 * @param {string} roomId
 */
function switchRoom(roomId: string) {
  // @ts-ignore
  if (window.Objs.mapHolder?.function?.roomchanger)
    // @ts-ignore
    window.Objs.mapHolder.function.roomchanger(roomId);
}

// /**
// * 在当前用户所在的页面发送信息
// * @param {string} content
// */
// function sendCurrentPageMessage(content: string) {
//     elementsAndHooks.refreshAll();
//     let inputBox: HTMLInputElement = elementsAndHooks.elements.moveinput as HTMLInputElement;
//     let old = inputBox.value;
//     inputBox.value = content;
//     // @ts-ignore
//     inputBox.oninput(null);
//     // @ts-ignore
//     iiroseElements.inputSendBtn.onclick(null);
//     inputBox.value = old;
// }
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
  getUserProfilePictureUrl,
  getUserInputColor,
  generatePrivateMessageBubble,
  switchRoom,
  // sendCurrentPageMessage
};
