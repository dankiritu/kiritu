// Object creation
var car = {
  brand: "Bmw",
  model: "X one",
  year: 2021,
  color: "Silver",
  mileage: 4000,

  // Method to calculate the depreciation
  calculateDepreciation: function() {
    var currentYear = new Date().getFullYear();
    var age = currentYear - this.year;
    var depreciationRate = 0.1; // Assuming 10% depreciation per year
    var depreciation = this.mileage * depreciationRate * age;
    return depreciation;
  },

  // Method to display car information
  displayInformation: function() {
    console.log("Brand:", this.brand);
    console.log("Model:", this.model);
    console.log("Year:", this.year);
    console.log("Color:", this.color);
    console.log("Mileage:", this.mileage);
  }
};

// Accessing object properties
console.log(car.brand); // Output: Toyota
console.log(car["model"]); // Output: Camry

// Modifying object properties
car.color = "Yellow";
car.mileage = 8000;

// Calling object methods
var depreciationAmount = car.calculateDepreciation();
console.log("Depreciation:", depreciationAmount);

car.displayInformation();
