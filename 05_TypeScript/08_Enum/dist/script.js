// 列挙型
var PowerLevel;
(function (PowerLevel) {
    PowerLevel[PowerLevel["STOP"] = 0] = "STOP";
    PowerLevel[PowerLevel["LOW"] = 1] = "LOW";
    PowerLevel[PowerLevel["MID"] = 2] = "MID";
    PowerLevel[PowerLevel["HI"] = 3] = "HI";
})(PowerLevel || (PowerLevel = {}));
let pow01 = PowerLevel.STOP;
console.log(pow01);
pow01 = PowerLevel.HI;
console.log(pow01);
console.log(pow01);
var PowerLevel2;
(function (PowerLevel2) {
    PowerLevel2["STOP"] = "\u505C\u6B62";
    PowerLevel2["LOW"] = "\u4F4E";
    PowerLevel2["MID"] = "\u4E2D";
    PowerLevel2["HI"] = "\u9AD8";
})(PowerLevel2 || (PowerLevel2 = {}));
let pow02 = PowerLevel2.STOP;
console.log(pow02);
pow02 = PowerLevel2.HI;
console.log(pow02);
pow02 = '停止';
console.log(pow02);
export {};
//# sourceMappingURL=script.js.map