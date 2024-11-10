function convertToNumber(){
    const text="$7,18.00";
    const convertToSimpleText=parseFloat(text.replace(/[$,]/g,""));
    //const textToNumber=parseFloat(convertToSimpleText);
    console.log(convertToSimpleText);
    console.log(typeof convertToSimpleText);
}
//convertToNumber();

function extractDecimalValue(text) {
    // Use a regular expression to capture the decimal number after the dollar sign
    const match = text.match(/\$([0-9]+\.[0-9]{2})/);
    // If there's a match, parse it as a float and return
    return match ? parseFloat(match[1]) : null;
}

// Example usage:
const itemTotalText = "Item total: $55.97";
const itemTotalValue = extractDecimalValue(itemTotalText);
console.log(itemTotalValue);