
let displayLostUsers = function() { 

	let responseHandler = function() {

		let lostNumber = document.querySelector('.lostNumber');
		lostNumber.innerText = this.responseText;
		  console.log("response text", this.responseText);
		  // console.log( response );
		};

	let request = new XMLHttpRequest();
	request.addEventListener("load", responseHandler);
	request.open("GET", '/lostsum');
	request.send();
}	

//do a window onload
displayLostUsers();


