// Get the modal
var modal = document.getElementById("Iklan-pop-up");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var modalImg = document.getElementById("Iklan-2022-02");
$(document).ready(function(){
  modal.style.display = "block";
  modalImg.src = "../assets_popup/pop-up-mei-2022.png";
});

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
var content = document.getElementsByClassName("modal-content")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}