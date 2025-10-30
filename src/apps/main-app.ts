import { refreshAll, initHooks } from "../core/elements-hooks";
import { initSocket } from "../core/iirose-socket";
import { ingectlocalScript } from "../core/script-tools";
import { initMenuHolder, menuHolder } from "../holders/menu";
import { initMovePanelHolder } from "../holders/move-panel";
import { initNotificationHolder } from "../holders/notification";
import { initDialogHolder } from "../holders/dialog";

import { initExampleApp } from "./example-app";
import { initScriptApp } from "./script-app";

import pkg from '../../package.json' with { type: 'json' };
import { initDialogApp } from "./dialog-app";
import { notice } from "./app-tools";
async function init() {
    try {
        // 初始化所有容器
        initNotificationHolder();
        initMenuHolder();
        initMovePanelHolder();
        initDialogHolder();
        // 初始化网络
        notice.normal(pkg.name, '注入网络钩子函数')
        await initSocket();
        notice.normal(pkg.name, '注入钩子函数')
        // 刷新查找所有元素
        refreshAll();
        // 添加所有钩子函数
        initHooks();
        // 注入脚本
        notice.normal(pkg.name, '注入脚本')
        ingectlocalScript();
        notice.normal(pkg.name, '生成菜单')
        /** 一级菜单 */
        let menu = document.createElement('hm-menu');
        menu.content = "HortiMagic";
        menu.isMenuItem = false;
        menuHolder.appendChild(menu);

        // /** 二级菜单 */
        let exampleMenu = await initExampleApp();
        let scriptMenu = await initScriptApp();
        /** 没有菜单的app */
        await initDialogApp();

        /** 菜单点击事件,开关对应的活动窗口 */
        menu.addEventListener('hm-menu-click', function () {
            // menu.flag 会自己改变
            exampleMenu.flag = menu.flag;
            scriptMenu.flag = menu.flag;
        });
        menuHolder.append(menu, exampleMenu, scriptMenu);
        // menuHolder.append(menu, exampleMenu);
        notice.success(pkg.name, `${pkg.version} 已加载`, 3000);
    } catch (error) {
        console.error(error);
    }




}

export {
    init
}
