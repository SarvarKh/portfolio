// Get the modal
var modal1 = document.getElementById("myModal1");

// Get the button that opens the modal
var btn1 = document.getElementById("myBtn1");

// Get the <span> element that closes the modal
var span1 = document.getElementById("close1");

// When the user clicks the button, open the modal 
btn1.onclick = function() {
  modal1.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span1.onclick = function() {
  modal1.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal1) {
    modal1.style.display = "none";
  }
}





// Get the modal
var modal2 = document.getElementById("myModal2");        // EDIT 2!!!!!!!!!!!!!!!!!!!!!!

// Get the button that opens the modal
var btn2 = document.getElementById("myBtn2");            // EDIT 2!!!!!!!!!!!!!!!!!!!!!!

// Get the <span> element that closes the modal
var span2 = document.getElementById("close2");           // EDIT 2!!!!!!!!!!!!!!!!!!!!!!

// When the user clicks the button, open the modal 
btn2.onclick = function() {                              // EDIT 1!!!!!!!!!!!!!!!!!!!!!!
  modal2.style.display = "block";                        // EDIT 1!!!!!!!!!!!!!!!!!!!!!!
}

// When the user clicks on <span> (x), close the modal
span2.onclick = function() {                             // EDIT 1!!!!!!!!!!!!!!!!!!!!!!
  modal2.style.display = "none";                         // EDIT 1!!!!!!!!!!!!!!!!!!!!!!
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal2) {                          // EDIT 1!!!!!!!!!!!!!!!!!!!!!!
    modal2.style.display = "none";                       // EDIT 1!!!!!!!!!!!!!!!!!!!!!!
  }
}





// Get the modal
var modal3 = document.getElementById("myModal3");

// Get the button that opens the modal
var btn3 = document.getElementById("myBtn3");

// Get the <span> element that closes the modal
var span3 = document.getElementById("close3");

// When the user clicks the button, open the modal 
btn3.onclick = function() {
  modal3.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span3.onclick = function() {
  modal3.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal3) {
    modal3.style.display = "none";
  }
}
