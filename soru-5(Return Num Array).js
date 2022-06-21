
// Dizilerdeki En Büyük Sayıları Döndür
// Sağlanan her alt dizideki en büyük sayıdan oluşan bir dizi döndürün. Basit olması için, sağlanan dizi tam olarak 4 alt dizi içerecektir.

// Unutmayın, basit bir for döngüsüyle bir diziyi yineleyebilir ve her üyeye dizi sözdizimi arr[i] ile erişebilirsiniz.

function largestOfFour(arr) {
let result = [];
    for(let i= 0 ; i < arr.length ; i++ ){
      let largestNumber = arr[i][0];
      
      for(let j = 1 ; j< arr[i].length; j++){
        if (arr[i][j] > largestNumber){
          largestNumber = arr[i][j]
        }
        
      }
      result[i] = largestNumber
    }
  return result
};
console.log(largestOfFour([
  [4, 5, 1, 3],[13, 27, 18, 26],[32, 35, 37, 39],[1000, 1001, 857, 1]]));
