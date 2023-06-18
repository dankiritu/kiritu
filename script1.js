function countDown(number) {
  if (number <= 0) {
    console.log("Invalid input. Please provide a positive integer greater than zero.");
    return;
  }

  for (let i = number; i >= 0; i--) {
    console.log(i);
  }
}

// Example usage
countDown(10);
