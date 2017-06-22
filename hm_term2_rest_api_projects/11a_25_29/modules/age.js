module.exports = {
    calculate(dateOfBirth) {
        return Math.floor((Date.now() - dateOfBirth)/(1000*60*60*24*365.25));
    }
}