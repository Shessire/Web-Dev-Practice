const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/shopApp');
  console.log('Connected to MongoDB');
}

const personSchema = new mongoose.Schema({
    first: String,
    last: String
})

personSchema.virtual('fullName').get(function(){
    return `${this.first} ${this.last}`
})

personSchema.Schema.pre('save', async function (){
    this.first = 'Hey';
    this.last = 'Mom';
    console.log("ABOUT TO SAVE")
})

personSchema.Schema.post('save', async function(){
    console.log("JUST SAVED")
})

const Person = mongoose.model('Person', personSchema);