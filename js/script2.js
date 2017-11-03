/*var elems = document.getElementById("my");
console.log(elems); */
var elems = document.getElementsByTagName("img");
console.log(elems);
addEventListener("click", isImage);
function alertMSG(){
	alert('dddd');
}
function isImage(){
	for(var i = 0; i < elems.length; i++){
		var selectedItem = elems[i];
	}
	selectedItem.hidden = true;
	if(selectedItem.hidden == true){
		//return true;
		console.log("b");
	}else{
		selectedItem.hidden = false;
		console.log("a");
	}
}
