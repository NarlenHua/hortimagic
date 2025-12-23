/**
 * 配置应用
 */

import { Store } from "./Store-StoreItem";
import { storeBind } from "./storeDecorators";

/**
 * 读取或初始化配置项
 */
export function readHortimagicConfigStore() {
    HortimagicConfigStore.loadFromLocalStorage("HortimagicConfig");
    HortimagicConfigStore.getValue("allowNotice") ?? HortimagicConfigStore.setValue("allowNotice", true);
    HortimagicConfigStore.getValue("logLevel") ?? HortimagicConfigStore.setValue("logLevel", 0);
}
/**
 * 保存配置项仓库
 */
export function saveHortimagicConfigStore() {
    HortimagicConfigStore.persistToLocalStorage("HortimagicConfig");
}
/**
 * 配置项仓库
 */
export const HortimagicConfigStore = new Store();
class HortimagicConfig {
    @storeBind(HortimagicConfigStore, "allowNotice")
    allowNotice: boolean = true;
    @storeBind(HortimagicConfigStore, "logLevel")
    logLevel: number = 0;
}
/**
 * 配置项数据，可以持久化储存数据
 */
export const hortimagicConfig = new HortimagicConfig();
export const allowNotice = hortimagicConfig.allowNotice;
export const logLevel = hortimagicConfig.logLevel;

/**
 * 共享数据仓库，不进行数据持久化
 */
export const sharedDataStore = new Store();


let loggerListStoreItem = sharedDataStore.add("loggerList", [[]] as string[][]);
export const loggerList = loggerListStoreItem?.value as string[][];
sharedData.loggerList;
