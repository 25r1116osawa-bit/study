declare const TAX = 0.1;
declare enum Category {
    FOOD = "\u98DF\u54C1",
    DRINK = "\u98F2\u6599",
    DAILY = "\u65E5\u7528\u54C1"
}
interface Product {
    id: string;
    name: string;
    price: number;
    category: Category;
}
declare class Inventory implements Product {
    id: string;
    productid: number;
    name: string;
    storage: number;
    price: number;
    category: Category;
    static number: number;
    constructor(id: string, productid: number, name: string, storage: number, price: number, category: Category);
    sales(): {
        excludingTax: number;
        includingTax: number;
        taxAmount: number;
    };
}
//# sourceMappingURL=script.d.ts.map