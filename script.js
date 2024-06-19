function updateText(elementId, newColor) {
    // Gets a reference to the element that you want to change
    const element = document.getElementById(elementId);
    // checks weather or not the element you want to change exist
    if (element) {
        //changes the text inside the element 
        element.style.backgroundColor = newColor
    } else {
        //displays an error message in the console if the element is not found
        console.error(`Element with ID '${elementId}' not found.`);
    }
}

// TODO: Get a reference to the button using a const variable named changeTextButton
const changeTextButton = document.getElementById("div1");

// TODO: Add a click event listener to the button
changeTextButton.addEventListener("click", function () {
    // TODO: Call the updateText function to update the text inside the paragraph to "Text has been updated!"
    updateText("div1", "red");
});