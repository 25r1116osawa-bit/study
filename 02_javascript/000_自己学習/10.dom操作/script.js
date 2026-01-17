const outputElement = document.getElementById("output")
outputElement.innerText = "眠い"

const classElement = document.getElementsByClassName("output")
console.log(classElement)
// HTMLCollection(2) 
// [p#output.output, p#output.output, output: p#output.output]

const [classSplit1,classSplit2] =  classElement;

console.log(classSplit1.innerText = "さようなら")
console.log(classSplit2.innerText = "おはようございます。");

console.log(typeof classSplit1.innerText)
console.log(typeof classSplit1.innerText === "string" ? "文字列" : "文字列じゃない") 