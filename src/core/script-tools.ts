import { logTools } from "./log-tools";
import { store } from "./store";

const Tag = "script-tools";
/** 脚本类 */
export class Script {
    /** 名字 */
    name: string;
    /** 唯一链接 */
    url: string;
    /** 是否启用,默认启用 */
    enable: boolean;
    constructor(
        name: string,
        url: string,
        enable: boolean = true,
    ) {
        this.name = name;
        this.url = url;
        this.enable = enable;
    }
}

/**
 * 脚本工具
 */
export const scriptTools = {
    /** 已经注入的脚本列表 */
    injectedUrlList: [] as string[],

    /** 添加脚本到列表
     * @param script 脚本对象
     * @returns 是否添加成功
     */
    addScriptToList(script: Script) {
        logTools.logger.debug(Tag, `添加${script.name},${script.url}`);
        /** 如果脚本的URL或名称已经存在,则不添加 */
        if (scriptTools.findScriptByUrl(script.url) >= 0 || scriptTools.findScriptByName(script.name) >= 0) {
            logTools.logger.warn(Tag, `脚本${script.name}${script.url}已经存在`);
            // store.HortimagicStore.scriptList.push(script);
            return false;
        } else {
            store.HortimagicStore.scriptList.push(script);
            return true;
        }
    },

    updateScriptInList(script: Script) {
        logTools.logger.debug(Tag, `更新脚本${script.name}${script.url}`);
        for (let i = 0; i < store.HortimagicStore.scriptList.length; i++) {
            if (store.HortimagicStore.scriptList[i].name === script.name) {
                store.HortimagicStore.scriptList[i] = script;
                return true;
                break;
            }
            if (store.HortimagicStore.scriptList[i].url === script.url) {
                store.HortimagicStore.scriptList[i] = script;
                return true;
                break;
            }
        }
        return false;
    },

    removeScriptFromList(script: Script) {
        logTools.logger.debug(Tag, `删除${script.name},${script.url}`);
        let index = scriptTools.findScriptByName(script.name);
        if (index >= 0) {
            store.HortimagicStore.scriptList.splice(index, 1);
            return true;
        } else {
            index = scriptTools.findScriptByUrl(script.url);
            if (index >= 0) {
                store.HortimagicStore.scriptList.splice(index, 1);
                return true;
            }
        }
        return false;

    },

    findScriptByUrl(url: string): number {
        for (let i = 0; i < store.HortimagicStore.scriptList.length; i++) {
            if (store.HortimagicStore.scriptList[i].url == url) {
                return i;
            }
        }
        return -1;
    },

    findScriptByName(name: string): number {
        for (let i = 0; i < store.HortimagicStore.scriptList.length; i++) {
            if (store.HortimagicStore.scriptList[i].name == name) {
                return i;
            }
        }
        return -1;
    },

    clearScriptList() {
        store.HortimagicStore.scriptList = [];
    },

    /** 注入脚本,不论它是否使能
     * @param script 脚本对象
     */
    injecteScript(script: Script) {
        if (scriptTools.injectedUrlList.includes(script.url)) {
            logTools.logger.warn(Tag, `脚本${script.name}${script.url}已经注入`);
            return false;
        } else {
            const scriptElement = document.createElement("script");
            scriptElement.src = script.url;
            document.body.appendChild(scriptElement);
            scriptTools.injectedUrlList.push(script.url);
            logTools.logger.debug(Tag, `注入${script.name}`);
            return true;
        }
    },
    /**
     * 注入脚本列表
     */
    injecteScriptList() {
        store.HortimagicStore.scriptList.forEach((script) => {
            if (script.enable && !scriptTools.injectedUrlList.includes(script.url)) {
                scriptTools.injecteScript(script);
            }
        });
    }

}