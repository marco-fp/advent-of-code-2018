const input = require('./input');

const solve = () => input
  .split('\n')
  .map(e => Number.parseInt(e, 10))
  .filter(Number.isInteger)
  .reduce((a, b) => a + b);

module.exports = {
  solve,
};
