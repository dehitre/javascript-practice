const myArray = [];

function addNumber(number) {
    if (typeof number !== 'number') {
        throw new TypeError('Argument must be a number');
    }
    myArray.push(number);
    console.log(`Number ${number} added to the array.`);
}

function calculateAverage() {
    if (myArray.length === 0) {
        console.log('The array is empty. Cannot calculate average.');
        }
        else {
            sum = 0;
            for (let i = 0; i < myArray.length; i++) {
                sum += myArray[i];
            }
            const average = sum / myArray.length;
            console.log(`The average of the numbers in the array is: ${average.toFixed(2)}`);
        }
    }   
