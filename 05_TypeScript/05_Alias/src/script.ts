// 型エイリアス
// 新たに型を作成できる。(ショートカットのようなもの)

type Name = string
let name1: Name = 'aaa'


type gps = {lat: number,lon: number}
let pos1:gps = {lat:2,lon:10}
let pos2:gps = {lat:20,lon:22}
let pos3:gps = {lat:1,lon:0}
let pos4:gps = {lat:3,lon:30}

function infoGPS(pos:gps){
    console.log(`${pos.lat} : ${pos.lon}`)
}

infoGPS(pos1)
infoGPS(pos2)
infoGPS(pos3)
infoGPS(pos4)