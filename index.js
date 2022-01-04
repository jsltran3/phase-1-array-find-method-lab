// code your solution here
// function superbowlWin(winRecord) {
//     return winRecord.result === 'W'
//   }
  
//   let yearWon = record.find(superbowlWin);

function superbowlWin(arr) {
    let winResult = arr.find(winRecord => winRecord.result === 'W');
    if (winResult === undefined) {
        return undefined
    } else {
        return winResult.year; 
    }
}
  
// function superbowlWin(arr) {
//     if (arr.find(winRecord => winRecord.result === 'W') ){
//         return arr.year;
//     } else {
//         return "undefined"
//     }
// }

