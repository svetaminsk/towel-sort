
// You should implement your task here. 
module.exports = function towelSort (matrix) {
  let result = [];
  if (!matrix) {
    return [];
  }
  for (let i = 0; i < matrix.length; i++) {
    if (i == 0 || i % 2 == 0) {
      result.push(...matrix[i]);
    } else {
      for (j = matrix[i].length - 1; j >= 0; j--) {
        result.push(matrix[i][j]);
      }
    } 
  } return result;
}