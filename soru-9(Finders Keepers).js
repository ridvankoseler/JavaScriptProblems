/* Kim bulduysa onundur
Bir arr dizisine bakan ve içindeki bir 'doğruluk testini' geçen ilk öğeyi döndüren bir işlev oluşturun. Bu, bir x öğesi verildiğinde, func(x) doğruysa 'doğruluk testinin' geçildiği anlamına gelir. Hiçbir öğe testi geçmezse, tanımsız döndür. */

function findElement(arr, func) {
  let num = 0;
    for(let i = 0; i < arr.length ;i++){
        num = arr[i]
        if(func(num)) {
            num += arr[i]
        }
    return num;

    }
    else{
        return undefined
    }
  
}
console.log(findElement([1, 2, 3, 4], (num) => num % 2 === 0));
