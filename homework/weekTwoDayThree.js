function minutesToSeconds (minutes) {
  return result = minutes * 60
}
console.log(minutesToSeconds(40))

array1 = [2, 6, 13, 7, 9, 18]

// const evenNums = []
// function sumEvenNums (array) {
//   for (i = 0; i < array.length; i++) {
//     if (array[i] % 2 === 0) {
//       evenNums.push(array[i])
//     }
//   } return evenNums
// }
// let sum = 0
// for (j = 0; j < evenNums.length; j++) {
//   sum += evenNums[j]
// }
// console.log(sum)

function sumEvenNums (array) {
  let sum = 0
  for (i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      sum += array[i]
    }
  } return sum
}
console.log(sumEvenNums(array1))
