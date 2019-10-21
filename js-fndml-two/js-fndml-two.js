// Write a JavaScript program to copy a string to the clipboard

buttonClick = () => {
    let textInput = document.getElementById("input");

    textInput.select();

    document.execCommand("copy");

    alert("You copied the text: " + textInput.value);
}