// 商品マスター
[
    { "id": 1, "name": "りんご", "price": 100, "Category": 1 }
];
console.log([0]);
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
    id;
    productid;
    name;
    storage;
    price;
    category;
    static number = 0;
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
export {};
//# sourceMappingURL=script.js.map