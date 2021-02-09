let openButton = document.getElementById("open-button");
let closeButton =document.getElementById("close-button");
let popup = document.getElementById("popup");

popup.style.display = "none";

openButton.addEventListener('click', showPopup);

function showPopup(){
	popup.style.display = "block";
}
closeButton.addEventListener('click', hidePopup);
function hidePopup(){
	popup.style.display = "none";
}