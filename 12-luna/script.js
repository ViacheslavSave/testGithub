// const card = "4561-2612-1234-5464";
const card = "4561-2612-1234-5467";
// const card = "2665-4565-9087-4563";


function checkLuhn(card) {
	cardNumber = card.replaceAll("-", "");
	if (cardNumber.length !== 16 || !Number(cardNumber)) {
		return false;
	}

	return !Boolean(
		cardNumber.split("").reduce((acc, num, index) => {
			if (!(index % 2)) {
				const operationМultiply = num * 2;
				return (acc += operationМultiply > 9 ? operationМultiply - 9 : operationМultiply);
			}
			return (acc += Number(num));
		}, 0) % 10
	);
}