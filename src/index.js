
// You should implement your task here.

module.exports = function towelSort (matrix) {
    if (!matrix) {
        return [];
    }
    let numArr = [];
    for (let i =0; i<matrix.length; i++) {
        if (i%2 === 0) {
          numArr.push(matrix[i])
        } else {
          numArr.push(matrix[i].reverse())
        }
      }   
     
      return numArr.flat()
    }
