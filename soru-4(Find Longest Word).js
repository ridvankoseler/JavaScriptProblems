 
// Bir Dizedeki En Uzun Kelimeyi Bulun
// Sağlanan cümledeki en uzun kelimenin uzunluğunu döndürün.

// Yanıtınız bir sayı olmalıdır.

function findLongestWordLength(str) {
    let words = str.split(" ");
    let uzunluk = 0;
    for( let i = 0 ; i < words.length; i++){
        if (words[i].length> uzunluk){
       uzunluk = words[i].length;
    }
}
return uzunluk;
}
console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));
