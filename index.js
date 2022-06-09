// Code your solution in this file!
const hQLocation = 42;
const feetInBlock = 264;

function distanceFromHqInBlocks(start) {
    return Math.abs(hQLocation - start);
}

function distanceFromHqInFeet(start) {
    return distanceFromHqInBlocks(start) * feetInBlock;
}

function distanceTravelledInFeet(start, destination) {
    return Math.abs(destination - start) * feetInBlock;
}

function calculatesFarePrice(start, destination) {
    if (distanceTravelledInFeet(start, destination) <= 400) {
        return 0;
    } else if (distanceTravelledInFeet(start, destination) > 400 && distanceTravelledInFeet(start, destination) <= 2000) {
        return ((distanceTravelledInFeet(start, destination) - 400) * 2) / 100;
    } else if (distanceFromHqInFeet(start, destination) > 2000 && distanceTravelledInFeet(start, destination) <= 2500) {
        return 25;
    } else {
        return "cannot travel that far";
    }
}