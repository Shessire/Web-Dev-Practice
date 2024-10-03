const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/shopApp');
  console.log('Connected to MongoDB');
}

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        maxlength: 20
    },
    price: {
        type: Number,
        required: true,
        min: 0
    },
    onSale: {
        type: Boolean,
        default: false
    },
    categories: [String],
    qty: {
        online: {
            type: Number,
            default: 0
        },
        inStore: {
            type: Number,
            default: 0
        }
    }
});

const Product = mongoose.model('Product', productSchema)

const bike = new Product({name: 'Bike Helmet', price: 29.50, categories: ["Accessories", "Safety"]})
bike.save()
.then(data => {
    console.log("IT WORKED")
    console.log(data)
})
.catch(err => {
    console.log("ERROR")
    console.log(err)
})