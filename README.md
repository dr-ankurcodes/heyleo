# Hey Leo! - AI Agent

<p align="center"> <img src="logo.svg" alt="Hey Leo! Logo" width="240"> </p>

An innovative open-source AI agent that runs entirely in your browser or in the cloud - No downloads, no installation, privacy-focused. **Try it now at https://heyleo.onrender.com/**

[![Live Demo](https://img.shields.io/badge/demo-Live-blue)](https://youtu.be/AwVnTaTG9qE)
**Live Demo:** https://youtu.be/AwVnTaTG9qE

**Badge:**

[![Live Demo](https://img.shields.io/badge/demo-Live-blue)](https://heyleo.onrender.com/)
[![GitHub](https://img.shields.io/badge/GitHub-Repository-green)](https://github.com/dr-ankurcodes/heyleo)

---

## 🏆 About This Project

This project was created for the **Bridgemind Hackathon** to demonstrate a unique approach to AI-powered development and interaction. Our goal is to showcase how modern web technologies can provide powerful AI capabilities while maintaining simplicity, privacy, and accessibility.

### Key Innovation Points

- **Browser-Native Architecture**: Leverages modern browser APIs (localStorage, Fetch API, Blob) to provide a complete AI experience without backend dependencies
- **Multi-Mode Agent System**: Seamlessly switches between Chat, Code Generation, and Custom Skill modes
- **Memory Persistence**: All conversations and settings are stored locally until you clear your browser
- **Token-Efficient Design**: Optimized prompts and response handling to minimize API costs

---

## ✨ Features & Benefits

### 1. **Zero-Setup Cloud Deployment** ☁️
- Visit https://heyleo.onrender.com/ - no installation required
- Single `npm start` command to run locally
- Easy cloud deployment (Render, Heroku, Railway, etc.)
- All-in-one server serves both frontend and handles proxying

### 2. **Code Generation Mode** 💻
- Decompose complex tasks into parallel sub-tasks
- Generate complete projects with multiple files
- Download generated code as ZIP files directly
- Refine and fix code automatically via AI
- Continue development/modification

**Benefits:**
- Get complete, working projects in minutes
- Learn from well-structured, generated code
- Accelerate prototyping and MVP development
- Save development time and cost

### 3. **Chat Mode with Personalities** 💬
- Regular conversational AI assistance
- **Personality Upload**: Upload chat logs of your loved ones, and Leo will learn their personality
- The agent mimics writing style, tone, and expressions
- Create memorable conversations that feel authentic

**Use Cases:**
- Conversational AI assistance
- Learning companion
- Create AI personas of family/friends for nostalgic conversations
- Role-playing and creative writing

### 4. **Custom Skill Mode** ⚡
- Define your own system prompts
- Create specialized agents for specific tasks
- Full control over agent behavior
- Perfect for custom workflows

**Examples:**
- Technical writing assistant
- Code reviewer
- Language translator
- Research assistant
- And anything else you can imagine!

### 5. **Flexible API Configuration** ⚙️
- Support for multiple providers:
   - **OpenAI** (GPT-4, GPT-4o, etc.)
   - **Grok** (xAI)
   - **Anthropic** (Claude)
   - **Ollama** (Local & Cloud)
- Custom API endpoints
- Advanced JSON request/response templating
- Temperature control for creativity
- **Built-in Proxy Server**: Handles CORS automatically

**Benefits:**
- Use your preferred AI model
- Switch providers anytime
- Privacy with local Ollama models
- Cost control with free/open-source options
- Works seamlessly from any deployment

### 6. **Data Management** 💾
- Automatic persistence in localStorage
- Import/Export all data as JSON
- Full backup capability
- Reset to default anytime

**Benefits:**
- Never lose your conversations
- Transfer data between devices
- Easy migration to new versions
- Complete data ownership

---

## 📖 How to Use

### Quick Start Guide

#### Option 1: Just Visit the Cloud Version (Easiest)

Simply visit: **https://heyleo.onrender.com/**

The cloud version includes everything - the frontend and proxy server are bundled together!

#### Option 2: Run Locally

1. **Ensure Node.js is installed** (download from https://nodejs.org)
2. **Start the server**:
    ```bash
    npm start
    ```
    or
    ```bash
    node server.js
    ```
3. Open your browser and visit: **http://localhost:8080**

That's it! The server serves both the frontend (`index.html`) and the proxy endpoint (`/proxy`) automatically.

#### Option 3: Host on Any Cloud Platform

The `package.json` includes a start script, making it easy to deploy:

**Deploy to Render:**
1. Push this repository to GitHub
2. Connect your repo (or https://github.com/dr-ankurcodes/heyleo) to [Render](https://render.com) as a Web Service
3. Use build command: `npm install`
4. Use start command: `npm start`

**Deploy to Other Platforms:**
- Heroku, Railway, Vercel, Fly.io, etc.
- All support `npm start` as the start command

### Configuration

Once Hey Leo! is running:

1. Click the **Settings** button (gear icon)
2. Select your provider (OpenAI, Grok, Anthropic, Ollama)
3. Enter your API key (if required)
4. Click **Check API** to verify
5. Click **Save**

**Note**: If you can't find your provider, don't worry, just use any provider and change settings accordingly (like api endpoint/api key/model and advanced config (if mismatches - see below for more on that))

#### Using OpenAI
- Provider: OpenAI
- API Key: Get it at https://platform.openai.com/api-keys
- Model: `gpt-4o-mini` (cheap/free) or `gpt-4o` (better)

#### Using Ollama (Cloud)
1. Visit https://ollama.com, make an account, set up an api key.
2. In Hey Leo! Settings:
   - Provider: Ollama (Cloud)
   - API Key: Enter your api key from above
   - API Endpoint: `https://ollama.com/api/chat` (will be auto-filled)
   - Model: `gpt-4.7:cloud` (or whatever cloud model you want)

#### Using Ollama (Free & Local)
1. Install Ollama from https://ollama.ai
2. Pull a model:
   ```bash
   ollama pull llama3
   ```
3. Start Ollama server:
   ```bash
   ollama serve
   ```
4. In Hey Leo! Settings:
   - Provider: Ollama (Local)
   - API Key: Enter `DUMMY`
   - API Endpoint: `http://localhost:11434/api/chat` (will be auto-filled)
   - Model: `llama3` (or whatever you pulled)

### Advanced Configuration

The proxy server URL is automatically set to the same origin as Hey Leo! (`window.location.origin + '/proxy'`). 

If you're hosting the frontend and proxy server separately:
1. Go to Settings → Advanced Configuration
2. Change "Proxy Server URL" to your proxy server's address
3. Save settings

### Using the Three Modes

#### 🗣️ Chat Mode (Default)
1. Type your message in the input box
2. Press Enter or click the send button
3. Click the personality icon (👤) to set a custom personality
   - **Manual**: Write a personality description
   - **From Chats**: Upload a `.txt` file with chat logs to learn someone's personality

#### 💻 Code Generation Mode
1. Click the **Code** button in the top bar
2. Describe what you want to build (e.g., "Create a weather dashboard with search functionality")
3. Leo will decompose the task and generate code in parallel
4. Click **Download Zip** to get the complete project
5. To modify the code, just describe your changes (e.g., "Add a dark mode toggle")

**Tips:**
- Be specific about requirements
- Mention frameworks or technologies you prefer
- Code mode stores your project in memory for continuation
- Use "help me understand..." to get code explanations

#### ⚡ Custom Skill Mode
1. Click the **Custom Skill** button in the top bar
2. Click the skill icon tools (🔧) to define your custom prompt
3. Write a detailed system prompt describing the skill
4. Save and start chatting with your custom agent

**Example Prompts:**
- "You are a technical writing assistant. Explain complex concepts in simple terms..."
- "You are a code reviewer. Point out bugs, security issues, and suggest improvements..."
- "You are a language translator. Translate any text to Spanish..."

### Advanced Settings

#### Custom API Configuration
If the provider defaults don't work, use **Advanced Configuration**:

**Request JSON Template**:
```json
{
  "model": "{{model}}",
  "messages": {{messages}},
  "temperature": {{temperature}}
}
```

**Response JSON Path**:
- OpenAI: `choices.0.message.content`
- Anthropic: `content.0.text`
- Ollama: `message.content`
- Custom: Depends on API format (use dot notation)

#### Data Management
- **Export Data**: Backup all settings and chats as JSON
- **Import Data**: Restore from backup
- **Reset Data**: Clear everything and start fresh

---

## 🛠️ Technical Architecture

### Code Architecture Highlights

- **Single File Frontend**: All HTML, CSS, and JavaScript in `index.html`
- **LocalStorage**: Browser-based persistence (no backend database needed)
- **Proxy Server**: Node.js HTTP server serves both frontend and handles API proxying
- **Fetch API**: Standard browser API for HTTP requests
- **JSZip & FileSaver**: For ZIP file generation and downloads (loaded from CDN)

### Why the Proxy Server?

Browser security policies (CORS) prevent direct API calls from web-hosted pages to arbitrary endpoints. 

**The Solution:**

The `server.js` is an all-in-one solution that:
1. Serves the `index.html` frontend
2. Provides a `/proxy` endpoint that forwards requests to any LLM provider (OpenAI, Grok, Anthropic, Ollama)
3. Returns responses to Hey Leo!

This architecture allows:
- **Local development**: Just run `node server.js` - everything works out of the box
- **Cloud hosting**: Deploy the same server.js - no separate hosting needed
- **Flexible deployment**: You can separate frontend and proxy if needed (editable in Advanced Settings)

### Deployment Architecture

```
Local Development:          Cloud Hosting:
┌─────────────┐             ┌─────────────────┐
│  Browser    │             │  Browser (User) │
└──────┬──────┘             └────────┬────────│
       │                             │
       │ http://localhost:8080        │ https://yourdomain.com
       │                             │
┌──────▼──────┐             ┌────────▼─────────┐
│  server.js  │             │   server.js      │
│  - index.html│            │   (on Render/    │
│  - /proxy   │             │    Heroku/etc)   │
└──────┬──────┘             └────────┬─────────│
       │                             │
       │ API Requests                 │ API Requests
       │                             │
┌──────▼──────┐             ┌────────▼─────────┐
│ LLM Provider│             │   LLM Provider   │
│ (OpenAI/...)│             │  (OpenAI/...)    │
└─────────────┘             └──────────────────┘
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js**: Download from https://nodejs.org (required for server.js)
- Modern web browser (Chrome, Firefox, Safari, Edge)
- API key (for OpenAI, Grok, Anthropic) OR local LLM (Ollama)

### Installation

#### Method 1: Use the Cloud Version (No setup required)
Visit: **https://heyleo.onrender.com/**

#### Method 2: Run Locally
```bash
# Clone the repository
git clone https://github.com/dr-ankurcodes/heyleo.git
cd heyleo

# Install dependencies (optional - server.js has no npm dependencies)
npm install

# Start the server
npm start
# or
node server.js
```

Then open http://localhost:8080 in your browser.

#### Method 3: Deploy to Cloud
Push to GitHub and connect to Render, Heroku, Railway, etc.
Build command: `npm install`
Start command: `npm start`

### Development Mode

To modify the code:

1. Edit the `index.html` file
2. Restart the server (Ctrl+C, then `npm start` again)
3. Refresh your browser
4. Changes are reflected immediately

The `package.json` is set up for easy cloud deployment with minimal configuration.

---

## 🔮 Future Enhancements

Potential improvements for future versions:

- [ ] Streaming responses for real-time generation
- [ ] Voice input/output
- [ ] File upload support (PDF, images)
- [ ] Multiple chat windows simultaneously
- [ ] Plugin system for custom tools
- [ ] WebAssembly for client-side LLM
- [ ] Sync across devices via cloud storage
- [ ] Team collaboration features

---

## 📦 Deployment Options

| Option           | URL                                 | Best For                                 | Difficulty
|------------------|-------------------------------------|------------------------------------------|------------
| **Live Demo**    | https://heyleo.onrender.com/        | Quick tests, no setup                    | ⭐
| **Local**        | `npm start` → http://localhost:8080 | Development, privacy                     | ⭐⭐
| **Cloud**        | Deploy `server.js` to Render/Heroku | Personal deployment                      | ⭐⭐
| **GitHub Pages** | Host `index.html` only              | Static hosting (requires separate proxy) | ⭐⭐⭐

### Deployment Cheat Sheet

**Deploy to Render (Recommended):**
```bash
# Push to GitHub
git add .
git commit -m "Deploy to Render"
git push

# On Render:
# 1. Create New Web Service
# 2. Connect GitHub repo
# 3. Build: npm install
# 4. Start: npm start
# 5. Deploy!
```

**Deploy to Heroku:**
```bash
heroku create your-app-name
git push heroku main
```

**Deploy to Railway:**
```bash
railway login
railway init
railway up
```

---

## 📄 License

Copyright (C) 2026 Dr. Ankur Sharma (@drankurcodes)

This project is licensed under the **GNU Affero General Public License v3.0 or later (AGPL-3.0-or-later)**. See the `LICENSE` file for the full license text.

If you interact with this software over a network (for example, via a web service), the AGPL requires that the complete corresponding source be made available to those users. The source for this project is available from this repository: https://github.com/dr-ankurcodes/heyleo (or the URL of the repository/Pages site).

---

## 🙏 Acknowledgments

- Built for **Bridgemind Hackathon**
- LLM providers: OpenAI, Anthropic, xAI, Ollama
- Icons from standard SVG libraries
- JSZip & FileSaver for file handling
- Hosted on [Render](https://render.com)

---

## 📞 Support

**Live Instance**: https://heyleo.onrender.com/

### Troubleshooting

- **Server won't start**: Make sure Node.js is installed and port 8080 is not in use
- **CORS errors**: Ensure the proxy server URL in Advanced Settings matches your server URL
- **API errors**: Check your API key and endpoint configuration
- **Ollama not found**: Make sure `ollama serve` is running

For issues:
- Review the code comments in `index.html` and `server.js`
- Check browser console for errors
- Verify API configuration in Settings
- [Raise an issue on GitHub](https://github.com/dr-ankurcodes/heyleo/issues)

For questions or suggestions:
- Email: dr.ankurcodes@gmail.com
