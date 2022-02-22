// Import the model
let Product = require('./model')
// Import mongoose
let mongoose = require('mongoose')

// Connect to Mongodb
mongoose.connect('mongodb://localhost/resthub', { useNewUrlParser: true })
// Define seeds
let products = [
    new Product({
        name: 'IPhone6',
        brand: 'Apple',
        desc: 'This product is sold only in Apple stores!',
        color: 'red',
        price: 500,
        amount: 1
    }),
    new Product({
        name: 'IPhone7',
        brand: 'Apple',
        desc: 'This product is sold only in Apple stores!',
        color: 'red',
        price: 700,
        amount: 1
    }),
    new Product({
        name: 'IPhone8',
        brand: 'Apple',
        desc: 'This product is sold only in Apple stores!',
        color: 'red',
        price: 900,
        amount: 1
    }),
    new Product({
        name: 'IPhone9',
        brand: 'Apple',
        desc: 'This product is sold only in Apple stores!',
        color: 'red',
        price: 1200,
        amount: 1
    }),
    new Product({
        name: 'IPhone10',
        brand: 'Apple',
        desc: 'This product is sold only in Apple stores!',
        color: 'red',
        price: 1500,
        amount: 1
    }),    
]

let done = 0

for(let i=0;i<products.length;i++){
    products[i].save(function(err, result){
        done++
        if(done === products.length)
            exit()
    })
}

function exit(){
    mongoose.disconnect()
}