// 値が変化する、取得する要素を予め変数に格納しておく
let innumber1 = document.getElementById('innumber1');
let innumber2 = document.getElementById('innumber2');
let keisan = Number(innumber1) + Number(innumber2);

function plus() {
    let a = Number(innumber1.value);
    let b = Number(innumber2.value);
    let keisan = a + b;  
    document.getElementById('result').textContent = keisan;
}

function minus() {
    let a = Number(innumber1.value);
    let b = Number(innumber2.value);
    let keisan = a - b;  
    document.getElementById('result').textContent = keisan;
}

function zyousan() {
    let a = Number(innumber1.value);
    let b = Number(innumber2.value);
    let keisan = a * b;  
    document.getElementById('result').textContent = keisan;
}

function wari() {
    let a = Number(innumber1.value);
    let b = Number(innumber2.value);
    let keisan = a / b; 
    document.getElementById('result').textContent = keisan;
}

function zyouyo() {
    let a = Number(innumber1.value);
    let b = Number(innumber2.value);
    let keisan = a % b;  
    document.getElementById('result').textContent = keisan;
}