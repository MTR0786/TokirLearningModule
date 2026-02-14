let word = "the five boxing wizards jump quickly" 
let s = new Set();
for (let i=0;i<word.length;i++){
    s.add(word[i])
}
console.log(s.size)