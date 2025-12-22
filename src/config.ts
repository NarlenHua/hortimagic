/**
 * 配置应用
 */

/**
 * 初始化配置项
 */
export function initHortimagicConfig() {
    let res = localStorage.getItem("HortimagicConfig")
    if (res == null) {
        localStorage.setItem("HortimagicConfig", JSON.stringify(HortimagicConfig))
    } else {
        HortimagicConfig = JSON.parse(res)
    }
}
/**
 * 配置项
 */
export let HortimagicConfig = {
    allowNotice: true,
}