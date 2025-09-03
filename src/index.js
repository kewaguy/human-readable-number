module.exports = function toReadable(number) {
  const units = [
    'zero',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
    'ten',
    'eleven',
    'twelve',
    'thirteen',
    'fourteen',
    'fifteen',
    'sixteen',
    'seventeen',
    'eighteen',
    'nineteen',
  ];
  const tens = [
    '',
    '',
    'twenty',
    'thirty',
    'forty',
    'fifty',
    'sixty',
    'seventy',
    'eighty',
    'ninety',
  ];

  if (number < 20) {
    return units[number];
  }
  if (number < 100) {
    const tenPart = Math.floor(number / 10);
    const unitPart = number % 10;
    return unitPart === 0
      ? tens[tenPart]
      : `${tens[tenPart]} ${units[unitPart]}`;
  }

  const hundredPart = Math.floor(number / 100);
  const remainder = number % 100;

  if (remainder === 0) {
    return `${units[hundredPart]} hundred`;
  }
  if (remainder < 20) {
    return `${units[hundredPart]} hundred ${units[remainder]}`;
  }

  const tenPart = Math.floor(remainder / 10);
  const unitPart = remainder % 10;
  return unitPart === 0
    ? `${units[hundredPart]} hundred ${tens[tenPart]}`
    : `${units[hundredPart]} hundred ${tens[tenPart]} ${units[unitPart]}`;
};
