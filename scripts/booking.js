/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?
/*jshint esversion: 6 */

let cost_per_day = 35;
let num_of_day = 0;
let overall_cost = 0;
const list = document.querySelectorAll("li");
const half = document.querySelector("#half");
const full = document.querySelector("#full");
const cal_cost = document.querySelector("#calculated-cost");
const clear = document.querySelector("#clear-button");

/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!

list.forEach(item => {
    item.addEventListener("click", () => {
        if (!item.classList.contains("clicked")) {
            item.classList.add("clicked");
            num_of_day++;
            billtime();
        }
    });
});

/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.

const reset_all = () => {
    num_of_day = 0;
    overall_cost = 0;
    cost_per_day = 35;
    list.forEach(item => {
        if (item.classList.contains("clicked")) {
            item.classList.remove("clicked");
        }
    });

    if (!full.classList.contains("clicked")) {
        full.classList.add("clicked");
        half.classList.remove("clicked");
    }
    cal_cost.innerHTML = overall_cost;
};

document.querySelector("#clear-button").addEventListener("click", reset_all);

/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.

const halfdays = () => {
    cost_per_day = 20;
    if (!half.classList.contains("clicked")) {
        half.classList.add("clicked");
        full.classList.remove("clicked");
    }
    billtime();
};

half.addEventListener("click", halfdays);

// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.

const fulldays = () => {
    cost_per_day = 35;
    if (!full.classList.contains("clicked")) {
        full.classList.add("clicked");
        half.classList.remove("clicked");
    }
    billtime();
};

full.addEventListener("click", fulldays);

/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value

const billtime = () => {
    overall_cost = num_of_day * cost_per_day;
    cal_cost.innerHTML = overall_cost;
};
