/**
 * 脚本类
 */
class Script {
    /** 名字 */
    name: string;
    /** 唯一链接 */
    url: string;
    /** 是否启用,默认启用 */
    enable: boolean;
    /** 是否已经注入,手动修改 */
    ingected: boolean;
    constructor(
        name: string,
        url: string,
        enable: boolean = true,
        ingected: boolean = false
    ) {
        this.name = name;
        this.url = url;
        this.enable = enable;
        this.ingected = ingected;
    }
}
/** 脚本列表 */
let scriptList: Script[] = [];

/**
 * 向列表加入一个脚本，具有唯一性,名字或链接一样的话就覆盖
 * @param script 要添加的脚本对象
 * @returns 是否添加成功
 */
function addScriptToList(script: Script) {
    if (script.name == '' || script.url == '') {
        _alert("脚本名字或链接不能为空");
        return false;
    }
    /** 遍历列表中是否已经有了,
     * 有了就直接覆盖，
     * 否则就新增一个
     */
    for (let s of scriptList) {
        if (s.name === script.name) {
            s.url = script.url;
            s.enable = script.enable;
            s.ingected = script.ingected;
            // _alert(`脚本 ${script.name}已经存在，已覆盖`);
            return false;
        }
        if (s.url === script.url) {
            s.name = script.name;
            s.enable = script.enable;
            s.ingected = script.ingected;
            // _alert(`脚本 ${script.url}已经存在，已覆盖`);
            return false;
        }
    }
    scriptList.push(script);
    return true;
}
/** 从列表中移除一个脚本
 * @param script 要移除的脚本对象
 */
function removeScriptFromList(script: Script) {
    scriptList = scriptList.filter(s => s.name !== script.name && s.url !== script.url);
}
/**
 * 注入一个JS脚本
 * @param script 要注入的脚本对象
 */
function injectScript(script: Script) {
    if (script.ingected) {
        _alert(`脚本 ${script.name} 已经注入`);
        return script.ingected;
    }
    const scriptElement = document.createElement('script');
    scriptElement.src = script.url;
    scriptElement.onload = () => {
        _alert(`脚本 ${script.name} 注入成功`);
        script.ingected = true;
    };
    scriptElement.onerror = () => {
        _alert(`脚本 ${script.name} 注入失败`);
        script.enable = false;
    };
    document.head.appendChild(scriptElement);
    return script.ingected;
}
/**
 * 注入一组JS脚本
 * @param list 脚本列表
 */
function injectScriptList(list: Script[]) {
    for (let script of list) {
        if (script.enable && !script.ingected) {
            injectScript(script);
        }
    }
}
/**
 * 读取本地存储的脚本列表
 */
function readScriptList() {
    let temp = localStorage.getItem("hortiMagicScriptList");
    scriptList = temp == null ? [] : JSON.parse(temp);
    for (let script of scriptList) {
        script.ingected = false;
    }
}
/**
 * 保存脚本列表到本地存储
 */
function saveScriptList() {
    localStorage.setItem("hortiMagicScriptList", JSON.stringify(scriptList));
    _alert("脚本列表已保存");
}
/**
 * 读取本地脚本列表并注入
 */
function ingectlocalScript() {
    readScriptList();
    injectScriptList(scriptList);
}
export {
    Script,
    scriptList,
    addScriptToList,
    removeScriptFromList,
    injectScript,
    injectScriptList,
    readScriptList,
    saveScriptList,
    ingectlocalScript
};