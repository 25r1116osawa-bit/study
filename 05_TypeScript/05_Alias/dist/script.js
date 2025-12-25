// 型エイリアス
// 新たに型を作成できる。(ショートカットのようなもの)
let name1 = 'aaa';
let pos1 = { lat: 2, lon: 10 };
let pos2 = { lat: 20, lon: 22 };
let pos3 = { lat: 1, lon: 0 };
let pos4 = { lat: 3, lon: 30 };
function infoGPS(pos) {
    console.log(`${pos.lat} : ${pos.lon}`);
}
infoGPS(pos1);
infoGPS(pos2);
infoGPS(pos3);
infoGPS(pos4);
export {};
//# sourceMappingURL=script.js.map