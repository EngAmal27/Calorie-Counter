const calorieCounter = document.getElementById("calorie-counter");
const budgetNumberInput = document.getElementById("budget-number");
const entryDropdown = document.getElementById("entry-dropdown");
const addEntryButton = document.getElementById("add-entry");
const clearButton = document.getElementById("clear");
const output = document.getElementById("output");


let isError = false;


function cleanInputString (str) {
    console.log("original string: ", str);
    const regex = /\+-\s/;
    return str.replace(/[+\-\s]/g, '');
    
}
cleanInputString("1 + 2 - 3");
  
function isInvalidInput(str) {
    const regex = /\d+e\d+/i;
    return str.match(regex);
  }

  function addEntry() {
    const targetId = '#' + entryDropdown.value;
    const targetInputContainer = document.querySelector(targetId + ' .input-container');
    console.log(targetInputContainer); // For debugging purposes
}