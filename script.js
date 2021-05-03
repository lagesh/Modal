//the modal
var modal = document.getElementById("myModal");

//the button element that opnes up modal
var btn = document.getElementById("modalButton");

//span element that closes modal
var span = document.querySelector('.close');

//when button is clicked, open modal
btn.onclick = function () {
  modal.style.display = 'block';
}

//when span(x) is clicked, close modal
span.onclick = function () {
  modal.style.display = 'none';
}

//when anywhere outside of modal is clicked, close modal (this is an option)
window.onclick = function (e) {
  if (e.target === modal) {
    modal.style.display = 'none';
  }
}