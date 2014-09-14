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

// Start tutorial in vanilla JavaScript

//Calc.js similar to a class container
var Calc = function (eq) {
  // private members
  var eqCtl = document.getElementById(eq);

  return {
    // public members
    add: function (x, y) {
      var val = x + y;
      eqCtl.innerHTML += val;
    }
  };

};

var calc = new Calc('output');
calc.add(7, 4);

// alert(calc.eqCtl.innerHTML);




function doSomething(e) {
  console.log(e.target.innerHTML);
}

// Calculator Code
var myNS = myNS || {};

myNS.Calculator = function (equals, currNumber) {
  var eqCtl = equals,
    currNumberCtl = currNumber,
    operator,
    operatorSet = false,
    equalsPressed = false,
    lastNumber = null,

    add = function(x, y) {
      return x + y;
    },

    subtract = function(x, y) {
      return x - y;
    },

    multiply = function(x, y) {
      return x * y;
    },

    divide = function(x, y) {
      if (y === 0) {
        alert("Can't divide by 0");
        return 0;
      }
      return x / y;
    },

    setVal = function(val) {
      currNumberCtl.innerHTML = val;
    },

    setEquation = function(val) {
      eqCtl.innerHTML = val;
    },

    calculate = function() {
      if (!operator || lastNumber === null) return;
      var currNumber = parseFloat(currNumberCtl.innerHTML),
          newVal = 0;
      switch (operator) {
      case '+':
        newVal = add(lastNumber, currNumber);
        break;
      case '-':
        newVal = subtract(lastNumber, currNumber);
        break;
      case '*':
        newVal = multiply(lastNumber, currNumber);
        break;
      case '/':
        newVal = divide(lastNumber, currNumber);
        break;
      }
      setVal(newVal.toFixed(2));
      lastNumber = newVal;
    };

  //public members
  return {
    numberClick: function(e) {
      var button = document.getElementsByClassName('num');
      for (var i = 0, len = button.length; i < len; i++) {
        button[i].addEventListener('click', calc.numberClick, false);
      }
      button = (e.target) ? e.target : e.srcElement;
      if (operatorSet === true || currNumberCtl.innerHTML === '0') {
        setVal('');
        operatorSet = false;
      }
      setVal(currNumberCtl.innerHTML + button.innerHTML);
      setEquation(eqCtl.innerHTML + button.innerHTML);
    },
    setOperator: function(newOperator) {
      if (newOperator === '=') {
        equalsPressed = true;
        calculate();
        setEquation('');
        return;
      }
      //Handle case where = was pressed
      //followed by an operator (+, -, *, /)
      if (!equalsPressed) calculate();
      equalsPressed = false;
      operator = newOperator;
      operatorSet = true;
      lastNumber = parseFloat(currNumberCtl.innerHTML);
      var eqText = (eqCtl.innerHTML === '') ?
        lastNumber + ' ' + operator + ' ' :
        eqCtl.innerHTML + ' ' + operator + ' ';
      setEquation(eqText);
    },
    clearNumbers: function() {
      lastNumber = null;
      equalsPressed = operatorSet = false;
      setVal('0');
      setEquation('');
    }
  };
};

var eqCtl = document.getElementById('eq');
var currNumberCtl = document.getElementById('currNumber');
calc = new myNS.Calculator(eqCtl, currNumberCtl);

var button = document.getElementsByClassName('num');

for (var i = 0, len = button.length; i < len; i++) {
  button[i].addEventListener('click', calc.numberClick, false);
}

// Resig's Addevent and Remove events

//function addEvent( obj, type, fn ) {
//  if ( obj.attachEvent ) {
//    obj['e'+type+fn] = fn;
//    obj[type+fn] = function(){obj['e'+type+fn]( window.event );}
//    obj.attachEvent( 'on'+type, obj[type+fn] );
//  } else
//    obj.addEventListener( type, fn, false );
//}
//
//function removeEvent( obj, type, fn ) {
//  if ( obj.detachEvent ) {
//    obj.detachEvent( 'on'+type, obj[type+fn] );
//    obj[type+fn] = null;
//  } else
//    obj.removeEventListener( type, fn, false );
//}
