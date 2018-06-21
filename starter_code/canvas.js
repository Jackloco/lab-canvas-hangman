function HangmanCanvas(secretWord) {
    this.ctx = document.getElementById('hangman').getContext('2d');
    this.hangman = hangman;
    console.log(hangman);
    this.createBoard();
    this.secretWord=secretWord;
}

HangmanCanvas.prototype.createBoard = function () {
    this.ctx.clearRect(0, 0, 800, 1200);
    this.drawLines();
};

HangmanCanvas.prototype.drawLines = function () {
    var sWL = this.secretWord.length;
    var setX = 300;
    var setY = 600;
    // this.ctx.beginPath();
    // this.ctx.moveTo(0, 0);
    // this.ctx.lineTo(300, 150);
    // this.ctx.stroke();
    for(var i = 0; i<sWL; i++){
        this.ctx.beginPath();
        this.ctx.moveTo(setX, setY);
        this.ctx.lineTo(setX+150, setY);
        this.ctx.stroke();
        setX+= 150;
    }

};

HangmanCanvas.prototype.writeCorrectLetter = function (index) {

};

HangmanCanvas.prototype.writeWrongLetter = function (letter, errorsLeft) {

};

HangmanCanvas.prototype.drawHangman = function (shape) {

};

HangmanCanvas.prototype.gameOver = function () {

};

HangmanCanvas.prototype.winner = function () {

};
