/*
 * Conditionals, Functions, Scope and Loops.
 */

// Equals
let equals = 1 === 1;
console.log(equals);

// Greater than
let greaterThan = 5 > 1;

// Less than
let lessThan = 2 < 10;

// Greater than Equals
let greaterThanEq = 4 <= 9;

// Less than Equals
let lessThanEq = 4 <= 9;

// Not Equals
let notEquals = 5 !== 2;

let storeA = 1.40;
let storeB = 3.40;


function compareStorePrices(storeA, storeB) {
	let storeAIsLower = storeA < storeB
	if(storeAIsLower) {
		console.log("Store A has a lower price.")
	} else if(storeB < storeA) {
		console.log("Store B has a lower price.")
	} else {
		console.log("Their prices are equal.")
	}
}
compareStorePrices (10, 5);
compareStorePrices(7, 10);

function squareNum (number) {
	return number * number;
}

let squaredNumber = squareNum(10);
console.log(squaredNumber);


let x = 10;

function addNumbers (n, m, x) {
	console.log(x);
	let b;
	if(1===1) {
		b = 8;
	}
	console.log(b);
	return n + m;
}

addNumbers(1, 2, 10);

let ourArray = [1, 2, 3, 4, 5, 6, 7];

let arrlen = ourArray.length;
for(let i = 0; i<arrlen; i++){
	//console.log("i is equal to: " + i);
	console.log(ourArray[i]);
	for(let j = 0; j<10; j++) {
		console.log('j is equal to: ' + j )
	}
}

let k = 0;
while (k < 10) {
	console.log('Ran');
	k = k + 1;
}