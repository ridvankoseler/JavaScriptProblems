
/* Bir Diziyi Tekrarlayın Bir Diziyi Tekrarlayın
Verilen bir dizgiyi (birinci argüman) num kez (ikinci argüman) tekrarlayın. Sayı pozitif bir sayı değilse boş bir dize döndürür. Bu zorluğun amacı için yerleşik .repeat() yöntemini kullanmayın. */

function repeatStringNumTimes(arr , num ){
    let result = "";
    for( let i = 0 ; i < num ; i++){
        result += arr;
    }
    return result;
}
console.log(repeatStringNumTimes("abc", 3));


