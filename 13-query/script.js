function fromObjectToString(obj) {
	const res = [];
	for (const [key,value] of Object.entries(obj)) {
		res.push(`${key}=${value}`);
	}
	return res.join("&");
}