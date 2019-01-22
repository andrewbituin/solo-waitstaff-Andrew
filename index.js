/* global $*/

// Meal Details: In the left most panel, the user enters the base cost for a meal,
// the tax rate, and the tip percentage the customer wants to leave. When they hit the
// submit button, the app should validate that the value in each field is numeric.
// If the form is valid, the Customer Charges and My Earnings Info section should update
// accordingly.

const STORE =  {
	items: [
		{mealPrice: 0},
		{taxRate: 0},
		{tipPercentage: 0},
		{subtotal: 0},
		{tip: 0},
		{total: 0}
	]
};

function renderWaitstaffCalculator(){
	const mealPrice = parseFloat(STORE.items[0].mealPrice);
	const taxRate = parseFloat(STORE.items[1].taxRate);
	calculateSubtotal(mealPrice, taxRate);

	const tip = parseFloat(STORE.items[2].tipPercentage);
	const subtotal = parseFloat(STORE.items[3].subtotal);
	calculateTip(tip, subtotal);

    const tipTotal = parseFloat(STORE.items[4].tip);
    STORE.items[5].total = tipTotal + subtotal;
    const total = STORE.items[5].total;
    $('.js-customer-charges-values').html(generateCustomerChargesHTML(subtotal, tipTotal, total));
    // generateHTML function for the customer charges values
}

function generateCustomerChargesHTML(subtotal, tip, total){
    return `
        <li>Subtotal: $${subtotal}</li>
        <li>Tip: $${tip}</li>
        <li>Total: $${total}</li>
    `;
}

function calculateTotal(tipTotal, subtotalAmount){
    STORE.items[5].total = 5;
}

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
		STORE.items[0].mealPrice = mealPriceEntry;
		console.log(mealPriceEntry);

		const taxRateEntry = $(event.target)
			.siblings('.meal-details-form')
			.find('.js-tax-rate-entry')
			.val();
		console.log(taxRateEntry);
		STORE.items[1].taxRate = taxRateEntry;

		const tipPercentageEntry = $(event.target)
			.siblings('.meal-details-form')
			.find('.js-tip-percentage-entry')
			.val();
		console.log(tipPercentageEntry);
		STORE.items[2].tipPercentage = tipPercentageEntry;
		renderWaitstaffCalculator();
	});
}

function calculateSubtotal(base, taxRate){

	let tax = base * (taxRate / 100);
	let total = base + tax;
	total = total.toFixed(2);
	STORE.items[3].subtotal = total;
	console.log(total);
}

function calculateTip(tip, subtotal){
    let tipPercent = (tip / 100).toFixed(2);
    let tipAmount = subtotal * tipPercent;
    tipAmount = tipAmount.toFixed(2);
	STORE.items[4].tip = tipAmount;
}

function calculateTotal(value){

}

function handleWaitstaffCalculator(){
	handleValueSubmit();
}

$(handleWaitstaffCalculator);