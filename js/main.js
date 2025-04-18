const dateNow = new Date();

// Inputs
const inputDays = document.querySelector(".input-days");
const inputMonth = document.querySelector(".input-months");
const inputYears = document.querySelector(".input-years");
const btnCalculator = document.querySelector(".calculator__user-input-btn");

// Outputs
const displayDays = document.querySelector(".output-days span");
const displayMonths = document.querySelector(".output-months span");
const displayYears = document.querySelector(".output-years span");

btnCalculator.addEventListener("click", e => {
    const day = +inputDays.value;
    const month = +inputMonth.value-1;
    const year = +inputYears.value; 
    const inputDate = new Date(year, month, day);

    if (isNaN(inputDate.getTime())) {
        displayDays.textContent = '--';
        displayMonths.textContent = '--';
        displayYears.textContent = '--';
        return;
    }

    let difYear = dateNow.getFullYear() - inputDate.getFullYear();
    let difMonths = dateNow.getMonth() - inputDate.getMonth();
    let difDays = dateNow.getDate() - inputDate.getDate();

    if (difMonths < 0) {
        difYear--;
        difMonths += 12;
    }

    if (difDays < 0) {
        difMonths--;
        const lastMonthDate = new Date(dateNow.getFullYear(), dateNow.getMonth(), 0);
        difDays += lastMonthDate.getDate();
        if (difMonths < 0) {
            difMonths += 12;
            difYear--;
        }
    }

    displayDays.textContent = difDays;
    displayMonths.textContent = difMonths;
    displayYears.textContent = difYear;
});
