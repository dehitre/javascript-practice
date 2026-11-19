const myArr = []
const registredPassengers = []

class Flight {
    constructor(flightNumber, destination, departureTime,capacity) {
        this.flightNumber = flightNumber;
        this.destination = destination;
        this.departureTime = departureTime;
        this.capacity = capacity;
    }
}

function addFlight(flightNumber, destination, departureTime, capacity) {
    const newFlight = new Flight(flightNumber, destination, departureTime, capacity);
    myArr.push(newFlight);
    console.log(`Flight ${flightNumber} to ${destination} added successfully.`);
}

function cancelFlight(flightNumber) {
    let flightFound = false;
    for (let i = 0; i < myArr.length; i++) {
        if (myArr[i].flightNumber === flightNumber) {
            myArr.splice(i, 1);
            console.log(`Flight ${flightNumber} has been canceled.`);
            flightFound = true;
            break;
        }
    }
    if (!flightFound) {
        console.log(`Flight ${flightNumber} not found.`);
    }
}


function registerPassenger(flightNumber, passengerName) {
    let flightFound = false;
    for (let i = 0; i < myArr.length; i++) {
        if (myArr[i].flightNumber === flightNumber) {
            registredPassengers.push({ flightNumber, passengerName });
            console.log(`Passenger ${passengerName} registered for flight ${flightNumber}.`);
            flightFound = true;
            break;
        }
    }
    if (!flightFound) {
        console.log(`Flight ${flightNumber} not found.`);
    }
}

function findFlightByNumber(flightNumber) {
    for (let i = 0; i < myArr.length; i++) {
        if (myArr[i].flightNumber === flightNumber) {
            console.log(`Flight found: ${myArr[i].flightNumber} to ${myArr[i].destination}, Departure: ${myArr[i].departureTime}, Capacity: ${myArr[i].capacity}`);
            return;
        }
    }
    console.log(`Flight ${flightNumber} not found.`);
}

function showAllFlights() {
    if (myArr.length === 0) {
        console.log('No flights available.');
    } else {
        console.log('Available flights:');
        for (let i = 0; i < myArr.length; i++) {
            console.log(`Flight ${myArr[i].flightNumber} to ${myArr[i].destination}, Departure: ${myArr[i].departureTime}, Capacity: ${myArr[i].capacity}`);
        }
    }
}

function showFlightPassengers(flightNumber) {
    flightFound = false;
    for (let i = 0; i < myArr.length; i++) {
        if (myArr[i].flightNumber === flightNumber) {
            flightFound = true;
            }
        }

    if (flightFound) {
        for (let j = 0; j < registredPassengers.length; j++) {
            if (registredPassengers[j].flightNumber === flightNumber) {
                console.log(`Passenger: ${registredPassengers[j].passengerName}`);
            }
        }
    } else {
        console.log(`Flight ${flightNumber} not found.`);
    }
}
