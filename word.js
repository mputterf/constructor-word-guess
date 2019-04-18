var Letter = require("./letter");

function Word(chosenWord) {

    this.chosenWordCharArr = chosenWord.split();
    this.letterObjArr = [];

    this.generateLetterObjArr = function () {
        for (var i = 0; i < this.chosenWordCharArr.length; i++) {
            var letter = new Letter(this.generateChosenWordArr[i]);
            letterObjArr.push(letter);
        }
    }

}