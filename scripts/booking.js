/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified.
// Do any of these variables need to be initialized when the page is loaded?
// When do they need to be reset or updated?

var cost_per_day = 35;
var num_of_days_selected = 0;
var mon_btn = document.getElementById('monday');
var tues_btn = document.getElementById('tuesday');
var weds_btn = document.getElementById('wednesday');
var thurs_btn = document.getElementById('thursday');
var fri_btn = document.getElementById('friday');
var full_btn = document.getElementById('full');
var half_btn = document.getElementById('half');
var clear_btn = document.getElementById('clear-button');

/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!

function add_color(){
    if(this.classList.contains('blue-hover')){
        this.classList.add('clicked');
    }
}

mon_btn.addEventListener('click', add_color);
tues_btn.addEventListener('click', add_color);
weds_btn.addEventListener('click', add_color);
thurs_btn.addEventListener('click', add_color);
fri_btn.addEventListener('click', add_color);


/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.

function clear_days(){
    mon_btn.classList.remove('clicked');
    tues_btn.classList.remove('clicked');
    weds_btn.classList.remove('clicked');
    thurs_btn.classList.remove('clicked');
    fri_btn.classList.remove('clicked');
    cost_per_day = 0;
    num_of_days_selected = 0;
}

clear_btn.addEventListener('click', clear_days);

/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.

function half_click(){
    half_btn.addEventListener('click', add_color);
    full_btn.classList.remove('clicked');
    document.getElementById('calculated-cost').innerHTML='0';
    cost_per_day = 20;
}

half_btn.addEventListener('click', half_click);

// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.

function full_click(){
    full_btn.addEventListener('click', add_color);
    half_btn.classList.remove('clicked');
    document.getElementById('calculated-cost').innerHTML='0';
    cost_per_day = 35;
}

full_btn.addEventListener('click', full_click);

/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value

