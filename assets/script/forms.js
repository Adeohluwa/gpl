/* Activates contest block if correct date
========================= */

$(document).ready(function () {
  var actDate = new Date();
  var actMonth = actDate.getMonth();
  var actDay = actDate.getDate();

  if(actDay !== 28 && actDay !== 27 && actDay !== 29 && actMonth == '9') {
   $('.contest-wrapper').hide();
  }
});

/* Submits Contest Form
========================= */

$(function () {
  $('#contestForm').on('submit', function (e) {
    //Gets all data from form
    var email = $('#contestEmail').val();

    // Merges all values together
    var dataJSON = {
      email: email,
    };

    // Posts form
    e.preventDefault();
    $.ajax({
      type: 'post',
      url: 'assets/ajax/contest_handler.php',
      data: dataJSON,
      success: function () {
        sentMsg('#contestForm');
      },
      fail: function () {
        failMsg('#contestForm');
      }
    });
  });
});

/* Submits Contact Form -- not being used
========================= */

// Submit form and post
$(function () {
  $('#contactForm').on('submit', function (e) {
    //Gets all data from form
    var name = $('#contactName').val();
    var email = $('#contactEmail').val();
    var buisness = $('#contactBuisness').val();

    // Merges all values together
    var dataJSON = {
      name: name,
      email: email,
      buisness: buisness,
    };

    // Posts form
    e.preventDefault();
    $.ajax({
      type: 'post',
      url: 'assets/ajax/mail_handler.php',
      data: dataJSON,
      success: function () {
        sentMsg('#contactForm');
      },
      fail: function () {
        failMsg('#contactForm');
      }
    });
  });
});

/* Submits Login Form
========================= */

//This dosent do anything other than fake the submit
$(function () {
  $('#loginForm').on('submit', function(e) {

    var id = $('#loginId').val();

    var dataJSON = {
      id: id
    };
    // Posts form
    e.preventDefault();
    $.ajax({
      type: 'post',
      url: 'assets/ajax/login_handler.php',
      data: dataJSON,
      success: function () {
        failMsg('#loginForm');
      },
      fail: function () {
        failMsg('#loginForm');
      }
    });
  });
});

/* Reusable Submit Messages
========================= */

function postMsg(message,formId){
  $('.slides-wrapper').append(message);
  $(formId).trigger("reset");
  setTimeout(function () {
    $('.message').remove();
  }, 3500);
}

// Success Posting Message
function sentMsg(formId) {
  var message = "<div class='message message-success'>Your request has been submited, thanks!</div>";
  postMsg(message, formId);
}

// Failed Posting Message
function failMsg(formId) {
  var message = "<div class='message message-fail'>Sorry! That is not a valid partner id, Please try again!</div>";
  postMsg(message, formId);
}
