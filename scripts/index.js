/* Declare and initialize global variables
-------------------------------------------------- */
var pageBg = document.querySelector("html");
var sliders = document.getElementsByTagName("input");
var rgb = [0, 0, 0];

/* Event handlers for range sliders
-------------------------------------------------- */
for (var i = 0; i < sliders.length; i++) {
    // Loop through the three range inputs and for each one, add an onchange event listener
    sliders[i].onchange = function () {
        // If an input range slider is moved, grab it’s id attribute value
        var whichSlider = this.getAttribute("id");
        // …also, grab the numerical value that it is set to
         var sliderValue = this.value;
        // Declare a new variable to hold the new RGB value that calls a function that updates the global rgb variable, passing in what slider was moved (whichSlider), and its value (sliderValue)
        var newRgb = changeRgb(whichSlider, sliderValue);
        // Call a function that builds a new CSS background-color property (as a string), passing it the updated RGB array (newRgb)
        var newCSS = writeCSS(newRgb);
        // Directly change the background-color of the page using the new CSS rgb value
        pageBg.style.backgroundColor = newCSS;
    }
}

/* Functions
-------------------------------------------------- */
// STEP 1: Write a function called changeRgb that accepts two 
//parameters, channel and value
function changeRgb (channel, value) {

    // Convert the value to a number
    value = parseInt(value, 10);

    // STEP 2: Build a switch based on the value of the channel 
    //parameter (red, green, or blue) (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch)
    
    // STEP 3: Inside each case, update the appropriate 
    // global rgb array element (0, 1, or 2)

    switch (channel) {
        case "red":
            rgb[0] = parseInt(value);
            break;
        case "green":
            rgb[1] = parseInt(value);
            break;
        case "blue":
            rgb[2] = parseInt(value);
            break;
    }
    console.log("Updated RGB:", rgb);

    // STEP 4: Return the updated rgb array back to the event handler
    return rgb;
}
// STEP 5: Write a new function called writeCSS that accepts one parameter, the updated rgb array
function writeCSS (updatedRgb) {
    /* STEP 6: Declare a new local variable called newColor that will contain the new string that will be used to update the CSS 
    background-color property in the following format: rgb(0,0,0) - initialize it with the start of the string, 'rgb(' */
    var newColor = "rgb(";
    
    newColor += updatedRgb.join(',');
    // STEP 10: Finish off the newColor string by adding the closing ')'
    newColor += ')';
    // STEP 11: Return the string newColor back to the event handler
    return newColor;
}

// STEP 12: Enjoy the application in your browser!

// This page inspired by https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Return_values
    