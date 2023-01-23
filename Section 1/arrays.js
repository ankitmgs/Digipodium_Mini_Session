const movies = [
  "Eternals",
  "Intersteller",
  "Jungle Cruise",
  "Final Destination",
  "Shang Chi",
];

console.log(movies.length);
console.log(movies);

// indexing
console.log(movies[0]);
console.log(movies[3]);

// slicing
console.log(movies.slice(0, 3));

movies.push("paa");

console.log(movies);

console.log(movies.splice(2, 1));

console.log(movies);

console.log(movies.pop());

for (let i = 0; i < movies.length; i++) {
  console.log(movies[i]);
}

for (let mov of movies) {
  console.log(mov);
}

