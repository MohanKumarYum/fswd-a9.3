const evens = [2, 4, 6, 8];

const odds = [1, 3, 5, 7];

const primes = [2, 3, 5, 7, 11];

// New array - Combine Primes, Evens & Odds using spread operator.

const combinedArray = [...primes, ...evens, ...odds];

console.log(`Combined Array : ${combinedArray}`);

// Copy Array to new Array.

const copyArray = [...primes];

console.log(`Array Copy of Primes : ${copyArray}`);

// Destructuring Object into variable names.

var jamesBond = {
    first: "James",
    last: "Bond",
    country: "United States",
    city: "New York",
    twitter: "@jamesbond"
};

const {
    first: first,
    last: last,
    country: country,
    city: city,
    twitter: twitter
} = jamesBond;

console.log(`first : ${first}, last : ${last}, country : ${country}, city : ${city}, twitter : ${twitter}`);

// Destructuring arrays.

var players = ["paul", "andy", "darrell", "jim"];

const [player1, player2, player3, player4] = players;

console.log(`player1 : ${player1}, player2 : ${player2}, player3 : ${player3}, player4 : ${player4}`);