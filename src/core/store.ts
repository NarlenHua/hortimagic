import { Store } from "bare-store";
import { ReactObj } from "./Emitter-Store";
import { logger } from "./log-tools";


export const logLevel = new ReactObj(0);
export const allowLogging = new ReactObj(true);
export const HortimagicConfig = new Store('HortimagicConfig');

export function initStore() {
    let res = HortimagicConfig.loadFromStorage()
    /**
     * 如果没有保存,或导入失败，那么就重新设置一下值
     */
    if (!res) {
        HortimagicConfig.set('logLevel', 0);
        logLevel.value = 0;
        HortimagicConfig.set('allowLogging', true);
        allowLogging.value = true;
    } else {
        logLevel.value = HortimagicConfig.get('logLevel') ?? 0;
        allowLogging.value = HortimagicConfig.get('allowLogging') ?? true;
    }
    logLevel.on('change', (newValue) => {
        HortimagicConfig.set('logLevel', logLevel)
        logger.log('store:', newValue);
    });
    allowLogging.on('change', (newValue) => {
        HortimagicConfig.set('allowLogging', allowLogging)
        logger.log('store:', newValue);
    });
}
