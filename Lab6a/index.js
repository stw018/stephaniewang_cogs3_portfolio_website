//prompts
var guestsPrompt = prompt("How many guests do you have?");
var tablesPrompt = prompt("How many tables do you want?");

//convert strings into numbers
var totalGuests = parseInt(guestsPrompt);
var totalTables = parseInt(tablesPrompt);

//function to distribute guests evenly
function tableArrangment(numOfGuests, numOfTables) {
    //base case
    if (numOfGuests <= 0 || numOfTables <=0) {
        return "Please type in a valid number of guests and tables!";
    }

    //case for non-extra guests
    else if (numOfGuests % numOfTables == 0) {
        var baseGuests = Math.floor(numOfGuests/numOfTables);
        return `Your ${numOfGuests} guests will be seated as follows: ${numOfTables} tables of ${baseGuests}.`
    }
    
    //case for extra guests
    else {
        var baseGuests = Math.floor(numOfGuests/numOfTables);
        var extraGuests = numOfGuests % numOfTables;
    
        var baseTables = numOfTables - extraGuests;
        var extraTables = numOfTables - baseTables
        extraGuests = baseGuests + (Math.floor(extraGuests/extraTables));
    
        return `Your ${numOfGuests} guests will be seated as follows: ${extraTables} tables of ${extraGuests}, and ${baseTables} table of ${baseGuests}.`;
    }
}

//execute function
alert(tableArrangment(totalGuests, totalTables));

//store executed function
var outcome = tableArrangment(totalGuests, totalTables);

//display outcome in webpage
document.getElementById("seatingOutput").innerHTML = outcome;