const day1Problem1 = require('./day1/problem1');
const day1Problem2 = require('./day1/problem2');

const day2Problem1 = require('./day2/problem1');
const day2Problem2 = require('./day2/problem2');

const run = () => {
  console.log('-- Day 1 --');
  console.log('[1.1]: ', day1Problem1.solve());
  console.log('[1.2]: ', day1Problem2.solve());

  console.log('-- Day 2 --');
  console.log('[2.1]: ', day2Problem1.solve());
  console.log('[2.2]: ', day2Problem2.solve());
};

run();
