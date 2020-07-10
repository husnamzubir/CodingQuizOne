function changeStyle() {
  let btnBlack = document.querySelector('#btnBlack');
  let btnRed = document.querySelector('#btnRed');
  let btnBlue = document.querySelector('#btnBlue');

  let x = document.querySelector('textarea');

  btnBlack.addEventListener('click', () => x.style.color = 'black');
  btnRed.addEventListener('click', () => x.style.color = 'red');
  btnBlue.addEventListener('click',()=> x.style.color = 'blue');

}

function changeFont() {
  var x = document.getElementById("text");
  x.innerHTML = x.getAttribute("value");
  x.setAttribute("fontSize");
}
