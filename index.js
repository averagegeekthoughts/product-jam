const button1 = document.getElementById('button1');
const button2 = document.getElementById('button2');

button1.addEventListener("click", function changeColor(el) {
  document.body.style.backgroundColor = 'salmon';
  document.body.style.backgroundColor = 'white';
});
button2.addEventListener("click", function showHideText(el) {
  const textToHide = document.getElementById('header');
  if (textToHide.style.display == "block") {
    textToHide.style.display = "none";
  } else {
    textToHide.style.display = "block";
  }
})
