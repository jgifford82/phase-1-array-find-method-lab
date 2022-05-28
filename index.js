// code your solution here

// function superbowlWin(record) {
//     if (result === "W") {
//         return record.year;    
//     }
// }


// passes 2nd test
// function superbowlWin(record) {
//     for (const result of record) {
//         if (result === "W")
//         return record.year;
//     }
// }

// passes 2nd test
// function superbowlWin(record) {
//     for (const result of record) {
//         if (result === "W")
//         return year;
//     }
// }

// passes 2nd test
// function superbowlWin(record) {
//     for (const item of record) {
//         if (item === true)
//         return year;
//     }
// }

// function superbowlWin(record) {
//     for (const result of record) {
//         if (result === W)
//         return year;
//     }
// }

// function superbowlWin(record) {
//     for (const result of record) {
//         if (record.result === "W")
//         return year;
//     }
// }

// function superbowlWin(record) {
//     for (const result of record) {
//         if (result === "W"){
//             break
//         }
//     }
//     return year;
// }

// Passes both tests (found in Slack):
// function superbowlWin(record) {
//     let item = record.find(obj => obj.result === "W")
//     if (item) {
//         return item.year
//     }
// }


// passes 2nd test
// function superbowlWin(record) {
//     for (const result of record) {
//         if (result === "W")
//         return year;
//     }
// }

// find(superbowlWin);




// function superbowlWin(record) {
//     let found = record.find(result => result === "W")
//     return found
// }

function superbowlWin(record) {
    let found = record.find(obj => obj.result === "W")
  // console.log(found);
  // return found(record.year)
    if (found) {
      return found.year
    }
}