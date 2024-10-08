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
        min: [0, 'Price must be positive']
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
    },
    size: {
        type: String,
        enum: ['S', 'M', 'L']
    }
});

productSchema.methods.toggleOnSale = function() {
    this.onSale = !this.onSale;
    return this.save();
}

//.methods are called for individual instance. Need to fetch it first
productSchema.methods.addCategory = function(newCat) {
    this.categories.push(newCat);
    return this.save()
}

//.statics are called for model constructor itself. Multiple documents at once
productSchema.statics.fireSale = function() {
    return this.updateMany({}, { onSale: true, price: 0})
}

const Product = mongoose.model('Product', productSchema)

const findProduct = async () => {
    const foundProduct = await Product.findOne({name: 'Bike Helmet'})
        console.log(foundProduct)
        await foundProduct.toggleOnSale();
        console.log(foundProduct)
        await foundProduct.addCategory('Outdoors');
        console.log(foundProduct)

}

Product.fireSale().then(res => console.log(res));

// const bike = new Product({name: 'Cycling Jersey', price: 28.50, categories: ["Cycling"]})
// bike.save()
// .then(data => {
//     console.log("IT WORKED")
//     console.log(data)
// })
// .catch(err => {
//     console.log("ERROR")
//     console.log(err)
// })


//We need runValidators: true to tell Mongoose that we'd like to still keep the validations after the update :)
// Product.findOneAndUpdate({name: 'Tire Pump'}, {price: 9.99}, {new: true, runValidators: true})
// .then(data => {
//     console.log("IT WORKED")
//     console.log(data)
// })
// .catch(err => {
//     console.log("ERROR")
//     console.log(err)
// })