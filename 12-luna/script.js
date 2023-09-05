// const card = "4561-2612-1234-5464";
const card = "4561-2612-1234-5467";
// const card = "2665-4565-9087-4563";


function checkLuhn(card) {
	card = card.replaceAll("-", "");
	if (card.length !== 16 || !Number(card)) {
		return false;
	}

	return !Boolean(
		card.split("").reduce((acc, elem, index) => {
			if (!(index % 2)) {
				const operationМultiply = elem * 2;
				return (acc += operationМultiply > 9 ? operationМultiply - 9 : operationМultiply);
			}
			return (acc += Number(elem));
		}, 0) % 10
	);
}