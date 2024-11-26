// 1. distanceFromHqInBlocks
function distanceFromHqInBlocks(someValue) {
    const hqLocation = 42; // Headquarters block
    return Math.abs(someValue - hqLocation);
}

// 2. distanceFromHqInFeet
function distanceFromHqInFeet(someValue) {
    const blocks = distanceFromHqInBlocks(someValue);
    return blocks * 264; // Convert blocks to feet
}

// 3. distanceTravelledInFeet
function distanceTravelledInFeet(start, destination) {
    const blocksTravelled = Math.abs(destination - start);
    return blocksTravelled * 264; // Convert blocks to feet
}

// 4. calculatesFarePrice
function calculatesFarePrice(start, destination) {
    const distance = distanceTravelledInFeet(start, destination);

    if (distance <= 400) {
        return 0; // First 400 feet are free
    } else if (distance > 400 && distance <= 2000) {
        return (distance - 400) * 0.02; // 2 cents per foot after the first 400
    } else if (distance > 2000 && distance <= 2500) {
        return 25; // Flat fare for distances between 2000 and 2500 feet
    } else {
        return 'cannot travel that far'; // Over 2500 feet not allowed
    }
}

