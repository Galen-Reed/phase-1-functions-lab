// Code your solution in this file!
function distanceFromHqInBlocks(blocks) {
    return Math.abs(blocks - 42);
}

function distanceFromHqInFeet(blocks) {
    const blocksDistance = distanceFromHqInBlocks(blocks);
    const feetPerBlock = 264;
    return blocksDistance * feetPerBlock;
}

function distanceTravelledInFeet(start, destination) {
    const feetPerBlock = 264;
    return feetPerBlock * Math.abs(destination - start);
}

function calculatesFarePrice(start, destination) {
    const distanceForFare = distanceTravelledInFeet(start, destination);
    if (distanceForFare <= 400) {
        return 0;
    } else if (distanceForFare > 400 && distanceForFare < 2000) {
        return (distanceForFare - 400) * 0.02;
    } else if (distanceForFare > 2000 && distanceForFare < 2500) {
        return 25;
    } else {
        return 'cannot travel that far';
    }
}
console.log(calculatesFarePrice(50,58));