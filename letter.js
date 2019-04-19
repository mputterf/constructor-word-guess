// Letter constructor will return Word either the correct letter or a _
function Letter(char) {
    // The letter defined by the word
    this.char = char;
    // Weather the user guessed the letter correctly or not
    this.guessed = false;
    // Based on if the letter was guessed correctly, return either the char or _ to Word
    this.returnChar = function(userGuess){
        
        if(this.guessed){
            return this.char;
            // console.log(this.char + " and " + userGuess + " matched");
        }else{
            return "_";
            // console.log("_");
        }
    }
    // Check the user's guess against the character from the word they are guessing
    this.guessChecker = function(userGuess){

        if(this.char === userGuess){
            this.guessed = true;
            this.returnChar(userGuess);
        } else {
            this.returnChar();
        }
    }
}

module.exports = Letter;

// test Letter's functionality
// var q = "q";
// var cmdIn = process.argv[2];

// var letterQ = new Letter(q);
// letterQ.guessChecker(cmdIn);
// letterQ.returnChar();