const form = document.forms.calculate;

function validNum() {
	return form.num_1.valueAsNumber && form.num_2.valueAsNumber;
}

const resDiv = document.querySelector(".res");
document.addEventListener("keydown", (e) => {
	switch (e.key) {
		case "+":
			resDiv.innerText = !validNum() ? "ошибка" : form.num_1.valueAsNumber + form.num_2.valueAsNumber;
			break;
		case "-":
			resDiv.innerText = !validNum() ? "ошибка" : form.num_1.valueAsNumber - form.num_2.valueAsNumber;
			break;
		case "*":
			resDiv.innerText = !validNum() ? "ошибка" : form.num_1.valueAsNumber * form.num_2.valueAsNumber;
			break;
		case "/":
			resDiv.innerText = !validNum() ? "ошибка" : form.num_1.valueAsNumber / form.num_2.valueAsNumber;
			break;
	}
});
