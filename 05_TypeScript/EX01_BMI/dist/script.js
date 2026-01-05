// BMI計算ツール
let output = document.getElementById('output');
let heightInput = document.getElementById('height');
let weightInput = document.getElementById('weight');
let calcBtn = document.getElementById('calc');
// 肥満度と
// 戻り値を複数にしたい場合tuple、インターフェース、クラスなどを使う。
function calcBMI(height, weight) {
    // cmをmに変換
    const heightM = height / 100;
    // BMI計算
    const bmi = weight / (heightM * heightM);
    // 
    let category;
    if (bmi < 18.8) {
        category = '低体重';
    }
    else if (bmi < 25) {
        category = '普通体重';
    }
    else if (bmi < 30) {
        category = '肥満(1度)';
    }
    else if (bmi < 35) {
        category = '肥満(2度)';
    }
    else if (bmi < 40) {
        category = '肥満(3度)';
    }
    else {
        category = '肥満(4度)';
    }
    return [category, bmi];
}
calcBtn.addEventListener('click', () => {
    const height = Number(heightInput.value);
    const weight = Number(weightInput.value);
    const result = calcBMI(height, weight);
    output.innerHTML = `
    
    BMI:${result[0]}
    判定:${result[1]}


    `;
});
export {};
//# sourceMappingURL=script.js.map