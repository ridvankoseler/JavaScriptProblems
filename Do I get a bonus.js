// It's bonus time in the big city! The fatcats are rubbing their paws in anticipation... but who is going to make the most money?

// Build a function that takes in two arguments (salary, bonus). Salary will be an integer, and bonus a boolean.

// If bonus is true, the salary should be multiplied by 10. If bonus is false, the fatcat did not make enough money and must receive only his stated salary.

// Return the total figure the individual will receive as a string prefixed with "£" (= "\u00A3", JS, Go, Java and Julia), "$" (C#, C++, Ruby, Clojure, Elixir, PHP, Python, Haskell and Lua) or "¥" (Rust).


// Büyük şehirde bonus zamanı! Şişkolar beklenti içinde patilerini ovuşturuyorlar... ama en çok parayı kim kazanacak?

// İki bağımsız değişken (maaş, ikramiye) alan bir işlev oluşturun. Maaş bir tam sayı ve ikramiye bir boole olacaktır.

// Eğer ikramiye doğruysa, maaş 10 ile çarpılmalıdır. Eğer ikramiye yanlışsa, şişman kedi yeterli para kazanmamıştır ve sadece belirtilen maaşını almalıdır.

// Bireyin alacağı toplam rakamı "£" (= "\u00A3", JS, Go, Java ve Julia), "$" (C#, C++, Ruby, Clojure, Elixir, PHP, Python, Haskell ve Lua) veya "¥" (Pas).


// function bonusTime(salary, bonus) {
//   if (bonus) {
//     return "£" + (salary * 10).toString();
//   }
//   return "£" + salary.toString();
// }
// console.log(bonusTime(20, true) );

function bonusTime(salary,bonus){
    return bonus ? "€" + salary*10 : "€"+ salary
}

console.log(bonusTime(20, false));