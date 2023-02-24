function getValueById(elementId) {
  return document.getElementById(elementId).value;
}

function pythagorean(sideA, sideB) {
  const sideC = Math.sqrt(Math.pow(sideA, 2) + Math.pow(sideB, 2));

  document.getElementById('pythagor-c').innerHTML = Number.isInteger(sideC) ? sideC : sideC.toFixed(2);
}

function formatMoney(sum) {
  const sign = sum >= 0 ? '+' : '-';
  const formattedString = Math.abs(sum).toFixed(2).toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");

  document.getElementById('money-format-result').innerHTML = `${sign} ${formattedString}`;
}

function formatNumber(number) {
  const checkedIntegerNumber = Number.isInteger(number) ? number : number.toFixed(3);
  const formattedString = checkedIntegerNumber.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1 ");

  document.getElementById('money-number-result').innerHTML = formattedString;
}

function generatePassword(size) {
  const charSet = '!"#$%&\'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[]^`abcdefghijklmnopqrstuvwxyz';
  let result = '';

  for (let i = 0; i < size; i++) {
    result += charSet.charAt(Math.random() * charSet.length)
  }

  document.getElementById('password-result').innerHTML = result.replace('<', '&lt');
}

function calcPercentage(number, percent, precision) {
  const result = (percent * 100) / number;

  document.getElementById('percentage-result').innerHTML = result.toFixed(precision);
}

function splitNumber(number) {
  const integer = Math.floor(number);
  const decimal = (number % 1).toFixed(2);

  document.getElementById('integer-decimal-result').innerHTML = `{int: ${integer}, decimal: ${decimal}}`;
}

function isPrime(number) {
  let isPrime = true;
  let numberSquare = Math.sqrt(number);

  for (let i = 2; i <= numberSquare; i++) {
    if (number % i === 0) {
      isPrime = false;
      break;
    }
  }

  document.getElementById('prime-result').innerHTML = isPrime;
}

function isArmstrong(number) {
  let sum = 0;
  let temp = number;

  while (temp > 0) {
    const digit = temp % 10;

    sum += Math.pow(digit, 3);

    temp = Math.floor(temp / 10);
  }

  const isArmstrong = number === sum;

  document.getElementById('armstrong-result').innerHTML = isArmstrong;
}