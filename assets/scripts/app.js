const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];

function getUsernameInput() {
    return parseInt(userInput.value);
}

function createAndWriteOutput(operator, resultBeforeCalculation, calculationNumber) {
    const calculationDescription = `${resultBeforeCalculation} ${operator} ${calculationNumber}`;
    outputResult(currentResult, calculationDescription);
}

function writeToLog(
    operationIdentifier,
    previousResult,
    operationNumber,
    newResult
) {
    const logEntry = {
        operation: operationIdentifier,
        previousResult: previousResult,
        number: operationNumber,
        result: newResult
    };
    logEntries.push(logEntry);
    // console.log(logEntry.operation);
    console.log(logEntries);
}

function addNumbers () {
    const enteredNumber = getUsernameInput();
    const initialResult = currentResult;
    currentResult = currentResult + enteredNumber; // currentResult += enteredNumber is a shorter alternative
    createAndWriteOutput('+', initialResult, enteredNumber);
    writeToLog('Add', initialResult, enteredNumber, currentResult);
}

function subtractNumbers () {
    const enteredNumber = getUsernameInput();
    const initialResult = currentResult;
    currentResult = currentResult - enteredNumber;
    createAndWriteOutput('-', initialResult, enteredNumber);
    writeToLog('Subtract', initialResult, enteredNumber, currentResult);
}

function multiplyNumbers () {
    const enteredNumber = getUsernameInput();
    const initialResult = currentResult;
    currentResult = currentResult * enteredNumber;
    createAndWriteOutput('*', initialResult, enteredNumber);
    writeToLog('Multiply', initialResult, enteredNumber, currentResult);
}

function divideNumbers () {
    const enteredNumber = getUsernameInput();
    const initialResult = currentResult;
    currentResult = currentResult / enteredNumber;
    createAndWriteOutput('/', initialResult, enteredNumber);
    writeToLog('Divide', initialResult, enteredNumber, currentResult);
}

addBtn.addEventListener('click', addNumbers);
subtractBtn.addEventListener('click', subtractNumbers);
multiplyBtn.addEventListener('click', multiplyNumbers);
divideBtn.addEventListener('click', divideNumbers);