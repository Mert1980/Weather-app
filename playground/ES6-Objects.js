// Object property shorthand

const name = "Mert"
const userAge = 39

const user = {
    name: name,
    age: userAge,
    location: "Belgium"
}
console.log(user)

// Object destructuring

const product = {
    label: "Apple Notebook",
    price: 2000,
    stock: 200,
    salePrice: undefined
}
// ***long way***

// const label = product.label
// const stock = product.stock
// console.log(label, stock);

// ***efficient way***
const {label: productLabel, price, stock, salePrice} = product
console.log(productLabel, stock)


