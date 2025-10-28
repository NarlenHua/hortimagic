import { readFile, writeFile } from "fs";
import pkg from '../package.json' with { type: 'json' };
// 要读取的文件路径
const inputFilePath = `./dist/${pkg.name}.iife.js`;
// 要写入的文件路径
const outputUserJSFilePath = `./dist/${pkg.name}.user.js`;
const outputJSFilePath = `./dist/${pkg.name}.js`;
const outputTXTFilePath = `./dist/${pkg.name}.txt`;
const indexFilePath = './dist/index.d.ts';
// 要添加的字符串
const prependString = `// ==UserScript==
// @name         ${pkg.name}
// @namespace    ${pkg.name}
// @version      ${pkg.version}
// @description  ${pkg.description}
// @author       ${pkg.author}
// @match        https://iirose.com/messages.html
// @grant        none
// @run-at       onmessage-end
// @license      ${pkg.license}
// @buildtime    ${new Date().toISOString()}
// ==/UserScript==
`;

// 异步读取文件内容
readFile(inputFilePath, "utf8", (err, data) => {
  if (err) {
    console.error("读取文件时出错:", err);
    return;
  }

  // 在文件内容之前添加字符串
  // 将代码包裹进立即执行函数中
  // let newData = `${prependString}(async function (){${data.slice(0, data.length - 1)}})()\n`;
  let newData = `${prependString}top.window.${pkg.name}=window.${data.slice(
    4,
    data.length - 1
  )}\n`;

  // 异步写入新文件
  writeFile(outputUserJSFilePath, newData, "utf8", (err) => {
    if (err) {
      console.error("写入文件时出错:", err);
      return;
    }
    console.log("文件已成功处理并保存到：", outputUserJSFilePath);
  });
  writeFile(outputJSFilePath, newData, "utf8", (err) => {
    if (err) {
      console.error("写入文件时出错:", err);
      return;
    }
    console.log("文件已成功处理并保存到：", outputJSFilePath);
  });
  writeFile(outputTXTFilePath, newData, "utf8", (err) => {
    if (err) {
      console.error("写入文件时出错:", err);
      return;
    }
    console.log("文件已成功处理并保存到：", outputTXTFilePath);
  });
});

// 异步读取类型声明文件
readFile(indexFilePath, "utf8", (err, data) => {
  if (err) {
    console.error("类型声明文件读取出错:", err);
    return;
  }

  // 在文件内容之前添加字符串
  // 将代码包裹进立即执行函数中
  // let newData = `${prependString}(async function (){${data.slice(0, data.length - 1)}})()\n`;
  let newData = `
/// <reference path="../types/vite-env.d.ts" />
/// <reference path="../types/global.d.ts" />
/// <reference path="../src/components/type.d.ts"/>
${data}
  `;

  // 异步写入新文件
  writeFile(indexFilePath, newData, "utf8", (err) => {
    if (err) {
      console.error("写入文件时出错:", err);
      return;
    }
    console.log("文件已成功处理并保存到：", indexFilePath);
  });
});
