const input = require('./input');

const compareAndFindDifference = (a, b) => {
  if (a.length !== b.length || a === b) {
    return null;
  }

  const differences = [];

  for (let idx = 0; idx < a.length; idx += 1) {
    if (a[idx] !== b[idx]) {
      differences.push(idx);
    }
  }

  if (differences.length === 1) {
    const idx = differences[0];
    const slicedA = a.substr(0, idx) + a.substr(idx + 1);
    const slicedB = b.substr(0, idx) + b.substr(idx + 1);
    if (slicedA === slicedB) {
      return slicedA;
    }
  }

  return null;
};

const solve = () => {
  const ids = input
    .split('\n');

  let result = null;

  ids.forEach((id1) => {
    ids.forEach((id2) => {
      result = compareAndFindDifference(id1, id2) || result;
    });
  });

  return result;
};

module.exports = {
  solve,
};
