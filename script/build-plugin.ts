import type { Plugin } from "vite";
import fs from "node:fs";
import path from "node:path";
import pkg from "../package.json" with { type: "json" };

/**
 * 统一的后处理插件，在 Vite 构建完成后：
 * 1. 生成油猴脚本（添加 UserScript 头 + 全局暴露）
 * 2. 修补 .d.ts 类型声明（添加 reference 指令 + JSDoc 注释）
 */
export function hortimagicPostBuild(): Plugin {
    const projectName = pkg.name;

    return {
        name: "hortimagic-post-build",
        enforce: "post",

        closeBundle() {
            const outDir = path.resolve("dist");

            generateUserscript(outDir);
            patchDts(outDir);
        },
    };

    /** 步骤1: 为 IIFE 构建产物添加油猴脚本头 */
    function generateUserscript(outDir: string) {
        const inputFile = path.join(outDir, `${projectName}.iife.js`);
        if (!fs.existsSync(inputFile)) {
            console.warn(`[${projectName}] IIFE 文件不存在，跳过: ${inputFile}`);
            return;
        }

        const data = fs.readFileSync(inputFile, "utf-8");

        const header = [
            "// ==UserScript==",
            `// @name         ${projectName}`,
            `// @namespace    ${projectName}`,
            `// @version      ${pkg.version}`,
            `// @description  ${pkg.description}`,
            `// @author       ${pkg.author}`,
            `// @match        https://iirose.com/messages.html`,
            `// @grant        none`,
            `// @run-at       onmessage-end`,
            `// @license      ${pkg.license}`,
            `// @buildtime    ${new Date().toISOString()}`,
            "// ==/UserScript==",
            "",
        ].join("\n");

        // 原始 IIFE 格式: var hortimagic=(function(){...})();
        // 去除 var 前缀和尾部，改为挂载到 top.window
        const code = data.slice(4, data.length - 1);
        const newData = `${header}top.window.${projectName}=window.${code}\n`;

        for (const ext of [".user.js", ".js", ".txt"]) {
            const output = path.join(outDir, `${projectName}${ext}`);
            fs.writeFileSync(output, newData, "utf-8");
            console.log(`[${projectName}] 已生成: ${path.basename(output)}`);
        }
    }

    /** 步骤2: 修补 .d.ts 文件 */
    function patchDts(outDir: string) {
        const dtsPath = path.join(outDir, "index.d.ts");
        if (!fs.existsSync(dtsPath)) {
            console.warn(`[${projectName}] .d.ts 文件不存在，跳过: ${dtsPath}`);
            return;
        }

        let content = fs.readFileSync(dtsPath, "utf-8");

        // 2.1 添加 /// <reference> 指令
        if (!content.includes("vite-env.d.ts")) {
            content = [
                '/// <reference path="../types/vite-env.d.ts" />',
                '/// <reference path="../types/global.d.ts" />',
                '/// <reference path="../src/components/type.d.ts"/>',
                "",
                content,
            ].join("\n");
        }

        // 2.2 给命名空间注入 JSDoc 注释
        const jsdocPatches: [RegExp, string][] = [
            [/^declare namespace core \{/m,       "/** 核心模块 */\ndeclare namespace core {"],
            [/^declare namespace components \{/m, "/** 组件模块 */\ndeclare namespace components {"],
            [/^declare namespace apps \{/m,       "/** 应用模块 */\ndeclare namespace apps {"],
        ];

        for (const [pattern, replacement] of jsdocPatches) {
            content = content.replace(pattern, replacement);
        }

        fs.writeFileSync(dtsPath, content, "utf-8");
        console.log(`[${projectName}] .d.ts 已修补`);
    }
}
