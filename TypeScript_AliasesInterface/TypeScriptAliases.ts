// Typescript Aliases and Interfaces Example

type CarYear = number;
type CarMake = string;  
type CarModel = string;

type car = {
    year: CarYear;
    make: CarMake;
    model: CarModel;
};

const CarYear: CarYear = 2023;
const CarMake: CarMake = "Toyota";
const CarModel: CarModel = "Camry";

const car: car = {
    year: CarYear,
    make: CarMake,
    model: CarModel
};

console.log(`Car Details: Year - ${car.year}, Make - ${car.make}, Model - ${car.model}`);

// Interface Example
interface Car {
    year: number;
    make: string;
    model: string;
}
const carInterface: Car = {
    year: 2023,
    make: "Honda",
    model: "Civic"
};
console.log(`Car Interface Details: Year - ${carInterface.year}, Make - ${carInterface.make}, Model - ${carInterface.model}`);

// Extending Interfaces
interface ElectricCar {
    batteryCapacity: number; // in kWh
    range?: number; // optional property in km
    chargeTime?: number; // optional property in hours
}
interface HybridCar extends ElectricCar {
    fuelType: string; // e.g., Petrol, Diesel
}
const carDetails : HybridCar = {
    batteryCapacity: 50,
    fuelType: "Petrol",
    range: 600,
    chargeTime: 4
};
console.log(`Hybrid Car Details: Battery Capacity - ${carDetails.batteryCapacity} kWh, Fuel Type - ${carDetails.fuelType}, Range - ${carDetails.range} km, Charge Time - ${carDetails.chargeTime} hours`);