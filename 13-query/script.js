function fromObjectToString(obj) {
	const res = [];
	for (const key in obj) {
		res.push(`${key}=${obj[key]}`);
	}
	return res.join("&");
}

const obj = {
	search: "Вася",
	take: 10,
};
