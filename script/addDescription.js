"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = require("fs");
var module_1 = require("module");
var require = (0, module_1.createRequire)(__dirname);
var pkg = require('../package.json');
// 要读取的文件路径
var inputFilePath = "./dist/".concat(pkg.name, ".iife.js");
// 要写入的文件路径
var outputUserJSFilePath = "./dist/".concat(pkg.name, ".user.js");
var outputJSFilePath = "./dist/".concat(pkg.name, ".js");
var outputTXTFilePath = "./dist/".concat(pkg.name, ".txt");
var indexFilePath = './dist/index.d.ts';
// 要添加的字符串
var prependString = "// ==UserScript==\n// @name         ".concat(pkg.name, "\n// @namespace    ").concat(pkg.name, "\n// @version      ").concat(pkg.version, "\n// @description  ").concat(pkg.description, "\n// @author       ").concat(pkg.author, "\n// @match        https://iirose.com/messages.html\n// @grant        none\n// @run-at       onmessage-end\n// @license      ").concat(pkg.license, "\n// @buildtime    ").concat(new Date().toISOString(), "\n// ==/UserScript==\n");
// 异步读取文件内容
(0, fs_1.readFile)(inputFilePath, "utf8", function (err, data) {
    if (err) {
        console.error("读取文件时出错:", err);
        return;
    }
    // 在文件内容之前添加字符串
    // 将代码包裹进立即执行函数中
    // let newData = `${prependString}(async function (){${data.slice(0, data.length - 1)}})()\n`;
    var newData = "".concat(prependString, "top.window.").concat(pkg.name, "=window.").concat(data.slice(4, data.length - 1), "\n");
    // 异步写入新文件
    (0, fs_1.writeFile)(outputUserJSFilePath, newData, "utf8", function (err) {
        if (err) {
            console.error("写入文件时出错:", err);
            return;
        }
        console.log("文件已成功处理并保存到：", outputUserJSFilePath);
    });
    (0, fs_1.writeFile)(outputJSFilePath, newData, "utf8", function (err) {
        if (err) {
            console.error("写入文件时出错:", err);
            return;
        }
        console.log("文件已成功处理并保存到：", outputJSFilePath);
    });
    (0, fs_1.writeFile)(outputTXTFilePath, newData, "utf8", function (err) {
        if (err) {
            console.error("写入文件时出错:", err);
            return;
        }
        console.log("文件已成功处理并保存到：", outputTXTFilePath);
    });
});
// 异步读取类型声明文件
(0, fs_1.readFile)(indexFilePath, "utf8", function (err, data) {
    if (err) {
        console.error("类型声明文件读取出错:", err);
        return;
    }
    // 在文件内容之前添加字符串
    // 将代码包裹进立即执行函数中
    // let newData = `${prependString}(async function (){${data.slice(0, data.length - 1)}})()\n`;
    var newData = "\n/// <reference path=\"../types/vite-env.d.ts\" />\n/// <reference path=\"../types/global.d.ts\" />\n/// <reference path=\"../src/components/type.d.ts\"/>\n".concat(data, "\n  ");
    // 异步写入新文件
    (0, fs_1.writeFile)(indexFilePath, newData, "utf8", function (err) {
        if (err) {
            console.error("写入文件时出错:", err);
            return;
        }
        console.log("文件已成功处理并保存到：", indexFilePath);
    });
});
