$(document).ready(function() {

  var scrollLink = $('.scroll');

  // Smooth scrolling
  scrollLink.click(function(e) {
    e.preventDefault();
    $('body,html').animate({
      scrollTop: $(this.hash).offset().top
    }, 500 );
  });

  // Active link switching
  $(window).scroll(function() {
    var scrollbarLocation = $(this).scrollTop();

    scrollLink.each(function() {

      var sectionOffset = $(this.hash).offset().top - 20;

      if ( sectionOffset <= scrollbarLocation ) {
        $(this).parent().addClass('active');
        $(this).parent().siblings().removeClass('active');
      }
    })

  })

})



function openNav() {
      document.getElementById("sidebar").style.width = "70%";

  }

function closeNav() {
      document.getElementById("sidebar").style.width = "0";

  }

function opendrop1() {
  if (document.getElementById("drop_1").style.display === "block") {
  document.getElementById("drop_1").style.display = "none";
} else {
  document.getElementById("drop_1").style.display = "block";
}
}
function opendrop2() {
  if (document.getElementById("drop_2").style.display === "block") {
  document.getElementById("drop_2").style.display = "none";
} else {
  document.getElementById("drop_2").style.display = "block";
}
}




  var nav = document.getElementById('sidebar');
  var log = document.getElementById('log');
  var btn = document.getElementById("signin");
  var btna = document.getElementById("signi");
  var span1 = document.getElementsByClassName("close1")[0];
  btn.onclick = function() {
      log.style.display = "block";
      sign.style.display = "none";
  }
  btna.onclick = function() {
      log.style.display = "block";
      sign.style.display = "none";
  }
  span1.onclick = function() {
      log.style.display = "none";


  }



  var sign = document.getElementById('sign');
  var btn1 = document.getElementById("signon");
  var btn1a = document.getElementById("signo");
  var span2 = document.getElementsByClassName("close2")[0];
  btn1.onclick = function() {
      sign.style.display = "block";
      log.style.display = "none";
  }
  btn1a.onclick = function() {
      sign.style.display = "block";
      log.style.display = "none";
  }
  span2.onclick = function() {
      sign.style.display = "none";

  }

  window.onclick = function(event) {
      if (event.target == sign) {
          sign.style.display = "none";
      }
      if (event.target == log) {
        log.style.display = "none";
      }

  }
