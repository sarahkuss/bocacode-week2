let myCar = {
  brand: "Toyota", 
  make: "Prius", 
  color: "red"
}
const { color } = myCar
console.log(color)


//Convert hours to seconds
function convert (hours) {
  return hours * 3600 
}
const hoursInSeconds = convert(6)
console.log(hoursInSeconds)