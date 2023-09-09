const LONG_MONTH_ARRAY = [1, 3, 5, 7, 8, 10, 12];

function getValidDate(arrDate) {
	return arrDate.reduce((acc, date) => {
		const res = checkDate(date);
		return res ? [...acc, res] : acc;
	}, []);
}

function checkDate(dateString) {
	[month, day, year, checklength] = dateString.split("/");

	if (!year) {
		[day, month, year, checklength] = dateString.split("-");
	}

	switch (true) {
		case checklength !== undefined:
		case !(day > 0) || day.length !== 2:
		case !(month > 0 && month <= 12) || month.length !== 2:
		case !(year > 0) || year.length !== 4:
			return null;
	}

	return day <= lastDay(Number(month), year) ? `${day}-${month}-${year}` : null;
}

function isLeapYear(year) {
	return (year % 4 == 0 && year % 100 != 0) || year % 400 == 0;
}

function lastDay(month, year) {
	if (month === 2) {
		return isLeapYear(year) ? 29 : 28;
	}
	return LONG_MONTH_ARRAY.includes(month) ? 31 : 30;
}
