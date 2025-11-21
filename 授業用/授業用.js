// 右側の表示エリア
const contentArea = document.getElementById("content-area");

// 親項目（子ULを持つ li）
const parentItems = document.querySelectorAll(".parent > li");

// 子項目（Markdown 読み込み対象）
const childItems = document.querySelectorAll(".child li");

/* ============================
   アコーディオン（開閉）
   ============================ */
parentItems.forEach(parent => {
  parent.addEventListener("click", () => {

    // 子ULを取得
    const childUl = parent.querySelector(".child");
    if (!childUl) return;

    // 開閉を切り替える
    childUl.classList.toggle("open");
  });
});

/* ============================
   子項目クリック → Markdown 読み込み
   ============================ */
childItems.forEach(item => {
  item.addEventListener("click", async (event) => {

    // 親のクリックが発火しないようにする
    event.stopPropagation();

    // アクティブ表示の切り替え
    childItems.forEach(i => i.classList.remove("active"));
    item.classList.add("active");

    const file = item.dataset.file;

    if (file) {
      try {
        const response = await fetch(`markdown/${file}`);

        if (!response.ok) {
          throw new Error("ファイルを読み込めませんでした");
        }

        const text = await response.text();

        // Markdown → HTML に変換
        const html = marked.parse(text);

        contentArea.innerHTML = `
          <h2>${file}</h2>
          <div class="markdown-body">${html}</div>
        `;

      } catch (error) {
        contentArea.innerHTML = "Markdown ファイルを読み込めませんでした。";
      }
      return;
    }

    contentArea.innerHTML = "内容がありません。";

  });
});
