
var mySidebar = document.getElementById("mySidebar");

function w3_open() {

    console.log("mySidebar.style.display + " + mySidebar.style.display);

    if (mySidebar.style.display === 'block') {
        mySidebar.style.display = 'none';
    } else {
        mySidebar.style.display = 'block';
    }
}

/*Close the sidebar with the close button*/
function w3_close() {
    mySidebar.style.display = "none";
}

/* Data from form with id = "contact-form are sent
 * to mailSender.php" */

$(document).ready( function () {
   $("#contact-form").submit(function () {
      var formData = $(this).serialize();
      $.ajax({
          type: "POST",
          /*url: "../php/mailSender.php",*/
          url: "php/mailSender.php",
          data: formData,
          success: function () {
          }
      });
   });
});

<!-- Google Analytics: change UA-XXXXX-X to be your site's ID. -->
(function(b,o,i,l,e,r) {
    b.GoogleAnalyticsObject = l;
    b[l]||(b[l] = function() {
        (b[l].q = b[l].q||[]).push(arguments)
    });
    b[l].l =+ new Date;
    e = o.createElement(i);
    r = o.getElementsByTagName(i)[0];
    e.src = 'https://www.google-analytics.com/analytics.js';
    r.parentNode.insertBefore(e,r)
}

(window,document,'script','ga'));
ga('create','UA-XXXXX-X','auto');
ga('send','pageview');
