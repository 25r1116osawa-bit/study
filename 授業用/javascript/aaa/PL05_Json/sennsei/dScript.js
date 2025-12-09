let imgElement = document.getElementById('img')
let nameElement = document.getElementById('name')
let ageElement = document.getElementById('age')
let detailElement = document.getElementById('detail')

let url = new URL(window.location.href)
let params = url.searchParams
let com = params.get('com')
let emp = params.get('emp')

let comname = ''
let uri = ''
switch (com) {
    case '1':
        uri = '../data/data.json'
        comname = 'ドラクエ'
        break
    case '2':
        uri = 'http://localhost/data/employees'
        comname = 'ポケモン'
        break
    default:
        console.log('error')
}
fetch(uri)
    .then(response => response.json())
    .then(json => {
        console.log(json)
        let members = json.members
        let member = members[(+emp - 1)]
        nameElement.innerHTML = member.name
        ageElement.innerHTML = member.age
        detailElement.innerHTML = member.detail
        document.title = `詳細 - ${comname} - ${member.name}`
        let imguri = ''
        switch (com) {
            case '1':
                imguri = '../img/'
                break
            case '2':
                imguri = 'http://localhost/img/'
                break
            default:
                console.log('error')
        }
        imgElement.src = imguri + member.img

    })