// Convert the given number into a roman numeral (n < 4000)

function convertToRoman(num) {
  const splitStrNum = num.toString().split('');
  let answer = "";

  if (splitStrNum.length === 1) {
    let ones = splitStrNum[0];
    let onesRN = "";
    if (ones < 4) onesRN = "I".repeat(ones);
    if (ones == 4) onesRN = "IV";
    if (ones == 5) onesRN = "V";
    if (ones > 5 && ones < 9) onesRN = "V" + "I".repeat(ones - 5);
    if (ones == 9) onesRN = "IX";

    answer = onesRN;
  }

  if (splitStrNum.length === 2) {
    let ones = splitStrNum[1];
    let onesRN = "";
    if (ones < 4) onesRN = "I".repeat(ones);
    if (ones == 4) onesRN = "IV";
    if (ones == 5) onesRN = "V";
    if (ones > 5 && ones < 9) onesRN = "V" + "I".repeat(ones - 5);
    if (ones == 9) onesRN = "IX";

    let tens = splitStrNum[0];
    let tensRN = "";
    if (tens < 4) tensRN = "X".repeat(tens);
    if (tens == 4) tensRN = "XL";
    if (tens == 5) tensRN = "L";
    if (tens > 5 && tens < 9) tensRN = "L" + "X".repeat(tens - 5);
    if (tens == 9) tensRN = "XC";

    answer = tensRN + onesRN;
  }

  if (splitStrNum.length === 3) {
    let ones = splitStrNum[2];
    let onesRN = "";
    if (ones < 4) onesRN = "I".repeat(ones);
    if (ones == 4) onesRN = "IV";
    if (ones == 5) onesRN = "V";
    if (ones > 5 && ones < 9) onesRN = "V" + "I".repeat(ones - 5);
    if (ones == 9) onesRN = "IX";

    let tens = splitStrNum[1];
    let tensRN = "";
    if (tens < 4) tensRN = "X".repeat(tens);
    if (tens == 4) tensRN = "XL";
    if (tens == 5) tensRN = "L";
    if (tens > 5 && tens < 9) tensRN = "L" + "X".repeat(tens - 5);
    if (tens == 9) tensRN = "XC";

    let hundreds = splitStrNum[0];
    let hundredsRN = "";
    if (hundreds < 4) hundredsRN = "C".repeat(hundreds);
    if (hundreds == 4) hundredsRN = "CD";
    if (hundreds == 5) hundredsRN = "D";
    if (hundreds > 5 && hundreds < 9) hundredsRN = "D" + "C".repeat(hundreds - 5);
    if (hundreds == 9) hundredsRN = "CM";

    answer = hundredsRN + tensRN + onesRN;
  }

  if (splitStrNum.length === 4) {
    let ones = splitStrNum[3];
    let onesRN = "";
    if (ones < 4) onesRN = "I".repeat(ones);
    if (ones == 4) onesRN = "IV";
    if (ones == 5) onesRN = "V";
    if (ones > 5 && ones < 9) onesRN = "V" + "I".repeat(ones - 5);
    if (ones == 9) onesRN = "IX";

    let tens = splitStrNum[2];
    let tensRN = "";
    if (tens < 4) tensRN = "X".repeat(tens);
    if (tens == 4) tensRN = "XL";
    if (tens == 5) tensRN = "L";
    if (tens > 5 && tens < 9) tensRN = "L" + "X".repeat(tens - 5);
    if (tens == 9) tensRN = "XC";

    let hundreds = splitStrNum[1];
    let hundredsRN = "";
    if (hundreds < 4) hundredsRN = "C".repeat(hundreds);
    if (hundreds == 4) hundredsRN = "CD";
    if (hundreds == 5) hundredsRN = "D";
    if (hundreds > 5 && hundreds < 9) hundredsRN = "D" + "C".repeat(hundreds - 5);
    if (hundreds == 9) hundredsRN = "CM";

    let thousands = splitStrNum[0];
    let thousandsRN = "M".repeat(thousands)
    answer = thousandsRN + hundredsRN + tensRN + onesRN;
  }

  return answer;
}
