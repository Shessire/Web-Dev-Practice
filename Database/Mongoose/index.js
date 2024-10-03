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
// const amadeus = new Movie({title: "Amadeus", year: 1986, score: 9.5, rating: "R"});

// Movie.insertMany([
//   { title: 'Amelie', year: 2001, score: 8.3, rating: 'R' },
//   { title: 'Alien', year: 1979, score: 8.1, rating: 'R' },
//   { title: 'The Iron Giant', year: 1999, score: 7.5, rating: 'PG' },
//   { title: 'Stand By Me', year: 1986, score: 8.6, rating: 'R' },
//   { title: 'Moonrise Kingdom', year: 2012, score: 7.3, rating: 'PG-13' } 
// ])
//   .then(data => {
//     console.log("IT WORKED")
//     console.log(data)
//   })

//Movie.find({}).then(data => console.log(data))
//Movie.updateMany({title: {$in: ['Amadeus', 'Stand By me']}}, {score: 10}).then(res => console.log(res))
//Movie.findOneAndUpdate({title: 'The Iron Giant'}, {score: 7.8}, {new: true}).then(m => console.log(m))