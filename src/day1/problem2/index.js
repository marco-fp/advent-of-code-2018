const input = require('./input');

const solve = () => {
  const frequencies = input
    .split('\n')
    .map(e => Number.parseInt(e, 10))
    .filter(Number.isInteger);

  const values = new Set();

  let sum = 0;
  let index = 0;
  while (true) {
    if (index >= frequencies.length) {
      index = 0;
    }

    sum += frequencies[index];
    if (values.has(sum)) {
      break;
    } else {
      values.add(sum);
    }

    index += 1;
  }

  return sum;
};

module.exports = {
  solve,
};
