# AgentAuth SDK

> 智能浏览器自动化 SDK，基于自然语言指令驱动浏览器操作和身份认证

[![TypeScript](https://img.shields.io/badge/TypeScript-5.3+-blue.svg)](https://www.typescriptlang.org/)
[![Node.js](https://img.shields.io/badge/Node.js-18+-green.svg)](https://nodejs.org/)
[![License](https://img.shields.io/badge/license-ISC-blue.svg)](LICENSE)

## 🚀 特性

- 🤖 **智能语言理解** - 将自然语言转换为浏览器操作指令
- 🌐 **实时通信** - 基于 SSE (Server-Sent Events) 的实时消息推送
- 🎯 **浏览器自动化** - 支持页面导航、点击、输入、等待等操作
- 📸 **智能截图** - 自动截图并进行页面分析
- 🔐 **自动认证** - 智能识别并处理登录、注册流程
- ⏱️ **进度监控** - 实时追踪任务执行状态
- 🔄 **自动重连** - 内置重连机制，保证连接稳定性
- 📱 **跨平台** - 支持 Windows、macOS、Linux

## 📦 安装

```bash
npm install @genauth/agentauth
```

## 🎯 快速开始

### 基础使用

```typescript
import GenAuth from "@genauth/agentauth";

// 创建 GenAuth 实例
const genAuth = new GenAuth({
  genAuthUserId: "your-user-id",
  cdpUrl: "ws://localhost:9222", // 可选，Chrome DevTools Protocol URL
});

// 发送自然语言指令
try {
  const response = await genAuth.chat("请帮我打开百度首页");
  console.log("操作完成:", response);
} catch (error) {
  console.error("操作失败:", error);
}
```

### 设置回调监听

```typescript
// 监听消息和浏览器事件
genAuth.onMessage(async (resData) => {
  console.log("收到消息:", resData);

  if (resData.action === "browser_event") {
    console.log("浏览器操作:", resData.otherData);
  }
});

// 监听任务进度
genAuth.onProgress(async (progressData) => {
  const { taskId, status, progress } = progressData;
  console.log(`任务 ${taskId} 第 ${progress} 步: ${status}`);
});
```

## 🔧 配置参数

### GenAuthConfig 接口

```typescript
interface GenAuthConfig {
  genAuthUserId: string; // 必需：用户 ID
  genAuthServer?: string; // 可选：服务器地址，默认: http://39.104.83.45:13032
  cdpUrl?: string; // 可选：Chrome DevTools Protocol WebSocket URL
}
```

### 配置示例

```typescript
const config = {
  genAuthUserId: "user-123",
  genAuthServer: "https://your-server.com",
  cdpUrl: "ws://localhost:9222",
};

const genAuth = new GenAuth(config);
```

## 📚 SDK 使用指南

### 核心方法

#### `chat(message: string): Promise<string>`

发送自然语言指令，SDK 会将其转换为浏览器操作。

**参数:**

- `message` - 自然语言描述的操作指令

**返回值:**

- `Promise<string>` - 服务器响应消息

**示例:**

```typescript
const response = await genAuth.chat('打开谷歌搜索"TypeScript 教程"');
```

#### `onMessage(callback: (resData: ResData) => Promise<void>): void`

设置消息回调，接收服务器推送的各种事件。

**ResData 接口:**

```typescript
interface ResData {
  taskId: string; // 任务唯一标识
  step: number; // 执行步骤
  action: ActionEnum; // 动作类型
  message?: string; // 消息内容
  otherData?: any; // 附加数据
}
```

#### `onProgress(callback: (progressData: ProgressData) => Promise<void>): void`

设置进度回调，监控任务执行状态。

**ProgressData 接口:**

```typescript
interface ProgressData {
  taskId: string; // 任务 ID
  action: ActionEnum; // 动作类型
  status: ProgressStatusEnum; // 执行状态
  progress?: number; // 当前步骤
  otherData?: any; // 浏览器操作数据
  img?: string; // Base64 编码的截图
  uuid?: string; // 唯一标识符
}
```

#### `destroy(): Promise<void>`

清理资源，关闭连接。

### 枚举类型

#### ActionEnum

```typescript
enum ActionEnum {
  message = "message", // 普通消息
  browser_event = "browser_event", // 浏览器事件
  screenshot = "screenshot", // 截图事件
}
```

#### ProgressStatusEnum

```typescript
enum ProgressStatusEnum {
  start = "start", // 开始执行
  sucess = "sucess", // 执行成功
  error = "error", // 执行失败
}
```

## 🌐 浏览器操作

SDK 支持以下浏览器操作类型：

| 操作类型     | 描述     | 示例指令                  |
| ------------ | -------- | ------------------------- |
| `navigate`   | 页面导航 | "打开百度首页"            |
| `click`      | 点击元素 | "点击搜索按钮"            |
| `insertText` | 输入文本 | "在搜索框输入 TypeScript" |
| `wait`       | 等待     | "等待 3 秒"               |

### 自动认证支持

SDK 具备智能识别登录和注册页面的能力：

- 自动检测登录页面并调用相应接口
- 自动检测注册页面并处理注册流程
- 支持多种应用程序的认证模式

## 🛠️ 环境准备

### Chrome 浏览器配置

如需使用浏览器自动化功能，请启动 Chrome 调试模式：

```bash
# Windows
chrome.exe --remote-debugging-port=9222 --no-sandbox --disable-web-security

# macOS
/Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome --remote-debugging-port=9222 --no-sandbox --disable-web-security

# Linux
google-chrome --remote-debugging-port=9222 --no-sandbox --disable-web-security
```

### 依赖项

- Node.js 18+
- TypeScript 5.3+
- Chrome/Chromium 浏览器

## 📝 完整示例

```typescript
import GenAuth from "@genauth/agentauth";

async function automateWebTask() {
  // 初始化 SDK
  const genAuth = new GenAuth({
    genAuthUserId: "demo-user-001",
    cdpUrl: "ws://localhost:9222",
  });

  // 设置消息监听
  genAuth.onMessage(async (resData) => {
    console.log(`📢 [${resData.action}] ${resData.message || "事件触发"}`);

    if (resData.action === "browser_event" && resData.otherData?.actions) {
      resData.otherData.actions.forEach((action: any, index: number) => {
        console.log(
          `   ${index + 1}. ${action.method}: ${
            action.value || action.selector
          }`
        );
      });
    }
  });

  // 设置进度监听
  genAuth.onProgress(async (progressData) => {
    const statusIcon = {
      start: "🚀",
      sucess: "✅",
      error: "❌",
    }[progressData.status];

    console.log(
      `${statusIcon} 任务进度: ${progressData.progress}/${
        progressData.otherData?.length || 0
      }`
    );

    if (progressData.img) {
      console.log("📸 已生成截图");
    }
  });

  try {
    console.log("🎯 开始自动化任务...");

    // 执行复杂的浏览器操作序列
    let response = await genAuth.chat("打开百度首页");
    console.log("步骤1完成:", response);

    response = await genAuth.chat('搜索"GenAuth SDK 文档"');
    console.log("步骤2完成:", response);

    response = await genAuth.chat("点击第一个搜索结果");
    console.log("步骤3完成:", response);

    console.log("🎉 所有任务执行完成！");
  } catch (error) {
    console.error("❌ 任务执行失败:", error.message);
  } finally {
    // 清理资源
    await genAuth.destroy();
    console.log("🧹 资源清理完成");
  }
}

// 运行示例
automateWebTask().catch(console.error);
```

## 🚨 错误处理

```typescript
import GenAuth from "@genauth/agentauth";

const genAuth = new GenAuth({
  genAuthUserId: "your-user-id",
});

try {
  const response = await genAuth.chat("你的指令");
  console.log("成功:", response);
} catch (error) {
  // 根据错误类型进行处理
  if (error.message.includes("sessionId")) {
    console.error("⚠️ 会话连接失败，请检查网络连接");
    // 可以尝试重新连接
  } else if (error.message.includes("browserType.connectOverCDP")) {
    console.error("⚠️ 浏览器连接失败，请确保 Chrome 调试模式已启动");
  } else if (error.message.includes("apiCode")) {
    console.error("⚠️ API 调用失败:", error.message);
  } else {
    console.error("⚠️ 未知错误:", error);
  }
}
```

## 🔧 构建和开发

```bash
# 安装依赖
npm install

# 构建项目
npm run build

# 开发模式（监听文件变化）
npm run dev

# 运行测试
npm run dev:run
```

## 📋 注意事项

1. **网络连接**: SDK 依赖稳定的网络连接进行 SSE 通信
2. **浏览器版本**: 建议使用最新版本的 Chrome 浏览器
3. **权限设置**: 确保有足够的系统权限启动和控制浏览器
4. **资源管理**: 使用完毕后记得调用 `destroy()` 方法清理资源
5. **并发限制**: 建议单个用户同时只运行一个 GenAuth 实例

## 🤝 贡献指南

欢迎提交 Issue 和 Pull Request！

1. Fork 本仓库
2. 创建特性分支: `git checkout -b feature/your-feature`
3. 提交改动: `git commit -am 'Add some feature'`
4. 推送分支: `git push origin feature/your-feature`
5. 提交 Pull Request

## 📄 许可证

[ISC License](LICENSE)

## 📞 支持

如果您在使用过程中遇到问题，请：

1. 查看本文档的错误处理部分
2. 在 GitHub 上提交 Issue
3. 确保提供详细的错误信息和复现步骤

---

> 💡 **提示**: GenAuth SDK 基于先进的 AI 技术，可以理解复杂的自然语言指令并转换为精确的浏览器操作。试试用更自然的语言描述您想要完成的任务吧！
