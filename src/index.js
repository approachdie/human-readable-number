module.exports = function toReadable(number) {
  let result = '';
  let n = number;

  if (number === 0) {
    return 'zero';
  }

  if (number >= 100) {
    const hundred = Math.floor(n / 100);
    if (hundred === 1) {
      result += 'one hundred ';
    } else if (hundred === 2) {
      result += 'two hundred ';
    } else if (hundred === 3) {
      result += 'three hundred ';
    } else if (hundred === 4) {
      result += 'four hundred ';
    } else if (hundred === 5) {
      result += 'five hundred ';
    } else if (hundred === 6) {
      result += 'six hundred ';
    } else if (hundred === 7) {
      result += 'seven hundred ';
    } else if (hundred === 8) {
      result += 'eight hundred ';
    } else if (hundred === 9) {
      result += 'nine hundred ';
    }
    n %= 100;
  }

  if (number >= 20) {
    const tens = Math.floor(n / 10);
    if (tens === 2) {
      result += 'twenty ';
    } else if (tens === 3) {
      result += 'thirty ';
    } else if (tens === 4) {
      result += 'forty ';
    } else if (tens === 5) {
      result += 'fifty ';
    } else if (tens === 6) {
      result += 'sixty ';
    } else if (tens === 7) {
      result += 'seventy ';
    } else if (tens === 8) {
      result += 'eighty ';
    } else if (tens === 9) {
      result += 'ninety ';
    }
    n %= 10;
  }

  if (number > 0) {
    if (number === 1) {
      result += 'one';
    } else if (number === 2) {
      result += 'two';
    } else if (number === 3) {
      result += 'three';
    } else if (number === 4) {
      result += 'four';
    } else if (number === 5) {
      result += 'five';
    } else if (number === 6) {
      result += 'six';
    } else if (number === 7) {
      result += 'seven';
    } else if (number === 8) {
      result += 'eight';
    } else if (number === 9) {
      result += 'nine';
    } else if (number === 10) {
      result += 'ten';
    } else if (number === 11) {
      result += 'eleven';
    } else if (number === 12) {
      result += 'twelve';
    } else if (number === 13) {
      result += 'thirteen';
    } else if (number === 14) {
      result += 'fourteen';
    } else if (number === 15) {
      result += 'fifteen';
    } else if (number === 16) {
      result += 'sixteen';
    } else if (number === 17) {
      result += 'seventeen';
    } else if (number === 18) {
      result += 'eighteen';
    } else if (number === 19) {
      result += 'nineteen';
    }
  }

  return result.trim();
};
