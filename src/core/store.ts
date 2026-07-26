import { proxy, subscribe, snapshot } from 'valtio/vanilla';

import { logTools } from "./log-tools";
import type { Script } from './script-tools';

const Tag = 'store'

/**  store 响应式存储库 */
export const store = {
    storKey: 'HortimagicStore',
    /**
     * 导出valtio响应式状态管理库常用方法
     * @example
     * // 创建响应式状态
     * const state = reactive.proxy({ count: 0 })
     * 
     * // 订阅状态变化
     * reactive.subscribe(state, () => {
     *   console.log('state has changed to', state)
     * })
     * 
     * // 获取状态快照
     * const snap = reactive.snapshot(state)
     * 
     * // 在组件中使用（注意：snapshot返回的是只读快照，不能直接修改）
     * // 需要通过原始proxy对象进行修改
     * const updateState = () => {
     *   state.count++ // 直接修改原始proxy对象
     * }
     * 
     * // 无React环境使用示例：
     * // 1. 创建状态
     * const counterStore = proxy({ count: 0 });
     * 
     * // 2. 修改状态
     * counterStore.count++;
     * 
     * // 3. 获取快照（用于显示）
     * const snap = snapshot(counterStore);
     * console.log(snap.count); // 输出当前值
     * 
     * // 4. 订阅变化
     * subscribe(counterStore, () => {
     *   console.log('counter changed');
     * });
     */
    reactive: {
        /** 
         * 创建响应式状态
         * const state = reactive.proxy({ count: 0 })
         */
        proxy,
        /** 
         * 订阅状态变化
         * reactive.subscribe(state, () => {
         *   console.log('state has changed to', state)
         * })
         */
        subscribe,
        /**
         * 获取快照（用于显示）
         * const snap = snapshot(counterStore);
         * console.log(snap.count); // 输出当前值
         */
        snapshot
    },
    /**
     * hortiMagicStore存储库
     */
    HortimagicStore: proxy({
        /** 是否自动保存 */
        autoSave: false,
        /** 日志是否开启 */
        logFlag: {
            log: false,
            info: true,
            debug: true,
            warn: true,
            error: true
        },
        /** 消息日志是否开启 */
        messageLogFlag: {
            send: false,
            decode: false,
            emit: true,
            receive: false,
        },
        /** 日志列表最大长度 */
        logListLength: 20,
        /** 脚本列表 */
        scriptList: [] as Script[],
    }),



    /**
     * 保存store
     */
    saveStore() {
        localStorage.setItem(store.storKey, JSON.stringify(store.HortimagicStore));
        logTools.logger.debug(Tag, "保存至本地存储");
    },

    /**
     * 加载store
     */
    loadStore() {
        let res = localStorage.getItem(store.storKey);
        if (res != null) {
            const parsedRes = JSON.parse(res);
            if (parsedRes.autoSave) {
                store.HortimagicStore.autoSave = parsedRes.autoSave == true;
            } else {
                store.HortimagicStore.autoSave = false;
            }
            if (parsedRes.logFlag) {
                store.HortimagicStore.logFlag = parsedRes.logFlag;
            } else {
                // 兼容旧格式
                if (isNaN(parsedRes.logLevel)) {
                    store.HortimagicStore.logFlag = parsedRes.logLevel;
                }
            }
            if (parsedRes.messageLogFlag) {
                store.HortimagicStore.messageLogFlag = parsedRes.messageLogFlag;
            }
            if (parsedRes.scriptList) {
                store.HortimagicStore.scriptList = parsedRes.scriptList;
            }

            if (parsedRes.logListLength) {
                store.HortimagicStore.logListLength = parsedRes.logListLength;
            }
        } else {
            // 默认日志配置
            store.HortimagicStore.logFlag.log = true;
            store.HortimagicStore.logFlag.info = true;
            store.HortimagicStore.logFlag.debug = true;
            store.HortimagicStore.logFlag.warn = true;
            store.HortimagicStore.logFlag.error = true;
            //
            store.HortimagicStore.autoSave = true;
            store.HortimagicStore.logListLength = 20;
            store.HortimagicStore.messageLogFlag.decode = false;
            store.HortimagicStore.messageLogFlag.emit = true;
            store.HortimagicStore.messageLogFlag.send = false;
            store.HortimagicStore.messageLogFlag.receive = false;
            store.HortimagicStore.scriptList = [];
            logTools.logger.debug(Tag, '没有读取到配置，使用默认配置');
            store.saveStore();
        }
        logTools.logger.debug(Tag, "从本地存储加载");
    },

    initStore() {
        store.loadStore();
        // 订阅状态变化，当 autoSave 为 true 时自动保存
        subscribe(store.HortimagicStore, () => {
            if (store.HortimagicStore.autoSave) {
                store.saveStore();
            }
        });
    },
}