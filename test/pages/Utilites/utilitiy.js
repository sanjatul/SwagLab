class Utility{
      async extractDecimalValue(text) {
        // Use a regular expression to capture the decimal number after the dollar sign
        const match = text.match(/\$([0-9]+\.[0-9]{2})/);
        // If there's a match, parse it as a float and return
        return match ? parseFloat(match[1]) : null;
    }
}

module.exports =new Utility();