var lostbutton = document.querySelector(".lostbutton");

lostbutton.onclick = function(){
	lostbutton.classList.toggle("green")

//api call for the PUT request to change the user status in the database when someone clicks the button
	var responseHandler = function() {
	  console.log("response text", this);
	  // var response = JSON.parse( this.responseText );
	  // console.log( response );
	};

	var request = new XMLHttpRequest();
	request.addEventListener("load", responseHandler);
	request.open("PUT", "/:classname");
	request.send();
};

