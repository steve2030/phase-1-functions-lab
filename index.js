// Code your solution in this file!
const ScuberStreetNum = 42;
const blockFeet = 264;

function distanceFromHqInBlocks(streetNum) {
  let numOfBlocks = streetNum > ScuberStreetNum ? streetNum - ScuberStreetNum : ScuberStreetNum - streetNum;

  return numOfBlocks;
}


function distanceFromHqInFeet(streetNum) {
  let numOfBlocks = distanceFromHqInBlocks(streetNum);
  return numOfBlocks * blockFeet;
}


function distanceTravelledInFeet(startBlock, endBlock) {
  let distanceTravelled;
  if (startBlock > endBlock) {
    distanceTravelled = (startBlock - endBlock) * blockFeet;
  } else {
    distanceTravelled = (endBlock - startBlock) * blockFeet;
  }
  return distanceTravelled;
}

function calculatesFarePrice(start, destination) {
  let distanceTravelled = distanceTravelledInFeet(start, destination);
  let fareprice;

  if (distanceTravelled > 0 && distanceTravelled <= 400) {
    return 0;
  } else if (distanceTravelled > 400 && distanceTravelled <= 2000) {

    fareprice = (distanceTravelled - 400) * 0.02;
  } else if (distanceTravelled > 2000 && distanceTravelled <= 2500) {
    fareprice = 25;
  } else {
    return 'cannot travel that far'
  }
  return fareprice;
}


