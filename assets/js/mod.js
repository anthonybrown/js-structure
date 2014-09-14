$(document).ready(function() {
  $('body').addClass('js');
  var $menu = $('#menu'),
    $menulink = $('.menu-link');

  $menulink.click(function() {
    $menulink.toggleClass('active');
    $menu.toggleClass('active');
    return false;
  });
});
$(function ($, document, undefined) {

  prettyPrint();
// Show or hide the sticky footer button
  $(window).scroll(function() {
    if ($(this).scrollTop() > 400) {
      $('.go-top').fadeIn(300);
    } else {
      $('.go-top').fadeOut(300);
    }
  });

  // Animate the scroll to top
  $('.go-top').click(function(e) {
    e.preventDefault();

    $('html, body').animate({
      scrollTop: 0
    }, 500);
  });

  // MomentJS date and time function
  var datetime = null,
        date = null;

  // this is the function that updates the time
  var update = function () {
    // add a Date object to our date variable
    date = moment(new Date());
    // set the datetime variable with jQuery's html to update the DOM with
    // our new formatted date
    datetime.html(date.format('dddd, MMMM Do YYYY, h:mm:ss a'));
  };

    // add the formatted date to the page
    // using jQuery to target a DOM element
    // with an ID of 'datetime'
    datetime = $('#datetime');
    // execute our update function
    update();
    // call our update function every
    // second
    setInterval(update, 1000);

}(jQuery, window, document));
