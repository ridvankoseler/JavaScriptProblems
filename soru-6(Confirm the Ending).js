/* Sonu Onaylayın
Bir dizenin (ilk argüman, str) verilen hedef dizeyle (ikinci argüman, hedef) bitip bitmediğini kontrol edin.

Bu zorluk, ES2015'te tanıtılan .endsWith() yöntemiyle çözülebilir. Ancak bu zorluğun amacı için, bunun yerine JavaScript alt dizi yöntemlerinden birini kullanmanızı istiyoruz. */



function confirmEnding(arr , target){
    return arr.slice(arr.length - target.length) === target ;
    
};

console.log(confirmEnding("Bastian" , "tian" ));
