const resultatDiv = document.getElementById("resultat");
const resultatHtmlDiv = document.getElementById("resultatHtml");
const sizeSlider = document.getElementById("sizeSlider");
const textInput = document.getElementById("textInput");
const colorChooser = document.getElementById("colorChooser");
const borderRadius = document.getElementById("borderChooser");
const radiusSlider = document.getElementById("radiusSlider");

showDiv();

function showDiv() {
  resultatDiv.innerHTML =
    '<div style="' +
    "background-color: " +
    colorChooser.value +
    ";" +
    "width: " +
    sizeSlider.value +
    "px;" +
    "height: " +
    sizeSlider.value +
    "px;" +
    "border: " +
    "5px " +
    "solid " +
    borderChooser.value +
    ";" +
    "border-radius: " +
    radiusSlider.value +
    "%" +
    ";" +
    '">' +
    textInput.value +
    "</div>";
  resultatHtmlDiv.innerText = resultatDiv.innerHTML;
}
