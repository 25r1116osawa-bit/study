// 商品マスタ
const productListData = [
  { "id": "FO-1", "name": "完熟りんご", "price": 120, "category": 1 },
  { "id": "DR-1", "name": "天然水 500ml", "price": 100, "category": 2 },
  { "id": "DA-1", "name": "除菌ウェットティッシュ", "price": 350, "category": 3 },
  { "id": "DR-2", "name": "挽きたてコーヒー", "price": 450, "category": 2 },
  { "id": "FO-2", "name": "国産鶏むね肉", "price": 680, "category": 1 },
  { "id": "DR-3", "name": "オーガニック緑茶", "price": 150, "category": 2 },
  { "id": "DA-2", "name": "高級トイレットペーパー", "price": 880, "category": 3 },
  { "id": "FO-3", "name": "ミックスナッツ", "price": 980, "category": 1 },
  { "id": "DR-4", "name": "スポーツドリンク", "price": 160, "category": 2 },
  { "id": "DA-3", "name": "洗濯用洗剤 詰め替え", "price": 420, "category": 3 }
]

// 在庫テーブル
const inventoryListData = [
  { "id": "FO-1", "lotNumber": 1, "storage": 45 },
  { "id": "DR-3", "lotNumber": 2, "storage": 120 },
  { "id": "DA-2", "lotNumber": 3, "storage": 70 },
  { "id": "DA-1", "lotNumber": 4, "storage": 60 },
  { "id": "FO-1", "lotNumber": 5, "storage": 8 },
  { "id": "FO-3", "lotNumber": 6, "storage": 85 },
  { "id": "DA-1", "lotNumber": 7, "storage": 40 },
  { "id": "DA-3", "lotNumber": 8, "storage": 12 },
  { "id": "DR-1", "lotNumber": 9, "storage": 200 },
  { "id": "DR-2", "lotNumber": 10, "storage": 33 }
]

// 消費税
const TAX = 0.1

// カテゴリ
enum Category {
    FOOD = "食品",
    DRINK = "飲料",
    DAILY = "日用品"
}

// 通貨単位
const CURRENCY_UNIT = "円"

// 商品インターフェース
interface Product{
    id: string
    name: string
    price: number
    category: Category
}

// 在庫管理クラス
class Inventory implements Product{
    
    id: string
    lotNumber: number
    name: string
    storage: number
    price: number
    category: Category

    static number: number = 0

    constructor(id: string,name: string,storage: number,price: number,category: Category){
        Inventory.number++
        this.id = id
        this.lotNumber = Inventory.number
        this.name = name
        this.storage = storage
        this.price = price
        this.category = category
    }

    // 売上(税抜き、税込み、税のみ)
    sales():{excludingTax:number,includingTax:number,taxAmount:number}{
        // 消費税計算
        const taxAmount = Math.floor(this.price * TAX)
        return {
            // 税抜き
            excludingTax: this.price * this.storage,
            // 税込み
            includingTax: (this.price + taxAmount) * this.storage,
            // 税のみ
            taxAmount: taxAmount * this.storage
        }
    }

    // 情報出力
    dispInfo():void{
        console.info(this)
    }
    
}

class InventoryList{
    // 在庫リスト
    inventoryList:Inventory[]
    // pList = データベースから取得したproductList
    // iList = データベースから取得したinventoryList
    constructor(pList:{id:string,name:string,price:number,category:Category | number}[],iList:{id:string,lotNumber:number,storage:number}[]){
        // 空の在庫リストを生成
        this.inventoryList = []

        // Categoryがnumber型だったとき、Category型に変換する処理
        pList.forEach(product => {
            if(typeof product.category == 'number'){
                switch (product.category) {
                    case 1:
                        product.category = Category.FOOD
                        break;
                    case 2:
                        product.category = Category.DRINK
                        break;
                    case 3:
                        product.category = Category.DAILY
                        break;                        
                }
            } 
        });

        // 在庫情報の個数回実行
        iList.forEach(inputInventory => {
            // 商品検索(id) これをProduct型に変換
            const inputProduct:Product = pList.find(product => product.id === inputInventory.id) as Product
            // Inventoryをインスタンス化
            const inventory:Inventory = new Inventory(inputInventory.id,inputProduct.name,inputInventory.storage,inputProduct.price,inputProduct.category)
            // 在庫リストの配列に追加
            this.inventoryList.push(inventory)
        });
    }

    dispList(){
        this.inventoryList.forEach(inventory => {
            inventory.dispInfo()
        });
    }
}

const inventoryList:InventoryList = new InventoryList(productListData,inventoryListData)
inventoryList.dispList()








const categoryElement = document.getElementById("category") as HTMLSelectElement
Object.entries(Category).forEach(([key,value]) =>{
    const option = document.createElement('option')
    option.value = key
    option.text = value
    categoryElement.appendChild(option)
})

