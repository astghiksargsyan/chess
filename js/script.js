/*var target;
var img;
var poss;
function moveElement(){

	img = document.getElementsByClassName("knightBL");
	console.log(img);
	for(var i = 0; i <img.length; i++ ){
		console.log(img[i]);
	}
	document.getElementById("poss2").appendChild(document.getElementById('poss1'));
}
*/

var div = document.getElementById('poss1');
var listener = function(e) {
  div.style.left = e.pageX + "px";
  div.style.top = e.pageY + "px";
};

function move() {
  document.addEventListener('mousemove', listener);
}

function stop() {
  document.removeEventListener('mousemove', listener);
}