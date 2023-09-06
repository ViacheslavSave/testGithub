function checkDate(arrStr) {
	const res = [];
	for (const strDate of arrStr) {
		for (const variant of ["/", "-"]) {
			if (!(strDate[2] === variant && strDate[5] === variant)) {
				continue;
			}

			const arrDate = strDate.split(variant);
			if (arrDate.length !== 3 || arrDate[2] == 0 || arrDate.some((el) => isNaN(Number(el)))) {
				continue;
			}

			if (variant === "/") {
				[arrDate[0], arrDate[1]] = [arrDate[1], arrDate[0]];
			}

			const [day, manth, year] = arrDate.map((elem) => Number(elem));
			let lastDay = 30;

			if (!(manth > 0 && manth <= 12)) {
				continue;
			} else if (manth === 2) {
				lastDay = !(year % 400) || (year % 100 && !(year % 4)) ? 29 : 28;
			} else if ((manth <= 7 && manth % 2) || (manth > 7 && !(manth % 2))) {
				lastDay = 31;
			}

			if (day > 0 && day <= lastDay) {
				res.push(arrDate.join("-"));
			}
		}
	}
	return res;
}
