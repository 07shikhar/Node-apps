const product = {
    label: 'Red notebook',
    price: 20,
    stock: 'Available',
    salePrice: undefined
}

// const label = product.label
// const stock = product.price

//destructuring
// const {label, stock} = product
// console.log(label)
//to rename an object element --> renaming label to productLabel

//destructuring a function
const{label: productLabel, stock} = product
console.log(productLabel)

const myProduct = (order, {label, stock})=>{
    console.log(order, label, stock)
}

myProduct('Sell',product)