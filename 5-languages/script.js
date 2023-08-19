const language = prompt("введите язык (ru,en,de)");
switch (language) {
	case "ru":
		console.log("Привет");

		break;
	case "en":
		console.log("Hello");

		break;
	case "de":
		console.log("Gutten tag!");

		break;

	default:
		console.log("язык не поддерживается");
		break;
}
