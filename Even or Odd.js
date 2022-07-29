// Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

// Argüman olarak bir tamsayı alan ve çift sayılar için "Çift" veya tek sayılar için "Tek" döndüren bir işlev oluşturun.

function even_or_odd(number) {
  if (number % 2 === 0) {
    return "Even";
  } else {
    return "Odd";
  }
}

console.log(even_or_odd(2));
console.log(even_or_odd(7));
console.log(even_or_odd(-42));
console.log(even_or_odd(-7));
console.log(even_or_odd(0));
