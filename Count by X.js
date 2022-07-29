// Create a function with two arguments that will return an array of the first (n) multiples of (x).

// Assume both the given number and the number of times to count will be positive numbers greater than 0.

// Return the results as an array (or list in Python, Haskell or Elixir).

// Examples:

// countBy(1,10) === [1,2,3,4,5,6,7,8,9,10]
// countBy(2,5) === [2,4,6,8,10]

// (x)'in ilk (n) katlarının bir dizisini döndürecek iki bağımsız değişkenli bir işlev oluşturun.

// Hem verilen sayının hem de sayılacak sayının 0'dan büyük pozitif sayılar olacağını varsayın.

// Sonuçları bir dizi (veya Python, Haskell veya Elixir'de liste) olarak döndürün.

function countBy(x, n) {
  let z = [];
  let y = x * n;
  for (let i = x; i <= y; i = i + x) {
    z.push(i);
  }

  return z;
}
console.log(countBy(2, 5));
console.log(countBy(1, 10));