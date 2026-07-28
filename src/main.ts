import pkg from '../package.json' with { type: 'json' };
import * as core from './core';
import * as components from './components';
import * as apps from './apps';

import { easyTools } from './easy-tools';
import { logTools } from './core/log-tools';

const { logger } = logTools;
const { confirm, notice } = easyTools;

/** package配置信息 */
const information = {
    /** 项目名称 */
    name: pkg.name,
    /** 项目版本 */
    version: pkg.version,
    /** 项目更新日志 */
    changelog: pkg.changelog,
    /** 项目描述 */
    description: pkg.description,
    /** 项目作者 */
    author: pkg.author,
    /** 项目许可证 */
    license: pkg.license,
    /** 项目仓库 */
    repository: pkg.repository,
    /** 项目构建时间 */
    buildTime: __BUILD_TIME__,
    /** 项目是否注入完成 */
    injected: false,
    /**
     * 是否允许输出消息的调试信息
     * 手动在控制台输入 'hortimagic.messageDebug' 可以切换调试模式
     */
    messageDebug: false,
}
async function main() {
    await apps.main_app.init();
    information.injected = true;
}
main()
export {
    information,
    /** 核心模块*/
    core,
    /** 组件模块*/
    components,
    /** 应用模块*/
    apps,
    /** 工具模块*/
    easyTools,

    logger,
    confirm,
    notice

}