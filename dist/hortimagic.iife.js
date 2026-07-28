var hortimagic=function(t){Object.defineProperty(t,Symbol.toStringTag,{value:"Module"});var e=Object.defineProperty,i=(t,i)=>{let o={};for(var s in t)e(o,s,{get:t[s],enumerable:!0});return i||e(o,Symbol.toStringTag,{value:"Module"}),o},o={name:"hortimagic",private:!1,version:"1.1.6",changelog:"优化了打包流程，改善了类型说明文件。",author:"Narlen",description:"花园插件",keywords:["iirose","plugins","hortimagic"],repository:{type:"git",url:"https://github.com/NarlenHua/hortimagic.git"},license:"MIT",type:"module",scripts:{dev:"vite",build:"tsc && vite build",preview:"vite preview"},dependencies:{lit:"^3.3.1",terser:"^5.44.0",valtio:"^2.2.0","vite-plugin-dts":"^4.5.4"},devDependencies:{"@types/node":"^24.13.3",tsx:"^4.21.0",typescript:"~5.9.3",vite:"^8.0.3"},main:"dist/Horticraft.life.js",module:"dist/HortiCraft.es.js",typings:"dist/index.d.ts",types:"dist/index.d.ts",files:["dist","scripts","src","types"]},s={sleep:async t=>new Promise(e=>setTimeout(e,t)),compressHTML:t=>t=(t=(t=(t=t.replace(/>\s+</g,"><")).replace(/\s{2,}/g," ")).replace(/<!--[\s\S]*?-->/g,"")).trim(),compressCSS:t=>t=(t=(t=(t=(t=t.replace(/\s{2,}/g," ")).replace(/\/\*[\s\S]*?\*\//g,"")).replace(/\s*([{};:,])\s*/g,"$1")).replace(/;\s*}/g,"}")).trim(),addStyle(t){let e=document.createElement("style");e.innerText=t,document.body.append(e)},htmlSpecialCharsEscape:t=>t=(t=(t=(t=(t=(t=t.replace("&","&amp;")).replace("<","&lt;")).replace(">","&gt;")).replace('"',"&quot;")).replace("'","&#039;")).replace("\\","&#092;"),htmlSpecialCharsDecode:t=>t=(t=(t=(t=(t=(t=t.replace("&lt;","<")).replace("&gt;",">")).replace("&quot;",'"')).replace("&#039;","'")).replace("&#092;","\\")).replace("&amp;","&"),getUserName:()=>myself||null,getUserUid:()=>uid||null,getRoomId:()=>roomn||null,getRoomInfoById(t){let e=Objs.mapHolder.Assets.roomJson?.[t];if(e){let t=e[5].split("&&").map(t=>t.split(" & ")),i=s.htmlSpecialCharsDecode(t[0][0]),o=i.indexOf(" ");return{name:e[1],color:e[2],roomPath:e[0].split("_"),description:i.slice(o+1),roomImage:i.slice(0,o),currentUserNum:"number"==typeof e[7]?e[7]:"hidden",ownerName:t[1][0],member:t[4].map(t=>({name:s.htmlSpecialCharsDecode(t.slice(1)),auth:"0"==t[0]?"member":"1"==t[0]?"admin":"unknow"}))}}return null},getOnlineUserInfoById(t){t=String(t);let e=Objs.mapHolder.findUserByUid(t);return e?{name:e[2],uid:t,color:e[3],avatar:e[0],roomId:e[4],personalizedSignature:e[6]}:null},getAllOnlineUserInfo(){let t=Objs.mapHolder.Assets.userJson;return t?Object.keys(t).map(e=>{let i=t[e];return{name:i[2],uid:i[8],color:i[3],avatar:i[0],roomId:i[4],personalizedSignature:i[6]}}):null},changeRoom(t){(t=String(t))&&Objs.mapHolder.roomchanger(t)},getUserProfilePictureUrl:()=>avatar2&&avatarconv?avatarconv(avatar2):null,getUserInputColor:()=>inputcolorhex||null,generatePrivateMessageBubble(t,e,i){privatechatfunc&&privatechatfunc([Math.floor(Date.now()/1e3).toString(10),s.getUserUid(),s.htmlSpecialCharsEscape(s.getUserName()),s.htmlSpecialCharsEscape(s.getUserProfilePictureUrl()),s.htmlSpecialCharsEscape(e),s.htmlSpecialCharsEscape(s.getUserInputColor()),"",s.htmlSpecialCharsEscape(s.getUserInputColor()),"","",i,t,"","","","",""].join(">"))},switchRoom(t){Objs.mapHolder.roomchanger(t)}},n=class{constructor(){this.timeStamp="",this.headPortrait="",this.name="",this.message="",this.color="",this.gender="",this.uid="",this.designation="",this.messageUid=""}},r=class{constructor(){this.timeStamp="",this.headPortrait="",this.name="",this.message="",this.color="",this.gender="",this.uid="",this.messageUid=""}},l=class{constructor(){this.messageName="",this.uid="",this.data=""}},a=class{constructor(){this.username="",this.avatar="",this.message="",this.color="",this.gender="",this.timeStamp="",this.uid=""}},c=class{constructor(){this.privateUID="",this.uid="",this.messageUid="",this.dataUid=""}},h=class{constructor(){this.userMessageList=[]}},d=class{constructor(){this.result="",this.stockPrice=NaN,this.totalStock=NaN,this.holdingAmount=NaN,this.totalEquity=NaN,this.balance=NaN}},p=class{constructor(){this.message=""}};function g(t){let e=new n,i=t.split(">");return e.timeStamp=i[0],e.headPortrait=i[1],e.name=i[2],e.message=i[3],e.color=i[5],e.gender=i[6],e.uid=i[8],e.designation=i[9],e.messageUid=i[10],e}function u(t){let e=new r,i=t.split(">");return e.timeStamp=i[0].slice(1),e.uid=i[1],e.name=i[2],e.headPortrait=i[3],e.message=i[4],e.color=i[5],e.gender=i[8],e.messageUid=i[10],e}function m(t){let e=new a,i=t.split(">");return e.username=i[0],e.message=i[1],e.color=i[2],e.gender=i[4],e.avatar=i[5],e.timeStamp=i[6],e.uid=i[7],e}var v={messageObjList:[],judegMessageClass:t=>t instanceof n?"public":t instanceof r?"private":t instanceof l?"hidden":t instanceof a?"danmu":t instanceof c?"withdrawn":t instanceof h?"system":t instanceof d?"stock":"unknown",decodeMessage(t){if(v.messageObjList=[],/^"[^"].*/gs.test(t)){let e=t.slice(1).split("<");for(let t=e.length-1;t>=0;t--)v.messageObjList.push(g(e[t]))}else if(/^"".*/gs.test(t)){let e=t.slice(1).split("<");for(let t=e.length-1;t>=0;t--)v.messageObjList.push(u(e[t]))}else if(/^=.*/gs.test(t)){let e=t.slice(1).split("<");for(let t=e.length-1;t>=0;t--)v.messageObjList.push(m(e[t]))}else/^[/]<.*>[0-9|a-z]{13}:.*/gs.test(t)?v.messageObjList.push(function(t){let e,i=new l;return e=t.match(/(?<=^[/]<).*(?=>[0-9|a-z]{13}:.*)/gs),i.messageName=null==e?"":e[0],e=t.match(/(?<=^[/]<.*>)[0-9|a-z]{13}(?=:.*)/gs),i.uid=null==e?"":e[0],e=t.match(/(?<=^[/]<.*>[0-9|a-z]{13}:).*/gs),i.data=null==e?"":e[0],i}(t)):/^v0.*/gs.test(t)?v.messageObjList.push(function(t){let e=new c;return"#"==t[2]?(e.privateUID="",e.uid=t.slice(3,16),e.messageUid=t.slice(17,29),e.dataUid=t.slice(3,29)):(e.privateUID=t.slice(3,16),e.uid=t.slice(17,30),e.messageUid=t.slice(31),e.dataUid=t.slice(17)),e}(t)):/^%\*".*/gs.test(t)?v.messageObjList.push(function(t){let e=new h;return e.userMessageList=t.split("<"),e}(t)):/^>.*/gs.test(t)?v.messageObjList.push(function(t){let e=new d;if(e.result=t[2],"*"==e.result)return e;if(">"==e.result)return e.holdingAmount=parseInt(t.slice(2)),e;if("<"==e.result)return e.balance=parseInt(t.slice(2)),e;{let i=t.split('"');if(5==i.length)return e.stockPrice=parseFloat(i[2]),e.totalStock=parseInt(i[0].slice(1)),e.holdingAmount=parseInt(i[3]),e.totalEquity=parseFloat(i[1]),e.balance=parseFloat(i[4]),e;if(4==i.length)return e.stockPrice=parseFloat(i[1])/parseInt(i[0].slice(1)),e.totalStock=parseInt(i[0].slice(1)),e.holdingAmount=parseInt(i[2]),e.totalEquity=parseFloat(i[1]),e.balance=parseFloat(i[3]),e}return e}(t)):v.messageObjList.push(function(t){let e=new p;return e.message=t,e}(t))}},f=class{constructor(){this.events={}}on(t,e){this.events[t]||(this.events[t]=[]),this.events[t].push(e)}off(t,e){this.events[t]&&(e?this.events[t]=this.events[t].filter(t=>t!==e):delete this.events[t])}once(t,e){const i=(...o)=>{e(...o),this.off(t,i)};this.on(t,i)}emit(t,...e){const i=this.events[t];return!(!i||0===i.length)&&([...i].forEach(t=>t(...e)),!0)}},b=Symbol(),y=Object.getPrototypeOf,w=new WeakMap,x=t=>(t=>t&&(w.has(t)?w.get(t):y(t)===Object.prototype||y(t)===Array.prototype))(t)&&t[b]||null,$=(t,e=!0)=>{w.set(t,e)},S=t=>"object"==typeof t&&null!==t,k=(t,e)=>{const i=C.get(t);if((null==i?void 0:i[0])===e)return i[1];const o=Array.isArray(t)?[]:Object.create(Object.getPrototypeOf(t));return $(o,!0),C.set(t,[e,o]),Reflect.ownKeys(t).forEach(e=>{if(Object.getOwnPropertyDescriptor(o,e))return;const i=Reflect.get(t,e),{enumerable:s}=Reflect.getOwnPropertyDescriptor(t,e),n={value:i,enumerable:s,configurable:!0};if(H.has(i))$(i,!1);else if(_.has(i)){const[t,e]=_.get(i);n.value=k(t,e())}Object.defineProperty(o,e,n)}),o},_=new WeakMap,H=new WeakSet,C=new WeakMap,A=[1],E=new WeakMap,L=Object.is,M=(t,e)=>new Proxy(t,e),z=t=>S(t)&&!H.has(t)&&(Array.isArray(t)||!(Symbol.iterator in t))&&!(t instanceof WeakMap)&&!(t instanceof WeakSet)&&!(t instanceof Error)&&!(t instanceof Number)&&!(t instanceof Date)&&!(t instanceof String)&&!(t instanceof RegExp)&&!(t instanceof ArrayBuffer)&&!(t instanceof Promise),T=k,B=(t,e,i,o)=>({deleteProperty(t,e){Reflect.get(t,e);i(e);const s=Reflect.deleteProperty(t,e);return s&&o(void 0),s},set(s,n,r,l){const a=!t()&&Reflect.has(s,n),c=Reflect.get(s,n,l);if(a&&(L(c,r)||E.has(r)&&L(c,E.get(r))))return!0;i(n),S(r)&&(r=x(r)||r);const h=!_.has(r)&&z(r)?O(r):r;return e(n,h),Reflect.set(s,n,h,l),o(void 0),!0}});function O(t={}){if(!S(t))throw new Error("object required");const e=E.get(t);if(e)return e;let i=A[0];const o=new Set,s=(t,e=++A[0])=>{i!==e&&(n=i=e,o.forEach(i=>i(t,e)))};let n=i;const r=t=>(e,i)=>{let o;e&&(o=[...e],o[1]=[t,...o[1]]),s(o,i)},l=new Map;let a=!0;const c=B(()=>a,(t,e)=>{const i=!H.has(e)&&_.get(e);if(i)if(o.size){const e=i[2](r(t));l.set(t,[i,e])}else l.set(t,[i])},t=>{var e;const i=l.get(t);i&&(l.delete(t),null==(e=i[1])||e.call(i))},s),h=M(t,c);E.set(t,h);const d=[t,(t=A[0])=>(n!==t&&(n=t,l.forEach(([e])=>{const o=e[1](t);o>i&&(i=o)})),i),t=>{o.add(t),1===o.size&&l.forEach(([t,e],i)=>{const o=t[2](r(i));l.set(i,[t,o])});return()=>{o.delete(t),0===o.size&&l.forEach(([t,e],i)=>{e&&(e(),l.set(i,[t]))})}}];return _.set(h,d),Reflect.ownKeys(t).forEach(e=>{const i=Object.getOwnPropertyDescriptor(t,e);"value"in i&&i.writable&&(h[e]=t[e])}),a=!1,h}function P(t,e,i){const o=_.get(t);let s;const n=[],r=o[2];let l=!1;const a=r(t=>{t&&n.push(t),i?e(n.splice(0)):s||(s=Promise.resolve().then(()=>{s=void 0,l&&e(n.splice(0))}))});return l=!0,()=>{l=!1,a()}}var I="store",U={storKey:"HortimagicStore",reactive:{proxy:O,subscribe:P,snapshot:function(t){const[e,i]=_.get(t);return T(e,i())}},HortimagicStore:O({autoSave:!1,logFlag:{log:!1,info:!0,debug:!0,warn:!0,error:!0},messageLogFlag:{send:!1,decode:!1,emit:!0,receive:!1},logListLength:20,scriptList:[]}),saveStore(){localStorage.setItem(U.storKey,JSON.stringify(U.HortimagicStore)),j.logger.debug(I,"保存至本地存储")},loadStore(){let t=localStorage.getItem(U.storKey);if(null!=t){const e=JSON.parse(t);e.autoSave?U.HortimagicStore.autoSave=1==e.autoSave:U.HortimagicStore.autoSave=!1,e.logFlag?U.HortimagicStore.logFlag=e.logFlag:isNaN(e.logLevel)&&(U.HortimagicStore.logFlag=e.logLevel),e.messageLogFlag&&(U.HortimagicStore.messageLogFlag=e.messageLogFlag),e.scriptList&&(U.HortimagicStore.scriptList=e.scriptList),e.logListLength&&(U.HortimagicStore.logListLength=e.logListLength)}else U.HortimagicStore.logFlag.log=!0,U.HortimagicStore.logFlag.info=!0,U.HortimagicStore.logFlag.debug=!0,U.HortimagicStore.logFlag.warn=!0,U.HortimagicStore.logFlag.error=!0,U.HortimagicStore.autoSave=!0,U.HortimagicStore.logListLength=20,U.HortimagicStore.messageLogFlag.decode=!1,U.HortimagicStore.messageLogFlag.emit=!0,U.HortimagicStore.messageLogFlag.send=!1,U.HortimagicStore.messageLogFlag.receive=!1,U.HortimagicStore.scriptList=[],j.logger.debug(I,"没有读取到配置，使用默认配置"),U.saveStore();j.logger.debug(I,"从本地存储加载")},initStore(){U.loadStore(),P(U.HortimagicStore,()=>{U.HortimagicStore.autoSave&&U.saveStore()})}},j={logEmitter:new f,logger:{log(...t){U.HortimagicStore.logFlag.log&&(j.logEmitter.emit("log",...t),console.log(...t))},debug(...t){U.HortimagicStore.logFlag.debug&&(j.logEmitter.emit("debug",...t),console.debug(...t))},info(...t){U.HortimagicStore.logFlag.info&&(j.logEmitter.emit("info",...t),console.info(...t))},warn(...t){U.HortimagicStore.logFlag.warn&&(j.logEmitter.emit("warn",...t),console.warn(...t))},error(...t){U.HortimagicStore.logFlag.error&&(j.logEmitter.emit("error",...t),console.error(...t))}}},N="socket-tools",D={messageEmitter:new f,beforeSend:async t=>t,originalSend:t=>t,afterSend:t=>t,async send(t){U.HortimagicStore.messageLogFlag.send&&j.logger.debug(N,"发送",{message:t});let e=await D.beforeSend(t);try{null!=e&&(D.originalSend(e),D.afterSend(e))}catch(i){j.logger.error(N,i)}},beforeOnmessage:async t=>(U.HortimagicStore.messageLogFlag.decode&&j.logger.debug(N,"解码",{message:t}),v.decodeMessage(t),t),originalOnmessage:t=>t,async afterOnmessage(t){for(let e of v.messageObjList)ui.messageDebug&&U.HortimagicStore.messageLogFlag.emit&&j.logger.debug(N,`触发${v.judegMessageClass(e)}消息`,{messageObj:e,message:t}),D.messageEmitter.emit(v.judegMessageClass(e),e);return t},async onmessage(t){U.HortimagicStore.messageLogFlag.receive&&j.logger.debug(N,"接收",{message:t});let e=await D.beforeOnmessage(t);try{null!=e&&(D.originalOnmessage(e),D.afterOnmessage(e))}catch(i){j.logger.error("捕获到错误",i)}},async initSocket(){j.logger.debug(N,"代理网络");for(let e=0;e<30;e++)try{if(j.logger.debug(N,"等待网络连接",e),null==window.socket.__onmessage&&null!=window.socket._onmessage&&null!=window.socket.send){j.logger.debug(N,"网络连接成功");break}await s.sleep(500);continue}catch(t){j.logger.error(N,t)}null==window.socket.__onmessage&&null!=window.socket._onmessage&&null!=window.socket.send?(D.originalSend=window.socket.send,window.socket.send=D.send,D.originalOnmessage=window.socket._onmessage,window.socket._onmessage=D.onmessage):j.logger.error("连接失败")}},V="elements-hooks",F={elements:{movePanelHolder:document.querySelector("#movePanelHolder"),functionHolder:document.querySelector("#functionHolder"),functionButtonGroupList:[...document.querySelectorAll(".functionButton.functionButtonGroup")],msgholderBox:document.querySelector("#msgholder .fullBox.msgholderBox"),homeHolderMsgBox:document.querySelector("#homeHolder .homeHolderMsgContentBox .homeHolderMsgBox.fullBox"),sessionHolderPmTaskBoxItems:[...document.querySelectorAll(".sessionHolderPmTaskBoxItem.whoisTouch2")],moveinputDisplay:document.querySelector("#moveinputDisplay"),moveinput:document.getElementById("moveinput"),moveinputSendBtnFunc:document.querySelector("#moveinputDisplay #moveinputSendBtnFunc"),moveinputSendBtnSend:document.querySelector("#moveinputDisplay #moveinputSendBtnSend")},refreshAll(){F.elements.movePanelHolder=document.querySelector("#movePanelHolder"),F.elements.functionHolder=document.querySelector("#functionHolder"),F.elements.functionButtonGroupList=[...document.querySelectorAll(".functionButton.functionButtonGroup")],F.elements.msgholderBox=document.querySelector("#msgholder .fullBox .fullBox.msgholderBox"),F.elements.homeHolderMsgBox=document.querySelector("#homeHolder .homeHolderMsgContentBox .homeHolderMsgBox.fullBox"),F.elements.sessionHolderPmTaskBoxItems=[...document.querySelectorAll(".sessionHolderPmTaskBoxItem.whoisTouch2")],F.elements.moveinputDisplay=document.querySelector("#moveinputDisplay"),F.elements.moveinput=document.getElementById("moveinput"),F.elements.moveinputSendBtnFunc=document.querySelector("#moveinputDisplay #moveinputSendBtnFunc"),F.elements.moveinputSendBtnSend=document.querySelector("#moveinputDisplay #moveinputSendBtnSend")},Hooks:{elementHooks:{moveinput:{oninputBefore:()=>!0,oninputAfter:()=>!0,onblurBefore:()=>!0,onblurAfter:()=>!0,onfocusBefore:()=>!0,onfocusAfter:()=>!0}},functionHooks:{processer:{onBefore:(t,e,i,o)=>!0,onAfter:(t,e,i,o)=>!0}},replaceMoveinput:()=>{try{let t=F.elements.moveinput.oninput;F.elements.moveinput.oninput=function(){1==F.Hooks.elementHooks.moveinput.oninputBefore()&&(t?.call(F.elements.moveinput),F.Hooks.elementHooks.moveinput.oninputAfter())}}catch(t){j.logger.error(V,t)}try{let t=F.elements.moveinput.oninput;F.elements.moveinput.onblur=function(){1==F.Hooks.elementHooks.moveinput.onblurBefore()&&(t?.call(F.elements.moveinput),F.Hooks.elementHooks.moveinput.onblurAfter())}}catch(t){j.logger.error(V,t)}try{let t=F.elements.moveinput.oninput;F.elements.moveinput.onfocus=function(){1==F.Hooks.elementHooks.moveinput.onfocusBefore()&&(t?.call(F.elements.moveinput),F.Hooks.elementHooks.moveinput.onfocusAfter())}}catch(t){j.logger.error(V,t)}},replaceButtonProcesser:()=>{try{let t=buttonProcesser;buttonProcesser=(e,i,o,s)=>{1==F.Hooks.functionHooks.processer.onBefore(e,i,o,s)&&(t(e,i,o,s),F.Hooks.functionHooks.processer.onAfter(e,i,o,s))}}catch(t){j.logger.error(V,t)}}},initHooks(){F.Hooks.replaceMoveinput(),F.Hooks.replaceButtonProcesser()}},q={publicChat:(t,e)=>"cut"===t?`{0${JSON.stringify({m:t,mc:e,i:Math.random().toString().slice(2,12)})}`:JSON.stringify({m:t,mc:e,i:Math.random().toString().slice(2,12)}),privateChat:(t,e,i)=>JSON.stringify({g:t,m:e,mc:i,i:Math.random().toString().slice(2,12)}),hidden:(t,e,i)=>`/<${t}>${e}:${i}`,musicCard(t,e,i,o,s,n){let r=`m__4=${t}>${e}>${i}>${o}>${s}>${n}`;return q.publicChat(r,s)},videoCard(t,e,i,o,s,n,r){let l=`m__4*${t}>${e}>${i}>${o}>${s}>${n}>${r}`;return q.publicChat(l,s)},like:(t,e="")=>`+*${t}${e}`,danmu:(t,e,i="0")=>`~{"t":"${t}","c":"${e}","v":${i}}`,withdrawn:(t,e="")=>""==e?`v0#${t}`:`v0*${e}#${t}`,stockRequest:t=>null==t?">#":t>0?`>$${Math.round(Math.abs(t))}`:t<0?`>@${Math.round(Math.abs(t))}`:">#"},R={dialogHolder:document.createElement("div"),initDialogHolder(){R.dialogHolder.id="hmDialogHolder",R.dialogHolder.style.zIndex="999999",document.body.append(R.dialogHolder)},menuHolder:document.createElement("div"),initMenuHolder(){R.menuHolder.id="hmMenuHolder";let t=document.querySelector("#functionHolderImg");null!==t&&null!==t.parentElement&&t.parentElement.insertAdjacentElement("afterend",R.menuHolder)},movePanelHolder:document.createElement("div"),initMovePanelHolder(){R.movePanelHolder.id="hmMovePanelHolder",R.movePanelHolder.style.zIndex="999999",document.body.append(R.movePanelHolder)},notificationHolder:document.createElement("div"),initNotificationHolder(){R.notificationHolder.id="hmNotificationHolder",R.notificationHolder.style.zIndex="999999",document.body.append(R.notificationHolder)}},W="script-tools",X=class{constructor(t,e,i=!0){this.name=t,this.url=e,this.enable=i}},G={injectedUrlList:[],addScriptToList:t=>(j.logger.debug(W,`添加${t.name},${t.url}`),G.findScriptByUrl(t.url)>=0||G.findScriptByName(t.name)>=0?(j.logger.warn(W,`脚本${t.name}${t.url}已经存在`),!1):(U.HortimagicStore.scriptList.push(t),!0)),updateScriptInList(t){j.logger.debug(W,`更新脚本${t.name}${t.url}`);for(let e=0;e<U.HortimagicStore.scriptList.length;e++){if(U.HortimagicStore.scriptList[e].name===t.name)return U.HortimagicStore.scriptList[e]=t,!0;if(U.HortimagicStore.scriptList[e].url===t.url)return U.HortimagicStore.scriptList[e]=t,!0}return!1},removeScriptFromList(t){j.logger.debug(W,`删除${t.name},${t.url}`);let e=G.findScriptByName(t.name);return e>=0?(U.HortimagicStore.scriptList.splice(e,1),!0):(e=G.findScriptByUrl(t.url),e>=0&&(U.HortimagicStore.scriptList.splice(e,1),!0))},findScriptByUrl(t){for(let e=0;e<U.HortimagicStore.scriptList.length;e++)if(U.HortimagicStore.scriptList[e].url==t)return e;return-1},findScriptByName(t){for(let e=0;e<U.HortimagicStore.scriptList.length;e++)if(U.HortimagicStore.scriptList[e].name==t)return e;return-1},clearScriptList(){U.HortimagicStore.scriptList=[]},injecteScript(t){if(G.injectedUrlList.includes(t.url))return j.logger.warn(W,`脚本${t.name}${t.url}已经注入`),!1;{const e=document.createElement("script");return e.src=t.url,document.body.appendChild(e),G.injectedUrlList.push(t.url),j.logger.debug(W,`注入${t.name}`),!0}},injecteScriptList(){U.HortimagicStore.scriptList.forEach(t=>{t.enable&&!G.injectedUrlList.includes(t.url)&&G.injecteScript(t)})}},J=i({Danmu:()=>a,Emitter:()=>f,Hidden:()=>l,Private:()=>r,Public:()=>n,Script:()=>X,Stock:()=>d,System:()=>h,Unkonw:()=>p,Withdrawn:()=>c,decoder:()=>v,elementsHooks:()=>F,encoder:()=>q,holders:()=>R,logTools:()=>j,scriptTools:()=>G,socketTools:()=>D,store:()=>U,tools:()=>s}),K=globalThis,Z=K.ShadowRoot&&(void 0===K.ShadyCSS||K.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Y=Symbol(),Q=new WeakMap,tt=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==Y)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(Z&&void 0===t){const i=void 0!==e&&1===e.length;i&&(t=Q.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&Q.set(e,t))}return t}toString(){return this.cssText}},et=(t,...e)=>{const i=1===t.length?t[0]:e.reduce((e,i,o)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[o+1],t[0]);return new tt(i,t,Y)},it=Z?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return(t=>new tt("string"==typeof t?t:t+"",void 0,Y))(e)})(t):t,{is:ot,defineProperty:st,getOwnPropertyDescriptor:nt,getOwnPropertyNames:rt,getOwnPropertySymbols:lt,getPrototypeOf:at}=Object,ct=globalThis,ht=ct.trustedTypes,dt=ht?ht.emptyScript:"",pt=ct.reactiveElementPolyfillSupport,gt=(t,e)=>t,ut={toAttribute(t,e){switch(e){case Boolean:t=t?dt:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},mt=(t,e)=>!ot(t,e),vt={attribute:!0,type:String,converter:ut,reflect:!1,useDefault:!1,hasChanged:mt};Symbol.metadata??=Symbol("metadata"),ct.litPropertyMetadata??=new WeakMap;var ft=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=vt){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){const i=Symbol(),o=this.getPropertyDescriptor(t,i,e);void 0!==o&&st(this.prototype,t,o)}}static getPropertyDescriptor(t,e,i){const{get:o,set:s}=nt(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get:o,set(e){const n=o?.call(this);s?.call(this,e),this.requestUpdate(t,n,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??vt}static _$Ei(){if(this.hasOwnProperty(gt("elementProperties")))return;const t=at(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(gt("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(gt("properties"))){const t=this.properties,e=[...rt(t),...lt(t)];for(const i of e)this.createProperty(i,t[i])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,i]of e)this.elementProperties.set(t,i)}this._$Eh=new Map;for(const[e,i]of this.elementProperties){const t=this._$Eu(e,i);void 0!==t&&this._$Eh.set(t,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(it(t))}else void 0!==t&&e.push(it(t));return e}static _$Eu(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const i of e.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((t,e)=>{if(Z)t.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const i of e){const e=document.createElement("style"),o=K.litNonce;void 0!==o&&e.setAttribute("nonce",o),e.textContent=i.cssText,t.appendChild(e)}})(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$ET(t,e){const i=this.constructor.elementProperties.get(t),o=this.constructor._$Eu(t,i);if(void 0!==o&&!0===i.reflect){const s=(void 0!==i.converter?.toAttribute?i.converter:ut).toAttribute(e,i.type);this._$Em=t,null==s?this.removeAttribute(o):this.setAttribute(o,s),this._$Em=null}}_$AK(t,e){const i=this.constructor,o=i._$Eh.get(t);if(void 0!==o&&this._$Em!==o){const t=i.getPropertyOptions(o),s="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:ut;this._$Em=o;const n=s.fromAttribute(e,t.type);this[o]=n??this._$Ej?.get(o)??n,this._$Em=null}}requestUpdate(t,e,i,o=!1,s){if(void 0!==t){const n=this.constructor;if(!1===o&&(s=this[t]),i??=n.getPropertyOptions(t),!((i.hasChanged??mt)(s,e)||i.useDefault&&i.reflect&&s===this._$Ej?.get(t)&&!this.hasAttribute(n._$Eu(t,i))))return;this.C(t,e,i)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(t,e,{useDefault:i,reflect:o,wrapped:s},n){i&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,n??e??this[t]),!0!==s||void 0!==n)||(this._$AL.has(t)||(this.hasUpdated||i||(e=void 0),this._$AL.set(t,e)),!0===o&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,i]of t){const{wrapped:t}=i,o=this[e];!0!==t||this._$AL.has(e)||void 0===o||this.C(e,void 0,i,o)}}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(t=>t.hostUpdate?.()),this.update(e)):this._$EM()}catch(e){throw t=!1,this._$EM(),e}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(t){}firstUpdated(t){}};ft.elementStyles=[],ft.shadowRootOptions={mode:"open"},ft[gt("elementProperties")]=new Map,ft[gt("finalized")]=new Map,pt?.({ReactiveElement:ft}),(ct.reactiveElementVersions??=[]).push("2.1.2");var bt=globalThis,yt=t=>t,wt=bt.trustedTypes,xt=wt?wt.createPolicy("lit-html",{createHTML:t=>t}):void 0,$t="$lit$",St=`lit$${Math.random().toFixed(9).slice(2)}$`,kt="?"+St,_t=`<${kt}>`,Ht=document,Ct=()=>Ht.createComment(""),At=t=>null===t||"object"!=typeof t&&"function"!=typeof t,Et=Array.isArray,Lt=t=>Et(t)||"function"==typeof t?.[Symbol.iterator],Mt="[ \t\n\f\r]",zt=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Tt=/-->/g,Bt=/>/g,Ot=RegExp(`>|${Mt}(?:([^\\s"'>=/]+)(${Mt}*=${Mt}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),Pt=/'/g,It=/"/g,Ut=/^(?:script|style|textarea|title)$/i,jt=t=>(e,...i)=>({_$litType$:t,strings:e,values:i}),Nt=jt(1),Dt=(jt(2),jt(3),Symbol.for("lit-noChange")),Vt=Symbol.for("lit-nothing"),Ft=new WeakMap,qt=Ht.createTreeWalker(Ht,129);function Rt(t,e){if(!Et(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==xt?xt.createHTML(e):e}var Wt=(t,e)=>{const i=t.length-1,o=[];let s,n=2===e?"<svg>":3===e?"<math>":"",r=zt;for(let l=0;l<i;l++){const e=t[l];let i,a,c=-1,h=0;for(;h<e.length&&(r.lastIndex=h,a=r.exec(e),null!==a);)h=r.lastIndex,r===zt?"!--"===a[1]?r=Tt:void 0!==a[1]?r=Bt:void 0!==a[2]?(Ut.test(a[2])&&(s=RegExp("</"+a[2],"g")),r=Ot):void 0!==a[3]&&(r=Ot):r===Ot?">"===a[0]?(r=s??zt,c=-1):void 0===a[1]?c=-2:(c=r.lastIndex-a[2].length,i=a[1],r=void 0===a[3]?Ot:'"'===a[3]?It:Pt):r===It||r===Pt?r=Ot:r===Tt||r===Bt?r=zt:(r=Ot,s=void 0);const d=r===Ot&&t[l+1].startsWith("/>")?" ":"";n+=r===zt?e+_t:c>=0?(o.push(i),e.slice(0,c)+$t+e.slice(c)+St+d):e+St+(-2===c?l:d)}return[Rt(t,n+(t[i]||"<?>")+(2===e?"</svg>":3===e?"</math>":"")),o]},Xt=class t{constructor({strings:e,_$litType$:i},o){let s;this.parts=[];let n=0,r=0;const l=e.length-1,a=this.parts,[c,h]=Wt(e,i);if(this.el=t.createElement(c,o),qt.currentNode=this.el.content,2===i||3===i){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(s=qt.nextNode())&&a.length<l;){if(1===s.nodeType){if(s.hasAttributes())for(const t of s.getAttributeNames())if(t.endsWith($t)){const e=h[r++],i=s.getAttribute(t).split(St),o=/([.?@])?(.*)/.exec(e);a.push({type:1,index:n,name:o[2],strings:i,ctor:"."===o[1]?Yt:"?"===o[1]?Qt:"@"===o[1]?te:Zt}),s.removeAttribute(t)}else t.startsWith(St)&&(a.push({type:6,index:n}),s.removeAttribute(t));if(Ut.test(s.tagName)){const t=s.textContent.split(St),e=t.length-1;if(e>0){s.textContent=wt?wt.emptyScript:"";for(let i=0;i<e;i++)s.append(t[i],Ct()),qt.nextNode(),a.push({type:2,index:++n});s.append(t[e],Ct())}}}else if(8===s.nodeType)if(s.data===kt)a.push({type:2,index:n});else{let t=-1;for(;-1!==(t=s.data.indexOf(St,t+1));)a.push({type:7,index:n}),t+=St.length-1}n++}}static createElement(t,e){const i=Ht.createElement("template");return i.innerHTML=t,i}};function Gt(t,e,i=t,o){if(e===Dt)return e;let s=void 0!==o?i._$Co?.[o]:i._$Cl;const n=At(e)?void 0:e._$litDirective$;return s?.constructor!==n&&(s?._$AO?.(!1),void 0===n?s=void 0:(s=new n(t),s._$AT(t,i,o)),void 0!==o?(i._$Co??=[])[o]=s:i._$Cl=s),void 0!==s&&(e=Gt(t,s._$AS(t,e.values),s,o)),e}var Jt=class{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:i}=this._$AD,o=(t?.creationScope??Ht).importNode(e,!0);qt.currentNode=o;let s=qt.nextNode(),n=0,r=0,l=i[0];for(;void 0!==l;){if(n===l.index){let e;2===l.type?e=new Kt(s,s.nextSibling,this,t):1===l.type?e=new l.ctor(s,l.name,l.strings,this,t):6===l.type&&(e=new ee(s,this,t)),this._$AV.push(e),l=i[++r]}n!==l?.index&&(s=qt.nextNode(),n++)}return qt.currentNode=Ht,o}p(t){let e=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}},Kt=class t{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,i,o){this.type=2,this._$AH=Vt,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=o,this._$Cv=o?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=Gt(this,t,e),At(t)?t===Vt||null==t||""===t?(this._$AH!==Vt&&this._$AR(),this._$AH=Vt):t!==this._$AH&&t!==Dt&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):Lt(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==Vt&&At(this._$AH)?this._$AA.nextSibling.data=t:this.T(Ht.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:i}=t,o="number"==typeof i?this._$AC(t):(void 0===i.el&&(i.el=Xt.createElement(Rt(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===o)this._$AH.p(e);else{const t=new Jt(o,this),i=t.u(this.options);t.p(e),this.T(i),this._$AH=t}}_$AC(t){let e=Ft.get(t.strings);return void 0===e&&Ft.set(t.strings,e=new Xt(t)),e}k(e){Et(this._$AH)||(this._$AH=[],this._$AR());const i=this._$AH;let o,s=0;for(const n of e)s===i.length?i.push(o=new t(this.O(Ct()),this.O(Ct()),this,this.options)):o=i[s],o._$AI(n),s++;s<i.length&&(this._$AR(o&&o._$AB.nextSibling,s),i.length=s)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){const e=yt(t).nextSibling;yt(t).remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}},Zt=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,i,o,s){this.type=1,this._$AH=Vt,this._$AN=void 0,this.element=t,this.name=e,this._$AM=o,this.options=s,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=Vt}_$AI(t,e=this,i,o){const s=this.strings;let n=!1;if(void 0===s)t=Gt(this,t,e,0),n=!At(t)||t!==this._$AH&&t!==Dt,n&&(this._$AH=t);else{const o=t;let r,l;for(t=s[0],r=0;r<s.length-1;r++)l=Gt(this,o[i+r],e,r),l===Dt&&(l=this._$AH[r]),n||=!At(l)||l!==this._$AH[r],l===Vt?t=Vt:t!==Vt&&(t+=(l??"")+s[r+1]),this._$AH[r]=l}n&&!o&&this.j(t)}j(t){t===Vt?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},Yt=class extends Zt{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===Vt?void 0:t}},Qt=class extends Zt{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==Vt)}},te=class extends Zt{constructor(t,e,i,o,s){super(t,e,i,o,s),this.type=5}_$AI(t,e=this){if((t=Gt(this,t,e,0)??Vt)===Dt)return;const i=this._$AH,o=t===Vt&&i!==Vt||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,s=t!==Vt&&(i===Vt||o);o&&this.element.removeEventListener(this.name,this,i),s&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}},ee=class{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){Gt(this,t)}},ie={M:$t,P:St,A:kt,C:1,L:Wt,R:Jt,D:Lt,V:Gt,I:Kt,H:Zt,N:Qt,U:te,B:Yt,F:ee},oe=bt.litHtmlPolyfillSupport;oe?.(Xt,Kt),(bt.litHtmlVersions??=[]).push("3.3.3");var se=globalThis,ne=class extends ft{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,i)=>{const o=i?.renderBefore??e;let s=o._$litPart$;if(void 0===s){const t=i?.renderBefore??null;o._$litPart$=s=new Kt(e.insertBefore(Ct(),t),t,void 0,i??{})}return s._$AI(t),s})(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return Dt}};ne._$litElement$=!0,ne.finalized=!0,se.litElementHydrateSupport?.({LitElement:ne});var re=se.litElementPolyfillSupport;re?.({LitElement:ne}),(se.litElementVersions??=[]).push("4.2.2");var le=t=>(e,i)=>{void 0!==i?i.addInitializer(()=>{customElements.define(t,e)}):customElements.define(t,e)},ae={attribute:!0,type:String,converter:ut,reflect:!1,hasChanged:mt},ce=(t=ae,e,i)=>{const{kind:o,metadata:s}=i;let n=globalThis.litPropertyMetadata.get(s);if(void 0===n&&globalThis.litPropertyMetadata.set(s,n=new Map),"setter"===o&&((t=Object.create(t)).wrapped=!0),n.set(i.name,t),"accessor"===o){const{name:o}=i;return{set(i){const s=e.get.call(this);e.set.call(this,i),this.requestUpdate(o,s,t,!0,i)},init(e){return void 0!==e&&this.C(o,void 0,t,e),e}}}if("setter"===o){const{name:o}=i;return function(i){const s=this[o];e.call(this,i),this.requestUpdate(o,s,t,!0,i)}}throw Error("Unsupported decorator location: "+o)};function he(t){return(e,i)=>"object"==typeof i?ce(t,e,i):((t,e,i)=>{const o=e.hasOwnProperty(i);return e.constructor.createProperty(i,t),o?Object.getOwnPropertyDescriptor(e,i):void 0})(t,e,i)}var de=(t,e,i)=>(i.configurable=!0,i.enumerable=!0,Reflect.decorate&&"object"!=typeof e&&Object.defineProperty(t,e,i),i);function pe(t,e){return(i,o,s)=>{const n=e=>e.renderRoot?.querySelector(t)??null;if(e){const{get:t,set:e}="object"==typeof o?i:s??(()=>{const t=Symbol();return{get(){return this[t]},set(e){this[t]=e}}})();return de(i,o,{get(){let i=t.call(this);return void 0===i&&(i=n(this),(null!==i||this.hasUpdated)&&e.call(this,i)),i}})}return de(i,o,{get(){return n(this)}})}}function ge(t,e,i,o){var s,n=arguments.length,r=n<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,i,o);else for(var l=t.length-1;l>=0;l--)(s=t[l])&&(r=(n<3?s(r):n>3?s(e,i,r):s(e,i))||r);return n>3&&r&&Object.defineProperty(e,i,r),r}var ue=[],me=99999,ve=class extends ne{static{this.styles=et`
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
`}constructor(){super(),this.width=320,this.height=490,this.headerBackgroundColor="rgba(66,134,182,0.9)",this.headerColor="rgb(255,255,255)",this.bodyBackgroundColor="rgba(255,255,255,0.7)",this.bodyColor="rgba(23, 23, 23, 0.9)",this.footerBackgroundColor="rgba(255,255,255,0.7)",this.buttonBackground="rgba(255,255,255,0.9)",this.buttonColor="rgba(66,134,182,0.9)",this.titleContent="面板",this.leftButtonText="",this.rightButtonText="",this.isDisplay=!1,this.zIndex=me,this.icon="magic-wand",this.leftIcon="magic-wand",this.rightIcon="magic-wand",this.left=(window.innerWidth-this.width)/2,this.top=(window.innerHeight-(this.height+80))/2,this.dragging=!1,ue.push(this),this.zIndex=++me}hideMovePanel(){this.isDisplay=!1,this.dispatchEvent(new CustomEvent("close",{detail:{isDisplay:this.isDisplay,message:"关闭事件"},bubbles:!0,composed:!0}))}showMovePanel(){this.isDisplay=!0,this.dispatchEvent(new CustomEvent("show",{detail:{isDisplay:this.isDisplay},bubbles:!0,composed:!0}))}toogleDisplay(){this.isDisplay?this.hideMovePanel():this.showMovePanel()}mouseDragging(t){let e=this.left,i=this.top,o=t.clientX-e,s=t.clientY-i;0==this.dragging&&(this.dragging=!0),document.onmousemove=t=>{this.dragging&&(this.left=t.clientX-o,this.top=t.clientY-s)},document.onmouseup=()=>{this.dragging&&(this.dragging=!1),document.onmousemove=null}}touchDragging(t){let e=this.left,i=this.top,o=t.touches[0].clientX-e,s=t.touches[0].clientY-i;0==this.dragging&&(this.dragging=!0),document.ontouchmove=t=>{this.dragging&&(this.left=t.touches[0].clientX-o,this.top=t.touches[0].clientY-s)},document.ontouchend=()=>{this.dragging&&(this.dragging=!1),document.onmousemove=null}}putTop(){let t=!1;if(ue.includes(this)){for(let t=0;t<ue.length;t++)ue[t].zIndex>this.zIndex&&(ue[t].zIndex=ue[t].zIndex-1);this.zIndex=me,t=!0}else j.logger.warn("MovePanel","置顶失败，窗口不在列表中"),t=!1;return t}putTopToggel(){this.zIndex!=me?(this.putTop(),this.showMovePanel()):this.toogleDisplay()}render(){return Nt`
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

                `}_handleClose(){this.hideMovePanel()}handleLeftButtonClick(){this.dispatchEvent(new CustomEvent("left-button-click",{detail:{message:"左侧按钮被点击"},bubbles:!0,composed:!0}))}handleRightButtonClick(){this.dispatchEvent(new CustomEvent("right-button-click",{detail:{message:"右侧按钮被点击"},bubbles:!0,composed:!0}))}};ge([he({type:Number})],ve.prototype,"width",void 0),ge([he({type:Number})],ve.prototype,"height",void 0),ge([he({type:String,attribute:"header-background-color"})],ve.prototype,"headerBackgroundColor",void 0),ge([he({type:String,attribute:"header-color"})],ve.prototype,"headerColor",void 0),ge([he({type:String,attribute:"body-background-color"})],ve.prototype,"bodyBackgroundColor",void 0),ge([he({type:String,attribute:"body-color"})],ve.prototype,"bodyColor",void 0),ge([he({type:String,attribute:"footer-background-color"})],ve.prototype,"footerBackgroundColor",void 0),ge([he({type:String,attribute:"button-background-color"})],ve.prototype,"buttonBackground",void 0),ge([he({type:String,attribute:"button-color"})],ve.prototype,"buttonColor",void 0),ge([he({type:String})],ve.prototype,"titleContent",void 0),ge([he({type:String,attribute:"left-button-text"})],ve.prototype,"leftButtonText",void 0),ge([he({type:String,attribute:"right-button-text"})],ve.prototype,"rightButtonText",void 0),ge([he({type:Boolean,attribute:"is-display"})],ve.prototype,"isDisplay",void 0),ge([he({type:Number})],ve.prototype,"zIndex",void 0),ge([he({type:String})],ve.prototype,"icon",void 0),ge([he({type:String,attribute:"left-icon"})],ve.prototype,"leftIcon",void 0),ge([he({type:String,attribute:"right-icon"})],ve.prototype,"rightIcon",void 0),ge([he({type:Number})],ve.prototype,"left",void 0),ge([he({type:Number})],ve.prototype,"top",void 0),ve=ge([le("hm-move-panel")],ve);var fe=2,be=t=>(...e)=>({_$litDirective$:t,values:e}),ye=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}},we=class extends ye{constructor(t){if(super(t),this.it=Vt,t.type!==fe)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===Vt||null==t)return this._t=void 0,this.it=t;if(t===Dt)return t;if("string"!=typeof t)throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.it)return this._t;this.it=t;const e=[t];return e.raw=e,this._t={_$litType$:this.constructor.resultType,strings:e,values:[]}}};we.directiveName="unsafeHTML",we.resultType=1;be(we);var xe=class extends we{};xe.directiveName="unsafeSVG",xe.resultType=2;var $e=be(xe),Se=new Map([["magic-wand",'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m12.64 1.87l-.84 2.48a.41.41 0 0 0 0 .37l1.57 2.1a.4.4 0 0 1-.33.64h-2.62a.43.43 0 0 0-.33.17l-1.46 2.1a.4.4 0 0 1-.71-.11l-.78-2.5a.38.38 0 0 0-.26-.26l-2.5-.78a.4.4 0 0 1-.11-.71l2.14-1.51a.43.43 0 0 0 .17-.33V.91a.4.4 0 0 1 .6-.33l2.1 1.57a.41.41 0 0 0 .37.05l2.48-.84a.4.4 0 0 1 .51.51m-5.6 5.09L.5 13.5" stroke-width="1"/></svg>'],["close",'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M6.4 19L5 17.6l5.6-5.6L5 6.4L6.4 5l5.6 5.6L17.6 5L19 6.4L13.4 12l5.6 5.6l-1.4 1.4l-5.6-5.6z"/></svg>'],["open",'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M4 21q-.425 0-.712-.288T3 20v-6q0-.425.288-.712T4 13t.713.288T5 14v3.6L17.6 5H14q-.425 0-.712-.288T13 4t.288-.712T14 3h6q.425 0 .713.288T21 4v6q0 .425-.288.713T20 11t-.712-.288T19 10V6.4L6.4 19H10q.425 0 .713.288T11 20t-.288.713T10 21z"/></svg>'],["led-on",'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M11 0v4h2V0zm7.3 2.29l-3.06 3l1.4 1.42l3.06-3zm-12.59 0L4.29 3.71l3 3l1.42-1.42zM12 6a4 4 0 0 0-4 4v6H6v2h3v5h2v-5h2v5h2v-5h3v-2h-2v-6a4 4 0 0 0-4-4M2 9v2h4V9zm16 0v2h4V9z"/></svg>'],["led-off",'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M12 6a4 4 0 0 0-4 4v6H6v2h3v5h2v-5h2v5h2v-5h3v-2h-2v-6a4 4 0 0 0-4-4"/></svg>'],["arrow-up",'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M16.21 16H7.79a1.76 1.76 0 0 1-1.59-1a2.1 2.1 0 0 1 .26-2.21l4.21-5.1a1.76 1.76 0 0 1 2.66 0l4.21 5.1A2.1 2.1 0 0 1 17.8 15a1.76 1.76 0 0 1-1.59 1"/></svg>'],["arrow-down",'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M12 17a1.72 1.72 0 0 1-1.33-.64l-4.21-5.1a2.1 2.1 0 0 1-.26-2.21A1.76 1.76 0 0 1 7.79 8h8.42a1.76 1.76 0 0 1 1.59 1.05a2.1 2.1 0 0 1-.26 2.21l-4.21 5.1A1.72 1.72 0 0 1 12 17"/></svg>'],["template",'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><defs><mask id="SVGZZ153dkC"><path fill="#4d4d4d" stroke="#fff" stroke-linejoin="round" stroke-width="4" d="M23 4H4v22h19zm21 30H4v9h40zm0-30H31v8h13zm0 14H31v8h13z"/></mask></defs><path fill="currentColor" d="M0 0h48v48H0z" mask="url(#SVGZZ153dkC)"/></svg>'],["js",'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path fill="currentColor" d="M10.77 7.3h.002c1.045.393 2.479.93 2.479 2.45a2.5 2.5 0 0 1-.224 1.02a2.5 2.5 0 0 1-1.515 1.364a2.5 2.5 0 0 1-1.035.115a2 2 0 0 1-.214.012a2.5 2.5 0 0 1-1.673-.65a2.52 2.52 0 0 1-.838-1.859c0-.202.078-.39.22-.532a.77.77 0 0 1 1.06 0a.74.74 0 0 1 .221.53c0 .952 1.041 1 1.25 1s1.25-.048 1.25-1c0-.413-.447-.648-1.514-1.048h-.003C9.19 8.307 7.753 7.77 7.753 6.25q.005-.537.224-1.02a2.5 2.5 0 0 1 .614-.842a2.5 2.5 0 0 1 .9-.52a3.5 3.5 0 0 1 2.023 0a2.52 2.52 0 0 1 1.738 2.381c0 .201-.078.39-.22.531a.77.77 0 0 1-1.061 0a.74.74 0 0 1-.22-.53c0-.952-1.041-1-1.25-1s-1.25.048-1.25 1c0 .413.447.648 1.514 1.048zM5.751 4.5c0-.2.078-.388.22-.53a.77.77 0 0 1 1.06 0c.142.141.22.33.22.53v5a2.75 2.75 0 0 1-4.695 1.945A2.73 2.73 0 0 1 1.75 9.5V9c0-.2.078-.388.22-.53a.77.77 0 0 1 1.061 0c.142.141.22.33.22.53v.5c0 .33.134.652.366.884c.465.465 1.303.465 1.768 0c.232-.233.366-.555.366-.884z"/></svg>'],["filter",'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M3 4c2.01 2.59 7 9 7 9v7h4v-7s4.98-6.41 7-9z"/></svg>'],["filter-off",'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M3.004 1.59L3 1.586L1.586 3l4.928 4.928L10 12.818V21h4v-5.585l7 7l1.41-1.41L3 1.595zm12.266 9.446L21 3H7.234z"/></svg>'],["eye",'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M16 11v2h-1v1h-1v1h-1v1h-2v-1h-1v-1H9v-1H8v-2h2v-1h1V8h2v1h1v1h1v1z"/><path fill="currentColor" d="M22 11V9h-1V8h-1V7h-1V6h-2V5H7v1H5v1H4v1H3v1H2v2H1v2h1v2h1v1h1v1h1v1h2v1h10v-1h2v-1h1v-1h1v-1h1v-2h1v-2zm-4 2h-1v2h-1v1h-1v1h-2v1h-2v-1H9v-1H8v-1H7v-2H6v-2h1V9h1V8h1V7h2V6h2v1h2v1h1v1h1v2h1z"/></svg>'],["eye-off",'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M2 13H1v-2h1V9h1V8h1V7h1V6h2V5h8v1h-1v1h-1V6h-2v1H9v1H8v1H7v2H6v2h1v1H6v1H5v1H3v-1H2z"/><path fill="currentColor" d="M8 11h1v1H8zm3-3h1v1h-1zm-2 9H8v1H7v1H6v1H5v1H4v1H3v-1H2v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1V9h1V8h1V7h1V6h1V5h1V4h1V3h1V2h1v1h1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1H9zm3-2h1v1h-1zm1-1h1v1h-1zm2-2h1v1h-1zm-1 1h1v1h-1z"/><path fill="currentColor" d="M23 11v2h-1v2h-1v1h-1v1h-1v1h-2v1H9v-1h1v-1h1v1h2v-1h2v-1h1v-1h1v-2h1v-2h-1v-1h1V9h1V8h2v1h1v2z"/></svg>'],["config",'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="4"><path d="m24 4l-6 6h-8v8l-6 6l6 6v8h8l6 6l6-6h8v-8l6-6l-6-6v-8h-8z"/><path d="M24 30a6 6 0 1 0 0-12a6 6 0 0 0 0 12Z"/></g></svg>'],["log",'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path fill="currentColor" fill-rule="evenodd" d="M3.5 2.5v11h9v-11zM3 1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zm5 10a.75.75 0 0 1 .75-.75h1.75a.75.75 0 0 1 0 1.5H8.75A.75.75 0 0 1 8 11m-2 1a1 1 0 1 0 0-2a1 1 0 0 0 0 2m2-4a.75.75 0 0 1 .75-.75h1.75a.75.75 0 0 1 0 1.5H8.75A.75.75 0 0 1 8 8M6 9a1 1 0 1 0 0-2a1 1 0 0 0 0 2m2-4a.75.75 0 0 1 .75-.75h1.75a.75.75 0 0 1 0 1.5H8.75A.75.75 0 0 1 8 5M6 6a1 1 0 1 0 0-2a1 1 0 0 0 0 2" clip-rule="evenodd"/></svg>'],["edit",'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path fill="currentColor" fill-opacity="0" stroke-dasharray="44" stroke-dashoffset="44" d="M7 17v-4l10 -10l4 4l-10 10h-4"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.3s" dur="0.5s" to="0"/><animate fill="freeze" attributeName="fill-opacity" begin="1s" dur="0.15s" to="0.3"/></path><g fill="none"><path stroke-dasharray="20" d="M3 21h18"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.3s" values="20;0"/></path><path stroke-dasharray="8" stroke-dashoffset="8" d="M14 6l4 4"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.8s" dur="0.2s" to="0"/></path></g></g></svg>'],["run",'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path fill="currentColor" d="M4.506 3.503L12.501 8l-8 4.5zm-.004-1.505C3.718 1.998 3 2.626 3 3.5v9c0 .874.718 1.502 1.502 1.502c.245 0 .496-.061.733-.195l8-4.5c1.019-.573 1.019-2.041 0-2.615l-8-4.499a1.5 1.5 0 0 0-.733-.195"/></svg>'],["delete",'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M7 4a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2h4a1 1 0 1 1 0 2h-1.069l-.867 12.142A2 2 0 0 1 17.069 22H6.93a2 2 0 0 1-1.995-1.858L4.07 8H3a1 1 0 0 1 0-2h4zm2 2h6V4H9zM6.074 8l.857 12H17.07l.857-12zM10 10a1 1 0 0 1 1 1v6a1 1 0 1 1-2 0v-6a1 1 0 0 1 1-1m4 0a1 1 0 0 1 1 1v6a1 1 0 1 1-2 0v-6a1 1 0 0 1 1-1"/></svg>'],["media",'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2048 2048"><path fill="currentColor" d="M2048 670v898q0 51-22 92t-59 70t-82 46t-93 16q-47 0-93-16t-82-45t-58-71t-23-92q0-51 22-92t59-71t82-45t93-16q66 0 128 31V834l-640 160v702q0 51-22 92t-59 70t-82 46t-93 16q-47 0-93-16t-82-45t-58-71t-23-92q0-51 22-92t59-71t82-45t93-16q66 0 128 31V894zM1024 1792q20 0 42-6t42-18t31-30t13-42q0-24-12-42t-32-30t-41-18t-43-6q-20 0-42 6t-42 18t-31 30t-13 42q0 24 12 42t32 30t41 18t43 6m768-128q20 0 42-6t42-18t31-30t13-42q0-24-12-42t-32-30t-41-18t-43-6q-20 0-42 6t-42 18t-31 30t-13 42q0 24 12 42t32 30t41 18t43 6M384 640H256V512h128zM256 768h128v128H256zm896-256h128v128h-128zm-128 768H0V128h1536v512l-128 32V256h-128v128h-128V256H384v128H256V256H128v896h128v-128h128v128h640z"/></svg>'],["video",'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 15.75v-7.5a2 2 0 0 1 2-2h8.5a2 2 0 0 1 2 2v7.5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2m17.168-8.759l-4 3.563a.5.5 0 0 0-.168.373v1.778a.5.5 0 0 0 .168.373l4 3.563a.5.5 0 0 0 .832-.374V7.365a.5.5 0 0 0-.832-.374"/></svg>'],["play-video",'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path fill="currentColor" d="M85.527 80.647a4.97 4.97 0 0 0 4.973-4.974V24.327a4.97 4.97 0 0 0-4.973-4.974H14.474A4.97 4.97 0 0 0 9.5 24.327v51.346a4.97 4.97 0 0 0 4.974 4.974zm-4.974-9.948H19.446V29.301h61.107z"/><path fill="currentColor" d="m64.819 50.288l-11.98 6.913l-11.974 6.917V36.462l11.974 6.918z"/></svg>'],["game",'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M7.96 13.33h32.08a3.455 3.455 0 0 1 3.46 3.448v14.429a3.455 3.455 0 0 1-3.446 3.464H7.96A3.455 3.455 0 0 1 4.5 31.22V16.793a3.455 3.455 0 0 1 3.446-3.464z" stroke-width="1"/><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M13.25 16.938v5.401H8.11v3.385h5.14v5.338h3.577v-5.338h5.334V22.34h-5.334v-5.4zm19.513 9.68a2.58 2.58 0 0 1-2.582 2.583h0a2.58 2.58 0 0 1-2.58-2.583a2.582 2.582 0 1 1 5.162-.001zm7.076-5.235a2.58 2.58 0 0 1-2.58 2.584h0a2.58 2.58 0 0 1-2.583-2.583v0A2.58 2.58 0 0 1 37.26 18.8h0a2.58 2.58 0 0 1 2.581 2.583" stroke-width="1"/></svg>'],["save",'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M64 48c-8.726 0-16 7.274-16 16v384c0 8.726 7.274 16 16 16h215v-16H64V64h63.375v97.53c0 3.924 3.443 7.095 7.72 7.095h169.81c4.277 0 7.72-3.17 7.72-7.094V64h69.22c.428.318.8.548 1.467 1.094c2.05 1.675 4.962 4.264 8.375 7.406c6.827 6.283 15.65 14.837 24.313 23.5s17.217 17.486 23.5 24.313c3.142 3.413 5.73 6.324 7.406 8.374c.546.668.776 1.04 1.094 1.47V330.25l16 16V128c0-2.68-.657-3.402-1.03-4.156a15 15 0 0 0-1.095-1.844c-.74-1.1-1.575-2.19-2.594-3.438c-2.036-2.492-4.768-5.55-8.03-9.093c-6.524-7.09-15.155-16-23.938-24.782s-17.692-17.414-24.78-23.938c-3.545-3.262-6.6-5.994-9.094-8.03c-1.247-1.02-2.337-1.855-3.438-2.595c-.55-.37-1.09-.72-1.844-1.094c-.754-.373-1.477-1.03-4.156-1.03zm87.72 16h48.56c4.277 0 7.72 4.425 7.72 9.938v70.124c0 5.513-3.443 9.938-7.72 9.938h-48.56c-4.277 0-7.72-4.425-7.72-9.938V73.938c0-5.512 3.443-9.937 7.72-9.937zM114 212c-4.432 0-8 3.568-8 8v184c0 4.432 3.568 8 8 8h165v-28h-76.72l15.345-15.375l128-128L352 234.28l6.375 6.345L406 288.25V220c0-4.432-3.568-8-8-8zm238 47.75L245.75 366H297v128h110V366h51.25zM448 384v64h-23v16h23c8.726 0 16-7.274 16-16v-64z"/></svg>'],["load",'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M64 48c-8.726 0-16 7.274-16 16v384c0 8.726 7.274 16 16 16h236.25l-16-16H64V64h63.375v97.53c0 3.924 3.443 7.095 7.72 7.095h169.81c4.277 0 7.72-3.17 7.72-7.094V64h69.22c.428.318.8.548 1.467 1.094c2.05 1.675 4.962 4.264 8.375 7.406c6.827 6.283 15.65 14.837 24.313 23.5s17.217 17.486 23.5 24.313c3.142 3.413 5.73 6.324 7.406 8.374c.546.668.776 1.04 1.094 1.47V366h16V128c0-2.68-.657-3.402-1.03-4.156a15 15 0 0 0-1.095-1.844c-.74-1.1-1.575-2.19-2.594-3.438c-2.036-2.492-4.768-5.55-8.03-9.093c-6.524-7.09-15.155-16-23.938-24.782s-17.692-17.414-24.78-23.938c-3.545-3.262-6.6-5.994-9.094-8.03c-1.247-1.02-2.337-1.855-3.438-2.595c-.55-.37-1.09-.72-1.844-1.094c-.754-.373-1.477-1.03-4.156-1.03zm87.72 16h48.56c4.277 0 7.72 4.425 7.72 9.938v70.124c0 5.513-3.443 9.938-7.72 9.938h-48.56c-4.277 0-7.72-4.425-7.72-9.938V73.938c0-5.512 3.443-9.937 7.72-9.937zM114 212c-4.432 0-8 3.568-8 8v184c0 4.432 3.568 8 8 8h134.25l-30.625-30.625L202.28 366H279V238h127v-18c0-4.432-3.568-8-8-8zm183 44v128h-51.25L352 490.25L458.25 384H407V256zm167 147.75l-16 16V448h-28.25l-16 16H448c8.726 0 16-7.274 16-16z"/></svg>'],["refresh",'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M17.65 6.35A7.96 7.96 0 0 0 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08A5.99 5.99 0 0 1 12 18c-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4z"/></svg>'],["post-add",'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M5 21q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h9v2H5v14h14v-9h2v9q0 .825-.587 1.413T19 21zm3-4v-2h8v2zm0-3v-2h8v2zm0-3V9h8v2zm9-2V7h-2V5h2V3h2v2h2v2h-2v2z"/></svg>']]);function ke(t,e){Se.set(t,e)}function _e(t){return Se.get(t)||'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m12.64 1.87l-.84 2.48a.41.41 0 0 0 0 .37l1.57 2.1a.4.4 0 0 1-.33.64h-2.62a.43.43 0 0 0-.33.17l-1.46 2.1a.4.4 0 0 1-.71-.11l-.78-2.5a.38.38 0 0 0-.26-.26l-2.5-.78a.4.4 0 0 1-.11-.71l2.14-1.51a.43.43 0 0 0 .17-.33V.91a.4.4 0 0 1 .6-.33l2.1 1.57a.41.41 0 0 0 .37.05l2.48-.84a.4.4 0 0 1 .51.51m-5.6 5.09L.5 13.5" stroke-width="1"/></svg>'}var He=class extends ne{constructor(...t){super(...t),this.icon="magic-wand",this.size="16px"}handelClick(){this.dispatchEvent(new CustomEvent("hm-icon-click"))}static{this.styles=et`
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
`}render(){return Nt`
<div class="icon" 
style="width:${this.size}; height:${this.size};"
@click="${this.handelClick}"
>
    ${$e(_e(this.icon))}
</div>
`}};ge([he({type:String})],He.prototype,"icon",void 0),ge([he({type:String})],He.prototype,"size",void 0),He=ge([le("hm-icon")],He);var Ce=class extends ne{constructor(...t){super(...t),this.icon="magic-wand",this.content="HortiMagicMenu",this.flag=!1,this.isMenuItem=!1}static{this.styles=et`
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
`}handleClick(){this.isMenuItem||(this.flag=!this.flag),this.dispatchEvent(new CustomEvent("hm-menu-click"))}render(){return Nt`
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
      ${this.isMenuItem?"":Nt`<hm-icon
        class="icon right"
        icon="${this.flag?"arrow-up":"arrow-down"}"
      ></hm-icon
      >`}
    </slot>
  </div>
</div>




`}};ge([he({type:String})],Ce.prototype,"icon",void 0),ge([he({type:String})],Ce.prototype,"content",void 0),ge([he({type:Boolean})],Ce.prototype,"flag",void 0),ge([he({type:Boolean})],Ce.prototype,"isMenuItem",void 0),Ce=ge([le("hm-menu")],Ce);var Ae=class extends ne{constructor(...t){super(...t),this.leftIcon="magic-wand",this.title="HortiMagic",this.content="Hello iirose!",this.rightIcon="",this.displayTime=999999,this.color="rgb(33,33,33)",this.backgroundColor="rgba(255,255,255,0.9)"}static{this.styles=et`
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
`}firstUpdated(){this.displayTime>0&&setTimeout(()=>{this.startLeaveAnimation()},this.displayTime)}startLeaveAnimation(){this.setAttribute("leaving",""),setTimeout(()=>{this.remove()},300)}render(){return Nt`
<div
  class="hm-notification"
  style="${this.color?`border-color: ${this.color};`:""} 
            ${this.color?`color: ${this.color};`:""} 
            ${this.backgroundColor?`background-color: ${this.backgroundColor};`:""}"
>
  ${this.leftIcon?Nt`
  <div class="icondiv">
    <hm-icon icon="${this.leftIcon}" size="24px"></hm-icon>
  </div>
  `:""}

  <div class="hm-notification-main">
    <div class="hm-notification-title">${this.title}</div>
    <div class="hm-notification-content">${this.content}</div>
  </div>
  ${this.rightIcon?Nt`
  <div class="icondiv">
    <hm-icon icon="${this.rightIcon}" size="24px"></hm-icon>
  </div>
  `:""}
</div>
`}};ge([he()],Ae.prototype,"leftIcon",void 0),ge([he()],Ae.prototype,"title",void 0),ge([he()],Ae.prototype,"content",void 0),ge([he()],Ae.prototype,"rightIcon",void 0),ge([he()],Ae.prototype,"displayTime",void 0),ge([he()],Ae.prototype,"color",void 0),ge([he()],Ae.prototype,"backgroundColor",void 0),Ae=ge([le("hm-notification")],Ae);var Ee=class extends ne{constructor(...t){super(...t),this.icon="",this.content="",this.fontSize="14px",this.color="",this.background="",this.width="",this.height="",this.enable=!0,this.loading=!1}static{this.styles=et`
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
    `}render(){return Nt`
          <button 
            class="button" 
            style="${`\n          ${this.color?`color: ${this.color};`:""}\n          ${this.background?`background: ${this.background};`:""}\n          ${this.width?`width: ${this.width};`:""}\n          ${this.height?`height: ${this.height};`:""}\n          ${this.fontSize?`font-size: ${this.fontSize};`:"14px"}\n        `}"
            ?disabled="${!this.enable||this.loading}"
            @click="${this._handleClick}">
            
            ${this.loading?Nt`
              <div class="loading-spinner"></div>
            `:this.icon?Nt`
              <slot name="icon">
                <hm-icon icon="${this.icon}" style="margin-right: 8px;"></hm-icon>
              </slot>
            `:""}
            
            <span class="button-content">
              <slot>${this.content}</slot>
            </span>
          </button>
        `}_handleClick(t){this.enable&&!this.loading?this.dispatchEvent(new CustomEvent("hm-button-click")):t.stopPropagation()}};ge([he({type:String})],Ee.prototype,"icon",void 0),ge([he({type:String})],Ee.prototype,"content",void 0),ge([he({type:String})],Ee.prototype,"fontSize",void 0),ge([he({type:String})],Ee.prototype,"color",void 0),ge([he({type:String})],Ee.prototype,"background",void 0),ge([he({type:String})],Ee.prototype,"width",void 0),ge([he({type:String})],Ee.prototype,"height",void 0),ge([he({type:Boolean})],Ee.prototype,"enable",void 0),ge([he({type:Boolean})],Ee.prototype,"loading",void 0),Ee=ge([le("hm-button")],Ee);var Le=class extends ne{constructor(...t){super(...t),this.titleName="标题",this.description="",this.content="",this.titleClickCallback=()=>{},this.contentClickCallback=()=>{}}render(){return Nt`
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

`}static{this.styles=et`
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
  `}};ge([he({attribute:"title-name"})],Le.prototype,"titleName",void 0),ge([he()],Le.prototype,"description",void 0),ge([he()],Le.prototype,"content",void 0),ge([he()],Le.prototype,"titleClickCallback",void 0),ge([he()],Le.prototype,"contentClickCallback",void 0),Le=ge([le("hm-cell")],Le);var{I:Me}=ie,ze=(t,e)=>{const i=t._$AN;if(void 0===i)return!1;for(const o of i)o._$AO?.(e,!1),ze(o,e);return!0},Te=t=>{let e,i;do{if(void 0===(e=t._$AM))break;i=e._$AN,i.delete(t),t=e}while(0===i?.size)},Be=t=>{for(let e;e=t._$AM;t=e){let i=e._$AN;if(void 0===i)e._$AN=i=new Set;else if(i.has(t))break;i.add(t),Ie(e)}};function Oe(t){void 0!==this._$AN?(Te(this),this._$AM=t,Be(this)):this._$AM=t}function Pe(t,e=!1,i=0){const o=this._$AH,s=this._$AN;if(void 0!==s&&0!==s.size)if(e)if(Array.isArray(o))for(let n=i;n<o.length;n++)ze(o[n],!1),Te(o[n]);else null!=o&&(ze(o,!1),Te(o));else ze(this,t)}var Ie=t=>{t.type==fe&&(t._$AP??=Pe,t._$AQ??=Oe)},Ue=class extends ye{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,e,i){super._$AT(t,e,i),Be(this),this.isConnected=t._$AU}_$AO(t,e=!0){t!==this.isConnected&&(this.isConnected=t,t?this.reconnected?.():this.disconnected?.()),e&&(ze(this,t),Te(this))}setValue(t){if((t=>void 0===t.strings)(this._$Ct))this._$Ct._$AI(t,this);else{const e=[...this._$Ct._$AH];e[this._$Ci]=t,this._$Ct._$AI(e,this,0)}}disconnected(){}reconnected(){}},je=class{},Ne=new WeakMap,De=be(class extends Ue{render(t){return Vt}update(t,[e]){const i=e!==this.G;return i&&this.rt(void 0),(i||this.lt!==this.ct)&&(this.G=e,this.ht=t.options?.host,this.rt(this.ct=t.element)),Vt}rt(t){if(void 0!==this.G)if(this.isConnected||(t=void 0),"function"==typeof this.G){const e=this.ht??globalThis;let i=Ne.get(e);void 0===i&&(i=new WeakMap,Ne.set(e,i)),void 0!==i.get(this.G)&&this.G.call(this.ht,void 0),i.set(this.G,t),void 0!==t&&this.G.call(this.ht,t)}else this.G.value=t}get lt(){return"function"==typeof this.G?Ne.get(this.ht??globalThis)?.get(this.G):this.G?.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}}),Ve=class extends ne{constructor(...t){super(...t),this.index=0,this.value=0,this.labelList=[{name:"选项0",value:0},{name:"选项1",value:1},{name:"选项2",value:2}],this.disabled=!1,this._selectRef=new je}static{this.styles=et`
    :host {
      display: inline-block;
      position: relative;
    }
    
    .select-wrapper {
      display: inline-block;
      position: relative;
    }
    
    select {
      padding: 8px 30px 8px 12px;
      border: 1px solid #ccc;
      border-radius: 4px;
      background-color: #fff;
      font-size: 14px;
      cursor: pointer;
      appearance: none;
      min-width: 120px;
      outline: none;
    }
    
    select:focus {
      border-color: #007cba;
      box-shadow: 0 0 0 2px rgba(0, 124, 186, 0.3);
    }
    
    select:disabled {
      background-color: #f5f5f5;
      cursor: not-allowed;
      opacity: 0.6;
    }
    
    .select-arrow {
      position: absolute;
      right: 10px;
      top: 50%;
      transform: translateY(-50%);
      pointer-events: none;
      width: 0;
      height: 0;
      border-left: 5px solid transparent;
      border-right: 5px solid transparent;
      border-top: 5px solid #999;
    }
  `}connectedCallback(){super.connectedCallback(),this.index=this.index<this.labelList.length?this.index:0,this.index<this.labelList.length&&(this.value=this.labelList[this.index].value)}render(){return Nt`
      <div class="select-wrapper">
        <select 
          ${De(this._selectRef)}
          .value="${this.index}"
          ?disabled="${this.disabled}"
          @change="${this._handleChange}"
        >
          ${this.labelList.map((t,e)=>Nt`
            <option .value="${e}">${t.name}</option>
          `)}
        </select>
        <div class="select-arrow"></div>
      </div>
    `}_handleChange(t){const e=t.target,i=parseInt(e.value);i!==this.index&&i>=0&&i<this.labelList.length&&(this.index=i,this.value=this.labelList[i].value,this.dispatchEvent(new CustomEvent("hm-select-change",{detail:{index:this.index,value:this.value,name:this.labelList[this.index].name},bubbles:!0,composed:!0})))}};ge([he({type:Number,reflect:!0})],Ve.prototype,"index",void 0),ge([he({reflect:!0})],Ve.prototype,"value",void 0),ge([he({attribute:"label-list"})],Ve.prototype,"labelList",void 0),ge([he({type:Boolean})],Ve.prototype,"disabled",void 0),Ve=ge([le("hm-select")],Ve);var Fe=class extends ne{constructor(...t){super(...t),this._isDragging=!1,this._startX=0,this._currentTranslate=0,this._prevTranslate=0,this._animationId=0,this._velocity=0,this._lastX=0,this._lastTime=0,this._isOpen=!1,this.rightButtonName="右侧按钮",this.rightButtonCallback=function(){},this.leftActionsWidth=0,this.rightActionsWidth=0,this.onDragStart=t=>{this.startDrag(t.clientX),this.sliderElement.style.cursor="grabbing",this.sliderElement.style.transition="none"},this.onTouchStart=t=>{this.startDrag(t.touches[0].clientX),this.sliderElement.style.transition="none"},this.startDrag=t=>{this._isDragging=!0,this._startX=t,this._lastX=t,this._lastTime=Date.now(),this._isOpen=Math.abs(this._prevTranslate)>10,this.calculateActionWidths()},this.onDragMove=t=>{this._isDragging&&(t.preventDefault(),t.stopPropagation(),this.handleMove(t.clientX))},this.onTouchMove=t=>{this._isDragging&&(t.preventDefault(),t.stopPropagation(),this.handleMove(t.touches[0].clientX))},this.onDragEnd=()=>{this.finishDrag(),this.sliderElement.style.cursor="grab"},this.onTouchEnd=()=>{this.finishDrag()}}static{this.styles=et`
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
    `}firstUpdated(){this.calculateActionWidths(),this.addEventListeners()}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListeners()}calculateActionWidths(){this.leftActionsWidth=this.leftActions?this.leftActions.offsetWidth:0,this.rightActionsWidth=this.rightActions?this.rightActions.offsetWidth:0}addEventListeners(){this.sliderElement.addEventListener("mousedown",this.onDragStart),this.sliderElement.addEventListener("touchstart",this.onTouchStart,{passive:!1}),document.addEventListener("mousemove",this.onDragMove),document.addEventListener("touchmove",this.onTouchMove,{passive:!1}),document.addEventListener("mouseup",this.onDragEnd),document.addEventListener("touchend",this.onTouchEnd)}removeEventListeners(){this.sliderElement.removeEventListener("mousedown",this.onDragStart),this.sliderElement.removeEventListener("touchstart",this.onTouchStart),document.removeEventListener("mousemove",this.onDragMove),document.removeEventListener("touchmove",this.onTouchMove),document.removeEventListener("mouseup",this.onDragEnd),document.removeEventListener("touchend",this.onTouchEnd)}handleMove(t){const e=Date.now(),i=e-this._lastTime;i>0&&(this._velocity=(t-this._lastX)/i,this._lastX=t,this._lastTime=e);const o=t-this._startX;let s=this._prevTranslate+o;if(s>this.leftActionsWidth){const t=s-this.leftActionsWidth;s=this.leftActionsWidth+this.easeOut(t,30)}else if(s<-this.rightActionsWidth){const t=s+this.rightActionsWidth;s=-this.rightActionsWidth+this.easeOut(t,30)}this._currentTranslate=s,this.updateSliderPosition()}easeOut(t,e){return.2*t}finishDrag(){this._isDragging=!1,this.sliderElement.style.transition="transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)";let t=0;if(t=this._currentTranslate>5||this._currentTranslate>0&&this._velocity>.1?this.leftActionsWidth:this._currentTranslate<-5||this._currentTranslate<0&&this._velocity<-.1?-this.rightActionsWidth:0,this._isOpen){const e=5;t=this._prevTranslate>0&&this._currentTranslate<this._prevTranslate-e||this._prevTranslate<0&&this._currentTranslate>this._prevTranslate+e?0:this._prevTranslate}this._currentTranslate=t,this._prevTranslate=t,this.updateSliderPosition(),this._velocity=0}updateSliderPosition(){this._animationId&&cancelAnimationFrame(this._animationId),this._animationId=requestAnimationFrame(()=>{if(this.sliderElement.style.transform=`translateX(${this._currentTranslate}px)`,this._currentTranslate>0){const t=Math.min(this._currentTranslate/this.leftActionsWidth,1);this.leftActions.style.transform=`translateX(${100*t-100}%)`,this.rightActions.style.transform="translateX(100%)"}else if(this._currentTranslate<0){const t=Math.min(-this._currentTranslate/this.rightActionsWidth,1);this.rightActions.style.transform=`translateX(${100-100*t}%)`,this.leftActions.style.transform="translateX(-100%)"}else this.leftActions.style.transform="translateX(-100%)",this.rightActions.style.transform="translateX(100%)"})}render(){return Nt`
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
`}};ge([he()],Fe.prototype,"_isDragging",void 0),ge([he()],Fe.prototype,"_startX",void 0),ge([he()],Fe.prototype,"_currentTranslate",void 0),ge([he()],Fe.prototype,"_prevTranslate",void 0),ge([he()],Fe.prototype,"_animationId",void 0),ge([he()],Fe.prototype,"_velocity",void 0),ge([he()],Fe.prototype,"_lastX",void 0),ge([he()],Fe.prototype,"_lastTime",void 0),ge([he()],Fe.prototype,"_isOpen",void 0),ge([he()],Fe.prototype,"rightButtonName",void 0),ge([he()],Fe.prototype,"rightButtonCallback",void 0),ge([pe(".slider")],Fe.prototype,"sliderElement",void 0),ge([pe(".content")],Fe.prototype,"contentElement",void 0),ge([pe(".left-actions")],Fe.prototype,"leftActions",void 0),ge([pe(".right-actions")],Fe.prototype,"rightActions",void 0),Fe=ge([le("hm-swipe-cell")],Fe);var qe=class extends ne{constructor(...t){super(...t),this.checked=!1,this.disabled=!1,this.loading=!1,this.color="#1890ff",this.openContent="",this.closeContent="",this.openIcon="",this.closeIcon=""}change(){this.disabled||this.loading||(this.checked=!this.checked,this.dispatchEvent(new CustomEvent("hm-switch-change",{detail:{checked:this.checked},bubbles:!0,composed:!0})))}render(){return Nt`
<div
  class="switch ${this.disabled?"disabled":""} ${this.loading?"loading":""} ${this.checked?"checked":""}"
  @click="${this.change}"
  style="--switch-color: ${this.color}"
>
  <div class="switch-inner">
    ${this.checked?this.openIcon?Nt`<hm-icon icon="${this.openIcon}" size="14px"></hm-icon>`:this.openContent?Nt`<span>${this.openContent}</span>`:"":this.closeIcon?Nt`<hm-icon icon="${this.closeIcon}" size="14px"></hm-icon>`:this.closeContent?Nt`<span>${this.closeContent}</span>`:""}
  </div>
</div>
        `}static{this.styles=et`
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
    `}};ge([he({type:Boolean})],qe.prototype,"checked",void 0),ge([he({type:Boolean})],qe.prototype,"disabled",void 0),ge([he({type:Boolean})],qe.prototype,"loading",void 0),ge([he({type:String})],qe.prototype,"color",void 0),ge([he({type:String,attribute:"open-content"})],qe.prototype,"openContent",void 0),ge([he({type:String,attribute:"close-content"})],qe.prototype,"closeContent",void 0),ge([he({type:String,attribute:"open-icon"})],qe.prototype,"openIcon",void 0),ge([he({type:String,attribute:"close-icon"})],qe.prototype,"closeIcon",void 0),qe=ge([le("hm-switch")],qe);var Re=class extends ne{constructor(...t){super(...t),this.maxHeight="500px",this.items=[],this.titleContent="标题内容",this.expanded=!1}static{this.styles=et`
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
  `}togglePanel(){this.expanded=!this.expanded}render(){return Nt`
      <div class="accordion-container" style="max-height: ${this.maxHeight}">
        <div class="accordion-header" @click=${this.togglePanel}>
          <slot name="header">${this.titleContent}</slot>
          <div class="accordion-toggle">
            ${this.expanded?Nt`<hm-icon icon="arrow-up"></hm-icon>`:Nt`<hm-icon icon="arrow-down"></hm-icon>`}
          </div>
        </div>
        
        <div class="accordion-content" ?hidden=${!this.expanded}>
          ${this.items.length>0?this.items.map(t=>Nt`<div class="accordion-item">${t}</div>`):Nt`<slot></slot>`}
        </div>
        
        <div class="accordion-footer" ?hidden=${!this.expanded}>
          <slot name="footer">
            <hm-button @hm-button-click="${()=>{this.expanded=!1}}">关闭</hm-button>
          </slot>
        </div>
      </div>
    `}};ge([he({type:String,attribute:"max-height"})],Re.prototype,"maxHeight",void 0),ge([he({type:Array})],Re.prototype,"items",void 0),ge([he({type:String,attribute:"title-content"})],Re.prototype,"titleContent",void 0),ge([he({type:Boolean})],Re.prototype,"expanded",void 0),Re=ge([le("hm-accordion")],Re);var We=class extends ne{constructor(...t){super(...t),this.type="text",this.icon="",this.label="输入框",this.placeholder="",this.disabled=!1,this.readonly=!1,this.value=""}static{this.styles=et`
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
`}_handleKeyDown(t){t.stopPropagation()}_handleInput(t){const e=t.target;this.value=e.value,this.requestUpdate("value",this.value),this.dispatchEvent(new CustomEvent("hm-input-change",{detail:{value:this.value},bubbles:!0,composed:!0}))}render(){return Nt`
<div class="input-container">
  <span class="label">${this.label}</span>
  ${this.icon?Nt`<hm-icon icon="${this.icon}" class="icon"></hm-icon>`:""}
  <input 
    type="${this.type}"
    .value="${this.value}"
    ?disabled="${this.disabled}"
    ?readonly="${this.readonly}"
    placeholder="${this.placeholder}"
    style="padding-left: ${this.icon?"24px":"8px"};"
    @keydown="${this._handleKeyDown}"
    @input="${this._handleInput}"
  />
  <slot name="right">
  </slot>
</div>
    `}};ge([he({type:String})],We.prototype,"type",void 0),ge([he({type:String})],We.prototype,"icon",void 0),ge([he({type:String})],We.prototype,"label",void 0),ge([he({type:String})],We.prototype,"placeholder",void 0),ge([he({type:Boolean,reflect:!0})],We.prototype,"disabled",void 0),ge([he({type:Boolean,reflect:!0})],We.prototype,"readonly",void 0),ge([he({type:String,reflect:!0})],We.prototype,"value",void 0),We=ge([le("hm-input")],We);var Xe=class extends ne{constructor(...t){super(...t),this.isOpen=!1,this.dialog=this}static{this.styles=et`
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
    `}open(){this.isOpen=!0,this.dispatchEvent(new CustomEvent("hm-dialog-open"))}close(){this.isOpen=!1,this.dispatchEvent(new CustomEvent("hm-dialog-close"))}confirm(){this.close(),this.dispatchEvent(new CustomEvent("hm-dialog-confirm"))}cancel(){this.close(),this.dispatchEvent(new CustomEvent("hm-dialog-cancel"))}updated(t){t.has("isOpen")&&(this.isOpen?this.style.display="block":this.style.display="none")}render(){return Nt`
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
    `}};ge([he({type:Boolean,attribute:"isopen"})],Xe.prototype,"isOpen",void 0),Xe=ge([le("hm-dialog")],Xe);var Ge=i({HmAccordion:()=>Re,HmButton:()=>Ee,HmCell:()=>Le,HmDialog:()=>Xe,HmIcon:()=>He,HmInput:()=>We,HmMenu:()=>Ce,HmMovePanel:()=>ve,HmNotification:()=>Ae,HmSelect:()=>Ve,HmSwipeCell:()=>Fe,HmSwitch:()=>qe,getIcon:()=>_e,iconMap:()=>Se,movePanelItemList:()=>ue,movePanelItemMaxZindex:()=>me,registerIcon:()=>ke}),Je=i({HmDialogApp:()=>Ke,dialogApp:()=>Ze,initDialogApp:()=>Ye}),Ke=class extends ne{constructor(...t){super(...t),this.dialogOpen=!1,this.message="请做出选择",this.closeCallback=null,this.cancelCallback=null,this.confirmCallback=null}handelClick(){this.dispatchEvent(new CustomEvent("hmclick"))}static{this.styles=et`
`}render(){return Nt`
<hm-dialog
  ?isopen="${this.dialogOpen}"
  @hm-dialog-close="${()=>{this.dialogOpen=!1}}"
  @hm-dialog-cancel="${()=>{this.cancelCallback&&this.cancelCallback()}}"
  @hm-dialog-confirm="${()=>{this.confirmCallback&&this.confirmCallback()}}"
>
  <p>${this.message}</p>
</hm-dialog>
        `}};ge([he({type:Boolean})],Ke.prototype,"dialogOpen",void 0),ge([he({type:String})],Ke.prototype,"message",void 0),ge([he({type:Function})],Ke.prototype,"closeCallback",void 0),ge([he({type:Function})],Ke.prototype,"cancelCallback",void 0),ge([he({type:Function})],Ke.prototype,"confirmCallback",void 0);var Ze=document.createElement("hm-dialog-app");async function Ye(){customElements.define("hm-dialog-app",Ke),Ze.dialogOpen=!1,Ze.message="请做出选择",Ze.closeCallback=null,Ze.cancelCallback=null,Ze.confirmCallback=null,R.dialogHolder.append(Ze)}var Qe={notice:{success(t,e,i=3e3){let o=document.createElement("hm-notification");o.title=t,o.content=e,o.displayTime=i,o.backgroundColor="rgba(57, 231, 34, 0.7)",o.color="rgb(255,255,255)",R.notificationHolder.append(o)},warning(t,e,i=3e3){let o=document.createElement("hm-notification");o.title=t,o.content=e,o.displayTime=i,o.backgroundColor="rgba(255,193,7,0.7)",o.color="rgb(255,255,255)",R.notificationHolder.append(o)},error(t,e,i=3e3){let o=document.createElement("hm-notification");o.title=t,o.content=e,o.displayTime=i,o.backgroundColor="rgba(255,0,0,0.7)",o.color="rgb(255,255,255)",R.notificationHolder.append(o)},normal(t,e,i=3e3){let o=document.createElement("hm-notification");o.title=t,o.content=e,o.displayTime=i,o.backgroundColor="rgba(33,33,33,0.7)",o.color="rgb(255,255,255)",R.notificationHolder.append(o)}},confirm(t,e,i,o){Ze.message=t,Ze.confirmCallback=e||null,Ze.cancelCallback=i||null,Ze.closeCallback=o||null,Ze.dialogOpen=!0,console.debug("弹窗已打开",Ze)}},ti="hm-script-app",ei=class extends ne{constructor(){super(),this.scriptName="",this.scriptUrl="",this.scriptEnable=!0,this.scriptinjected=!1,this.dialogOpen=!1,this.isUpdate=!1,this.storeSnap=U.reactive.snapshot(U.HortimagicStore),U.reactive.subscribe(U.HortimagicStore,()=>{this.storeSnap=U.reactive.snapshot(U.HortimagicStore),this.requestUpdate()})}render(){return Nt`
<hm-dialog ?isopen="${this.dialogOpen}"
  @hm-dialog-close="${()=>{this.dialogOpen=!1,this.isUpdate=!1}}"
  @hm-dialog-confirm="${()=>{if(""==this.scriptName.trim()||""==this.scriptUrl.trim())return void Qe.notice.error(ti,"请填写完整的脚本信息");this.scriptEnable=!0,this.scriptinjected=!1;let t=new X(this.scriptName,this.scriptUrl,this.scriptEnable),e=!1;e=this.isUpdate?G.updateScriptInList(t):G.addScriptToList(t),e?Qe.notice.success(ti,"脚本添加成功"):Qe.notice.error(ti,"脚本添加失败"),this.isUpdate=!1,this.dialogOpen=!1,this.storeSnap=U.reactive.snapshot(U.HortimagicStore)}}"
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
    ${this.storeSnap.scriptList.map(t=>Nt`
    <hm-swipe-cell>
      <div slot="left-actions">
        <hm-button
          icon="delete"
          @hm-button-click="${()=>{G.removeScriptFromList(t)?Qe.notice.success(ti,"脚本删除成功"):Qe.notice.error(ti,"脚本已经不在脚本列表中"),this.storeSnap=U.reactive.snapshot(U.HortimagicStore)}}"
          >删除</hm-button
        >
      </div>
      <hm-cell title-name="${t.name}" descripthion="${t.url}">
        <hm-switch
          ?checked="${t.enable}"
          @hm-switch-change="${e=>{let i=new X(t.name,t.url,e.detail.checked);G.updateScriptInList(i)?Qe.notice.success(ti,"脚本修改成功"):Qe.notice.error(ti,"脚本修改失败"),this.storeSnap=U.reactive.snapshot(U.HortimagicStore)}}"
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
          ?enable="${!G.injectedUrlList.includes(t.url)}"
          @hm-button-click="${()=>{G.injecteScript(t)?Qe.notice.success(ti,"脚本运行成功"):Qe.notice.error(ti,"脚本运行失败,脚本已经在运行了"),this.storeSnap=U.reactive.snapshot(U.HortimagicStore)}}"
          >运行</hm-button
        >
      </div>
    </hm-swipe-cell>
    `)}
    <div slot="footer">
      <hm-button
        icon="refresh"
        @click="${()=>{U.loadStore(),this.storeSnap=U.reactive.snapshot(U.HortimagicStore)}}"
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
        @click="${()=>{U.saveStore()}}">
            保存
        </hm-button>
    </div>
</hm-accordion>`}};ge([he({type:String})],ei.prototype,"scriptName",void 0),ge([he({type:String})],ei.prototype,"scriptUrl",void 0),ge([he({type:Boolean})],ei.prototype,"scriptEnable",void 0),ge([he({type:Boolean})],ei.prototype,"scriptinjected",void 0),ge([he({type:Boolean})],ei.prototype,"dialogOpen",void 0);var{HortimagicStore:ii,saveStore:oi,loadStore:si,reactive:ni}=U,ri=class extends ne{constructor(...t){super(...t),this.storeSnap=ni.snapshot(ii)}static{this.styles=et`
        .config-item {
            margin: 10px 0;
        }
    `}render(){return Nt`
            <div class="config-item">
                <hm-cell title-name="自动保存设置" description="修改设置或脚本列表后，将自动保存设置。"> 
                    <hm-switch 
                        ?checked="${this.storeSnap.autoSave}"
                        @hm-switch-change="${t=>{ii.autoSave=t.detail.checked,oi()}}"
                    ></hm-switch>
                </hm-cell>
            </div>
            
            <div class="config-item">
                <hm-cell title-name="允许LOG输出" description="是否允许LOG级别的日志输出"> 
                    <hm-switch 
                        ?checked="${this.storeSnap.logFlag.log}"
                        @hm-switch-change="${t=>{ii.logFlag.log=t.detail.checked}}"
                    ></hm-switch>
                </hm-cell>
            </div>
            
            <div class="config-item">
                <hm-cell title-name="允许INFO输出" description="是否允许INFO级别的日志输出"> 
                    <hm-switch 
                        ?checked="${this.storeSnap.logFlag.info}"
                        @hm-switch-change="${t=>{ii.logFlag.info=t.detail.checked}}"
                    ></hm-switch>
                </hm-cell>
            </div>
            
            <div class="config-item">
                <hm-cell title-name="允许DEBUG输出" description="是否允许DEBUG级别的日志输出"> 
                    <hm-switch 
                        ?checked="${this.storeSnap.logFlag.debug}"
                        @hm-switch-change="${t=>{ii.logFlag.debug=t.detail.checked}}"
                    ></hm-switch>
                </hm-cell>
            </div>
            
            <div class="config-item">
                <hm-cell title-name="允许WARN输出" description="是否允许WARN级别的日志输出"> 
                    <hm-switch 
                        ?checked="${this.storeSnap.logFlag.warn}"
                        @hm-switch-change="${t=>{ii.logFlag.warn=t.detail.checked}}"
                    ></hm-switch>
                </hm-cell>
            </div>
            
            <div class="config-item">
                <hm-cell title-name="允许ERROR输出" description="是否允许ERROR级别的日志输出"> 
                    <hm-switch 
                        ?checked="${this.storeSnap.logFlag.error}"
                        @hm-switch-change="${t=>{ii.logFlag.error=t.detail.checked}}"
                    ></hm-switch>
                </hm-cell>
            </div>
            <div class="config-item">
                <hm-cell title-name="发送日志" description="打印要发送的消息"> 
                    <hm-switch 
                        ?checked="${this.storeSnap.messageLogFlag.send}"
                        @hm-switch-change="${t=>{ii.messageLogFlag.send=t.detail.checked}}"
                    ></hm-switch>
                </hm-cell>
            </div>
            <div class="config-item">
                <hm-cell title-name="接收日志" description="打印接收到的消息"> 
                    <hm-switch 
                        ?checked="${this.storeSnap.messageLogFlag.receive}"
                        @hm-switch-change="${t=>{ii.messageLogFlag.receive=t.detail.checked}}"
                    ></hm-switch>
                </hm-cell>
            </div>
            <div class="config-item">
                <hm-cell title-name="解码日志" description="打印解码后的消息"> 
                    <hm-switch 
                        ?checked="${this.storeSnap.messageLogFlag.decode}"
                        @hm-switch-change="${t=>{ii.messageLogFlag.decode=t.detail.checked}}"
                    ></hm-switch>
                </hm-cell>
            </div>
            <div class="config-item">
                <hm-cell title-name="触发日志" description="打印要触发的消息"> 
                    <hm-switch 
                        ?checked="${this.storeSnap.messageLogFlag.emit}"
                        @hm-switch-change="${t=>{ii.messageLogFlag.emit=t.detail.checked}}"
                    ></hm-switch>
                </hm-cell>
            </div>
            
            <div class="config-item">
                    <hm-input
                        label="日志列表长度"
                        type="number"
                        .value="${this.storeSnap.logListLength}"
                        @hm-input-change="${t=>{const e=parseInt(t.detail.value)||100;ii.logListLength=e,j.logger.debug("log list length changed:",e)}}"
                    ></hm-input>
            </div>
`}};var li=class extends ne{constructor(){super(),this.logList=[],this.foldState=new Map,U.HortimagicStore.logListLength<1&&(U.HortimagicStore.logListLength=50),j.logEmitter.on("log",(...t)=>{this.pushLogEntry("log",...t)}),j.logEmitter.on("debug",(...t)=>{this.pushLogEntry("debug",...t)}),j.logEmitter.on("info",(...t)=>{this.pushLogEntry("info",...t)}),j.logEmitter.on("warn",(...t)=>{this.pushLogEntry("warn",...t)}),j.logEmitter.on("error",(...t)=>{this.pushLogEntry("error",...t)})}static{this.styles=et`
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
        cursor: text; /* 改变光标形状以表示可选择 */
        position: relative;
        display: block; /* 确保每条消息独占一行 */
        // 强制显示滚动条
        scrollbar-width: none; /* Firefox - 隐藏滚动条 */
        -ms-overflow-style: none; /* IE and Edge - 隐藏滚动条 */
        font-size: 14px; /* 调整消息字体大小 */
        line-height: 1.5; /* 调整行高 */
        background-color: #fff; /* 设置背景色 */
        padding: 5px; /* 添加内边距 */
        border-radius: 4px; /* 圆角 */
        white-space: nowrap; /* 防止文本换行 */
        text-overflow: ellipsis; /* 显示省略号 */
        user-select: text; /* 允许文本选择 */
        -webkit-user-select: text; /* Safari兼容 */
        -moz-user-select: text; /* Firefox兼容 */
        -ms-user-select: text; /* IE/Edge兼容 */
    }
    
    .message::-webkit-scrollbar { /* 隐藏Webkit浏览器的滚动条 */
        display: none;
    }
    
    .message.expanded {
        max-height: none;
        overflow-y: auto;
        overflow-x: hidden;
        white-space: normal; /* 展开时允许正常换行 */
        user-select: text; /* 允许文本选择 */
        -webkit-user-select: text; /* Safari兼容 */
        -moz-user-select: text; /* Firefox兼容 */
        -ms-user-select: text; /* IE/Edge兼容 */
    }
`}render(){return Nt`
            <div class="controls">
                <button class="clear-btn" @click="${this.clearLogs}">清空日志</button>
                <span>共 ${this.logList.length} 条日志</span>
            </div>
            <div class="log-container">
                ${this.logList.map(t=>{const e=`${t.timestamp.getTime()}-${t.level}`,i=this.foldState.get(e)??!1,o=t.message.map(t=>"object"==typeof t?JSON.stringify(t):String(t)).join(" "),s=o.length>100;return Nt`
                        <div class="log-entry">
                            <div class="log-header">
                                <span class="timestamp">${this.formatTime(t.timestamp)}</span>
                                <span class="level ${t.level}">[${t.level.toUpperCase()}]</span>
                            </div>
                            <div 
                                class="message ${i||!s?"expanded":"collapsed"}"
                                @click="${()=>this.toggleFold(e)}"
                            >
                                ${i||!s?o:o.substring(0,100)}
                            </div>
                        </div>
                    `})}
            </div>
        `}formatTime(t){return`${String(t.getHours()).padStart(2,"0")}:${String(t.getMinutes()).padStart(2,"0")}:${String(t.getSeconds()).padStart(2,"0")}.${String(t.getMilliseconds()).padStart(3,"0")}`}clearLogs(){this.logList=[],this.requestUpdate()}pushLogEntry(t,...e){for(;this.logList.length>=U.HortimagicStore.logListLength;)this.logList.shift();this.logList.push({timestamp:new Date,level:t,message:e}),this.requestUpdate()}toggleFold(t){const e=this.foldState.get(t)??!1;this.foldState.set(t,!e),this.requestUpdate()}};ge([he({type:Array})],li.prototype,"logList",void 0);var ai=i({init:()=>ci});async function ci(){try{U.initStore(),R.initNotificationHolder(),R.initDialogHolder(),await Ye(),R.initMenuHolder(),R.initMovePanelHolder(),Qe.notice.normal(o.name,"注入网络钩子函数"),await D.initSocket(),Qe.notice.normal(o.name,"注入钩子函数"),F.refreshAll(),F.initHooks(),Qe.notice.normal(o.name,"注入脚本"),G.injecteScriptList(),Qe.notice.normal(o.name,"生成菜单");let t=document.createElement("hm-menu");t.content="HortiMagic",t.isMenuItem=!1;let e=function(){customElements.define("hm-config-app",ri);let t=document.createElement("hm-move-panel");t.titleContent="设置",t.icon="config",t.leftButtonText="读取",t.leftIcon="load",t.addEventListener("left-button-click",function(){si()}),t.rightButtonText="保存",t.rightIcon="save",t.addEventListener("right-button-click",function(){oi()}),R.movePanelHolder.appendChild(t),t.innerHTML="\n        <hm-config-app></hm-config-app>\n    ";let e=document.createElement("hm-menu");return e.content="设置",e.isMenuItem=!0,e.icon="config",e.addEventListener("hm-menu-click",function(){t.putTopToggel()}),e}(),i=function(){customElements.define("hm-log-app",li);let t=document.createElement("hm-move-panel");t.titleContent="日志",t.icon="log",t.width=400,R.movePanelHolder.appendChild(t),t.innerHTML="<hm-log-app></hm-log-app>";let e=document.createElement("hm-menu");return e.content="日志",e.isMenuItem=!0,e.icon="log",e.addEventListener("hm-menu-click",function(){t.putTopToggel()}),e}(),s=function(){customElements.define("hm-script-app",ei);let t=document.createElement("hm-move-panel");t.titleContent="脚本管理",t.icon="js",t.leftButtonText="读取",t.leftIcon="load",t.addEventListener("left-button-click",function(){U.loadStore()}),t.rightButtonText="保存",t.rightIcon="save",t.addEventListener("right-button-click",function(){U.saveStore()}),R.movePanelHolder.appendChild(t),t.innerHTML="<hm-script-app> </hm-script-app>\n    ";let e=document.createElement("hm-menu");return e.content="脚本管理",e.isMenuItem=!0,e.icon="js",e.addEventListener("hm-menu-click",function(){t.putTopToggel()}),e}();t.addEventListener("hm-menu-click",function(){e.flag=t.flag,i.flag=t.flag,s.flag=t.flag}),R.menuHolder.append(t,e,i,s),Qe.notice.success(o.name,`${o.version} 已加载`)}catch(t){console.error(t)}}var hi=i({dialog_app:()=>Je,main_app:()=>ai}),{logger:di}=j,{confirm:pi,notice:gi}=Qe,ui={name:o.name,version:o.version,changelog:o.changelog,description:o.description,author:o.author,license:o.license,repository:o.repository,buildTime:"2026-07-28T20:01:14.832Z",injected:!1,messageDebug:!1};return async function(){await ci(),ui.injected=!0}(),Object.defineProperty(t,"apps",{enumerable:!0,get:function(){return hi}}),Object.defineProperty(t,"components",{enumerable:!0,get:function(){return Ge}}),t.confirm=pi,Object.defineProperty(t,"core",{enumerable:!0,get:function(){return J}}),t.easyTools=Qe,t.information=ui,t.logger=di,t.notice=gi,t}({});