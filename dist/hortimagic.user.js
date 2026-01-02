// ==UserScript==
// @name         hortimagic
// @namespace    hortimagic
// @version      1.1.0
// @description  园艺魔法，花园插件
// @author       Narlen
// @match        https://iirose.com/messages.html
// @grant        none
// @run-at       onmessage-end
// @license      MIT
// @buildtime    2026-01-02T09:22:52.961Z
// ==/UserScript==
top.window.hortimagic=window.hortimagic=function(t){"use strict";async function e(t){return new Promise(e=>setTimeout(e,t))}function o(t){return t=(t=(t=(t=(t=(t=t.replace("&","&amp;")).replace("<","&lt;")).replace(">","&gt;")).replace('"',"&quot;")).replace("'","&#039;")).replace("\\","&#092;")}function i(t){return t=(t=(t=(t=(t=(t=t.replace("&lt;","<")).replace("&gt;",">")).replace("&quot;",'"')).replace("&#039;","'")).replace("&#092;","\\")).replace("&amp;","&")}function n(){return window.myself?window.myself:null}function s(){return window.uid?window.uid:null}function r(){return window.inputcolorhex?window.inputcolorhex:null}const l=Object.freeze(Object.defineProperty({__proto__:null,addStyle:function(t){let e=document.createElement("style");e.innerText=t,document.body.append(e)},changeRoom:function(t){(t=String(t))&&window.Objs.mapHolder?.function?.roomchanger(t)},compressCSS:function(t){return t=(t=(t=(t=(t=t.replace(/\s{2,}/g," ")).replace(/\/\*[\s\S]*?\*\//g,"")).replace(/\s*([{};:,])\s*/g,"$1")).replace(/;\s*}/g,"}")).trim()},compressHTML:function(t){return t=(t=(t=(t=t.replace(/>\s+</g,"><")).replace(/\s{2,}/g," ")).replace(/<!--[\s\S]*?-->/g,"")).trim()},generatePrivateMessageBubble:function(t,e,i){window.privatechatfunc&&window.privatechatfunc([Math.floor(Date.now()/1e3).toString(10),s(),o(n()),o(window.avatar2&&window.avatarconv?window.avatarconv(window.avatar2):null),o(e),o(r()),"",o(r()),"","",i,t,"","","","",""].join(">"))},getAllOnlineUserInfo:function(){let t=window.Objs.mapHolder.Assets.userJson;return t?Object.keys(t).map(e=>{let o=t[e];return{name:o[2],uid:o[8],color:o[3],avatar:o[0],roomId:o[4],personalizedSignature:o[6]}}):null},getOnlineUserInfoById:function(t){t=String(t);let e=window.Objs.mapHolder?.function?.findUserByUid?.(t);return e?{name:e[2],uid:t,color:e[3],avatar:e[0],roomId:e[4],personalizedSignature:e[6]}:null},getRoomId:function(){return window.roomn?window.roomn:null},getRoomInfoById:function(t){let e=window.Objs.mapHolder?.Assets?.roomJson?.[t];if(e){let t=e[5].split("&&").map(t=>t.split(" & ")),o=i(t[0][0]),n=o.indexOf(" ");return{name:e[1],color:e[2],roomPath:e[0].split("_"),description:o.slice(n+1),roomImage:o.slice(0,n),currentUserNum:"number"==typeof e[7]?e[7]:"hidden",ownerName:t[1][0],member:t[4].map(t=>({name:i(t.slice(1)),auth:"0"==t[0]?"member":"1"==t[0]?"admin":"unknow"}))}}return null},getUserInputColor:r,getUserName:n,getUserUid:s,htmlSpecialCharsDecode:i,htmlSpecialCharsEscape:o,sleep:e,switchRoom:function(t){window.Objs.mapHolder?.function?.roomchanger&&window.Objs.mapHolder.function.roomchanger(t)}},Symbol.toStringTag,{value:"Module"}));class a{constructor(){this.timeStamp="",this.headPortrait="",this.name="",this.message="",this.color="",this.gender="",this.uid="",this.designation="",this.messageUid=""}}class c{constructor(){this.timeStamp="",this.headPortrait="",this.name="",this.message="",this.color="",this.gender="",this.uid="",this.messageUid=""}}class h{constructor(){this.messageName="",this.uid="",this.data=""}}class d{constructor(){this.username="",this.avatar="",this.message="",this.color="",this.gender="",this.timeStamp="",this.uid=""}}class p{constructor(){this.privateUID="",this.uid="",this.messageUid="",this.dataUid=""}}class u{constructor(){this.userMessageList=[]}}class g{constructor(){this.result="",this.stockPrice=NaN,this.totalStock=NaN,this.holdingAmount=NaN,this.totalEquity=NaN,this.balance=NaN}}class m{constructor(){this.message=""}}const f=Object.freeze(Object.defineProperty({__proto__:null,Danmu:d,Hidden:h,Private:c,Public:a,Stock:g,System:u,Unkonw:m,Withdrawn:p},Symbol.toStringTag,{value:"Module"}));let v=[];function b(t){return t instanceof a?"public":t instanceof c?"private":t instanceof h?"hidden":t instanceof d?"danmu":t instanceof p?"withdrawn":t instanceof u?"system":t instanceof g?"stock":"unknown"}function y(t){let e=new a,o=t.split(">");return e.timeStamp=o[0],e.headPortrait=o[1],e.name=o[2],e.message=o[3],e.color=o[5],e.gender=o[6],e.uid=o[8],e.designation=o[9],e.messageUid=o[10],e}function w(t){let e=new c,o=t.split(">");return e.timeStamp=o[0].slice(1),e.uid=o[1],e.name=o[2],e.headPortrait=o[3],e.message=o[4],e.color=o[5],e.gender=o[8],e.messageUid=o[10],e}function x(t){let e=new d,o=t.split(">");return e.username=o[0],e.message=o[1],e.color=o[2],e.gender=o[4],e.avatar=o[5],e.timeStamp=o[6],e.uid=o[7],e}function $(t){if(v=[],/^"[^"].*/gs.test(t)){let e=t.slice(1).split("<");for(let t=e.length-1;t>=0;t--)v.push(y(e[t]))}else if(/^"".*/gs.test(t)){let e=t.slice(1).split("<");for(let t=e.length-1;t>=0;t--)v.push(w(e[t]))}else if(/^=.*/gs.test(t)){let e=t.slice(1).split("<");for(let t=e.length-1;t>=0;t--)v.push(x(e[t]))}else/^[/]<.*>[0-9|a-z]{13}:.*/gs.test(t)?v.push(function(t){let e,o=new h;return e=t.match(/(?<=^[/]<).*(?=>[0-9|a-z]{13}:.*)/gs),o.messageName=null==e?"":e[0],e=t.match(/(?<=^[/]<.*>)[0-9|a-z]{13}(?=:.*)/gs),o.uid=null==e?"":e[0],e=t.match(/(?<=^[/]<.*>[0-9|a-z]{13}:).*/gs),o.data=null==e?"":e[0],o}(t)):/^v0.*/gs.test(t)?v.push(function(t){let e=new p;return"#"==t[2]?(e.privateUID="",e.uid=t.slice(3,16),e.messageUid=t.slice(17,29),e.dataUid=t.slice(3,29)):(e.privateUID=t.slice(3,16),e.uid=t.slice(17,30),e.messageUid=t.slice(31),e.dataUid=t.slice(17)),e}(t)):/^%\*".*/gs.test(t)?v.push(function(t){let e=new u;return e.userMessageList=t.split("<"),e}(t)):/^>.*/gs.test(t)?v.push(function(t){let e=new g;if(e.result=t[2],"*"==e.result)return e;if(">"==e.result)return e.holdingAmount=parseInt(t.slice(2)),e;if("<"==e.result)return e.balance=parseInt(t.slice(2)),e;{let o=t.split('"');if(5==o.length)return e.stockPrice=parseFloat(o[2]),e.totalStock=parseInt(o[0].slice(1)),e.holdingAmount=parseInt(o[3]),e.totalEquity=parseFloat(o[1]),e.balance=parseFloat(o[4]),e;if(4==o.length)return e.stockPrice=parseFloat(o[1])/parseInt(o[0].slice(1)),e.totalStock=parseInt(o[0].slice(1)),e.holdingAmount=parseInt(o[2]),e.totalEquity=parseFloat(o[1]),e.balance=parseFloat(o[3]),e}return e}(t)):v.push(function(t){let e=new m;return e.message=t,e}(t))}const _=Object.freeze(Object.defineProperty({__proto__:null,decodeMessage:$,judegMessageClass:b,get messageObjList(){return v}},Symbol.toStringTag,{value:"Module"}));class S{constructor(){this.events={}}on(t,e){this.events[t]||(this.events[t]=[]),this.events[t].push(e)}off(t,e){this.events[t]&&(e?this.events[t]=this.events[t].filter(t=>t!==e):delete this.events[t])}once(t,e){const o=(...i)=>{e(...i),this.off(t,o)};this.on(t,o)}emit(t,...e){const o=this.events[t];return!(!o||0===o.length)&&([...o].forEach(t=>t(...e)),!0)}}const k=Symbol(),A=Object.getPrototypeOf,C=new WeakMap,O=t=>(t=>t&&(C.has(t)?C.get(t):A(t)===Object.prototype||A(t)===Array.prototype))(t)&&t[k]||null,E=(t,e=!0)=>{C.set(t,e)},M={},z=t=>"object"==typeof t&&null!==t,H=(t,e)=>{const o=j.get(t);if((null==o?void 0:o[0])===e)return o[1];const i=Array.isArray(t)?[]:Object.create(Object.getPrototypeOf(t));return E(i,!0),j.set(t,[e,i]),Reflect.ownKeys(t).forEach(e=>{if(Object.getOwnPropertyDescriptor(i,e))return;const o=Reflect.get(t,e),{enumerable:n}=Reflect.getOwnPropertyDescriptor(t,e),s={value:o,enumerable:n,configurable:!0};if(P.has(o))E(o,!1);else if(T.has(o)){const[t,e]=T.get(o);s.value=H(t,e())}Object.defineProperty(i,e,s)}),Object.preventExtensions(i)},T=new WeakMap,P=new WeakSet,j=new WeakMap,L=[1],B=new WeakMap;let I=Object.is,D=(t,e)=>new Proxy(t,e),N=t=>z(t)&&!P.has(t)&&(Array.isArray(t)||!(Symbol.iterator in t))&&!(t instanceof WeakMap)&&!(t instanceof WeakSet)&&!(t instanceof Error)&&!(t instanceof Number)&&!(t instanceof Date)&&!(t instanceof String)&&!(t instanceof RegExp)&&!(t instanceof ArrayBuffer)&&!(t instanceof Promise),U=H,R=(t,e,o,i)=>({deleteProperty(t,e){const n=Reflect.get(t,e);o(e);const s=Reflect.deleteProperty(t,e);return s&&i(["delete",[e],n]),s},set(n,s,r,l){const a=!t()&&Reflect.has(n,s),c=Reflect.get(n,s,l);if(a&&(I(c,r)||B.has(r)&&I(c,B.get(r))))return!0;o(s),z(r)&&(r=O(r)||r);const h=!T.has(r)&&N(r)?V(r):r;return e(s,h),Reflect.set(n,s,h,l),i(["set",[s],r,c]),!0}});function V(t={}){if(!z(t))throw new Error("object required");const e=B.get(t);if(e)return e;let o=L[0];const i=new Set,n=(t,e=++L[0])=>{o!==e&&(s=o=e,i.forEach(o=>o(t,e)))};let s=o;const r=t=>(e,o)=>{const i=[...e];i[1]=[t,...i[1]],n(i,o)},l=new Map;let a=!0;const c=R(()=>a,(t,e)=>{const o=!P.has(e)&&T.get(e);if(o){if("production"!==(M?"production":void 0)&&l.has(t))throw new Error("prop listener already exists");if(i.size){const e=o[2](r(t));l.set(t,[o,e])}else l.set(t,[o])}},t=>{var e;const o=l.get(t);o&&(l.delete(t),null==(e=o[1])||e.call(o))},n),h=D(t,c);B.set(t,h);const d=[t,(t=L[0])=>(s!==t&&(s=t,l.forEach(([e])=>{const i=e[1](t);i>o&&(o=i)})),o),t=>{i.add(t),1===i.size&&l.forEach(([t,e],o)=>{if("production"!==(M?"production":void 0)&&e)throw new Error("remove already exists");const i=t[2](r(o));l.set(o,[t,i])});return()=>{i.delete(t),0===i.size&&l.forEach(([t,e],o)=>{e&&(e(),l.set(o,[t]))})}}];return T.set(h,d),Reflect.ownKeys(t).forEach(e=>{const o=Object.getOwnPropertyDescriptor(t,e);"value"in o&&o.writable&&(h[e]=t[e])}),a=!1,h}function F(t,e,o){const i=T.get(t);let n;"production"===(M?"production":void 0)||i||console.warn("Please use proxy object");const s=[],r=i[2];let l=!1;const a=r(t=>{s.push(t),o?e(s.splice(0)):n||(n=Promise.resolve().then(()=>{n=void 0,l&&e(s.splice(0))}))});return l=!0,()=>{l=!1,a()}}const q="store",W="HortimagicStore",G={proxy:V,subscribe:F,snapshot:function(t){const e=T.get(t);"production"===(M?"production":void 0)||e||console.warn("Please use proxy object");const[o,i]=e;return U(o,i())}},X=V({autoSave:!1,logFlag:{log:!1,info:!0,debug:!0,warn:!0,error:!0},messageLogFlag:{send:!1,decode:!1,emit:!0,receive:!1},logListLength:20,scriptList:[]});function J(){localStorage.setItem(W,JSON.stringify(X)),tt.debug(q,"保存至本地存储")}function Z(){let t=localStorage.getItem(W);if(null!=t){const e=JSON.parse(t);e.autoSave?X.autoSave=1==e.autoSave:X.autoSave=!1,e.logFlag?X.logFlag=e.logFlag:isNaN(e.logLevel)&&(X.logFlag=e.logLevel),e.scriptList&&(X.scriptList=e.scriptList),e.logListLength&&(X.logListLength=e.logListLength)}else X.logFlag.log=!0,X.logFlag.info=!0,X.logFlag.debug=!0,X.logFlag.warn=!0,X.logFlag.error=!0,X.autoSave=!0,X.logListLength=20,X.messageLogFlag.decode=!1,X.messageLogFlag.emit=!0,X.messageLogFlag.send=!1,X.messageLogFlag.receive=!1,X.scriptList=[],tt.debug(q,"没有读取到配置，使用默认配置"),J();tt.debug(q,"从本地存储加载")}function Y(){Z(),F(X,()=>{X.autoSave&&J()})}const K=Object.freeze(Object.defineProperty({__proto__:null,HortimagicStore:X,initStore:Y,loadStore:Z,reactive:G,saveStore:J},Symbol.toStringTag,{value:"Module"})),Q=new S,tt={log(t,...e){X.logFlag.log&&(Q.emit("log",t,...e),console.log(t,...e))},debug(t,...e){X.logFlag.debug&&(Q.emit("log",t,...e),console.debug(t,...e))},info(t,...e){X.logFlag.info&&(Q.emit("log",t,...e),console.info(t,...e))},warn(t,...e){X.logFlag.warn&&(Q.emit("log",t,...e),console.warn(t,...e))},error(t,...e){X.logFlag.error&&(Q.emit("log",t,...e),console.error(t,...e))}},et=Object.freeze(Object.defineProperty({__proto__:null,logEmitter:Q,logger:tt},Symbol.toStringTag,{value:"Module"})),ot="socket-tools",it=new S;async function nt(){tt.debug(ot,"代理网络");for(let o=0;o<30;o++)try{if(tt.debug(ot,"等待网络连接",o),null==window.socket.__onmessage&&null!=window.socket._onmessage&&null!=window.socket.send){tt.debug(ot,"网络连接成功");break}await e(500);continue}catch(t){tt.error(ot,t)}null==window.socket.__onmessage&&null!=window.socket._onmessage&&null!=window.socket.send?(st.originalSend=window.socket.send,window.socket.send=st.send,st.originalOnmessage=window.socket._onmessage,window.socket._onmessage=st.onmessage):tt.error("连接失败")}const st={beforeSend:async function(t){return t},originalSend:function(t){return t},afterSend:function(t){return t},send:async function(t){X.messageLogFlag.send&&tt.debug(ot,"发送",{message:t});let e=await st.beforeSend(t);try{null!=e&&(st.originalSend(e),st.afterSend(e))}catch(o){tt.error(ot,o)}},beforeOnmessage:async function(t){return X.messageLogFlag.decode&&tt.debug(ot,"解码",{message:t}),$(t),t},originalOnmessage:function(t){return t},afterOnmessage:async function(t){for(let e of v)X.messageLogFlag.emit&&tt.debug(ot,`触发${b(e)}消息`,{message:t,messageObj:e}),it.emit(b(e),e);return t},onmessage:async function(t){X.messageLogFlag.receive&&tt.debug(ot,"接收",{message:t});let e=await st.beforeOnmessage(t);try{null!=e&&(st.originalOnmessage(e),st.afterOnmessage(e))}catch(o){tt.error("捕获到错误",o)}},initSocket:nt},rt=Object.freeze(Object.defineProperty({__proto__:null,initSocket:nt,messageEmitter:it,socketTools:st},Symbol.toStringTag,{value:"Module"}));function lt(t,e){return"cut"===t?`{0${JSON.stringify({m:t,mc:e,i:Math.random().toString().slice(2,12)})}`:JSON.stringify({m:t,mc:e,i:Math.random().toString().slice(2,12)})}const at=Object.freeze(Object.defineProperty({__proto__:null,danmu:function(t,e,o="0"){return`~{"t":"${t}","c":"${e}","v":${o}}`},hidden:function(t,e,o){return`/<${t}>${e}:${o}`},like:function(t,e=""){return`+*${t}${e}`},musicCard:function(t,e,o,i,n,s){return lt(`m__4=${t}>${e}>${o}>${i}>${n}>${s}`,n)},privateChat:function(t,e,o){return JSON.stringify({g:t,m:e,mc:o,i:Math.random().toString().slice(2,12)})},publicChat:lt,stockRequest:function(t){return null==t?">#":t>0?`>$${Math.round(Math.abs(t))}`:t<0?`>@${Math.round(Math.abs(t))}`:">#"},videoCard:function(t,e,o,i,n,s,r){return lt(`m__4*${t}>${e}>${o}>${i}>${n}>${s}>${r}`,n)},withdrawn:function(t,e=""){return""==e?`v0#${t}`:`v0*${e}#${t}`}},Symbol.toStringTag,{value:"Module"})),ct="elements-hooks";let ht={movePanelHolder:document.querySelector("#movePanelHolder"),functionHolder:document.querySelector("#functionHolder"),functionButtonGroupList:[...document.querySelectorAll(".functionButton.functionButtonGroup")],msgholderBox:document.querySelector("#msgholder .fullBox.msgholderBox"),homeHolderMsgBox:document.querySelector("#homeHolder .homeHolderMsgContentBox .homeHolderMsgBox.fullBox"),sessionHolderPmTaskBoxItems:[...document.querySelectorAll(".sessionHolderPmTaskBoxItem.whoisTouch2")],moveinputDisplay:document.querySelector("#moveinputDisplay"),moveinput:document.getElementById("moveinput"),moveinputSendBtnFunc:document.querySelector("#moveinputDisplay #moveinputSendBtnFunc"),moveinputSendBtnSend:document.querySelector("#moveinputDisplay #moveinputSendBtnSend")};function dt(){ht.movePanelHolder=document.querySelector("#movePanelHolder"),ht.functionHolder=document.querySelector("#functionHolder"),ht.functionButtonGroupList=[...document.querySelectorAll(".functionButton.functionButtonGroup")],ht.msgholderBox=document.querySelector("#msgholder .fullBox .fullBox.msgholderBox"),ht.homeHolderMsgBox=document.querySelector("#homeHolder .homeHolderMsgContentBox .homeHolderMsgBox.fullBox"),ht.sessionHolderPmTaskBoxItems=[...document.querySelectorAll(".sessionHolderPmTaskBoxItem.whoisTouch2")],ht.moveinputDisplay=document.querySelector("#moveinputDisplay"),ht.moveinput=document.getElementById("moveinput"),ht.moveinputSendBtnFunc=document.querySelector("#moveinputDisplay #moveinputSendBtnFunc"),ht.moveinputSendBtnSend=document.querySelector("#moveinputDisplay #moveinputSendBtnSend")}let pt={elementHooks:{moveinput:{oninputBefore:()=>!0,oninputAfter:()=>!0,onblurBefore:()=>!0,onblurAfter:()=>!0,onfocusBefore:()=>!0,onfocusAfter:()=>!0}},functionHooks:{processer:{onBefore:(t,e,o,i)=>!0,onAfter:(t,e,o,i)=>!0}},replaceMoveinput:()=>{try{let t=ht.moveinput.oninput;ht.moveinput.oninput=function(){1==pt.elementHooks.moveinput.oninputBefore()&&(t?.call(ht.moveinput),pt.elementHooks.moveinput.oninputAfter())}}catch(t){tt.error(ct,t)}try{let t=ht.moveinput.oninput;ht.moveinput.onblur=function(){1==pt.elementHooks.moveinput.onblurBefore()&&(t?.call(ht.moveinput),pt.elementHooks.moveinput.onblurAfter())}}catch(t){tt.error(ct,t)}try{let t=ht.moveinput.oninput;ht.moveinput.onfocus=function(){1==pt.elementHooks.moveinput.onfocusBefore()&&(t?.call(ht.moveinput),pt.elementHooks.moveinput.onfocusAfter())}}catch(t){tt.error(ct,t)}},replaceButtonProcesser:()=>{try{let t=buttonProcesser;buttonProcesser=(e,o,i,n)=>{1==pt.functionHooks.processer.onBefore(e,o,i,n)&&(t(e,o,i,n),pt.functionHooks.processer.onAfter(e,o,i,n))}}catch(t){tt.error(ct,t)}}};function ut(){pt.replaceMoveinput(),pt.replaceButtonProcesser()}const gt=Object.freeze(Object.defineProperty({__proto__:null,Hooks:pt,elements:ht,initHooks:ut,refreshAll:dt},Symbol.toStringTag,{value:"Module"})),mt="script-tools",ft=[];class vt{constructor(t,e,o=!0){this.name=t,this.url=e,this.enable=o}}function bt(t){return tt.debug(mt,`添加${t.name},${t.url}`),xt(t.url)>=0||$t(t.name)>=0?(tt.warn(mt,`脚本${t.name}${t.url}已经存在`),!1):(X.scriptList.push(t),!0)}function yt(t){tt.debug(mt,`更新脚本${t.name}${t.url}`);for(let e=0;e<X.scriptList.length;e++){if(X.scriptList[e].name===t.name)return X.scriptList[e]=t,!0;if(X.scriptList[e].url===t.url)return X.scriptList[e]=t,!0}return!1}function wt(t){tt.debug(mt,`删除${t.name},${t.url}`);let e=$t(t.name);return e>=0?(X.scriptList.splice(e,1),!0):(e=xt(t.url),e>=0&&(X.scriptList.splice(e,1),!0))}function xt(t){for(let e=0;e<X.scriptList.length;e++)if(X.scriptList[e].url==t)return e;return-1}function $t(t){for(let e=0;e<X.scriptList.length;e++)if(X.scriptList[e].name==t)return e;return-1}function _t(t){if(ft.includes(t.url))return tt.warn(mt,`脚本${t.name}${t.url}已经注入`),!1;{const e=document.createElement("script");return e.src=t.url,document.body.appendChild(e),ft.push(t.url),tt.debug(mt,`注入${t.name}`),!0}}function St(){X.scriptList.forEach(t=>{t.enable&&!ft.includes(t.url)&&_t(t)})}const kt=Object.freeze(Object.defineProperty({__proto__:null,Script:vt,addScriptToList:bt,clearScriptList:function(){X.scriptList=[]},findScriptByName:$t,findScriptByUrl:xt,ingecteScript:_t,ingecteScriptList:St,ingectedUrlList:ft,removeScriptFromList:wt,updateScriptInList:yt},Symbol.toStringTag,{value:"Module"})),At=Object.freeze(Object.defineProperty({__proto__:null,Emitter:S,Message:f,decoder:_,elements_hooks:gt,encoder:at,log_tools:et,script_tools:kt,socket_tools:rt,store:K,tools:l},Symbol.toStringTag,{value:"Module"})),Ct=globalThis,Ot=Ct.ShadowRoot&&(void 0===Ct.ShadyCSS||Ct.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Et=Symbol(),Mt=new WeakMap;let zt=class{constructor(t,e,o){if(this._$cssResult$=!0,o!==Et)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(Ot&&void 0===t){const o=void 0!==e&&1===e.length;o&&(t=Mt.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),o&&Mt.set(e,t))}return t}toString(){return this.cssText}};const Ht=(t,...e)=>{const o=1===t.length?t[0]:e.reduce((e,o,i)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+t[i+1],t[0]);return new zt(o,t,Et)},Tt=Ot?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const o of t.cssRules)e+=o.cssText;return(t=>new zt("string"==typeof t?t:t+"",void 0,Et))(e)})(t):t,{is:Pt,defineProperty:jt,getOwnPropertyDescriptor:Lt,getOwnPropertyNames:Bt,getOwnPropertySymbols:It,getPrototypeOf:Dt}=Object,Nt=globalThis,Ut=Nt.trustedTypes,Rt=Ut?Ut.emptyScript:"",Vt=Nt.reactiveElementPolyfillSupport,Ft=(t,e)=>t,qt={toAttribute(t,e){switch(e){case Boolean:t=t?Rt:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let o=t;switch(e){case Boolean:o=null!==t;break;case Number:o=null===t?null:Number(t);break;case Object:case Array:try{o=JSON.parse(t)}catch(i){o=null}}return o}},Wt=(t,e)=>!Pt(t,e),Gt={attribute:!0,type:String,converter:qt,reflect:!1,useDefault:!1,hasChanged:Wt};Symbol.metadata??=Symbol("metadata"),Nt.litPropertyMetadata??=new WeakMap;let Xt=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=Gt){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){const o=Symbol(),i=this.getPropertyDescriptor(t,o,e);void 0!==i&&jt(this.prototype,t,i)}}static getPropertyDescriptor(t,e,o){const{get:i,set:n}=Lt(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get:i,set(e){const s=i?.call(this);n?.call(this,e),this.requestUpdate(t,s,o)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??Gt}static _$Ei(){if(this.hasOwnProperty(Ft("elementProperties")))return;const t=Dt(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(Ft("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Ft("properties"))){const t=this.properties,e=[...Bt(t),...It(t)];for(const o of e)this.createProperty(o,t[o])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,o]of e)this.elementProperties.set(t,o)}this._$Eh=new Map;for(const[e,o]of this.elementProperties){const t=this._$Eu(e,o);void 0!==t&&this._$Eh.set(t,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const o=new Set(t.flat(1/0).reverse());for(const t of o)e.unshift(Tt(t))}else void 0!==t&&e.push(Tt(t));return e}static _$Eu(t,e){const o=e.attribute;return!1===o?void 0:"string"==typeof o?o:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const o of e.keys())this.hasOwnProperty(o)&&(t.set(o,this[o]),delete this[o]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((t,e)=>{if(Ot)t.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const o of e){const e=document.createElement("style"),i=Ct.litNonce;void 0!==i&&e.setAttribute("nonce",i),e.textContent=o.cssText,t.appendChild(e)}})(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,o){this._$AK(t,o)}_$ET(t,e){const o=this.constructor.elementProperties.get(t),i=this.constructor._$Eu(t,o);if(void 0!==i&&!0===o.reflect){const n=(void 0!==o.converter?.toAttribute?o.converter:qt).toAttribute(e,o.type);this._$Em=t,null==n?this.removeAttribute(i):this.setAttribute(i,n),this._$Em=null}}_$AK(t,e){const o=this.constructor,i=o._$Eh.get(t);if(void 0!==i&&this._$Em!==i){const t=o.getPropertyOptions(i),n="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:qt;this._$Em=i;const s=n.fromAttribute(e,t.type);this[i]=s??this._$Ej?.get(i)??s,this._$Em=null}}requestUpdate(t,e,o){if(void 0!==t){const i=this.constructor,n=this[t];if(o??=i.getPropertyOptions(t),!((o.hasChanged??Wt)(n,e)||o.useDefault&&o.reflect&&n===this._$Ej?.get(t)&&!this.hasAttribute(i._$Eu(t,o))))return;this.C(t,e,o)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(t,e,{useDefault:o,reflect:i,wrapped:n},s){o&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,s??e??this[t]),!0!==n||void 0!==s)||(this._$AL.has(t)||(this.hasUpdated||o||(e=void 0),this._$AL.set(t,e)),!0===i&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,o]of t){const{wrapped:t}=o,i=this[e];!0!==t||this._$AL.has(e)||void 0===i||this.C(e,void 0,o,i)}}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(t=>t.hostUpdate?.()),this.update(e)):this._$EM()}catch(o){throw t=!1,this._$EM(),o}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(t){}firstUpdated(t){}};Xt.elementStyles=[],Xt.shadowRootOptions={mode:"open"},Xt[Ft("elementProperties")]=new Map,Xt[Ft("finalized")]=new Map,Vt?.({ReactiveElement:Xt}),(Nt.reactiveElementVersions??=[]).push("2.1.1");const Jt=globalThis,Zt=Jt.trustedTypes,Yt=Zt?Zt.createPolicy("lit-html",{createHTML:t=>t}):void 0,Kt="$lit$",Qt=`lit$${Math.random().toFixed(9).slice(2)}$`,te="?"+Qt,ee=`<${te}>`,oe=document,ie=()=>oe.createComment(""),ne=t=>null===t||"object"!=typeof t&&"function"!=typeof t,se=Array.isArray,re="[ \t\n\f\r]",le=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,ae=/-->/g,ce=/>/g,he=RegExp(`>|${re}(?:([^\\s"'>=/]+)(${re}*=${re}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),de=/'/g,pe=/"/g,ue=/^(?:script|style|textarea|title)$/i,ge=(ye=1,(t,...e)=>({_$litType$:ye,strings:t,values:e})),me=Symbol.for("lit-noChange"),fe=Symbol.for("lit-nothing"),ve=new WeakMap,be=oe.createTreeWalker(oe,129);var ye;function we(t,e){if(!se(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==Yt?Yt.createHTML(e):e}class xe{constructor({strings:t,_$litType$:e},o){let i;this.parts=[];let n=0,s=0;const r=t.length-1,l=this.parts,[a,c]=((t,e)=>{const o=t.length-1,i=[];let n,s=2===e?"<svg>":3===e?"<math>":"",r=le;for(let l=0;l<o;l++){const e=t[l];let o,a,c=-1,h=0;for(;h<e.length&&(r.lastIndex=h,a=r.exec(e),null!==a);)h=r.lastIndex,r===le?"!--"===a[1]?r=ae:void 0!==a[1]?r=ce:void 0!==a[2]?(ue.test(a[2])&&(n=RegExp("</"+a[2],"g")),r=he):void 0!==a[3]&&(r=he):r===he?">"===a[0]?(r=n??le,c=-1):void 0===a[1]?c=-2:(c=r.lastIndex-a[2].length,o=a[1],r=void 0===a[3]?he:'"'===a[3]?pe:de):r===pe||r===de?r=he:r===ae||r===ce?r=le:(r=he,n=void 0);const d=r===he&&t[l+1].startsWith("/>")?" ":"";s+=r===le?e+ee:c>=0?(i.push(o),e.slice(0,c)+Kt+e.slice(c)+Qt+d):e+Qt+(-2===c?l:d)}return[we(t,s+(t[o]||"<?>")+(2===e?"</svg>":3===e?"</math>":"")),i]})(t,e);if(this.el=xe.createElement(a,o),be.currentNode=this.el.content,2===e||3===e){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(i=be.nextNode())&&l.length<r;){if(1===i.nodeType){if(i.hasAttributes())for(const t of i.getAttributeNames())if(t.endsWith(Kt)){const e=c[s++],o=i.getAttribute(t).split(Qt),r=/([.?@])?(.*)/.exec(e);l.push({type:1,index:n,name:r[2],strings:o,ctor:"."===r[1]?Ae:"?"===r[1]?Ce:"@"===r[1]?Oe:ke}),i.removeAttribute(t)}else t.startsWith(Qt)&&(l.push({type:6,index:n}),i.removeAttribute(t));if(ue.test(i.tagName)){const t=i.textContent.split(Qt),e=t.length-1;if(e>0){i.textContent=Zt?Zt.emptyScript:"";for(let o=0;o<e;o++)i.append(t[o],ie()),be.nextNode(),l.push({type:2,index:++n});i.append(t[e],ie())}}}else if(8===i.nodeType)if(i.data===te)l.push({type:2,index:n});else{let t=-1;for(;-1!==(t=i.data.indexOf(Qt,t+1));)l.push({type:7,index:n}),t+=Qt.length-1}n++}}static createElement(t,e){const o=oe.createElement("template");return o.innerHTML=t,o}}function $e(t,e,o=t,i){if(e===me)return e;let n=void 0!==i?o._$Co?.[i]:o._$Cl;const s=ne(e)?void 0:e._$litDirective$;return n?.constructor!==s&&(n?._$AO?.(!1),void 0===s?n=void 0:(n=new s(t),n._$AT(t,o,i)),void 0!==i?(o._$Co??=[])[i]=n:o._$Cl=n),void 0!==n&&(e=$e(t,n._$AS(t,e.values),n,i)),e}class _e{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:o}=this._$AD,i=(t?.creationScope??oe).importNode(e,!0);be.currentNode=i;let n=be.nextNode(),s=0,r=0,l=o[0];for(;void 0!==l;){if(s===l.index){let e;2===l.type?e=new Se(n,n.nextSibling,this,t):1===l.type?e=new l.ctor(n,l.name,l.strings,this,t):6===l.type&&(e=new Ee(n,this,t)),this._$AV.push(e),l=o[++r]}s!==l?.index&&(n=be.nextNode(),s++)}return be.currentNode=oe,i}p(t){let e=0;for(const o of this._$AV)void 0!==o&&(void 0!==o.strings?(o._$AI(t,o,e),e+=o.strings.length-2):o._$AI(t[e])),e++}}class Se{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,o,i){this.type=2,this._$AH=fe,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=o,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=$e(this,t,e),ne(t)?t===fe||null==t||""===t?(this._$AH!==fe&&this._$AR(),this._$AH=fe):t!==this._$AH&&t!==me&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):(t=>se(t)||"function"==typeof t?.[Symbol.iterator])(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==fe&&ne(this._$AH)?this._$AA.nextSibling.data=t:this.T(oe.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:o}=t,i="number"==typeof o?this._$AC(t):(void 0===o.el&&(o.el=xe.createElement(we(o.h,o.h[0]),this.options)),o);if(this._$AH?._$AD===i)this._$AH.p(e);else{const t=new _e(i,this),o=t.u(this.options);t.p(e),this.T(o),this._$AH=t}}_$AC(t){let e=ve.get(t.strings);return void 0===e&&ve.set(t.strings,e=new xe(t)),e}k(t){se(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let o,i=0;for(const n of t)i===e.length?e.push(o=new Se(this.O(ie()),this.O(ie()),this,this.options)):o=e[i],o._$AI(n),i++;i<e.length&&(this._$AR(o&&o._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class ke{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,o,i,n){this.type=1,this._$AH=fe,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=n,o.length>2||""!==o[0]||""!==o[1]?(this._$AH=Array(o.length-1).fill(new String),this.strings=o):this._$AH=fe}_$AI(t,e=this,o,i){const n=this.strings;let s=!1;if(void 0===n)t=$e(this,t,e,0),s=!ne(t)||t!==this._$AH&&t!==me,s&&(this._$AH=t);else{const i=t;let r,l;for(t=n[0],r=0;r<n.length-1;r++)l=$e(this,i[o+r],e,r),l===me&&(l=this._$AH[r]),s||=!ne(l)||l!==this._$AH[r],l===fe?t=fe:t!==fe&&(t+=(l??"")+n[r+1]),this._$AH[r]=l}s&&!i&&this.j(t)}j(t){t===fe?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class Ae extends ke{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===fe?void 0:t}}class Ce extends ke{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==fe)}}class Oe extends ke{constructor(t,e,o,i,n){super(t,e,o,i,n),this.type=5}_$AI(t,e=this){if((t=$e(this,t,e,0)??fe)===me)return;const o=this._$AH,i=t===fe&&o!==fe||t.capture!==o.capture||t.once!==o.once||t.passive!==o.passive,n=t!==fe&&(o===fe||i);i&&this.element.removeEventListener(this.name,this,o),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class Ee{constructor(t,e,o){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=o}get _$AU(){return this._$AM._$AU}_$AI(t){$e(this,t)}}const Me=Jt.litHtmlPolyfillSupport;Me?.(xe,Se),(Jt.litHtmlVersions??=[]).push("3.3.1");const ze=globalThis;let He=class extends Xt{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,o)=>{const i=o?.renderBefore??e;let n=i._$litPart$;if(void 0===n){const t=o?.renderBefore??null;i._$litPart$=n=new Se(e.insertBefore(ie(),t),t,void 0,o??{})}return n._$AI(t),n})(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return me}};He._$litElement$=!0,He.finalized=!0,ze.litElementHydrateSupport?.({LitElement:He});const Te=ze.litElementPolyfillSupport;Te?.({LitElement:He}),(ze.litElementVersions??=[]).push("4.2.1");const Pe=t=>(e,o)=>{void 0!==o?o.addInitializer(()=>{customElements.define(t,e)}):customElements.define(t,e)},je={attribute:!0,type:String,converter:qt,reflect:!1,hasChanged:Wt},Le=(t=je,e,o)=>{const{kind:i,metadata:n}=o;let s=globalThis.litPropertyMetadata.get(n);if(void 0===s&&globalThis.litPropertyMetadata.set(n,s=new Map),"setter"===i&&((t=Object.create(t)).wrapped=!0),s.set(o.name,t),"accessor"===i){const{name:i}=o;return{set(o){const n=e.get.call(this);e.set.call(this,o),this.requestUpdate(i,n,t)},init(e){return void 0!==e&&this.C(i,void 0,t,e),e}}}if("setter"===i){const{name:i}=o;return function(o){const n=this[i];e.call(this,o),this.requestUpdate(i,n,t)}}throw Error("Unsupported decorator location: "+i)};function Be(t){return(e,o)=>"object"==typeof o?Le(t,e,o):((t,e,o)=>{const i=e.hasOwnProperty(o);return e.constructor.createProperty(o,t),i?Object.getOwnPropertyDescriptor(e,o):void 0})(t,e,o)}function Ie(t,e){return(e,o,i)=>((t,e,o)=>(o.configurable=!0,o.enumerable=!0,Reflect.decorate&&"object"!=typeof e&&Object.defineProperty(t,e,o),o))(e,o,{get(){return(e=>e.renderRoot?.querySelector(t)??null)(this)}})}var De=Object.defineProperty,Ne=Object.getOwnPropertyDescriptor,Ue=(t,e,o,i)=>{for(var n,s=i>1?void 0:i?Ne(e,o):e,r=t.length-1;r>=0;r--)(n=t[r])&&(s=(i?n(e,o,s):n(s))||s);return i&&s&&De(e,o,s),s};let Re=[],Ve=99999,Fe=class extends He{constructor(){super(),this.width=320,this.height=490,this.headerBackgroundColor="rgba(66,134,182,0.9)",this.headerColor="rgb(255,255,255)",this.bodyBackgroundColor="rgba(255,255,255,0.7)",this.bodyColor="rgba(23, 23, 23, 0.9)",this.footerBackgroundColor="rgba(255,255,255,0.7)",this.buttonBackground="rgba(255,255,255,0.9)",this.buttonColor="rgba(66,134,182,0.9)",this.titleContent="面板",this.leftButtonText="",this.rightButtonText="",this.isDisplay=!1,this.zIndex=Ve,this.icon="magic-wand",this.leftIcon="magic-wand",this.rightIcon="magic-wand",this.left=(window.innerWidth-this.width)/2,this.top=(window.innerHeight-(this.height+80))/2,this.dragging=!1,Re.push(this),this.zIndex=++Ve}hideMovePanel(){this.isDisplay=!1,this.dispatchEvent(new CustomEvent("close",{detail:{isDisplay:this.isDisplay,message:"关闭事件"},bubbles:!0,composed:!0}))}showMovePanel(){this.isDisplay=!0,this.dispatchEvent(new CustomEvent("show",{detail:{isDisplay:this.isDisplay},bubbles:!0,composed:!0}))}toogleDisplay(){this.isDisplay?this.hideMovePanel():this.showMovePanel()}mouseDragging(t){let e=this.left,o=this.top,i=t.clientX-e,n=t.clientY-o;0==this.dragging&&(this.dragging=!0),document.onmousemove=t=>{this.dragging&&(this.left=t.clientX-i,this.top=t.clientY-n)},document.onmouseup=()=>{this.dragging&&(this.dragging=!1),document.onmousemove=null}}touchDragging(t){let e=this.left,o=this.top,i=t.touches[0].clientX-e,n=t.touches[0].clientY-o;0==this.dragging&&(this.dragging=!0),document.ontouchmove=t=>{this.dragging&&(this.left=t.touches[0].clientX-i,this.top=t.touches[0].clientY-n)},document.ontouchend=()=>{this.dragging&&(this.dragging=!1),document.onmousemove=null}}putTop(){let t=!1;if(Re.includes(this)){for(let t=0;t<Re.length;t++)Re[t].zIndex>this.zIndex&&(Re[t].zIndex=Re[t].zIndex-1);this.zIndex=Ve,t=!0}else tt.warn("MovePanel","置顶失败，窗口不在列表中"),t=!1;return t}putTopToggel(){this.zIndex!=Ve?(this.putTop(),this.showMovePanel()):this.toogleDisplay()}render(){return ge`
<div
  class="panel"
  style="
    width: ${this.width}px;
    height: ${this.height+80}px;
    left: ${this.left}px;
    top: ${this.top}px;
    display: ${this.isDisplay?"block":"none"};
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
      icon="${this.leftIcon}
      width="100%"
      background="${this.buttonBackground}"
      color="${this.buttonColor}"
      @click="${this.handleLeftButtonClick}"
    >
      ${this.leftButtonText}
      </hm-button>
    <hm-button
      class="footer-button footer-button-right"
      icon="${this.rightIcon}"
      width="100%"
      background="${this.buttonColor}"
      color="${this.buttonBackground}"
      @click="${this.handleRightButtonClick}"
    >
      ${this.rightButtonText}
    </hm-button>
  </div>
</div>

                `}_handleClose(){this.hideMovePanel()}handleLeftButtonClick(){this.dispatchEvent(new CustomEvent("left-button-click",{detail:{message:"左侧按钮被点击"},bubbles:!0,composed:!0}))}handleRightButtonClick(){this.dispatchEvent(new CustomEvent("right-button-click",{detail:{message:"右侧按钮被点击"},bubbles:!0,composed:!0}))}};Fe.styles=Ht`
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
`,Ue([Be({type:Number})],Fe.prototype,"width",2),Ue([Be({type:Number})],Fe.prototype,"height",2),Ue([Be({type:String,attribute:"header-background-color"})],Fe.prototype,"headerBackgroundColor",2),Ue([Be({type:String,attribute:"header-color"})],Fe.prototype,"headerColor",2),Ue([Be({type:String,attribute:"body-background-color"})],Fe.prototype,"bodyBackgroundColor",2),Ue([Be({type:String,attribute:"body-color"})],Fe.prototype,"bodyColor",2),Ue([Be({type:String,attribute:"footer-background-color"})],Fe.prototype,"footerBackgroundColor",2),Ue([Be({type:String,attribute:"button-background-color"})],Fe.prototype,"buttonBackground",2),Ue([Be({type:String,attribute:"button-color"})],Fe.prototype,"buttonColor",2),Ue([Be({type:String})],Fe.prototype,"titleContent",2),Ue([Be({type:String,attribute:"left-button-text"})],Fe.prototype,"leftButtonText",2),Ue([Be({type:String,attribute:"right-button-text"})],Fe.prototype,"rightButtonText",2),Ue([Be({type:Boolean,attribute:"is-display"})],Fe.prototype,"isDisplay",2),Ue([Be({type:Number})],Fe.prototype,"zIndex",2),Ue([Be({type:String})],Fe.prototype,"icon",2),Ue([Be({type:String,attribute:"left-icon"})],Fe.prototype,"leftIcon",2),Ue([Be({type:String,attribute:"right-icon"})],Fe.prototype,"rightIcon",2),Ue([Be({type:Number})],Fe.prototype,"left",2),Ue([Be({type:Number})],Fe.prototype,"top",2),Fe=Ue([Pe("hm-move-panel")],Fe);const qe=Object.freeze(Object.defineProperty({__proto__:null,get HmMovePanel(){return Fe},movePanelItemList:Re,get movePanelItemMaxZindex(){return Ve}},Symbol.toStringTag,{value:"Module"})),We=2,Ge=t=>(...e)=>({_$litDirective$:t,values:e});class Xe{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,o){this._$Ct=t,this._$AM=e,this._$Ci=o}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}let Je=class extends Xe{constructor(t){if(super(t),this.it=fe,t.type!==We)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===fe||null==t)return this._t=void 0,this.it=t;if(t===me)return t;if("string"!=typeof t)throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.it)return this._t;this.it=t;const e=[t];return e.raw=e,this._t={_$litType$:this.constructor.resultType,strings:e,values:[]}}};Je.directiveName="unsafeHTML",Je.resultType=1;class Ze extends Je{}Ze.directiveName="unsafeSVG",Ze.resultType=2;const Ye=Ge(Ze);var Ke=Object.defineProperty,Qe=Object.getOwnPropertyDescriptor,to=(t,e,o,i)=>{for(var n,s=i>1?void 0:i?Qe(e,o):e,r=t.length-1;r>=0;r--)(n=t[r])&&(s=(i?n(e,o,s):n(s))||s);return i&&s&&Ke(e,o,s),s};const eo=new Map([["magic-wand",'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m12.64 1.87l-.84 2.48a.41.41 0 0 0 0 .37l1.57 2.1a.4.4 0 0 1-.33.64h-2.62a.43.43 0 0 0-.33.17l-1.46 2.1a.4.4 0 0 1-.71-.11l-.78-2.5a.38.38 0 0 0-.26-.26l-2.5-.78a.4.4 0 0 1-.11-.71l2.14-1.51a.43.43 0 0 0 .17-.33V.91a.4.4 0 0 1 .6-.33l2.1 1.57a.41.41 0 0 0 .37.05l2.48-.84a.4.4 0 0 1 .51.51m-5.6 5.09L.5 13.5" stroke-width="1"/></svg>'],["close",'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M6.4 19L5 17.6l5.6-5.6L5 6.4L6.4 5l5.6 5.6L17.6 5L19 6.4L13.4 12l5.6 5.6l-1.4 1.4l-5.6-5.6z"/></svg>'],["open",'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M4 21q-.425 0-.712-.288T3 20v-6q0-.425.288-.712T4 13t.713.288T5 14v3.6L17.6 5H14q-.425 0-.712-.288T13 4t.288-.712T14 3h6q.425 0 .713.288T21 4v6q0 .425-.288.713T20 11t-.712-.288T19 10V6.4L6.4 19H10q.425 0 .713.288T11 20t-.288.713T10 21z"/></svg>'],["led-on",'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M11 0v4h2V0zm7.3 2.29l-3.06 3l1.4 1.42l3.06-3zm-12.59 0L4.29 3.71l3 3l1.42-1.42zM12 6a4 4 0 0 0-4 4v6H6v2h3v5h2v-5h2v5h2v-5h3v-2h-2v-6a4 4 0 0 0-4-4M2 9v2h4V9zm16 0v2h4V9z"/></svg>'],["led-off",'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M12 6a4 4 0 0 0-4 4v6H6v2h3v5h2v-5h2v5h2v-5h3v-2h-2v-6a4 4 0 0 0-4-4"/></svg>'],["arrow-up",'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M16.21 16H7.79a1.76 1.76 0 0 1-1.59-1a2.1 2.1 0 0 1 .26-2.21l4.21-5.1a1.76 1.76 0 0 1 2.66 0l4.21 5.1A2.1 2.1 0 0 1 17.8 15a1.76 1.76 0 0 1-1.59 1"/></svg>'],["arrow-down",'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M12 17a1.72 1.72 0 0 1-1.33-.64l-4.21-5.1a2.1 2.1 0 0 1-.26-2.21A1.76 1.76 0 0 1 7.79 8h8.42a1.76 1.76 0 0 1 1.59 1.05a2.1 2.1 0 0 1-.26 2.21l-4.21 5.1A1.72 1.72 0 0 1 12 17"/></svg>'],["template",'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><defs><mask id="SVGZZ153dkC"><path fill="#4d4d4d" stroke="#fff" stroke-linejoin="round" stroke-width="4" d="M23 4H4v22h19zm21 30H4v9h40zm0-30H31v8h13zm0 14H31v8h13z"/></mask></defs><path fill="currentColor" d="M0 0h48v48H0z" mask="url(#SVGZZ153dkC)"/></svg>'],["js",'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path fill="currentColor" d="M10.77 7.3h.002c1.045.393 2.479.93 2.479 2.45a2.5 2.5 0 0 1-.224 1.02a2.5 2.5 0 0 1-1.515 1.364a2.5 2.5 0 0 1-1.035.115a2 2 0 0 1-.214.012a2.5 2.5 0 0 1-1.673-.65a2.52 2.52 0 0 1-.838-1.859c0-.202.078-.39.22-.532a.77.77 0 0 1 1.06 0a.74.74 0 0 1 .221.53c0 .952 1.041 1 1.25 1s1.25-.048 1.25-1c0-.413-.447-.648-1.514-1.048h-.003C9.19 8.307 7.753 7.77 7.753 6.25q.005-.537.224-1.02a2.5 2.5 0 0 1 .614-.842a2.5 2.5 0 0 1 .9-.52a3.5 3.5 0 0 1 2.023 0a2.52 2.52 0 0 1 1.738 2.381c0 .201-.078.39-.22.531a.77.77 0 0 1-1.061 0a.74.74 0 0 1-.22-.53c0-.952-1.041-1-1.25-1s-1.25.048-1.25 1c0 .413.447.648 1.514 1.048zM5.751 4.5c0-.2.078-.388.22-.53a.77.77 0 0 1 1.06 0c.142.141.22.33.22.53v5a2.75 2.75 0 0 1-4.695 1.945A2.73 2.73 0 0 1 1.75 9.5V9c0-.2.078-.388.22-.53a.77.77 0 0 1 1.061 0c.142.141.22.33.22.53v.5c0 .33.134.652.366.884c.465.465 1.303.465 1.768 0c.232-.233.366-.555.366-.884z"/></svg>'],["filter",'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M3 4c2.01 2.59 7 9 7 9v7h4v-7s4.98-6.41 7-9z"/></svg>'],["filter-off",'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M3.004 1.59L3 1.586L1.586 3l4.928 4.928L10 12.818V21h4v-5.585l7 7l1.41-1.41L3 1.595zm12.266 9.446L21 3H7.234z"/></svg>'],["eye",'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M16 11v2h-1v1h-1v1h-1v1h-2v-1h-1v-1H9v-1H8v-2h2v-1h1V8h2v1h1v1h1v1z"/><path fill="currentColor" d="M22 11V9h-1V8h-1V7h-1V6h-2V5H7v1H5v1H4v1H3v1H2v2H1v2h1v2h1v1h1v1h1v1h2v1h10v-1h2v-1h1v-1h1v-1h1v-2h1v-2zm-4 2h-1v2h-1v1h-1v1h-2v1h-2v-1H9v-1H8v-1H7v-2H6v-2h1V9h1V8h1V7h2V6h2v1h2v1h1v1h1v2h1z"/></svg>'],["eye-off",'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M2 13H1v-2h1V9h1V8h1V7h1V6h2V5h8v1h-1v1h-1V6h-2v1H9v1H8v1H7v2H6v2h1v1H6v1H5v1H3v-1H2z"/><path fill="currentColor" d="M8 11h1v1H8zm3-3h1v1h-1zm-2 9H8v1H7v1H6v1H5v1H4v1H3v-1H2v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1V9h1V8h1V7h1V6h1V5h1V4h1V3h1V2h1v1h1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1H9zm3-2h1v1h-1zm1-1h1v1h-1zm2-2h1v1h-1zm-1 1h1v1h-1z"/><path fill="currentColor" d="M23 11v2h-1v2h-1v1h-1v1h-1v1h-2v1H9v-1h1v-1h1v1h2v-1h2v-1h1v-1h1v-2h1v-2h-1v-1h1V9h1V8h2v1h1v2z"/></svg>'],["config",'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="4"><path d="m24 4l-6 6h-8v8l-6 6l6 6v8h8l6 6l6-6h8v-8l6-6l-6-6v-8h-8z"/><path d="M24 30a6 6 0 1 0 0-12a6 6 0 0 0 0 12Z"/></g></svg>'],["log",'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path fill="currentColor" fill-rule="evenodd" d="M3.5 2.5v11h9v-11zM3 1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zm5 10a.75.75 0 0 1 .75-.75h1.75a.75.75 0 0 1 0 1.5H8.75A.75.75 0 0 1 8 11m-2 1a1 1 0 1 0 0-2a1 1 0 0 0 0 2m2-4a.75.75 0 0 1 .75-.75h1.75a.75.75 0 0 1 0 1.5H8.75A.75.75 0 0 1 8 8M6 9a1 1 0 1 0 0-2a1 1 0 0 0 0 2m2-4a.75.75 0 0 1 .75-.75h1.75a.75.75 0 0 1 0 1.5H8.75A.75.75 0 0 1 8 5M6 6a1 1 0 1 0 0-2a1 1 0 0 0 0 2" clip-rule="evenodd"/></svg>'],["edit",'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path fill="currentColor" fill-opacity="0" stroke-dasharray="44" stroke-dashoffset="44" d="M7 17v-4l10 -10l4 4l-10 10h-4"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.3s" dur="0.5s" to="0"/><animate fill="freeze" attributeName="fill-opacity" begin="1s" dur="0.15s" to="0.3"/></path><g fill="none"><path stroke-dasharray="20" d="M3 21h18"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.3s" values="20;0"/></path><path stroke-dasharray="8" stroke-dashoffset="8" d="M14 6l4 4"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.8s" dur="0.2s" to="0"/></path></g></g></svg>'],["run",'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path fill="currentColor" d="M4.506 3.503L12.501 8l-8 4.5zm-.004-1.505C3.718 1.998 3 2.626 3 3.5v9c0 .874.718 1.502 1.502 1.502c.245 0 .496-.061.733-.195l8-4.5c1.019-.573 1.019-2.041 0-2.615l-8-4.499a1.5 1.5 0 0 0-.733-.195"/></svg>'],["delete",'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M7 4a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2h4a1 1 0 1 1 0 2h-1.069l-.867 12.142A2 2 0 0 1 17.069 22H6.93a2 2 0 0 1-1.995-1.858L4.07 8H3a1 1 0 0 1 0-2h4zm2 2h6V4H9zM6.074 8l.857 12H17.07l.857-12zM10 10a1 1 0 0 1 1 1v6a1 1 0 1 1-2 0v-6a1 1 0 0 1 1-1m4 0a1 1 0 0 1 1 1v6a1 1 0 1 1-2 0v-6a1 1 0 0 1 1-1"/></svg>'],["video",'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 15.75v-7.5a2 2 0 0 1 2-2h8.5a2 2 0 0 1 2 2v7.5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2m17.168-8.759l-4 3.563a.5.5 0 0 0-.168.373v1.778a.5.5 0 0 0 .168.373l4 3.563a.5.5 0 0 0 .832-.374V7.365a.5.5 0 0 0-.832-.374"/></svg>'],["play-video",'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path fill="currentColor" d="M85.527 80.647a4.97 4.97 0 0 0 4.973-4.974V24.327a4.97 4.97 0 0 0-4.973-4.974H14.474A4.97 4.97 0 0 0 9.5 24.327v51.346a4.97 4.97 0 0 0 4.974 4.974zm-4.974-9.948H19.446V29.301h61.107z"/><path fill="currentColor" d="m64.819 50.288l-11.98 6.913l-11.974 6.917V36.462l11.974 6.918z"/></svg>'],["game",'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M7.96 13.33h32.08a3.455 3.455 0 0 1 3.46 3.448v14.429a3.455 3.455 0 0 1-3.446 3.464H7.96A3.455 3.455 0 0 1 4.5 31.22V16.793a3.455 3.455 0 0 1 3.446-3.464z" stroke-width="1"/><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M13.25 16.938v5.401H8.11v3.385h5.14v5.338h3.577v-5.338h5.334V22.34h-5.334v-5.4zm19.513 9.68a2.58 2.58 0 0 1-2.582 2.583h0a2.58 2.58 0 0 1-2.58-2.583a2.582 2.582 0 1 1 5.162-.001zm7.076-5.235a2.58 2.58 0 0 1-2.58 2.584h0a2.58 2.58 0 0 1-2.583-2.583v0A2.58 2.58 0 0 1 37.26 18.8h0a2.58 2.58 0 0 1 2.581 2.583" stroke-width="1"/></svg>'],["save",'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M64 48c-8.726 0-16 7.274-16 16v384c0 8.726 7.274 16 16 16h215v-16H64V64h63.375v97.53c0 3.924 3.443 7.095 7.72 7.095h169.81c4.277 0 7.72-3.17 7.72-7.094V64h69.22c.428.318.8.548 1.467 1.094c2.05 1.675 4.962 4.264 8.375 7.406c6.827 6.283 15.65 14.837 24.313 23.5s17.217 17.486 23.5 24.313c3.142 3.413 5.73 6.324 7.406 8.374c.546.668.776 1.04 1.094 1.47V330.25l16 16V128c0-2.68-.657-3.402-1.03-4.156a15 15 0 0 0-1.095-1.844c-.74-1.1-1.575-2.19-2.594-3.438c-2.036-2.492-4.768-5.55-8.03-9.093c-6.524-7.09-15.155-16-23.938-24.782s-17.692-17.414-24.78-23.938c-3.545-3.262-6.6-5.994-9.094-8.03c-1.247-1.02-2.337-1.855-3.438-2.595c-.55-.37-1.09-.72-1.844-1.094c-.754-.373-1.477-1.03-4.156-1.03zm87.72 16h48.56c4.277 0 7.72 4.425 7.72 9.938v70.124c0 5.513-3.443 9.938-7.72 9.938h-48.56c-4.277 0-7.72-4.425-7.72-9.938V73.938c0-5.512 3.443-9.937 7.72-9.937zM114 212c-4.432 0-8 3.568-8 8v184c0 4.432 3.568 8 8 8h165v-28h-76.72l15.345-15.375l128-128L352 234.28l6.375 6.345L406 288.25V220c0-4.432-3.568-8-8-8zm238 47.75L245.75 366H297v128h110V366h51.25zM448 384v64h-23v16h23c8.726 0 16-7.274 16-16v-64z"/></svg>'],["load",'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M64 48c-8.726 0-16 7.274-16 16v384c0 8.726 7.274 16 16 16h236.25l-16-16H64V64h63.375v97.53c0 3.924 3.443 7.095 7.72 7.095h169.81c4.277 0 7.72-3.17 7.72-7.094V64h69.22c.428.318.8.548 1.467 1.094c2.05 1.675 4.962 4.264 8.375 7.406c6.827 6.283 15.65 14.837 24.313 23.5s17.217 17.486 23.5 24.313c3.142 3.413 5.73 6.324 7.406 8.374c.546.668.776 1.04 1.094 1.47V366h16V128c0-2.68-.657-3.402-1.03-4.156a15 15 0 0 0-1.095-1.844c-.74-1.1-1.575-2.19-2.594-3.438c-2.036-2.492-4.768-5.55-8.03-9.093c-6.524-7.09-15.155-16-23.938-24.782s-17.692-17.414-24.78-23.938c-3.545-3.262-6.6-5.994-9.094-8.03c-1.247-1.02-2.337-1.855-3.438-2.595c-.55-.37-1.09-.72-1.844-1.094c-.754-.373-1.477-1.03-4.156-1.03zm87.72 16h48.56c4.277 0 7.72 4.425 7.72 9.938v70.124c0 5.513-3.443 9.938-7.72 9.938h-48.56c-4.277 0-7.72-4.425-7.72-9.938V73.938c0-5.512 3.443-9.937 7.72-9.937zM114 212c-4.432 0-8 3.568-8 8v184c0 4.432 3.568 8 8 8h134.25l-30.625-30.625L202.28 366H279V238h127v-18c0-4.432-3.568-8-8-8zm183 44v128h-51.25L352 490.25L458.25 384H407V256zm167 147.75l-16 16V448h-28.25l-16 16H448c8.726 0 16-7.274 16-16z"/></svg>'],["refresh",'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M17.65 6.35A7.96 7.96 0 0 0 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08A5.99 5.99 0 0 1 12 18c-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4z"/></svg>'],["post-add",'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M5 21q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h9v2H5v14h14v-9h2v9q0 .825-.587 1.413T19 21zm3-4v-2h8v2zm0-3v-2h8v2zm0-3V9h8v2zm9-2V7h-2V5h2V3h2v2h2v2h-2v2z"/></svg>']]);function oo(t){return eo.get(t)||'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m12.64 1.87l-.84 2.48a.41.41 0 0 0 0 .37l1.57 2.1a.4.4 0 0 1-.33.64h-2.62a.43.43 0 0 0-.33.17l-1.46 2.1a.4.4 0 0 1-.71-.11l-.78-2.5a.38.38 0 0 0-.26-.26l-2.5-.78a.4.4 0 0 1-.11-.71l2.14-1.51a.43.43 0 0 0 .17-.33V.91a.4.4 0 0 1 .6-.33l2.1 1.57a.41.41 0 0 0 .37.05l2.48-.84a.4.4 0 0 1 .51.51m-5.6 5.09L.5 13.5" stroke-width="1"/></svg>'}let io=class extends He{constructor(){super(...arguments),this.icon="magic-wand",this.size="16px"}handelClick(){this.dispatchEvent(new CustomEvent("hm-icon-click"))}render(){return ge`
<div class="icon" 
style="width:${this.size}; height:${this.size};"
@click="${this.handelClick}"
>
    ${Ye(oo(this.icon))}
</div>
`}};io.styles=Ht`
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
`,to([Be({type:String})],io.prototype,"icon",2),to([Be({type:String})],io.prototype,"size",2),io=to([Pe("hm-icon")],io);const no=Object.freeze(Object.defineProperty({__proto__:null,get HmIcon(){return io},getIcon:oo,iconMap:eo,registerIcon:function(t,e){eo.set(t,e)}},Symbol.toStringTag,{value:"Module"}));var so=Object.defineProperty,ro=Object.getOwnPropertyDescriptor,lo=(t,e,o,i)=>{for(var n,s=i>1?void 0:i?ro(e,o):e,r=t.length-1;r>=0;r--)(n=t[r])&&(s=(i?n(e,o,s):n(s))||s);return i&&s&&so(e,o,s),s};let ao=class extends He{constructor(){super(...arguments),this.icon="magic-wand",this.content="HortiMagicMenu",this.flag=!1,this.isMenuItem=!1}handleClick(){this.isMenuItem||(this.flag=!this.flag),this.dispatchEvent(new CustomEvent("hm-menu-click"))}render(){return ge`
<div
  class="menu ${this.isMenuItem?"is-menu-item":"not-menu-item"}"
  style="display:${this.isMenuItem&&!this.flag?"none":"flex"}"
  @click="${this.handleClick}"
>
  <hm-icon class="left icon" icon="${this.icon}" size="24px"></hm-icon>
  <div class="content">
    <slot name="content"> ${this.content} </slot>
  </div>
  <div class="right">
    <slot name="right">
      ${this.isMenuItem?"":ge`<hm-icon
        class="icon right"
        icon="${this.flag?"arrow-up":"arrow-down"}"
      ></hm-icon
      >`}
    </slot>
  </div>
</div>




`}};ao.styles=Ht`
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
`,lo([Be({type:String})],ao.prototype,"icon",2),lo([Be({type:String})],ao.prototype,"content",2),lo([Be({type:Boolean})],ao.prototype,"flag",2),lo([Be({type:Boolean})],ao.prototype,"isMenuItem",2),ao=lo([Pe("hm-menu")],ao);const co=Object.freeze(Object.defineProperty({__proto__:null,get HmMenu(){return ao}},Symbol.toStringTag,{value:"Module"}));var ho=Object.defineProperty,po=Object.getOwnPropertyDescriptor,uo=(t,e,o,i)=>{for(var n,s=i>1?void 0:i?po(e,o):e,r=t.length-1;r>=0;r--)(n=t[r])&&(s=(i?n(e,o,s):n(s))||s);return i&&s&&ho(e,o,s),s};let go=class extends He{constructor(){super(...arguments),this.leftIcon="magic-wand",this.title="HortiMagic",this.content="Hello iirose!",this.rightIcon="",this.displayTime=999999,this.color="rgb(33,33,33)",this.backgroundColor="rgba(255,255,255,0.9)"}firstUpdated(){this.displayTime>0&&setTimeout(()=>{this.startLeaveAnimation()},this.displayTime)}startLeaveAnimation(){this.setAttribute("leaving",""),setTimeout(()=>{this.remove()},300)}render(){return ge`
<div
  class="hm-notification"
  style="${this.color?`border-color: ${this.color};`:""} 
            ${this.color?`color: ${this.color};`:""} 
            ${this.backgroundColor?`background-color: ${this.backgroundColor};`:""}"
>
  ${this.leftIcon?ge`
  <div class="icondiv">
    <hm-icon icon="${this.leftIcon}" size="24px"></hm-icon>
  </div>
  `:""}

  <div class="hm-notification-main">
    <div class="hm-notification-title">${this.title}</div>
    <div class="hm-notification-content">${this.content}</div>
  </div>
  ${this.rightIcon?ge`
  <div class="icondiv">
    <hm-icon icon="${this.rightIcon}" size="24px"></hm-icon>
  </div>
  `:""}
</div>
`}};go.styles=Ht`
:host{
  display: block;
  width: auto;
  margin: 2px;
  animation: slideInRight 0.3s ease-out forwards;
  position: relative;
  z-index: 999999;
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
`,uo([Be()],go.prototype,"leftIcon",2),uo([Be()],go.prototype,"title",2),uo([Be()],go.prototype,"content",2),uo([Be()],go.prototype,"rightIcon",2),uo([Be()],go.prototype,"displayTime",2),uo([Be()],go.prototype,"color",2),uo([Be()],go.prototype,"backgroundColor",2),go=uo([Pe("hm-notification")],go);const mo=Object.freeze(Object.defineProperty({__proto__:null,get HmNotification(){return go}},Symbol.toStringTag,{value:"Module"}));var fo=Object.defineProperty,vo=Object.getOwnPropertyDescriptor,bo=(t,e,o,i)=>{for(var n,s=i>1?void 0:i?vo(e,o):e,r=t.length-1;r>=0;r--)(n=t[r])&&(s=(i?n(e,o,s):n(s))||s);return i&&s&&fo(e,o,s),s};let yo=class extends He{constructor(){super(...arguments),this.icon="",this.content="",this.fontSize="14px",this.color="",this.background="",this.width="",this.height="",this.enable=!0,this.loading=!1}render(){const t=`\n          ${this.color?`color: ${this.color};`:""}\n          ${this.background?`background: ${this.background};`:""}\n          ${this.width?`width: ${this.width};`:""}\n          ${this.height?`height: ${this.height};`:""}\n          ${this.fontSize?`font-size: ${this.fontSize};`:"14px"}\n        `;return ge`
          <button 
            class="button" 
            style="${t}"
            ?disabled="${!this.enable||this.loading}"
            @click="${this._handleClick}">
            
            ${this.loading?ge`
              <div class="loading-spinner"></div>
            `:this.icon?ge`
              <slot name="icon">
                <hm-icon icon="${this.icon}" style="margin-right: 8px;"></hm-icon>
              </slot>
            `:""}
            
            <span class="button-content">
              <slot>${this.content}</slot>
            </span>
          </button>
        `}_handleClick(t){this.enable&&!this.loading?this.dispatchEvent(new CustomEvent("hm-button-click")):t.stopPropagation()}};yo.styles=Ht`
      :host {
        display: inline-block;
      }
      
      .button {
        width: 100%;
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
    `,bo([Be({type:String})],yo.prototype,"icon",2),bo([Be({type:String})],yo.prototype,"content",2),bo([Be({type:String})],yo.prototype,"fontSize",2),bo([Be({type:String})],yo.prototype,"color",2),bo([Be({type:String})],yo.prototype,"background",2),bo([Be({type:String})],yo.prototype,"width",2),bo([Be({type:String})],yo.prototype,"height",2),bo([Be({type:Boolean})],yo.prototype,"enable",2),bo([Be({type:Boolean})],yo.prototype,"loading",2),yo=bo([Pe("hm-button")],yo);const wo=Object.freeze(Object.defineProperty({__proto__:null,get HmButton(){return yo}},Symbol.toStringTag,{value:"Module"}));var xo=Object.defineProperty,$o=Object.getOwnPropertyDescriptor,_o=(t,e,o,i)=>{for(var n,s=i>1?void 0:i?$o(e,o):e,r=t.length-1;r>=0;r--)(n=t[r])&&(s=(i?n(e,o,s):n(s))||s);return i&&s&&xo(e,o,s),s};let So=class extends He{constructor(){super(...arguments),this.titleName="单元格",this.description="描述信息",this.content="内容",this.titleClickCallback=()=>{},this.contentClickCallback=()=>{}}render(){return ge`
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
      <slot name="description">${this.description}</slot>
    </div>
  </div>
  <div
    class="right-section"
    part="right-section"
    @click="${this.contentClickCallback}"
  >
    <div class="content" part="content"><slot>${this.content}</slot></div>
  </div>
</div>

`}};So.styles=Ht`
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
      font-size: var(--hm-cell-description-font-size, 12px);
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
  `,_o([Be({attribute:"title-name"})],So.prototype,"titleName",2),_o([Be()],So.prototype,"description",2),_o([Be()],So.prototype,"content",2),_o([Be()],So.prototype,"titleClickCallback",2),_o([Be()],So.prototype,"contentClickCallback",2),So=_o([Pe("hm-cell")],So);const ko=Object.freeze(Object.defineProperty({__proto__:null,get HmCell(){return So}},Symbol.toStringTag,{value:"Module"})),Ao=(t,e)=>{const o=t._$AN;if(void 0===o)return!1;for(const i of o)i._$AO?.(e,!1),Ao(i,e);return!0},Co=t=>{let e,o;do{if(void 0===(e=t._$AM))break;o=e._$AN,o.delete(t),t=e}while(0===o?.size)},Oo=t=>{for(let e;e=t._$AM;t=e){let o=e._$AN;if(void 0===o)e._$AN=o=new Set;else if(o.has(t))break;o.add(t),zo(e)}};function Eo(t){void 0!==this._$AN?(Co(this),this._$AM=t,Oo(this)):this._$AM=t}function Mo(t,e=!1,o=0){const i=this._$AH,n=this._$AN;if(void 0!==n&&0!==n.size)if(e)if(Array.isArray(i))for(let s=o;s<i.length;s++)Ao(i[s],!1),Co(i[s]);else null!=i&&(Ao(i,!1),Co(i));else Ao(this,t)}const zo=t=>{t.type==We&&(t._$AP??=Mo,t._$AQ??=Eo)};class Ho extends Xe{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,e,o){super._$AT(t,e,o),Oo(this),this.isConnected=t._$AU}_$AO(t,e=!0){t!==this.isConnected&&(this.isConnected=t,t?this.reconnected?.():this.disconnected?.()),e&&(Ao(this,t),Co(this))}setValue(t){if(void 0===this._$Ct.strings)this._$Ct._$AI(t,this);else{const e=[...this._$Ct._$AH];e[this._$Ci]=t,this._$Ct._$AI(e,this,0)}}disconnected(){}reconnected(){}}class To{}const Po=new WeakMap,jo=Ge(class extends Ho{render(t){return fe}update(t,[e]){const o=e!==this.G;return o&&void 0!==this.G&&this.rt(void 0),(o||this.lt!==this.ct)&&(this.G=e,this.ht=t.options?.host,this.rt(this.ct=t.element)),fe}rt(t){if(this.isConnected||(t=void 0),"function"==typeof this.G){const e=this.ht??globalThis;let o=Po.get(e);void 0===o&&(o=new WeakMap,Po.set(e,o)),void 0!==o.get(this.G)&&this.G.call(this.ht,void 0),o.set(this.G,t),void 0!==t&&this.G.call(this.ht,t)}else this.G.value=t}get lt(){return"function"==typeof this.G?Po.get(this.ht??globalThis)?.get(this.G):this.G?.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}});var Lo=Object.defineProperty,Bo=Object.getOwnPropertyDescriptor,Io=(t,e,o,i)=>{for(var n,s=i>1?void 0:i?Bo(e,o):e,r=t.length-1;r>=0;r--)(n=t[r])&&(s=(i?n(e,o,s):n(s))||s);return i&&s&&Lo(e,o,s),s};let Do=class extends He{constructor(){super(),this.index=0,this.value=0,this.labelList=[["0",0]],this.disabled=!1,this.selectRef=new To}connectedCallback(){super.connectedCallback(),this.index=this.index<this.labelList.length?this.index:0,this.index<this.labelList.length&&(this.value=this.labelList[this.index][1])}render(){return ge`
      <div class="select-wrapper">
        <select 
          ${jo(this.selectRef)}
          ?disabled="${this.disabled}"
          @change="${this._handleChange}"
        >
          ${this.labelList.map(([t,e],o)=>ge`
            <option 
              value="${e}" 
              ?selected="${o===this.index}"
            >
              ${t}
            </option>
          `)}
        </select>
        <span class="select-icon"></span>
      </div>
    `}_handleChange(t){const e=t.target,o=e.selectedIndex,i=e.options[o];this.index=o,o<this.labelList.length?this.value=this.labelList[o][1]:this.value=i.value,this.dispatchEvent(new CustomEvent("change",{detail:{value:i.value,label:i.text,index:o},bubbles:!0,composed:!0}))}getValue(){if(this.selectRef.value){const t=this.selectRef.value.value,e=Array.from(this.selectRef.value.options).findIndex(e=>e.value===t);return-1!==e&&e<this.labelList.length?this.labelList[e][1]:t}return this.value}setValue(t){const e=this.labelList.findIndex(e=>e[1]===t);this.selectRef.value&&(this.selectRef.value.value=String(-1!==e?this.labelList[e][1]:t)),this.value=t,-1!==e&&(this.index=e)}};Do.styles=Ht`
    :host {
      display: inline-block;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
      font-size: 14px;
    }

    .select-wrapper {
      position: relative;
      display: inline-block;
    }

    select {
      width: 100%;
      padding: 8px 12px;
      border: 1px solid #ccc;
      border-radius: 4px;
      background-color: #fff;
      font-size: inherit;
      cursor: pointer;
      box-sizing: border-box;
      appearance: none;
      padding-right: 30px;
    }

    select:focus {
      outline: none;
      border-color: #007cba;
      box-shadow: 0 0 0 2px rgba(0, 124, 186, 0.3);
    }

    select:disabled {
      background-color: #f5f5f5;
      color: #999;
      cursor: not-allowed;
    }

    .select-icon {
      position: absolute;
      right: 8px;
      top: 50%;
      transform: translateY(-50%);
      pointer-events: none;
      color: #666;
    }

    .select-wrapper::after {
      content: '';
      position: absolute;
      right: 10px;
      top: 50%;
      transform: translateY(-50%) rotate(0deg);
      border-left: 5px solid transparent;
      border-right: 5px solid transparent;
      border-top: 5px solid #666;
      pointer-events: none;
    }
  `,Io([Be({type:Number,reflect:!0})],Do.prototype,"index",2),Io([Be({reflect:!0})],Do.prototype,"value",2),Io([Be({type:Array,attribute:"label-list"})],Do.prototype,"labelList",2),Io([Be({type:Boolean})],Do.prototype,"disabled",2),Do=Io([Pe("hm-select")],Do);const No=Object.freeze(Object.defineProperty({__proto__:null,get HmSelect(){return Do}},Symbol.toStringTag,{value:"Module"}));var Uo=Object.defineProperty,Ro=Object.getOwnPropertyDescriptor,Vo=(t,e,o,i)=>{for(var n,s=i>1?void 0:i?Ro(e,o):e,r=t.length-1;r>=0;r--)(n=t[r])&&(s=(i?n(e,o,s):n(s))||s);return i&&s&&Uo(e,o,s),s};let Fo=class extends He{constructor(){super(...arguments),this._isDragging=!1,this._startX=0,this._currentTranslate=0,this._prevTranslate=0,this._animationId=0,this._velocity=0,this._lastX=0,this._lastTime=0,this._isOpen=!1,this.rightButtonName="右侧按钮",this.rightButtonCallback=function(){tt.log("cell","点击了一下")},this.leftActionsWidth=0,this.rightActionsWidth=0,this.onDragStart=t=>{t.preventDefault(),this.startDrag(t.clientX),this.sliderElement.style.cursor="grabbing",this.sliderElement.style.transition="none"},this.onTouchStart=t=>{t.preventDefault(),this.startDrag(t.touches[0].clientX),this.sliderElement.style.transition="none"},this.startDrag=t=>{this._isDragging=!0,this._startX=t,this._lastX=t,this._lastTime=Date.now(),this._isOpen=Math.abs(this._prevTranslate)>10,this.calculateActionWidths()},this.onDragMove=t=>{this._isDragging&&(t.preventDefault(),this.handleMove(t.clientX))},this.onTouchMove=t=>{this._isDragging&&(t.preventDefault(),this.handleMove(t.touches[0].clientX))},this.onDragEnd=()=>{this.finishDrag(),this.sliderElement.style.cursor="grab"},this.onTouchEnd=()=>{this.finishDrag()}}firstUpdated(){this.calculateActionWidths(),this.addEventListeners()}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListeners()}calculateActionWidths(){this.leftActionsWidth=this.leftActions?this.leftActions.offsetWidth:0,this.rightActionsWidth=this.rightActions?this.rightActions.offsetWidth:0}addEventListeners(){this.sliderElement.addEventListener("mousedown",this.onDragStart),this.sliderElement.addEventListener("touchstart",this.onTouchStart,{passive:!1}),document.addEventListener("mousemove",this.onDragMove),document.addEventListener("touchmove",this.onTouchMove,{passive:!1}),document.addEventListener("mouseup",this.onDragEnd),document.addEventListener("touchend",this.onTouchEnd)}removeEventListeners(){this.sliderElement.removeEventListener("mousedown",this.onDragStart),this.sliderElement.removeEventListener("touchstart",this.onTouchStart),document.removeEventListener("mousemove",this.onDragMove),document.removeEventListener("touchmove",this.onTouchMove),document.removeEventListener("mouseup",this.onDragEnd),document.removeEventListener("touchend",this.onTouchEnd)}handleMove(t){const e=Date.now(),o=e-this._lastTime;o>0&&(this._velocity=(t-this._lastX)/o,this._lastX=t,this._lastTime=e);const i=t-this._startX;let n=this._prevTranslate+i;if(n>this.leftActionsWidth){const t=n-this.leftActionsWidth;n=this.leftActionsWidth+this.easeOut(t,30)}else if(n<-this.rightActionsWidth){const t=n+this.rightActionsWidth;n=-this.rightActionsWidth+this.easeOut(t,30)}this._currentTranslate=n,this.updateSliderPosition()}easeOut(t,e){return.2*t}finishDrag(){this._isDragging=!1,this.sliderElement.style.transition="transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)";let t=0;if(t=this._currentTranslate>5||this._currentTranslate>0&&this._velocity>.1?this.leftActionsWidth:this._currentTranslate<-5||this._currentTranslate<0&&this._velocity<-.1?-this.rightActionsWidth:0,this._isOpen){const e=5;t=this._prevTranslate>0&&this._currentTranslate<this._prevTranslate-e||this._prevTranslate<0&&this._currentTranslate>this._prevTranslate+e?0:this._prevTranslate}this._currentTranslate=t,this._prevTranslate=t,this.updateSliderPosition(),this._velocity=0}updateSliderPosition(){this._animationId&&cancelAnimationFrame(this._animationId),this._animationId=requestAnimationFrame(()=>{if(this.sliderElement.style.transform=`translateX(${this._currentTranslate}px)`,this._currentTranslate>0){const t=Math.min(this._currentTranslate/this.leftActionsWidth,1);this.leftActions.style.transform=`translateX(${100*t-100}%)`,this.rightActions.style.transform="translateX(100%)"}else if(this._currentTranslate<0){const t=Math.min(-this._currentTranslate/this.rightActionsWidth,1);this.rightActions.style.transform=`translateX(${100-100*t}%)`,this.leftActions.style.transform="translateX(-100%)"}else this.leftActions.style.transform="translateX(-100%)",this.rightActions.style.transform="translateX(100%)"})}render(){return ge`
<div class="swipe-container">
  <div class="actions left-actions">
    <slot name="left-actions"> </slot>
  </div>
  <div class="slider">
    <slot><hm-cell class="content"></hm-cell></slot>
  </div>
  <div class="actions right-actions">
    <slot name="right-actions">
      <hm-button type="primary" @hm-button-click="${this.rightButtonCallback}"
        >${this.rightButtonName}</hm-button
      >
    </slot>
  </div>
</div>
`}};Fo.styles=Ht`
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
    `,Vo([Be()],Fo.prototype,"_isDragging",2),Vo([Be()],Fo.prototype,"_startX",2),Vo([Be()],Fo.prototype,"_currentTranslate",2),Vo([Be()],Fo.prototype,"_prevTranslate",2),Vo([Be()],Fo.prototype,"_animationId",2),Vo([Be()],Fo.prototype,"_velocity",2),Vo([Be()],Fo.prototype,"_lastX",2),Vo([Be()],Fo.prototype,"_lastTime",2),Vo([Be()],Fo.prototype,"_isOpen",2),Vo([Be()],Fo.prototype,"rightButtonName",2),Vo([Be()],Fo.prototype,"rightButtonCallback",2),Vo([Ie(".slider")],Fo.prototype,"sliderElement",2),Vo([Ie(".content")],Fo.prototype,"contentElement",2),Vo([Ie(".left-actions")],Fo.prototype,"leftActions",2),Vo([Ie(".right-actions")],Fo.prototype,"rightActions",2),Fo=Vo([Pe("hm-swipe-cell")],Fo);const qo=Object.freeze(Object.defineProperty({__proto__:null,get HmSwipeCell(){return Fo}},Symbol.toStringTag,{value:"Module"}));var Wo=Object.defineProperty,Go=Object.getOwnPropertyDescriptor,Xo=(t,e,o,i)=>{for(var n,s=i>1?void 0:i?Go(e,o):e,r=t.length-1;r>=0;r--)(n=t[r])&&(s=(i?n(e,o,s):n(s))||s);return i&&s&&Wo(e,o,s),s};let Jo=class extends He{constructor(){super(...arguments),this.checked=!1,this.disabled=!1,this.loading=!1,this.color="#1890ff",this.openContent="",this.closeContent="",this.openIcon="",this.closeIcon=""}change(){this.disabled||this.loading||(this.checked=!this.checked,this.dispatchEvent(new CustomEvent("hm-switch-change",{detail:{checked:this.checked},bubbles:!0,composed:!0})))}render(){return ge`
<div
  class="switch ${this.disabled?"disabled":""} ${this.loading?"loading":""} ${this.checked?"checked":""}"
  @click="${this.change}"
  style="--switch-color: ${this.color}"
>
  <div class="switch-inner">
    ${this.checked?this.openIcon?ge`<hm-icon icon="${this.openIcon}" size="14px"></hm-icon>`:this.openContent?ge`<span>${this.openContent}</span>`:"":this.closeIcon?ge`<hm-icon icon="${this.closeIcon}" size="14px"></hm-icon>`:this.closeContent?ge`<span>${this.closeContent}</span>`:""}
  </div>
</div>
        `}};Jo.styles=Ht`
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
    `,Xo([Be({type:Boolean})],Jo.prototype,"checked",2),Xo([Be({type:Boolean})],Jo.prototype,"disabled",2),Xo([Be({type:Boolean})],Jo.prototype,"loading",2),Xo([Be({type:String})],Jo.prototype,"color",2),Xo([Be({type:String,attribute:"open-content"})],Jo.prototype,"openContent",2),Xo([Be({type:String,attribute:"close-content"})],Jo.prototype,"closeContent",2),Xo([Be({type:String,attribute:"open-icon"})],Jo.prototype,"openIcon",2),Xo([Be({type:String,attribute:"close-icon"})],Jo.prototype,"closeIcon",2),Jo=Xo([Pe("hm-switch")],Jo);const Zo=Object.freeze(Object.defineProperty({__proto__:null,get HmSwitch(){return Jo}},Symbol.toStringTag,{value:"Module"}));var Yo=Object.defineProperty,Ko=Object.getOwnPropertyDescriptor,Qo=(t,e,o,i)=>{for(var n,s=i>1?void 0:i?Ko(e,o):e,r=t.length-1;r>=0;r--)(n=t[r])&&(s=(i?n(e,o,s):n(s))||s);return i&&s&&Yo(e,o,s),s};let ti=class extends He{constructor(){super(...arguments),this.maxHeight="500px",this.items=[],this.titleContent="标题内容",this.expanded=!1}togglePanel(){this.expanded=!this.expanded}render(){return ge`
      <div class="accordion-container" style="max-height: ${this.maxHeight}">
        <div class="accordion-header" @click=${this.togglePanel}>
          <slot name="header">${this.titleContent}</slot>
          <div class="accordion-toggle">
            ${this.expanded?ge`<hm-icon icon="arrow-up"></hm-icon>`:ge`<hm-icon icon="arrow-down"></hm-icon>`}
          </div>
        </div>
        
        <div class="accordion-content" ?hidden=${!this.expanded}>
          ${this.items.length>0?this.items.map(t=>ge`<div class="accordion-item">${t}</div>`):ge`<slot></slot>`}
        </div>
        
        <div class="accordion-footer" ?hidden=${!this.expanded}>
          <slot name="footer">
            <hm-button @hm-button-click="${()=>{this.expanded=!1}}">关闭</hm-button>
          </slot>
        </div>
      </div>
    `}};ti.styles=Ht`
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
  `,Qo([Be({type:String,attribute:"max-height"})],ti.prototype,"maxHeight",2),Qo([Be({type:Array})],ti.prototype,"items",2),Qo([Be({type:String,attribute:"title-content"})],ti.prototype,"titleContent",2),Qo([Be({type:Boolean})],ti.prototype,"expanded",2),ti=Qo([Pe("hm-accordion")],ti);const ei=Object.freeze(Object.defineProperty({__proto__:null,get HmAccordion(){return ti}},Symbol.toStringTag,{value:"Module"}));var oi=Object.defineProperty,ii=Object.getOwnPropertyDescriptor,ni=(t,e,o,i)=>{for(var n,s=i>1?void 0:i?ii(e,o):e,r=t.length-1;r>=0;r--)(n=t[r])&&(s=(i?n(e,o,s):n(s))||s);return i&&s&&oi(e,o,s),s};let si=class extends He{constructor(){super(...arguments),this.type="text",this.icon="",this.label="输入框",this.placeholder="",this.enable=!0,this.readonly=!1,this.value=""}_handleKeyDown(t){t.stopPropagation()}_handleInput(t){const e=t.target;this.value=e.value,this.dispatchEvent(new CustomEvent("hm-input-change",{detail:{value:this.value},bubbles:!0,composed:!0}))}render(){return ge`
<div class="input-container">
  <span class="label">${this.label}</span>
  ${this.icon?ge`<hm-icon icon="${this.icon}" class="icon"></hm-icon>`:""}
  <input 
    type="${this.type}"
    value="${this.value}"
    ?disabled="${!this.enable}"
    ?readonly="${this.readonly}"
    placeholder="${this.placeholder}"
    style="padding-left: ${this.icon?"24px":"8px"};"
    @keydown="${this._handleKeyDown}"
    @input="${this._handleInput}"
  />
  <slot name="right">
  </slot>
</div>
    `}};si.styles=Ht`
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
`,ni([Be({type:String})],si.prototype,"type",2),ni([Be({type:String})],si.prototype,"icon",2),ni([Be({type:String})],si.prototype,"label",2),ni([Be({type:String})],si.prototype,"placeholder",2),ni([Be({type:Boolean})],si.prototype,"enable",2),ni([Be({type:Boolean})],si.prototype,"readonly",2),ni([Be()],si.prototype,"value",2),si=ni([Pe("hm-input")],si);const ri=Object.freeze(Object.defineProperty({__proto__:null,get HmInput(){return si}},Symbol.toStringTag,{value:"Module"}));var li=Object.defineProperty,ai=Object.getOwnPropertyDescriptor,ci=(t,e,o,i)=>{for(var n,s=i>1?void 0:i?ai(e,o):e,r=t.length-1;r>=0;r--)(n=t[r])&&(s=(i?n(e,o,s):n(s))||s);return i&&s&&li(e,o,s),s};let hi=class extends He{constructor(){super(...arguments),this.isOpen=!1,this.dialog=this}open(){this.isOpen=!0,this.dispatchEvent(new CustomEvent("hm-dialog-open"))}close(){this.isOpen=!1,this.dispatchEvent(new CustomEvent("hm-dialog-close"))}confirm(){this.close(),this.dispatchEvent(new CustomEvent("hm-dialog-confirm"))}cancel(){this.close(),this.dispatchEvent(new CustomEvent("hm-dialog-cancel"))}updated(t){t.has("isOpen")&&(this.isOpen?this.style.display="block":this.style.display="none")}render(){return ge`
<div class="overlay"
@click="${this.close}"
></div>
<div class="content">
    <slot></slot>
    <div class="footer">
        <slot name="footer">
            <hm-button @hm-button-click="${()=>{this.cancel()}}">取消</hm-button>
            <hm-button @hm-button-click="${()=>{this.confirm()}}">确定</hm-button>
        </slot>
    </div>
</div>
    `}};hi.styles=Ht`
        :host {
            display: none;
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: 999999;
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
            color:rgb(0,0,0)
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
    `,ci([Be({type:Boolean,attribute:"isopen"})],hi.prototype,"isOpen",2),hi=ci([Pe("hm-dialog")],hi);const di=Object.freeze(Object.defineProperty({__proto__:null,get HmDialog(){return hi}},Symbol.toStringTag,{value:"Module"})),pi=Object.freeze(Object.defineProperty({__proto__:null,hm_accordion:ei,hm_button:wo,hm_cell:ko,hm_dialog:di,hm_icon:no,hm_input:ri,hm_menu:co,hm_move_panel:qe,hm_notification:mo,hm_select:No,hm_swipe_cell:qo,hm_switch:Zo},Symbol.toStringTag,{value:"Module"}));let ui=document.createElement("div");function gi(){ui.id="hmMenuHolder";let t=document.querySelector("#functionHolderImg");console.debug(t),console.debug(ui),null!==t&&t.parentElement.insertAdjacentElement("afterend",ui)}const mi=Object.freeze(Object.defineProperty({__proto__:null,initMenuHolder:gi,menuHolder:ui},Symbol.toStringTag,{value:"Module"}));let fi=document.createElement("div");function vi(){fi.id="hmMovePanelHolder",fi.style.zIndex="999999",document.body.append(fi)}const bi=Object.freeze(Object.defineProperty({__proto__:null,initMovePanelHolder:vi,movePanelHolder:fi},Symbol.toStringTag,{value:"Module"}));let yi=document.createElement("div");function wi(){yi.id="hmNotificationHolder",yi.style.zIndex="999999",document.body.append(yi)}const xi=Object.freeze(Object.defineProperty({__proto__:null,initNotificationHolder:wi,notificationHolder:yi},Symbol.toStringTag,{value:"Module"}));let $i=document.createElement("div");function _i(){$i.id="hmDialogHolder",$i.style.zIndex="999999",document.body.append($i)}const Si=Object.freeze(Object.defineProperty({__proto__:null,dialogHolder:$i,initDialogHolder:_i},Symbol.toStringTag,{value:"Module"}));var ki=Object.defineProperty,Ai=(t,e,o,i)=>{for(var n,s=void 0,r=t.length-1;r>=0;r--)(n=t[r])&&(s=n(e,o,s)||s);return s&&ki(e,o,s),s};class Ci extends He{constructor(){super(...arguments),this.dialogOpen=!1,this.message="请做出选择",this.closeCallback=null,this.cancelCallback=null,this.confirmCallback=null}handelClick(){this.dispatchEvent(new CustomEvent("hmclick"))}static{this.styles=Ht`
`}render(){return ge`
<hm-dialog
  ?isopen="${this.dialogOpen}"
  @hm-dialog-close="${()=>{this.dialogOpen=!1}}"
  @hm-dialog-cancel="${()=>{this.cancelCallback&&this.cancelCallback()}}"
  @hm-dialog-confirm="${()=>{this.confirmCallback&&this.confirmCallback()}}"
>
  <p>${this.message}</p>
</hm-dialog>
        `}}Ai([Be({type:Boolean})],Ci.prototype,"dialogOpen"),Ai([Be({type:String})],Ci.prototype,"message"),Ai([Be({type:Function})],Ci.prototype,"closeCallback"),Ai([Be({type:Function})],Ci.prototype,"cancelCallback"),Ai([Be({type:Function})],Ci.prototype,"confirmCallback");const Oi=document.createElement("hm-dialog-app");async function Ei(){customElements.define("hm-dialog-app",Ci),Oi.dialogOpen=!1,Oi.message="请做出选择",Oi.closeCallback=null,Oi.cancelCallback=null,Oi.confirmCallback=null,$i.append(Oi)}const Mi=Object.freeze(Object.defineProperty({__proto__:null,HmDialogApp:Ci,dialogApp:Oi,initDialogApp:Ei},Symbol.toStringTag,{value:"Module"})),zi={success(t,e,o=3e3){let i=document.createElement("hm-notification");i.title=t,i.content=e,i.displayTime=o,i.backgroundColor="rgba(57, 231, 34, 0.7)",i.color="rgb(255,255,255)",yi.append(i)},warning(t,e,o=3e3){let i=document.createElement("hm-notification");i.title=t,i.content=e,i.displayTime=o,i.backgroundColor="rgba(255,193,7,0.7)",i.color="rgb(255,255,255)",yi.append(i)},error(t,e,o=3e3){let i=document.createElement("hm-notification");i.title=t,i.content=e,i.displayTime=o,i.backgroundColor="rgba(255,0,0,0.7)",i.color="rgb(255,255,255)",yi.append(i)},normal(t,e,o=3e3){let i=document.createElement("hm-notification");i.title=t,i.content=e,i.displayTime=o,i.backgroundColor="rgba(33,33,33,0.7)",i.color="rgb(255,255,255)",yi.append(i)}};function Hi(t,e,o,i){Oi.message=t,Oi.confirmCallback=e||null,Oi.cancelCallback=o||null,Oi.closeCallback=i||null,Oi.dialogOpen=!0,console.debug("弹窗已打开",Oi)}const Ti=Object.freeze(Object.defineProperty({__proto__:null,confirm:Hi,notice:zi},Symbol.toStringTag,{value:"Module"}));var Pi=Object.defineProperty,ji=(t,e,o,i)=>{for(var n,s=void 0,r=t.length-1;r>=0;r--)(n=t[r])&&(s=n(e,o,s)||s);return s&&Pi(e,o,s),s};const Li="hm-script-app";class Bi extends He{constructor(){super(),this.scriptName="",this.scriptUrl="",this.scriptEnable=!0,this.scriptIngected=!1,this.dialogOpen=!1,this.isUpdate=!1,this.storeSnap=G.snapshot(X),G.subscribe(X,()=>{this.storeSnap=G.snapshot(X),this.requestUpdate()})}render(){return ge`
<hm-dialog ?isopen="${this.dialogOpen}"
  @hm-dialog-close="${()=>{this.dialogOpen=!1}}"
  @hm-dialog-confirm="${()=>{if(""==this.scriptName.trim()||""==this.scriptUrl.trim())return void zi.error(Li,"请填写完整的脚本信息");this.scriptEnable=!0,this.scriptIngected=!1;let t=new vt(this.scriptName,this.scriptUrl,this.scriptEnable),e=!1;e=this.isUpdate?yt(t):bt(t),e?zi.success(Li,"脚本添加成功"):zi.error(Li,"脚本添加失败"),this.isUpdate=!1,this.dialogOpen=!1,this.storeSnap=G.snapshot(X)}}"
>
  <h2>修改或添加脚本</h2>
  <hm-input
    label=" 脚本名称"
    placeholder="请输入脚本名称"
    value="${this.scriptName}"
    @hm-input-change="${t=>{this.scriptName=t.detail.value}}"
  >
  </hm-input>
  <hm-input
    label="脚本链接"
    placeholder="请输入https的脚本链接"
    value="${this.scriptUrl}"
    @hm-input-change="${t=>{this.scriptUrl=t.detail.value}}"
  >
  </hm-input>

</hm-dialog>

<hm-accordion>
    <span slot="header"> 脚本列表 </span>
    ${this.storeSnap.scriptList.map(t=>ge`
    <hm-swipe-cell>
      <div slot="left-actions">
        <hm-button
          icon="delete"
          @hm-button-click="${()=>{wt(t)?zi.success(Li,"脚本删除成功"):zi.error(Li,"脚本已经不在脚本列表中"),this.storeSnap=G.snapshot(X)}}"
          >删除</hm-button
        >
      </div>
      <hm-cell title-name="${t.name}" descripthion="${t.url}">
        <hm-switch
          ?checked="${t.enable}"
          @hm-switch-change="${e=>{yt(new vt(t.name,t.url,e.detail.checked))?zi.success(Li,"脚本修改成功"):zi.error(Li,"脚本修改失败")}}"
        ></hm-switch>
      </hm-cell>
      <div slot="right-actions">
        <hm-button
          icon="edit"
          @hm-button-click="${()=>{this.scriptName=t.name,this.scriptUrl=t.url,this.scriptEnable=t.enable,this.isUpdate=!0,this.dialogOpen=!0}}"
          >修改</hm-button
        >
        <hm-button
          icon="run"
          ?enable="${!ft.includes(t.url)}"
          @hm-button-click="${()=>{_t(t)?zi.success(Li,"脚本运行成功"):zi.error(Li,"脚本运行失败,脚本已经在运行了")}}"
          >运行</hm-button
        >
      </div>
    </hm-swipe-cell>
    `)}
    <div slot="footer">
      <hm-button
        icon="refresh"
        @click="${()=>{Z(),this.storeSnap=G.snapshot(X)}}"
      >
        刷新
      </hm-button>
      <hm-button
        icon="post-add"
        @click="${()=>{this.dialogOpen=!0}}"
      >
        添加
      </hm-button>
      <hm-button
        icon="save"
        @click="${()=>{J()}}">
            保存
        </hm-button>
    </div>
</hm-accordion>`}}ji([Be({type:String})],Bi.prototype,"scriptName"),ji([Be({type:String})],Bi.prototype,"scriptUrl"),ji([Be({type:Boolean})],Bi.prototype,"scriptEnable"),ji([Be({type:Boolean})],Bi.prototype,"scriptIngected"),ji([Be({type:Boolean})],Bi.prototype,"dialogOpen");const Ii={name:"hortimagic",private:!1,version:"1.1.0",changelog:"修复了单元格组件拼写错误的bug",author:"Narlen",description:"园艺魔法，花园插件",keywords:["iirose","plugins","hortimagic"],repository:{type:"git",url:"https://github.com/NarlenHua/hortimagic.git"},license:"MIT",type:"module",scripts:{dev:"vite",build:"tsc && vite build",preview:"vite preview"},dependencies:{lit:"^3.3.1",terser:"^5.44.0",valtio:"^2.2.0","vite-plugin-dts":"^4.5.4"},devDependencies:{"@types/node":"^24.9.1",typescript:"~5.9.3",vite:"^7.1.7"},main:"dist/Horticraft.life.js",module:"dist/HortiCraft.es.js",typings:"dist/index.d.ts",types:"dist/index.d.ts",files:["dist","src/components","types"]};class Di extends He{constructor(){super(...arguments),this.storeSnap=G.snapshot(X)}static{this.styles=Ht`
        .config-item {
            margin: 10px 0;
        }
    `}render(){return ge`
            <div class="config-item">
                <hm-cell title-name="自动保存设置" description="修改设置或脚本列表后，将自动保存设置。"> 
                    <hm-switch 
                        ?checked="${this.storeSnap.autoSave}"
                        @hm-switch-change="${t=>{X.autoSave=t.detail.checked,J()}}"
                    ></hm-switch>
                </hm-cell>
            </div>
            
            <div class="config-item">
                <hm-cell title-name="允许LOG输出" description="是否允许LOG级别的日志输出"> 
                    <hm-switch 
                        ?checked="${this.storeSnap.logFlag.log}"
                        @hm-switch-change="${t=>{X.logFlag.log=t.detail.checked}}"
                    ></hm-switch>
                </hm-cell>
            </div>
            
            <div class="config-item">
                <hm-cell title-name="允许INFO输出" description="是否允许INFO级别的日志输出"> 
                    <hm-switch 
                        ?checked="${this.storeSnap.logFlag.info}"
                        @hm-switch-change="${t=>{X.logFlag.info=t.detail.checked}}"
                    ></hm-switch>
                </hm-cell>
            </div>
            
            <div class="config-item">
                <hm-cell title-name="允许DEBUG输出" description="是否允许DEBUG级别的日志输出"> 
                    <hm-switch 
                        ?checked="${this.storeSnap.logFlag.debug}"
                        @hm-switch-change="${t=>{X.logFlag.debug=t.detail.checked}}"
                    ></hm-switch>
                </hm-cell>
            </div>
            
            <div class="config-item">
                <hm-cell title-name="允许WARN输出" description="是否允许WARN级别的日志输出"> 
                    <hm-switch 
                        ?checked="${this.storeSnap.logFlag.warn}"
                        @hm-switch-change="${t=>{X.logFlag.warn=t.detail.checked}}"
                    ></hm-switch>
                </hm-cell>
            </div>
            
            <div class="config-item">
                <hm-cell title-name="允许ERROR输出" description="是否允许ERROR级别的日志输出"> 
                    <hm-switch 
                        ?checked="${this.storeSnap.logFlag.error}"
                        @hm-switch-change="${t=>{X.logFlag.error=t.detail.checked}}"
                    ></hm-switch>
                </hm-cell>
            </div>
            
            <div class="config-item">
                    <hm-input
                        label="日志列表长度"
                        type="number"
                        .value="${this.storeSnap.logListLength}"
                        @hm-input-change="${t=>{const e=parseInt(t.detail.value)||100;X.logListLength=e,tt.debug("log list length changed:",e)}}"
                    ></hm-input>
            </div>
`}}var Ni=Object.defineProperty;class Ui extends He{constructor(){super(),this.logList=[],this.foldState=new Map,X.logListLength<1&&(X.logListLength=50),Q.on("log",(t,...e)=>{let o="log";if(e.length>0){const t=e[0];"string"==typeof t&&(t.startsWith("[DEBUG]")?o="debug":t.startsWith("[INFO]")?o="info":t.startsWith("[WARN]")?o="warn":t.startsWith("[ERROR]")&&(o="error"))}const i=[...e];i.length>0&&"string"==typeof i[0]&&["[DEBUG]","[INFO]","[WARN]","[ERROR]"].some(t=>i[0].startsWith(t))&&i.shift();const n={timestamp:new Date,level:o,tag:t,message:i};for(;this.logList.length>=X.logListLength;)this.logList.shift();this.logList.push(n),this.requestUpdate()})}static{this.styles=Ht`
    .log-container {
        height: 400px;
        overflow-y: auto;
        padding: 10px;
        font-family: monospace;
        background-color: #f5f5f5;
        border: 1px solid #ddd;
    }
    
    .log-entry {
        padding: 8px 0;
        border-bottom: 1px solid #eee;
        display: flex;
        flex-direction: column;
        margin-bottom: 10px; /* 增加日志条目之间的间距 */
    }
    
    .log-header {
        display: flex;
        gap: 10px;
        align-items: center;
    }
    
    .timestamp {
        color: #999;
        min-width: 100px;
        flex-shrink: 0;
        font-size: 12px; /* 调整时间戳字体大小 */
    }
    
    .level {
        min-width: 50px;
        flex-shrink: 0;
        font-weight: bold;
        font-size: 14px; /* 调整日志级别字体大小 */
    }
    
    .level.debug { color: #0099cc; }
    .level.info { color: #009900; }
    .level.warn { color: #ff9900; }
    .level.error { color: #ff3333; }
    
    .tag {
        color: #666;
        font-weight: bold;
        min-width: 80px;
        flex-shrink: 0;
        font-size: 14px; /* 调整标签字体大小 */
    }
    
    .message {
        flex: 1;
        word-break: break-word;
        margin-top: 4px;
        max-height: 60px; /* 限制高度，触发折叠 */
        overflow: hidden;
        cursor: pointer;
        position: relative;
        display: block; /* 确保每条消息独占一行 */
        // 强制显示滚动条
        scrollbar-width: auto; /* Firefox */
        -ms-overflow-style: scrollbar; /* IE and Edge */
        overflow-y: scroll; /* 强制显示垂直滚动条 */
        font-size: 14px; /* 调整消息字体大小 */
        line-height: 1.5; /* 调整行高 */
        background-color: #fff; /* 设置背景色 */
        padding: 5px; /* 添加内边距 */
        border-radius: 4px; /* 圆角 */
    }
    
    .message.collapsed::after {
        content: " ...";
        color: #999;
        position: absolute;
        bottom: 0;
        right: 0;
        background: linear-gradient(to right, transparent, #f5f5f5 70%);
    }
    
    .message.expanded {
        max-height: none;
        overflow: visible;
    }
    
    .controls {
        padding: 10px;
        display: flex;
        gap: 10px;
        background-color: #eaeaea; /* 设置控制区域背景色 */
        border-bottom: 1px solid #ddd; /* 添加下边框 */
    }
    
    .clear-btn {
        background: #ff3333;
        color: white;
        border: none;
        padding: 5px 10px;
        cursor: pointer;
        border-radius: 3px;
    }
    
    .clear-btn:hover {
        background: #cc0000;
    }
`}render(){return ge`
            <div class="controls">
                <button class="clear-btn" @click="${this.clearLogs}">清空日志</button>
                <span>共 ${this.logList.length} 条日志</span>
            </div>
            <div class="log-container">
                ${this.logList.map(t=>{const e=`${t.timestamp.getTime()}-${t.tag}-${t.level}`,o=this.foldState.get(e)??!1,i=t.message.map(t=>"object"==typeof t?JSON.stringify(t):String(t)).join(" "),n=i.length>100;return ge`
                        <div class="log-entry">
                            <div class="log-header">
                                <span class="timestamp">${this.formatTime(t.timestamp)}</span>
                                <span class="level ${t.level}">[${t.level.toUpperCase()}]</span>
                                <span class="tag">${t.tag}</span>
                            </div>
                            <div 
                                class="message ${o||!n?"expanded":"collapsed"}"
                                @click="${()=>this.toggleFold(e)}"
                            >
                                ${o||!n?i:i.substring(0,100)}
                            </div>
                        </div>
                    `})}
            </div>
        `}formatTime(t){return`${String(t.getHours()).padStart(2,"0")}:${String(t.getMinutes()).padStart(2,"0")}:${String(t.getSeconds()).padStart(2,"0")}.${String(t.getMilliseconds()).padStart(3,"0")}`}clearLogs(){this.logList=[],this.requestUpdate()}toggleFold(t){const e=this.foldState.get(t)??!1;this.foldState.set(t,!e),this.requestUpdate()}}async function Ri(){try{Y(),wi(),_i(),await Ei(),gi(),vi(),zi.normal(Ii.name,"注入网络钩子函数"),await nt(),zi.normal(Ii.name,"注入钩子函数"),dt(),ut(),zi.normal(Ii.name,"注入脚本"),St(),zi.normal(Ii.name,"生成菜单");let t=document.createElement("hm-menu");t.content="HortiMagic",t.isMenuItem=!1;let e=function(){customElements.define("hm-config-app",Di);let t=document.createElement("hm-move-panel");t.titleContent="设置",t.icon="config",t.leftButtonText="读取",t.leftIcon="load",t.addEventListener("left-button-click",function(){Z()}),t.rightButtonText="保存",t.rightIcon="save",t.addEventListener("right-button-click",function(){J()}),fi.appendChild(t),t.innerHTML="\n        <hm-config-app></hm-config-app>\n    ";let e=document.createElement("hm-menu");return e.content="设置",e.isMenuItem=!0,e.icon="config",e.addEventListener("hm-menu-click",function(){t.putTopToggel()}),e}(),o=function(){customElements.define("hm-log-app",Ui);let t=document.createElement("hm-move-panel");t.titleContent="日志",t.icon="log",t.width=400,fi.appendChild(t),t.innerHTML="<hm-log-app></hm-log-app>";let e=document.createElement("hm-menu");return e.content="日志",e.isMenuItem=!0,e.icon="log",e.addEventListener("hm-menu-click",function(){t.putTopToggel()}),e}(),i=function(){customElements.define("hm-script-app",Bi);let t=document.createElement("hm-move-panel");t.titleContent="脚本管理",t.icon="js",t.leftButtonText="读取",t.leftIcon="load",t.addEventListener("left-button-click",function(){Z()}),t.rightButtonText="保存",t.rightIcon="save",t.addEventListener("right-button-click",function(){J()}),fi.appendChild(t),t.innerHTML="<hm-script-app> </hm-script-app>\n    ";let e=document.createElement("hm-menu");return e.content="脚本管理",e.isMenuItem=!0,e.icon="js",e.addEventListener("hm-menu-click",function(){t.putTopToggel()}),e}();t.addEventListener("hm-menu-click",function(){e.flag=t.flag,o.flag=t.flag,i.flag=t.flag}),ui.append(t,e,o,i),zi.success(Ii.name,`${Ii.version} 已加载`)}catch(t){console.error(t)}}((t,e,o)=>{for(var i,n=void 0,s=t.length-1;s>=0;s--)(i=t[s])&&(n=i(e,o,n)||n);n&&Ni(e,o,n)})([Be({type:Array})],Ui.prototype,"logList");const Vi=Object.freeze(Object.defineProperty({__proto__:null,init:Ri},Symbol.toStringTag,{value:"Module"})),Fi=Object.freeze(Object.defineProperty({__proto__:null,dialog_app:Mi,main_app:Vi},Symbol.toStringTag,{value:"Module"})),qi=Object.freeze(Object.defineProperty({__proto__:null,dialog:Si,menu:mi,move_panel:bi,notification:xi},Symbol.toStringTag,{value:"Module"})),Wi={name:Ii.name,version:Ii.version,changelog:Ii.changelog,description:Ii.description,author:Ii.author,license:Ii.license,repository:Ii.repository,buildTime:(new Date).toISOString(),ingected:!1};return async function(){await Ri(),Wi.ingected=!0}(),t.apps=Fi,t.components=pi,t.confirm=Hi,t.core=At,t.easy_tools=Ti,t.holders=qi,t.information=Wi,t.logger=tt,t.notice=zi,Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),t}({});
