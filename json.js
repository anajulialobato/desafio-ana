//json = JavaScript Object Notation
// chave e valor com o objetivo de transferir dados 

let invoice = {
    name: "felipe",
    age: 28,
    products: {
        0: ["mouse etcs", 29.90],
        1: ["teclado", 28.80],
        2: ["monitor", 22.22]

    },
taxes:"99.99"
}
console.log(invoice)
let name = "Felipe"
let age = "28"
let products = ["mouse etcs", "teclado", "monitor"]
let productsValues = [29.90, 129.99, 899.99]

generateInVoice(invoice)

function generateInVoice(invoice){
    console.log(`O comprador é ${invoice.name}`)
    console.log(`A idade é ${invoice.age}`)
    
    
    for(let index in invoice.products){
        let [productName, productPrice] = invoice.products[index]
        console.log(`- ${productName}: R$ ${productPrice}`)
    }
}

 clas