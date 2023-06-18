function generateThankYouMessages(names) {
  const thankYouMessages = [];

  for (let i = 0; i < names.length; i++) {
    const message = `Thank you, ${names[i]}! We appreciate your support.`;
    thankYouMessages.push(message);
  }

  return thankYouMessages;
}

// Example usage
const names = ["Daniel", "Maina", "Maish", "Kiritu"];
const messages = generateThankYouMessages(names);
console.log(messages);
