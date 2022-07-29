// Your task is to find the nearest square number, nearest_sq(n), of a positive integer n.
// Goodluck :)
// Check my other katas:
// Alphabetically ordered
// Case-sensitive!
// Not prime numbers

// Göreviniz, pozitif bir n tamsayısının en yakın kare sayısını, en yakın_sq(n) bulmaktır.

// İyi şanlar :)
// Diğer katalarımı kontrol et:
// Alfabetik olarak sıralanmış
// Harfe duyarlı!
// asal sayılar değil

function nearestSq(n){
    let num = +Math.sqrt(n).toFixed();
    return num * num
}

console.log(nearestSq(1));
console.log(nearestSq(2));
console.log(nearestSq(10));
console.log(nearestSq(111));
console.log(nearestSq(9999));