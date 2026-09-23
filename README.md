# 個人 Game Lab 樣板

這是一個純 HTML、CSS、JavaScript 製作的個人小遊戲入口網站。每張 Card 會連到已經上線的遊戲，不包含遊戲本身的程式碼。

此樣板沒有 npm、套件、框架或建置流程，適合直接放到 GitHub Pages。

## 開始使用

1. 複製整個資料夾並重新命名，例如 `your-name-game-lab`。
2. 開啟 `index.html`，修改網站名稱、副標語與網頁標題。
3. 開啟 `games.js`，刪除兩筆「範例遊戲」，換成自己的分類與遊戲。
4. 直接用瀏覽器開啟 `index.html` 檢查畫面。
5. 確認無誤後，建立自己的 GitHub repository 並啟用 GitHub Pages。

如果要交給 AI 修改，先讓 AI 完整閱讀 `AI_INSTRUCTIONS.md`。

## 檔案用途

- `index.html`：網站標題、副標語與基本骨架。
- `style.css`：色彩、排版、Card 與手機版樣式。
- `games.js`：分類與遊戲資料；日後最常修改的檔案。
- `script.js`：根據資料自動建立分類與 Card，通常不需要修改。
- `AI_INSTRUCTIONS.md`：交給 AI 的修改規格與限制。

## 修改網站名稱與副標語

在 `index.html` 修改以下三處：

```html
<title>Your Name's Game Lab</title>

<h1>Your Name's Game Lab</h1>

<p class="site-description">
  我製作的小遊戲與互動實驗。挑一款玩玩看吧！
</p>
```

`<title>` 會顯示在瀏覽器分頁；`<h1>` 是頁面上的大標題。

## 新增或修改分類

分類放在 `games.js` 的 `categories` 陣列：

```js
const categories = [
  { id: "memory", name: "記憶類" },
  { id: "reaction", name: "辨識／反應類" },
];
```

- `id`：程式內部使用，建議使用簡短英文字，不要重複。
- `name`：實際顯示在網站上的分類名稱。

新增分類範例：

```js
{ id: "logic", name: "益智／邏輯類" },
```

只要加入 `categories`，不需要修改 HTML 或 `script.js`。

## 新增遊戲

遊戲放在 `games.js` 的 `games` 陣列。複製以下格式，貼到陣列裡：

```js
{
  name: "新的遊戲",
  category: "memory",
  description: "這是一段簡短的遊戲介紹。",
  url: "https://example.com/",
  image: "",
},
```

- `name`：遊戲名稱。
- `category`：必須對應某個分類的 `id`，不是中文名稱。
- `description`：建議用一至兩句話說明玩法。
- `url`：遊戲上線網址，只放純網址，不要放 Markdown 連結語法。
- `image`：沒有圖片時維持空字串 `""`。

除了最後一筆以外，每筆 object 後方都要有逗號。即使是最後一筆，保留逗號也沒問題。

## 修改既有遊戲

在 `games.js` 找到該遊戲，直接修改對應欄位即可。若遊戲換了分類，只要修改 `category`。

## 加入圖片

1. 在專案內建立 `images` 資料夾。
2. 把圖片放進該資料夾，例如 `images/my-game.png`。
3. 修改遊戲資料：

```js
image: "images/my-game.png",
```

沒有圖片時請使用：

```js
image: "",
```

此時 Card 不會顯示圖片區塊，也不會留下空白。

建議圖片使用相同長寬比，例如 16:9，Card 會比較整齊。

## 常見錯誤

### 遊戲沒有出現

檢查 `category` 是否和 `categories` 中某個 `id` 完全相同，包含大小寫。

### 網址點不開

正確：

```js
url: "https://example.com/",
```

錯誤：

```js
url: "[遊戲名稱](https://example.com/)",
```

### 整個頁面突然空白

通常是 `games.js` 少了逗號、引號或大括號。先查看瀏覽器開發者工具的 Console，或把最近新增的那筆資料交給 AI 檢查語法。

## GitHub Pages 基本部署

1. 在 GitHub 建立新的 repository。
2. 將這五個檔案與未來的 `images` 資料夾上傳到 repository 根目錄。
3. 到 repository 的 **Settings → Pages**。
4. 在 **Build and deployment** 選擇從 branch 部署。
5. 選擇 `main` branch 與 `/ (root)` 後儲存。
6. 等候 GitHub 產生公開網址。

日後更新通常只需：

```bash
git add .
git commit -m "更新遊戲清單"
git push
```

GitHub Pages 會在推送後自動更新，可能需要稍等片刻。

## 設計原則

- 每個人維護自己的入口網站與遊戲連結。
- 只在 `games.js` 管理內容，避免把 Card 寫死在 HTML。
- 不需要為這個簡單入口引入框架或套件。
- 如果未來需要公司共用入口，另外建立團隊網站，不把不同作者的作品混成個人站。
