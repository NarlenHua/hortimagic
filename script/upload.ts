/**
 * 上传文件到 iirose 文件服务器
 *
 * 使用方式:
 * ```bash
 * npx tsx script/upload.ts [文件路径]
 * # 不传参数默认上传 dist/hortimagic.txt
 * ```
 */
//@ts-ignore
import fs from "node:fs";
//@ts-ignore
import path from "node:path";
//@ts-ignore
import { exec } from "node:child_process";
//@ts-ignore
import { promisify } from "node:util";
//@ts-ignore
import pkg from "../package.json" with { type: "json" };

const execAsync = promisify(exec);

const UPLOAD_URL = "https://f.iirose.com/lib/php/system/file_upload.php";
/** Ruby的uid */
const FIXED_ID = "534042b82ed41";

/** 伪装浏览器请求头，绕过防盗链/CSRF 校验 */
const REQUEST_HEADERS: Record<string, string> = {
  "Origin": "https://iirose.com",
  "Referer": "https://iirose.com/messages.html",
  "User-Agent":
    "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/150.0.0.0 Safari/537.36 Edg/150.0.0.0",
};

/**
 * 上传文件到 iirose（通过 curl，绕过 Cloudflare 对 Node TLS 指纹的拦截）
 * @param filePath - 要上传的文件路径
 * @returns 服务器返回的网络直链
 */
async function uploadFile(filePath: string): Promise<string> {
  const absPath = path.resolve(filePath);
  if (!fs.existsSync(absPath)) {
    throw new Error(`文件不存在: ${absPath}`);
  }

  const fileName = path.basename(absPath);
  const fileSize = (fs.statSync(absPath).size / 1024).toFixed(1);
  console.log(`正在上传: ${fileName} (${fileSize} KB)`);

  const { stdout, stderr } = await execAsync(
    `curl -sS -X POST ` +
    `-F "i=${FIXED_ID}" ` +
    `-F "f[]=@${absPath};filename=${fileName}" ` +
    `-H "Origin: ${REQUEST_HEADERS.Origin}" ` +
    `-H "Referer: ${REQUEST_HEADERS.Referer}" ` +
    `-H "User-Agent: ${REQUEST_HEADERS["User-Agent"]}" ` +
    `${UPLOAD_URL}`,
    { encoding: "utf-8", maxBuffer: 1024 * 1024 },
  );

  if (stderr) {
    console.warn("curl stderr:", stderr);
  }

  const text = stdout.trim();
  if (!text) {
    throw new Error("服务器返回空响应");
  }

  return `https://r.iirose.com/${text}`;
}

/** 将上传直链以版本标记的格式写入 README，已存在则替换 */
function addLinkToReadme(url: string) {
  const readmePath = path.resolve("README.md");
  if (!fs.existsSync(readmePath)) {
    throw new Error(`文件不存在: ${readmePath}`);
  }

  const content = fs.readFileSync(readmePath, "utf-8");
  const linkLine = `[v${pkg.version} 下载](${url})`;

  // 匹配已有的版本下载链接行
  const pattern = /^\[v[\d.]+ 下载]\(.*\)$/m;
  const newContent = pattern.test(content)
    ? content.replace(pattern, linkLine)
    : `${content}\n${linkLine}`;

  fs.writeFileSync(readmePath, newContent, "utf-8");
  console.log(`已更新 README 下载链接`);
}
// ─── 主入口 ─────────────────────────────────────────────

async function main() {
  //@ts-ignore
  const filePath = process.argv[2] || "dist/hortimagic.txt";

  try {
    const url = await uploadFile(filePath);
    console.log(`上传成功! 直链: ${url}`);
    addLinkToReadme(url);
  } catch (err) {
    console.error("上传失败:", (err as Error).message);
    //@ts-ignore
    process.exit(1);
  }
}

main();
