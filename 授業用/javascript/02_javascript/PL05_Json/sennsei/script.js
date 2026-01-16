let output = document.getElementById('employeesList')
let selectCompany = document.getElementById('company')
const DORAKUE = '1'
const POKEMON = '2'


function companyChange(){
    let company = selectCompany.value
    let uri = ''
    switch (company) {
        case DORAKUE:
            uri = '../data/data.json'
            break
        case POKEMON:
            uri = 'http://localhost/data/employees'
            break
        default:
            console.log('error')
            return
    }
    fetch(uri)
        .then(response => response.json())
        .then(json => {
            console.log(json)
            let members = json.members
            let htmlStr = '<dl>'
            let empnum = 0
            members.forEach(member => {
                empnum++
                htmlStr += `
<dl>
    <dt>名前：</dt>
    <dd><a href="./detail.html?com=${company}&emp=${empnum}">${member.name}</a></dd>
    <dt>年齢：</dt>
    <dd>${member.age}</dd>
</dl>
                `
            });
            htmlStr += '</dl>'
            output.innerHTML = htmlStr
        })
}
companyChange()