/* global $*/

// Meal Details: In the left most panel, the user enters the base cost for a meal, 
// the tax rate, and the tip percentage the customer wants to leave. When they hit the 
// submit button, the app should validate that the value in each field is numeric. 
// If the form is valid, the Customer Charges and My Earnings Info section should update 
// accordingly.

function handleValueSubmit(){
    // Event listener for the submit button
    // On submit, capture values in all 3 forms
    // Call on functions to calculate necessary values
    $('.submit-button').click(function(event){
        event.preventDefault();
        console.log('Submit button clicked');
        const mealPriceEntry = $(event.target)
        .siblings('.meal-details-form')
        .find('.js-meal-price-entry')
        .val();
        console.log(mealPriceEntry);
        const taxRateEntry = $(event.target)
        .siblings('.meal-details-form')
        .find('.js-tax-rate-entry')
        .val();
        console.log(taxRateEntry);
        const tipPercentageEntry = $(event.target)
        .siblings('.meal-details-form')
        .find('.js-tip-percentage-entry')
        .val();
        console.log(tipPercentageEntry);
    });
}

function calculateSubtotal(){

}

function calculateTip(){

}

function calculateTotal(){

}

function handleWaitstaffCalculator(){
    handleValueSubmit();
}

$(handleWaitstaffCalculator);