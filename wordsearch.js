const transpose = function(matrix) {
  let newRow = matrix.length;
  let newCol = matrix[0].length;
  let newMatrix = [];
  for (let i = 0; i < newCol; i++) {
    newMatrix[i] = [];
  }
  //console.log(newMatrix);
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      newMatrix[j][i] = matrix[i][j];
    }
  }
  return newMatrix;
};

const wordSearch = (letters, word) => {
  //let verticle = transpose(letters);
  const horizontalJoin = letters.map(ls => ls.join(''));
  let verticle =  transpose(letters);
  const verticleJoin = verticle.map(ls => ls.join(''));
  for (let l of verticleJoin) {
    if (l.includes(word)) {
      return true;
    }
  }
    
  for (let l of horizontalJoin) {
    if (l.includes(word)) {
      return true;
    }
  }
  return false;
};

module.exports = wordSearch;