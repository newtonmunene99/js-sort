function bubblesort(array) {
	if (array.length < 2) {
		return array;
	} else {
		var swap;
		var depth = array.length - 1;
		var A = array;
		do {
			swap = false;
			for (let index = 0; index < depth; index++) {
				if (A[index] < A[index + 1]) {
					var temporary = A[index];
					A[index] = A[index + 1];
					A[index + 1] = temporary;
					swap = true;
				}
			}
			depth--;
		} while (swap);
		return A.reverse();
	}
}

function insertionsort(array) {
	for (let index = 1; index < array.length; index++) {
		if (array[index] < array[0]) {
			array.unshift(array.splice(index, 1)[0]);
		} else if (array[index] > array[index - 1]) {
			continue;
		} else {
			for (let j = 1; j < index; j++) {
				if (array[index] > array[j - 1] && array[index] < array[j]) {
					array.splice(j, 0, array.splice(index, 1)[0]);
				}
			}
		}
	}
	return array;
}

function quicksort(array) {
	if (array.length <= 1) {
		return array;
	} else {
		var left = [];
		var right = [];
		var A = [];
		var pivot = array.pop();
		var length = array.length;
		for (let index = 0; index < length; index++) {
			if (array[index] <= pivot) {
				left.push(array[index]);
			} else {
				right.push(array[index]);
			}
		}
		return A.concat(quicksort(left), pivot, quicksort(right));
	}
}

// function heapsort(array) { }

// function mergesort(array) { }
