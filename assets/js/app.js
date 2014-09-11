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

  console.log('Backbone v'+ Backbone.VERSION);
  console.log('Underscore v'+ _.VERSION);
  console.log('Marionette v'+ Marionette.VERSION);
}(jQuery, window, document));

// Closure Demo

window.onload = function () {
  var output  = document.getElementById('output'),
      closure = new myClosure2();

  output.innerHTML = closure.mill();

  window.setTimeout(function () {
    output.innerHTML += '<br>'+closure.mill();
  }, 500);

  //output.innerHTML = nonClosure();



//  window.setTimeout(function () {
//    output.innerHTML += '<br />' + nonClosure();
//  }, 500);

// window.setTimeout(function () {
//   output.innerHTML += '<br />' + closure();
// }, 500);

};

function nonClosure () {
  var date = new Date();
  return date.getMilliseconds();
}

function myClosure () {
  var date = new Date();
  return function () {
    return date.getMilliseconds();
  };
}

// Class like
// more like a revealing module pattern
var myClosure2 = function () {
  var date = new Date();
  var nestedFunc = function () {
    return date.getMilliseconds();
  };
  // our object literal
  // going to call the nestedFunc
  return {
    mill: nestedFunc
  };
};
