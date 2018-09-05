$(document).ready(function () {
  //your code here
  var modal = document.getElementById('myModal');

  // Get the button that opens the modal
  var atc = document.getElementById("addToCart");

  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close")[0];

  // When the user clicks the button, open the modal
  atc.onclick = function() {
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

  $("#product-a").click(function(){
    $("#product-b").removeClass('border-box');
    $("#product-c").removeClass('border-box');
    $("#product-d").removeClass('border-box');
    $("#product-a").addClass('border-box');
    $('#big-image')[0].src="./images/product-large-a.jpg";
  })

  $("#product-b").click(function(){
    $("#product-a").removeClass('border-box');
    $("#product-c").removeClass('border-box');
    $("#product-d").removeClass('border-box');
    $("#product-b").addClass('border-box');
    $('#big-image')[0].src="./images/product-large-b.jpg";
  })
  $("#product-c").click(function(){
    $("#product-a").removeClass('border-box');
    $("#product-b").removeClass('border-box');
    $("#product-d").removeClass('border-box');
    $("#product-c").addClass('border-box');
    $('#big-image')[0].src="./images/product-large-c.jpg";
  })
  $("#product-d").click(function(){
    $("#product-a").removeClass('border-box');
    $("#product-b").removeClass('border-box');
    $("#product-c").removeClass('border-box');
    $("#product-d").addClass('border-box');
    $('#big-image')[0].src="images/product-large-d.jpg";
  })

  $(".arrow-collapsed").click(function(){
    $("#content1").toggle();
  })

// var coll = document.getElementsByClassName("collapsible");
// var i;
//
// for (i = 0; i < coll.length; i++) {
//   coll[i].addEventListener("click", function() {
//     this.classList.toggle("active");
//     var content = this.nextElementSibling;
//     if (content.style.maxHeight){
//       content.style.maxHeight = null;
//       $('.active').text("EXPANDED");
//     } else {
//       content.style.maxHeight = content.scrollHeight + "px";
//       $('.active').text("COLLAPSED");
//     }
//   });
// }


});
