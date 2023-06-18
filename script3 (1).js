function checkSpeed(speed) {
  const speedLimit = 80;
  const kmPerDemeritPoint = 10;

  if (speed <= speedLimit) {
    console.log("Ok");
    return;
  }

  const demeritPoints = Math.floor((speed - speedLimit) / kmPerDemeritPoint);

  if (demeritPoints > 12) {
    console.log("License suspended");
  } else {
    console.log("Points: " + demeritPoints);
  }
}

// Example usage:
checkSpeed(110);
