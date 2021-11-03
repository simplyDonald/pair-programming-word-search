const transpose = function(matrix) {
    // Put your solution here
  const newMatrix = [];
  for (let i = 0; i < matrix[0].length; i++) {
    let elementArray = [];
      for (let j = 0; j < matrix.length; j++) {
        //console.log(matrix[i][j]);
      elementArray.push(matrix[j][i]);
     }
     newMatrix.push(elementArray);
  };
  
   return newMatrix;
  };
  
//   const diaTranspose = (matrix) => {
//     const newMatrix = [];
//     //loop matrix and push diagonally i = hori, j = verti
//     for (let i = 0; i < matrix[0].length; i++) {
//         //create diagonal slots
//         let elementArray = [];
//         for (let j = 0; j < matrix.length; j++) {
//             //
//             //matrix.map((el, index) => el[index]);
//             //elementArray.push(matrix[][]); //[row ][column + 1] elements have to be incremented by 1 at the same time?
            
//         }
//         //push into diagonal slots
//         newMatrix.push(elementArray);
//     };
//     return newMatrix;
//   };

    const wordSearch = (letters, word) => { 
    if (letters === undefined || letters.length === 0  || word === undefined || word === false) {
        return false; 
    }
    let reverseWord = word.split('').reverse().join('');
    //console.log(reverseWord);
    const horizontalJoin = letters.map(ls => ls.join(''));
    let newMatrix = transpose(letters);
    const verticalJoin = newMatrix.map(ls => ls.join(''));
    for (l of horizontalJoin) {
        if (l.includes(word) || l.includes(reverseWord)) return true
    };
    for (l of verticalJoin) {
        if (l.includes(word) || l.includes(reverseWord)) return true
    };
    return false;
  };
  
  
  
  module.exports = wordSearch
  