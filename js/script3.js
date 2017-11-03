var parDiv = document.getElementById("che");
console.log(parDiv);
parDiv.onclick = myFn;
function myFn(){
	var target = event.target;
	console.log(target);
	alert("dsds");
}