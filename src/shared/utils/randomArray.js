export const generateRandomArray = (maxValue) => {
	let array = []
	for (let i = 0; i < maxValue; i++) {
		array.push(i)
	}

	var j = array.length,
		k = 0,
		temp;

	while (j--) {
		k = Math.floor(Math.random() * (j + 1));

		// swap randomly chosen element with current element
		temp = array[j];
		array[j] = array[k];
		array[k] = temp;
	}

	return array
}