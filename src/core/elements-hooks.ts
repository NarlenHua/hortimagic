import { logTools } from "./log-tools";
const Tag = "elements-hooks";

/**
 * dom元素和注入的hook函数
 */
export const elementsHooks = {
  /** 原来界面的元素 */
  elements: {
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
  },

  /**
   * 更新一些element
   */
  refreshAll() {
    elementsHooks.elements.movePanelHolder = document.querySelector("#movePanelHolder");
    elementsHooks.elements.functionHolder = document.querySelector("#functionHolder");
    elementsHooks.elements.functionButtonGroupList = [
      ...document.querySelectorAll(".functionButton.functionButtonGroup"),
    ];
    elementsHooks.elements.msgholderBox = document.querySelector(
      `#msgholder .fullBox .fullBox.msgholderBox`
    );
    elementsHooks.elements.homeHolderMsgBox = document.querySelector(
      `#homeHolder .homeHolderMsgContentBox .homeHolderMsgBox.fullBox`
    );
    elementsHooks.elements.sessionHolderPmTaskBoxItems = [
      ...document.querySelectorAll(`.sessionHolderPmTaskBoxItem.whoisTouch2`),
    ];

    elementsHooks.elements.moveinputDisplay = document.querySelector("#moveinputDisplay");

    elementsHooks.elements.moveinput = document.getElementById("moveinput");

    elementsHooks.elements.moveinputSendBtnFunc = document.querySelector(
      "#moveinputDisplay #moveinputSendBtnFunc"
    );

    elementsHooks.elements.moveinputSendBtnSend = document.querySelector(
      "#moveinputDisplay #moveinputSendBtnSend"
    );
  },
  /** 钩子函数 */
  Hooks: {
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
        let temp = (elementsHooks.elements.moveinput as HTMLTextAreaElement).oninput;
        (elementsHooks.elements.moveinput as HTMLTextAreaElement).oninput = function () {
          // logger.log('监测到改变', (elementsHooks.elements.moveinput as HTMLTextAreaElement).value);
          if (elementsHooks.Hooks.elementHooks.moveinput.oninputBefore() == true) {
            // @ts-ignore
            temp?.call(elementsHooks.elements.moveinput);
            elementsHooks.Hooks.elementHooks.moveinput.oninputAfter();
          }
        };
      } catch (error) {
        logTools.logger.error(Tag, error);
      }
      try {
        let temp = (elementsHooks.elements.moveinput as HTMLTextAreaElement).oninput;
        (elementsHooks.elements.moveinput as HTMLTextAreaElement).onblur = function () {
          // logger.log('element-hooks', '失去焦点');
          if (elementsHooks.Hooks.elementHooks.moveinput.onblurBefore() == true) {
            // @ts-ignore
            temp?.call(elementsHooks.elements.moveinput);
            elementsHooks.Hooks.elementHooks.moveinput.onblurAfter();
          }
        };
      } catch (error) {
        logTools.logger.error(Tag, error);
      }
      try {
        let temp = (elementsHooks.elements.moveinput as HTMLTextAreaElement).oninput;
        (elementsHooks.elements.moveinput as HTMLTextAreaElement).onfocus = function () {
          // logger.log('获得焦点');
          if (elementsHooks.Hooks.elementHooks.moveinput.onfocusBefore() == true) {
            // @ts-ignore
            temp?.call(elementsHooks.elements.moveinput);
            elementsHooks.Hooks.elementHooks.moveinput.onfocusAfter();
          }
        };
      } catch (error) {
        logTools.logger.error(Tag, error);
      }
    },
    replaceButtonProcesser: () => {
      try {
        let temp = buttonProcesser;
        buttonProcesser = (e, s, t, r) => {
          // logger.log('按键处理', e, s, t, r);
          if (elementsHooks.Hooks.functionHooks.processer.onBefore(e, s, t, r) == true) {
            temp(e, s, t, r);
            elementsHooks.Hooks.functionHooks.processer.onAfter(e, s, t, r);
          }
        };
      } catch (error) {
        logTools.logger.error(Tag, error);
      }
    },
  },
  /**
   * 注入钩子函数
   */
  initHooks() {
    elementsHooks.Hooks.replaceMoveinput();
    elementsHooks.Hooks.replaceButtonProcesser();
  }
}