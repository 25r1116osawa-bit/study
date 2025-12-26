// インターフェースを実装する時にはインターフェースで
// 定義されているすべてのプロパティに値を設定する必要があります。

// interfaceは、確実にその型で設定してね

interface item {
    readonly id: string
    name: string
    price: number
    description: string
    category: string
}


const earitem: item = {
  id: '1001',
  name: 'ワイヤレスイヤホン',
  price: 6980,
  description: 'test',
  category: 'イヤホン'
}

console.log (earitem)