var hortimagic=function(t){"use strict";class e{constructor(){this.events={}}on(t,e){this.events[t]||(this.events[t]=[]),this.events[t].push(e)}off(t,e){this.events[t]&&(e?this.events[t]=this.events[t].filter(t=>t!==e):delete this.events[t])}once(t,e){const o=(...i)=>{e(...i),this.off(t,o)};this.on(t,o)}emit(t,...e){const o=this.events[t];return!(!o||0===o.length)&&([...o].forEach(t=>t(...e)),!0)}}const o=Object.freeze(Object.defineProperty({__proto__:null,EventEmitter:e},Symbol.toStringTag,{value:"Module"})),i={LOG:0,DEBUG:1,INFO:2,WARN:3,ERROR:4},n={log(t,...e){_.logLevel<=i.LOG&&(A.length>=49&&A.shift(),A.push([(new Date).toLocaleString().slice(10),t,...e]),console.log(t,...e))},debug(t,...e){_.logLevel<=i.DEBUG&&(A.length>=49&&A.shift(),A.push([(new Date).toLocaleString().slice(10),t,...e]),console.debug(t,...e))},info(t,...e){_.logLevel<=i.INFO&&(A.length>=49&&A.shift(),A.push([(new Date).toLocaleString().slice(10),t,...e]),console.info(t,...e))},warn(t,...e){_.logLevel<=i.WARN&&(A.length>=49&&A.shift(),A.push([(new Date).toLocaleString().slice(10),t,...e]),console.warn(t,...e))},error(t,...e){_.logLevel<=i.ERROR&&(A.length>=49&&A.shift(),A.push([(new Date).toLocaleString().slice(10),t,...e]),console.error(t,...e))}},s=Object.freeze(Object.defineProperty({__proto__:null,LogLevel:i,logger:n},Symbol.toStringTag,{value:"Module"}));class r extends e{constructor(t){super(),this._value=t}get value(){return this._value}set value(t){Object.is(this._value,t)||(this._value=t,this.emit("change",t))}triggerChange(){this.emit("change",this._value)}}class l extends e{constructor(){super(...arguments),this.items=new Map}add(t,e){if(this.items.has(t))return n.warn(`Store item "${t}" already exists.`),this.items.get(t);const o=new r(e);return this.items.set(t,o),this.emit("add",t,o),o}get(t){return this.items.get(t)}remove(t){if(!this.items.has(t))return!1;const e=this.items.get(t);return this.items.delete(t),this.emit("remove",t,e),!0}getValue(t){return this.items.get(t)?.value}setValue(t,e){const o=this.items.get(t);return o?o.value=e:this.add(t,e),this.items.get(t)?.value}has(t){return this.items.has(t)}persistToLocalStorage(t){const e={};for(const[i,s]of this.items.entries())try{const t=s.value;if(void 0===t||"function"==typeof t||"symbol"==typeof t)continue;JSON.stringify(t),e[i]=t}catch(o){n.warn("Store",`Skipping non-serializable item: ${i}`,o)}try{localStorage.setItem(t,JSON.stringify(e)),n.info("Store",`Saved to localStorage under key "${t}"`)}catch(o){n.error("Store",`Failed to save to localStorage under key "${t}"`,o)}}loadFromLocalStorage(t){let e,o=null;try{if(o=localStorage.getItem(t),!o)return;n.info("Store",`Loaded from localStorage under key "${t}"`)}catch(i){return void n.error("Store",`Failed to read from localStorage key "${t}"`,i)}try{e=JSON.parse(o)}catch(i){return void n.error("Store",`Invalid JSON in localStorage key "${t}"`,i)}if("object"==typeof e&&null!==e)for(const[n,s]of Object.entries(e))this.has(n)?this.setValue(n,s):this.add(n,s);else n.warn("Store","Unexpected data type in localStorage: "+typeof e)}}const a=Object.freeze(Object.defineProperty({__proto__:null,Store:l,StoreItem:r},Symbol.toStringTag,{value:"Module"}));function c(t){return t._storeListeners||(t._storeListeners={listeners:[]}),t._storeListeners}function h(t,e){return function(o,i){let n;const s={get(){const o=t.get(e);return o?o.value:n},set(o){n=o;const i=t.get(e);i?i.value=o:t.add(e,o)},enumerable:!0,configurable:!0};Object.defineProperty(o,i,s)}}function d(t,e){return function(o,i,n){const s=n.value;p(o,()=>{const i=t.get(e);if(i){const t=s.bind(o);i.on("change",t);c(o).listeners.push(()=>i.off("change",t))}else{const i=(n,r)=>{if(n===e){const e=s.bind(o);r.on("change",e);c(o).listeners.push(()=>r.off("change",e)),t.off("add",i)}};t.on("add",i);c(o).listeners.push(()=>t.off("add",i))}})}}function p(t,e){const o=t.constructor;if(!o.prototype._decorated){const t=o.prototype.constructor;o.prototype.constructor=function(...o){const i=new t(...o);return"function"==typeof i._initStoreDecorators?i._initStoreDecorators():e.call(i),i},o.prototype._decorated=!0}if(t._initStoreDecorators){const o=t._initStoreDecorators;t._initStoreDecorators=function(){o.call(this),e.call(this)}}else t._initStoreDecorators=function(){e.call(this)}}const u=Object.freeze(Object.defineProperty({__proto__:null,storeBind:h,storeOn:d,storeOnce:function(t,e){return function(o,i,n){const s=n.value;p(o,()=>{const i=t.get(e);if(i)i.once("change",s.bind(o));else{const i=(n,r)=>{n===e&&(r.once("change",s.bind(o)),t.off("add",i))};t.on("add",i);c(o).listeners.push(()=>t.off("add",i))}})}},storeRemoveOn:function(){return function(t){return t.prototype.destroy||(t.prototype.destroy=function(){const t=this._storeListeners;t?.listeners&&(t.listeners.forEach(t=>t()),t.listeners=[])}),t}},storeSync:function(t,e){return function(o,i){p(o,()=>{const n=t.get(e);if(n){o[i]=n.value;const t=t=>o[i]=t;n.on("change",t);c(o).listeners.push(()=>n.off("change",t))}else{const n=(s,r)=>{if(s===e){o[i]=r.value;const e=t=>o[i]=t;r.on("change",e);c(o).listeners.push(()=>r.off("change",e)),t.off("add",n)}};t.on("add",n);c(o).listeners.push(()=>t.off("add",n))}})}}},Symbol.toStringTag,{value:"Module"}));var g=Object.defineProperty,m=(t,e,o,i)=>{for(var n,s=void 0,r=t.length-1;r>=0;r--)(n=t[r])&&(s=n(e,o,s)||s);return s&&g(e,o,s),s};function f(){b.loadFromLocalStorage("HortimagicConfig"),b.getValue("allowNotice")??b.setValue("allowNotice",!0),b.getValue("logLevel")??b.setValue("logLevel",0)}function v(){b.persistToLocalStorage("HortimagicConfig")}const b=new l;class y{constructor(){this.allowNotice=!0,this.logLevel=0}}m([h(b,"allowNotice")],y.prototype,"allowNotice"),m([h(b,"logLevel")],y.prototype,"logLevel");const _=new y,w=_.allowNotice,$=_.logLevel,x=new l;class S{constructor(){this.loggerList=[]}}m([h(x,"loggerList")],S.prototype,"loggerList");const k=new S,A=k.loggerList,C=Object.freeze(Object.defineProperty({__proto__:null,HortimagicConfigStore:b,allowNotice:w,hortimagicConfig:_,logLevel:$,loggerList:A,readHortimagicConfigStore:f,saveHortimagicConfigStore:v,sharedData:k,sharedDataStore:x},Symbol.toStringTag,{value:"Module"}));async function O(t){return new Promise(e=>setTimeout(e,t))}function E(t){return t=(t=(t=(t=(t=(t=t.replace("&","&amp;")).replace("<","&lt;")).replace(">","&gt;")).replace('"',"&quot;")).replace("'","&#039;")).replace("\\","&#092;")}function M(t){return t=(t=(t=(t=(t=(t=t.replace("&lt;","<")).replace("&gt;",">")).replace("&quot;",'"')).replace("&#039;","'")).replace("&#092;","\\")).replace("&amp;","&")}function P(){return window.myself?window.myself:null}function T(){return window.uid?window.uid:null}function H(){return window.avatar2&&window.avatarconv?window.avatarconv(window.avatar2):null}function j(){return window.inputcolorhex?window.inputcolorhex:null}const z=Object.freeze(Object.defineProperty({__proto__:null,addStyle:function(t){let e=document.createElement("style");e.innerText=t,document.body.append(e)},changeRoom:function(t){(t=String(t))&&window.Objs.mapHolder?.function?.roomchanger(t)},compressCSS:function(t){return t=(t=(t=(t=(t=t.replace(/\s{2,}/g," ")).replace(/\/\*[\s\S]*?\*\//g,"")).replace(/\s*([{};:,])\s*/g,"$1")).replace(/;\s*}/g,"}")).trim()},compressHTML:function(t){return t=(t=(t=(t=t.replace(/>\s+</g,"><")).replace(/\s{2,}/g," ")).replace(/<!--[\s\S]*?-->/g,"")).trim()},generatePrivateMessageBubble:function(t,e,o){window.privatechatfunc&&window.privatechatfunc([Math.floor(Date.now()/1e3).toString(10),T(),E(P()),E(H()),E(e),E(j()),"",E(j()),"","",o,t,"","","","",""].join(">"))},getAllOnlineUserInfo:function(){let t=window.Objs.mapHolder.Assets.userJson;return t?Object.keys(t).map(e=>{let o=t[e];return{name:o[2],uid:o[8],color:o[3],avatar:o[0],roomId:o[4],personalizedSignature:o[6]}}):null},getOnlineUserInfoById:function(t){t=String(t);let e=window.Objs.mapHolder?.function?.findUserByUid?.(t);return e?{name:e[2],uid:t,color:e[3],avatar:e[0],roomId:e[4],personalizedSignature:e[6]}:null},getRoomId:function(){return window.roomn?window.roomn:null},getRoomInfoById:function(t){let e=window.Objs.mapHolder?.Assets?.roomJson?.[t];if(e){let t=e[5].split("&&").map(t=>t.split(" & ")),o=M(t[0][0]),i=o.indexOf(" ");return{name:e[1],color:e[2],roomPath:e[0].split("_"),description:o.slice(i+1),roomImage:o.slice(0,i),currentUserNum:"number"==typeof e[7]?e[7]:"hidden",ownerName:t[1][0],member:t[4].map(t=>({name:M(t.slice(1)),auth:"0"==t[0]?"member":"1"==t[0]?"admin":"unknow"}))}}return null},getUserInputColor:j,getUserName:P,getUserProfilePictureUrl:H,getUserUid:T,htmlSpecialCharsDecode:M,htmlSpecialCharsEscape:E,sleep:O,switchRoom:function(t){window.Objs.mapHolder?.function?.roomchanger&&window.Objs.mapHolder.function.roomchanger(t)}},Symbol.toStringTag,{value:"Module"}));class L{constructor(){this.timeStamp="",this.headPortrait="",this.name="",this.message="",this.color="",this.gender="",this.uid="",this.designation="",this.messageUid=""}}class B{constructor(){this.timeStamp="",this.headPortrait="",this.name="",this.message="",this.color="",this.gender="",this.uid="",this.messageUid=""}}class I{constructor(){this.messageName="",this.uid="",this.data=""}}class D{constructor(){this.username="",this.avatar="",this.message="",this.color="",this.gender="",this.timeStamp="",this.uid=""}}class N{constructor(){this.privateUID="",this.uid="",this.messageUid="",this.dataUid=""}}class U{constructor(){this.userMessageList=[]}}class R{constructor(){this.result="",this.stockPrice=NaN,this.totalStock=NaN,this.holdingAmount=NaN,this.totalEquity=NaN,this.balance=NaN}}class V{constructor(){this.message=""}}const q=Object.freeze(Object.defineProperty({__proto__:null,Danmu:D,Hidden:I,Private:B,Public:L,Stock:R,System:U,Unkonw:V,Withdrawn:N},Symbol.toStringTag,{value:"Module"}));let W=[];function F(t){return t instanceof L?"public":t instanceof B?"private":t instanceof I?"hidden":t instanceof D?"danmu":t instanceof N?"withdrawn":t instanceof U?"system":t instanceof R?"stock":"unknown"}function X(t){let e=new L,o=t.split(">");return e.timeStamp=o[0],e.headPortrait=o[1],e.name=o[2],e.message=o[3],e.color=o[5],e.gender=o[6],e.uid=o[8],e.designation=o[9],e.messageUid=o[10],e}function G(t){let e=new B,o=t.split(">");return e.timeStamp=o[0].slice(1),e.uid=o[1],e.name=o[2],e.headPortrait=o[3],e.message=o[4],e.color=o[5],e.gender=o[8],e.messageUid=o[10],e}function J(t){let e=new D,o=t.split(">");return e.username=o[0],e.message=o[1],e.color=o[2],e.gender=o[4],e.avatar=o[5],e.timeStamp=o[6],e.uid=o[7],e}function Y(t){if(W=[],/^"[^"].*/gs.test(t)){let e=t.slice(1).split("<");for(let t=e.length-1;t>=0;t--)W.push(X(e[t]))}else if(/^"".*/gs.test(t)){let e=t.slice(1).split("<");for(let t=e.length-1;t>=0;t--)W.push(G(e[t]))}else if(/^=.*/gs.test(t)){let e=t.slice(1).split("<");for(let t=e.length-1;t>=0;t--)W.push(J(e[t]))}else/^[/]<.*>[0-9|a-z]{13}:.*/gs.test(t)?W.push(function(t){let e,o=new I;return e=t.match(/(?<=^[/]<).*(?=>[0-9|a-z]{13}:.*)/gs),o.messageName=null==e?"":e[0],e=t.match(/(?<=^[/]<.*>)[0-9|a-z]{13}(?=:.*)/gs),o.uid=null==e?"":e[0],e=t.match(/(?<=^[/]<.*>[0-9|a-z]{13}:).*/gs),o.data=null==e?"":e[0],o}(t)):/^v0.*/gs.test(t)?W.push(function(t){let e=new N;return"#"==t[2]?(e.privateUID="",e.uid=t.slice(3,16),e.messageUid=t.slice(17,29),e.dataUid=t.slice(3,29)):(e.privateUID=t.slice(3,16),e.uid=t.slice(17,30),e.messageUid=t.slice(31),e.dataUid=t.slice(17)),e}(t)):/^%\*".*/gs.test(t)?W.push(function(t){let e=new U;return e.userMessageList=t.split("<"),e}(t)):/^>.*/gs.test(t)?W.push(function(t){let e=new R;if(e.result=t[2],"*"==e.result)return e;if(">"==e.result)return e.holdingAmount=parseInt(t.slice(2)),e;if("<"==e.result)return e.balance=parseInt(t.slice(2)),e;{let o=t.split('"');if(5==o.length)return e.stockPrice=parseFloat(o[2]),e.totalStock=parseInt(o[0].slice(1)),e.holdingAmount=parseInt(o[3]),e.totalEquity=parseFloat(o[1]),e.balance=parseFloat(o[4]),e;if(4==o.length)return e.stockPrice=parseFloat(o[1])/parseInt(o[0].slice(1)),e.totalStock=parseInt(o[0].slice(1)),e.holdingAmount=parseInt(o[2]),e.totalEquity=parseFloat(o[1]),e.balance=parseFloat(o[3]),e}return e}(t)):W.push(function(t){let e=new V;return e.message=t,e}(t))}const Z=Object.freeze(Object.defineProperty({__proto__:null,decodeMessage:Y,judegMessageClass:F,get messageObjList(){return W}},Symbol.toStringTag,{value:"Module"})),K=new e;async function Q(){n.log("socket","代理网络");for(let e=0;e<30;e++)try{if(n.log("socket","等待网络连接",e),null==window.socket.__onmessage&&null!=window.socket._onmessage&&null!=window.socket.send){n.log("socket","网络连接成功");break}await O(500);continue}catch(t){n.error("socket",t)}null==window.socket.__onmessage&&null!=window.socket._onmessage&&null!=window.socket.send?(tt.originalSend=window.socket.send,window.socket.send=tt.send,tt.originalOnmessage=window.socket._onmessage,window.socket._onmessage=tt.onmessage):n.error("连接失败")}const tt={beforeSend:async function(t){return t},originalSend:function(t){return t},afterSend:function(t){return t},send:async function(t){n.log("socket","发送",{message:t});let e=await tt.beforeSend(t);try{null!=e&&(tt.originalSend(e),tt.afterSend(e))}catch(o){n.error("捕获到错误",o)}},beforeOnmessage:async function(t){return Y(t),t},originalOnmessage:function(t){return t},afterOnmessage:async function(t){for(let e of W)n.log("socket",`触发${F(e)}消息`,{message:t,messageObj:e}),K.emit(F(e),e);return t},onmessage:async function(t){let e=await tt.beforeOnmessage(t);try{null!=e&&(tt.originalOnmessage(e),tt.afterOnmessage(e))}catch(o){n.error("捕获到错误",o)}},initSocket:Q},et=Object.freeze(Object.defineProperty({__proto__:null,initSocket:Q,messageEmitter:K,sockets:tt},Symbol.toStringTag,{value:"Module"}));function ot(t,e){return"cut"===t?`{0${JSON.stringify({m:t,mc:e,i:Math.random().toString().slice(2,12)})}`:JSON.stringify({m:t,mc:e,i:Math.random().toString().slice(2,12)})}const it=Object.freeze(Object.defineProperty({__proto__:null,danmu:function(t,e,o="0"){return`~{"t":"${t}","c":"${e}","v":${o}}`},hidden:function(t,e,o){return`/<${t}>${e}:${o}`},like:function(t,e=""){return`+*${t}${e}`},musicCard:function(t,e,o,i,n,s){return ot(`m__4=${t}>${e}>${o}>${i}>${n}>${s}`,n)},privateChat:function(t,e,o){return JSON.stringify({g:t,m:e,mc:o,i:Math.random().toString().slice(2,12)})},publicChat:ot,stockRequest:function(t){return null==t?">#":t>0?`>$${Math.round(Math.abs(t))}`:t<0?`>@${Math.round(Math.abs(t))}`:">#"},videoCard:function(t,e,o,i,n,s,r){return ot(`m__4*${t}>${e}>${o}>${i}>${n}>${s}>${r}`,n)},withdrawn:function(t,e=""){return""==e?`v0#${t}`:`v0*${e}#${t}`}},Symbol.toStringTag,{value:"Module"}));let nt={movePanelHolder:document.querySelector("#movePanelHolder"),functionHolder:document.querySelector("#functionHolder"),functionButtonGroupList:[...document.querySelectorAll(".functionButton.functionButtonGroup")],msgholderBox:document.querySelector("#msgholder .fullBox.msgholderBox"),homeHolderMsgBox:document.querySelector("#homeHolder .homeHolderMsgContentBox .homeHolderMsgBox.fullBox"),sessionHolderPmTaskBoxItems:[...document.querySelectorAll(".sessionHolderPmTaskBoxItem.whoisTouch2")],moveinputDisplay:document.querySelector("#moveinputDisplay"),moveinput:document.getElementById("moveinput"),moveinputSendBtnFunc:document.querySelector("#moveinputDisplay #moveinputSendBtnFunc"),moveinputSendBtnSend:document.querySelector("#moveinputDisplay #moveinputSendBtnSend")};function st(){nt.movePanelHolder=document.querySelector("#movePanelHolder"),nt.functionHolder=document.querySelector("#functionHolder"),nt.functionButtonGroupList=[...document.querySelectorAll(".functionButton.functionButtonGroup")],nt.msgholderBox=document.querySelector("#msgholder .fullBox .fullBox.msgholderBox"),nt.homeHolderMsgBox=document.querySelector("#homeHolder .homeHolderMsgContentBox .homeHolderMsgBox.fullBox"),nt.sessionHolderPmTaskBoxItems=[...document.querySelectorAll(".sessionHolderPmTaskBoxItem.whoisTouch2")],nt.moveinputDisplay=document.querySelector("#moveinputDisplay"),nt.moveinput=document.getElementById("moveinput"),nt.moveinputSendBtnFunc=document.querySelector("#moveinputDisplay #moveinputSendBtnFunc"),nt.moveinputSendBtnSend=document.querySelector("#moveinputDisplay #moveinputSendBtnSend")}let rt={elementHooks:{moveinput:{oninputBefore:()=>!0,oninputAfter:()=>!0,onblurBefore:()=>!0,onblurAfter:()=>!0,onfocusBefore:()=>!0,onfocusAfter:()=>!0}},functionHooks:{processer:{onBefore:(t,e,o,i)=>!0,onAfter:(t,e,o,i)=>!0}},replaceMoveinput:()=>{try{let t=nt.moveinput.oninput;nt.moveinput.oninput=function(){1==rt.elementHooks.moveinput.oninputBefore()&&(t?.call(nt.moveinput),rt.elementHooks.moveinput.oninputAfter())}}catch(t){n.error("替换错误",t)}try{let t=nt.moveinput.oninput;nt.moveinput.onblur=function(){1==rt.elementHooks.moveinput.onblurBefore()&&(t?.call(nt.moveinput),rt.elementHooks.moveinput.onblurAfter())}}catch(t){n.error("替换错误",t)}try{let t=nt.moveinput.oninput;nt.moveinput.onfocus=function(){1==rt.elementHooks.moveinput.onfocusBefore()&&(t?.call(nt.moveinput),rt.elementHooks.moveinput.onfocusAfter())}}catch(t){n.error("替换错误",t)}},replaceButtonProcesser:()=>{try{let t=buttonProcesser;buttonProcesser=(e,o,i,n)=>{1==rt.functionHooks.processer.onBefore(e,o,i,n)&&(t(e,o,i,n),rt.functionHooks.processer.onAfter(e,o,i,n))}}catch(t){n.error("替换错误",t)}}};function lt(){n.log("增加钩子函数"),rt.replaceMoveinput(),rt.replaceButtonProcesser()}const at=Object.freeze(Object.defineProperty({__proto__:null,Hooks:rt,elements:nt,initHooks:lt,refreshAll:st},Symbol.toStringTag,{value:"Module"}));class ct{constructor(t,e,o=!0,i=!1){this.name=t,this.url=e,this.enable=o,this.ingected=i}}let ht=[];function dt(t){if(""==t.name||""==t.url)return _alert("脚本名字或链接不能为空"),!1;for(let e of ht){if(e.name===t.name)return e.url=t.url,e.enable=t.enable,e.ingected=t.ingected,!1;if(e.url===t.url)return e.name=t.name,e.enable=t.enable,e.ingected=t.ingected,!1}return ht.push(t),!0}function pt(t){ht=ht.filter(e=>e.name!==t.name&&e.url!==t.url)}function ut(t){if(t.ingected)return _alert(`脚本 ${t.name} 已经注入`),t.ingected;const e=document.createElement("script");return e.src=t.url,e.onload=()=>{_alert(`脚本 ${t.name} 注入成功`),t.ingected=!0},e.onerror=()=>{_alert(`脚本 ${t.name} 注入失败`),t.enable=!1},document.head.appendChild(e),t.ingected}function gt(t){for(let e of t)e.enable&&!e.ingected&&ut(e)}function mt(){let t=localStorage.getItem("hortiMagicScriptList");ht=null==t?[]:JSON.parse(t);for(let e of ht)e.ingected=!1}function ft(){localStorage.setItem("hortiMagicScriptList",JSON.stringify(ht)),_alert("脚本列表已保存")}function vt(){mt(),gt(ht)}const bt=Object.freeze(Object.defineProperty({__proto__:null,Script:ct,addScriptToList:dt,ingectlocalScript:vt,injectScript:ut,injectScriptList:gt,readScriptList:mt,removeScriptFromList:pt,saveScriptList:ft,get scriptList(){return ht}},Symbol.toStringTag,{value:"Module"})),yt=Object.freeze(Object.defineProperty({__proto__:null,EventEmitter:o,Message:q,Store_StoreItem:a,config:C,decoder:Z,elements_hooks:at,encoder:it,globalStore:C,iirose_socket:et,logger:s,script_tools:bt,storeDecorators:u,tools:z},Symbol.toStringTag,{value:"Module"})),_t=globalThis,wt=_t.ShadowRoot&&(void 0===_t.ShadyCSS||_t.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,$t=Symbol(),xt=new WeakMap;let St=class{constructor(t,e,o){if(this._$cssResult$=!0,o!==$t)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(wt&&void 0===t){const o=void 0!==e&&1===e.length;o&&(t=xt.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),o&&xt.set(e,t))}return t}toString(){return this.cssText}};const kt=(t,...e)=>{const o=1===t.length?t[0]:e.reduce((e,o,i)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+t[i+1],t[0]);return new St(o,t,$t)},At=wt?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const o of t.cssRules)e+=o.cssText;return(t=>new St("string"==typeof t?t:t+"",void 0,$t))(e)})(t):t,{is:Ct,defineProperty:Ot,getOwnPropertyDescriptor:Et,getOwnPropertyNames:Mt,getOwnPropertySymbols:Pt,getPrototypeOf:Tt}=Object,Ht=globalThis,jt=Ht.trustedTypes,zt=jt?jt.emptyScript:"",Lt=Ht.reactiveElementPolyfillSupport,Bt=(t,e)=>t,It={toAttribute(t,e){switch(e){case Boolean:t=t?zt:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let o=t;switch(e){case Boolean:o=null!==t;break;case Number:o=null===t?null:Number(t);break;case Object:case Array:try{o=JSON.parse(t)}catch(i){o=null}}return o}},Dt=(t,e)=>!Ct(t,e),Nt={attribute:!0,type:String,converter:It,reflect:!1,useDefault:!1,hasChanged:Dt};Symbol.metadata??=Symbol("metadata"),Ht.litPropertyMetadata??=new WeakMap;let Ut=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=Nt){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){const o=Symbol(),i=this.getPropertyDescriptor(t,o,e);void 0!==i&&Ot(this.prototype,t,i)}}static getPropertyDescriptor(t,e,o){const{get:i,set:n}=Et(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get:i,set(e){const s=i?.call(this);n?.call(this,e),this.requestUpdate(t,s,o)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??Nt}static _$Ei(){if(this.hasOwnProperty(Bt("elementProperties")))return;const t=Tt(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(Bt("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Bt("properties"))){const t=this.properties,e=[...Mt(t),...Pt(t)];for(const o of e)this.createProperty(o,t[o])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,o]of e)this.elementProperties.set(t,o)}this._$Eh=new Map;for(const[e,o]of this.elementProperties){const t=this._$Eu(e,o);void 0!==t&&this._$Eh.set(t,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const o=new Set(t.flat(1/0).reverse());for(const t of o)e.unshift(At(t))}else void 0!==t&&e.push(At(t));return e}static _$Eu(t,e){const o=e.attribute;return!1===o?void 0:"string"==typeof o?o:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const o of e.keys())this.hasOwnProperty(o)&&(t.set(o,this[o]),delete this[o]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((t,e)=>{if(wt)t.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const o of e){const e=document.createElement("style"),i=_t.litNonce;void 0!==i&&e.setAttribute("nonce",i),e.textContent=o.cssText,t.appendChild(e)}})(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,o){this._$AK(t,o)}_$ET(t,e){const o=this.constructor.elementProperties.get(t),i=this.constructor._$Eu(t,o);if(void 0!==i&&!0===o.reflect){const n=(void 0!==o.converter?.toAttribute?o.converter:It).toAttribute(e,o.type);this._$Em=t,null==n?this.removeAttribute(i):this.setAttribute(i,n),this._$Em=null}}_$AK(t,e){const o=this.constructor,i=o._$Eh.get(t);if(void 0!==i&&this._$Em!==i){const t=o.getPropertyOptions(i),n="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:It;this._$Em=i;const s=n.fromAttribute(e,t.type);this[i]=s??this._$Ej?.get(i)??s,this._$Em=null}}requestUpdate(t,e,o){if(void 0!==t){const i=this.constructor,n=this[t];if(o??=i.getPropertyOptions(t),!((o.hasChanged??Dt)(n,e)||o.useDefault&&o.reflect&&n===this._$Ej?.get(t)&&!this.hasAttribute(i._$Eu(t,o))))return;this.C(t,e,o)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(t,e,{useDefault:o,reflect:i,wrapped:n},s){o&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,s??e??this[t]),!0!==n||void 0!==s)||(this._$AL.has(t)||(this.hasUpdated||o||(e=void 0),this._$AL.set(t,e)),!0===i&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,o]of t){const{wrapped:t}=o,i=this[e];!0!==t||this._$AL.has(e)||void 0===i||this.C(e,void 0,o,i)}}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(t=>t.hostUpdate?.()),this.update(e)):this._$EM()}catch(o){throw t=!1,this._$EM(),o}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(t){}firstUpdated(t){}};Ut.elementStyles=[],Ut.shadowRootOptions={mode:"open"},Ut[Bt("elementProperties")]=new Map,Ut[Bt("finalized")]=new Map,Lt?.({ReactiveElement:Ut}),(Ht.reactiveElementVersions??=[]).push("2.1.1");const Rt=globalThis,Vt=Rt.trustedTypes,qt=Vt?Vt.createPolicy("lit-html",{createHTML:t=>t}):void 0,Wt="$lit$",Ft=`lit$${Math.random().toFixed(9).slice(2)}$`,Xt="?"+Ft,Gt=`<${Xt}>`,Jt=document,Yt=()=>Jt.createComment(""),Zt=t=>null===t||"object"!=typeof t&&"function"!=typeof t,Kt=Array.isArray,Qt="[ \t\n\f\r]",te=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,ee=/-->/g,oe=/>/g,ie=RegExp(`>|${Qt}(?:([^\\s"'>=/]+)(${Qt}*=${Qt}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),ne=/'/g,se=/"/g,re=/^(?:script|style|textarea|title)$/i,le=(pe=1,(t,...e)=>({_$litType$:pe,strings:t,values:e})),ae=Symbol.for("lit-noChange"),ce=Symbol.for("lit-nothing"),he=new WeakMap,de=Jt.createTreeWalker(Jt,129);var pe;function ue(t,e){if(!Kt(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==qt?qt.createHTML(e):e}class ge{constructor({strings:t,_$litType$:e},o){let i;this.parts=[];let n=0,s=0;const r=t.length-1,l=this.parts,[a,c]=((t,e)=>{const o=t.length-1,i=[];let n,s=2===e?"<svg>":3===e?"<math>":"",r=te;for(let l=0;l<o;l++){const e=t[l];let o,a,c=-1,h=0;for(;h<e.length&&(r.lastIndex=h,a=r.exec(e),null!==a);)h=r.lastIndex,r===te?"!--"===a[1]?r=ee:void 0!==a[1]?r=oe:void 0!==a[2]?(re.test(a[2])&&(n=RegExp("</"+a[2],"g")),r=ie):void 0!==a[3]&&(r=ie):r===ie?">"===a[0]?(r=n??te,c=-1):void 0===a[1]?c=-2:(c=r.lastIndex-a[2].length,o=a[1],r=void 0===a[3]?ie:'"'===a[3]?se:ne):r===se||r===ne?r=ie:r===ee||r===oe?r=te:(r=ie,n=void 0);const d=r===ie&&t[l+1].startsWith("/>")?" ":"";s+=r===te?e+Gt:c>=0?(i.push(o),e.slice(0,c)+Wt+e.slice(c)+Ft+d):e+Ft+(-2===c?l:d)}return[ue(t,s+(t[o]||"<?>")+(2===e?"</svg>":3===e?"</math>":"")),i]})(t,e);if(this.el=ge.createElement(a,o),de.currentNode=this.el.content,2===e||3===e){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(i=de.nextNode())&&l.length<r;){if(1===i.nodeType){if(i.hasAttributes())for(const t of i.getAttributeNames())if(t.endsWith(Wt)){const e=c[s++],o=i.getAttribute(t).split(Ft),r=/([.?@])?(.*)/.exec(e);l.push({type:1,index:n,name:r[2],strings:o,ctor:"."===r[1]?ye:"?"===r[1]?_e:"@"===r[1]?we:be}),i.removeAttribute(t)}else t.startsWith(Ft)&&(l.push({type:6,index:n}),i.removeAttribute(t));if(re.test(i.tagName)){const t=i.textContent.split(Ft),e=t.length-1;if(e>0){i.textContent=Vt?Vt.emptyScript:"";for(let o=0;o<e;o++)i.append(t[o],Yt()),de.nextNode(),l.push({type:2,index:++n});i.append(t[e],Yt())}}}else if(8===i.nodeType)if(i.data===Xt)l.push({type:2,index:n});else{let t=-1;for(;-1!==(t=i.data.indexOf(Ft,t+1));)l.push({type:7,index:n}),t+=Ft.length-1}n++}}static createElement(t,e){const o=Jt.createElement("template");return o.innerHTML=t,o}}function me(t,e,o=t,i){if(e===ae)return e;let n=void 0!==i?o._$Co?.[i]:o._$Cl;const s=Zt(e)?void 0:e._$litDirective$;return n?.constructor!==s&&(n?._$AO?.(!1),void 0===s?n=void 0:(n=new s(t),n._$AT(t,o,i)),void 0!==i?(o._$Co??=[])[i]=n:o._$Cl=n),void 0!==n&&(e=me(t,n._$AS(t,e.values),n,i)),e}class fe{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:o}=this._$AD,i=(t?.creationScope??Jt).importNode(e,!0);de.currentNode=i;let n=de.nextNode(),s=0,r=0,l=o[0];for(;void 0!==l;){if(s===l.index){let e;2===l.type?e=new ve(n,n.nextSibling,this,t):1===l.type?e=new l.ctor(n,l.name,l.strings,this,t):6===l.type&&(e=new $e(n,this,t)),this._$AV.push(e),l=o[++r]}s!==l?.index&&(n=de.nextNode(),s++)}return de.currentNode=Jt,i}p(t){let e=0;for(const o of this._$AV)void 0!==o&&(void 0!==o.strings?(o._$AI(t,o,e),e+=o.strings.length-2):o._$AI(t[e])),e++}}class ve{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,o,i){this.type=2,this._$AH=ce,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=o,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=me(this,t,e),Zt(t)?t===ce||null==t||""===t?(this._$AH!==ce&&this._$AR(),this._$AH=ce):t!==this._$AH&&t!==ae&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):(t=>Kt(t)||"function"==typeof t?.[Symbol.iterator])(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==ce&&Zt(this._$AH)?this._$AA.nextSibling.data=t:this.T(Jt.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:o}=t,i="number"==typeof o?this._$AC(t):(void 0===o.el&&(o.el=ge.createElement(ue(o.h,o.h[0]),this.options)),o);if(this._$AH?._$AD===i)this._$AH.p(e);else{const t=new fe(i,this),o=t.u(this.options);t.p(e),this.T(o),this._$AH=t}}_$AC(t){let e=he.get(t.strings);return void 0===e&&he.set(t.strings,e=new ge(t)),e}k(t){Kt(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let o,i=0;for(const n of t)i===e.length?e.push(o=new ve(this.O(Yt()),this.O(Yt()),this,this.options)):o=e[i],o._$AI(n),i++;i<e.length&&(this._$AR(o&&o._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class be{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,o,i,n){this.type=1,this._$AH=ce,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=n,o.length>2||""!==o[0]||""!==o[1]?(this._$AH=Array(o.length-1).fill(new String),this.strings=o):this._$AH=ce}_$AI(t,e=this,o,i){const n=this.strings;let s=!1;if(void 0===n)t=me(this,t,e,0),s=!Zt(t)||t!==this._$AH&&t!==ae,s&&(this._$AH=t);else{const i=t;let r,l;for(t=n[0],r=0;r<n.length-1;r++)l=me(this,i[o+r],e,r),l===ae&&(l=this._$AH[r]),s||=!Zt(l)||l!==this._$AH[r],l===ce?t=ce:t!==ce&&(t+=(l??"")+n[r+1]),this._$AH[r]=l}s&&!i&&this.j(t)}j(t){t===ce?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class ye extends be{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===ce?void 0:t}}class _e extends be{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==ce)}}class we extends be{constructor(t,e,o,i,n){super(t,e,o,i,n),this.type=5}_$AI(t,e=this){if((t=me(this,t,e,0)??ce)===ae)return;const o=this._$AH,i=t===ce&&o!==ce||t.capture!==o.capture||t.once!==o.once||t.passive!==o.passive,n=t!==ce&&(o===ce||i);i&&this.element.removeEventListener(this.name,this,o),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class $e{constructor(t,e,o){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=o}get _$AU(){return this._$AM._$AU}_$AI(t){me(this,t)}}const xe=Rt.litHtmlPolyfillSupport;xe?.(ge,ve),(Rt.litHtmlVersions??=[]).push("3.3.1");const Se=globalThis;let ke=class extends Ut{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,o)=>{const i=o?.renderBefore??e;let n=i._$litPart$;if(void 0===n){const t=o?.renderBefore??null;i._$litPart$=n=new ve(e.insertBefore(Yt(),t),t,void 0,o??{})}return n._$AI(t),n})(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return ae}};ke._$litElement$=!0,ke.finalized=!0,Se.litElementHydrateSupport?.({LitElement:ke});const Ae=Se.litElementPolyfillSupport;Ae?.({LitElement:ke}),(Se.litElementVersions??=[]).push("4.2.1");const Ce=t=>(e,o)=>{void 0!==o?o.addInitializer(()=>{customElements.define(t,e)}):customElements.define(t,e)},Oe={attribute:!0,type:String,converter:It,reflect:!1,hasChanged:Dt},Ee=(t=Oe,e,o)=>{const{kind:i,metadata:n}=o;let s=globalThis.litPropertyMetadata.get(n);if(void 0===s&&globalThis.litPropertyMetadata.set(n,s=new Map),"setter"===i&&((t=Object.create(t)).wrapped=!0),s.set(o.name,t),"accessor"===i){const{name:i}=o;return{set(o){const n=e.get.call(this);e.set.call(this,o),this.requestUpdate(i,n,t)},init(e){return void 0!==e&&this.C(i,void 0,t,e),e}}}if("setter"===i){const{name:i}=o;return function(o){const n=this[i];e.call(this,o),this.requestUpdate(i,n,t)}}throw Error("Unsupported decorator location: "+i)};function Me(t){return(e,o)=>"object"==typeof o?Ee(t,e,o):((t,e,o)=>{const i=e.hasOwnProperty(o);return e.constructor.createProperty(o,t),i?Object.getOwnPropertyDescriptor(e,o):void 0})(t,e,o)}function Pe(t,e){return(e,o,i)=>((t,e,o)=>(o.configurable=!0,o.enumerable=!0,Reflect.decorate&&"object"!=typeof e&&Object.defineProperty(t,e,o),o))(e,o,{get(){return(e=>e.renderRoot?.querySelector(t)??null)(this)}})}var Te=Object.defineProperty,He=Object.getOwnPropertyDescriptor,je=(t,e,o,i)=>{for(var n,s=i>1?void 0:i?He(e,o):e,r=t.length-1;r>=0;r--)(n=t[r])&&(s=(i?n(e,o,s):n(s))||s);return i&&s&&Te(e,o,s),s};let ze=[],Le=99999,Be=class extends ke{constructor(){super(),this.width=320,this.height=490,this.headerBackgroundColor="rgba(66,134,182,0.9)",this.headerColor="rgb(255,255,255)",this.bodyBackgroundColor="rgba(255,255,255,0.7)",this.bodyColor="rgba(23, 23, 23, 0.9)",this.footerBackgroundColor="rgba(255,255,255,0.7)",this.buttonBackground="rgba(255,255,255,0.9)",this.buttonColor="rgba(66,134,182,0.9)",this.titleContent="面板",this.leftButtonText="",this.rightButtonText="",this.isDisplay=!1,this.zIndex=Le,this.icon="magic-wand",this.left=(window.innerWidth-this.width)/2,this.top=(window.innerHeight-(this.height+80))/2,this.dragging=!1,ze.push(this),this.zIndex=++Le}hideMovePanel(){this.isDisplay=!1,n.log("MovePanel","关闭事件"),this.dispatchEvent(new CustomEvent("close",{detail:{isDisplay:this.isDisplay,message:"关闭事件"},bubbles:!0,composed:!0}))}showMovePanel(){this.isDisplay=!0,n.log("MovePanel","显示事件"),this.dispatchEvent(new CustomEvent("show",{detail:{isDisplay:this.isDisplay},bubbles:!0,composed:!0}))}toogleDisplay(){this.isDisplay?this.hideMovePanel():this.showMovePanel()}mouseDragging(t){n.log("MovePanel","标题按下");let e=this.left,o=this.top,i=t.clientX-e,s=t.clientY-o;n.log("MovePanel","鼠标位置",t.clientX,t.clientY),n.log("MovePanel","窗口位置",e,o),0==this.dragging&&(this.dragging=!0),document.onmousemove=t=>{this.dragging&&(this.left=t.clientX-i,this.top=t.clientY-s)},document.onmouseup=()=>{n.log("MovePanel","标题抬起"),this.dragging&&(this.dragging=!1),document.onmousemove=null}}touchDragging(t){n.log("MovePanel","触摸标题按下");let e=this.left,o=this.top,i=t.touches[0].clientX-e,s=t.touches[0].clientY-o;n.log("MovePanel","触摸鼠标位置",t.touches[0].clientX,t.touches[0].clientY),n.log("MovePanel","触摸窗口位置",e,o),0==this.dragging&&(this.dragging=!0),document.ontouchmove=t=>{this.dragging&&(this.left=t.touches[0].clientX-i,this.top=t.touches[0].clientY-s)},document.ontouchend=()=>{n.log("MovePanel","标题抬起"),this.dragging&&(this.dragging=!1),document.onmousemove=null}}putTop(){n.log("MovePanel","置顶窗口");let t=!1;if(ze.includes(this)){for(let t=0;t<ze.length;t++)ze[t].zIndex>this.zIndex&&(ze[t].zIndex=ze[t].zIndex-1);this.zIndex=Le,t=!0}else n.warn("MovePanel","置顶失败，窗口不在列表中"),t=!1;return t}putTopToggel(){this.zIndex!=Le?(this.putTop(),this.showMovePanel()):this.toogleDisplay()}render(){return le`
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
      @click="${this.handleLeftButtonClick}"
    >
      ${this.leftButtonText}
      </hm-button>
    <hm-button
      class="footer-button footer-button-right"
      icon="magic-wand"
      width="100%"
      background="${this.buttonColor}"
      color="${this.buttonBackground}"
      @click="${this.handleRightButtonClick}"
    >
      ${this.rightButtonText}
    </hm-button>
  </div>
</div>

                `}_handleClose(){this.hideMovePanel()}handleLeftButtonClick(){this.dispatchEvent(new CustomEvent("left-button-click",{detail:{message:"左侧按钮被点击"},bubbles:!0,composed:!0}))}handleRightButtonClick(){this.dispatchEvent(new CustomEvent("right-button-click",{detail:{message:"右侧按钮被点击"},bubbles:!0,composed:!0}))}};Be.styles=kt`
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
`,je([Me({type:Number})],Be.prototype,"width",2),je([Me({type:Number})],Be.prototype,"height",2),je([Me({type:String,attribute:"header-background-color"})],Be.prototype,"headerBackgroundColor",2),je([Me({type:String,attribute:"header-color"})],Be.prototype,"headerColor",2),je([Me({type:String,attribute:"body-background-color"})],Be.prototype,"bodyBackgroundColor",2),je([Me({type:String,attribute:"body-color"})],Be.prototype,"bodyColor",2),je([Me({type:String,attribute:"footer-background-color"})],Be.prototype,"footerBackgroundColor",2),je([Me({type:String,attribute:"button-background-color"})],Be.prototype,"buttonBackground",2),je([Me({type:String,attribute:"button-color"})],Be.prototype,"buttonColor",2),je([Me({type:String})],Be.prototype,"titleContent",2),je([Me({type:String,attribute:"left-button-text"})],Be.prototype,"leftButtonText",2),je([Me({type:String,attribute:"right-button-text"})],Be.prototype,"rightButtonText",2),je([Me({type:Boolean,attribute:"is-display"})],Be.prototype,"isDisplay",2),je([Me({type:Number})],Be.prototype,"zIndex",2),je([Me({type:String})],Be.prototype,"icon",2),je([Me({type:Number})],Be.prototype,"left",2),je([Me({type:Number})],Be.prototype,"top",2),Be=je([Ce("hm-move-panel")],Be);const Ie=Object.freeze(Object.defineProperty({__proto__:null,get HmMovePanel(){return Be},movePanelItemList:ze,get movePanelItemMaxZindex(){return Le}},Symbol.toStringTag,{value:"Module"})),De=2,Ne=t=>(...e)=>({_$litDirective$:t,values:e});class Ue{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,o){this._$Ct=t,this._$AM=e,this._$Ci=o}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}let Re=class extends Ue{constructor(t){if(super(t),this.it=ce,t.type!==De)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===ce||null==t)return this._t=void 0,this.it=t;if(t===ae)return t;if("string"!=typeof t)throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.it)return this._t;this.it=t;const e=[t];return e.raw=e,this._t={_$litType$:this.constructor.resultType,strings:e,values:[]}}};Re.directiveName="unsafeHTML",Re.resultType=1;class Ve extends Re{}Ve.directiveName="unsafeSVG",Ve.resultType=2;const qe=Ne(Ve);var We=Object.defineProperty,Fe=Object.getOwnPropertyDescriptor,Xe=(t,e,o,i)=>{for(var n,s=i>1?void 0:i?Fe(e,o):e,r=t.length-1;r>=0;r--)(n=t[r])&&(s=(i?n(e,o,s):n(s))||s);return i&&s&&We(e,o,s),s};const Ge=new Map([["magic-wand",'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m12.64 1.87l-.84 2.48a.41.41 0 0 0 0 .37l1.57 2.1a.4.4 0 0 1-.33.64h-2.62a.43.43 0 0 0-.33.17l-1.46 2.1a.4.4 0 0 1-.71-.11l-.78-2.5a.38.38 0 0 0-.26-.26l-2.5-.78a.4.4 0 0 1-.11-.71l2.14-1.51a.43.43 0 0 0 .17-.33V.91a.4.4 0 0 1 .6-.33l2.1 1.57a.41.41 0 0 0 .37.05l2.48-.84a.4.4 0 0 1 .51.51m-5.6 5.09L.5 13.5" stroke-width="1"/></svg>'],["close",'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M6.4 19L5 17.6l5.6-5.6L5 6.4L6.4 5l5.6 5.6L17.6 5L19 6.4L13.4 12l5.6 5.6l-1.4 1.4l-5.6-5.6z"/></svg>'],["open",'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M4 21q-.425 0-.712-.288T3 20v-6q0-.425.288-.712T4 13t.713.288T5 14v3.6L17.6 5H14q-.425 0-.712-.288T13 4t.288-.712T14 3h6q.425 0 .713.288T21 4v6q0 .425-.288.713T20 11t-.712-.288T19 10V6.4L6.4 19H10q.425 0 .713.288T11 20t-.288.713T10 21z"/></svg>'],["led-on",'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M11 0v4h2V0zm7.3 2.29l-3.06 3l1.4 1.42l3.06-3zm-12.59 0L4.29 3.71l3 3l1.42-1.42zM12 6a4 4 0 0 0-4 4v6H6v2h3v5h2v-5h2v5h2v-5h3v-2h-2v-6a4 4 0 0 0-4-4M2 9v2h4V9zm16 0v2h4V9z"/></svg>'],["led-off",'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M12 6a4 4 0 0 0-4 4v6H6v2h3v5h2v-5h2v5h2v-5h3v-2h-2v-6a4 4 0 0 0-4-4"/></svg>'],["arrow-up",'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M16.21 16H7.79a1.76 1.76 0 0 1-1.59-1a2.1 2.1 0 0 1 .26-2.21l4.21-5.1a1.76 1.76 0 0 1 2.66 0l4.21 5.1A2.1 2.1 0 0 1 17.8 15a1.76 1.76 0 0 1-1.59 1"/></svg>'],["arrow-down",'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M12 17a1.72 1.72 0 0 1-1.33-.64l-4.21-5.1a2.1 2.1 0 0 1-.26-2.21A1.76 1.76 0 0 1 7.79 8h8.42a1.76 1.76 0 0 1 1.59 1.05a2.1 2.1 0 0 1-.26 2.21l-4.21 5.1A1.72 1.72 0 0 1 12 17"/></svg>'],["template",'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><defs><mask id="SVGZZ153dkC"><path fill="#4d4d4d" stroke="#fff" stroke-linejoin="round" stroke-width="4" d="M23 4H4v22h19zm21 30H4v9h40zm0-30H31v8h13zm0 14H31v8h13z"/></mask></defs><path fill="currentColor" d="M0 0h48v48H0z" mask="url(#SVGZZ153dkC)"/></svg>'],["js",'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path fill="currentColor" d="M10.77 7.3h.002c1.045.393 2.479.93 2.479 2.45a2.5 2.5 0 0 1-.224 1.02a2.5 2.5 0 0 1-1.515 1.364a2.5 2.5 0 0 1-1.035.115a2 2 0 0 1-.214.012a2.5 2.5 0 0 1-1.673-.65a2.52 2.52 0 0 1-.838-1.859c0-.202.078-.39.22-.532a.77.77 0 0 1 1.06 0a.74.74 0 0 1 .221.53c0 .952 1.041 1 1.25 1s1.25-.048 1.25-1c0-.413-.447-.648-1.514-1.048h-.003C9.19 8.307 7.753 7.77 7.753 6.25q.005-.537.224-1.02a2.5 2.5 0 0 1 .614-.842a2.5 2.5 0 0 1 .9-.52a3.5 3.5 0 0 1 2.023 0a2.52 2.52 0 0 1 1.738 2.381c0 .201-.078.39-.22.531a.77.77 0 0 1-1.061 0a.74.74 0 0 1-.22-.53c0-.952-1.041-1-1.25-1s-1.25.048-1.25 1c0 .413.447.648 1.514 1.048zM5.751 4.5c0-.2.078-.388.22-.53a.77.77 0 0 1 1.06 0c.142.141.22.33.22.53v5a2.75 2.75 0 0 1-4.695 1.945A2.73 2.73 0 0 1 1.75 9.5V9c0-.2.078-.388.22-.53a.77.77 0 0 1 1.061 0c.142.141.22.33.22.53v.5c0 .33.134.652.366.884c.465.465 1.303.465 1.768 0c.232-.233.366-.555.366-.884z"/></svg>'],["filter",'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M3 4c2.01 2.59 7 9 7 9v7h4v-7s4.98-6.41 7-9z"/></svg>'],["filter-off",'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M3.004 1.59L3 1.586L1.586 3l4.928 4.928L10 12.818V21h4v-5.585l7 7l1.41-1.41L3 1.595zm12.266 9.446L21 3H7.234z"/></svg>'],["eye",'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M16 11v2h-1v1h-1v1h-1v1h-2v-1h-1v-1H9v-1H8v-2h2v-1h1V8h2v1h1v1h1v1z"/><path fill="currentColor" d="M22 11V9h-1V8h-1V7h-1V6h-2V5H7v1H5v1H4v1H3v1H2v2H1v2h1v2h1v1h1v1h1v1h2v1h10v-1h2v-1h1v-1h1v-1h1v-2h1v-2zm-4 2h-1v2h-1v1h-1v1h-2v1h-2v-1H9v-1H8v-1H7v-2H6v-2h1V9h1V8h1V7h2V6h2v1h2v1h1v1h1v2h1z"/></svg>'],["eye-off",'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M2 13H1v-2h1V9h1V8h1V7h1V6h2V5h8v1h-1v1h-1V6h-2v1H9v1H8v1H7v2H6v2h1v1H6v1H5v1H3v-1H2z"/><path fill="currentColor" d="M8 11h1v1H8zm3-3h1v1h-1zm-2 9H8v1H7v1H6v1H5v1H4v1H3v-1H2v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1V9h1V8h1V7h1V6h1V5h1V4h1V3h1V2h1v1h1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1H9zm3-2h1v1h-1zm1-1h1v1h-1zm2-2h1v1h-1zm-1 1h1v1h-1z"/><path fill="currentColor" d="M23 11v2h-1v2h-1v1h-1v1h-1v1h-2v1H9v-1h1v-1h1v1h2v-1h2v-1h1v-1h1v-2h1v-2h-1v-1h1V9h1V8h2v1h1v2z"/></svg>'],["config",'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="4"><path d="m24 4l-6 6h-8v8l-6 6l6 6v8h8l6 6l6-6h8v-8l6-6l-6-6v-8h-8z"/><path d="M24 30a6 6 0 1 0 0-12a6 6 0 0 0 0 12Z"/></g></svg>'],["log",'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path fill="currentColor" fill-rule="evenodd" d="M3.5 2.5v11h9v-11zM3 1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zm5 10a.75.75 0 0 1 .75-.75h1.75a.75.75 0 0 1 0 1.5H8.75A.75.75 0 0 1 8 11m-2 1a1 1 0 1 0 0-2a1 1 0 0 0 0 2m2-4a.75.75 0 0 1 .75-.75h1.75a.75.75 0 0 1 0 1.5H8.75A.75.75 0 0 1 8 8M6 9a1 1 0 1 0 0-2a1 1 0 0 0 0 2m2-4a.75.75 0 0 1 .75-.75h1.75a.75.75 0 0 1 0 1.5H8.75A.75.75 0 0 1 8 5M6 6a1 1 0 1 0 0-2a1 1 0 0 0 0 2" clip-rule="evenodd"/></svg>']]);function Je(t){return Ge.get(t)||'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m12.64 1.87l-.84 2.48a.41.41 0 0 0 0 .37l1.57 2.1a.4.4 0 0 1-.33.64h-2.62a.43.43 0 0 0-.33.17l-1.46 2.1a.4.4 0 0 1-.71-.11l-.78-2.5a.38.38 0 0 0-.26-.26l-2.5-.78a.4.4 0 0 1-.11-.71l2.14-1.51a.43.43 0 0 0 .17-.33V.91a.4.4 0 0 1 .6-.33l2.1 1.57a.41.41 0 0 0 .37.05l2.48-.84a.4.4 0 0 1 .51.51m-5.6 5.09L.5 13.5" stroke-width="1"/></svg>'}let Ye=class extends ke{constructor(){super(...arguments),this.icon="magic-wand",this.size="16px"}handelClick(){this.dispatchEvent(new CustomEvent("hm-icon-click"))}render(){return le`
<div class="icon" 
style="width:${this.size}; height:${this.size};"
@click="${this.handelClick}"
>
    ${qe(Je(this.icon))}
</div>
`}};Ye.styles=kt`
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
`,Xe([Me({type:String})],Ye.prototype,"icon",2),Xe([Me({type:String})],Ye.prototype,"size",2),Ye=Xe([Ce("hm-icon")],Ye);const Ze=Object.freeze(Object.defineProperty({__proto__:null,get HmIcon(){return Ye},getIcon:Je,iconMap:Ge,registerIcon:function(t,e){Ge.set(t,e)}},Symbol.toStringTag,{value:"Module"}));var Ke=Object.defineProperty,Qe=Object.getOwnPropertyDescriptor,to=(t,e,o,i)=>{for(var n,s=i>1?void 0:i?Qe(e,o):e,r=t.length-1;r>=0;r--)(n=t[r])&&(s=(i?n(e,o,s):n(s))||s);return i&&s&&Ke(e,o,s),s};let eo=class extends ke{constructor(){super(...arguments),this.icon="magic-wand",this.content="HortiMagicMenu",this.flag=!1,this.isMenuItem=!1}handleClick(){this.isMenuItem||(this.flag=!this.flag),this.dispatchEvent(new CustomEvent("hm-menu-click"))}render(){return le`
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
      ${this.isMenuItem?"":le`<hm-icon
        class="icon right"
        icon="${this.flag?"arrow-up":"arrow-down"}"
      ></hm-icon
      >`}
    </slot>
  </div>
</div>




`}};eo.styles=kt`
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
`,to([Me({type:String})],eo.prototype,"icon",2),to([Me({type:String})],eo.prototype,"content",2),to([Me({type:Boolean})],eo.prototype,"flag",2),to([Me({type:Boolean})],eo.prototype,"isMenuItem",2),eo=to([Ce("hm-menu")],eo);const oo=Object.freeze(Object.defineProperty({__proto__:null,get HmMenu(){return eo}},Symbol.toStringTag,{value:"Module"}));var io=Object.defineProperty,no=Object.getOwnPropertyDescriptor,so=(t,e,o,i)=>{for(var n,s=i>1?void 0:i?no(e,o):e,r=t.length-1;r>=0;r--)(n=t[r])&&(s=(i?n(e,o,s):n(s))||s);return i&&s&&io(e,o,s),s};let ro=class extends ke{constructor(){super(...arguments),this.leftIcon="magic-wand",this.title="HortiMagic",this.content="Hello iirose!",this.rightIcon="",this.displayTime=999999,this.color="rgb(33,33,33)",this.backgroundColor="rgba(255,255,255,0.9)"}firstUpdated(){this.displayTime>0&&setTimeout(()=>{this.startLeaveAnimation()},this.displayTime)}startLeaveAnimation(){this.setAttribute("leaving",""),setTimeout(()=>{this.remove()},300)}render(){return le`
<div
  class="hm-notification"
  style="${this.color?`border-color: ${this.color};`:""} 
            ${this.color?`color: ${this.color};`:""} 
            ${this.backgroundColor?`background-color: ${this.backgroundColor};`:""}"
>
  ${this.leftIcon?le`
  <div class="icondiv">
    <hm-icon icon="${this.leftIcon}" size="24px"></hm-icon>
  </div>
  `:""}

  <div class="hm-notification-main">
    <div class="hm-notification-title">${this.title}</div>
    <div class="hm-notification-content">${this.content}</div>
  </div>
  ${this.rightIcon?le`
  <div class="icondiv">
    <hm-icon icon="${this.rightIcon}" size="24px"></hm-icon>
  </div>
  `:""}
</div>
`}};ro.styles=kt`
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
`,so([Me()],ro.prototype,"leftIcon",2),so([Me()],ro.prototype,"title",2),so([Me()],ro.prototype,"content",2),so([Me()],ro.prototype,"rightIcon",2),so([Me()],ro.prototype,"displayTime",2),so([Me()],ro.prototype,"color",2),so([Me()],ro.prototype,"backgroundColor",2),ro=so([Ce("hm-notification")],ro);const lo=Object.freeze(Object.defineProperty({__proto__:null,get HmNotification(){return ro}},Symbol.toStringTag,{value:"Module"}));var ao=Object.defineProperty,co=Object.getOwnPropertyDescriptor,ho=(t,e,o,i)=>{for(var n,s=i>1?void 0:i?co(e,o):e,r=t.length-1;r>=0;r--)(n=t[r])&&(s=(i?n(e,o,s):n(s))||s);return i&&s&&ao(e,o,s),s};let po=class extends ke{constructor(){super(...arguments),this.icon="",this.content="",this.fontSize="14px",this.color="",this.background="",this.width="",this.height="",this.enable=!0,this.loading=!1}render(){const t=`\n          ${this.color?`color: ${this.color};`:""}\n          ${this.background?`background: ${this.background};`:""}\n          ${this.width?`width: ${this.width};`:""}\n          ${this.height?`height: ${this.height};`:""}\n          ${this.fontSize?`font-size: ${this.fontSize};`:"14px"}\n        `;return le`
          <button 
            class="button" 
            style="${t}"
            ?disabled="${!this.enable||this.loading}"
            @click="${this._handleClick}">
            
            ${this.loading?le`
              <div class="loading-spinner"></div>
            `:this.icon?le`
              <slot name="icon">
                <hm-icon icon="${this.icon}" style="margin-right: 8px;"></hm-icon>
              </slot>
            `:""}
            
            <span class="button-content">
              <slot>${this.content}</slot>
            </span>
          </button>
        `}_handleClick(t){this.enable&&!this.loading?this.dispatchEvent(new CustomEvent("hm-button-click")):t.stopPropagation()}};po.styles=kt`
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
    `,ho([Me({type:String})],po.prototype,"icon",2),ho([Me({type:String})],po.prototype,"content",2),ho([Me({type:String})],po.prototype,"fontSize",2),ho([Me({type:String})],po.prototype,"color",2),ho([Me({type:String})],po.prototype,"background",2),ho([Me({type:String})],po.prototype,"width",2),ho([Me({type:String})],po.prototype,"height",2),ho([Me({type:Boolean})],po.prototype,"enable",2),ho([Me({type:Boolean})],po.prototype,"loading",2),po=ho([Ce("hm-button")],po);const uo=Object.freeze(Object.defineProperty({__proto__:null,get HmButton(){return po}},Symbol.toStringTag,{value:"Module"}));var go=Object.defineProperty,mo=Object.getOwnPropertyDescriptor,fo=(t,e,o,i)=>{for(var n,s=i>1?void 0:i?mo(e,o):e,r=t.length-1;r>=0;r--)(n=t[r])&&(s=(i?n(e,o,s):n(s))||s);return i&&s&&go(e,o,s),s};let vo=class extends ke{constructor(){super(...arguments),this.titleName="单元格",this.descripthion="描述信息",this.content="内容",this.titleClickCallback=()=>{},this.contentClickCallback=()=>{}}render(){return le`
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
    <div class="content" part="content"><slot>${this.content}</slot></div>
  </div>
</div>

`}};vo.styles=kt`
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
  `,fo([Me({attribute:"title-name"})],vo.prototype,"titleName",2),fo([Me()],vo.prototype,"descripthion",2),fo([Me()],vo.prototype,"content",2),fo([Me()],vo.prototype,"titleClickCallback",2),fo([Me()],vo.prototype,"contentClickCallback",2),vo=fo([Ce("hm-cell")],vo);const bo=Object.freeze(Object.defineProperty({__proto__:null,get HmCell(){return vo}},Symbol.toStringTag,{value:"Module"})),yo=(t,e)=>{const o=t._$AN;if(void 0===o)return!1;for(const i of o)i._$AO?.(e,!1),yo(i,e);return!0},_o=t=>{let e,o;do{if(void 0===(e=t._$AM))break;o=e._$AN,o.delete(t),t=e}while(0===o?.size)},wo=t=>{for(let e;e=t._$AM;t=e){let o=e._$AN;if(void 0===o)e._$AN=o=new Set;else if(o.has(t))break;o.add(t),So(e)}};function $o(t){void 0!==this._$AN?(_o(this),this._$AM=t,wo(this)):this._$AM=t}function xo(t,e=!1,o=0){const i=this._$AH,n=this._$AN;if(void 0!==n&&0!==n.size)if(e)if(Array.isArray(i))for(let s=o;s<i.length;s++)yo(i[s],!1),_o(i[s]);else null!=i&&(yo(i,!1),_o(i));else yo(this,t)}const So=t=>{t.type==De&&(t._$AP??=xo,t._$AQ??=$o)};class ko extends Ue{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,e,o){super._$AT(t,e,o),wo(this),this.isConnected=t._$AU}_$AO(t,e=!0){t!==this.isConnected&&(this.isConnected=t,t?this.reconnected?.():this.disconnected?.()),e&&(yo(this,t),_o(this))}setValue(t){if(void 0===this._$Ct.strings)this._$Ct._$AI(t,this);else{const e=[...this._$Ct._$AH];e[this._$Ci]=t,this._$Ct._$AI(e,this,0)}}disconnected(){}reconnected(){}}class Ao{}const Co=new WeakMap,Oo=Ne(class extends ko{render(t){return ce}update(t,[e]){const o=e!==this.G;return o&&void 0!==this.G&&this.rt(void 0),(o||this.lt!==this.ct)&&(this.G=e,this.ht=t.options?.host,this.rt(this.ct=t.element)),ce}rt(t){if(this.isConnected||(t=void 0),"function"==typeof this.G){const e=this.ht??globalThis;let o=Co.get(e);void 0===o&&(o=new WeakMap,Co.set(e,o)),void 0!==o.get(this.G)&&this.G.call(this.ht,void 0),o.set(this.G,t),void 0!==t&&this.G.call(this.ht,t)}else this.G.value=t}get lt(){return"function"==typeof this.G?Co.get(this.ht??globalThis)?.get(this.G):this.G?.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}});var Eo=Object.defineProperty,Mo=Object.getOwnPropertyDescriptor,Po=(t,e,o,i)=>{for(var n,s=i>1?void 0:i?Mo(e,o):e,r=t.length-1;r>=0;r--)(n=t[r])&&(s=(i?n(e,o,s):n(s))||s);return i&&s&&Eo(e,o,s),s};let To=class extends ke{constructor(){super(),this.index=0,this.value=0,this.labelList=[["0",0]],this.disabled=!1,this.selectRef=new Ao}connectedCallback(){super.connectedCallback(),this.index=this.index<this.labelList.length?this.index:0,this.index<this.labelList.length&&(this.value=this.labelList[this.index][1])}render(){return le`
      <div class="select-wrapper">
        <select 
          ${Oo(this.selectRef)}
          ?disabled="${this.disabled}"
          @change="${this._handleChange}"
        >
          ${this.labelList.map(([t,e],o)=>le`
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
    `}_handleChange(t){const e=t.target,o=e.selectedIndex,i=e.options[o];this.index=o,o<this.labelList.length?this.value=this.labelList[o][1]:this.value=i.value,this.dispatchEvent(new CustomEvent("change",{detail:{value:i.value,label:i.text,index:o},bubbles:!0,composed:!0}))}getValue(){if(this.selectRef.value){const t=this.selectRef.value.value,e=Array.from(this.selectRef.value.options).findIndex(e=>e.value===t);return-1!==e&&e<this.labelList.length?this.labelList[e][1]:t}return this.value}setValue(t){const e=this.labelList.findIndex(e=>e[1]===t);this.selectRef.value&&(this.selectRef.value.value=String(-1!==e?this.labelList[e][1]:t)),this.value=t,-1!==e&&(this.index=e)}};To.styles=kt`
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
  `,Po([Me({type:Number,reflect:!0})],To.prototype,"index",2),Po([Me({reflect:!0})],To.prototype,"value",2),Po([Me({type:Array,attribute:"label-list"})],To.prototype,"labelList",2),Po([Me({type:Boolean})],To.prototype,"disabled",2),To=Po([Ce("hm-select")],To);const Ho=Object.freeze(Object.defineProperty({__proto__:null,get HmSelect(){return To}},Symbol.toStringTag,{value:"Module"}));var jo=Object.defineProperty,zo=Object.getOwnPropertyDescriptor,Lo=(t,e,o,i)=>{for(var n,s=i>1?void 0:i?zo(e,o):e,r=t.length-1;r>=0;r--)(n=t[r])&&(s=(i?n(e,o,s):n(s))||s);return i&&s&&jo(e,o,s),s};let Bo=class extends ke{constructor(){super(...arguments),this._isDragging=!1,this._startX=0,this._currentTranslate=0,this._prevTranslate=0,this._animationId=0,this._velocity=0,this._lastX=0,this._lastTime=0,this._isOpen=!1,this.rightButtonName="右侧按钮",this.rightButtonCallback=function(){n.log("cell","点击了一下")},this.leftActionsWidth=0,this.rightActionsWidth=0,this.onDragStart=t=>{t.preventDefault(),this.startDrag(t.clientX),this.sliderElement.style.cursor="grabbing",this.sliderElement.style.transition="none"},this.onTouchStart=t=>{t.preventDefault(),this.startDrag(t.touches[0].clientX),this.sliderElement.style.transition="none"},this.startDrag=t=>{this._isDragging=!0,this._startX=t,this._lastX=t,this._lastTime=Date.now(),this._isOpen=Math.abs(this._prevTranslate)>10,this.calculateActionWidths()},this.onDragMove=t=>{this._isDragging&&(t.preventDefault(),this.handleMove(t.clientX))},this.onTouchMove=t=>{this._isDragging&&(t.preventDefault(),this.handleMove(t.touches[0].clientX))},this.onDragEnd=()=>{this.finishDrag(),this.sliderElement.style.cursor="grab"},this.onTouchEnd=()=>{this.finishDrag()}}firstUpdated(){this.calculateActionWidths(),this.addEventListeners()}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListeners()}calculateActionWidths(){this.leftActionsWidth=this.leftActions?this.leftActions.offsetWidth:0,this.rightActionsWidth=this.rightActions?this.rightActions.offsetWidth:0}addEventListeners(){this.sliderElement.addEventListener("mousedown",this.onDragStart),this.sliderElement.addEventListener("touchstart",this.onTouchStart,{passive:!1}),document.addEventListener("mousemove",this.onDragMove),document.addEventListener("touchmove",this.onTouchMove,{passive:!1}),document.addEventListener("mouseup",this.onDragEnd),document.addEventListener("touchend",this.onTouchEnd)}removeEventListeners(){this.sliderElement.removeEventListener("mousedown",this.onDragStart),this.sliderElement.removeEventListener("touchstart",this.onTouchStart),document.removeEventListener("mousemove",this.onDragMove),document.removeEventListener("touchmove",this.onTouchMove),document.removeEventListener("mouseup",this.onDragEnd),document.removeEventListener("touchend",this.onTouchEnd)}handleMove(t){const e=Date.now(),o=e-this._lastTime;o>0&&(this._velocity=(t-this._lastX)/o,this._lastX=t,this._lastTime=e);const i=t-this._startX;let n=this._prevTranslate+i;if(n>this.leftActionsWidth){const t=n-this.leftActionsWidth;n=this.leftActionsWidth+this.easeOut(t,30)}else if(n<-this.rightActionsWidth){const t=n+this.rightActionsWidth;n=-this.rightActionsWidth+this.easeOut(t,30)}this._currentTranslate=n,this.updateSliderPosition()}easeOut(t,e){return.2*t}finishDrag(){this._isDragging=!1,this.sliderElement.style.transition="transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)";let t=0;if(t=this._currentTranslate>5||this._currentTranslate>0&&this._velocity>.1?this.leftActionsWidth:this._currentTranslate<-5||this._currentTranslate<0&&this._velocity<-.1?-this.rightActionsWidth:0,this._isOpen){const e=5;t=this._prevTranslate>0&&this._currentTranslate<this._prevTranslate-e||this._prevTranslate<0&&this._currentTranslate>this._prevTranslate+e?0:this._prevTranslate}this._currentTranslate=t,this._prevTranslate=t,this.updateSliderPosition(),this._velocity=0}updateSliderPosition(){this._animationId&&cancelAnimationFrame(this._animationId),this._animationId=requestAnimationFrame(()=>{if(this.sliderElement.style.transform=`translateX(${this._currentTranslate}px)`,this._currentTranslate>0){const t=Math.min(this._currentTranslate/this.leftActionsWidth,1);this.leftActions.style.transform=`translateX(${100*t-100}%)`,this.rightActions.style.transform="translateX(100%)"}else if(this._currentTranslate<0){const t=Math.min(-this._currentTranslate/this.rightActionsWidth,1);this.rightActions.style.transform=`translateX(${100-100*t}%)`,this.leftActions.style.transform="translateX(-100%)"}else this.leftActions.style.transform="translateX(-100%)",this.rightActions.style.transform="translateX(100%)"})}render(){return le`
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
`}};Bo.styles=kt`
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
    `,Lo([Me()],Bo.prototype,"_isDragging",2),Lo([Me()],Bo.prototype,"_startX",2),Lo([Me()],Bo.prototype,"_currentTranslate",2),Lo([Me()],Bo.prototype,"_prevTranslate",2),Lo([Me()],Bo.prototype,"_animationId",2),Lo([Me()],Bo.prototype,"_velocity",2),Lo([Me()],Bo.prototype,"_lastX",2),Lo([Me()],Bo.prototype,"_lastTime",2),Lo([Me()],Bo.prototype,"_isOpen",2),Lo([Me()],Bo.prototype,"rightButtonName",2),Lo([Me()],Bo.prototype,"rightButtonCallback",2),Lo([Pe(".slider")],Bo.prototype,"sliderElement",2),Lo([Pe(".content")],Bo.prototype,"contentElement",2),Lo([Pe(".left-actions")],Bo.prototype,"leftActions",2),Lo([Pe(".right-actions")],Bo.prototype,"rightActions",2),Bo=Lo([Ce("hm-swipe-cell")],Bo);const Io=Object.freeze(Object.defineProperty({__proto__:null,get HmSwipeCell(){return Bo}},Symbol.toStringTag,{value:"Module"}));var Do=Object.defineProperty,No=Object.getOwnPropertyDescriptor,Uo=(t,e,o,i)=>{for(var n,s=i>1?void 0:i?No(e,o):e,r=t.length-1;r>=0;r--)(n=t[r])&&(s=(i?n(e,o,s):n(s))||s);return i&&s&&Do(e,o,s),s};let Ro=class extends ke{constructor(){super(...arguments),this.checked=!1,this.disabled=!1,this.loading=!1,this.color="#1890ff",this.openContent="",this.closeContent="",this.openIcon="",this.closeIcon=""}change(){this.disabled||this.loading||(this.checked=!this.checked,n.log("hm-switch","changed!!"),this.dispatchEvent(new CustomEvent("hm-switch-change",{detail:{checked:this.checked},bubbles:!0,composed:!0})))}render(){return le`
<div
  class="switch ${this.disabled?"disabled":""} ${this.loading?"loading":""} ${this.checked?"checked":""}"
  @click="${this.change}"
  @touchstart="${this.change}"
  style="--switch-color: ${this.color}"
>
  <div class="switch-inner">
    ${this.checked?this.openIcon?le`<hm-icon icon="${this.openIcon}" size="14px"></hm-icon>`:this.openContent?le`<span>${this.openContent}</span>`:"":this.closeIcon?le`<hm-icon icon="${this.closeIcon}" size="14px"></hm-icon>`:this.closeContent?le`<span>${this.closeContent}</span>`:""}
  </div>
</div>
        `}};Ro.styles=kt`
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
    `,Uo([Me({type:Boolean})],Ro.prototype,"checked",2),Uo([Me({type:Boolean})],Ro.prototype,"disabled",2),Uo([Me({type:Boolean})],Ro.prototype,"loading",2),Uo([Me({type:String})],Ro.prototype,"color",2),Uo([Me({type:String,attribute:"open-content"})],Ro.prototype,"openContent",2),Uo([Me({type:String,attribute:"close-content"})],Ro.prototype,"closeContent",2),Uo([Me({type:String,attribute:"open-icon"})],Ro.prototype,"openIcon",2),Uo([Me({type:String,attribute:"close-icon"})],Ro.prototype,"closeIcon",2),Ro=Uo([Ce("hm-switch")],Ro);const Vo=Object.freeze(Object.defineProperty({__proto__:null,get HmSwitch(){return Ro}},Symbol.toStringTag,{value:"Module"}));var qo=Object.defineProperty,Wo=Object.getOwnPropertyDescriptor,Fo=(t,e,o,i)=>{for(var n,s=i>1?void 0:i?Wo(e,o):e,r=t.length-1;r>=0;r--)(n=t[r])&&(s=(i?n(e,o,s):n(s))||s);return i&&s&&qo(e,o,s),s};let Xo=class extends ke{constructor(){super(...arguments),this.maxHeight="500px",this.items=[],this.titleContent="标题内容",this.expanded=!1}togglePanel(){this.expanded=!this.expanded}render(){return le`
      <div class="accordion-container" style="max-height: ${this.maxHeight}">
        <div class="accordion-header" @click=${this.togglePanel}>
          <slot name="header">${this.titleContent}</slot>
          <div class="accordion-toggle">
            ${this.expanded?le`<hm-icon icon="arrow-up"></hm-icon>`:le`<hm-icon icon="arrow-down"></hm-icon>`}
          </div>
        </div>
        
        <div class="accordion-content" ?hidden=${!this.expanded}>
          ${this.items.length>0?this.items.map(t=>le`<div class="accordion-item">${t}</div>`):le`<slot></slot>`}
        </div>
        
        <div class="accordion-footer" ?hidden=${!this.expanded}>
          <slot name="footer">
            <hm-button @hm-button-click="${()=>{this.expanded=!1}}">关闭</hm-button>
          </slot>
        </div>
      </div>
    `}};Xo.styles=kt`
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
  `,Fo([Me({type:String,attribute:"max-height"})],Xo.prototype,"maxHeight",2),Fo([Me({type:Array})],Xo.prototype,"items",2),Fo([Me({type:String,attribute:"title-content"})],Xo.prototype,"titleContent",2),Fo([Me({type:Boolean})],Xo.prototype,"expanded",2),Xo=Fo([Ce("hm-accordion")],Xo);const Go=Object.freeze(Object.defineProperty({__proto__:null,get HmAccordion(){return Xo}},Symbol.toStringTag,{value:"Module"}));var Jo=Object.defineProperty,Yo=Object.getOwnPropertyDescriptor,Zo=(t,e,o,i)=>{for(var n,s=i>1?void 0:i?Yo(e,o):e,r=t.length-1;r>=0;r--)(n=t[r])&&(s=(i?n(e,o,s):n(s))||s);return i&&s&&Jo(e,o,s),s};let Ko=class extends ke{constructor(){super(...arguments),this.type="text",this.icon="",this.label="输入框",this.placeholder="",this.enable=!0,this.readonly=!1,this.value=""}_handleKeyDown(t){t.stopPropagation()}_handleInput(t){const e=t.target;this.value=e.value,this.dispatchEvent(new CustomEvent("hm-input-change",{detail:{value:this.value},bubbles:!0,composed:!0}))}render(){return le`
<div class="input-container">
  <span class="label">${this.label}</span>
  ${this.icon?le`<hm-icon icon="${this.icon}" class="icon"></hm-icon>`:""}
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
    `}};Ko.styles=kt`
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
`,Zo([Me({type:String})],Ko.prototype,"type",2),Zo([Me({type:String})],Ko.prototype,"icon",2),Zo([Me({type:String})],Ko.prototype,"label",2),Zo([Me({type:String})],Ko.prototype,"placeholder",2),Zo([Me({type:Boolean})],Ko.prototype,"enable",2),Zo([Me({type:Boolean})],Ko.prototype,"readonly",2),Zo([Me()],Ko.prototype,"value",2),Ko=Zo([Ce("hm-input")],Ko);const Qo=Object.freeze(Object.defineProperty({__proto__:null,get HmInput(){return Ko}},Symbol.toStringTag,{value:"Module"}));var ti=Object.defineProperty,ei=Object.getOwnPropertyDescriptor,oi=(t,e,o,i)=>{for(var n,s=i>1?void 0:i?ei(e,o):e,r=t.length-1;r>=0;r--)(n=t[r])&&(s=(i?n(e,o,s):n(s))||s);return i&&s&&ti(e,o,s),s};let ii=class extends ke{constructor(){super(...arguments),this.isOpen=!1,this.dialog=this}open(){this.isOpen=!0,this.dispatchEvent(new CustomEvent("hm-dialog-open"))}close(){this.isOpen=!1,this.dispatchEvent(new CustomEvent("hm-dialog-close"))}confirm(){n.log("dialog","对话框确认事件"),this.close(),this.dispatchEvent(new CustomEvent("hm-dialog-confirm"))}cancel(){this.close(),this.dispatchEvent(new CustomEvent("hm-dialog-cancel"))}updated(t){t.has("isOpen")&&(this.isOpen?this.style.display="block":this.style.display="none")}render(){return le`
<div class="overlay"
@click="${this.close}"
></div>
<div class="content">
    <slot></slot>
    <div class="footer">
        <slot name="footer">
            <hm-button @hm-button-click="${()=>{this.cancel(),n.log("dialog","取消")}}">取消</hm-button>
            <hm-button @hm-button-click="${()=>{this.confirm(),n.log("dialog","确定")}}">确定</hm-button>
        </slot>
    </div>
</div>
    `}};ii.styles=kt`
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
    `,oi([Me({type:Boolean,attribute:"isopen"})],ii.prototype,"isOpen",2),ii=oi([Ce("hm-dialog")],ii);const ni=Object.freeze(Object.defineProperty({__proto__:null,get HmDialog(){return ii}},Symbol.toStringTag,{value:"Module"})),si=Object.freeze(Object.defineProperty({__proto__:null,hm_accordion:Go,hm_button:uo,hm_cell:bo,hm_dialog:ni,hm_icon:Ze,hm_input:Qo,hm_menu:oo,hm_move_panel:Ie,hm_notification:lo,hm_select:Ho,hm_swipe_cell:Io,hm_switch:Vo},Symbol.toStringTag,{value:"Module"}));let ri=document.createElement("div");function li(){ri.id="hmMenuHolder";let t=document.querySelector("#functionHolderImg");console.debug(t),console.debug(ri),null!==t&&t.parentElement.insertAdjacentElement("afterend",ri)}const ai=Object.freeze(Object.defineProperty({__proto__:null,initMenuHolder:li,menuHolder:ri},Symbol.toStringTag,{value:"Module"}));let ci=document.createElement("div");function hi(){ci.id="hmMovePanelHolder",ci.style.zIndex="999999",document.body.append(ci)}const di=Object.freeze(Object.defineProperty({__proto__:null,initMovePanelHolder:hi,movePanelHolder:ci},Symbol.toStringTag,{value:"Module"}));let pi=document.createElement("div");function ui(){pi.id="hmNotificationHolder",pi.style.zIndex="999999",document.body.append(pi)}const gi=Object.freeze(Object.defineProperty({__proto__:null,initNotificationHolder:ui,notificationHolder:pi},Symbol.toStringTag,{value:"Module"}));let mi=document.createElement("div");function fi(){mi.id="hmDialogHolder",mi.style.zIndex="999999",document.body.append(mi)}const vi=Object.freeze(Object.defineProperty({__proto__:null,dialogHolder:mi,initDialogHolder:fi},Symbol.toStringTag,{value:"Module"}));var bi=Object.defineProperty,yi=(t,e,o,i)=>{for(var n,s=void 0,r=t.length-1;r>=0;r--)(n=t[r])&&(s=n(e,o,s)||s);return s&&bi(e,o,s),s};class _i extends ke{constructor(){super(...arguments),this.dialogOpen=!1,this.message="请做出选择",this.closeCallback=null,this.cancelCallback=null,this.confirmCallback=null}handelClick(){this.dispatchEvent(new CustomEvent("hmclick"))}static{this.styles=kt`
`}render(){return le`
<hm-dialog
  ?isopen="${this.dialogOpen}"
  @hm-dialog-close="${()=>{this.dialogOpen=!1}}"
  @hm-dialog-cancel="${()=>{this.cancelCallback&&this.cancelCallback()}}"
  @hm-dialog-confirm="${()=>{this.confirmCallback&&this.confirmCallback()}}"
>
  <p>${this.message}</p>
</hm-dialog>
        `}}yi([Me({type:Boolean})],_i.prototype,"dialogOpen"),yi([Me({type:String})],_i.prototype,"message"),yi([Me({type:Function})],_i.prototype,"closeCallback"),yi([Me({type:Function})],_i.prototype,"cancelCallback"),yi([Me({type:Function})],_i.prototype,"confirmCallback");const wi=document.createElement("hm-dialog-app");async function $i(){customElements.define("hm-dialog-app",_i),wi.dialogOpen=!1,wi.message="请做出选择",wi.closeCallback=null,wi.cancelCallback=null,wi.confirmCallback=null,mi.append(wi)}const xi=Object.freeze(Object.defineProperty({__proto__:null,HmDialogApp:_i,dialogApp:wi,initDialogApp:$i},Symbol.toStringTag,{value:"Module"})),Si={success(t,e,o=3e3){let i=document.createElement("hm-notification");i.title=t,i.content=e,i.displayTime=o,i.backgroundColor="rgba(57, 231, 34, 0.7)",i.color="rgb(255,255,255)",pi.append(i)},warning(t,e,o=3e3){let i=document.createElement("hm-notification");i.title=t,i.content=e,i.displayTime=o,i.backgroundColor="rgba(255,193,7,0.7)",i.color="rgb(255,255,255)",pi.append(i)},error(t,e,o=3e3){let i=document.createElement("hm-notification");i.title=t,i.content=e,i.displayTime=o,i.backgroundColor="rgba(255,0,0,0.7)",i.color="rgb(255,255,255)",pi.append(i)},normal(t,e,o=3e3){let i=document.createElement("hm-notification");i.title=t,i.content=e,i.displayTime=o,i.backgroundColor="rgba(33,33,33,0.7)",i.color="rgb(255,255,255)",pi.append(i)}};const ki=Object.freeze(Object.defineProperty({__proto__:null,confirm:function(t,e,o,i){wi.message=t,wi.confirmCallback=e||null,wi.cancelCallback=o||null,wi.closeCallback=i||null,wi.dialogOpen=!0,console.debug("弹窗已打开",wi)},notice:Si},Symbol.toStringTag,{value:"Module"}));var Ai=Object.defineProperty,Ci=(t,e,o,i)=>{for(var n,s=void 0,r=t.length-1;r>=0;r--)(n=t[r])&&(s=n(e,o,s)||s);return s&&Ai(e,o,s),s};class Oi extends ke{constructor(){super(...arguments),this.scriptName="",this.scriptUrl="",this.scriptEnable=!0,this.scriptIngected=!1,this.dialogOpen=!1,this.scriptList=ht}render(){return le`
<hm-dialog
  ?isopen="${this.dialogOpen}"
  @hm-dialog-close="${()=>{this.dialogOpen=!1}}"
  @hm-dialog-confirm="${()=>{if(""==this.scriptName.trim()||""==this.scriptUrl.trim())return void Si.error("脚本管理","请填写完整的脚本信息");this.scriptEnable=!0,this.scriptIngected=!1,dt(new ct(this.scriptName,this.scriptUrl,this.scriptEnable,this.scriptIngected)),ft(),this.scriptList=ht}}"
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
  ${this.scriptList.map(t=>le`
  <hm-swipe-cell>
    <div slot="left-actions">
      <hm-button
        @hm-button-click="${()=>{pt(t),ft(),this.scriptList=ht}}"
        >删除</hm-button
      >
    </div>
    <hm-cell title-name="${t.name}" descripthion="${t.url}">
      <hm-switch
        ?checked="${t.enable}"
        @hm-switch-change="${e=>{t.enable=e.detail.checked,dt(t),ft(),this.scriptList=ht}}"
      ></hm-switch>
    </hm-cell>

    <div slot="right-actions">
      <hm-button
        @hm-button-click="${()=>{this.scriptName=t.name,this.scriptUrl=t.url,this.dialogOpen=!0}}"
        >修改</hm-button
      >
      <hm-button
        ?enable="${!t.ingected}"
        @hm-button-click="${()=>{t.ingected=ut(t),dt(t),this.scriptList=ht}}"
        >运行</hm-button
      >
    </div>
  </hm-swipe-cell>

  `)}
  <div slot="footer">
    <hm-button
      @click="${()=>{mt(),this.scriptList=ht}}"
      >刷新</hm-button
    >
    <hm-button
      @click="${()=>{this.scriptName="",this.scriptUrl="",this.scriptEnable=!0,this.scriptIngected=!1,this.dialogOpen=!0}}"
      >添加</hm-button
    >
    <hm-button @click="${()=>{ft()}}"
      >保存</hm-button
    >
  </div>
</hm-accordion>
`}}Ci([Me({type:String})],Oi.prototype,"scriptName"),Ci([Me({type:String})],Oi.prototype,"scriptUrl"),Ci([Me({type:Boolean})],Oi.prototype,"scriptEnable"),Ci([Me({type:Boolean})],Oi.prototype,"scriptIngected"),Ci([Me({type:Boolean})],Oi.prototype,"dialogOpen"),Ci([Me({type:Array})],Oi.prototype,"scriptList");const Ei={name:"hortimagic",private:!1,version:"1.0.4dev4",changelog:"增加了存储库",author:"Narlen",description:"园艺魔法，花园插件",keywords:["iirose","plugins","hortimagic"],repository:{type:"git",url:"https://github.com/NarlenHua/hortimagic.git"},license:"MIT",type:"module",scripts:{dev:"vite",build:"tsc && vite build",preview:"vite preview"},dependencies:{lit:"^3.3.1",terser:"^5.44.0","vite-plugin-dts":"^4.5.4"},devDependencies:{"@types/node":"^24.9.1",typescript:"~5.9.3",vite:"^7.1.7"},main:"dist/Horticraft.life.js",module:"dist/HortiCraft.es.js",typings:"dist/index.d.ts",types:"dist/index.d.ts",files:["dist","src/components","types"]};var Mi=Object.defineProperty,Pi=(t,e,o,i)=>{for(var n,s=void 0,r=t.length-1;r>=0;r--)(n=t[r])&&(s=n(e,o,s)||s);return s&&Mi(e,o,s),s};class Ti extends ke{constructor(){super(...arguments),this.allowHortimagicNotice=!0,this.logLevel=_.logLevel}static{this.styles=kt`
`}render(){return le`
 <hm-cell title-name="启用通知" descripthion="使用Hortimagic通知功能"> 
 <hm-switch 
    ?checked="${this.allowHortimagicNotice}"
    open-icon="led-on"
    close-icon="led-off"
    @hm-switch-change="${t=>{n.debug("switch state:",t.detail.checked)}}"
  ></hm-switch>
</hm-cell>
<hm-cell title-name="日志等级" descripthion="日志等级">
  <hm-select
    .labelList="${[["log",0],["debug",1],["info",2],["warn",3],["error",4]]}"
    .index="${_.logLevel/1}"
    @change="${t=>{n.debug(t.detail),this.logLevel=t.detail.value}}"
  >
  </hm-select>
</hm-cell>

<p>${this.logLevel}</p>
`}}function Hi(){customElements.define("hm-config-app",Ti);let t=document.createElement("hm-move-panel");t.titleContent="设置",t.icon="config",t.leftButtonText="读取",t.addEventListener("left-button-click",function(){f()}),t.rightButtonText="保存",t.addEventListener("right-button-click",function(){v()}),t.showMovePanel(),ci.appendChild(t);t.innerHTML="\n  <hm-config-app></hm-config-app>\n  ";let e=document.createElement("hm-menu");return e.content="设置",e.isMenuItem=!0,e.icon="config",e.addEventListener("hm-menu-click",function(){t.putTopToggel()}),e}Pi([Me({type:Boolean}),h(b,"allowNotice")],Ti.prototype,"allowHortimagicNotice"),Pi([Me({type:Number}),h(b,"logLevel")],Ti.prototype,"logLevel");const ji=Object.freeze(Object.defineProperty({__proto__:null,initConfigApp:Hi},Symbol.toStringTag,{value:"Module"}));var zi=Object.defineProperty,Li=Object.getOwnPropertyDescriptor,Bi=(t,e,o,i)=>{for(var n,s=i>1?void 0:i?Li(e,o):e,r=t.length-1;r>=0;r--)(n=t[r])&&(s=(i?n(e,o,s):n(s))||s);return i&&s&&zi(e,o,s),s};class Ii extends ke{constructor(){super(...arguments),this.loggerList=A,this.temp=[]}ondataChange(t){this.loggerList=t,n.log("Value changed to:",t)}static{this.styles=kt`
`}render(){this.temp=[];for(let t=0;t<this.loggerList.length;t++){const e=this.loggerList[t];this.temp.push(le`
<p>${e[0]} ${e[1]} ${e[2]}</p>
`)}return le`
<hm-button @hm-button-click=${()=>{n.debug("log",this.loggerList),n.debug("log",A)}}>打印数据</hm-button>
            ${this.temp}

`}}function Di(){customElements.define("hm-log-app",Ii);let t=document.createElement("hm-move-panel");t.titleContent="日志",t.icon="log",t.showMovePanel(),ci.appendChild(t);t.innerHTML="<hm-log-app></hm-log-app>";let e=document.createElement("hm-menu");return e.content="日志",e.isMenuItem=!0,e.icon="log",e.addEventListener("hm-menu-click",function(){t.putTopToggel()}),e}Bi([Me({type:Array}),h(x,"loggerList")],Ii.prototype,"loggerList",2),Bi([d(x,"loggerList")],Ii.prototype,"ondataChange",1);const Ni=Object.freeze(Object.defineProperty({__proto__:null,initLogApp:Di},Symbol.toStringTag,{value:"Module"}));async function Ui(){try{f(),ui(),fi(),await $i(),li(),hi(),Si.normal(Ei.name,"注入网络钩子函数"),await Q(),Si.normal(Ei.name,"注入钩子函数"),st(),lt(),Si.normal(Ei.name,"注入脚本"),vt(),Si.normal(Ei.name,"生成菜单");let t=document.createElement("hm-menu");t.content="HortiMagic",t.isMenuItem=!1;let e=Hi(),o=Di(),i=function(){customElements.define("hm-script-app",Oi);let t=document.createElement("hm-move-panel");t.titleContent="脚本管理",t.icon="js",ci.appendChild(t),t.innerHTML="\n  <hm-script-app></hm-script-app>\n  ";let e=document.createElement("hm-menu");return e.content="脚本管理",e.isMenuItem=!0,e.icon="js",e.addEventListener("hm-menu-click",function(){t.putTopToggel()}),e}();t.addEventListener("hm-menu-click",function(){e.flag=t.flag,o.flag=t.flag,i.flag=t.flag}),ri.append(t,e,o,i),Si.success(Ei.name,`${Ei.version} 已加载`)}catch(t){console.error(t)}}const Ri=Object.freeze(Object.defineProperty({__proto__:null,init:Ui},Symbol.toStringTag,{value:"Module"})),Vi=Object.freeze(Object.defineProperty({__proto__:null,config_app:ji,dialog_app:xi,log_app:Ni,main_app:Ri},Symbol.toStringTag,{value:"Module"})),qi=Object.freeze(Object.defineProperty({__proto__:null,dialog:vi,menu:ai,move_panel:di,notification:gi},Symbol.toStringTag,{value:"Module"})),Wi={name:Ei.name,version:Ei.version,changelog:Ei.changelog,description:Ei.description,author:Ei.author,license:Ei.license,repository:Ei.repository,buildTime:(new Date).toISOString(),ingected:!1};return async function(){await Ui(),Wi.ingected=!0}(),t.apps=Vi,t.components=si,t.core=yt,t.easy_tools=ki,t.holders=qi,t.information=Wi,Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),t}({});
