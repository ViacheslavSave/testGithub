const password = "fghrtyuj";

function crypto(password) {
	const arrPassword = password.split("");
	arrPassword[3] && arrPassword.unshift(arrPassword.splice(3, 1)[0]);
	arrPassword[7] && arrPassword.unshift(arrPassword.splice(7, 1)[0]);
	arrPassword[5] && arrPassword.unshift(arrPassword.splice(5, 1)[0]);
	arrPassword[2] && arrPassword.unshift(arrPassword.splice(2, 1)[0]);
	arrPassword[1] && arrPassword.unshift(arrPassword.splice(1, 1)[0]);
	arrPassword[4] && arrPassword.unshift(arrPassword.splice(4, 1)[0]);
	arrPassword[0] && arrPassword.unshift(arrPassword.splice(0, 1)[0]);
	console.log(arrPassword.join(""));
	return arrPassword.join("");
}

function check(hashPassword, str) {
	const arrPassword = hashPassword.split("");
	arrPassword[0] && arrPassword.splice(0, 0, arrPassword.shift());
	arrPassword[4] && arrPassword.splice(4, 0, arrPassword.shift());
	arrPassword[1] && arrPassword.splice(1, 0, arrPassword.shift());
	arrPassword[2] && arrPassword.splice(2, 0, arrPassword.shift());
	arrPassword[5] && arrPassword.splice(5, 0, arrPassword.shift());
	arrPassword[7] && arrPassword.splice(7, 0, arrPassword.shift());
	arrPassword[3] && arrPassword.splice(3, 0, arrPassword.shift());
	return arrPassword.join("") === str;
}