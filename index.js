const returnFirstTwoDrivers = function(arr){
  let newArr = []
  for(let i = 0; i < 2; i++){
    newArr.push(arr[i])
  }
  return newArr
}

const returnLastTwoDrivers = function(arr){
  let newArr = []
  for(let i = arr.length-2; i < arr.length; i++){
    newArr.push(arr[i])
  }
  return newArr
}

let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(num){
  return function(x){
    return num * x
  }
}

const fareDoubler = createFareMultiplier(2)
const fareTripler = createFareMultiplier(3)

function fetchSpecifiedDrivers(arr, drivers){
  return drivers(arr)
}
