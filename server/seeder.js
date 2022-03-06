// Import the model
let Product = require('./app/model')
// Import mongoose
let mongoose = require('mongoose')

// Connect to Mongodb
mongoose.connect('mongodb://172.17.0.2:27017/', { useNewUrlParser: true })
// Define seeds
let products = [
    new Product({
        name: 'IPhone6',
        brand: 'Apple',
        desc: 'This product is sold only in Apple stores!',
        color: 'red',
        price: 500,
        amount: 0
    }),
    new Product({
        name: 'IPhone7',
        brand: 'Apple',
        desc: 'This product is sold only in Apple stores!',
        color: 'red',
        price: 700,
        amount: 0
    }),
    new Product({
        name: 'IPhone8',
        brand: 'Apple',
        desc: 'This product is sold only in Apple stores!',
        color: 'red',
        price: 900,
        amount: 0
    }),
    new Product({
        name: 'IPhone9',
        brand: 'Apple',
        desc: 'This product is sold only in Apple stores!',
        color: 'red',
        price: 1200,
        amount: 0
    }),
    new Product({
        name: 'IPhone10',
        brand: 'Apple',
        desc: 'This product is sold only in Apple stores!',
        color: 'red',
        price: 1500,
        amount: 0
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