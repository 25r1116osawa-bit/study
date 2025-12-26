// インターフェースを実装する時にはインターフェースで
// 定義されているすべてのプロパティに値を設定する必要があります。

// interfaceは、確実にその型で設定してね
// リアルタイムで

interface Authentication {
    readonly id: number;
    pass: string;
    name: string;
    login(): void; 
}

