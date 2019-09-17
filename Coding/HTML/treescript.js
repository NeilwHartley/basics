window.onload = function () {
	document.getElementById("joesbutton").onclick = onTreeInsert
	console.log("windowload");
}

function onTreeInsert () {

	console.log("insert tree");

	var myTree = document.createElement("img");
	console.log(myTree)

	//set the source of the image to be a tree file
	//attach the image to the document.
	myTree.src = "willowtree.jpg";
	document.body.appendChild(myTree);
}