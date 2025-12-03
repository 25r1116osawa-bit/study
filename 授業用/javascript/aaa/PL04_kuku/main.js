let output1 = document.getElementById('output1')
let output2 = document.getElementById('output2')
let output3 = document.getElementById('output3')
let output4 = document.getElementById('output4')
let output5 = document.getElementById('output5')
// 初期化式：for文に初めて訪れた時実行される。
// let index = 0;
// 条件式：条件式の判定がtrueだったとき、ブロックが実行される
// 増分式：ブロック実行後に実行され、後に条件式で判定を行う。

//課題1 

for (let index = 1; index < 10; index++){
    for(let j=1; j < 10; j++){
        box = index * j
        output1.innerHTML += box + " "
    }
}

/*
for (let index = 1; index < 10; index++) {
     output1.innerHTML += " " + (1 * index) 
}


for (let index = 1; index < 10; index++) {
     output1.innerHTML +=" " + (2 * index) 
}

for (let index = 1; index < 10; index++) {
     output1.innerHTML +=" " + (3 * index) 
}

for (let index = 1; index < 10; index++) {
     output1.innerHTML +=" " + (4 * index) 
}

for (let index = 1; index < 10; index++) {
     output1.innerHTML +=" " + (5 * index) 
}

for (let index = 1; index < 10; index++) {
     output1.innerHTML +=" " + (6 * index) 
}

for (let index = 1; index < 10; index++) {
     output1.innerHTML +=" " + (7* index) 
}

for (let index = 1; index < 10; index++) {
     output1.innerHTML +=" " + (8* index) 
}
for (let index = 1; index < 10; index++) {
     output1.innerHTML +=" " + (9* index) 
}
*/

// 課題2

for (let index = 1; index < 10; index++) {
     output2.innerHTML += "  1*" + Number(index) + "="  +Number(1 * index) + "<br>"

}

for (let index = 1; index < 10; index++) {
     output2.innerHTML += "  2*" + Number(index) + "="  +Number(2 * index) + "<br>"

}

for (let index = 1; index < 10; index++) {
     output2.innerHTML += "  3*" + Number(index) + "="  +Number(3 * index) + "<br>"

}

for (let index = 1; index < 10; index++) {
     output2.innerHTML += "  4*" + Number(index) + "="  +Number(4 * index) + "<br>"

}

for (let index = 1; index < 10; index++) {
     output2.innerHTML += "  5*" + Number(index) + "="  +Number(5 * index) + "<br>"

}

for (let index = 1; index < 10; index++) {
     output2.innerHTML += "  6*" + Number(index) + "="  +Number(6 * index) + "<br>"

}

for (let index = 1; index < 10; index++) {
     output2.innerHTML += "  7*" + Number(index) + "="  +Number(7 * index) + "<br>"

}

for (let index = 1; index < 10; index++) {
     output2.innerHTML += "  8*" + Number(index) + "="  +Number(8 * index) + "<br>"

}

for (let index = 1; index < 10; index++) {
     output2.innerHTML += "  9*" + Number(index) + "="  +Number(9 * index) + "<br>"

}


/*
const kuku = [1,2,3,4,5,6,7,8,9];
let allRows = [];


for (let dan = 1; dan <= 9; dan++) {
    let row = kuku.map(e => e * dan);
    allRows.push(row);
}

// 表示
for (let row of allRows) {
    output3.innerHTML += row.join(" ") + "<br>"; 
}
*/
/*
output3.innerHTML += "<br>"
for (let index = 0; index < kuku.length; index++) {
    const element = kuku[index];
    output3.innerHTML += [(" " + element*1)] 
}

output3.innerHTML += "<br>"
for (let index = 0; index < kuku.length; index++) {
    const element = kuku[index];
    output3.innerHTML += [(" " + element*2)] 
}

output3.innerHTML += "<br>"
for (let index = 0; index < kuku.length; index++) {
    const element = kuku[index];
    output3.innerHTML += [(" " + element*3)] 
}

output3.innerHTML += "<br>"
for (let index = 0; index < kuku.length; index++) {
    const element = kuku[index];
    output3.innerHTML += [(" " + element*4)] 
}

output3.innerHTML += "<br>"
for (let index = 0; index < kuku.length; index++) {
    const element = kuku[index];
    output3.innerHTML += [(" " + element*5)] 
}

output3.innerHTML += "<br>"
for (let index = 0; index < kuku.length; index++) {
    const element = kuku[index];
    output3.innerHTML += [(" " + element*6)] 
}

output3.innerHTML += "<br>"
for (let index = 0; index < kuku.length; index++) {
    const element = kuku[index];
    output3.innerHTML += [(" " + element*7)] 
}

output3.innerHTML += "<br>"
for (let index = 0; index < kuku.length; index++) {
    const element = kuku[index];
    output3.innerHTML += [(" " + element*8)] 
}

output3.innerHTML += "<br>"
for (let index = 0; index < kuku.length; index++) {
    const element = kuku[index];
    output3.innerHTML += [(" " + element*9)] 
}

*/
for (let dan = 1; dan <= 9; dan++) {
    for (let i = 1; i <= 9; i++) {
        output3.innerHTML += (dan * i) + " ";
    }
    output3.innerHTML += "<br>";
}


for (let dan = 1; dan <= 9; dan++) {
    for (let i = 1; i <= 9; i++) {
        output4.innerHTML += (dan * i) + " ";
    }
    output4.innerHTML += "<br>";
}



for (let dan = 1; dan <= 9; dan++) {
    for (let i = 1; i <= 9; i++) {
        output5.innerHTML += (dan * i) + " ";
    }
    output5.innerHTML += "<br>";
}