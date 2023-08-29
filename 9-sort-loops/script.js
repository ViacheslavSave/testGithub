const arr = [1, 40, -5, 10, 0];
sort(arr);

function sort(arr) {
	for (let i = 0; i < arr.length; i++) {
		let j = i;
		for (j; j < arr.length; j++) {
			if (arr[j] > arr[i]) {
				let val = arr[i];
				arr.splice(i, 1, arr[j]);
				arr.splice(j, 1, val);
			}
		}
	}
}
