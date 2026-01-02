import { logger } from "./log-tools";
import { HortimagicStore } from "./store";

const Tag = "script-tools";
export const ingectedUrlList: string[] = [];
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

/** 添加脚本到列表
 * @param script 脚本对象
 * @returns 是否添加成功
 */
export function addScriptToList(script: Script) {
    logger.debug(Tag, `添加${script.name},${script.url}`);
    /** 如果脚本的URL或名称已经存在,则不添加 */
    if (findScriptByUrl(script.url) >= 0 || findScriptByName(script.name) >= 0) {
        logger.warn(Tag, `脚本${script.name}${script.url}已经存在`);
        // HortimagicStore.scriptList.push(script);
        return false;
    } else {
        HortimagicStore.scriptList.push(script);
        return true;
    }
}

export function updateScriptInList(script: Script) {
    logger.debug(Tag, `更新脚本${script.name}${script.url}`);
    for (let i = 0; i < HortimagicStore.scriptList.length; i++) {
        if (HortimagicStore.scriptList[i].name === script.name) {
            HortimagicStore.scriptList[i] = script;
            return true;
            break;
        }
        if (HortimagicStore.scriptList[i].url === script.url) {
            HortimagicStore.scriptList[i] = script;
            return true;
            break;
        }
    }
    return false;
}

export function removeScriptFromList(script: Script) {
    logger.debug(Tag, `删除${script.name},${script.url}`);
    let index = findScriptByName(script.name);
    if (index >= 0) {
        HortimagicStore.scriptList.splice(index, 1);
        return true;
    } else {
        index = findScriptByUrl(script.url);
        if (index >= 0) {
            HortimagicStore.scriptList.splice(index, 1);
            return true;
        }
    }
    return false;

}

export function findScriptByUrl(url: string): number {
    for (let i = 0; i < HortimagicStore.scriptList.length; i++) {
        if (HortimagicStore.scriptList[i].url == url) {
            return i;
        }
    }
    return -1;
}

export function findScriptByName(name: string): number {
    for (let i = 0; i < HortimagicStore.scriptList.length; i++) {
        if (HortimagicStore.scriptList[i].name == name) {
            return i;
        }
    }
    return -1;
}

export function clearScriptList() {
    HortimagicStore.scriptList = [];
}

/** 注入脚本,不论它是否使能
 * @param script 脚本对象
 */
export function ingecteScript(script: Script) {
    if (ingectedUrlList.includes(script.url)) {
        logger.warn(Tag, `脚本${script.name}${script.url}已经注入`);
        return false;
    } else {
        const scriptElement = document.createElement("script");
        scriptElement.src = script.url;
        document.body.appendChild(scriptElement);
        ingectedUrlList.push(script.url);
        logger.debug(Tag, `注入${script.name}`);
        return true;
    }
}

export function ingecteScriptList() {
    HortimagicStore.scriptList.forEach((script) => {
        if (script.enable && !ingectedUrlList.includes(script.url)) {
            ingecteScript(script);
        }
    });
}