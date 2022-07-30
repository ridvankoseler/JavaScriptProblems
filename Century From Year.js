// Introduction
// The first century spans from the year 1 up to and including the year 100, the second century - from the year 101 up to and including the year 200, etc.

// Task
// Given a year, return the century it is in.

// Examples
// 1705 --> 18
// 1900 --> 19
// 1601 --> 17
// 2000 --> 20

// giriiş
// Birinci yüzyıl, 1. yıldan 100 yıla kadar ve buna dahildir, ikinci yüzyıl - 101 yılından 200 yıla kadar ve buna dahil vb.

// Görev
// Verilen bir yıl, içinde bulunduğu yüzyılı döndürün.

function century(year) {
  let count = 0;
  for (let i = 0; i < year; i++) {
    if (i % 100 === 0) {
      count++;
    }
  }
  return count;
}

console.log(century(1705));
console.log(century(1900));
console.log(century(1601));
console.log(century(2000));