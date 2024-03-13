class UberPriceCalculator {
    constructor(baseFare, costPerKm, surgeMultiplier) {
        this.baseFare = baseFare;
        this.costPerKm = costPerKm;
        this.surgeMultiplier = surgeMultiplier;
    }

    calculatePrice(distance) {
        const totalFare = this.baseFare + (this.costPerKm * distance);
        return totalFare * this.surgeMultiplier;
    }
}

// Create a new instance of UberPriceCalculator
const calculator = new UberPriceCalculator(2, 1.5, 1.2); // Base fare $2, Cost per km $1.5, Surge multiplier 1.2

// Calculate price for a distance of 10 km
const distance = 10;
const price = calculator.calculatePrice(distance);

console.log("Total Uber Price:", price);
