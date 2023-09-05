const arrStr = ["10-02-2022", "тест", "11/12/2023", "00/13/2022", "41/12/2023", "1/12/2023", "01/0002/2023"];

function checkDate(arrStr) {
	const variants = ["/", "-"];
	const res = [];
	for (const strDate of arrStr) {
		for (const variant of variants) {
			const dateArr = strDate.split(variant);
			if (dateArr.length === 3) {
				const [day, manth, year] = dateArr;
				if (
					(day.length === 1 || day.length === 2) &&
					day > 0 &&
					day <= 31 &&
					manth.length === 2 &&
					manth > 0 &&
					manth <= 12 &&
					year.length === 4 &&
					year > 1900 &&
					year <= 2023
				) {
					res.push(dateArr.join("-"));
					break;
				}
			}
		}
	}
	return res;
}
