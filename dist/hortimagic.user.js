// ==UserScript==
// @name         hortimagic
// @namespace    hortimagic
// @version      1.0.4dev4
// @description  园艺魔法，花园插件
// @author       Narlen
// @match        https://iirose.com/messages.html
// @grant        none
// @run-at       onmessage-end
// @license      MIT
// @buildtime    2025-12-22T19:43:50.509Z
// ==/UserScript==
top.window.hortimagic=window.hortimagic=function(t){"use strict";async function e(t){return new Promise(e=>setTimeout(e,t))}function o(t){return t=(t=(t=(t=(t=(t=t.replace("&","&amp;")).replace("<","&lt;")).replace(">","&gt;")).replace('"',"&quot;")).replace("'","&#039;")).replace("\\","&#092;")}function i(t){return t=(t=(t=(t=(t=(t=t.replace("&lt;","<")).replace("&gt;",">")).replace("&quot;",'"')).replace("&#039;","'")).replace("&#092;","\\")).replace("&amp;","&")}function n(){return window.myself?window.myself:null}function s(){return window.uid?window.uid:null}function r(){return window.avatar2&&window.avatarconv?window.avatarconv(window.avatar2):null}function l(){return window.inputcolorhex?window.inputcolorhex:null}const a=Object.freeze(Object.defineProperty({__proto__:null,addStyle:function(t){let e=document.createElement("style");e.innerText=t,document.body.append(e)},changeRoom:function(t){(t=String(t))&&window.Objs.mapHolder?.function?.roomchanger(t)},compressCSS:function(t){return t=(t=(t=(t=(t=t.replace(/\s{2,}/g," ")).replace(/\/\*[\s\S]*?\*\//g,"")).replace(/\s*([{};:,])\s*/g,"$1")).replace(/;\s*}/g,"}")).trim()},compressHTML:function(t){return t=(t=(t=(t=t.replace(/>\s+</g,"><")).replace(/\s{2,}/g," ")).replace(/<!--[\s\S]*?-->/g,"")).trim()},generatePrivateMessageBubble:function(t,e,i){window.privatechatfunc&&window.privatechatfunc([Math.floor(Date.now()/1e3).toString(10),s(),o(n()),o(r()),o(e),o(l()),"",o(l()),"","",i,t,"","","","",""].join(">"))},getAllOnlineUserInfo:function(){let t=window.Objs.mapHolder.Assets.userJson;return t?Object.keys(t).map(e=>{let o=t[e];return{name:o[2],uid:o[8],color:o[3],avatar:o[0],roomId:o[4],personalizedSignature:o[6]}}):null},getOnlineUserInfoById:function(t){t=String(t);let e=window.Objs.mapHolder?.function?.findUserByUid?.(t);return e?{name:e[2],uid:t,color:e[3],avatar:e[0],roomId:e[4],personalizedSignature:e[6]}:null},getRoomId:function(){return window.roomn?window.roomn:null},getRoomInfoById:function(t){let e=window.Objs.mapHolder?.Assets?.roomJson?.[t];if(e){let t=e[5].split("&&").map(t=>t.split(" & ")),o=i(t[0][0]),n=o.indexOf(" ");return{name:e[1],color:e[2],roomPath:e[0].split("_"),description:o.slice(n+1),roomImage:o.slice(0,n),currentUserNum:"number"==typeof e[7]?e[7]:"hidden",ownerName:t[1][0],member:t[4].map(t=>({name:i(t.slice(1)),auth:"0"==t[0]?"member":"1"==t[0]?"admin":"unknow"}))}}return null},getUserInputColor:l,getUserName:n,getUserProfilePictureUrl:r,getUserUid:s,htmlSpecialCharsDecode:i,htmlSpecialCharsEscape:o,sleep:e,switchRoom:function(t){window.Objs.mapHolder?.function?.roomchanger&&window.Objs.mapHolder.function.roomchanger(t)}},Symbol.toStringTag,{value:"Module"}));class c{constructor(){this.timeStamp="",this.headPortrait="",this.name="",this.message="",this.color="",this.gender="",this.uid="",this.designation="",this.messageUid=""}}class h{constructor(){this.timeStamp="",this.headPortrait="",this.name="",this.message="",this.color="",this.gender="",this.uid="",this.messageUid=""}}class d{constructor(){this.messageName="",this.uid="",this.data=""}}class p{constructor(){this.username="",this.avatar="",this.message="",this.color="",this.gender="",this.timeStamp="",this.uid=""}}class u{constructor(){this.privateUID="",this.uid="",this.messageUid="",this.dataUid=""}}class g{constructor(){this.userMessageList=[]}}class m{constructor(){this.result="",this.stockPrice=NaN,this.totalStock=NaN,this.holdingAmount=NaN,this.totalEquity=NaN,this.balance=NaN}}class f{constructor(){this.message=""}}const v=Object.freeze(Object.defineProperty({__proto__:null,Danmu:p,Hidden:d,Private:h,Public:c,Stock:m,System:g,Unkonw:f,Withdrawn:u},Symbol.toStringTag,{value:"Module"}));let y=[];function b(t){return t instanceof c?"public":t instanceof h?"private":t instanceof d?"hidden":t instanceof p?"danmu":t instanceof u?"withdrawn":t instanceof g?"system":t instanceof m?"stock":"unknown"}function _(t){let e=new c,o=t.split(">");return e.timeStamp=o[0],e.headPortrait=o[1],e.name=o[2],e.message=o[3],e.color=o[5],e.gender=o[6],e.uid=o[8],e.designation=o[9],e.messageUid=o[10],e}function w(t){let e=new h,o=t.split(">");return e.timeStamp=o[0].slice(1),e.uid=o[1],e.name=o[2],e.headPortrait=o[3],e.message=o[4],e.color=o[5],e.gender=o[8],e.messageUid=o[10],e}function $(t){let e=new p,o=t.split(">");return e.username=o[0],e.message=o[1],e.color=o[2],e.gender=o[4],e.avatar=o[5],e.timeStamp=o[6],e.uid=o[7],e}function x(t){if(y=[],/^"[^"].*/gs.test(t)){let e=t.slice(1).split("<");for(let t=e.length-1;t>=0;t--)y.push(_(e[t]))}else if(/^"".*/gs.test(t)){let e=t.slice(1).split("<");for(let t=e.length-1;t>=0;t--)y.push(w(e[t]))}else if(/^=.*/gs.test(t)){let e=t.slice(1).split("<");for(let t=e.length-1;t>=0;t--)y.push($(e[t]))}else/^[/]<.*>[0-9|a-z]{13}:.*/gs.test(t)?y.push(function(t){let e,o=new d;return e=t.match(/(?<=^[/]<).*(?=>[0-9|a-z]{13}:.*)/gs),o.messageName=null==e?"":e[0],e=t.match(/(?<=^[/]<.*>)[0-9|a-z]{13}(?=:.*)/gs),o.uid=null==e?"":e[0],e=t.match(/(?<=^[/]<.*>[0-9|a-z]{13}:).*/gs),o.data=null==e?"":e[0],o}(t)):/^v0.*/gs.test(t)?y.push(function(t){let e=new u;return"#"==t[2]?(e.privateUID="",e.uid=t.slice(3,16),e.messageUid=t.slice(17,29),e.dataUid=t.slice(3,29)):(e.privateUID=t.slice(3,16),e.uid=t.slice(17,30),e.messageUid=t.slice(31),e.dataUid=t.slice(17)),e}(t)):/^%\*".*/gs.test(t)?y.push(function(t){let e=new g;return e.userMessageList=t.split("<"),e}(t)):/^>.*/gs.test(t)?y.push(function(t){let e=new m;if(e.result=t[2],"*"==e.result)return e;if(">"==e.result)return e.holdingAmount=parseInt(t.slice(2)),e;if("<"==e.result)return e.balance=parseInt(t.slice(2)),e;{let o=t.split('"');if(5==o.length)return e.stockPrice=parseFloat(o[2]),e.totalStock=parseInt(o[0].slice(1)),e.holdingAmount=parseInt(o[3]),e.totalEquity=parseFloat(o[1]),e.balance=parseFloat(o[4]),e;if(4==o.length)return e.stockPrice=parseFloat(o[1])/parseInt(o[0].slice(1)),e.totalStock=parseInt(o[0].slice(1)),e.holdingAmount=parseInt(o[2]),e.totalEquity=parseFloat(o[1]),e.balance=parseFloat(o[3]),e}return e}(t)):y.push(function(t){let e=new f;return e.message=t,e}(t))}const S=Object.freeze(Object.defineProperty({__proto__:null,decodeMessage:x,judegMessageClass:b,get messageObjList(){return y}},Symbol.toStringTag,{value:"Module"}));class k{constructor(){this.events={}}on(t,e){this.events[t]||(this.events[t]=[]),this.events[t].push(e)}off(t,e){this.events[t]&&(e?this.events[t]=this.events[t].filter(t=>t!==e):delete this.events[t])}once(t,e){const o=(...i)=>{e(...i),this.off(t,o)};this.on(t,o)}emit(t,...e){const o=this.events[t];return!(!o||0===o.length)&&([...o].forEach(t=>t(...e)),!0)}}const C=Object.freeze(Object.defineProperty({__proto__:null,EventEmitter:k},Symbol.toStringTag,{value:"Module"})),A=new k;async function O(){console.debug("代理网络");for(let o=0;o<30;o++)try{if(console.debug("等待网络连接",o),null==window.socket.__onmessage&&null!=window.socket._onmessage&&null!=window.socket.send){console.debug("网络连接成功");break}await e(500);continue}catch(t){console.error(t)}null==window.socket.__onmessage&&null!=window.socket._onmessage&&null!=window.socket.send?(E.originalSend=window.socket.send,window.socket.send=E.send,E.originalOnmessage=window.socket._onmessage,window.socket._onmessage=E.onmessage):console.error("连接失败")}const E={beforeSend:async function(t){return t},originalSend:function(t){return t},afterSend:function(t){return t},send:async function(t){console.log("发送",{message:t});let e=await E.beforeSend(t);try{null!=e&&(E.originalSend(e),E.afterSend(e))}catch(o){console.error("捕获到错误",o)}},beforeOnmessage:async function(t){return x(t),t},originalOnmessage:function(t){return t},afterOnmessage:async function(t){for(let e of y)console.log(`触发${b(e)}消息`,{message:t,messageObj:e}),A.emit(b(e),e);return t},onmessage:async function(t){let e=await E.beforeOnmessage(t);try{null!=e&&(E.originalOnmessage(e),E.afterOnmessage(e))}catch(o){console.error("捕获到错误",o)}},initSocket:O},T=Object.freeze(Object.defineProperty({__proto__:null,initSocket:O,messageEmitter:A,sockets:E},Symbol.toStringTag,{value:"Module"}));function M(t,e){return"cut"===t?`{0${JSON.stringify({m:t,mc:e,i:Math.random().toString().slice(2,12)})}`:JSON.stringify({m:t,mc:e,i:Math.random().toString().slice(2,12)})}const H=Object.freeze(Object.defineProperty({__proto__:null,danmu:function(t,e,o="0"){return`~{"t":"${t}","c":"${e}","v":${o}}`},hidden:function(t,e,o){return`/<${t}>${e}:${o}`},like:function(t,e=""){return`+*${t}${e}`},musicCard:function(t,e,o,i,n,s){return M(`m__4=${t}>${e}>${o}>${i}>${n}>${s}`,n)},privateChat:function(t,e,o){return JSON.stringify({g:t,m:e,mc:o,i:Math.random().toString().slice(2,12)})},publicChat:M,stockRequest:function(t){return null==t?">#":t>0?`>$${Math.round(Math.abs(t))}`:t<0?`>@${Math.round(Math.abs(t))}`:">#"},videoCard:function(t,e,o,i,n,s,r){return M(`m__4*${t}>${e}>${o}>${i}>${n}>${s}>${r}`,n)},withdrawn:function(t,e=""){return""==e?`v0#${t}`:`v0*${e}#${t}`}},Symbol.toStringTag,{value:"Module"}));let P={movePanelHolder:document.querySelector("#movePanelHolder"),functionHolder:document.querySelector("#functionHolder"),functionButtonGroupList:[...document.querySelectorAll(".functionButton.functionButtonGroup")],msgholderBox:document.querySelector("#msgholder .fullBox.msgholderBox"),homeHolderMsgBox:document.querySelector("#homeHolder .homeHolderMsgContentBox .homeHolderMsgBox.fullBox"),sessionHolderPmTaskBoxItems:[...document.querySelectorAll(".sessionHolderPmTaskBoxItem.whoisTouch2")],moveinputDisplay:document.querySelector("#moveinputDisplay"),moveinput:document.getElementById("moveinput"),moveinputSendBtnFunc:document.querySelector("#moveinputDisplay #moveinputSendBtnFunc"),moveinputSendBtnSend:document.querySelector("#moveinputDisplay #moveinputSendBtnSend")};function j(){P.movePanelHolder=document.querySelector("#movePanelHolder"),P.functionHolder=document.querySelector("#functionHolder"),P.functionButtonGroupList=[...document.querySelectorAll(".functionButton.functionButtonGroup")],P.msgholderBox=document.querySelector("#msgholder .fullBox .fullBox.msgholderBox"),P.homeHolderMsgBox=document.querySelector("#homeHolder .homeHolderMsgContentBox .homeHolderMsgBox.fullBox"),P.sessionHolderPmTaskBoxItems=[...document.querySelectorAll(".sessionHolderPmTaskBoxItem.whoisTouch2")],P.moveinputDisplay=document.querySelector("#moveinputDisplay"),P.moveinput=document.getElementById("moveinput"),P.moveinputSendBtnFunc=document.querySelector("#moveinputDisplay #moveinputSendBtnFunc"),P.moveinputSendBtnSend=document.querySelector("#moveinputDisplay #moveinputSendBtnSend")}let z={elementHooks:{moveinput:{oninputBefore:()=>!0,oninputAfter:()=>!0,onblurBefore:()=>!0,onblurAfter:()=>!0,onfocusBefore:()=>!0,onfocusAfter:()=>!0}},functionHooks:{processer:{onBefore:(t,e,o,i)=>!0,onAfter:(t,e,o,i)=>!0}},replaceMoveinput:()=>{try{let t=P.moveinput.oninput;P.moveinput.oninput=function(){1==z.elementHooks.moveinput.oninputBefore()&&(t?.call(P.moveinput),z.elementHooks.moveinput.oninputAfter())}}catch(t){console.error("替换错误",t)}try{let t=P.moveinput.oninput;P.moveinput.onblur=function(){1==z.elementHooks.moveinput.onblurBefore()&&(t?.call(P.moveinput),z.elementHooks.moveinput.onblurAfter())}}catch(t){console.error("替换错误",t)}try{let t=P.moveinput.oninput;P.moveinput.onfocus=function(){1==z.elementHooks.moveinput.onfocusBefore()&&(t?.call(P.moveinput),z.elementHooks.moveinput.onfocusAfter())}}catch(t){console.error("替换错误",t)}},replaceButtonProcesser:()=>{try{let t=buttonProcesser;buttonProcesser=(e,o,i,n)=>{1==z.functionHooks.processer.onBefore(e,o,i,n)&&(t(e,o,i,n),z.functionHooks.processer.onAfter(e,o,i,n))}}catch(t){console.error("替换错误",t)}}};function B(){console.log("增加钩子函数"),z.replaceMoveinput(),z.replaceButtonProcesser()}const I=Object.freeze(Object.defineProperty({__proto__:null,Hooks:z,elements:P,initHooks:B,refreshAll:j},Symbol.toStringTag,{value:"Module"}));class D{constructor(t,e,o=!0,i=!1){this.name=t,this.url=e,this.enable=o,this.ingected=i}}let N=[];function L(t){if(""==t.name||""==t.url)return _alert("脚本名字或链接不能为空"),!1;for(let e of N){if(e.name===t.name)return e.url=t.url,e.enable=t.enable,e.ingected=t.ingected,!1;if(e.url===t.url)return e.name=t.name,e.enable=t.enable,e.ingected=t.ingected,!1}return N.push(t),!0}function U(t){N=N.filter(e=>e.name!==t.name&&e.url!==t.url)}function V(t){if(t.ingected)return _alert(`脚本 ${t.name} 已经注入`),t.ingected;const e=document.createElement("script");return e.src=t.url,e.onload=()=>{_alert(`脚本 ${t.name} 注入成功`),t.ingected=!0},e.onerror=()=>{_alert(`脚本 ${t.name} 注入失败`),t.enable=!1},document.head.appendChild(e),t.ingected}function R(t){for(let e of t)e.enable&&!e.ingected&&V(e)}function q(){let t=localStorage.getItem("hortiMagicScriptList");N=null==t?[]:JSON.parse(t);for(let e of N)e.ingected=!1}function W(){localStorage.setItem("hortiMagicScriptList",JSON.stringify(N)),_alert("脚本列表已保存")}function F(){q(),R(N)}const X=Object.freeze(Object.defineProperty({__proto__:null,Script:D,addScriptToList:L,ingectlocalScript:F,injectScript:V,injectScriptList:R,readScriptList:q,removeScriptFromList:U,saveScriptList:W,get scriptList(){return N}},Symbol.toStringTag,{value:"Module"}));class J extends k{constructor(t){super(),this._value=t}get value(){return this._value}set value(t){Object.is(this._value,t)||(this._value=t,this.emit("change",t))}triggerChange(){this.emit("change",this._value)}}const G=Object.freeze(Object.defineProperty({__proto__:null,Store:class extends k{constructor(){super(...arguments),this.items=new Map}add(t,e){if(this.items.has(t))return console.warn(`Store item "${t}" already exists.`),this.items.get(t);const o=new J(e);return this.items.set(t,o),this.emit("add",t,o),o}get(t){return this.items.get(t)}remove(t){if(!this.items.has(t))return!1;const e=this.items.get(t);return this.items.delete(t),this.emit("remove",t,e),!0}getValue(t){return this.items.get(t)?.value}setValue(t,e){const o=this.items.get(t);o?o.value=e:this.add(t,e)}has(t){return this.items.has(t)}persistToLocalStorage(t){const e={};for(const[i,n]of this.items.entries())try{const t=n.value;if(void 0===t||"function"==typeof t||"symbol"==typeof t)continue;JSON.stringify(t),e[i]=t}catch(o){console.warn(`[Store] Skipping non-serializable item: ${i}`,o)}try{localStorage.setItem(t,JSON.stringify(e))}catch(o){console.error(`[Store] Failed to save to localStorage under key "${t}"`,o)}}loadFromLocalStorage(t){let e,o=null;try{if(o=localStorage.getItem(t),!o)return}catch(i){return void console.error(`[Store] Failed to read from localStorage key "${t}"`,i)}try{e=JSON.parse(o)}catch(i){return void console.error(`[Store] Invalid JSON in localStorage key "${t}"`,i)}if("object"==typeof e&&null!==e)for(const[n,s]of Object.entries(e))this.has(n)?this.setValue(n,s):this.add(n,s);else console.warn("[Store] Unexpected data type in localStorage: "+typeof e)}},StoreItem:J},Symbol.toStringTag,{value:"Module"}));function Z(t){return t._storeListeners||(t._storeListeners={listeners:[]}),t._storeListeners}function Y(t,e){const o=t.constructor;if(!o.prototype._decorated){const t=o.prototype.constructor;o.prototype.constructor=function(...o){const i=new t(...o);return"function"==typeof i._initStoreDecorators?i._initStoreDecorators():e.call(i),i},o.prototype._decorated=!0}if(t._initStoreDecorators){const o=t._initStoreDecorators;t._initStoreDecorators=function(){o.call(this),e.call(this)}}else t._initStoreDecorators=function(){e.call(this)}}const K=Object.freeze(Object.defineProperty({__proto__:null,storeBind:function(t,e){return function(o,i){let n;const s={get(){const o=t.get(e);return o?o.value:n},set(o){n=o;const i=t.get(e);i?i.value=o:t.add(e,o)},enumerable:!0,configurable:!0};Object.defineProperty(o,i,s)}},storeOn:function(t,e){return function(o,i,n){const s=n.value;Y(o,()=>{const i=t.get(e);if(i){const t=s.bind(o);i.on("change",t);Z(o).listeners.push(()=>i.off("change",t))}else{const i=(n,r)=>{if(n===e){const e=s.bind(o);r.on("change",e);Z(o).listeners.push(()=>r.off("change",e)),t.off("add",i)}};t.on("add",i);Z(o).listeners.push(()=>t.off("add",i))}})}},storeOnce:function(t,e){return function(o,i,n){const s=n.value;Y(o,()=>{const i=t.get(e);if(i)i.once("change",s.bind(o));else{const i=(n,r)=>{n===e&&(r.once("change",s.bind(o)),t.off("add",i))};t.on("add",i);Z(o).listeners.push(()=>t.off("add",i))}})}},storeRemoveOn:function(){return function(t){return t.prototype.destroy||(t.prototype.destroy=function(){const t=this._storeListeners;t?.listeners&&(t.listeners.forEach(t=>t()),t.listeners=[])}),t}},storeSync:function(t,e){return function(o,i){Y(o,()=>{const n=t.get(e);if(n){o[i]=n.value;const t=t=>o[i]=t;n.on("change",t);Z(o).listeners.push(()=>n.off("change",t))}else{const n=(s,r)=>{if(s===e){o[i]=r.value;const e=t=>o[i]=t;r.on("change",e);Z(o).listeners.push(()=>r.off("change",e)),t.off("add",n)}};t.on("add",n);Z(o).listeners.push(()=>t.off("add",n))}})}}},Symbol.toStringTag,{value:"Module"})),Q=Object.freeze(Object.defineProperty({__proto__:null,EventEmitter:C,Message:v,Store:G,decoder:S,elements_hooks:I,encoder:H,iirose_socket:T,script_tools:X,storeDecorators:K,tools:a},Symbol.toStringTag,{value:"Module"})),tt=globalThis,et=tt.ShadowRoot&&(void 0===tt.ShadyCSS||tt.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,ot=Symbol(),it=new WeakMap;let nt=class{constructor(t,e,o){if(this._$cssResult$=!0,o!==ot)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(et&&void 0===t){const o=void 0!==e&&1===e.length;o&&(t=it.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),o&&it.set(e,t))}return t}toString(){return this.cssText}};const st=(t,...e)=>{const o=1===t.length?t[0]:e.reduce((e,o,i)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+t[i+1],t[0]);return new nt(o,t,ot)},rt=et?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const o of t.cssRules)e+=o.cssText;return(t=>new nt("string"==typeof t?t:t+"",void 0,ot))(e)})(t):t,{is:lt,defineProperty:at,getOwnPropertyDescriptor:ct,getOwnPropertyNames:ht,getOwnPropertySymbols:dt,getPrototypeOf:pt}=Object,ut=globalThis,gt=ut.trustedTypes,mt=gt?gt.emptyScript:"",ft=ut.reactiveElementPolyfillSupport,vt=(t,e)=>t,yt={toAttribute(t,e){switch(e){case Boolean:t=t?mt:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let o=t;switch(e){case Boolean:o=null!==t;break;case Number:o=null===t?null:Number(t);break;case Object:case Array:try{o=JSON.parse(t)}catch(i){o=null}}return o}},bt=(t,e)=>!lt(t,e),_t={attribute:!0,type:String,converter:yt,reflect:!1,useDefault:!1,hasChanged:bt};Symbol.metadata??=Symbol("metadata"),ut.litPropertyMetadata??=new WeakMap;let wt=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=_t){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){const o=Symbol(),i=this.getPropertyDescriptor(t,o,e);void 0!==i&&at(this.prototype,t,i)}}static getPropertyDescriptor(t,e,o){const{get:i,set:n}=ct(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get:i,set(e){const s=i?.call(this);n?.call(this,e),this.requestUpdate(t,s,o)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??_t}static _$Ei(){if(this.hasOwnProperty(vt("elementProperties")))return;const t=pt(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(vt("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(vt("properties"))){const t=this.properties,e=[...ht(t),...dt(t)];for(const o of e)this.createProperty(o,t[o])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,o]of e)this.elementProperties.set(t,o)}this._$Eh=new Map;for(const[e,o]of this.elementProperties){const t=this._$Eu(e,o);void 0!==t&&this._$Eh.set(t,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const o=new Set(t.flat(1/0).reverse());for(const t of o)e.unshift(rt(t))}else void 0!==t&&e.push(rt(t));return e}static _$Eu(t,e){const o=e.attribute;return!1===o?void 0:"string"==typeof o?o:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const o of e.keys())this.hasOwnProperty(o)&&(t.set(o,this[o]),delete this[o]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((t,e)=>{if(et)t.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const o of e){const e=document.createElement("style"),i=tt.litNonce;void 0!==i&&e.setAttribute("nonce",i),e.textContent=o.cssText,t.appendChild(e)}})(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,o){this._$AK(t,o)}_$ET(t,e){const o=this.constructor.elementProperties.get(t),i=this.constructor._$Eu(t,o);if(void 0!==i&&!0===o.reflect){const n=(void 0!==o.converter?.toAttribute?o.converter:yt).toAttribute(e,o.type);this._$Em=t,null==n?this.removeAttribute(i):this.setAttribute(i,n),this._$Em=null}}_$AK(t,e){const o=this.constructor,i=o._$Eh.get(t);if(void 0!==i&&this._$Em!==i){const t=o.getPropertyOptions(i),n="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:yt;this._$Em=i;const s=n.fromAttribute(e,t.type);this[i]=s??this._$Ej?.get(i)??s,this._$Em=null}}requestUpdate(t,e,o){if(void 0!==t){const i=this.constructor,n=this[t];if(o??=i.getPropertyOptions(t),!((o.hasChanged??bt)(n,e)||o.useDefault&&o.reflect&&n===this._$Ej?.get(t)&&!this.hasAttribute(i._$Eu(t,o))))return;this.C(t,e,o)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(t,e,{useDefault:o,reflect:i,wrapped:n},s){o&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,s??e??this[t]),!0!==n||void 0!==s)||(this._$AL.has(t)||(this.hasUpdated||o||(e=void 0),this._$AL.set(t,e)),!0===i&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,o]of t){const{wrapped:t}=o,i=this[e];!0!==t||this._$AL.has(e)||void 0===i||this.C(e,void 0,o,i)}}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(t=>t.hostUpdate?.()),this.update(e)):this._$EM()}catch(o){throw t=!1,this._$EM(),o}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(t){}firstUpdated(t){}};wt.elementStyles=[],wt.shadowRootOptions={mode:"open"},wt[vt("elementProperties")]=new Map,wt[vt("finalized")]=new Map,ft?.({ReactiveElement:wt}),(ut.reactiveElementVersions??=[]).push("2.1.1");const $t=globalThis,xt=$t.trustedTypes,St=xt?xt.createPolicy("lit-html",{createHTML:t=>t}):void 0,kt="$lit$",Ct=`lit$${Math.random().toFixed(9).slice(2)}$`,At="?"+Ct,Ot=`<${At}>`,Et=document,Tt=()=>Et.createComment(""),Mt=t=>null===t||"object"!=typeof t&&"function"!=typeof t,Ht=Array.isArray,Pt="[ \t\n\f\r]",jt=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,zt=/-->/g,Bt=/>/g,It=RegExp(`>|${Pt}(?:([^\\s"'>=/]+)(${Pt}*=${Pt}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),Dt=/'/g,Nt=/"/g,Lt=/^(?:script|style|textarea|title)$/i,Ut=(Ft=1,(t,...e)=>({_$litType$:Ft,strings:t,values:e})),Vt=Symbol.for("lit-noChange"),Rt=Symbol.for("lit-nothing"),qt=new WeakMap,Wt=Et.createTreeWalker(Et,129);var Ft;function Xt(t,e){if(!Ht(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==St?St.createHTML(e):e}class Jt{constructor({strings:t,_$litType$:e},o){let i;this.parts=[];let n=0,s=0;const r=t.length-1,l=this.parts,[a,c]=((t,e)=>{const o=t.length-1,i=[];let n,s=2===e?"<svg>":3===e?"<math>":"",r=jt;for(let l=0;l<o;l++){const e=t[l];let o,a,c=-1,h=0;for(;h<e.length&&(r.lastIndex=h,a=r.exec(e),null!==a);)h=r.lastIndex,r===jt?"!--"===a[1]?r=zt:void 0!==a[1]?r=Bt:void 0!==a[2]?(Lt.test(a[2])&&(n=RegExp("</"+a[2],"g")),r=It):void 0!==a[3]&&(r=It):r===It?">"===a[0]?(r=n??jt,c=-1):void 0===a[1]?c=-2:(c=r.lastIndex-a[2].length,o=a[1],r=void 0===a[3]?It:'"'===a[3]?Nt:Dt):r===Nt||r===Dt?r=It:r===zt||r===Bt?r=jt:(r=It,n=void 0);const d=r===It&&t[l+1].startsWith("/>")?" ":"";s+=r===jt?e+Ot:c>=0?(i.push(o),e.slice(0,c)+kt+e.slice(c)+Ct+d):e+Ct+(-2===c?l:d)}return[Xt(t,s+(t[o]||"<?>")+(2===e?"</svg>":3===e?"</math>":"")),i]})(t,e);if(this.el=Jt.createElement(a,o),Wt.currentNode=this.el.content,2===e||3===e){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(i=Wt.nextNode())&&l.length<r;){if(1===i.nodeType){if(i.hasAttributes())for(const t of i.getAttributeNames())if(t.endsWith(kt)){const e=c[s++],o=i.getAttribute(t).split(Ct),r=/([.?@])?(.*)/.exec(e);l.push({type:1,index:n,name:r[2],strings:o,ctor:"."===r[1]?Qt:"?"===r[1]?te:"@"===r[1]?ee:Kt}),i.removeAttribute(t)}else t.startsWith(Ct)&&(l.push({type:6,index:n}),i.removeAttribute(t));if(Lt.test(i.tagName)){const t=i.textContent.split(Ct),e=t.length-1;if(e>0){i.textContent=xt?xt.emptyScript:"";for(let o=0;o<e;o++)i.append(t[o],Tt()),Wt.nextNode(),l.push({type:2,index:++n});i.append(t[e],Tt())}}}else if(8===i.nodeType)if(i.data===At)l.push({type:2,index:n});else{let t=-1;for(;-1!==(t=i.data.indexOf(Ct,t+1));)l.push({type:7,index:n}),t+=Ct.length-1}n++}}static createElement(t,e){const o=Et.createElement("template");return o.innerHTML=t,o}}function Gt(t,e,o=t,i){if(e===Vt)return e;let n=void 0!==i?o._$Co?.[i]:o._$Cl;const s=Mt(e)?void 0:e._$litDirective$;return n?.constructor!==s&&(n?._$AO?.(!1),void 0===s?n=void 0:(n=new s(t),n._$AT(t,o,i)),void 0!==i?(o._$Co??=[])[i]=n:o._$Cl=n),void 0!==n&&(e=Gt(t,n._$AS(t,e.values),n,i)),e}class Zt{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:o}=this._$AD,i=(t?.creationScope??Et).importNode(e,!0);Wt.currentNode=i;let n=Wt.nextNode(),s=0,r=0,l=o[0];for(;void 0!==l;){if(s===l.index){let e;2===l.type?e=new Yt(n,n.nextSibling,this,t):1===l.type?e=new l.ctor(n,l.name,l.strings,this,t):6===l.type&&(e=new oe(n,this,t)),this._$AV.push(e),l=o[++r]}s!==l?.index&&(n=Wt.nextNode(),s++)}return Wt.currentNode=Et,i}p(t){let e=0;for(const o of this._$AV)void 0!==o&&(void 0!==o.strings?(o._$AI(t,o,e),e+=o.strings.length-2):o._$AI(t[e])),e++}}class Yt{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,o,i){this.type=2,this._$AH=Rt,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=o,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=Gt(this,t,e),Mt(t)?t===Rt||null==t||""===t?(this._$AH!==Rt&&this._$AR(),this._$AH=Rt):t!==this._$AH&&t!==Vt&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):(t=>Ht(t)||"function"==typeof t?.[Symbol.iterator])(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==Rt&&Mt(this._$AH)?this._$AA.nextSibling.data=t:this.T(Et.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:o}=t,i="number"==typeof o?this._$AC(t):(void 0===o.el&&(o.el=Jt.createElement(Xt(o.h,o.h[0]),this.options)),o);if(this._$AH?._$AD===i)this._$AH.p(e);else{const t=new Zt(i,this),o=t.u(this.options);t.p(e),this.T(o),this._$AH=t}}_$AC(t){let e=qt.get(t.strings);return void 0===e&&qt.set(t.strings,e=new Jt(t)),e}k(t){Ht(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let o,i=0;for(const n of t)i===e.length?e.push(o=new Yt(this.O(Tt()),this.O(Tt()),this,this.options)):o=e[i],o._$AI(n),i++;i<e.length&&(this._$AR(o&&o._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class Kt{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,o,i,n){this.type=1,this._$AH=Rt,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=n,o.length>2||""!==o[0]||""!==o[1]?(this._$AH=Array(o.length-1).fill(new String),this.strings=o):this._$AH=Rt}_$AI(t,e=this,o,i){const n=this.strings;let s=!1;if(void 0===n)t=Gt(this,t,e,0),s=!Mt(t)||t!==this._$AH&&t!==Vt,s&&(this._$AH=t);else{const i=t;let r,l;for(t=n[0],r=0;r<n.length-1;r++)l=Gt(this,i[o+r],e,r),l===Vt&&(l=this._$AH[r]),s||=!Mt(l)||l!==this._$AH[r],l===Rt?t=Rt:t!==Rt&&(t+=(l??"")+n[r+1]),this._$AH[r]=l}s&&!i&&this.j(t)}j(t){t===Rt?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class Qt extends Kt{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===Rt?void 0:t}}class te extends Kt{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==Rt)}}class ee extends Kt{constructor(t,e,o,i,n){super(t,e,o,i,n),this.type=5}_$AI(t,e=this){if((t=Gt(this,t,e,0)??Rt)===Vt)return;const o=this._$AH,i=t===Rt&&o!==Rt||t.capture!==o.capture||t.once!==o.once||t.passive!==o.passive,n=t!==Rt&&(o===Rt||i);i&&this.element.removeEventListener(this.name,this,o),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class oe{constructor(t,e,o){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=o}get _$AU(){return this._$AM._$AU}_$AI(t){Gt(this,t)}}const ie=$t.litHtmlPolyfillSupport;ie?.(Jt,Yt),($t.litHtmlVersions??=[]).push("3.3.1");const ne=globalThis;let se=class extends wt{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,o)=>{const i=o?.renderBefore??e;let n=i._$litPart$;if(void 0===n){const t=o?.renderBefore??null;i._$litPart$=n=new Yt(e.insertBefore(Tt(),t),t,void 0,o??{})}return n._$AI(t),n})(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return Vt}};se._$litElement$=!0,se.finalized=!0,ne.litElementHydrateSupport?.({LitElement:se});const re=ne.litElementPolyfillSupport;re?.({LitElement:se}),(ne.litElementVersions??=[]).push("4.2.1");const le=t=>(e,o)=>{void 0!==o?o.addInitializer(()=>{customElements.define(t,e)}):customElements.define(t,e)},ae={attribute:!0,type:String,converter:yt,reflect:!1,hasChanged:bt},ce=(t=ae,e,o)=>{const{kind:i,metadata:n}=o;let s=globalThis.litPropertyMetadata.get(n);if(void 0===s&&globalThis.litPropertyMetadata.set(n,s=new Map),"setter"===i&&((t=Object.create(t)).wrapped=!0),s.set(o.name,t),"accessor"===i){const{name:i}=o;return{set(o){const n=e.get.call(this);e.set.call(this,o),this.requestUpdate(i,n,t)},init(e){return void 0!==e&&this.C(i,void 0,t,e),e}}}if("setter"===i){const{name:i}=o;return function(o){const n=this[i];e.call(this,o),this.requestUpdate(i,n,t)}}throw Error("Unsupported decorator location: "+i)};function he(t){return(e,o)=>"object"==typeof o?ce(t,e,o):((t,e,o)=>{const i=e.hasOwnProperty(o);return e.constructor.createProperty(o,t),i?Object.getOwnPropertyDescriptor(e,o):void 0})(t,e,o)}function de(t,e){return(e,o,i)=>((t,e,o)=>(o.configurable=!0,o.enumerable=!0,Reflect.decorate&&"object"!=typeof e&&Object.defineProperty(t,e,o),o))(e,o,{get(){return(e=>e.renderRoot?.querySelector(t)??null)(this)}})}var pe=Object.defineProperty,ue=Object.getOwnPropertyDescriptor,ge=(t,e,o,i)=>{for(var n,s=i>1?void 0:i?ue(e,o):e,r=t.length-1;r>=0;r--)(n=t[r])&&(s=(i?n(e,o,s):n(s))||s);return i&&s&&pe(e,o,s),s};let me=[],fe=99999,ve=class extends se{constructor(){super(),this.width=320,this.height=490,this.headerBackgroundColor="rgba(66,134,182,0.9)",this.headerColor="rgb(255,255,255)",this.bodyBackgroundColor="rgba(255,255,255,0.7)",this.bodyColor="rgba(23, 23, 23, 0.9)",this.footerBackgroundColor="rgba(255,255,255,0.7)",this.buttonBackground="rgba(255,255,255,0.9)",this.buttonColor="rgba(66,134,182,0.9)",this.titleContent="面板",this.leftButtonText="",this.rightButtonText="",this.isDisplay=!1,this.zIndex=fe,this.icon="magic-wand",this.left=(window.innerWidth-this.width)/2,this.top=(window.innerHeight-(this.height+80))/2,this.dragging=!1,me.push(this),this.zIndex=++fe}handleLeftClick(){this.hideMovePanel()}handleRightClick(){this.hideMovePanel()}hideMovePanel(){this.isDisplay=!1,console.debug("关闭事件"),this.dispatchEvent(new CustomEvent("close",{detail:{isDisplay:this.isDisplay,message:"关闭事件"},bubbles:!0,composed:!0}))}showMovePanel(){this.isDisplay=!0,console.debug("显示事件"),this.dispatchEvent(new CustomEvent("show",{detail:{isDisplay:this.isDisplay},bubbles:!0,composed:!0}))}toogleDisplay(){this.isDisplay?this.hideMovePanel():this.showMovePanel()}mouseDragging(t){let e=this.left,o=this.top,i=t.clientX-e,n=t.clientY-o;0==this.dragging&&(this.dragging=!0),document.onmousemove=t=>{this.dragging&&(this.left=t.clientX-i,this.top=t.clientY-n)},document.onmouseup=()=>{this.dragging&&(this.dragging=!1),document.onmousemove=null}}touchDragging(t){let e=this.left,o=this.top,i=t.touches[0].clientX-e,n=t.touches[0].clientY-o;0==this.dragging&&(this.dragging=!0),document.ontouchmove=t=>{this.dragging&&(this.left=t.touches[0].clientX-i,this.top=t.touches[0].clientY-n)},document.ontouchend=()=>{this.dragging&&(this.dragging=!1),document.onmousemove=null}}putTop(){let t=!1;if(me.includes(this)){for(let t=0;t<me.length;t++)me[t].zIndex>this.zIndex&&(me[t].zIndex=me[t].zIndex-1);this.zIndex=fe,t=!0}else t=!1;return t}putTopToggel(){this.zIndex!=fe?(this.putTop(),this.showMovePanel()):this.toogleDisplay()}render(){return Ut`
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
      icon="magic-wand"
      width="100%"
      background="${this.buttonBackground}"
      color="${this.buttonColor}"
      @click="${this._handleLeftButtonClick}"
    >
      ${this.leftButtonText}
      </hm-button>
    <hm-button
      class="footer-button footer-button-right"
      icon="magic-wand"
      width="100%"
      background="${this.buttonColor}"
      color="${this.buttonBackground}"
      @click="${this._handleRightButtonClick}"
    >
      ${this.rightButtonText}
    </hm-button>
  </div>
</div>

                `}_handleClose(){this.hideMovePanel()}_handleLeftButtonClick(){this.dispatchEvent(new CustomEvent("left-button-click",{detail:{message:"左侧按钮被点击"},bubbles:!0,composed:!0}))}_handleRightButtonClick(){this.dispatchEvent(new CustomEvent("right-button-click",{detail:{message:"右侧按钮被点击"},bubbles:!0,composed:!0}))}};ve.styles=st`
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
`,ge([he({type:Number})],ve.prototype,"width",2),ge([he({type:Number})],ve.prototype,"height",2),ge([he({type:String,attribute:"header-background-color"})],ve.prototype,"headerBackgroundColor",2),ge([he({type:String,attribute:"header-color"})],ve.prototype,"headerColor",2),ge([he({type:String,attribute:"body-background-color"})],ve.prototype,"bodyBackgroundColor",2),ge([he({type:String,attribute:"body-color"})],ve.prototype,"bodyColor",2),ge([he({type:String,attribute:"footer-background-color"})],ve.prototype,"footerBackgroundColor",2),ge([he({type:String,attribute:"button-background-color"})],ve.prototype,"buttonBackground",2),ge([he({type:String,attribute:"button-color"})],ve.prototype,"buttonColor",2),ge([he({type:String})],ve.prototype,"titleContent",2),ge([he({type:String,attribute:"left-button-text"})],ve.prototype,"leftButtonText",2),ge([he({type:String,attribute:"right-button-text"})],ve.prototype,"rightButtonText",2),ge([he({type:Boolean,attribute:"is-display"})],ve.prototype,"isDisplay",2),ge([he({type:Number})],ve.prototype,"zIndex",2),ge([he({type:String})],ve.prototype,"icon",2),ge([he({type:Number})],ve.prototype,"left",2),ge([he({type:Number})],ve.prototype,"top",2),ve=ge([le("hm-move-panel")],ve);const ye=Object.freeze(Object.defineProperty({__proto__:null,get HmMovePanel(){return ve},movePanelItemList:me,get movePanelItemMaxZindex(){return fe}},Symbol.toStringTag,{value:"Module"})),be=2;class _e{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,o){this._$Ct=t,this._$AM=e,this._$Ci=o}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}class we extends _e{constructor(t){if(super(t),this.it=Rt,t.type!==be)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===Rt||null==t)return this._t=void 0,this.it=t;if(t===Vt)return t;if("string"!=typeof t)throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.it)return this._t;this.it=t;const e=[t];return e.raw=e,this._t={_$litType$:this.constructor.resultType,strings:e,values:[]}}}we.directiveName="unsafeHTML",we.resultType=1;class $e extends we{}$e.directiveName="unsafeSVG",$e.resultType=2;const xe=(t=>(...e)=>({_$litDirective$:t,values:e}))($e);var Se=Object.defineProperty,ke=Object.getOwnPropertyDescriptor,Ce=(t,e,o,i)=>{for(var n,s=i>1?void 0:i?ke(e,o):e,r=t.length-1;r>=0;r--)(n=t[r])&&(s=(i?n(e,o,s):n(s))||s);return i&&s&&Se(e,o,s),s};const Ae=new Map([["magic-wand",'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m12.64 1.87l-.84 2.48a.41.41 0 0 0 0 .37l1.57 2.1a.4.4 0 0 1-.33.64h-2.62a.43.43 0 0 0-.33.17l-1.46 2.1a.4.4 0 0 1-.71-.11l-.78-2.5a.38.38 0 0 0-.26-.26l-2.5-.78a.4.4 0 0 1-.11-.71l2.14-1.51a.43.43 0 0 0 .17-.33V.91a.4.4 0 0 1 .6-.33l2.1 1.57a.41.41 0 0 0 .37.05l2.48-.84a.4.4 0 0 1 .51.51m-5.6 5.09L.5 13.5" stroke-width="1"/></svg>'],["close",'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M6.4 19L5 17.6l5.6-5.6L5 6.4L6.4 5l5.6 5.6L17.6 5L19 6.4L13.4 12l5.6 5.6l-1.4 1.4l-5.6-5.6z"/></svg>'],["open",'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M4 21q-.425 0-.712-.288T3 20v-6q0-.425.288-.712T4 13t.713.288T5 14v3.6L17.6 5H14q-.425 0-.712-.288T13 4t.288-.712T14 3h6q.425 0 .713.288T21 4v6q0 .425-.288.713T20 11t-.712-.288T19 10V6.4L6.4 19H10q.425 0 .713.288T11 20t-.288.713T10 21z"/></svg>'],["led-on",'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M11 0v4h2V0zm7.3 2.29l-3.06 3l1.4 1.42l3.06-3zm-12.59 0L4.29 3.71l3 3l1.42-1.42zM12 6a4 4 0 0 0-4 4v6H6v2h3v5h2v-5h2v5h2v-5h3v-2h-2v-6a4 4 0 0 0-4-4M2 9v2h4V9zm16 0v2h4V9z"/></svg>'],["led-off",'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M12 6a4 4 0 0 0-4 4v6H6v2h3v5h2v-5h2v5h2v-5h3v-2h-2v-6a4 4 0 0 0-4-4"/></svg>'],["arrow-up",'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M16.21 16H7.79a1.76 1.76 0 0 1-1.59-1a2.1 2.1 0 0 1 .26-2.21l4.21-5.1a1.76 1.76 0 0 1 2.66 0l4.21 5.1A2.1 2.1 0 0 1 17.8 15a1.76 1.76 0 0 1-1.59 1"/></svg>'],["arrow-down",'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M12 17a1.72 1.72 0 0 1-1.33-.64l-4.21-5.1a2.1 2.1 0 0 1-.26-2.21A1.76 1.76 0 0 1 7.79 8h8.42a1.76 1.76 0 0 1 1.59 1.05a2.1 2.1 0 0 1-.26 2.21l-4.21 5.1A1.72 1.72 0 0 1 12 17"/></svg>'],["template",'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><defs><mask id="SVGZZ153dkC"><path fill="#4d4d4d" stroke="#fff" stroke-linejoin="round" stroke-width="4" d="M23 4H4v22h19zm21 30H4v9h40zm0-30H31v8h13zm0 14H31v8h13z"/></mask></defs><path fill="currentColor" d="M0 0h48v48H0z" mask="url(#SVGZZ153dkC)"/></svg>'],["js",'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path fill="currentColor" d="M10.77 7.3h.002c1.045.393 2.479.93 2.479 2.45a2.5 2.5 0 0 1-.224 1.02a2.5 2.5 0 0 1-1.515 1.364a2.5 2.5 0 0 1-1.035.115a2 2 0 0 1-.214.012a2.5 2.5 0 0 1-1.673-.65a2.52 2.52 0 0 1-.838-1.859c0-.202.078-.39.22-.532a.77.77 0 0 1 1.06 0a.74.74 0 0 1 .221.53c0 .952 1.041 1 1.25 1s1.25-.048 1.25-1c0-.413-.447-.648-1.514-1.048h-.003C9.19 8.307 7.753 7.77 7.753 6.25q.005-.537.224-1.02a2.5 2.5 0 0 1 .614-.842a2.5 2.5 0 0 1 .9-.52a3.5 3.5 0 0 1 2.023 0a2.52 2.52 0 0 1 1.738 2.381c0 .201-.078.39-.22.531a.77.77 0 0 1-1.061 0a.74.74 0 0 1-.22-.53c0-.952-1.041-1-1.25-1s-1.25.048-1.25 1c0 .413.447.648 1.514 1.048zM5.751 4.5c0-.2.078-.388.22-.53a.77.77 0 0 1 1.06 0c.142.141.22.33.22.53v5a2.75 2.75 0 0 1-4.695 1.945A2.73 2.73 0 0 1 1.75 9.5V9c0-.2.078-.388.22-.53a.77.77 0 0 1 1.061 0c.142.141.22.33.22.53v.5c0 .33.134.652.366.884c.465.465 1.303.465 1.768 0c.232-.233.366-.555.366-.884z"/></svg>'],["filter",'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M3 4c2.01 2.59 7 9 7 9v7h4v-7s4.98-6.41 7-9z"/></svg>'],["filter-off",'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M3.004 1.59L3 1.586L1.586 3l4.928 4.928L10 12.818V21h4v-5.585l7 7l1.41-1.41L3 1.595zm12.266 9.446L21 3H7.234z"/></svg>'],["eye",'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M16 11v2h-1v1h-1v1h-1v1h-2v-1h-1v-1H9v-1H8v-2h2v-1h1V8h2v1h1v1h1v1z"/><path fill="currentColor" d="M22 11V9h-1V8h-1V7h-1V6h-2V5H7v1H5v1H4v1H3v1H2v2H1v2h1v2h1v1h1v1h1v1h2v1h10v-1h2v-1h1v-1h1v-1h1v-2h1v-2zm-4 2h-1v2h-1v1h-1v1h-2v1h-2v-1H9v-1H8v-1H7v-2H6v-2h1V9h1V8h1V7h2V6h2v1h2v1h1v1h1v2h1z"/></svg>'],["eye-off",'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M2 13H1v-2h1V9h1V8h1V7h1V6h2V5h8v1h-1v1h-1V6h-2v1H9v1H8v1H7v2H6v2h1v1H6v1H5v1H3v-1H2z"/><path fill="currentColor" d="M8 11h1v1H8zm3-3h1v1h-1zm-2 9H8v1H7v1H6v1H5v1H4v1H3v-1H2v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1V9h1V8h1V7h1V6h1V5h1V4h1V3h1V2h1v1h1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1H9zm3-2h1v1h-1zm1-1h1v1h-1zm2-2h1v1h-1zm-1 1h1v1h-1z"/><path fill="currentColor" d="M23 11v2h-1v2h-1v1h-1v1h-1v1h-2v1H9v-1h1v-1h1v1h2v-1h2v-1h1v-1h1v-2h1v-2h-1v-1h1V9h1V8h2v1h1v2z"/></svg>'],["config",'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="4"><path d="m24 4l-6 6h-8v8l-6 6l6 6v8h8l6 6l6-6h8v-8l6-6l-6-6v-8h-8z"/><path d="M24 30a6 6 0 1 0 0-12a6 6 0 0 0 0 12Z"/></g></svg>']]);function Oe(t){return Ae.get(t)||'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m12.64 1.87l-.84 2.48a.41.41 0 0 0 0 .37l1.57 2.1a.4.4 0 0 1-.33.64h-2.62a.43.43 0 0 0-.33.17l-1.46 2.1a.4.4 0 0 1-.71-.11l-.78-2.5a.38.38 0 0 0-.26-.26l-2.5-.78a.4.4 0 0 1-.11-.71l2.14-1.51a.43.43 0 0 0 .17-.33V.91a.4.4 0 0 1 .6-.33l2.1 1.57a.41.41 0 0 0 .37.05l2.48-.84a.4.4 0 0 1 .51.51m-5.6 5.09L.5 13.5" stroke-width="1"/></svg>'}let Ee=class extends se{constructor(){super(...arguments),this.icon="magic-wand",this.size="16px"}handelClick(){this.dispatchEvent(new CustomEvent("hm-icon-click"))}render(){return Ut`
<div class="icon" 
style="width:${this.size}; height:${this.size};"
@click="${this.handelClick}"
>
    ${xe(Oe(this.icon))}
</div>
`}};Ee.styles=st`
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
`,Ce([he({type:String})],Ee.prototype,"icon",2),Ce([he({type:String})],Ee.prototype,"size",2),Ee=Ce([le("hm-icon")],Ee);const Te=Object.freeze(Object.defineProperty({__proto__:null,get HmIcon(){return Ee},getIcon:Oe,iconMap:Ae,registerIcon:function(t,e){Ae.set(t,e)}},Symbol.toStringTag,{value:"Module"}));var Me=Object.defineProperty,He=Object.getOwnPropertyDescriptor,Pe=(t,e,o,i)=>{for(var n,s=i>1?void 0:i?He(e,o):e,r=t.length-1;r>=0;r--)(n=t[r])&&(s=(i?n(e,o,s):n(s))||s);return i&&s&&Me(e,o,s),s};let je=class extends se{constructor(){super(...arguments),this.icon="magic-wand",this.content="HortiMagicMenu",this.flag=!1,this.isMenuItem=!1}handleClick(){this.isMenuItem||(this.flag=!this.flag),this.dispatchEvent(new CustomEvent("hm-menu-click"))}render(){return Ut`
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
      ${this.isMenuItem?"":Ut`<hm-icon
        class="icon right"
        icon="${this.flag?"arrow-up":"arrow-down"}"
      ></hm-icon
      >`}
    </slot>
  </div>
</div>




`}};je.styles=st`
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
`,Pe([he({type:String})],je.prototype,"icon",2),Pe([he({type:String})],je.prototype,"content",2),Pe([he({type:Boolean})],je.prototype,"flag",2),Pe([he({type:Boolean})],je.prototype,"isMenuItem",2),je=Pe([le("hm-menu")],je);const ze=Object.freeze(Object.defineProperty({__proto__:null,get HmMenu(){return je}},Symbol.toStringTag,{value:"Module"}));var Be=Object.defineProperty,Ie=Object.getOwnPropertyDescriptor,De=(t,e,o,i)=>{for(var n,s=i>1?void 0:i?Ie(e,o):e,r=t.length-1;r>=0;r--)(n=t[r])&&(s=(i?n(e,o,s):n(s))||s);return i&&s&&Be(e,o,s),s};let Ne=class extends se{constructor(){super(...arguments),this.leftIcon="magic-wand",this.title="HortiMagic",this.content="Hello iirose!",this.rightIcon="",this.displayTime=999999,this.color="rgb(33,33,33)",this.backgroundColor="rgba(255,255,255,0.9)"}firstUpdated(){this.displayTime>0&&setTimeout(()=>{this.startLeaveAnimation()},this.displayTime)}startLeaveAnimation(){this.setAttribute("leaving",""),setTimeout(()=>{this.remove()},300)}render(){return Ut`
<div
  class="hm-notification"
  style="${this.color?`border-color: ${this.color};`:""} 
            ${this.color?`color: ${this.color};`:""} 
            ${this.backgroundColor?`background-color: ${this.backgroundColor};`:""}"
>
  ${this.leftIcon?Ut`
  <div class="icondiv">
    <hm-icon icon="${this.leftIcon}" size="24px"></hm-icon>
  </div>
  `:""}

  <div class="hm-notification-main">
    <div class="hm-notification-title">${this.title}</div>
    <div class="hm-notification-content">${this.content}</div>
  </div>
  ${this.rightIcon?Ut`
  <div class="icondiv">
    <hm-icon icon="${this.rightIcon}" size="24px"></hm-icon>
  </div>
  `:""}
</div>
`}};Ne.styles=st`
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
`,De([he()],Ne.prototype,"leftIcon",2),De([he()],Ne.prototype,"title",2),De([he()],Ne.prototype,"content",2),De([he()],Ne.prototype,"rightIcon",2),De([he()],Ne.prototype,"displayTime",2),De([he()],Ne.prototype,"color",2),De([he()],Ne.prototype,"backgroundColor",2),Ne=De([le("hm-notification")],Ne);const Le=Object.freeze(Object.defineProperty({__proto__:null,get HmNotification(){return Ne}},Symbol.toStringTag,{value:"Module"}));var Ue=Object.defineProperty,Ve=Object.getOwnPropertyDescriptor,Re=(t,e,o,i)=>{for(var n,s=i>1?void 0:i?Ve(e,o):e,r=t.length-1;r>=0;r--)(n=t[r])&&(s=(i?n(e,o,s):n(s))||s);return i&&s&&Ue(e,o,s),s};let qe=class extends se{constructor(){super(...arguments),this.icon="",this.content="",this.fontSize="14px",this.color="",this.background="",this.width="",this.height="",this.enable=!0,this.loading=!1}render(){const t=`\n          ${this.color?`color: ${this.color};`:""}\n          ${this.background?`background: ${this.background};`:""}\n          ${this.width?`width: ${this.width};`:""}\n          ${this.height?`height: ${this.height};`:""}\n          ${this.fontSize?`font-size: ${this.fontSize};`:"14px"}\n        `;return Ut`
          <button 
            class="button" 
            style="${t}"
            ?disabled="${!this.enable||this.loading}"
            @click="${this._handleClick}">
            
            ${this.loading?Ut`
              <div class="loading-spinner"></div>
            `:this.icon?Ut`
              <slot name="icon">
                <hm-icon icon="${this.icon}" style="margin-right: 8px;"></hm-icon>
              </slot>
            `:""}
            
            <span class="button-content">
              <slot>${this.content}</slot>
            </span>
          </button>
        `}_handleClick(t){this.enable&&!this.loading?this.dispatchEvent(new CustomEvent("hm-button-click")):t.stopPropagation()}};qe.styles=st`
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
    `,Re([he({type:String})],qe.prototype,"icon",2),Re([he({type:String})],qe.prototype,"content",2),Re([he({type:String})],qe.prototype,"fontSize",2),Re([he({type:String})],qe.prototype,"color",2),Re([he({type:String})],qe.prototype,"background",2),Re([he({type:String})],qe.prototype,"width",2),Re([he({type:String})],qe.prototype,"height",2),Re([he({type:Boolean})],qe.prototype,"enable",2),Re([he({type:Boolean})],qe.prototype,"loading",2),qe=Re([le("hm-button")],qe);const We=Object.freeze(Object.defineProperty({__proto__:null,get HmButton(){return qe}},Symbol.toStringTag,{value:"Module"}));var Fe=Object.defineProperty,Xe=Object.getOwnPropertyDescriptor,Je=(t,e,o,i)=>{for(var n,s=i>1?void 0:i?Xe(e,o):e,r=t.length-1;r>=0;r--)(n=t[r])&&(s=(i?n(e,o,s):n(s))||s);return i&&s&&Fe(e,o,s),s};let Ge=class extends se{constructor(){super(...arguments),this.titleName="单元格",this.descripthion="描述信息",this.content="内容",this.titleClickCallback=()=>{},this.contentClickCallback=()=>{}}render(){return Ut`
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

`}};Ge.styles=st`
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
  `,Je([he({attribute:"title-name"})],Ge.prototype,"titleName",2),Je([he()],Ge.prototype,"descripthion",2),Je([he()],Ge.prototype,"content",2),Je([he()],Ge.prototype,"titleClickCallback",2),Je([he()],Ge.prototype,"contentClickCallback",2),Ge=Je([le("hm-cell")],Ge);const Ze=Object.freeze(Object.defineProperty({__proto__:null,get HmCell(){return Ge}},Symbol.toStringTag,{value:"Module"}));var Ye=Object.defineProperty,Ke=Object.getOwnPropertyDescriptor,Qe=(t,e,o,i)=>{for(var n,s=i>1?void 0:i?Ke(e,o):e,r=t.length-1;r>=0;r--)(n=t[r])&&(s=(i?n(e,o,s):n(s))||s);return i&&s&&Ye(e,o,s),s};let to=class extends se{constructor(){super(...arguments),this._isDragging=!1,this._startX=0,this._currentTranslate=0,this._prevTranslate=0,this._animationId=0,this._velocity=0,this._lastX=0,this._lastTime=0,this._isOpen=!1,this.rightButtonName="右侧按钮",this.rightButtonCallback=function(){console.debug("点击了一下")},this.leftActionsWidth=0,this.rightActionsWidth=0,this.onDragStart=t=>{t.preventDefault(),this.startDrag(t.clientX),this.sliderElement.style.cursor="grabbing",this.sliderElement.style.transition="none"},this.onTouchStart=t=>{t.preventDefault(),this.startDrag(t.touches[0].clientX),this.sliderElement.style.transition="none"},this.startDrag=t=>{this._isDragging=!0,this._startX=t,this._lastX=t,this._lastTime=Date.now(),this._isOpen=Math.abs(this._prevTranslate)>10,this.calculateActionWidths()},this.onDragMove=t=>{this._isDragging&&(t.preventDefault(),this.handleMove(t.clientX))},this.onTouchMove=t=>{this._isDragging&&(t.preventDefault(),this.handleMove(t.touches[0].clientX))},this.onDragEnd=()=>{this.finishDrag(),this.sliderElement.style.cursor="grab"},this.onTouchEnd=()=>{this.finishDrag()}}firstUpdated(){this.calculateActionWidths(),this.addEventListeners()}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListeners()}calculateActionWidths(){this.leftActionsWidth=this.leftActions?this.leftActions.offsetWidth:0,this.rightActionsWidth=this.rightActions?this.rightActions.offsetWidth:0}addEventListeners(){this.sliderElement.addEventListener("mousedown",this.onDragStart),this.sliderElement.addEventListener("touchstart",this.onTouchStart,{passive:!1}),document.addEventListener("mousemove",this.onDragMove),document.addEventListener("touchmove",this.onTouchMove,{passive:!1}),document.addEventListener("mouseup",this.onDragEnd),document.addEventListener("touchend",this.onTouchEnd)}removeEventListeners(){this.sliderElement.removeEventListener("mousedown",this.onDragStart),this.sliderElement.removeEventListener("touchstart",this.onTouchStart),document.removeEventListener("mousemove",this.onDragMove),document.removeEventListener("touchmove",this.onTouchMove),document.removeEventListener("mouseup",this.onDragEnd),document.removeEventListener("touchend",this.onTouchEnd)}handleMove(t){const e=Date.now(),o=e-this._lastTime;o>0&&(this._velocity=(t-this._lastX)/o,this._lastX=t,this._lastTime=e);const i=t-this._startX;let n=this._prevTranslate+i;if(n>this.leftActionsWidth){const t=n-this.leftActionsWidth;n=this.leftActionsWidth+this.easeOut(t,30)}else if(n<-this.rightActionsWidth){const t=n+this.rightActionsWidth;n=-this.rightActionsWidth+this.easeOut(t,30)}this._currentTranslate=n,this.updateSliderPosition()}easeOut(t,e){return.2*t}finishDrag(){this._isDragging=!1,this.sliderElement.style.transition="transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)";let t=0;if(t=this._currentTranslate>5||this._currentTranslate>0&&this._velocity>.1?this.leftActionsWidth:this._currentTranslate<-5||this._currentTranslate<0&&this._velocity<-.1?-this.rightActionsWidth:0,this._isOpen){const e=5;t=this._prevTranslate>0&&this._currentTranslate<this._prevTranslate-e||this._prevTranslate<0&&this._currentTranslate>this._prevTranslate+e?0:this._prevTranslate}this._currentTranslate=t,this._prevTranslate=t,this.updateSliderPosition(),this._velocity=0}updateSliderPosition(){this._animationId&&cancelAnimationFrame(this._animationId),this._animationId=requestAnimationFrame(()=>{if(this.sliderElement.style.transform=`translateX(${this._currentTranslate}px)`,this._currentTranslate>0){const t=Math.min(this._currentTranslate/this.leftActionsWidth,1);this.leftActions.style.transform=`translateX(${100*t-100}%)`,this.rightActions.style.transform="translateX(100%)"}else if(this._currentTranslate<0){const t=Math.min(-this._currentTranslate/this.rightActionsWidth,1);this.rightActions.style.transform=`translateX(${100-100*t}%)`,this.leftActions.style.transform="translateX(-100%)"}else this.leftActions.style.transform="translateX(-100%)",this.rightActions.style.transform="translateX(100%)"})}render(){return Ut`
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
`}};to.styles=st`
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
    `,Qe([he()],to.prototype,"_isDragging",2),Qe([he()],to.prototype,"_startX",2),Qe([he()],to.prototype,"_currentTranslate",2),Qe([he()],to.prototype,"_prevTranslate",2),Qe([he()],to.prototype,"_animationId",2),Qe([he()],to.prototype,"_velocity",2),Qe([he()],to.prototype,"_lastX",2),Qe([he()],to.prototype,"_lastTime",2),Qe([he()],to.prototype,"_isOpen",2),Qe([he()],to.prototype,"rightButtonName",2),Qe([he()],to.prototype,"rightButtonCallback",2),Qe([de(".slider")],to.prototype,"sliderElement",2),Qe([de(".content")],to.prototype,"contentElement",2),Qe([de(".left-actions")],to.prototype,"leftActions",2),Qe([de(".right-actions")],to.prototype,"rightActions",2),to=Qe([le("hm-swipe-cell")],to);const eo=Object.freeze(Object.defineProperty({__proto__:null,get HmSwipeCell(){return to}},Symbol.toStringTag,{value:"Module"}));var oo=Object.defineProperty,io=Object.getOwnPropertyDescriptor,no=(t,e,o,i)=>{for(var n,s=i>1?void 0:i?io(e,o):e,r=t.length-1;r>=0;r--)(n=t[r])&&(s=(i?n(e,o,s):n(s))||s);return i&&s&&oo(e,o,s),s};let so=class extends se{constructor(){super(...arguments),this.checked=!1,this.disabled=!1,this.loading=!1,this.color="#1890ff",this.openContent="",this.closeContent="",this.openIcon="",this.closeIcon=""}change(){this.disabled||this.loading||(this.checked=!this.checked,this.dispatchEvent(new CustomEvent("hm-switch-change",{detail:{checked:this.checked},bubbles:!0,composed:!0})))}render(){return Ut`
<div
  class="switch ${this.disabled?"disabled":""} ${this.loading?"loading":""} ${this.checked?"checked":""}"
  @click="${this.change}"
  @touchstart="${this.change}"
  style="--switch-color: ${this.color}"
>
  <div class="switch-inner">
    ${this.checked?this.openIcon?Ut`<hm-icon icon="${this.openIcon}" size="14px"></hm-icon>`:this.openContent?Ut`<span>${this.openContent}</span>`:"":this.closeIcon?Ut`<hm-icon icon="${this.closeIcon}" size="14px"></hm-icon>`:this.closeContent?Ut`<span>${this.closeContent}</span>`:""}
  </div>
</div>
        `}};so.styles=st`
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
    `,no([he({type:Boolean})],so.prototype,"checked",2),no([he({type:Boolean})],so.prototype,"disabled",2),no([he({type:Boolean})],so.prototype,"loading",2),no([he({type:String})],so.prototype,"color",2),no([he({type:String,attribute:"open-content"})],so.prototype,"openContent",2),no([he({type:String,attribute:"close-content"})],so.prototype,"closeContent",2),no([he({type:String,attribute:"open-icon"})],so.prototype,"openIcon",2),no([he({type:String,attribute:"close-icon"})],so.prototype,"closeIcon",2),so=no([le("hm-switch")],so);const ro=Object.freeze(Object.defineProperty({__proto__:null,get HmSwitch(){return so}},Symbol.toStringTag,{value:"Module"}));var lo=Object.defineProperty,ao=Object.getOwnPropertyDescriptor,co=(t,e,o,i)=>{for(var n,s=i>1?void 0:i?ao(e,o):e,r=t.length-1;r>=0;r--)(n=t[r])&&(s=(i?n(e,o,s):n(s))||s);return i&&s&&lo(e,o,s),s};let ho=class extends se{constructor(){super(...arguments),this.maxHeight="500px",this.items=[],this.titleContent="标题内容",this.expanded=!1}togglePanel(){this.expanded=!this.expanded}render(){return Ut`
      <div class="accordion-container" style="max-height: ${this.maxHeight}">
        <div class="accordion-header" @click=${this.togglePanel}>
          <slot name="header">${this.titleContent}</slot>
          <div class="accordion-toggle">
            ${this.expanded?Ut`<hm-icon icon="arrow-up"></hm-icon>`:Ut`<hm-icon icon="arrow-down"></hm-icon>`}
          </div>
        </div>
        
        <div class="accordion-content" ?hidden=${!this.expanded}>
          ${this.items.length>0?this.items.map(t=>Ut`<div class="accordion-item">${t}</div>`):Ut`<slot></slot>`}
        </div>
        
        <div class="accordion-footer" ?hidden=${!this.expanded}>
          <slot name="footer">
            <hm-button @hm-button-click="${()=>{this.expanded=!1}}">关闭</hm-button>
          </slot>
        </div>
      </div>
    `}};ho.styles=st`
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
  `,co([he({type:String,attribute:"max-height"})],ho.prototype,"maxHeight",2),co([he({type:Array})],ho.prototype,"items",2),co([he({type:String,attribute:"title-content"})],ho.prototype,"titleContent",2),co([he({type:Boolean})],ho.prototype,"expanded",2),ho=co([le("hm-accordion")],ho);const po=Object.freeze(Object.defineProperty({__proto__:null,get HmAccordion(){return ho}},Symbol.toStringTag,{value:"Module"}));var uo=Object.defineProperty,go=Object.getOwnPropertyDescriptor,mo=(t,e,o,i)=>{for(var n,s=i>1?void 0:i?go(e,o):e,r=t.length-1;r>=0;r--)(n=t[r])&&(s=(i?n(e,o,s):n(s))||s);return i&&s&&uo(e,o,s),s};let fo=class extends se{constructor(){super(...arguments),this.type="text",this.icon="",this.label="输入框",this.placeholder="",this.enable=!0,this.readonly=!1,this.value=""}_handleKeyDown(t){t.stopPropagation()}_handleInput(t){const e=t.target;this.value=e.value,this.dispatchEvent(new CustomEvent("hm-input-change",{detail:{value:this.value},bubbles:!0,composed:!0}))}render(){return Ut`
<div class="input-container">
  <span class="label">${this.label}</span>
  ${this.icon?Ut`<hm-icon icon="${this.icon}" class="icon"></hm-icon>`:""}
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
    `}};fo.styles=st`
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
`,mo([he({type:String})],fo.prototype,"type",2),mo([he({type:String})],fo.prototype,"icon",2),mo([he({type:String})],fo.prototype,"label",2),mo([he({type:String})],fo.prototype,"placeholder",2),mo([he({type:Boolean})],fo.prototype,"enable",2),mo([he({type:Boolean})],fo.prototype,"readonly",2),mo([he()],fo.prototype,"value",2),fo=mo([le("hm-input")],fo);const vo=Object.freeze(Object.defineProperty({__proto__:null,get HmInput(){return fo}},Symbol.toStringTag,{value:"Module"}));var yo=Object.defineProperty,bo=Object.getOwnPropertyDescriptor,_o=(t,e,o,i)=>{for(var n,s=i>1?void 0:i?bo(e,o):e,r=t.length-1;r>=0;r--)(n=t[r])&&(s=(i?n(e,o,s):n(s))||s);return i&&s&&yo(e,o,s),s};let wo=class extends se{constructor(){super(...arguments),this.isOpen=!1,this.dialog=this}open(){this.isOpen=!0,this.dispatchEvent(new CustomEvent("hm-dialog-open"))}close(){this.isOpen=!1,this.dispatchEvent(new CustomEvent("hm-dialog-close"))}confirm(){this.close(),this.dispatchEvent(new CustomEvent("hm-dialog-confirm"))}cancel(){this.close(),this.dispatchEvent(new CustomEvent("hm-dialog-cancel"))}updated(t){t.has("isOpen")&&(this.isOpen?this.style.display="block":this.style.display="none")}render(){return Ut`
<div class="overlay"
@click="${this.close}"
></div>
<div class="content">
    <slot></slot>
    <div class="footer">
        <slot name="footer">
            <hm-button @hm-button-click="${()=>{this.cancel(),console.debug("取消")}}">取消</hm-button>
            <hm-button @hm-button-click="${()=>{this.confirm(),console.debug("确定")}}">确定</hm-button>
        </slot>
    </div>
</div>
    `}};wo.styles=st`
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
    `,_o([he({type:Boolean,attribute:"isopen"})],wo.prototype,"isOpen",2),wo=_o([le("hm-dialog")],wo);const $o=Object.freeze(Object.defineProperty({__proto__:null,get HmDialog(){return wo}},Symbol.toStringTag,{value:"Module"})),xo=Object.freeze(Object.defineProperty({__proto__:null,hm_accordion:po,hm_button:We,hm_cell:Ze,hm_dialog:$o,hm_icon:Te,hm_input:vo,hm_menu:ze,hm_move_panel:ye,hm_notification:Le,hm_swipe_cell:eo,hm_switch:ro},Symbol.toStringTag,{value:"Module"}));let So=document.createElement("div");function ko(){So.id="hmMenuHolder";let t=document.querySelector("#functionHolderImg");console.debug(t),console.debug(So),null!==t&&t.parentElement.insertAdjacentElement("afterend",So)}const Co=Object.freeze(Object.defineProperty({__proto__:null,initMenuHolder:ko,menuHolder:So},Symbol.toStringTag,{value:"Module"}));let Ao=document.createElement("div");function Oo(){Ao.id="hmMovePanelHolder",Ao.style.zIndex="999999",document.body.append(Ao)}const Eo=Object.freeze(Object.defineProperty({__proto__:null,initMovePanelHolder:Oo,movePanelHolder:Ao},Symbol.toStringTag,{value:"Module"}));let To=document.createElement("div");function Mo(){To.id="hmNotificationHolder",To.style.zIndex="999999",document.body.append(To)}const Ho=Object.freeze(Object.defineProperty({__proto__:null,initNotificationHolder:Mo,notificationHolder:To},Symbol.toStringTag,{value:"Module"}));let Po=document.createElement("div");function jo(){Po.id="hmDialogHolder",Po.style.zIndex="999999",document.body.append(Po)}const zo=Object.freeze(Object.defineProperty({__proto__:null,dialogHolder:Po,initDialogHolder:jo},Symbol.toStringTag,{value:"Module"}));var Bo=Object.defineProperty,Io=(t,e,o,i)=>{for(var n,s=void 0,r=t.length-1;r>=0;r--)(n=t[r])&&(s=n(e,o,s)||s);return s&&Bo(e,o,s),s};class Do extends se{constructor(){super(...arguments),this.dialogOpen=!1,this.message="请做出选择",this.closeCallback=null,this.cancelCallback=null,this.confirmCallback=null}handelClick(){this.dispatchEvent(new CustomEvent("hmclick"))}static{this.styles=st`
`}render(){return Ut`
<hm-dialog
  ?isopen="${this.dialogOpen}"
  @hm-dialog-close="${()=>{this.dialogOpen=!1}}"
  @hm-dialog-cancel="${()=>{this.cancelCallback&&this.cancelCallback()}}"
  @hm-dialog-confirm="${()=>{this.confirmCallback&&this.confirmCallback()}}"
>
  <p>${this.message}</p>
</hm-dialog>
        `}}Io([he({type:Boolean})],Do.prototype,"dialogOpen"),Io([he({type:String})],Do.prototype,"message"),Io([he({type:Function})],Do.prototype,"closeCallback"),Io([he({type:Function})],Do.prototype,"cancelCallback"),Io([he({type:Function})],Do.prototype,"confirmCallback");const No=document.createElement("hm-dialog-app");async function Lo(){customElements.define("hm-dialog-app",Do),No.dialogOpen=!1,No.message="请做出选择",No.closeCallback=null,No.cancelCallback=null,No.confirmCallback=null,Po.append(No)}const Uo=Object.freeze(Object.defineProperty({__proto__:null,HmDialogApp:Do,dialogApp:No,initDialogApp:Lo},Symbol.toStringTag,{value:"Module"})),Vo={success(t,e,o=3e3){let i=document.createElement("hm-notification");i.title=t,i.content=e,i.displayTime=o,i.backgroundColor="rgba(57, 231, 34, 0.7)",i.color="rgb(255,255,255)",To.append(i)},warning(t,e,o=3e3){let i=document.createElement("hm-notification");i.title=t,i.content=e,i.displayTime=o,i.backgroundColor="rgba(255,193,7,0.7)",i.color="rgb(255,255,255)",To.append(i)},error(t,e,o=3e3){let i=document.createElement("hm-notification");i.title=t,i.content=e,i.displayTime=o,i.backgroundColor="rgba(255,0,0,0.7)",i.color="rgb(255,255,255)",To.append(i)},normal(t,e,o=3e3){let i=document.createElement("hm-notification");i.title=t,i.content=e,i.displayTime=o,i.backgroundColor="rgba(33,33,33,0.7)",i.color="rgb(255,255,255)",To.append(i)}};const Ro=Object.freeze(Object.defineProperty({__proto__:null,confirm:function(t,e,o,i){No.message=t,No.confirmCallback=e||null,No.cancelCallback=o||null,No.closeCallback=i||null,No.dialogOpen=!0,console.debug("弹窗已打开",No)},notice:Vo},Symbol.toStringTag,{value:"Module"}));var qo=Object.defineProperty,Wo=(t,e,o,i)=>{for(var n,s=void 0,r=t.length-1;r>=0;r--)(n=t[r])&&(s=n(e,o,s)||s);return s&&qo(e,o,s),s};class Fo extends se{constructor(){super(...arguments),this.scriptName="",this.scriptUrl="",this.scriptEnable=!0,this.scriptIngected=!1,this.dialogOpen=!1,this.scriptList=N}render(){return Ut`
<hm-dialog
  ?isopen="${this.dialogOpen}"
  @hm-dialog-close="${()=>{this.dialogOpen=!1}}"
  @hm-dialog-confirm="${()=>{if(""==this.scriptName.trim()||""==this.scriptUrl.trim())return void Vo.error("脚本管理","请填写完整的脚本信息");this.scriptEnable=!0,this.scriptIngected=!1,L(new D(this.scriptName,this.scriptUrl,this.scriptEnable,this.scriptIngected)),W(),this.scriptList=N}}"
>
  <h2>修改或添加脚本</h2>
  <hm-input
    label="脚本名称"
    placeholder="请输入脚本名称"
    value="${this.scriptName}"
    @hm-input-change="${t=>{this.scriptName=t.detail.value,console.debug(this.scriptName)}}"
  ></hm-input>
  <hm-input
    label="脚本链接"
    placeholder="请输入https的脚本链接"
    value="${this.scriptUrl}"
    @hm-input-change="${t=>{this.scriptUrl=t.detail.value,console.debug(this.scriptUrl)}}"
  ></hm-input>
</hm-dialog>

<hm-accordion>
  <span slot="header">脚本列表</span>
  ${this.scriptList.map(t=>Ut`
<hm-swipe-cell>
  <div slot="left-actions">
    <hm-button
      @hm-button-click="${()=>{U(t),W(),this.scriptList=N}}"
      >删除</hm-button
    >
  </div>
  <hm-cell
    slot="content"
    titleName="${t.name}"
    descripthion="${t.url}"
  >
    <hm-switch
      slot="content"
      ?checked="${t.enable}"
      @hm-switch-change="${e=>{t.enable=e.detail.checked,L(t),W(),this.scriptList=N}}"
    ></hm-switch>
  </hm-cell>

  <div slot="right-actions">
    <hm-button
      @hm-button-click="${()=>{this.scriptName=t.name,this.scriptUrl=t.url,this.dialogOpen=!0}}"
      >修改</hm-button
    >
    <hm-button
      ?enable="${!t.ingected}"
      @hm-button-click="${()=>{t.ingected=V(t),L(t),this.scriptList=N}}"
      >运行</hm-button
    >
  </div>
</hm-swipe-cell>

`)}
  <div slot="footer">
    <hm-button
      @click="${()=>{q(),this.scriptList=N}}"
      >刷新</hm-button
    >
    <hm-button
      @click="${()=>{this.scriptName="",this.scriptUrl="",this.scriptEnable=!0,this.scriptIngected=!1,this.dialogOpen=!0}}"
      >添加</hm-button
    >
    <hm-button @click="${()=>{W()}}"
      >保存</hm-button
    >
  </div>
</hm-accordion>
    `}}Wo([he({type:String})],Fo.prototype,"scriptName"),Wo([he({type:String})],Fo.prototype,"scriptUrl"),Wo([he({type:Boolean})],Fo.prototype,"scriptEnable"),Wo([he({type:Boolean})],Fo.prototype,"scriptIngected"),Wo([he({type:Boolean})],Fo.prototype,"dialogOpen"),Wo([he({type:Array})],Fo.prototype,"scriptList");const Xo={name:"hortimagic",private:!1,version:"1.0.4dev4",changelog:"增加了存储库",author:"Narlen",description:"园艺魔法，花园插件",keywords:["iirose","plugins","hortimagic"],repository:{type:"git",url:"https://github.com/NarlenHua/hortimagic.git"},license:"MIT",type:"module",scripts:{dev:"vite",build:"tsc && vite build",preview:"vite preview"},dependencies:{lit:"^3.3.1",terser:"^5.44.0","vite-plugin-dts":"^4.5.4"},devDependencies:{"@types/node":"^24.9.1",typescript:"~5.9.3",vite:"^7.1.7"},main:"dist/Horticraft.life.js",module:"dist/HortiCraft.es.js",typings:"dist/index.d.ts",types:"dist/index.d.ts",files:["dist","src/components","types"]};var Jo=Object.defineProperty;class Go extends se{constructor(){super(...arguments),this.allowHortimagicNotice=!0}static{this.styles=st`
`}render(){return Ut`
 <hm-cell title-name="开启新通知" descripthion="使用Hortimagic通知功能"> 
 <hm-switch 
    slot="content"
    ?checked="${this.allowHortimagicNotice}"
    open-icon="led-on"
    close-icon="led-off"
    @hm-switch-change="${t=>{console.log("switch state:",t.detail.checked)}}"
  ></hm-switch>
`}}((t,e,o)=>{for(var i,n=void 0,s=t.length-1;s>=0;s--)(i=t[s])&&(n=i(e,o,n)||n);n&&Jo(e,o,n)})([he({type:Boolean})],Go.prototype,"allowHortimagicNotice");let Zo={allowNotice:!0};async function Yo(){try{!function(){let t=localStorage.getItem("HortimagicConfig");null==t?localStorage.setItem("HortimagicConfig",JSON.stringify(Zo)):Zo=JSON.parse(t)}(),Mo(),jo(),await Lo(),ko(),Oo(),Vo.normal(Xo.name,"注入网络钩子函数"),await O(),Vo.normal(Xo.name,"注入钩子函数"),j(),B(),Vo.normal(Xo.name,"注入脚本"),F(),Vo.normal(Xo.name,"生成菜单");let t=document.createElement("hm-menu");t.content="HortiMagic",t.isMenuItem=!1;let e=function(){customElements.define("hm-config-app",Go);let t=document.createElement("hm-move-panel");t.titleContent="设置",t.icon="config",Ao.appendChild(t),t.innerHTML="\n  <hm-config-app></hm-config-app>\n  ";let e=document.createElement("hm-menu");return e.content="设置",e.isMenuItem=!0,e.icon="config",e.addEventListener("hm-menu-click",function(){t.putTopToggel()}),e}(),o=function(){customElements.define("hm-script-app",Fo);let t=document.createElement("hm-move-panel");t.titleContent="脚本管理",t.icon="js",Ao.appendChild(t),t.innerHTML="\n  <hm-script-app></hm-script-app>\n  ";let e=document.createElement("hm-menu");return e.content="脚本管理",e.isMenuItem=!0,e.icon="js",e.addEventListener("hm-menu-click",function(){t.putTopToggel()}),e}();t.addEventListener("hm-menu-click",function(){e.flag=t.flag,o.flag=t.flag}),So.append(t,e,o),Vo.success(Xo.name,`${Xo.version} 已加载`)}catch(t){console.error(t)}}const Ko=Object.freeze(Object.defineProperty({__proto__:null,init:Yo},Symbol.toStringTag,{value:"Module"})),Qo=Object.freeze(Object.defineProperty({__proto__:null,dialog_app:Uo,main_app:Ko},Symbol.toStringTag,{value:"Module"})),ti=Object.freeze(Object.defineProperty({__proto__:null,dialog:zo,menu:Co,move_panel:Eo,notification:Ho},Symbol.toStringTag,{value:"Module"})),ei={name:Xo.name,version:Xo.version,changelog:Xo.changelog,description:Xo.description,author:Xo.author,license:Xo.license,repository:Xo.repository,buildTime:(new Date).toISOString(),ingected:!1};return async function(){await Yo(),ei.ingected=!0}(),t.apps=Qo,t.components=xo,t.core=Q,t.easy_tools=Ro,t.holders=ti,t.information=ei,Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),t}({});
