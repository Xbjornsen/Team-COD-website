


function f1() {
    document.getElementById("myd2").classList.toggle("show");
}
function f2() {
    document.getElementById("myd1").classList.toggle("show");
}
function f3() {
    document.getElementById("myd3").classList.toggle("show");
}
function f4() {
    document.getElementById("myd4").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
