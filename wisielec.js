let password = "Bez pracy nie ma kołaczy";
password = password.toUpperCase();

let passwordLength = password.length;
let misses = 0;

let hiddenPassword = "";

let lettersArray = new Array(35);

lettersArray[0] = "A";
lettersArray[1] = "Ą";
lettersArray[2] = "B";
lettersArray[3] = "C";
lettersArray[4] = "Ć";
lettersArray[5] = "D";
lettersArray[6] = "E";
lettersArray[7] = "Ę";
lettersArray[8] = "F";
lettersArray[9] = "G";
lettersArray[10] = "H";
lettersArray[11] = "I";
lettersArray[12] = "J";
lettersArray[13] = "K";
lettersArray[14] = "L";
lettersArray[15] = "Ł";
lettersArray[16] = "M";
lettersArray[17] = "N";
lettersArray[18] = "Ń";
lettersArray[19] = "O";
lettersArray[20] = "Ó";
lettersArray[21] = "P";
lettersArray[22] = "Q";
lettersArray[23] = "R";
lettersArray[24] = "S";
lettersArray[25] = "Ś";
lettersArray[26] = "T";
lettersArray[27] = "U";
lettersArray[28] = "V";
lettersArray[29] = "W";
lettersArray[30] = "X";
lettersArray[31] = "Y";
lettersArray[32] = "Z";
lettersArray[33] = "Ż";
lettersArray[34] = "Ź";

for (i = 0; i < passwordLength; i++) {
  if (password.charAt(i) == " ")
    hiddenPassword = hiddenPassword + " ";
  else hiddenPassword = hiddenPassword + "-";
}

function showPassword() {
  document.getElementById("password").innerHTML = hiddenPassword;
}

window.onload = showLetters;

function showLetters() {
  let letters = "";

  for (i = 0; i<35; i++) {
    let element = "letter" + i;
    letters = letters + '<div class="letter" onclick="check(' + i + ')" id="' + element + '">' + lettersArray[i] + '</div>';
    if (i%7 == 6) letters = letters + '<div style="clear:both;"'
  }

  document.getElementById("letters").innerHTML = letters;

  showPassword();
}

String.prototype.setChar = function(position, letter) {
  if (position > this.length - 1)
    return this.toString();
  else return this.substr(0, position) + letter + this.substr(position + 1);
}

function check(nr) {
  let hitted = false;

  for (i = 0; i < passwordLength; i++) {
    if (password.charAt(i) == lettersArray[nr]) {
      hiddenPassword = hiddenPassword.setChar(i, lettersArray[nr]);
      hitted = true;
    }
  }

  if (hitted == true) {
    let id = "letter" + nr;
    document.getElementById(id).style.background = "#030";
    document.getElementById(id).style.color = "#0C0";
    document.getElementById(id).style.border = "3px solid #0C0";
    document.getElementById(id).style.cursor = "default";

    showPassword();
  } else {
    
    let id = "letter" + nr;
    document.getElementById(id).style.background = "#300";
    document.getElementById(id).style.color = "#C00";
    document.getElementById(id).style.border = "3px solid #C00";
    document.getElementById(id).style.cursor = "default";

    misses++;
    document.getElementById("image").innerHTML = '<img src="img/s' + misses + '.jpg">'
  }

  showPassword();
}