function reverseString(str) {
  let array = str.split("");
  let reverse = array.reverse().join("");
  return reverse;
}

console.log(reverseString("hello"));
