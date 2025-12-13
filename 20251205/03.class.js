class Pokemon {
  constructor(name, type, move) {
    this.name = name;
    this.type = type;
    this.move = move;    // ポケモンごとに技を変えられる
  }

  attack() {
    return `${this.name}は${this.move}を使った！`;
  }
}

const pikachu1 = new Pokemon("ピカチュウ", "でんき", "10まんボルト");
const charmander1 = new Pokemon("ヒトカゲ", "ほのお", "かえんほうしゃ");
const squirtle1 = new Pokemon("ゼニガメ", "みず", "みずでっぽう");

output.innerHTML += `${pikachu1.name}（タイプ：${pikachu1.type}）<br>`;
output.innerHTML += pikachu1.attack() + "<br><br>";

output.innerHTML += `${charmander1.name}（タイプ：${charmander1.type}）<br>`;
output.innerHTML += charmander1.attack() + "<br><br>";

output.innerHTML += `${squirtle1.name}（タイプ：${squirtle1.type}）<br>`;
output.innerHTML += squirtle1.attack()
