const pikachu = {
  name: "ピカチュウ",
  type: "でんき",
  attack() {
    return "ピカチュウは10まんボルトを使った！";
  }
};

const charmander = {
  name: "ヒトカゲ",
  type: "ほのお",
  attack() {
    return "ヒトカゲはかえんほうしゃを使った！";
  }
};

const squirtle = {
  name: "ゼニガメ",
  type: "みず",
  attack() {
    return "ゼニガメはみずでっぽうを使った！";
  }
};

output.innerHTML += `${pikachu.name}（タイプ：${pikachu.type}）<br>`;
output.innerHTML += pikachu.attack() + "<br><br>";

output.innerHTML += `${charmander.name}（タイプ：${charmander.type}）<br>`;
output.innerHTML += charmander.attack() + "<br><br>";

output.innerHTML += `${squirtle.name}（タイプ：${squirtle.type}）<br>`;
output.innerHTML += squirtle.attack() + "<br><br>";



