// Jenny has written a function that returns a greeting for a user. However, she's in love with Johnny, and would like to greet him slightly different. She added a special case to her function, but she made a mistake.

// Can you help her?

// Jenny, bir kullanıcı için bir selamlama döndüren bir işlev yazdı. Ancak, o Johnny'ye aşık ve onunla biraz farklı bir şekilde selamlaşmak istiyor. Görevine özel bir durum ekledi ama bir hata yaptı.

// Ona yardım edebilirmisin?

function greet(name) {
  if (name === "Johnny") {
    return "Hello, my love!";
  } else {
    return "Hello, " + name + "!";
  }
}

console.log(greet("jim"));
console.log(greet("Johnny"));
console.log(greet("jim"));
