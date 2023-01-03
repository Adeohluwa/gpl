$( document ).ready(function() {
  $('.fade').delay(7000).queue(function(){
    $('.fade').addClass("visible");
  });

  $('.brand-image').delay(4000).queue(function(){
    $(this).addClass("visible");
  });

  $('#we-do').click(function() {
    $('#we-do-content').css('display','block');
    $(this).css('opacity','1');
    $('#solve').css('opacity','0.3');
    $('#why').css('opacity','0.3');
    $('#solve-content').css('display','none');
    $('#why-content').css('display','none');
    $('#login').css('opacity','0.3');
    $('#login-content').css('display','none');
    $('#tech').css('opacity','0.3');
    $('#tech-content').css('display','none');
    $('#who').css('opacity','0.3');
    $('#who-content').css('display','none');
  });

  $('#solve').click(function() {
    $('#solve-content').css('display','block');
    $(this).css('opacity','1');
    $('#we-do').css('opacity','0.3');
    $('#why').css('opacity','0.3');
    $('#why-content').css('display','none');
    $('#we-do-content').css('display','none');
    $('#login').css('opacity','0.3');
    $('#login-content').css('display','none');
    $('#tech').css('opacity','0.3');
    $('#tech-content').css('display','none');
    $('#who').css('opacity','0.3');
    $('#who-content').css('display','none');
  });

  $('#why').click(function() {
    $('#why-content').css('display','block');
    $(this).css('opacity','1');
    $('#solve').css('opacity','0.3');
    $('#we-do').css('opacity','0.3');
    $('#solve-content').css('display','none');
    $('#we-do-content').css('display','none');
    $('#login').css('opacity','0.3');
    $('#login-content').css('display','none');
    $('#tech').css('opacity','0.3');
    $('#tech-content').css('display','none');
    $('#who').css('opacity','0.3');
    $('#who-content').css('display','none');
  });

  $('#login').click(function() {
    $('#login-content').css('display','block');
    $(this).css('opacity','1');
    $('#solve').css('opacity','0.3');
    $('#we-do').css('opacity','0.3');
    $('#solve-content').css('display','none');
    $('#we-do-content').css('display','none');
    $('#why').css('opacity','0.3');
    $('#why-content').css('display','none');
    $('#tech').css('opacity','0.3');
    $('#tech-content').css('display','none');
    $('#who').css('opacity','0.3');
    $('#who-content').css('display','none');
  });

  $('#tech').click(function() {
    $('#tech-content').css('display','block');
    $(this).css('opacity','1');
    $('#solve').css('opacity','0.3');
    $('#we-do').css('opacity','0.3');
    $('#solve-content').css('display','none');
    $('#we-do-content').css('display','none');
    $('#why').css('opacity','0.3');
    $('#why-content').css('display','none');
    $('#login').css('opacity','0.3');
    $('#login-content').css('display','none');
    $('#who').css('opacity','0.3');
    $('#who-content').css('display','none');
  });

  $('#who').click(function() {
    $('#who-content').css('display','block');
    $(this).css('opacity','1');
    $('#solve').css('opacity','0.3');
    $('#we-do').css('opacity','0.3');
    $('#solve-content').css('display','none');
    $('#we-do-content').css('display','none');
    $('#why').css('opacity','0.3');
    $('#why-content').css('display','none');
    $('#login').css('opacity','0.3');
    $('#login-content').css('display','none');
    $('#tech').css('opacity','0.3');
    $('#tech-content').css('display','none');
  });

  $(window).scroll( function(){
    $('.logo').css('opacity','0.5');
  });
});

$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});

/*
  var fade = document.querySelector('.fade');
  var logo = document.querySelector('.logo');
  var title = document.querySelector('.title');
  var image = document.getElementsByTagName('img')[0];
  var aquarelle = new Aquarelle(image, 'assets/image/mask.png', {
      autoplay: true,
      loop: false,
      duration: 10000
  });

  aquarelle.addEventListener('created', function() {
      var canvas = this.getCanvas();
      canvas.removeAttribute('style');
      image.parentNode.insertBefore(canvas, image.nextSibling);
      image.parentNode.removeChild(image);
  });

  aquarelle.addEventListener('changed', function(event) {
      fade.style.opacity = this.transitionInRange(1, 0, 7183, 7933);

      var canvas = this.getCanvas();
      canvas.style.webkitFilter = 'blur(' + this.transitionInRange(0, 24, 2500) + 'px)';
      canvas.style.webkitTransform = canvas.style.transform = 'translate(-50%, -50%) scale(' + this.transitionInRange(.75, 1) + ')';

      logo.style.opacity = this.transitionInRange(0, 1, 0, 2016);
      logo.style.webkitTransform = logo.style.transform = 'scale(' + this.transitionInRange(.8, 1, 0, 5883) + ')';

      title.style.webkitFilter = 'blur(' + event.target.transitionInRange(4, 0, 3433, 4149) + 'px)';
      title.style.opacity = event.target.transitionInRange(0, 1, 3433, 4266);
      title.style.webkitTransform = title.style.transform = 'scale(' + event.target.transitionInRange(1.3, 1, 3433, 4400) + ')';
  });
});

*/
