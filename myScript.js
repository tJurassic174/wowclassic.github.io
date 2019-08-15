function myFunction() {
  document.getElementById("demo1").innerHTML = "Hello Dolly!";
  document.getElementById("demo2").innerHTML = "How are you?";
}
function fullName(){
var lastname, firstname;
	lastname = "jiracek";
	firstname = "tim";
	document.getElementById("name").innerHTML = firstname+" "+lastname;
}
function joelsChars(){
	var chars;
	chars = ["AverageJoel", "Ninnymuggenz"]
	document.getElementById("joelsChars").innerHTML = chars;
}

// MODAL SECTION //
// Get the modal
var modal = document.getElementById("deadmines_modal");
// Get the button that opens the modal
var btn = document.getElementById("deadmines_btn");
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
// When the user clicks on the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}
// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
// MODAL SECTION END //

function login(){
  var userName = prompt("Please enter a username");
  if (userName == "tim jiracek" || userName == "jim jiracek" || userName == "joel snyder" ||
        userName == "ben olson" || userName == "austin rieper" || userName == "ryan mckay") {
    alert("Welcome Champion");
    $('#homepage_body').removeAttr("hidden");
    $('#homepage_nav').removeAttr("hidden");
    $('#login_button').attr("hidden", true);

  } else {
    alert("This is not a valid username");
  }
}