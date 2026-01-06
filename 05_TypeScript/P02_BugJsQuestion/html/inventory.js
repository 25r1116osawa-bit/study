// 🛒 闇の在庫管理システム (inventory.js)

// ぐちゃぐちゃな初期データ『基本的に変更しないで下さい。』
const inventory = [
  { id: 1, name: "MacBook Pro", price: "250000", stock: 5, category: "PC" },
  { id: 2, name: "iPad Air", price: 80000, stock: "10", category: "Tablet" },
  { id: 3, name: "USB-C Cable", price: 1500, stock: 100 }, 
  { id: "4", name: "Mouse", price: 5000, stock: 0, category: "Accessory" }, // IDが文字列
  null, // 謎のデータ混入
];

// 商品を検索する関数（存在しないIDを入れると爆発する）
function findItemById(id) {
  return inventory.find(item => item.id == id);
}

// 在庫の合計金額を計算する（文字列結合バグが発生する）
function calculateTotalValue() {
  let total = 0;
  inventory.forEach(item => {
    // nullチェックがない
    total += (item.price * item.stock); 
  });
  return total;
}

// 商品のステータスを更新する（スペルミスし放題）
function updateStatus(item, status) {
  // statusは "InStock", "LowStock", "OutOfStock" のいずれかのみ想定
  item.status = status;
  console.log("Status updated to: " + item.status);
}


// --- ここからがHTML操作のJS ---

const inventoryListDiv = document.getElementById('inventory-list');
const totalValueDiv = document.getElementById('total-value');
const updateButton = document.getElementById('update-button');
const itemIdInput = document.getElementById('item-id');
const updateMessage = document.getElementById('update-message');
const loadErrorDiv = document.getElementById('load-error');

// 商品一覧を表示する関数
function displayInventory() {
    inventoryListDiv.innerHTML = ''; // 一旦クリア
    try {
        inventory.forEach(item => {
            // ここで null や category 欠落でエラーが出る！
            const itemCard = document.createElement('div');
            itemCard.className = `item-card ${item.stock === 0 ? 'out-of-stock' : ''} ${!item.category ? 'critical-error' : ''}`;
            itemCard.innerHTML = `
                <div>
                    <span>ID:</span> ${item.id} <br>
                    <span>Name:</span> ${item.name} <br>
                    <span>Price:</span> ${item.price}円 <br>
                    <span>Stock:</span> ${item.stock} <br>
                    <span>Category:</span> ${item.category || '不明'}
                </div>
            `;
            inventoryListDiv.appendChild(itemCard);
        });
    } catch (e) {
        // UIにエラーを表示
        loadErrorDiv.style.display = 'block';
        console.error("表示エラー:", e);
    }
}

// 合計金額を更新する関数
function updateTotalValue() {
    try {
        const total = calculateTotalValue(); // ここで NaN や文字列結合が発生！
        totalValueDiv.textContent = `合計金額: ${total.toLocaleString()}円`;
    } catch (e) {
        totalValueDiv.textContent = '合計金額: 計算不能なエラー！';
        console.error("合計金額計算エラー:", e);
    }
}

// ボタンクリックでステータス更新
updateButton.addEventListener('click', () => {
    const idToUpdate = parseInt(itemIdInput.value); // IDが文字列の場合NaNになる
    const targetItem = findItemById(idToUpdate);

    if (targetItem) {
        updateStatus(targetItem, "OutOfStok"); // わざとタイポ！
        updateMessage.textContent = `商品ID ${idToUpdate} のステータスを更新しました (多分)`;
        displayInventory(); // 表示を再更新
        updateTotalValue(); // 合計も再計算
    } else {
        updateMessage.textContent = `商品ID ${idToUpdate} は見つかりませんでした。`;
    }
});

// ページロード時に実行
displayInventory();
updateTotalValue();