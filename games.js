// ============================================================
// 這是你日後最常修改的檔案。
// 1. categories：網站有哪些遊戲分類。
// 2. games：每一款遊戲的名稱、分類、介紹、網址與圖片。
// 詳細方法請閱讀 README.md。
// ============================================================

const categories = [
  { id: "jelly-world", name: "休閒遊戲" },
  { id: "puzzle", name: "益智解謎" },
  { id: "color-test", name: "視覺測驗" },
  { id: "casual", name: "抽獎活動" },
];

const games = [
  {
    name: "每日幸運拉霸",
    category: "casual",
    description: "每天轉幾次拉霸，看看水母們帶來什麼好運。",
    url: "https://alberthuang-012s.github.io/012s-slot-game/",
    image: "reference/jelly slot.png",
  },
  {
    name: "Jelly Chain 連鎖實驗室",
    category: "casual",
    description: "讓三隻以上相連的 Jelly 自動消除，看看連鎖能把快樂級獎勵放大多少。",
    url: "https://alberthuang-012s.github.io/012s-jelly-chain-game/",
    image: "reference/jelly chain.png",
  },
  {
    name: "012S Jelly World 水母世界",
    category: "jelly-world",
    description: "前往水母世界探索，並且與阿長和莘蒂互動。",
    url: "https://alberthuang-012s.github.io/012s-jelly-world/",
    image: "reference/jelly word.png",
  },
  {
    name: "Jelly Sudoku 水母數獨",
    category: "puzzle",
    description: "把水母排進正確位置：每行、每列各一隻，九宮格內野只能有一隻。",
    url: "https://alberthuang-012s.github.io/012s-jelly-sudoku/",
    image: "reference/jelly sudoku.png",
  },
  {
    name: "Jelly Untangle 水母解結",
    category: "puzzle",
    description: "拖動水母解開交錯的能量線，讓所有連線不再相交。",
    url: "https://alberthuang-012s.github.io/012s-jelly-untangle/",
    image: "reference/jelly untangle.png",
  },
  {
    name: "Jelly Rescue 小水母救援任務",
    category: "jelly-world",
    description: "觀察居民狀況、選擇合適道具，認識PPA+1、NAP+1的功能，在巡邏途中完成救援，還有隱藏PNN+3小彩蛋唷。",
    url: "https://alberthuang-012s.github.io/012s-jelly-rescue/",
    image: "reference/jelly rescue.png",
  },
  {
    name: "Jelly Color Test 色彩辨識測驗",
    category: "color-test",
    description: "從彩色圓點中找出隱藏數字，測驗會依你的回答調整難度。",
    url: "https://alberthuang-012s.github.io/012s-jelly-color-test/",
    image: "reference/jelly color test.png",
  },
    {
    name: "水母養成所 Jelly Lab",
    category: "jelly-world",
    description: "摸摸、聊天、餵食並裝扮你的水母，陪牠一步步成長。",
    url: "https://alberthuang-012s.github.io/jelly-lab-mvp/",
    image: "reference/jelly lab.png",
  },
];
