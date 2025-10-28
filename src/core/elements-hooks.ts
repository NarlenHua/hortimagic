/** 原来界面的元素 */
let elements = {
  /** 移动窗口父元素,移动窗口容器 */
  movePanelHolder: document.querySelector("#movePanelHolder"),
  /** 侧边菜单按钮 */
  functionHolder: document.querySelector("#functionHolder"),
  /** 侧边菜单按钮列表 */
  functionButtonGroupList: [
    ...document.querySelectorAll(".functionButton.functionButtonGroup"),
  ],
  /** 主消息列表的父元素 */
  msgholderBox: document.querySelector("#msgholder .fullBox.msgholderBox"),
  /** home界面的消息列表父元素 */
  homeHolderMsgBox: document.querySelector(
    `#homeHolder .homeHolderMsgContentBox .homeHolderMsgBox.fullBox`
  ),
  /** 最近会话列表 */
  sessionHolderPmTaskBoxItems: [
    ...document.querySelectorAll(`.sessionHolderPmTaskBoxItem.whoisTouch2`),
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
  ),
};

/**
 * 更新一些element
 */
function refreshAll() {
  elements.movePanelHolder = document.querySelector("#movePanelHolder");
  elements.functionHolder = document.querySelector("#functionHolder");
  elements.functionButtonGroupList = [
    ...document.querySelectorAll(".functionButton.functionButtonGroup"),
  ];
  elements.msgholderBox = document.querySelector(
    `#msgholder .fullBox .fullBox.msgholderBox`
  );
  elements.homeHolderMsgBox = document.querySelector(
    `#homeHolder .homeHolderMsgContentBox .homeHolderMsgBox.fullBox`
  );
  elements.sessionHolderPmTaskBoxItems = [
    ...document.querySelectorAll(`.sessionHolderPmTaskBoxItem.whoisTouch2`),
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
/** 钩子函数 */
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
      },
    },
  },
  functionHooks: {
    processer: {
      // @ts-ignore
      onBefore: (e: any, s: any, t: any, r: any) => {
        return true;
      },
      // @ts-ignore
      onAfter: (e: any, s: any, t: any, r: any) => {
        return true;
      },
    },
  },

  replaceMoveinput: () => {
    try {
      let temp = (elements.moveinput as HTMLTextAreaElement).oninput;
      (elements.moveinput as HTMLTextAreaElement).oninput = function () {
        // console.log('监测到改变', (elements.moveinput as HTMLTextAreaElement).value);
        if (Hooks.elementHooks.moveinput.oninputBefore() == true) {
          // @ts-ignore
          temp?.call(elements.moveinput);
          Hooks.elementHooks.moveinput.oninputAfter();
        }
      };
    } catch (error) {
      console.error("替换错误", error);
    }
    try {
      let temp = (elements.moveinput as HTMLTextAreaElement).oninput;
      (elements.moveinput as HTMLTextAreaElement).onblur = function () {
        // console.log('失去焦点');
        if (Hooks.elementHooks.moveinput.onblurBefore() == true) {
          // @ts-ignore
          temp?.call(elements.moveinput);
          Hooks.elementHooks.moveinput.onblurAfter();
        }
      };
    } catch (error) {
      console.error("替换错误", error);
    }
    try {
      let temp = (elements.moveinput as HTMLTextAreaElement).oninput;
      (elements.moveinput as HTMLTextAreaElement).onfocus = function () {
        // console.log('获得焦点');
        if (Hooks.elementHooks.moveinput.onfocusBefore() == true) {
          // @ts-ignore
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
      buttonProcesser = (e, s, t, r) => {
        // console.log('按键处理', e, s, t, r);
        if (Hooks.functionHooks.processer.onBefore(e, s, t, r) == true) {
          temp(e, s, t, r);
          Hooks.functionHooks.processer.onAfter(e, s, t, r);
        }
      };
    } catch (error) {
      console.error("替换错误", error);
    }
  },
};
/**
 * 注入钩子函数
 */
function initHooks() {
  console.log("增加钩子函数");
  Hooks.replaceMoveinput();
  Hooks.replaceButtonProcesser();
}
export { elements, refreshAll, Hooks, initHooks };
