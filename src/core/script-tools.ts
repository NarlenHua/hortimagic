
/** 脚本类 */
export default class Script {
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
