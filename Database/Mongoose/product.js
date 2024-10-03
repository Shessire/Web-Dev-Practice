const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/shopApp');
  console.log('Connected to MongoDB');
}

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    }
});

const Product = mongoose.model('Product', productSchema)

const bike = new Product({name: 'Mountain Bike', price: 599})
bike.save()
.then(data => {
    console.log("IT WORKED")
    console.log(data)
})
.catch(err => {
    console.log("ERROR")
    console.log(err)
})