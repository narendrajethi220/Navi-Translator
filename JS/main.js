console.log("Hello World");
var translateButton = document.querySelector("#btn-translate");
// console.log(translateButton);
var inputText = document.querySelector("#text-input");
// console.log(inputText);
var outputText = document.querySelector("#text-output");

var serverUrl = "https://api.funtranslations.com/translate/navi.json";
function translationUrl(txt) {
  return serverUrl + "?" + "text=" + txt;
}
// var url = encodeUrl(inputText);
function clickHandler() {
  var txt = inputText.value;
  fetch(translationUrl(txt))
    //   The above call if successful will return a json response
    // {
    //   "success": {
    //     "total": 1
    //   },
    //   "contents": {
    //     "translation": "numbers",
    //     "text": "238799087",
    //     "translated": "<translated text>"
    //   }
    //  }
    .then((response) => response.json())
    .then((json) => {
      var tranlatedText = json.contents.translated;
      outputText.innerHTML = tranlatedText;
    });
}
translateButton.addEventListener("click", clickHandler);
// var resetButton = document.querySelector("#btn-reset");
// // resetButton = document.addEventListener("click", function resetA() {
// //   inputText.value = "";
// //   outputText.value = "";
// });
