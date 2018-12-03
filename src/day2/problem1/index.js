const input = require('./input');

const findSequences = (id) => {
  let two = 0;
  let three = 0;

  const mapSequences = new Map();

  id.split('').forEach((char) => {
    const prevRep = mapSequences.get(char) || 0;
    mapSequences.set(char, prevRep + 1);
  });

  for (const [, rep] of mapSequences) {
    if (rep === 2) {
      two = 1;
    } else if (rep === 3) {
      three = 1;
    }
  }

  return {
    two,
    three,
  };
};

const solve = () => {
  const ids = input
    .split('\n');

  let sequencesOfTwo = 0;
  let sequencesOfThree = 0;

  ids.forEach((id) => {
    const { two, three } = findSequences(id);
    sequencesOfTwo += two;
    sequencesOfThree += three;
  });

  return sequencesOfTwo * sequencesOfThree;
};

module.exports = {
  solve,
};
