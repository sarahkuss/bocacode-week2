function calcTotalScore (numtwopoints, numthreepoints) {
  twoPoints = numtwopoints * 2
  threePoints = numthreepoints * 3
  totalPoints = twoPoints + threePoints
  return totalPoints
} 

console.log(calcTotalScore(25, 9))