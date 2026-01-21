const fetchDogData = async () => {
      // 画像入りの封筒が届いたイメージ await fetchで通信が完了するまで待機します。
      const response = await fetch("https://dog.ceo/api/breeds/image/random");
      // bodyの中身をjsonとして解析が終わるまで、待機します。
      const data = await response.json();
      // 解析が終わると{ message: "url...", status: "success" }というオブジェクトが入る。
      return data;
  }
  
const dog = await fetchDogData(); 
console.log(dog.message)
// 呼び出し側での見え方
// この fetchDogData を使う側では、以下のように「封筒（Promise）」を開ける作業が再度必要になります。

// JavaScript
// // 1. await を使う場合（直感的）
// const dog = await fetchDogData(); 
// console.log(dog.message); // 画像URLが表示される

// // 2. .then() を使う場合
// fetchDogData().then(dog => {
//   console.log(dog.message);
// });