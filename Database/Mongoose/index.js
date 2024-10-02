const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/movieApp');
  console.log('Connected to MongoDB');
}

//let's say our movie will look like this
// {
//     title: "Amadeus",
//     year: 1986,
//     score: 9.5,
//     rating: "R"
// }

const { Schema } = mongoose;
const movieSchema = new Schema({
    title: String,
    year: Number,
    score: Number,
    rating: String
})

const Movie = mongoose.model('Movie', movieSchema)
const amadeus = new Movie({title: "Amadeus", year: 1986, score: 9.5, rating: "R"});