var foodImages = ["chicken", "charsiu", "cabbage", "cherry"];

var i = 0;


function leftImage() {
	i = i - 1;
	if (i < 0) {
		i = foodImages.length - 1;
	}
	document.getElementById("myImage").src = foodImages[i] + ".jpg";
	console.log(i);
}

function rightImage() {
	i = i + 1;
	if (i > foodImages.length - 1) {
		i = 0;
	}
	document.getElementById("myImage").src = foodImages[i] + ".jpg";
	console.log(i);
}
