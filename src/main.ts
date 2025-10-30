import * as core from './core';
import * as components from './components';
import * as apps from './apps';
import *as holders from './holders';
import pkg from '../package.json' with { type: 'json' };

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
    buildTime: new Date().toISOString(),

    /** 项目是否注入完成 */
    ingected: false
}

async function main() {
    await apps.main_app.init();
    information.ingected = true;
}
main()
export {
    information,
    core,
    components,
    apps,
    holders,
}