// Code your solution in this file!
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo']

const returnFirstTwoDrivers = function(drivers) {
    const copyOfDrivers = drivers.slice(0,2)
    return copyOfDrivers
}

const returnLastTwoDrivers = function() {
    const copyOfDrivers = drivers.slice(2)
    return copyOfDrivers
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier (distance) {
    return function(fare) {
        return fare * distance
    }
}

const fareDoubler = createFareMultiplier(2)

const fareTripler = createFareMultiplier(3)

const selectDifferentDrivers = (drivers, functions) => {
    return functions(drivers)
}