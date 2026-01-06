declare const productListData: {
    id: string;
    name: string;
    price: number;
    category: number;
}[];
declare const inventoryListData: {
    id: string;
    lotNumber: number;
    storage: number;
}[];
declare const TAX = 0.1;
declare enum Category {
    FOOD = "\u98DF\u54C1",
    DRINK = "\u98F2\u6599",
    DAILY = "\u65E5\u7528\u54C1"
}
declare const CURRENCY_UNIT = "\u5186";
interface Product {
    id: string;
    name: string;
    price: number;
    category: Category;
}
declare class Inventory implements Product {
    id: string;
    lotNumber: number;
    name: string;
    storage: number;
    price: number;
    category: Category;
    static number: number;
    constructor(id: string, name: string, storage: number, price: number, category: Category);
    sales(): {
        excludingTax: number;
        includingTax: number;
        taxAmount: number;
    };
    dispInfo(): void;
}
declare class InventoryList {
    inventoryList: Inventory[];
    constructor(pList: {
        id: string;
        name: string;
        price: number;
        category: Category | number;
    }[], iList: {
        id: string;
        lotNumber: number;
        storage: number;
    }[]);
    dispList(): void;
}
declare const inventoryList: InventoryList;
declare const categoryElement: HTMLSelectElement;
//# sourceMappingURL=script.d.ts.map