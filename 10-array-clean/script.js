let arrNum = [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

function filterNum(arrNum, func) {
	let res = [];
	for (const num of arrNum) {
		!func(num) && res.push(num);
	}
	return res;
}

const checkNum = (num) => (num > 5 || num <= 0);



