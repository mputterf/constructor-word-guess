var Letter = require("./letter");

function Word(chosenWord) {

    this.chosenWordCharArr = chosenWord.split("");
    this.letterObjArr = [];

    this.generateLetterObjArr = function () {
        
        for (var i = 0; i < this.chosenWordCharArr.length; i++) {
            var letter = new Letter(this.ChosenWordCharArr[i]);
            this.letterObjArr.push(letter);
            console.log(this.letterObjArr);
        }
    }

}

// test Word's functionality
var test = "test";
var wordTest = new Word(test);
wordTest.generateLetterObjArr();