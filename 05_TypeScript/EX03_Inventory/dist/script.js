// 商品マスタ
[
    { "id": 1, "name": "完熟りんご", "price": 120, "category": 1 },
    { "id": 2, "name": "天然水 500ml", "price": 100, "category": 2 },
    { "id": 3, "name": "除菌ウェットティッシュ", "price": 350, "category": 3 },
    { "id": 4, "name": "挽きたてコーヒー", "price": 450, "category": 2 },
    { "id": 5, "name": "国産鶏むね肉", "price": 680, "category": 1 },
    { "id": 6, "name": "オーガニック緑茶", "price": 150, "category": 2 },
    { "id": 7, "name": "高級トイレットペーパー", "price": 880, "category": 3 },
    { "id": 8, "name": "ミックスナッツ", "price": 980, "category": 1 },
    { "id": 9, "name": "スポーツドリンク", "price": 160, "category": 2 },
    { "id": 10, "name": "洗濯用洗剤 詰め替え", "price": 420, "category": 3 }
];
// 消費税
const TAX = 0.1;
// カテゴリ
var Category;
(function (Category) {
    Category["FOOD"] = "\u98DF\u54C1";
    Category["DRINK"] = "\u98F2\u6599";
    Category["DAILY"] = "\u65E5\u7528\u54C1";
})(Category || (Category = {}));
// 在庫管理クラス
class Inventory {
    constructor(id, productid, name, storage, price, category) {
        Inventory.number++;
        this.id = id;
        this.productid = Inventory.number;
        this.name = name;
        this.storage = storage;
        this.price = price;
        this.category = category;
    }
    // 売上(税抜き、税込み、税のみ)
    sales() {
        // 消費税計算
        // 消費税計算
        const taxAmount = Math.floor(this.price * TAX);
        return {
            // 税抜き
            excludingTax: this.price * this.storage,
            // 税込み
            includingTax: (this.price + taxAmount) * this.storage,
            // 税のみ
            taxAmount: taxAmount * this.storage
        };
    }
}
console.log("aiueo");
export {};
//# sourceMappingURL=script.js.map