// Original array
const originalArray = [1, 2, 3, 4, 5];

// Destructive methods
const destructivelyAddElement = (array, element) => {
  array.push(element);
  return array;
};

const destructivelyRemoveElement = (array, index) => {
  array.splice(index, 1);
  return array;
};

// Non-destructive methods
const nonDestructivelyAddElement = (array, element) => {
  return [...array, element];
};

const nonDestructivelyRemoveElement = (array, index) => {
  return array.filter((_, i) => i !== index);
};

// Demonstration of destructive methods
console.log('Original Array:', originalArray);
console.log('Destructive Add:', destructivelyAddElement(originalArray, 6));
console.log('Destructive Remove:', destructivelyRemoveElement(originalArray, 2));

// Demonstration of non-destructive methods
console.log('Original Array:', originalArray);
console.log('Non-Destructive Add:', nonDestructivelyAddElement(originalArray, 6));
console.log('Non-Destructive Remove:', nonDestructivelyRemoveElement(originalArray, 2));
