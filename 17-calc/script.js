"use strict";
const monitor = document.querySelector(".monitor span");
const monitorWrapper = document.querySelector(".monitor");
const buttons = [...document.querySelectorAll("button")];
monitor.style.fontSize = "40px";
let task = {
	num_1: "0",
	operator: "",
	num_2: "",
};
let result = false;

document.addEventListener("keydown", (e) => {
	let button = e.key;
	button === "*" && (button = "x");
	clickButton(button);
	calculate(button);
});

document.addEventListener("keyup", () => {
	clickButton();
});

document.addEventListener("mousedown", (e) => {
	let button = e.target.innerText;
	if (e.target.tagName === "BUTTON" && e.target.closest(".calculate")) {
		clickButton(button);
		calculate(button);
	}
});

document.addEventListener("mouseup", () => {
	clickButton();
});

function clickButton(button = false) {
	let activeButton;
	if (button) {
		activeButton = buttons.find((elem) => button === elem.innerText);
		if (activeButton) {
			activeButton.classList.add("active");
		}
	} else {
		activeButton = buttons.find((button) => button.classList.contains("active"));
		if (activeButton) {
			activeButton.classList.remove("active");
		}
	}
}

function calculate(button) {
	(button === "Enter" || button === " ") && (button = "=");
	button === "Escape" && reset();
	const activeNum = task.operator ? "num_2" : "num_1";
	if (button === "AC") {
		reset();
	} else if (button === "Backspace") {
		Backspace();
	} else if (button >= 0 && button <= 9) {
		addNum(activeNum, button);
	} else if (button === ".") {
		addPoint(activeNum);
	} else if (button === "%" && Number(task.num_2)) {
		task.num_2 = String(Number(task.num_1) !== 0 ? (task.num_1 / 100) * task.num_2 : 0);
	} else if (button === "+/-" && !task.operator && task.num_1 !== "0") {
		task.num_1 = task.num_1.startsWith("-") ? task.num_1.slice(1) : "-" + task.num_1;
	} else if (["/", "x", "-", "+", "="].includes(button)) {
		addOperatorOrCalc(button);
	}
	monitor.innerText = [...Object.values(task)].join("");
	controlWidth();
}

function addNum(activeNum, button) {
	let maxLength = 16;
	task[activeNum].includes(".") && maxLength++;
	task[activeNum].includes("-") && maxLength++;
	if (result && !task.operator) {
		result = false;
		task.num_1 = "0";
	} else if (task[activeNum].length >= maxLength) {
		return;
	}
	const elemNum = task[activeNum].split(".");
	if (elemNum[1] === undefined && Number(elemNum[0]) === 0) {
		task[activeNum] = task[activeNum].slice(0, -1) + button;
	} else {
		task[activeNum] += button;
	}
}

function addPoint(activeNum) {
	if (result && !task.operator) {
		result = false;
		task.num_1 = "0.";
	} else if (task.num_2 === "" && task.operator) {
		task.num_2 = "0.";
	} else if (!task[activeNum].includes(".")) {
		task[activeNum] += ".";
	}
}

function Backspace() {
	if (result && !task.operator) {
		result = false;
		task.num_1 = "0";
		return;
	}
	for (const [key, values] of Object.entries(task).reverse()) {
		if (values.length > 0) {
			task[key] = task[key].slice(0, -1);
			break;
		}
	}
	switch (true) {
		case task.num_1.length === 0:
		case task.num_1 === "-0" || task.num_1 === "-":
			task.num_1 = "0";
			break;
	}
}

function addOperatorOrCalc(button) {
	if (task.num_2 === "") {
		task.num_1 = String(Number(task.num_1));
		task.operator = button !== "=" ? button : "";
	} else if (task.num_2 !== "" && Number(task.num_2) === 0 && task.operator === "/") {
		reset();
		monitor.innerText = "Ошибка";
		return;
	} else if (task.num_2 !== "") {
		task.operator === "x" && (task.operator = "*");
		const res = String(eval([...Object.values(task)].join("")));
		task.operator === "*" && (task.operator = "x");
		result = true;
		task = {
			num_1: res,
			operator: button !== "=" ? button : "",
			num_2: "",
		};
	}
}

function reset() {
	task = {
		num_1: "0",
		operator: "",
		num_2: "",
	};
	result = false;
	monitor.style.fontSize = "40px";
}

function controlWidth() {
	const horizontalScroll = monitor.scrollWidth - (monitorWrapper.clientWidth - 15);
	if (horizontalScroll > 5 && parseFloat(monitor.style.fontSize) > 18) {
		monitor.style.fontSize = parseFloat(monitor.style.fontSize) - 0.5 + "px";
		controlWidth();
	} else if (horizontalScroll > 0) {
		monitor.scrollTo(horizontalScroll, 0);
	} else if (horizontalScroll < 5 && parseFloat(monitor.style.fontSize) < 40) {
		monitor.style.fontSize = parseFloat(monitor.style.fontSize) + 0.5 + "px";
		controlWidth();
	}
}
