# teacher-create-a-class-tools — 新建專案

## 對話開始時請先讀
進度與最近更動都在 Obsidian：`G:\我的雲端硬碟\工作筆記本\專案紀錄\開啟新專案的所需流程與技能\工作筆記.md`

## 工作模式
- **加新工具**：對 Claude 說「我想做一個 XXX 工具」→ Claude 會建 `tools/<工具名>/` 子資料夾、引導我跟著 EP10 影片做
- **結束工作**：對 Claude 說「**收工**」→ 自動 commit + push + 更新 Obsidian 工作筆記
- **接續工作**：對 Claude 說「讀工作筆記、告訴我上次做到哪」

## 工作桌 + 三個家
- 📋 GDrive 工作桌：`G:\我的雲端硬碟\Ai Code\00_新建專案工作流`（自動跨電腦同步）
- 🐙 GitHub repo：`sanshinechu/teacher-create-a-class-tools`（公開，網頁的家）
- 📘 Obsidian 駕駛艙：`G:\我的雲端硬碟\工作筆記本\專案紀錄\開啟新專案的所需流程與技能\工作筆記.md`（想法的家）
- 🗄️ 資料庫：Firebase（擱置中，待換網路/瀏覽器環境重新登入）；Supabase 待設定

## 生圖與 AI 能力（本機已設定）
- 🎨 生圖：Vertex AI Gemini 3.1 Flash Image（全域 `draw` skill，吃 Google Cloud 折抵金）
- 🤖 雲端 AI：Gemini 免費 API（環境變數 `GEMINI_API_KEY`）
- 💻 本地 AI：Ollama `gemma4:e4b`（免費、離線）

## 工具清單
（之後加新工具時會自動更新）
- （尚無；AI 三方共修已獨立到 `Ai Code\15_ai-debate`）

## 工作注意事項
- 學生資料一律去識別化（只用座號 + 班級代號）
- commit 訊息要寫清楚做了什麼 + 為什麼
- 收工前說「收工」讓 Claude 同步三方
