const button1 = document.getElementById('button1');
var flag1 = true;

const button2 = document.getElementById('button2');
var flag2 = true;

button1.addEventListener("click", function changeColor(el) {
  if (flag1) {
    document.body.style.backgroundColor = 'salmon';
    document.body.style.color = 'white';
    flag1 = false;
    return;
  }
  document.body.style.backgroundColor = '#EADEBA';
  document.body.style.color = '#2E475D';
  flag1 = true;
});

button2.addEventListener("click", function showHideText(el) {
  const textToHide = document.getElementById('header');
  if (flag2) {
    textToHide.style.display = "none";
    flag2 = false;
    return;
  } 
  textToHide.style.display = "block";
  flag2 = true;
})
