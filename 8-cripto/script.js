const password = "sferghytr";
function crypto(password) {
	const half = (password.length / 2).toFixed();
	password = password.split("");
	password.push(password.splice(half, 1)[0]);
	password.unshift(password.splice(half, 1)[0]);
	password.push(password.splice(half, 1)[0]);
	password.unshift(password.splice(half, 1)[0]);
	password.push(password.splice(half, 1)[0]);
	return password.join("");
}

function check(hashPassword, str) {
	const half = (hashPassword.length / 2).toFixed();
	hashPassword = hashPassword.split("");
	hashPassword.splice(half, 0, hashPassword.pop());
	hashPassword.splice(half, 0, hashPassword.shift());
	hashPassword.splice(half, 0, hashPassword.pop());
	hashPassword.splice(half, 0, hashPassword.shift());
	hashPassword.splice(half, 0, hashPassword.pop());
	return hashPassword.join("") === str;
}
