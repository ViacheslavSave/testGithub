const form = document.forms.calculate;
const resDiv = document.querySelector(".res");

	for (const input of [form.num_1, form.num_2]) {
		input.addEventListener("input", (e) => {
			if (isNaN(e.target.value)) {
				e.preventDefault(); // не работает, есть ли другой способ отменить действие ?

				e.target.value = e.target.value.slice(0, -1);
			}
		});
	}

document.addEventListener("keydown", (e) => {
	operation(e.key);
});

function checkValue() {
	let error = false;
	for (const input of [form.num_1, form.num_2]) {
		if (input.value.length > 0) {
			input.classList.remove("error");
		} else {
			input.classList.add("error");
			error = true;
		}
	}
	return error;
}

function operation(operator) {
	const textError = "заполните все поля";
	const num_1 = Number(form.num_1.value);
	const num_2 = Number(form.num_2.value);

	switch (operator) {
		case "+":
			resDiv.innerText = checkValue() ? textError : num_1 + num_2;
			break;
		case "-":
			resDiv.innerText = checkValue() ? textError : num_1 - num_2;
			break;
		case "*":
			resDiv.innerText = checkValue() ? textError : num_1 * num_2;
			break;
		case "/":
			resDiv.innerText = checkValue() ? textError : num_1 / num_2;
			break;
	}
}

