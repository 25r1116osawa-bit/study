// BMI計算ツール

// BMICategory では６つのカテゴリーのどれかしか扱えなくなる。
type BMICategory = '低体重' | '普通体重' | '肥満(1度)' | '肥満(2度)' | '肥満(3度)' | '肥満(4度)' 

let output = document.getElementById('output') as HTMLElement
let heightInput = document.getElementById('height') as HTMLInputElement
let weightInput = document.getElementById('weight') as HTMLInputElement
let calcBtn = document.getElementById('calc') as HTMLButtonElement

// 肥満度と
// 戻り値を複数にしたい場合tuple、インターフェース、クラスなどを使う。
function calcBMI(height: number,weight: number): [BMICategory,number]{
    // cmをmに変換
    const heightM = height / 100;
    // BMI計算
    const bmi = weight / (heightM * heightM)
    // 
    let category: BMICategory;
    if (bmi < 18.8){
        category = '低体重'
    }else if (bmi < 25){
        category = '普通体重'
    }else if (bmi < 30){
        category = '肥満(1度)'
    }else if (bmi < 35){
        category = '肥満(2度)'
    }else if (bmi < 40){
        category = '肥満(3度)'
    }else{
        category = '肥満(4度)'
    }
    return [category,bmi]
}

calcBtn.addEventListener('click',() => {
    const height = Number(heightInput.value)
    const weight = Number(weightInput.value)

    const result: [BMICategory,number] = calcBMI(height,weight)

    output.innerHTML = `BMI:${result[0]}判定:${result[1]} `

})