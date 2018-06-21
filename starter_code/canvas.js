function HangmanCanvas(hangman) {
    this.ctx = document.getElementById('hangman').getContext('2d');
    this.hangman = hangman;
    this.createBoard();
    this.setX = 300;
    this.setY = 600;
}

HangmanCanvas.prototype.createBoard = function () {
    this.ctx.clearRect(0, 0, 800, 1200);
    this.drawLines();
};

HangmanCanvas.prototype.drawLines = function () {

    var sWL = this.hangman.secretWord.length;
    this.ctx.beginPath();

    console.log(sWL);

    for (var i = 0; i < sWL; i++) {
        this.ctx.moveTo(this.setX, this.setY);
        this.ctx.lineTo(this.setX + 50, this.setY);
        this.setX += 75;
    }

    this.ctx.beginPath();
    this.ctx.moveTo(50, 550);
    this.ctx.lineTo(15, 610);
    this.ctx.lineTo(85, 610);
    this.ctx.fill();

    this.ctx.beginPath();
    this.ctx.moveTo(50, 550);
    this.ctx.lineTo(50, 0);
    this.ctx.lineTo(450, 0);
    this.ctx.lineTo(450, 150);

    this.ctx.stroke();

    this.fX = 500;
    this.fY = 500;

    this.ctx.beginPath();
//arc(x,y,r,sAngle,eAngle,counterclockwise);
    this.ctx.arc(75, 75, 50, 0, Math.PI * 2, true); // Outer circle
    this.ctx.moveTo(this.fx+110, this.fy+75);
    this.ctx.arc(75, 75, 35, 0, Math.PI, false); // Mouth (clockwise)
    this.ctx.moveTo(this.fx+65, this.fy+65);
    this.ctx.arc(60, 65, 5, 0, Math.PI * 2, true); // Left eye
    this.ctx.moveTo(this.fx+95, this.fy+65);
    this.ctx.arc(90, 65, 5, 0, Math.PI * 2, true); // Right eye
    this.ctx.stroke();


};

HangmanCanvas.prototype.writeCorrectLetter = function (letter) {
    if (this.checkClickedLetters(letter)) {//checks to make sure the letter is not in letters
        var spots = [];//stores where each letter is
        for (var i = 0; i < this.hangman.secretWord.length; i++) {
            if ((this.hangman.secretWord.charAt(i)).equals(letter)) {
                spots.push(i);
            }
        }
    }
    for (var i = 0; i < spots.length; i++) {
        if (spots[0] === 0) {
            this.ctx.font = "30px Arial";
            this.ctx.fillText(letter, this.setX, this.setY);
        }
        else {
            this.ctx.font = "30px Arial";
            this.ctx.fillText(letter, this.setX + (spots[i] * (50 + 75)), this.setY);
        }
    }
};

HangmanCanvas.prototype.writeWrongLetter = function (letter, errorsLeft) {

};

HangmanCanvas.prototype.drawHangman = function (shape) {

};

HangmanCanvas.prototype.gameOver = function () {

};

HangmanCanvas.prototype.winner = function () {

};
