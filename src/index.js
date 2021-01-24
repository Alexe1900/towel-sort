
// You should implement your task here.

module.exports = function towelSort (matrix=[]) {
  let a = matrix, b = [];
  for (let i = 0; i < matrix.length; i++) {
    if (i % 2 == 1) a[i].reverse();
    for (let j of a[i]) b.push(j);
  }
  return b;
}
