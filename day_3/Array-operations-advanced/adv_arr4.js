// ADVANCED ASSIGNMENT 4: movie array with filtering and rating operations
let movies = [
  { id: 1, title: "Inception", genre: "Sci-Fi", rating: 8.8 },
  { id: 2, title: "Joker", genre: "Drama", rating: 8.4 },
  { id: 3, title: "Avengers", genre: "Action", rating: 8.0 },
  { id: 4, title: "Interstellar", genre: "Sci-Fi", rating: 8.6 }
]

// 1. Filter only Sci-Fi movies
let sciFiMovies = movies.filter((movie) => movie.genre === "Sci-Fi")
console.log(sciFiMovies)

// 2. Map movies to formatted title strings with ratings
let titlesWithRating = movies.map((movie) => {
  return movie.title + " (" + movie.rating + ")"
})
console.log(titlesWithRating)

// 3. Calculate average rating using reduce
let averageRating = movies.reduce((total, movie) => total + movie.rating, 0) / movies.length
console.log(averageRating)

// 4. Find the movie titled "Joker"
let jokerMovie = movies.find((movie) => movie.title === "Joker")
console.log(jokerMovie)

// 5. Get the index of the movie "Avengers"
let avengersIndex = movies.findIndex((movie) => movie.title === "Avengers")
console.log(avengersIndex)