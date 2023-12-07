let userName = getFirstName("Ana-Julia-Menezes-Lobato", "-")
console.log("Seja bem vindo, " + userName)
function getFirstName(name, splitChar){
    let firstName = name.split(splitChar)[3]
return firstName
}
