var Letter = require("./letter");

function Word(chosenWord) {

    this.chosenWordCharArr = chosenWord.split("");
    this.letterObjArr = [];

    this.generateLetterObjArr = function () {
        
        for (var i = 0; i < this.chosenWordCharArr.length; i++) {
            var letter = new Letter(this.chosenWordCharArr[i]);
            // var letterletter = letter.returnChar();
            this.letterObjArr.push(letter);
            // console.log(this.letterObjArr);
        }
    }

    this.checkChar = function(userInput){
        for (var x = 0; x < this.letterObjArr.length; x++){
            // this.letterObjArr[x].guessChecker(userInput);
            // console.log(this.letterObjArr[x].guessChecker(userInput));
            // console.log(this.letterObjArr[x].returnChar());
            this.letterObjArr[x].guessChecker(userInput);
            return this.letterObjArr[x].returnChar();
        }
    }

}

// test Word's functionality
var test = "test";
var wordTest = new Word(test);
wordTest.generateLetterObjArr();
wordTest.checkChar("t");