function calculateArea(length, width) {
    return length * width;
}

function convertToFahrenheit(celsius){
    return (celsius * 9/5) + 32;
}

function isEven(number){
    return number % 2 === 0;
}

function isLeapYear(number){
    return (number % 4 === 0 && number % 100!== 0) || number % 400 === 0;
}

function countVowels(word){
   const vowels = ['a', 'e', 'i', 'o', 'u'];
   let count = 0
   for (const letter of word){
      if(vowels.includes(letter)){
         count += 1;
      }
   }
   return count;
}


module.exports = {calculateArea, convertToFahrenheit, isEven, isLeapYear, countVowels};
