module.exports = function toReadable (number) {
  let words = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten",
    "eleven", "twelve",  "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen", 
    "hundred",  "thousand", "million","billion"];
    let tens = ['', '', "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];  
  let chars = String(number).split('');  
  if (number < 20 ) {
    return words[number];
  } else if (!(number % 100)) {
    return `${words[number/100]} hundred`;
  } else if (!(number % 10)) {
    if ((number/10) < 10) {
      return tens[number/10];
    } else if (+chars[1] == 1) {
      return `${words[+chars[0]]} hundred ${words[10]}`;
    }
    return `${words[+chars[0]]} hundred ${tens[+(chars[1])]}`;        
  } else if (chars.length == 2) {    
    return `${tens[+chars[0]]} ${words[+chars[1]]}`;
  } else if(chars.length == 3 ) {
    if (+chars[2] == 0) {
      return `${words[+chars[0]]} hundred ${tens[+chars[1]]}`;
    } else if (+chars[1] == 1) {
      return `${words[+chars[0]]} hundred ${words[+(chars[1]+chars[2])]}`;
    } else if (+chars[1] == 0) {
      return `${words[+chars[0]]} hundred ${words[+chars[2]]}`;
    }
    return `${words[+chars[0]]} hundred ${tens[+chars[1]]} ${words[+chars[2]]}`;
  }
}
