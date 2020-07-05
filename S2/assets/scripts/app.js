let result = 0;
// let multiplier = parseFloat(prompt("Entrer un nombre "));
// result = result + 10 * multiplier;

// Functions  - Code on demand
function add(a, b) {
    const result = a + b;
    //alert("The result is " + result);
    return a + b;
}

// //outputResult(result, multiplier + ' * ' + result/multiplier);
// outputResult(add(10, 15))

// let a, b, c;

// function changeGlobalValues() {
//     a = 1;
//     b = 3; 
//     c = 8;
// }

// changeGlobalValues()

// alert("a : " + a + "b : " + b + " c : " + c)

const defaultResult = 0;
let currentResult = defaultResult;

function getUserInput() {
    return parseFloat(userInput.value);
}

function add(sign = 1) {
    const enteredNumber = getUserInput();
    let calcDescription;
     if (sign > 0) {
        calcDescription = `${result} + ${enteredNumber}`;
     } else {
        calcDescription = `${result} - ${enteredNumber}`;
     }
     currentResult = currentResult + (sign * enteredNumber);
     result = currentResult;
     outputResult(currentResult, calcDescription);
}

function mul(action = "mul") {
    const enteredNumber = getUserInput();
    let calcDescription;
     if (action == "mul") {
        calcDescription = `${result} * ${enteredNumber}`;
        currentResult = currentResult * enteredNumber;
        result = currentResult;
        outputResult(currentResult, calcDescription);
     } else {
        calcDescription = `${result} / ${enteredNumber}`;
        currentResult = currentResult / enteredNumber;
        result = currentResult;
        outputResult(currentResult, calcDescription);
     }
}


addBtn.addEventListener("click", function() {
    add(1);
})

subtractBtn.addEventListener("click", function() {
    add(-1);
})

multiplyBtn.addEventListener("click", function() {
    mul("mul")
})

divideBtn.addEventListener("click", function() {
    mul("div")
})