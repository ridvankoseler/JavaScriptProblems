/* Truncate a String

Belirtilen maksimum dize uzunluğundan (ikinci argüman) daha uzunsa bir dizeyi (ilk argüman) kısaltın. Kesilmiş dizeyi bir ... ile bitirin. */

function truncateString(str,num){
    if (str.length > num){
        return str.slice(0,num) + "..."
    } else{
        return str;
    }
    
}
console.log(truncateString("Abc", 5));
