var hortimagic=function(t){"use strict";async function e(t){return new Promise(e=>setTimeout(e,t))}function i(t){return t=(t=(t=(t=(t=(t=t.replace("&","&amp;")).replace("<","&lt;")).replace(">","&gt;")).replace('"',"&quot;")).replace("'","&#039;")).replace("\\","&#092;")}function o(t){return t=(t=(t=(t=(t=(t=t.replace("&lt;","<")).replace("&gt;",">")).replace("&quot;",'"')).replace("&#039;","'")).replace("&#092;","\\")).replace("&amp;","&")}function n(){return window.myself?window.myself:null}function s(){return window.uid?window.uid:null}function r(){return window.avatar2&&window.avatarconv?window.avatarconv(window.avatar2):null}function l(){return window.inputcolorhex?window.inputcolorhex:null}const a=Object.freeze(Object.defineProperty({__proto__:null,addStyle:function(t){let e=document.createElement("style");e.innerText=t,document.body.append(e)},changeRoom:function(t){(t=String(t))&&window.Objs.mapHolder?.function?.roomchanger(t)},compressCSS:function(t){return t=(t=(t=(t=(t=t.replace(/\s{2,}/g," ")).replace(/\/\*[\s\S]*?\*\//g,"")).replace(/\s*([{};:,])\s*/g,"$1")).replace(/;\s*}/g,"}")).trim()},compressHTML:function(t){return t=(t=(t=(t=t.replace(/>\s+</g,"><")).replace(/\s{2,}/g," ")).replace(/<!--[\s\S]*?-->/g,"")).trim()},generatePrivateMessageBubble:function(t,e,o){window.privatechatfunc&&window.privatechatfunc([Math.floor(Date.now()/1e3).toString(10),s(),i(n()),i(r()),i(e),i(l()),"",i(l()),"","",o,t,"","","","",""].join(">"))},getAllOnlineUserInfo:function(){let t=window.Objs.mapHolder.Assets.userJson;return t?Object.keys(t).map(e=>{let i=t[e];return{name:i[2],uid:i[8],color:i[3],avatar:i[0],roomId:i[4],personalizedSignature:i[6]}}):null},getOnlineUserInfoById:function(t){t=String(t);let e=window.Objs.mapHolder?.function?.findUserByUid?.(t);return e?{name:e[2],uid:t,color:e[3],avatar:e[0],roomId:e[4],personalizedSignature:e[6]}:null},getRoomId:function(){return window.roomn?window.roomn:null},getRoomInfoById:function(t){let e=window.Objs.mapHolder?.Assets?.roomJson?.[t];if(e){let t=e[5].split("&&").map(t=>t.split(" & ")),i=o(t[0][0]),n=i.indexOf(" ");return{name:e[1],color:e[2],roomPath:e[0].split("_"),description:i.slice(n+1),roomImage:i.slice(0,n),currentUserNum:"number"==typeof e[7]?e[7]:"hidden",ownerName:t[1][0],member:t[4].map(t=>({name:o(t.slice(1)),auth:"0"==t[0]?"member":"1"==t[0]?"admin":"unknow"}))}}return null},getUserInputColor:l,getUserName:n,getUserProfilePictureUrl:r,getUserUid:s,htmlSpecialCharsDecode:o,htmlSpecialCharsEscape:i,sleep:e,switchRoom:function(t){window.Objs.mapHolder?.function?.roomchanger&&window.Objs.mapHolder.function.roomchanger(t)}},Symbol.toStringTag,{value:"Module"}));class c{constructor(){this.timeStamp="",this.headPortrait="",this.name="",this.message="",this.color="",this.gender="",this.uid="",this.designation="",this.messageUid=""}}class h{constructor(){this.timeStamp="",this.headPortrait="",this.name="",this.message="",this.color="",this.gender="",this.uid="",this.messageUid=""}}class d{constructor(){this.messageName="",this.uid="",this.data=""}}class p{constructor(){this.username="",this.avatar="",this.message="",this.color="",this.gender="",this.timeStamp="",this.uid=""}}class u{constructor(){this.privateUID="",this.uid="",this.messageUid="",this.dataUid=""}}class m{constructor(){this.userMessageList=[]}}class g{constructor(){this.result="",this.stockPrice=NaN,this.totalStock=NaN,this.holdingAmount=NaN,this.totalEquity=NaN,this.balance=NaN}}class f{constructor(){this.message=""}}const v=Object.freeze(Object.defineProperty({__proto__:null,Danmu:p,Hidden:d,Private:h,Public:c,Stock:g,System:m,Unkonw:f,Withdrawn:u},Symbol.toStringTag,{value:"Module"}));let y=[];function b(t){return t instanceof c?"public":t instanceof h?"private":t instanceof d?"hidden":t instanceof p?"danmu":t instanceof u?"withdrawn":t instanceof m?"system":t instanceof g?"stock":"unknown"}function _(t){let e=new c,i=t.split(">");return e.timeStamp=i[0],e.headPortrait=i[1],e.name=i[2],e.message=i[3],e.color=i[5],e.gender=i[6],e.uid=i[8],e.designation=i[9],e.messageUid=i[10],e}function w(t){let e=new h,i=t.split(">");return e.timeStamp=i[0].slice(1),e.uid=i[1],e.name=i[2],e.headPortrait=i[3],e.message=i[4],e.color=i[5],e.gender=i[8],e.messageUid=i[10],e}function $(t){let e=new p,i=t.split(">");return e.username=i[0],e.message=i[1],e.color=i[2],e.gender=i[4],e.avatar=i[5],e.timeStamp=i[6],e.uid=i[7],e}function x(t){if(y=[],/^"[^"].*/gs.test(t)){let e=t.slice(1).split("<");for(let t=e.length-1;t>=0;t--)y.push(_(e[t]))}else if(/^"".*/gs.test(t)){let e=t.slice(1).split("<");for(let t=e.length-1;t>=0;t--)y.push(w(e[t]))}else if(/^=.*/gs.test(t)){let e=t.slice(1).split("<");for(let t=e.length-1;t>=0;t--)y.push($(e[t]))}else/^[/]<.*>[0-9|a-z]{13}:.*/gs.test(t)?y.push(function(t){let e,i=new d;return e=t.match(/(?<=^[/]<).*(?=>[0-9|a-z]{13}:.*)/gs),i.messageName=null==e?"":e[0],e=t.match(/(?<=^[/]<.*>)[0-9|a-z]{13}(?=:.*)/gs),i.uid=null==e?"":e[0],e=t.match(/(?<=^[/]<.*>[0-9|a-z]{13}:).*/gs),i.data=null==e?"":e[0],i}(t)):/^v0.*/gs.test(t)?y.push(function(t){let e=new u;return"#"==t[2]?(e.privateUID="",e.uid=t.slice(3,16),e.messageUid=t.slice(17,29),e.dataUid=t.slice(3,29)):(e.privateUID=t.slice(3,16),e.uid=t.slice(17,30),e.messageUid=t.slice(31),e.dataUid=t.slice(17)),e}(t)):/^%\*".*/gs.test(t)?y.push(function(t){let e=new m;return e.userMessageList=t.split("<"),e}(t)):/^>.*/gs.test(t)?y.push(function(t){let e=new g;if(e.result=t[2],"*"==e.result)return e;if(">"==e.result)return e.holdingAmount=parseInt(t.slice(2)),e;if("<"==e.result)return e.balance=parseInt(t.slice(2)),e;{let i=t.split('"');if(5==i.length)return e.stockPrice=parseFloat(i[2]),e.totalStock=parseInt(i[0].slice(1)),e.holdingAmount=parseInt(i[3]),e.totalEquity=parseFloat(i[1]),e.balance=parseFloat(i[4]),e;if(4==i.length)return e.stockPrice=parseFloat(i[1])/parseInt(i[0].slice(1)),e.totalStock=parseInt(i[0].slice(1)),e.holdingAmount=parseInt(i[2]),e.totalEquity=parseFloat(i[1]),e.balance=parseFloat(i[3]),e}return e}(t)):y.push(function(t){let e=new f;return e.message=t,e}(t))}const S=Object.freeze(Object.defineProperty({__proto__:null,decodeMessage:x,judegMessageClass:b,get messageObjList(){return y}},Symbol.toStringTag,{value:"Module"}));class k{constructor(){this.events=new Map}on(t,e){return this.events.has(t)||this.events.set(t,new Set),this.events.get(t).add(e),this}once(t,e){const i=(...o)=>{e(...o),this.off(t,i)};return this.on(t,i)}off(t,e){return this.events.has(t)?(e?this.events.get(t).delete(e):this.events.delete(t),this):this}emit(t,...e){const i=this.events.get(t);return!(!i||0===i.size)&&(i.forEach(t=>t(...e)),!0)}}const C=Object.freeze(Object.defineProperty({__proto__:null,EventEmitter:k},Symbol.toStringTag,{value:"Module"})),A=new k;async function E(){console.debug("代理网络");for(let i=0;i<30;i++)try{if(console.debug("等待网络连接",i),null==window.socket.__onmessage&&null!=window.socket._onmessage&&null!=window.socket.send){console.debug("网络连接成功");break}await e(500);continue}catch(t){console.error(t)}null==window.socket.__onmessage&&null!=window.socket._onmessage&&null!=window.socket.send?(O.originalSend=window.socket.send,window.socket.send=O.send,O.originalOnmessage=window.socket._onmessage,window.socket._onmessage=O.onmessage):console.error("连接失败")}const O={beforeSend:async function(t){return t},originalSend:function(t){return t},afterSend:function(t){return t},send:async function(t){console.log("发送",{message:t});let e=await O.beforeSend(t);try{null!=e&&(O.originalSend(e),O.afterSend(e))}catch(i){console.error("捕获到错误",i)}},beforeOnmessage:async function(t){return x(t),t},originalOnmessage:function(t){return t},afterOnmessage:async function(t){for(let e of y)console.log(`触发${b(e)}消息`,{message:t,messageObj:e}),A.emit(b(e),e);return t},onmessage:async function(t){let e=await O.beforeOnmessage(t);try{null!=e&&(O.originalOnmessage(e),O.afterOnmessage(e))}catch(i){console.error("捕获到错误",i)}},initSocket:E},M=Object.freeze(Object.defineProperty({__proto__:null,initSocket:E,messageEmitter:A,sockets:O},Symbol.toStringTag,{value:"Module"}));function T(t,e){return"cut"===t?`{0${JSON.stringify({m:t,mc:e,i:Math.random().toString().slice(2,12)})}`:JSON.stringify({m:t,mc:e,i:Math.random().toString().slice(2,12)})}const H=Object.freeze(Object.defineProperty({__proto__:null,danmu:function(t,e,i="0"){return`~{"t":"${t}","c":"${e}","v":${i}}`},hidden:function(t,e,i){return`/<${t}>${e}:${i}`},like:function(t,e=""){return`+*${t}${e}`},musicCard:function(t,e,i,o,n,s){return T(`m__4=${t}>${e}>${i}>${o}>${n}>${s}`,n)},privateChat:function(t,e,i){return JSON.stringify({g:t,m:e,mc:i,i:Math.random().toString().slice(2,12)})},publicChat:T,stockRequest:function(t){return null==t?">#":t>0?`>$${Math.round(Math.abs(t))}`:t<0?`>@${Math.round(Math.abs(t))}`:">#"},videoCard:function(t,e,i,o,n,s,r){return T(`m__4*${t}>${e}>${i}>${o}>${n}>${s}>${r}`,n)},withdrawn:function(t,e=""){return""==e?`v0#${t}`:`v0*${e}#${t}`}},Symbol.toStringTag,{value:"Module"}));let P={movePanelHolder:document.querySelector("#movePanelHolder"),functionHolder:document.querySelector("#functionHolder"),functionButtonGroupList:[...document.querySelectorAll(".functionButton.functionButtonGroup")],msgholderBox:document.querySelector("#msgholder .fullBox.msgholderBox"),homeHolderMsgBox:document.querySelector("#homeHolder .homeHolderMsgContentBox .homeHolderMsgBox.fullBox"),sessionHolderPmTaskBoxItems:[...document.querySelectorAll(".sessionHolderPmTaskBoxItem.whoisTouch2")],moveinputDisplay:document.querySelector("#moveinputDisplay"),moveinput:document.getElementById("moveinput"),moveinputSendBtnFunc:document.querySelector("#moveinputDisplay #moveinputSendBtnFunc"),moveinputSendBtnSend:document.querySelector("#moveinputDisplay #moveinputSendBtnSend")};function j(){P.movePanelHolder=document.querySelector("#movePanelHolder"),P.functionHolder=document.querySelector("#functionHolder"),P.functionButtonGroupList=[...document.querySelectorAll(".functionButton.functionButtonGroup")],P.msgholderBox=document.querySelector("#msgholder .fullBox .fullBox.msgholderBox"),P.homeHolderMsgBox=document.querySelector("#homeHolder .homeHolderMsgContentBox .homeHolderMsgBox.fullBox"),P.sessionHolderPmTaskBoxItems=[...document.querySelectorAll(".sessionHolderPmTaskBoxItem.whoisTouch2")],P.moveinputDisplay=document.querySelector("#moveinputDisplay"),P.moveinput=document.getElementById("moveinput"),P.moveinputSendBtnFunc=document.querySelector("#moveinputDisplay #moveinputSendBtnFunc"),P.moveinputSendBtnSend=document.querySelector("#moveinputDisplay #moveinputSendBtnSend")}let z={elementHooks:{moveinput:{oninputBefore:()=>!0,oninputAfter:()=>!0,onblurBefore:()=>!0,onblurAfter:()=>!0,onfocusBefore:()=>!0,onfocusAfter:()=>!0}},functionHooks:{processer:{onBefore:(t,e,i,o)=>!0,onAfter:(t,e,i,o)=>!0}},replaceMoveinput:()=>{try{let t=P.moveinput.oninput;P.moveinput.oninput=function(){1==z.elementHooks.moveinput.oninputBefore()&&(t?.call(P.moveinput),z.elementHooks.moveinput.oninputAfter())}}catch(t){console.error("替换错误",t)}try{let t=P.moveinput.oninput;P.moveinput.onblur=function(){1==z.elementHooks.moveinput.onblurBefore()&&(t?.call(P.moveinput),z.elementHooks.moveinput.onblurAfter())}}catch(t){console.error("替换错误",t)}try{let t=P.moveinput.oninput;P.moveinput.onfocus=function(){1==z.elementHooks.moveinput.onfocusBefore()&&(t?.call(P.moveinput),z.elementHooks.moveinput.onfocusAfter())}}catch(t){console.error("替换错误",t)}},replaceButtonProcesser:()=>{try{let t=buttonProcesser;buttonProcesser=(e,i,o,n)=>{1==z.functionHooks.processer.onBefore(e,i,o,n)&&(t(e,i,o,n),z.functionHooks.processer.onAfter(e,i,o,n))}}catch(t){console.error("替换错误",t)}}};function B(){console.log("增加钩子函数"),z.replaceMoveinput(),z.replaceButtonProcesser()}const I=Object.freeze(Object.defineProperty({__proto__:null,Hooks:z,elements:P,initHooks:B,refreshAll:j},Symbol.toStringTag,{value:"Module"}));class D{constructor(t,e,i=!0,o=!1){this.name=t,this.url=e,this.enable=i,this.ingected=o}}let N=[];function U(t){if(""==t.name||""==t.url)return _alert("脚本名字或链接不能为空"),!1;for(let e of N){if(e.name===t.name)return e.url=t.url,e.enable=t.enable,e.ingected=t.ingected,!1;if(e.url===t.url)return e.name=t.name,e.enable=t.enable,e.ingected=t.ingected,!1}return N.push(t),!0}function L(t){N=N.filter(e=>e.name!==t.name&&e.url!==t.url)}function V(t){if(t.ingected)return _alert(`脚本 ${t.name} 已经注入`),t.ingected;const e=document.createElement("script");return e.src=t.url,e.onload=()=>{_alert(`脚本 ${t.name} 注入成功`),t.ingected=!0},e.onerror=()=>{_alert(`脚本 ${t.name} 注入失败`),t.enable=!1},document.head.appendChild(e),t.ingected}function R(t){for(let e of t)e.enable&&!e.ingected&&V(e)}function q(){let t=localStorage.getItem("hortiMagicScriptList");N=null==t?[]:JSON.parse(t);for(let e of N)e.ingected=!1}function W(){localStorage.setItem("hortiMagicScriptList",JSON.stringify(N)),_alert("脚本列表已保存")}function X(){q(),R(N)}const F=Object.freeze(Object.defineProperty({__proto__:null,Script:D,addScriptToList:U,ingectlocalScript:X,injectScript:V,injectScriptList:R,readScriptList:q,removeScriptFromList:L,saveScriptList:W,get scriptList(){return N}},Symbol.toStringTag,{value:"Module"}));var J,G={exports:{}};var Z=function(){if(J)return G.exports;function t(){}return J=1,t.prototype={on:function(t,e,i){var o=this.e||(this.e={});return(o[t]||(o[t]=[])).push({fn:e,ctx:i}),this},once:function(t,e,i){var o=this;function n(){o.off(t,n),e.apply(i,arguments)}return n._=e,this.on(t,n,i)},emit:function(t){for(var e=[].slice.call(arguments,1),i=((this.e||(this.e={}))[t]||[]).slice(),o=0,n=i.length;o<n;o++)i[o].fn.apply(i[o].ctx,e);return this},off:function(t,e){var i=this.e||(this.e={}),o=i[t],n=[];if(o&&e)for(var s=0,r=o.length;s<r;s++)o[s].fn!==e&&o[s].fn._!==e&&n.push(o[s]);return n.length?i[t]=n:delete i[t],this}},G.exports=t,G.exports.TinyEmitter=t,G.exports}();const Y=Object.freeze(Object.defineProperty({__proto__:null,Store:class{constructor(){this.emitter=new Z.TinyEmitter,this.storeMap=new Map}clear(){this.storeMap.clear(),this.emitter.emit("clear")}set(t,e){this.storeMap.set(t,e),this.emitter.emit("set",t,e)}get(t){return this.storeMap.get(t)}has(t){return this.storeMap.has(t)}delete(t){let e=this.storeMap.delete(t);return e&&this.emitter.emit("delete",t),e}size(){return this.storeMap.size}keys(){return this.storeMap.keys()}values(){return this.storeMap.values()}entries(){return this.storeMap.entries()}}},Symbol.toStringTag,{value:"Module"})),K=Object.freeze(Object.defineProperty({__proto__:null,EventEmitter:C,Message:v,Store:Y,decoder:S,elements_hooks:I,encoder:H,iirose_socket:M,script_tools:F,tools:a},Symbol.toStringTag,{value:"Module"})),Q=globalThis,tt=Q.ShadowRoot&&(void 0===Q.ShadyCSS||Q.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,et=Symbol(),it=new WeakMap;let ot=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==et)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(tt&&void 0===t){const i=void 0!==e&&1===e.length;i&&(t=it.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&it.set(e,t))}return t}toString(){return this.cssText}};const nt=(t,...e)=>{const i=1===t.length?t[0]:e.reduce((e,i,o)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[o+1],t[0]);return new ot(i,t,et)},st=tt?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return(t=>new ot("string"==typeof t?t:t+"",void 0,et))(e)})(t):t,{is:rt,defineProperty:lt,getOwnPropertyDescriptor:at,getOwnPropertyNames:ct,getOwnPropertySymbols:ht,getPrototypeOf:dt}=Object,pt=globalThis,ut=pt.trustedTypes,mt=ut?ut.emptyScript:"",gt=pt.reactiveElementPolyfillSupport,ft=(t,e)=>t,vt={toAttribute(t,e){switch(e){case Boolean:t=t?mt:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(o){i=null}}return i}},yt=(t,e)=>!rt(t,e),bt={attribute:!0,type:String,converter:vt,reflect:!1,useDefault:!1,hasChanged:yt};Symbol.metadata??=Symbol("metadata"),pt.litPropertyMetadata??=new WeakMap;let _t=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=bt){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){const i=Symbol(),o=this.getPropertyDescriptor(t,i,e);void 0!==o&&lt(this.prototype,t,o)}}static getPropertyDescriptor(t,e,i){const{get:o,set:n}=at(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get:o,set(e){const s=o?.call(this);n?.call(this,e),this.requestUpdate(t,s,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??bt}static _$Ei(){if(this.hasOwnProperty(ft("elementProperties")))return;const t=dt(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(ft("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(ft("properties"))){const t=this.properties,e=[...ct(t),...ht(t)];for(const i of e)this.createProperty(i,t[i])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,i]of e)this.elementProperties.set(t,i)}this._$Eh=new Map;for(const[e,i]of this.elementProperties){const t=this._$Eu(e,i);void 0!==t&&this._$Eh.set(t,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(st(t))}else void 0!==t&&e.push(st(t));return e}static _$Eu(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const i of e.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((t,e)=>{if(tt)t.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const i of e){const e=document.createElement("style"),o=Q.litNonce;void 0!==o&&e.setAttribute("nonce",o),e.textContent=i.cssText,t.appendChild(e)}})(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$ET(t,e){const i=this.constructor.elementProperties.get(t),o=this.constructor._$Eu(t,i);if(void 0!==o&&!0===i.reflect){const n=(void 0!==i.converter?.toAttribute?i.converter:vt).toAttribute(e,i.type);this._$Em=t,null==n?this.removeAttribute(o):this.setAttribute(o,n),this._$Em=null}}_$AK(t,e){const i=this.constructor,o=i._$Eh.get(t);if(void 0!==o&&this._$Em!==o){const t=i.getPropertyOptions(o),n="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:vt;this._$Em=o;const s=n.fromAttribute(e,t.type);this[o]=s??this._$Ej?.get(o)??s,this._$Em=null}}requestUpdate(t,e,i){if(void 0!==t){const o=this.constructor,n=this[t];if(i??=o.getPropertyOptions(t),!((i.hasChanged??yt)(n,e)||i.useDefault&&i.reflect&&n===this._$Ej?.get(t)&&!this.hasAttribute(o._$Eu(t,i))))return;this.C(t,e,i)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(t,e,{useDefault:i,reflect:o,wrapped:n},s){i&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,s??e??this[t]),!0!==n||void 0!==s)||(this._$AL.has(t)||(this.hasUpdated||i||(e=void 0),this._$AL.set(t,e)),!0===o&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,i]of t){const{wrapped:t}=i,o=this[e];!0!==t||this._$AL.has(e)||void 0===o||this.C(e,void 0,i,o)}}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(t=>t.hostUpdate?.()),this.update(e)):this._$EM()}catch(i){throw t=!1,this._$EM(),i}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(t){}firstUpdated(t){}};_t.elementStyles=[],_t.shadowRootOptions={mode:"open"},_t[ft("elementProperties")]=new Map,_t[ft("finalized")]=new Map,gt?.({ReactiveElement:_t}),(pt.reactiveElementVersions??=[]).push("2.1.1");const wt=globalThis,$t=wt.trustedTypes,xt=$t?$t.createPolicy("lit-html",{createHTML:t=>t}):void 0,St="$lit$",kt=`lit$${Math.random().toFixed(9).slice(2)}$`,Ct="?"+kt,At=`<${Ct}>`,Et=document,Ot=()=>Et.createComment(""),Mt=t=>null===t||"object"!=typeof t&&"function"!=typeof t,Tt=Array.isArray,Ht="[ \t\n\f\r]",Pt=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,jt=/-->/g,zt=/>/g,Bt=RegExp(`>|${Ht}(?:([^\\s"'>=/]+)(${Ht}*=${Ht}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),It=/'/g,Dt=/"/g,Nt=/^(?:script|style|textarea|title)$/i,Ut=(Wt=1,(t,...e)=>({_$litType$:Wt,strings:t,values:e})),Lt=Symbol.for("lit-noChange"),Vt=Symbol.for("lit-nothing"),Rt=new WeakMap,qt=Et.createTreeWalker(Et,129);var Wt;function Xt(t,e){if(!Tt(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==xt?xt.createHTML(e):e}class Ft{constructor({strings:t,_$litType$:e},i){let o;this.parts=[];let n=0,s=0;const r=t.length-1,l=this.parts,[a,c]=((t,e)=>{const i=t.length-1,o=[];let n,s=2===e?"<svg>":3===e?"<math>":"",r=Pt;for(let l=0;l<i;l++){const e=t[l];let i,a,c=-1,h=0;for(;h<e.length&&(r.lastIndex=h,a=r.exec(e),null!==a);)h=r.lastIndex,r===Pt?"!--"===a[1]?r=jt:void 0!==a[1]?r=zt:void 0!==a[2]?(Nt.test(a[2])&&(n=RegExp("</"+a[2],"g")),r=Bt):void 0!==a[3]&&(r=Bt):r===Bt?">"===a[0]?(r=n??Pt,c=-1):void 0===a[1]?c=-2:(c=r.lastIndex-a[2].length,i=a[1],r=void 0===a[3]?Bt:'"'===a[3]?Dt:It):r===Dt||r===It?r=Bt:r===jt||r===zt?r=Pt:(r=Bt,n=void 0);const d=r===Bt&&t[l+1].startsWith("/>")?" ":"";s+=r===Pt?e+At:c>=0?(o.push(i),e.slice(0,c)+St+e.slice(c)+kt+d):e+kt+(-2===c?l:d)}return[Xt(t,s+(t[i]||"<?>")+(2===e?"</svg>":3===e?"</math>":"")),o]})(t,e);if(this.el=Ft.createElement(a,i),qt.currentNode=this.el.content,2===e||3===e){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(o=qt.nextNode())&&l.length<r;){if(1===o.nodeType){if(o.hasAttributes())for(const t of o.getAttributeNames())if(t.endsWith(St)){const e=c[s++],i=o.getAttribute(t).split(kt),r=/([.?@])?(.*)/.exec(e);l.push({type:1,index:n,name:r[2],strings:i,ctor:"."===r[1]?Kt:"?"===r[1]?Qt:"@"===r[1]?te:Yt}),o.removeAttribute(t)}else t.startsWith(kt)&&(l.push({type:6,index:n}),o.removeAttribute(t));if(Nt.test(o.tagName)){const t=o.textContent.split(kt),e=t.length-1;if(e>0){o.textContent=$t?$t.emptyScript:"";for(let i=0;i<e;i++)o.append(t[i],Ot()),qt.nextNode(),l.push({type:2,index:++n});o.append(t[e],Ot())}}}else if(8===o.nodeType)if(o.data===Ct)l.push({type:2,index:n});else{let t=-1;for(;-1!==(t=o.data.indexOf(kt,t+1));)l.push({type:7,index:n}),t+=kt.length-1}n++}}static createElement(t,e){const i=Et.createElement("template");return i.innerHTML=t,i}}function Jt(t,e,i=t,o){if(e===Lt)return e;let n=void 0!==o?i._$Co?.[o]:i._$Cl;const s=Mt(e)?void 0:e._$litDirective$;return n?.constructor!==s&&(n?._$AO?.(!1),void 0===s?n=void 0:(n=new s(t),n._$AT(t,i,o)),void 0!==o?(i._$Co??=[])[o]=n:i._$Cl=n),void 0!==n&&(e=Jt(t,n._$AS(t,e.values),n,o)),e}class Gt{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:i}=this._$AD,o=(t?.creationScope??Et).importNode(e,!0);qt.currentNode=o;let n=qt.nextNode(),s=0,r=0,l=i[0];for(;void 0!==l;){if(s===l.index){let e;2===l.type?e=new Zt(n,n.nextSibling,this,t):1===l.type?e=new l.ctor(n,l.name,l.strings,this,t):6===l.type&&(e=new ee(n,this,t)),this._$AV.push(e),l=i[++r]}s!==l?.index&&(n=qt.nextNode(),s++)}return qt.currentNode=Et,o}p(t){let e=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class Zt{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,i,o){this.type=2,this._$AH=Vt,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=o,this._$Cv=o?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=Jt(this,t,e),Mt(t)?t===Vt||null==t||""===t?(this._$AH!==Vt&&this._$AR(),this._$AH=Vt):t!==this._$AH&&t!==Lt&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):(t=>Tt(t)||"function"==typeof t?.[Symbol.iterator])(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==Vt&&Mt(this._$AH)?this._$AA.nextSibling.data=t:this.T(Et.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:i}=t,o="number"==typeof i?this._$AC(t):(void 0===i.el&&(i.el=Ft.createElement(Xt(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===o)this._$AH.p(e);else{const t=new Gt(o,this),i=t.u(this.options);t.p(e),this.T(i),this._$AH=t}}_$AC(t){let e=Rt.get(t.strings);return void 0===e&&Rt.set(t.strings,e=new Ft(t)),e}k(t){Tt(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,o=0;for(const n of t)o===e.length?e.push(i=new Zt(this.O(Ot()),this.O(Ot()),this,this.options)):i=e[o],i._$AI(n),o++;o<e.length&&(this._$AR(i&&i._$AB.nextSibling,o),e.length=o)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class Yt{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,i,o,n){this.type=1,this._$AH=Vt,this._$AN=void 0,this.element=t,this.name=e,this._$AM=o,this.options=n,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=Vt}_$AI(t,e=this,i,o){const n=this.strings;let s=!1;if(void 0===n)t=Jt(this,t,e,0),s=!Mt(t)||t!==this._$AH&&t!==Lt,s&&(this._$AH=t);else{const o=t;let r,l;for(t=n[0],r=0;r<n.length-1;r++)l=Jt(this,o[i+r],e,r),l===Lt&&(l=this._$AH[r]),s||=!Mt(l)||l!==this._$AH[r],l===Vt?t=Vt:t!==Vt&&(t+=(l??"")+n[r+1]),this._$AH[r]=l}s&&!o&&this.j(t)}j(t){t===Vt?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class Kt extends Yt{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===Vt?void 0:t}}class Qt extends Yt{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==Vt)}}class te extends Yt{constructor(t,e,i,o,n){super(t,e,i,o,n),this.type=5}_$AI(t,e=this){if((t=Jt(this,t,e,0)??Vt)===Lt)return;const i=this._$AH,o=t===Vt&&i!==Vt||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,n=t!==Vt&&(i===Vt||o);o&&this.element.removeEventListener(this.name,this,i),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class ee{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){Jt(this,t)}}const ie=wt.litHtmlPolyfillSupport;ie?.(Ft,Zt),(wt.litHtmlVersions??=[]).push("3.3.1");const oe=globalThis;let ne=class extends _t{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,i)=>{const o=i?.renderBefore??e;let n=o._$litPart$;if(void 0===n){const t=i?.renderBefore??null;o._$litPart$=n=new Zt(e.insertBefore(Ot(),t),t,void 0,i??{})}return n._$AI(t),n})(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return Lt}};ne._$litElement$=!0,ne.finalized=!0,oe.litElementHydrateSupport?.({LitElement:ne});const se=oe.litElementPolyfillSupport;se?.({LitElement:ne}),(oe.litElementVersions??=[]).push("4.2.1");const re=t=>(e,i)=>{void 0!==i?i.addInitializer(()=>{customElements.define(t,e)}):customElements.define(t,e)},le={attribute:!0,type:String,converter:vt,reflect:!1,hasChanged:yt},ae=(t=le,e,i)=>{const{kind:o,metadata:n}=i;let s=globalThis.litPropertyMetadata.get(n);if(void 0===s&&globalThis.litPropertyMetadata.set(n,s=new Map),"setter"===o&&((t=Object.create(t)).wrapped=!0),s.set(i.name,t),"accessor"===o){const{name:o}=i;return{set(i){const n=e.get.call(this);e.set.call(this,i),this.requestUpdate(o,n,t)},init(e){return void 0!==e&&this.C(o,void 0,t,e),e}}}if("setter"===o){const{name:o}=i;return function(i){const n=this[o];e.call(this,i),this.requestUpdate(o,n,t)}}throw Error("Unsupported decorator location: "+o)};function ce(t){return(e,i)=>"object"==typeof i?ae(t,e,i):((t,e,i)=>{const o=e.hasOwnProperty(i);return e.constructor.createProperty(i,t),o?Object.getOwnPropertyDescriptor(e,i):void 0})(t,e,i)}function he(t,e){return(e,i,o)=>((t,e,i)=>(i.configurable=!0,i.enumerable=!0,Reflect.decorate&&"object"!=typeof e&&Object.defineProperty(t,e,i),i))(e,i,{get(){return(e=>e.renderRoot?.querySelector(t)??null)(this)}})}var de=Object.defineProperty,pe=Object.getOwnPropertyDescriptor,ue=(t,e,i,o)=>{for(var n,s=o>1?void 0:o?pe(e,i):e,r=t.length-1;r>=0;r--)(n=t[r])&&(s=(o?n(e,i,s):n(s))||s);return o&&s&&de(e,i,s),s};let me=[],ge=99999,fe=class extends ne{constructor(){super(),this.width=320,this.height=490,this.headerBackgroundColor="rgba(66,134,182,0.9)",this.headerColor="rgb(255,255,255)",this.bodyBackgroundColor="rgba(255,255,255,0.7)",this.bodyColor="rgba(23, 23, 23, 0.9)",this.footerBackgroundColor="rgba(255,255,255,0.7)",this.buttonBackground="rgba(255,255,255,0.9)",this.buttonColor="rgba(66,134,182,0.9)",this.titleContent="面板",this.leftButtonText="",this.rightButtonText="",this.isDisplay=!1,this.zIndex=ge,this.icon="magic-wand",this.left=(window.innerWidth-this.width)/2,this.top=(window.innerHeight-(this.height+80))/2,this.dragging=!1,me.push(this),this.zIndex=++ge}handleLeftClick(){this.hideMovePanel()}handleRightClick(){this.hideMovePanel()}hideMovePanel(){this.isDisplay=!1,console.debug("关闭事件"),this.dispatchEvent(new CustomEvent("close",{detail:{isDisplay:this.isDisplay,message:"关闭事件"},bubbles:!0,composed:!0}))}showMovePanel(){this.isDisplay=!0,console.debug("显示事件"),this.dispatchEvent(new CustomEvent("show",{detail:{isDisplay:this.isDisplay},bubbles:!0,composed:!0}))}toogleDisplay(){this.isDisplay?this.hideMovePanel():this.showMovePanel()}mouseDragging(t){let e=this.left,i=this.top,o=t.clientX-e,n=t.clientY-i;0==this.dragging&&(this.dragging=!0),document.onmousemove=t=>{this.dragging&&(this.left=t.clientX-o,this.top=t.clientY-n)},document.onmouseup=()=>{this.dragging&&(this.dragging=!1),document.onmousemove=null}}touchDragging(t){let e=this.left,i=this.top,o=t.touches[0].clientX-e,n=t.touches[0].clientY-i;0==this.dragging&&(this.dragging=!0),document.ontouchmove=t=>{this.dragging&&(this.left=t.touches[0].clientX-o,this.top=t.touches[0].clientY-n)},document.ontouchend=()=>{this.dragging&&(this.dragging=!1),document.onmousemove=null}}putTop(){let t=!1;if(me.includes(this)){for(let t=0;t<me.length;t++)me[t].zIndex>this.zIndex&&(me[t].zIndex=me[t].zIndex-1);this.zIndex=ge,t=!0}else t=!1;return t}putTopToggel(){this.zIndex!=ge?(this.putTop(),this.showMovePanel()):this.toogleDisplay()}render(){return Ut`
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

                `}_handleClose(){this.hideMovePanel()}_handleLeftButtonClick(){this.dispatchEvent(new CustomEvent("left-button-click",{detail:{message:"左侧按钮被点击"},bubbles:!0,composed:!0}))}_handleRightButtonClick(){this.dispatchEvent(new CustomEvent("right-button-click",{detail:{message:"右侧按钮被点击"},bubbles:!0,composed:!0}))}};fe.styles=nt`
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
`,ue([ce({type:Number})],fe.prototype,"width",2),ue([ce({type:Number})],fe.prototype,"height",2),ue([ce({type:String,attribute:"header-background-color"})],fe.prototype,"headerBackgroundColor",2),ue([ce({type:String,attribute:"header-color"})],fe.prototype,"headerColor",2),ue([ce({type:String,attribute:"body-background-color"})],fe.prototype,"bodyBackgroundColor",2),ue([ce({type:String,attribute:"body-color"})],fe.prototype,"bodyColor",2),ue([ce({type:String,attribute:"footer-background-color"})],fe.prototype,"footerBackgroundColor",2),ue([ce({type:String,attribute:"button-background-color"})],fe.prototype,"buttonBackground",2),ue([ce({type:String,attribute:"button-color"})],fe.prototype,"buttonColor",2),ue([ce({type:String})],fe.prototype,"titleContent",2),ue([ce({type:String,attribute:"left-button-text"})],fe.prototype,"leftButtonText",2),ue([ce({type:String,attribute:"right-button-text"})],fe.prototype,"rightButtonText",2),ue([ce({type:Boolean,attribute:"is-display"})],fe.prototype,"isDisplay",2),ue([ce({type:Number})],fe.prototype,"zIndex",2),ue([ce({type:String})],fe.prototype,"icon",2),ue([ce({type:Number})],fe.prototype,"left",2),ue([ce({type:Number})],fe.prototype,"top",2),fe=ue([re("hm-move-panel")],fe);const ve=Object.freeze(Object.defineProperty({__proto__:null,get HmMovePanel(){return fe},movePanelItemList:me,get movePanelItemMaxZindex(){return ge}},Symbol.toStringTag,{value:"Module"})),ye=2;class be{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}class _e extends be{constructor(t){if(super(t),this.it=Vt,t.type!==ye)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===Vt||null==t)return this._t=void 0,this.it=t;if(t===Lt)return t;if("string"!=typeof t)throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.it)return this._t;this.it=t;const e=[t];return e.raw=e,this._t={_$litType$:this.constructor.resultType,strings:e,values:[]}}}_e.directiveName="unsafeHTML",_e.resultType=1;class we extends _e{}we.directiveName="unsafeSVG",we.resultType=2;const $e=(t=>(...e)=>({_$litDirective$:t,values:e}))(we);var xe=Object.defineProperty,Se=Object.getOwnPropertyDescriptor,ke=(t,e,i,o)=>{for(var n,s=o>1?void 0:o?Se(e,i):e,r=t.length-1;r>=0;r--)(n=t[r])&&(s=(o?n(e,i,s):n(s))||s);return o&&s&&xe(e,i,s),s};const Ce=new Map([["magic-wand",'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m12.64 1.87l-.84 2.48a.41.41 0 0 0 0 .37l1.57 2.1a.4.4 0 0 1-.33.64h-2.62a.43.43 0 0 0-.33.17l-1.46 2.1a.4.4 0 0 1-.71-.11l-.78-2.5a.38.38 0 0 0-.26-.26l-2.5-.78a.4.4 0 0 1-.11-.71l2.14-1.51a.43.43 0 0 0 .17-.33V.91a.4.4 0 0 1 .6-.33l2.1 1.57a.41.41 0 0 0 .37.05l2.48-.84a.4.4 0 0 1 .51.51m-5.6 5.09L.5 13.5" stroke-width="1"/></svg>'],["close",'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M6.4 19L5 17.6l5.6-5.6L5 6.4L6.4 5l5.6 5.6L17.6 5L19 6.4L13.4 12l5.6 5.6l-1.4 1.4l-5.6-5.6z"/></svg>'],["open",'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M4 21q-.425 0-.712-.288T3 20v-6q0-.425.288-.712T4 13t.713.288T5 14v3.6L17.6 5H14q-.425 0-.712-.288T13 4t.288-.712T14 3h6q.425 0 .713.288T21 4v6q0 .425-.288.713T20 11t-.712-.288T19 10V6.4L6.4 19H10q.425 0 .713.288T11 20t-.288.713T10 21z"/></svg>'],["led-on",'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M11 0v4h2V0zm7.3 2.29l-3.06 3l1.4 1.42l3.06-3zm-12.59 0L4.29 3.71l3 3l1.42-1.42zM12 6a4 4 0 0 0-4 4v6H6v2h3v5h2v-5h2v5h2v-5h3v-2h-2v-6a4 4 0 0 0-4-4M2 9v2h4V9zm16 0v2h4V9z"/></svg>'],["led-off",'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M12 6a4 4 0 0 0-4 4v6H6v2h3v5h2v-5h2v5h2v-5h3v-2h-2v-6a4 4 0 0 0-4-4"/></svg>'],["arrow-up",'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M16.21 16H7.79a1.76 1.76 0 0 1-1.59-1a2.1 2.1 0 0 1 .26-2.21l4.21-5.1a1.76 1.76 0 0 1 2.66 0l4.21 5.1A2.1 2.1 0 0 1 17.8 15a1.76 1.76 0 0 1-1.59 1"/></svg>'],["arrow-down",'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M12 17a1.72 1.72 0 0 1-1.33-.64l-4.21-5.1a2.1 2.1 0 0 1-.26-2.21A1.76 1.76 0 0 1 7.79 8h8.42a1.76 1.76 0 0 1 1.59 1.05a2.1 2.1 0 0 1-.26 2.21l-4.21 5.1A1.72 1.72 0 0 1 12 17"/></svg>'],["template",'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><defs><mask id="SVGZZ153dkC"><path fill="#4d4d4d" stroke="#fff" stroke-linejoin="round" stroke-width="4" d="M23 4H4v22h19zm21 30H4v9h40zm0-30H31v8h13zm0 14H31v8h13z"/></mask></defs><path fill="currentColor" d="M0 0h48v48H0z" mask="url(#SVGZZ153dkC)"/></svg>'],["js",'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path fill="currentColor" d="M10.77 7.3h.002c1.045.393 2.479.93 2.479 2.45a2.5 2.5 0 0 1-.224 1.02a2.5 2.5 0 0 1-1.515 1.364a2.5 2.5 0 0 1-1.035.115a2 2 0 0 1-.214.012a2.5 2.5 0 0 1-1.673-.65a2.52 2.52 0 0 1-.838-1.859c0-.202.078-.39.22-.532a.77.77 0 0 1 1.06 0a.74.74 0 0 1 .221.53c0 .952 1.041 1 1.25 1s1.25-.048 1.25-1c0-.413-.447-.648-1.514-1.048h-.003C9.19 8.307 7.753 7.77 7.753 6.25q.005-.537.224-1.02a2.5 2.5 0 0 1 .614-.842a2.5 2.5 0 0 1 .9-.52a3.5 3.5 0 0 1 2.023 0a2.52 2.52 0 0 1 1.738 2.381c0 .201-.078.39-.22.531a.77.77 0 0 1-1.061 0a.74.74 0 0 1-.22-.53c0-.952-1.041-1-1.25-1s-1.25.048-1.25 1c0 .413.447.648 1.514 1.048zM5.751 4.5c0-.2.078-.388.22-.53a.77.77 0 0 1 1.06 0c.142.141.22.33.22.53v5a2.75 2.75 0 0 1-4.695 1.945A2.73 2.73 0 0 1 1.75 9.5V9c0-.2.078-.388.22-.53a.77.77 0 0 1 1.061 0c.142.141.22.33.22.53v.5c0 .33.134.652.366.884c.465.465 1.303.465 1.768 0c.232-.233.366-.555.366-.884z"/></svg>'],["filter",'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M3 4c2.01 2.59 7 9 7 9v7h4v-7s4.98-6.41 7-9z"/></svg>'],["filter-off",'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M3.004 1.59L3 1.586L1.586 3l4.928 4.928L10 12.818V21h4v-5.585l7 7l1.41-1.41L3 1.595zm12.266 9.446L21 3H7.234z"/></svg>'],["eye",'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M16 11v2h-1v1h-1v1h-1v1h-2v-1h-1v-1H9v-1H8v-2h2v-1h1V8h2v1h1v1h1v1z"/><path fill="currentColor" d="M22 11V9h-1V8h-1V7h-1V6h-2V5H7v1H5v1H4v1H3v1H2v2H1v2h1v2h1v1h1v1h1v1h2v1h10v-1h2v-1h1v-1h1v-1h1v-2h1v-2zm-4 2h-1v2h-1v1h-1v1h-2v1h-2v-1H9v-1H8v-1H7v-2H6v-2h1V9h1V8h1V7h2V6h2v1h2v1h1v1h1v2h1z"/></svg>'],["eye-off",'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M2 13H1v-2h1V9h1V8h1V7h1V6h2V5h8v1h-1v1h-1V6h-2v1H9v1H8v1H7v2H6v2h1v1H6v1H5v1H3v-1H2z"/><path fill="currentColor" d="M8 11h1v1H8zm3-3h1v1h-1zm-2 9H8v1H7v1H6v1H5v1H4v1H3v-1H2v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1V9h1V8h1V7h1V6h1V5h1V4h1V3h1V2h1v1h1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1H9zm3-2h1v1h-1zm1-1h1v1h-1zm2-2h1v1h-1zm-1 1h1v1h-1z"/><path fill="currentColor" d="M23 11v2h-1v2h-1v1h-1v1h-1v1h-2v1H9v-1h1v-1h1v1h2v-1h2v-1h1v-1h1v-2h1v-2h-1v-1h1V9h1V8h2v1h1v2z"/></svg>'],["config",'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="4"><path d="m24 4l-6 6h-8v8l-6 6l6 6v8h8l6 6l6-6h8v-8l6-6l-6-6v-8h-8z"/><path d="M24 30a6 6 0 1 0 0-12a6 6 0 0 0 0 12Z"/></g></svg>']]);function Ae(t){return Ce.get(t)||'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m12.64 1.87l-.84 2.48a.41.41 0 0 0 0 .37l1.57 2.1a.4.4 0 0 1-.33.64h-2.62a.43.43 0 0 0-.33.17l-1.46 2.1a.4.4 0 0 1-.71-.11l-.78-2.5a.38.38 0 0 0-.26-.26l-2.5-.78a.4.4 0 0 1-.11-.71l2.14-1.51a.43.43 0 0 0 .17-.33V.91a.4.4 0 0 1 .6-.33l2.1 1.57a.41.41 0 0 0 .37.05l2.48-.84a.4.4 0 0 1 .51.51m-5.6 5.09L.5 13.5" stroke-width="1"/></svg>'}let Ee=class extends ne{constructor(){super(...arguments),this.icon="magic-wand",this.size="16px"}handelClick(){this.dispatchEvent(new CustomEvent("hm-icon-click"))}render(){return Ut`
<div class="icon" 
style="width:${this.size}; height:${this.size};"
@click="${this.handelClick}"
>
    ${$e(Ae(this.icon))}
</div>
`}};Ee.styles=nt`
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
`,ke([ce({type:String})],Ee.prototype,"icon",2),ke([ce({type:String})],Ee.prototype,"size",2),Ee=ke([re("hm-icon")],Ee);const Oe=Object.freeze(Object.defineProperty({__proto__:null,get HmIcon(){return Ee},getIcon:Ae,iconMap:Ce,registerIcon:function(t,e){Ce.set(t,e)}},Symbol.toStringTag,{value:"Module"}));var Me=Object.defineProperty,Te=Object.getOwnPropertyDescriptor,He=(t,e,i,o)=>{for(var n,s=o>1?void 0:o?Te(e,i):e,r=t.length-1;r>=0;r--)(n=t[r])&&(s=(o?n(e,i,s):n(s))||s);return o&&s&&Me(e,i,s),s};let Pe=class extends ne{constructor(){super(...arguments),this.icon="magic-wand",this.content="HortiMagicMenu",this.flag=!1,this.isMenuItem=!1}handleClick(){this.isMenuItem||(this.flag=!this.flag),this.dispatchEvent(new CustomEvent("hm-menu-click"))}render(){return Ut`
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




`}};Pe.styles=nt`
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
`,He([ce({type:String})],Pe.prototype,"icon",2),He([ce({type:String})],Pe.prototype,"content",2),He([ce({type:Boolean})],Pe.prototype,"flag",2),He([ce({type:Boolean})],Pe.prototype,"isMenuItem",2),Pe=He([re("hm-menu")],Pe);const je=Object.freeze(Object.defineProperty({__proto__:null,get HmMenu(){return Pe}},Symbol.toStringTag,{value:"Module"}));var ze=Object.defineProperty,Be=Object.getOwnPropertyDescriptor,Ie=(t,e,i,o)=>{for(var n,s=o>1?void 0:o?Be(e,i):e,r=t.length-1;r>=0;r--)(n=t[r])&&(s=(o?n(e,i,s):n(s))||s);return o&&s&&ze(e,i,s),s};let De=class extends ne{constructor(){super(...arguments),this.leftIcon="magic-wand",this.title="HortiMagic",this.content="Hello iirose!",this.rightIcon="",this.displayTime=999999,this.color="rgb(33,33,33)",this.backgroundColor="rgba(255,255,255,0.9)"}firstUpdated(){this.displayTime>0&&setTimeout(()=>{this.startLeaveAnimation()},this.displayTime)}startLeaveAnimation(){this.setAttribute("leaving",""),setTimeout(()=>{this.remove()},300)}render(){return Ut`
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
`}};De.styles=nt`
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
`,Ie([ce()],De.prototype,"leftIcon",2),Ie([ce()],De.prototype,"title",2),Ie([ce()],De.prototype,"content",2),Ie([ce()],De.prototype,"rightIcon",2),Ie([ce()],De.prototype,"displayTime",2),Ie([ce()],De.prototype,"color",2),Ie([ce()],De.prototype,"backgroundColor",2),De=Ie([re("hm-notification")],De);const Ne=Object.freeze(Object.defineProperty({__proto__:null,get HmNotification(){return De}},Symbol.toStringTag,{value:"Module"}));var Ue=Object.defineProperty,Le=Object.getOwnPropertyDescriptor,Ve=(t,e,i,o)=>{for(var n,s=o>1?void 0:o?Le(e,i):e,r=t.length-1;r>=0;r--)(n=t[r])&&(s=(o?n(e,i,s):n(s))||s);return o&&s&&Ue(e,i,s),s};let Re=class extends ne{constructor(){super(...arguments),this.icon="",this.content="",this.fontSize="14px",this.color="",this.background="",this.width="",this.height="",this.enable=!0,this.loading=!1}render(){const t=`\n          ${this.color?`color: ${this.color};`:""}\n          ${this.background?`background: ${this.background};`:""}\n          ${this.width?`width: ${this.width};`:""}\n          ${this.height?`height: ${this.height};`:""}\n          ${this.fontSize?`font-size: ${this.fontSize};`:"14px"}\n        `;return Ut`
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
        `}_handleClick(t){this.enable&&!this.loading?this.dispatchEvent(new CustomEvent("hm-button-click")):t.stopPropagation()}};Re.styles=nt`
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
    `,Ve([ce({type:String})],Re.prototype,"icon",2),Ve([ce({type:String})],Re.prototype,"content",2),Ve([ce({type:String})],Re.prototype,"fontSize",2),Ve([ce({type:String})],Re.prototype,"color",2),Ve([ce({type:String})],Re.prototype,"background",2),Ve([ce({type:String})],Re.prototype,"width",2),Ve([ce({type:String})],Re.prototype,"height",2),Ve([ce({type:Boolean})],Re.prototype,"enable",2),Ve([ce({type:Boolean})],Re.prototype,"loading",2),Re=Ve([re("hm-button")],Re);const qe=Object.freeze(Object.defineProperty({__proto__:null,get HmButton(){return Re}},Symbol.toStringTag,{value:"Module"}));var We=Object.defineProperty,Xe=Object.getOwnPropertyDescriptor,Fe=(t,e,i,o)=>{for(var n,s=o>1?void 0:o?Xe(e,i):e,r=t.length-1;r>=0;r--)(n=t[r])&&(s=(o?n(e,i,s):n(s))||s);return o&&s&&We(e,i,s),s};let Je=class extends ne{constructor(){super(...arguments),this.titleName="单元格",this.descripthion="描述信息",this.content="内容",this.titleClickCallback=()=>{},this.contentClickCallback=()=>{}}render(){return Ut`
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

`}};Je.styles=nt`
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
  `,Fe([ce({attribute:"title-name"})],Je.prototype,"titleName",2),Fe([ce()],Je.prototype,"descripthion",2),Fe([ce()],Je.prototype,"content",2),Fe([ce()],Je.prototype,"titleClickCallback",2),Fe([ce()],Je.prototype,"contentClickCallback",2),Je=Fe([re("hm-cell")],Je);const Ge=Object.freeze(Object.defineProperty({__proto__:null,get HmCell(){return Je}},Symbol.toStringTag,{value:"Module"}));var Ze=Object.defineProperty,Ye=Object.getOwnPropertyDescriptor,Ke=(t,e,i,o)=>{for(var n,s=o>1?void 0:o?Ye(e,i):e,r=t.length-1;r>=0;r--)(n=t[r])&&(s=(o?n(e,i,s):n(s))||s);return o&&s&&Ze(e,i,s),s};let Qe=class extends ne{constructor(){super(...arguments),this._isDragging=!1,this._startX=0,this._currentTranslate=0,this._prevTranslate=0,this._animationId=0,this._velocity=0,this._lastX=0,this._lastTime=0,this._isOpen=!1,this.rightButtonName="右侧按钮",this.rightButtonCallback=function(){console.debug("点击了一下")},this.leftActionsWidth=0,this.rightActionsWidth=0,this.onDragStart=t=>{t.preventDefault(),this.startDrag(t.clientX),this.sliderElement.style.cursor="grabbing",this.sliderElement.style.transition="none"},this.onTouchStart=t=>{t.preventDefault(),this.startDrag(t.touches[0].clientX),this.sliderElement.style.transition="none"},this.startDrag=t=>{this._isDragging=!0,this._startX=t,this._lastX=t,this._lastTime=Date.now(),this._isOpen=Math.abs(this._prevTranslate)>10,this.calculateActionWidths()},this.onDragMove=t=>{this._isDragging&&(t.preventDefault(),this.handleMove(t.clientX))},this.onTouchMove=t=>{this._isDragging&&(t.preventDefault(),this.handleMove(t.touches[0].clientX))},this.onDragEnd=()=>{this.finishDrag(),this.sliderElement.style.cursor="grab"},this.onTouchEnd=()=>{this.finishDrag()}}firstUpdated(){this.calculateActionWidths(),this.addEventListeners()}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListeners()}calculateActionWidths(){this.leftActionsWidth=this.leftActions?this.leftActions.offsetWidth:0,this.rightActionsWidth=this.rightActions?this.rightActions.offsetWidth:0}addEventListeners(){this.sliderElement.addEventListener("mousedown",this.onDragStart),this.sliderElement.addEventListener("touchstart",this.onTouchStart,{passive:!1}),document.addEventListener("mousemove",this.onDragMove),document.addEventListener("touchmove",this.onTouchMove,{passive:!1}),document.addEventListener("mouseup",this.onDragEnd),document.addEventListener("touchend",this.onTouchEnd)}removeEventListeners(){this.sliderElement.removeEventListener("mousedown",this.onDragStart),this.sliderElement.removeEventListener("touchstart",this.onTouchStart),document.removeEventListener("mousemove",this.onDragMove),document.removeEventListener("touchmove",this.onTouchMove),document.removeEventListener("mouseup",this.onDragEnd),document.removeEventListener("touchend",this.onTouchEnd)}handleMove(t){const e=Date.now(),i=e-this._lastTime;i>0&&(this._velocity=(t-this._lastX)/i,this._lastX=t,this._lastTime=e);const o=t-this._startX;let n=this._prevTranslate+o;if(n>this.leftActionsWidth){const t=n-this.leftActionsWidth;n=this.leftActionsWidth+this.easeOut(t,30)}else if(n<-this.rightActionsWidth){const t=n+this.rightActionsWidth;n=-this.rightActionsWidth+this.easeOut(t,30)}this._currentTranslate=n,this.updateSliderPosition()}easeOut(t,e){return.2*t}finishDrag(){this._isDragging=!1,this.sliderElement.style.transition="transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)";let t=0;if(t=this._currentTranslate>5||this._currentTranslate>0&&this._velocity>.1?this.leftActionsWidth:this._currentTranslate<-5||this._currentTranslate<0&&this._velocity<-.1?-this.rightActionsWidth:0,this._isOpen){const e=5;t=this._prevTranslate>0&&this._currentTranslate<this._prevTranslate-e||this._prevTranslate<0&&this._currentTranslate>this._prevTranslate+e?0:this._prevTranslate}this._currentTranslate=t,this._prevTranslate=t,this.updateSliderPosition(),this._velocity=0}updateSliderPosition(){this._animationId&&cancelAnimationFrame(this._animationId),this._animationId=requestAnimationFrame(()=>{if(this.sliderElement.style.transform=`translateX(${this._currentTranslate}px)`,this._currentTranslate>0){const t=Math.min(this._currentTranslate/this.leftActionsWidth,1);this.leftActions.style.transform=`translateX(${100*t-100}%)`,this.rightActions.style.transform="translateX(100%)"}else if(this._currentTranslate<0){const t=Math.min(-this._currentTranslate/this.rightActionsWidth,1);this.rightActions.style.transform=`translateX(${100-100*t}%)`,this.leftActions.style.transform="translateX(-100%)"}else this.leftActions.style.transform="translateX(-100%)",this.rightActions.style.transform="translateX(100%)"})}render(){return Ut`
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
`}};Qe.styles=nt`
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
    `,Ke([ce()],Qe.prototype,"_isDragging",2),Ke([ce()],Qe.prototype,"_startX",2),Ke([ce()],Qe.prototype,"_currentTranslate",2),Ke([ce()],Qe.prototype,"_prevTranslate",2),Ke([ce()],Qe.prototype,"_animationId",2),Ke([ce()],Qe.prototype,"_velocity",2),Ke([ce()],Qe.prototype,"_lastX",2),Ke([ce()],Qe.prototype,"_lastTime",2),Ke([ce()],Qe.prototype,"_isOpen",2),Ke([ce()],Qe.prototype,"rightButtonName",2),Ke([ce()],Qe.prototype,"rightButtonCallback",2),Ke([he(".slider")],Qe.prototype,"sliderElement",2),Ke([he(".content")],Qe.prototype,"contentElement",2),Ke([he(".left-actions")],Qe.prototype,"leftActions",2),Ke([he(".right-actions")],Qe.prototype,"rightActions",2),Qe=Ke([re("hm-swipe-cell")],Qe);const ti=Object.freeze(Object.defineProperty({__proto__:null,get HmSwipeCell(){return Qe}},Symbol.toStringTag,{value:"Module"}));var ei=Object.defineProperty,ii=Object.getOwnPropertyDescriptor,oi=(t,e,i,o)=>{for(var n,s=o>1?void 0:o?ii(e,i):e,r=t.length-1;r>=0;r--)(n=t[r])&&(s=(o?n(e,i,s):n(s))||s);return o&&s&&ei(e,i,s),s};let ni=class extends ne{constructor(){super(...arguments),this.checked=!1,this.disabled=!1,this.loading=!1,this.color="#1890ff",this.openContent="",this.closeContent="",this.openIcon="",this.closeIcon=""}change(){this.disabled||this.loading||(this.checked=!this.checked,this.dispatchEvent(new CustomEvent("hm-switch-change",{detail:{checked:this.checked},bubbles:!0,composed:!0})))}render(){return Ut`
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
        `}};ni.styles=nt`
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
    `,oi([ce({type:Boolean})],ni.prototype,"checked",2),oi([ce({type:Boolean})],ni.prototype,"disabled",2),oi([ce({type:Boolean})],ni.prototype,"loading",2),oi([ce({type:String})],ni.prototype,"color",2),oi([ce({type:String,attribute:"open-content"})],ni.prototype,"openContent",2),oi([ce({type:String,attribute:"close-content"})],ni.prototype,"closeContent",2),oi([ce({type:String,attribute:"open-icon"})],ni.prototype,"openIcon",2),oi([ce({type:String,attribute:"close-icon"})],ni.prototype,"closeIcon",2),ni=oi([re("hm-switch")],ni);const si=Object.freeze(Object.defineProperty({__proto__:null,get HmSwitch(){return ni}},Symbol.toStringTag,{value:"Module"}));var ri=Object.defineProperty,li=Object.getOwnPropertyDescriptor,ai=(t,e,i,o)=>{for(var n,s=o>1?void 0:o?li(e,i):e,r=t.length-1;r>=0;r--)(n=t[r])&&(s=(o?n(e,i,s):n(s))||s);return o&&s&&ri(e,i,s),s};let ci=class extends ne{constructor(){super(...arguments),this.maxHeight="500px",this.items=[],this.titleContent="标题内容",this.expanded=!1}togglePanel(){this.expanded=!this.expanded}render(){return Ut`
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
    `}};ci.styles=nt`
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
  `,ai([ce({type:String,attribute:"max-height"})],ci.prototype,"maxHeight",2),ai([ce({type:Array})],ci.prototype,"items",2),ai([ce({type:String,attribute:"title-content"})],ci.prototype,"titleContent",2),ai([ce({type:Boolean})],ci.prototype,"expanded",2),ci=ai([re("hm-accordion")],ci);const hi=Object.freeze(Object.defineProperty({__proto__:null,get HmAccordion(){return ci}},Symbol.toStringTag,{value:"Module"}));var di=Object.defineProperty,pi=Object.getOwnPropertyDescriptor,ui=(t,e,i,o)=>{for(var n,s=o>1?void 0:o?pi(e,i):e,r=t.length-1;r>=0;r--)(n=t[r])&&(s=(o?n(e,i,s):n(s))||s);return o&&s&&di(e,i,s),s};let mi=class extends ne{constructor(){super(...arguments),this.type="text",this.icon="",this.label="输入框",this.placeholder="",this.enable=!0,this.readonly=!1,this.value=""}_handleKeyDown(t){t.stopPropagation()}_handleInput(t){const e=t.target;this.value=e.value,this.dispatchEvent(new CustomEvent("hm-input-change",{detail:{value:this.value},bubbles:!0,composed:!0}))}render(){return Ut`
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
    `}};mi.styles=nt`
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
`,ui([ce({type:String})],mi.prototype,"type",2),ui([ce({type:String})],mi.prototype,"icon",2),ui([ce({type:String})],mi.prototype,"label",2),ui([ce({type:String})],mi.prototype,"placeholder",2),ui([ce({type:Boolean})],mi.prototype,"enable",2),ui([ce({type:Boolean})],mi.prototype,"readonly",2),ui([ce()],mi.prototype,"value",2),mi=ui([re("hm-input")],mi);const gi=Object.freeze(Object.defineProperty({__proto__:null,get HmInput(){return mi}},Symbol.toStringTag,{value:"Module"}));var fi=Object.defineProperty,vi=Object.getOwnPropertyDescriptor,yi=(t,e,i,o)=>{for(var n,s=o>1?void 0:o?vi(e,i):e,r=t.length-1;r>=0;r--)(n=t[r])&&(s=(o?n(e,i,s):n(s))||s);return o&&s&&fi(e,i,s),s};let bi=class extends ne{constructor(){super(...arguments),this.isOpen=!1,this.dialog=this}open(){this.isOpen=!0,this.dispatchEvent(new CustomEvent("hm-dialog-open"))}close(){this.isOpen=!1,this.dispatchEvent(new CustomEvent("hm-dialog-close"))}confirm(){this.close(),this.dispatchEvent(new CustomEvent("hm-dialog-confirm"))}cancel(){this.close(),this.dispatchEvent(new CustomEvent("hm-dialog-cancel"))}updated(t){t.has("isOpen")&&(this.isOpen?this.style.display="block":this.style.display="none")}render(){return Ut`
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
    `}};bi.styles=nt`
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
    `,yi([ce({type:Boolean,attribute:"isopen"})],bi.prototype,"isOpen",2),bi=yi([re("hm-dialog")],bi);const _i=Object.freeze(Object.defineProperty({__proto__:null,get HmDialog(){return bi}},Symbol.toStringTag,{value:"Module"})),wi=Object.freeze(Object.defineProperty({__proto__:null,hm_accordion:hi,hm_button:qe,hm_cell:Ge,hm_dialog:_i,hm_icon:Oe,hm_input:gi,hm_menu:je,hm_move_panel:ve,hm_notification:Ne,hm_swipe_cell:ti,hm_switch:si},Symbol.toStringTag,{value:"Module"}));let $i=document.createElement("div");function xi(){$i.id="hmMenuHolder";let t=document.querySelector("#functionHolderImg");console.debug(t),console.debug($i),null!==t&&t.parentElement.insertAdjacentElement("afterend",$i)}const Si=Object.freeze(Object.defineProperty({__proto__:null,initMenuHolder:xi,menuHolder:$i},Symbol.toStringTag,{value:"Module"}));let ki=document.createElement("div");function Ci(){ki.id="hmMovePanelHolder",ki.style.zIndex="999999",document.body.append(ki)}const Ai=Object.freeze(Object.defineProperty({__proto__:null,initMovePanelHolder:Ci,movePanelHolder:ki},Symbol.toStringTag,{value:"Module"}));let Ei=document.createElement("div");function Oi(){Ei.id="hmNotificationHolder",Ei.style.zIndex="999999",document.body.append(Ei)}const Mi=Object.freeze(Object.defineProperty({__proto__:null,initNotificationHolder:Oi,notificationHolder:Ei},Symbol.toStringTag,{value:"Module"}));let Ti=document.createElement("div");function Hi(){Ti.id="hmDialogHolder",Ti.style.zIndex="999999",document.body.append(Ti)}const Pi=Object.freeze(Object.defineProperty({__proto__:null,dialogHolder:Ti,initDialogHolder:Hi},Symbol.toStringTag,{value:"Module"}));var ji=Object.defineProperty,zi=(t,e,i,o)=>{for(var n,s=void 0,r=t.length-1;r>=0;r--)(n=t[r])&&(s=n(e,i,s)||s);return s&&ji(e,i,s),s};class Bi extends ne{constructor(){super(...arguments),this.dialogOpen=!1,this.message="请做出选择",this.closeCallback=null,this.cancelCallback=null,this.confirmCallback=null}handelClick(){this.dispatchEvent(new CustomEvent("hmclick"))}static{this.styles=nt`
`}render(){return Ut`
<hm-dialog
  ?isopen="${this.dialogOpen}"
  @hm-dialog-close="${()=>{this.dialogOpen=!1}}"
  @hm-dialog-cancel="${()=>{this.cancelCallback&&this.cancelCallback()}}"
  @hm-dialog-confirm="${()=>{this.confirmCallback&&this.confirmCallback()}}"
>
  <p>${this.message}</p>
</hm-dialog>
        `}}zi([ce({type:Boolean})],Bi.prototype,"dialogOpen"),zi([ce({type:String})],Bi.prototype,"message"),zi([ce({type:Function})],Bi.prototype,"closeCallback"),zi([ce({type:Function})],Bi.prototype,"cancelCallback"),zi([ce({type:Function})],Bi.prototype,"confirmCallback");const Ii=document.createElement("hm-dialog-app");async function Di(){customElements.define("hm-dialog-app",Bi),Ii.dialogOpen=!1,Ii.message="请做出选择",Ii.closeCallback=null,Ii.cancelCallback=null,Ii.confirmCallback=null,Ti.append(Ii)}const Ni=Object.freeze(Object.defineProperty({__proto__:null,HmDialogApp:Bi,dialogApp:Ii,initDialogApp:Di},Symbol.toStringTag,{value:"Module"})),Ui={success(t,e,i=3e3){let o=document.createElement("hm-notification");o.title=t,o.content=e,o.displayTime=i,o.backgroundColor="rgba(57, 231, 34, 0.7)",o.color="rgb(255,255,255)",Ei.append(o)},warning(t,e,i=3e3){let o=document.createElement("hm-notification");o.title=t,o.content=e,o.displayTime=i,o.backgroundColor="rgba(255,193,7,0.7)",o.color="rgb(255,255,255)",Ei.append(o)},error(t,e,i=3e3){let o=document.createElement("hm-notification");o.title=t,o.content=e,o.displayTime=i,o.backgroundColor="rgba(255,0,0,0.7)",o.color="rgb(255,255,255)",Ei.append(o)},normal(t,e,i=3e3){let o=document.createElement("hm-notification");o.title=t,o.content=e,o.displayTime=i,o.backgroundColor="rgba(33,33,33,0.7)",o.color="rgb(255,255,255)",Ei.append(o)}};const Li=Object.freeze(Object.defineProperty({__proto__:null,confirm:function(t,e,i,o){Ii.message=t,Ii.confirmCallback=e||null,Ii.cancelCallback=i||null,Ii.closeCallback=o||null,Ii.dialogOpen=!0,console.debug("弹窗已打开",Ii)},notice:Ui},Symbol.toStringTag,{value:"Module"}));var Vi=Object.defineProperty,Ri=(t,e,i,o)=>{for(var n,s=void 0,r=t.length-1;r>=0;r--)(n=t[r])&&(s=n(e,i,s)||s);return s&&Vi(e,i,s),s};class qi extends ne{constructor(){super(...arguments),this.scriptName="",this.scriptUrl="",this.scriptEnable=!0,this.scriptIngected=!1,this.dialogOpen=!1,this.scriptList=N}render(){return Ut`
<hm-dialog
  ?isopen="${this.dialogOpen}"
  @hm-dialog-close="${()=>{this.dialogOpen=!1}}"
  @hm-dialog-confirm="${()=>{if(""==this.scriptName.trim()||""==this.scriptUrl.trim())return void Ui.error("脚本管理","请填写完整的脚本信息");this.scriptEnable=!0,this.scriptIngected=!1,U(new D(this.scriptName,this.scriptUrl,this.scriptEnable,this.scriptIngected)),W(),this.scriptList=N}}"
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
      @hm-button-click="${()=>{L(t),W(),this.scriptList=N}}"
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
      @hm-switch-change="${e=>{t.enable=e.detail.checked,U(t),W(),this.scriptList=N}}"
    ></hm-switch>
  </hm-cell>

  <div slot="right-actions">
    <hm-button
      @hm-button-click="${()=>{this.scriptName=t.name,this.scriptUrl=t.url,this.dialogOpen=!0}}"
      >修改</hm-button
    >
    <hm-button
      ?enable="${!t.ingected}"
      @hm-button-click="${()=>{t.ingected=V(t),U(t),this.scriptList=N}}"
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
    `}}Ri([ce({type:String})],qi.prototype,"scriptName"),Ri([ce({type:String})],qi.prototype,"scriptUrl"),Ri([ce({type:Boolean})],qi.prototype,"scriptEnable"),Ri([ce({type:Boolean})],qi.prototype,"scriptIngected"),Ri([ce({type:Boolean})],qi.prototype,"dialogOpen"),Ri([ce({type:Array})],qi.prototype,"scriptList");const Wi={name:"hortimagic",private:!1,version:"1.0.4dev2",changelog:"增加了存储库",author:"Narlen",description:"园艺魔法，花园插件",keywords:["iirose","plugins","hortimagic"],repository:{type:"git",url:"https://github.com/NarlenHua/hortimagic.git"},license:"MIT",type:"module",scripts:{dev:"vite",build:"tsc && vite build",preview:"vite preview"},dependencies:{lit:"^3.3.1",terser:"^5.44.0","tiny-emitter":"^2.1.0","vite-plugin-dts":"^4.5.4"},devDependencies:{"@types/node":"^24.9.1",typescript:"~5.9.3",vite:"^7.1.7"},main:"dist/Horticraft.life.js",module:"dist/HortiCraft.es.js",typings:"dist/index.d.ts",types:"dist/index.d.ts",files:["dist","src/components","types"]};var Xi=Object.defineProperty;class Fi extends ne{constructor(){super(...arguments),this.allowHortimagicNotice=!0}static{this.styles=nt`
`}render(){return Ut`
 <hm-cell title-name="开启新通知" descripthion="使用Hortimagic通知功能"> 
 <hm-switch 
    slot="content"
    ?checked="${this.allowHortimagicNotice}"
    open-icon="led-on"
    close-icon="led-off"
    @hm-switch-change="${t=>{console.log("switch state:",t.detail.checked)}}"
  ></hm-switch>
`}}((t,e,i)=>{for(var o,n=void 0,s=t.length-1;s>=0;s--)(o=t[s])&&(n=o(e,i,n)||n);n&&Xi(e,i,n)})([ce({type:Boolean})],Fi.prototype,"allowHortimagicNotice");let Ji={allowNotice:!0};async function Gi(){try{!function(){let t=localStorage.getItem("HortimagicConfig");null==t?localStorage.setItem("HortimagicConfig",JSON.stringify(Ji)):Ji=JSON.parse(t)}(),Oi(),Hi(),await Di(),xi(),Ci(),Ui.normal(Wi.name,"注入网络钩子函数"),await E(),Ui.normal(Wi.name,"注入钩子函数"),j(),B(),Ui.normal(Wi.name,"注入脚本"),X(),Ui.normal(Wi.name,"生成菜单");let t=document.createElement("hm-menu");t.content="HortiMagic",t.isMenuItem=!1;let e=function(){customElements.define("hm-config-app",Fi);let t=document.createElement("hm-move-panel");t.titleContent="设置",t.icon="config",ki.appendChild(t),t.innerHTML="\n  <hm-config-app></hm-config-app>\n  ";let e=document.createElement("hm-menu");return e.content="设置",e.isMenuItem=!0,e.icon="config",e.addEventListener("hm-menu-click",function(){t.putTopToggel()}),e}(),i=function(){customElements.define("hm-script-app",qi);let t=document.createElement("hm-move-panel");t.titleContent="脚本管理",t.icon="js",ki.appendChild(t),t.innerHTML="\n  <hm-script-app></hm-script-app>\n  ";let e=document.createElement("hm-menu");return e.content="脚本管理",e.isMenuItem=!0,e.icon="js",e.addEventListener("hm-menu-click",function(){t.putTopToggel()}),e}();t.addEventListener("hm-menu-click",function(){e.flag=t.flag,i.flag=t.flag}),$i.append(t,e,i),Ui.success(Wi.name,`${Wi.version} 已加载`)}catch(t){console.error(t)}}const Zi=Object.freeze(Object.defineProperty({__proto__:null,init:Gi},Symbol.toStringTag,{value:"Module"})),Yi=Object.freeze(Object.defineProperty({__proto__:null,dialog_app:Ni,main_app:Zi},Symbol.toStringTag,{value:"Module"})),Ki=Object.freeze(Object.defineProperty({__proto__:null,dialog:Pi,menu:Si,move_panel:Ai,notification:Mi},Symbol.toStringTag,{value:"Module"})),Qi={name:Wi.name,version:Wi.version,changelog:Wi.changelog,description:Wi.description,author:Wi.author,license:Wi.license,repository:Wi.repository,buildTime:(new Date).toISOString(),ingected:!1};return async function(){await Gi(),Qi.ingected=!0}(),t.apps=Yi,t.components=wi,t.core=K,t.easy_tools=Li,t.holders=Ki,t.information=Qi,Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),t}({});
