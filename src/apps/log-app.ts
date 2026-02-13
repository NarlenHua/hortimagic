import { movePanelHolder } from '../holders/move-panel';
import { LitElement, css, html } from 'lit';
import { property } from 'lit/decorators.js';
import { logEmitter } from '../core/log-tools';
import { HortimagicStore } from '../core/store';

interface LogEntry {
  timestamp: Date;
  level: string;
  tag: string;
  message: any[];
}

class HmLogApp extends LitElement {
  @property({ type: Array })
  logList: LogEntry[] = [];

  // 新增：记录每条日志的折叠状态
  private foldState = new Map<string, boolean>();

  constructor() {
    super();

    // 确保日志列表长度配置存在
    if (HortimagicStore.logListLength < 1) {
      HortimagicStore.logListLength = 50; // 默认保留50条日志
    }

    logEmitter.on('log', (tag: string, ...args: any[]) => {
      // 从参数中提取日志级别
      let level = 'log';
      if (args.length > 0) {
        // 通过检查console方法来确定日志级别
        const firstArg = args[0];
        if (typeof firstArg === 'string') {
          if (firstArg.startsWith('[DEBUG]')) level = 'debug';
          else if (firstArg.startsWith('[INFO]')) level = 'info';
          else if (firstArg.startsWith('[WARN]')) level = 'warn';
          else if (firstArg.startsWith('[ERROR]')) level = 'error';
        }
      }

      // 移除可能的级别标记
      const cleanArgs = [...args];
      if (cleanArgs.length > 0 && typeof cleanArgs[0] === 'string' &&
        ['[DEBUG]', '[INFO]', '[WARN]', '[ERROR]'].some(marker => cleanArgs[0].startsWith(marker))) {
        cleanArgs.shift();
      }

      const logEntry: LogEntry = {
        timestamp: new Date(),
        level,
        tag,
        message: cleanArgs
      };

      /** 确保日志列表长度不超过最大长度 */
      while (this.logList.length >= HortimagicStore.logListLength) {
        this.logList.shift();
      }
      this.logList.push(logEntry);
      this.requestUpdate();
    });
  }

  static styles = css`
    .log-container {
        height: 400px;
        overflow-y: auto;
        padding: 10px;
        font-family: monospace;
        background-color: #f5f5f5;
        border: 1px solid #ddd;
    }
    
    .log-entry {
        padding: 8px 0;
        border-bottom: 1px solid #eee;
        display: flex;
        flex-direction: column;
        margin-bottom: 10px; /* 增加日志条目之间的间距 */
    }
    
    .log-header {
        display: flex;
        gap: 10px;
        align-items: center;
    }
    
    .timestamp {
        color: #999;
        min-width: 100px;
        flex-shrink: 0;
        font-size: 12px; /* 调整时间戳字体大小 */
    }
    
    .level {
        min-width: 50px;
        flex-shrink: 0;
        font-weight: bold;
        font-size: 14px; /* 调整日志级别字体大小 */
    }
    
    .level.debug { color: #0099cc; }
    .level.info { color: #009900; }
    .level.warn { color: #ff9900; }
    .level.error { color: #ff3333; }
    
    .tag {
        color: #666;
        font-weight: bold;
        min-width: 80px;
        flex-shrink: 0;
        font-size: 14px; /* 调整标签字体大小 */
    }
    
    .message {
        flex: 1;
        word-break: break-word;
        margin-top: 4px;
        max-height: 60px; /* 限制高度，触发折叠 */
        overflow: hidden;
        cursor: text; /* 改变光标形状以表示可选择 */
        position: relative;
        display: block; /* 确保每条消息独占一行 */
        // 强制显示滚动条
        scrollbar-width: none; /* Firefox - 隐藏滚动条 */
        -ms-overflow-style: none; /* IE and Edge - 隐藏滚动条 */
        font-size: 14px; /* 调整消息字体大小 */
        line-height: 1.5; /* 调整行高 */
        background-color: #fff; /* 设置背景色 */
        padding: 5px; /* 添加内边距 */
        border-radius: 4px; /* 圆角 */
        white-space: nowrap; /* 防止文本换行 */
        text-overflow: ellipsis; /* 显示省略号 */
        user-select: text; /* 允许文本选择 */
        -webkit-user-select: text; /* Safari兼容 */
        -moz-user-select: text; /* Firefox兼容 */
        -ms-user-select: text; /* IE/Edge兼容 */
    }
    
    .message::-webkit-scrollbar { /* 隐藏Webkit浏览器的滚动条 */
        display: none;
    }
    
    .message.expanded {
        max-height: none;
        overflow-y: auto;
        overflow-x: hidden;
        white-space: normal; /* 展开时允许正常换行 */
        user-select: text; /* 允许文本选择 */
        -webkit-user-select: text; /* Safari兼容 */
        -moz-user-select: text; /* Firefox兼容 */
        -ms-user-select: text; /* IE/Edge兼容 */
    }
`;

  render() {
    return html`
            <div class="controls">
                <button class="clear-btn" @click="${this.clearLogs}">清空日志</button>
                <span>共 ${this.logList.length} 条日志</span>
            </div>
            <div class="log-container">
                ${this.logList.map((entry: LogEntry) => {
      const key = `${entry.timestamp.getTime()}-${entry.tag}-${entry.level}`;
      const isExpanded = this.foldState.get(key) ?? false;
      const messageStr = entry.message.map(msg =>
        typeof msg === 'object' ? JSON.stringify(msg) : String(msg)
      ).join(' ');

      // 判断是否需要折叠（例如超过一定字符数）
      const shouldCollapse = messageStr.length > 100;

      return html`
                        <div class="log-entry">
                            <div class="log-header">
                                <span class="timestamp">${this.formatTime(entry.timestamp)}</span>
                                <span class="level ${entry.level}">[${entry.level.toUpperCase()}]</span>
                                <span class="tag">${entry.tag}</span>
                            </div>
                            <div 
                                class="message ${isExpanded || !shouldCollapse ? 'expanded' : 'collapsed'}"
                                @click="${() => this.toggleFold(key)}"
                            >
                                ${isExpanded || !shouldCollapse ? messageStr : messageStr.substring(0, 100)}
                            </div>
                        </div>
                    `;
    })}
            </div>
        `;
  }

  private formatTime(date: Date): string {
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');
    const milliseconds = String(date.getMilliseconds()).padStart(3, '0');
    return `${hours}:${minutes}:${seconds}.${milliseconds}`;
  }

  private clearLogs() {
    this.logList = [];
    this.requestUpdate();
  }

  // 新增：切换日志消息的折叠状态
  private toggleFold(key: string) {
    const currentState = this.foldState.get(key) ?? false;
    this.foldState.set(key, !currentState);
    this.requestUpdate();
  }
}

export function initLogApp() {
  customElements.define('hm-log-app', HmLogApp);
  let panel = document.createElement('hm-move-panel');
  panel.titleContent = '日志';
  panel.icon = 'log';
  panel.width = 400;

  // panel.showMovePanel();
  movePanelHolder.appendChild(panel);
  let template = `<hm-log-app></hm-log-app>`;
  panel.innerHTML = template;
  let menuItem = document.createElement('hm-menu');
  menuItem.content = "日志";
  menuItem.isMenuItem = true;
  menuItem.icon = 'log';

  menuItem.addEventListener('hm-menu-click', function () {
    panel.putTopToggel();
  });
  return menuItem;
}