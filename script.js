
// cycle images in the following order: CHERRY --> LEMON --> ORANGE
function nextImage(el){
if (el.src.match("images/cherry_slot.PNG")){
// if the image is a cherry, change it to a lemon!
el.src = "images/lemon_slot.PNG";
} else if (el.src.match("images/lemon_slot.PNG")){
// if the image is a lemon, change it to an orange!
el.src = "images/orange_slot.PNG";
}else if (el.src.match("images/orange_slot.PNG")){
// if the image is an orange, change it to a cherry!
el.src = "images/waterberry.png"
}else if (el.src.match("images/waterberry.png")){
// if the image is an orange, change it to a cherry!
el.src = "images/seven.png"
}else if (el.src.match("images/waterberry.png")){
// if the image is an orange, change it to a cherry!
el.src = "images/seven.png"
}else if (el.src.match("images/seven.png")){
// if the image is an orange, change it to a cherry!
el.src = "images/barman.png"
}else if (el.src.match("images/barman.png")){
// if the image is an orange, change it to a cherry!
el.src = "images/cherry_slot.PNG"
}
 else {
// do nothing
}
}


// LEMON --> BAR --> CHERRY
// function nextImage(el){}


// ORANGE --> CHERRY --> SEVEN --> WATERMELON
//function nextImage(el){}

function playSound() {
	// when the JACKPOT! button is clicked, play the slot machine sound
	document.getElementById('you-win').play();
}