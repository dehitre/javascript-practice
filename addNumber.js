const myArray = []
function addNumber(number) {
    if (typeof number !== 'number') {
        throw new TypeError('Argument must be a number');
    }
    myArray.push(number);
    console.log(`Number ${number} added to the array.`);
}

function analyzeNumbers() {
    if (myArray.length === 0) {
        console.log('The array is empty. No numbers to analyze.');
    } else {
        let negativeCount = 0;
        let positiveCount = 0;
        let zeroCount = 0;
        for (let i = 0; i < myArray.length; i++) {
            if (myArray[i] < 0) {
                negativeCount++;
            } else if (myArray[i] > 0) {
                positiveCount++;
            } else {
                zeroCount++;
            }
        }
        console.log(`Analysis results:
- Negative numbers: ${negativeCount}
- Positive numbers: ${positiveCount}
- Zeros: ${zeroCount}`);
    }
}
