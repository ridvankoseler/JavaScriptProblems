// Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

// Return your answer as a number.

// Dizeler ve sayılar olarak bir tamsayı dizisi verildiğinde, dizi değerlerinin toplamını hepsi sayıymış gibi döndürün.

// Cevabınızı sayı olarak döndürün.

// function sumMix(x) {
//   let result = 0;
//   for (let i = 0; i < x.length; i++) {
//     result += Number(x[i]);
//   }
//   return result;
// }
// console.log(sumMix([9, 3, "7", "3"]));

// function sumMix(x).map((item)=>{
//   return item += Number(item)
  
// })


function sumMix(x){
  let sum = 0
  x.map((item)=>{
    sum += Number(item) 
  })
  return sum
}


function sumMix(x){
  let result = 0
  for(let i = 0; i< x.length ; i++){
    result += Number(x[i])
  }
  return result
}
console.log(sumMix([9, 3, "7", "3"]));