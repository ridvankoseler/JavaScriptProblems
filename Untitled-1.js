/* Kim bulduysa onundur
Bir arr dizisine bakan ve içindeki bir 'doğruluk testini' geçen ilk öğeyi döndüren bir işlev oluşturun. Bu, bir x öğesi verildiğinde, func(x) doğruysa 'doğruluk testinin' geçildiği anlamına gelir. Hiçbir öğe testi geçmezse, tanımsız döndür. */

function findElement(arr, func) {
  let num = 0;
    for(let i = 0; i < arr.length ;i++){
        num = arr[i]
        if(func(num)) {
            return num;
        }
    }
  
}
console.log(findElement([1, 3, 5, 8, 9, 10], function(num) { return num % 2 === 0; }));