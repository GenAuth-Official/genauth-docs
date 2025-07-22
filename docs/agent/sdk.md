# AgentAuth SDK

> Intelligent browser automation SDK, driven by natural language instructions for browser operations and identity authentication

[![TypeScript](https://img.shields.io/badge/TypeScript-5.3+-blue.svg)](https://www.typescriptlang.org/)
[![Node.js](https://img.shields.io/badge/Node.js-18+-green.svg)](https://nodejs.org/)
[![License](https://img.shields.io/badge/license-ISC-blue.svg)](LICENSE)

## 🚀 Features

- 🤖 **Intelligent Language Understanding** - Convert natural language into browser operation instructions
- 🌐 **Real-time Communication** - Real-time message push based on SSE (Server-Sent Events)
- 🎯 **Browser Automation** - Supports page navigation, clicking, input, waiting, and more
- 📸 **Smart Screenshot** - Automatic screenshot and page analysis
- 🔐 **Automatic Authentication** - Intelligent recognition and handling of login and registration processes
- ⏱️ **Progress Monitoring** - Real-time tracking of task execution status
- 🔄 **Auto Reconnect** - Built-in reconnection mechanism to ensure connection stability
- 📱 **Cross-platform** - Supports Windows, macOS, Linux

## 📦 Installation

```bash
npm install @genauth/agentauth
```

## 🎯 Quick Start

### Basic Usage

```typescript
import GenAuth from "@genauth/agentauth";

// Create GenAuth instance
const genAuth = new GenAuth({
  genAuthUserId: "your-user-id",
  tenantId: "user-pools-id",
  cdpUrl: "ws://localhost:9222", // Optional, Chrome DevTools Protocol URL
});

// Send natural language instruction
try {
  const response = await genAuth.chat("I am a marketing campaign operator, please help me register an Twitter account");
  console.log("Operation completed:", response);
} catch (error) {
  console.error("Operation failed:", error);
}
```

### Set Callback Listeners

```typescript
// Listen for messages and browser events
genAuth.onMessage(async (resData) => {
  console.log("Received message:", resData);

  if (resData.action === "browser_event") {
    console.log("Browser operation:", resData.otherData);
  }
});

// Listen for task progress
genAuth.onProgress(async (progressData) => {
  const { taskId, status, progress } = progressData;
  console.log(`Task ${taskId} Step ${progress}: ${status}`);
});
```

## 🔧 Configuration Parameters

### GenAuthConfig Interface

```typescript
interface GenAuthConfig {
  genAuthUserId: string; // Required: User ID
  tenantId: string; // Required: Tenant ID, or connection pool ID
  genAuthServer?: string; // Optional: Server address, default: http://39.104.83.45:13032
  cdpUrl?: string; // Optional: Chrome DevTools Protocol WebSocket URL
  proxyPools?: ProxyConfig[]; // Optional: Proxy pools for CDP instances
}
```

### Configuration Example

```typescript
const config = {
  genAuthUserId: "user-123",
  tenantId: "tenant-123",
  genAuthServer: "https://your-server.com",
  cdpUrl: "ws://localhost:9222",
};

const genAuth = new GenAuth(config);
```

## 📚 SDK Usage Guide

### Core Methods

#### 1. `chat(message: string): Promise<string>`

Send a natural language instruction, the SDK will convert it into browser operations.

**Parameters:**

- `message` - Operation instruction described in natural language

**Returns:**

- `Promise<string>` - Server response message

**Example:**

```typescript
const response = await genAuth.chat('I am an operator of an MCN agency and need to open Instagram accounts for 20+ influencers every month. Please help me automatically generate account information that meets the standards and complete registration and verification through a cloud virtual number.');
```

#### 2. `onMessage(callback: (resData: ResData) => Promise<void>): void`

Set message callback to receive various events pushed by the server.

**ResData Interface:**

```typescript
interface ResData {
  taskId: string; // Unique task identifier
  step: number; // Execution step
  action: ActionEnum; // Action type
  message?: string; // Message content
  otherData?: any; // Additional data
}
```

#### 3. `onProgress(callback: (progressData: ProgressData) => Promise<void>): void`

Set progress callback to monitor task execution status.

**ProgressData Interface:**

```typescript
interface ProgressData {
  taskId: string; // Task ID
  action: ActionEnum; // Action type
  status: ProgressStatusEnum; // Execution status
  progress?: number; // Current step
  otherData?: any; // Browser operation data
  img?: string; // Base64 encoded screenshot
  uuid?: string; // Unique identifier
}
```

#### 4. `destroy(): Promise<void>`

Clean up resources and close the connection.

### Enum Types

#### ActionEnum

```typescript
enum ActionEnum {
  message = "message", // Normal message
  browser_event = "browser_event", // Browser event
  screenshot = "screenshot", // Screenshot event
}
```

#### ProgressStatusEnum

```typescript
enum ProgressStatusEnum {
  start = "start", // Start execution
  sucess = "sucess", // Execution successful
  error = "error", // Execution failed
}
```

## 🌐 Browser Operations

The SDK supports the following browser operation types:

| Operation Type | Description      | Example Instruction                |
| ------------- | --------------- | ---------------------------------- |
| `navigate`    | Page navigation  | "Open the Twitter homepage"              |
| `click`       | Click element    | "Click the search button"          |
| `insertText`  | Input text       | "Enter in the search box to search for the most popular products" |
| `wait`        | Wait             | "Wait for 3 seconds"               |
| `select`      | Select dropdown  | "Select from dropdown"             |

### Automatic Authentication Support

The SDK has intelligent recognition capabilities for login and registration pages:

- Automatically detect login pages and call the corresponding interface
- Automatically detect registration pages and handle the registration process
- Support authentication modes for various applications
- Anti-bot detection and CAPTCHA solving

## 🛠️ Environment Preparation

### Chrome Browser Configuration

To use browser automation features, please start Chrome in debugging mode:

```bash
# Windows
chrome.exe --remote-debugging-port=9222 --no-sandbox --disable-web-security

# macOS
/Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome --remote-debugging-port=9222 --no-sandbox --disable-web-security

# Linux
google-chrome --remote-debugging-port=9222 --no-sandbox --disable-web-security
```

### Dependencies

- Node.js 18+
- TypeScript 5.3+
- Chrome/Chromium browser

## 📝 Complete Example

```typescript
import GenAuth from "@genauth/agentauth";

async function automateWebTask() {
  // Initialize SDK
  const genAuth = new GenAuth({
    genAuthUserId: "demo-user-001",
    tenantId: "demo-tenant-001",
    cdpUrl: "ws://localhost:9222",
  });

  // Set message listener
  genAuth.onMessage(async (resData) => {
    console.log(`📢 [${resData.action}] ${resData.message || "Event triggered"}`);

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

  // Set progress listener
  genAuth.onProgress(async (progressData) => {
    const statusIcon = {
      start: "🚀",
      sucess: "✅",
      error: "❌",
    }[progressData.status];

    console.log(
      `${statusIcon} Task progress: ${progressData.progress}/${
        progressData.otherData?.length || 0
      }`
    );

    if (progressData.img) {
      console.log("📸 Screenshot generated");
    }
  });

  try {
    console.log("🎯 Starting automation task...");

    // Execute a sequence of complex browser operations
    let response = await genAuth.chat("Log me into Instagram");
    console.log("Step 1 completed:", response);

    response = await genAuth.chat('Search for "Currently Most Popular Products"');
    console.log("Step 2 completed:", response);

    response = await genAuth.chat("Click the first search result");
    console.log("Step 3 completed:", response);

    console.log("🎉 All tasks completed!");
  } catch (error) {
    console.error("❌ Task execution failed:", error.message);
  } finally {
    // Clean up resources
    await genAuth.destroy();
    console.log("🧹 Resources cleaned up");
  }
}

// Run the example
automateWebTask().catch(console.error);
```

## 🚨 Error Handling

```typescript
import GenAuth from "@genauth/agentauth";

const genAuth = new GenAuth({
  genAuthUserId: "your-user-id",
  tenantId: "your-tenant-id",
});

try {
  const response = await genAuth.chat("your instruction");
  console.log("Success:", response);
} catch (error) {
  // Handle errors based on type
  if (error.message.includes("sessionId")) {
    console.error("⚠️ Session connection failed, please check network connection");
    // You can try to reconnect
  } else if (error.message.includes("browserType.connectOverCDP")) {
    console.error("⚠️ Browser connection failed, please ensure Chrome debugging mode is started");
  } else if (error.message.includes("apiCode")) {
    console.error("⚠️ API call failed:", error.message);
  } else {
    console.error("⚠️ Unknown error:", error);
  }
}
```

## 🔧 Build and Development

```bash
# Install dependencies
npm install

# Build project
npm run build

# Development mode (watch file changes)
npm run dev

# Run tests
npm run dev:run
```

## 📋 Notes

1. **Network Connection**: The SDK relies on a stable network connection for SSE communication
2. **Browser Version**: It is recommended to use the latest version of Chrome browser
3. **Permission Settings**: Ensure you have sufficient system permissions to start and control the browser
4. **Resource Management**: Remember to call the `destroy()` method to clean up resources after use
5. **Concurrency Limit**: It is recommended that a single user only runs one GenAuth instance at a time

## 🤝 Contribution Guide

Contributions are welcome via Issues and Pull Requests!

1. Fork this repository
2. Create a feature branch: `git checkout -b feature/your-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push the branch: `git push origin feature/your-feature`
5. Submit a Pull Request

## 📄 License

[ISC License](LICENSE)

## 📞 Support

If you encounter problems during use, please:

1. Check the error handling section of this document
2. Submit an Issue on GitHub
3. Be sure to provide detailed error information and reproduction steps

---

> 💡 **Tip**: GenAuth SDK is based on advanced AI technology, capable of understanding complex natural language instructions and converting them into precise browser operations. Try describing your tasks in more natural language!
