const name = "sarmad"

console.log(name.toUpperCase());
console.log(name.toLowerCase());
console.log(name.toLowerCase().split(' ').map(function(word) {
    return word.replace(word[0], word[0].toUpperCase());
  }).join(' '));