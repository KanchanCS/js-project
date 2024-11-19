// elements
let dob = document.getElementById("dateOfBirth"); // Corrected ID
let currentDate = document.getElementById("currentDate"); // Correct ID
let output = document.getElementById("output"); // Output area

// Add event listener to the button
document.getElementById("calculaterBtn").addEventListener("click", () => {
    if (dob.value === "" || currentDate.value === "") {
        output.innerHTML = "Please select Date"; // If dates are not selected
    } else {
        calculateAgeDifference(dob.value, currentDate.value); // Call age calculation function
    }
});

// Function to calculate age difference
function calculateAgeDifference(start, end) {
    // Extract year, month, and day from the input dates
    let dobYear = parseInt(start.substring(0, 4), 10); // Birth year
    let dobMonth = parseInt(start.substring(5, 7), 10); // Birth month
    let dobDate = parseInt(start.substring(8, 10), 10); // Birth day

    let currYear = parseInt(end.substring(0, 4), 10); // Current year
    let currMonth = parseInt(end.substring(5, 7), 10); // Current month
    let currDate = parseInt(end.substring(8, 10), 10); // Current day

    // Calculate year difference
    let yearAgeDiff = currYear - dobYear;

    // Calculate month difference
    let monthAgeDiff;
    if (currMonth >= dobMonth) {
        monthAgeDiff = currMonth - dobMonth;
    } else {
        yearAgeDiff--; // Adjust year if current month is less
        monthAgeDiff = 12 + currMonth - dobMonth;
    }

    // Calculate day difference
    let dateAgeDiff;
    if (currDate >= dobDate) {
        dateAgeDiff = currDate - dobDate;
    } else {
        monthAgeDiff--; // Adjust month if current day is less
        const noOfDaysInDOB = daysInMonth(dobMonth, dobYear); // Days in birth month
        dateAgeDiff = noOfDaysInDOB + currDate - dobDate;

        // Adjust year if month difference becomes negative
        if (monthAgeDiff < 0) {
            monthAgeDiff = 11;
            yearAgeDiff--;
        }
    }

    // Display the result
    output.innerHTML = `${yearAgeDiff} Years, ${monthAgeDiff} Months, ${dateAgeDiff} Days.`;
}

// Function to calculate the number of days in a month
function daysInMonth(month, year) {
    return new Date(year, month, 0).getDate();
}
