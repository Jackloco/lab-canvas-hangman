var hangman;

function Hangman() {
    this.words = ["dickbutt", "jackson", "jose", "cat", "duck", "jeb", "pepe", "halo", "letter", "phone"];
    this.secretWord = "";
    this.letters = [];
    this.guessedLetter = "";
    this.errorsLeft = 10;
}

Hangman.prototype.getWord = function () {
    this.secretWord = this.words[Math.floor(Math.random() * this.words.length)];
    return this.secretWord;
};

Hangman.prototype.checkIfLetter = function (keyCode) {
    return keyCode.match(/[a-z]/i) != null;
};

//checks if a is already chosen
Hangman.prototype.checkClickedLetters = function (key) {
    // for (var i = 0; i < this.guessedLetter.length; i++) {
    //     if (key.equals(this.guessedLetter.charAt(i))) {
    //         return true;
    //     }
    // }
    //
    // return false;

    return !this.letters.includes(key);
};

Hangman.prototype.addCorrectLetter = function (letter) {
    // var savedPoints = [];
// this.guessedLetter += letter;
// this.letters.push(letter);
// for (var i = 0; i < this.secretWord.length; i++) {
//     if (letter.equals(this.secretWord.charAt(i))) {
//         savedPoints.push(i);
//     }
// }
//
// return savedPoints;
    this.guessedLetter += letter;
    this.letters.push(letter);
    this.checkWinner();
};

Hangman.prototype.addWrongLetter = function (letter) {

    // var flag = 0;
// for (var i = 0; i < this.secretWord.length; i++) {
//     if ((letter.equals(this.secretWord.charAt(i)))) {
//         flag = 1
//     }
// }
//
// if (flag == 0) {
//     this.errorsLeft -= 1;
// }
    this.letters.push(letter);
    this.errorsLeft--;
    this.checkGameOver();
};

Hangman.prototype.checkGameOver = function () {
    return this.errorsLeft == 0;
};

Hangman.prototype.checkWinner = function () {
    //return this.guessedLetter.length === this.secretWord.length;

    for (var i = 0; i < this.secretWord.length; i++) {
        if (!this.guessedLetter.includes((this.secretWord.charAt(i)))) {
            return false;
        }

        return true;
    }
};

document.getElementById('start-game-button').onclick = function () {
    hangman = new Hangman();
};


document.onkeydown = function (e) {
    this.writeCorrectLetter(e);

};

//
var myHangMan = new Hangman();
myHangMan.getWord();
var myCanvas = new HangmanCanvas(myHangMan);
//this block of code connects this file to the canvas file
