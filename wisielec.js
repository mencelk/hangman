let password = "Bez pracy nie ma kołaczy";
password = password.toUpperCase();

let passwordLength = password.length;

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
    letters = letters + '<div class="letter">' + lettersArray[i] + '</div>';
    if (i%7 == 6) letters = letters + '<div style="clear:both;"'
  }

  document.getElementById("letters").innerHTML = letters;
  


  showPassword();
}