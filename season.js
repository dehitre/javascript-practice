function getSeason(month, temperature) {
    if (typeof month !== 'number' || typeof temperature !== 'number') {
        throw new TypeError('Arguments must be numbers');
    }
    if (month < 1 || month > 12) {
        throw new Error('The month must be between 1 and 12');
    }
    if ((month === 12 || month === 1 || month === 2) && temperature <= 5) {
        return "Winter";
    }
    if ((month === 3 || month === 4 || month === 5) && temperature < 20) {
        return "Spring";
    }
    if ((month === 6 || month === 7 || month === 8) && temperature > 20) {
        return "Summer";
    }
    if ((month === 9 || month === 10 || month === 11) && temperature >= 5 && temperature <= 20) {
        return "Autumn";
    }
    return "Non-existent season";

}

  