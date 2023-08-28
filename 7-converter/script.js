const sum = 1500;
const currencyOfFunds = "EURO";
const targetСurrency = "руб";
//
function converter(sum, currencyOfFunds, targetСurrency) {
	if (!(checkAvailabilityOfCurrency(currencyOfFunds) && checkAvailabilityOfCurrency(targetСurrency))) {
		return null;
	}
	const euroPrice = 100;
	const usdPrice = 70;
	let currencyInRubles;
	if (currencyOfFunds !== "руб") {
		let rate = price(euroPrice, usdPrice, currencyOfFunds);
		currencyInRubles = sum * rate;
	} else {
		currencyInRubles = sum;
	}
	if (targetСurrency !== "руб") {
		let rate = price(euroPrice, usdPrice, targetСurrency);
		return `${(currencyInRubles / rate).toFixed(2)} ${targetСurrency}`;
	}
	return ` ${currencyInRubles.toFixed(2)} ${targetСurrency}`;
}
//
function price(euroPrice, usdPrice, currency) {
	switch (currency) {
		case "$":
			return usdPrice;
		case "EURO":
			return euroPrice;
	}
}
//
function checkAvailabilityOfCurrency(currency) {
	switch (currency) {
		case "руб":
		case "$":
		case "EURO":
			return true;
	}
	return null;
}
