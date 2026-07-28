import { elementsHooks } from "../core/elements-hooks";
import { socketTools } from "../core/socket-tools";
import { scriptTools } from "../core/script-tools";
// import { initMenuHolder, menuHolder } from "../holders/menu";
// import { initMovePanelHolder } from "../holders/move-panel";
// import { initNotificationHolder } from "../holders/notification";
// import { initDialogHolder } from "../holders/dialog";
import { holders } from "../core/holders";
import { initScriptApp } from "./script-app";
import pkg from '../../package.json' with { type: 'json' };
import { initDialogApp } from "./dialog-app";
import { easyTools } from "../easy-tools";

import { store } from "../core/store";
import { initConfigApp } from "./config-app";
import { initLogApp } from "./log-app";

export async function init() {
    try {
        // 初始化配置项
        store.initStore();
        // 初始化所有容器
        holders.initNotificationHolder(); //先注入通知容器
        holders.initDialogHolder();
        /** 先注弹窗app */
        await initDialogApp();
        holders.initMenuHolder();
        holders.initMovePanelHolder();
        // 初始化网络
        easyTools.notice.normal(pkg.name, '注入网络钩子函数')
        await socketTools.initSocket();
        easyTools.notice.normal(pkg.name, '注入钩子函数')
        // 刷新查找所有元素
        elementsHooks.refreshAll();
        // 添加所有钩子函数
        elementsHooks.initHooks();
        // 注入脚本
        easyTools.notice.normal(pkg.name, '注入脚本')
        scriptTools.injecteScriptList();
        easyTools.notice.normal(pkg.name, '生成菜单')
        /** 一级菜单 */
        let menu = document.createElement('hm-menu');
        menu.content = "HortiMagic";
        menu.isMenuItem = false;

        /** 二级菜单 */
        let configMenu = initConfigApp();
        let logMenu = initLogApp();
        let scriptMenu = initScriptApp();

        /** 菜单点击事件,开关对应的活动窗口 */
        menu.addEventListener('hm-menu-click', function () {
            // menu.flag 会自己改变
            configMenu.flag = menu.flag;
            logMenu.flag = menu.flag;
            scriptMenu.flag = menu.flag;
        });
        holders.menuHolder.append(menu, configMenu, logMenu, scriptMenu,);
        // menuHolder.append(menu, configMenu, scriptMenu,);
        easyTools.notice.success(pkg.name, `${pkg.version} 已加载`);
    } catch (error) {
        console.error(error);
    }




}
