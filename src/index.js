
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let result = [];
  if (!matrix) {
    return [];
  }
  for (let i = 0; i < matrix.length; i += 1) {
    if (i === 0 || i % 2 === 0) {
      result.push(matrix[i]);
  } else {
    result.push(matrix[i].reverse());
    }
  } return [].concat(...result);
};
