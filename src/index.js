module.exports = function towelSort (matrix) {
  if(matrix && matrix.length == 0 || !matrix) return [];
  return matrix.flatMap(
    (item, index) => ((index % 2 != 0) ? item.reverse() : item)
  )
}
