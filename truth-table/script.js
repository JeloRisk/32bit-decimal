/** @format */

const _input = document.querySelector('.input');
let _goBut = document.querySelector('#submit-button');
const doCalculation = (input) => {
	// const toChars = (n) => `${n >= 26 ? toChars(Math.floor(n / 26) - 1) : ''}${'ABCDEFGHIJKLMNOPQRSTUVWXYZ'[n % 26]}`;
	// console.log(toChars(2));
	let letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

	let userinput = input;
	let formula = 2 ** userinput;
	let rows_const = formula,
		rows = formula;
	let userLetter = letters.split('', input);
	console.log(userLetter);
	let cols = userinput;

	if (rows == '' || rows == null) rows = 10;

	if (cols == '' || cols == null) cols = 10;

	// for (let x = 0; x < cols; x++) {
	// 	rows = rows / 2;
	// 	console.log(rows);
	// 	for (let y = 0; y < rows_const; y++) {
	// 		if (y < rows) {
	// 			array.push(0);
	// 			console.log(rows);
	// 		} else {
	// 			array.push(1);
	// 		}
	// 	}
	// }

	let a = [];

	for (let i = 0; i < cols; i++) {
		rows = rows / 2;
		let b;
		for (j = 0, b = []; j < rows_const; j++) {
			b.push(0);

			if (j < rows_const) {
				// b.push(0) * 1;
				// b.push(1) * 1;
				// if (j < rows) {
				b.fill(1, rows, rows * 2);
				b.copyWithin(rows * 2, 0);
			}
		}
		a.push(b);
	}
	let verticalResult = a;
	let horizontalResult = verticalResult[0].map(function (item, index) {
		let horizontalResult = [];
		for (let i = 0; i < verticalResult.length; i++) {
			horizontalResult.push(verticalResult[i][index]);
		}
		return horizontalResult;
	});

	console.log(horizontalResult);
	console.log(verticalResult);

	createTable(rows_const, cols, a, horizontalResult);
	function createTable(rows, cols, a, result) {
		let output = "<table border='1' width='500' cellspacing='0'cellpadding='5' id = 'table'>";

		for (i = 0; i < rows; i++) {
			output = output + '<tr>';

			// console.log('m ' + a[i][3]);
			for (let j = 0; j < cols; j++) {
				output = output + '<td>' + result[i][j] + '</td>';
			}

			output = output + '</tr>';

			// j = 0;
		}
		output = output + '</table>';
		document.write(output);
	}
	let table = document.querySelector('#table');
	let thead = table.createTHead();
	let row = thead.insertRow();
	for (let key in userLetter) {
		let th = document.createElement('th');
		let text = document.createTextNode(userLetter[key]);
		th.appendChild(text);
		row.appendChild(th);
	}
};
// _goBut.addEventListener('click', () => {
// e.preventDefault();
_input.value = 1;
if (_input.value <= 10) {
	doCalculation(_input.value);
} else {
	alert('We only allowed to create truth table with 10 variables');
}
// });
