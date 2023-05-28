function countAandB(input) {
    let c=0;
    for(let i = 0; i<input.length;i++){
        if(input[i]==='a'||input[i]==='b'){
            c++;
        }
    }
    return c;
}

function toNumber(input) {
    var result = [];

    for (var i = 0; i < input.length; i++) {
        result.push(input[i].charCodeAt()-96)
    }

    return result;
}


let input1 = ['a', 'b', 'c', 'a', 'c', 'a', 'c'];

console.log(countAandB(input1)); 

console.log(toNumber(input1));




/* Object-oriented programming */
// class StringAnalyzer {
//     constructor(input) {
//       this.input = input;
//     }
  
//     countAandB() {
//       let count = 0;
//       for (let i = 0; i < this.input.length; i++) {
//         if (this.input[i] === 'a' || this.input[i] === 'b') {
//           count++;
//         }
//       }
//       return count;
//     }
  
//     toNumber() {
//       const result = [];
//       for (let i = 0; i < this.input.length; i++) {
//         result.push(this.input[i].charCodeAt() - 96);
//       }
//       return result;
//     }
//   }
  
//   // Usage example:
//   const inputString = ['a', 'b', 'c', 'a', 'c', 'a', 'c'];
//   const analyzer = new StringAnalyzer(inputString);
//   console.log(analyzer.countAandB()); // Output: 5
//   console.log(analyzer.toNumber());




/* Inversion Of Control */
// class CharacterCounter {
//     countCharacters(input) {}
// }

// class ABCharacterCounter extends CharacterCounter {
// countCharacters(input) {
//     let count = 0;
//     for (let i = 0; i < input.length; i++) {
//     if (input[i] === 'a' || input[i] === 'b') {
//         count++;
//     }
//     }
//     return count;
// }
// }

// class CharacterToNumberConverter {
// convertToNumbers(input) {
//     var result = [];
//     for (var i = 0; i < input.length; i++) {
//     result.push(input[i].charCodeAt() - 96);
//     }
//     return result;
// }
// }

// class MainCode {
// constructor(characterCounter, characterConverter) {
//     this.characterCounter = characterCounter;
//     this.characterConverter = characterConverter;
// }

// countAandB(input) {
//     return this.characterCounter.countCharacters(input);
// }

// toNumber(input) {
//     return this.characterConverter.convertToNumbers(input);
// }
// }

// const characterCounter = new ABCharacterCounter();
// const characterConverter = new CharacterToNumberConverter();
// const mainCode = new MainCode(characterCounter, characterConverter);


// console.log(mainCode.countAandB(['a', 'b', 'c', 'a', 'c', 'a', 'c']));
// console.log(mainCode.toNumber(['a', 'b', 'c', 'a', 'c', 'a', 'c']));




/* Dependency Injection */
// class CharacterCounter {
//     countAandB(input) {
//     let count = 0;
//     for (let i = 0; i < input.length; i++) {
//         if (input[i] === 'a' || input[i] === 'b') {
//         count++;
//         }
//     }
//     return count;
//     }
// }

// class CharacterToNumberConverter {
//     toNumber(input) {
//     var result = [];

//     for (var i = 0; i < input.length; i++) {
//         result.push(input[i].charCodeAt() - 96);
//     }

//     return result;
//     }
// }

// const characterCounter = new CharacterCounter();
// const characterToNumberConverter = new CharacterToNumberConverter();

// function processInput(input) {
//     const count = characterCounter.countAandB(input);
//     const numbers = characterToNumberConverter.toNumber(input);
//     return { count, numbers };
// }

// const input = ['a', 'b', 'c', 'a', 'c', 'a', 'c'];
// const result = processInput(input);
// console.log(result.count);
// console.log(result.numbers);




/* Functional Programming */
// const countAandB = (input) =>
//   input.filter((char) => char === 'a' || char === 'b').length;


// const toNumber = (input) =>
//   input.map((char) => char.charCodeAt() - 96);


// console.log(countAandB(['a', 'b', 'c', 'a', 'c', 'a', 'c']))
// console.log(toNumber(['a', 'b', 'c', 'a', 'c', 'a', 'c']))