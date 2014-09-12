
   Object.O1 = '';
   Object.prototype.Op1 = '';

   Function.F1 = '';
   Function.prototype.Fp1 = '';

   Cat = function(){};
   Cat.C1 = '';
   Cat.prototype.Cp1 = '';

   mycat = new Cat();
   o = {};

   console.dir(mycat);
   console.dir(o);

    function Gadget (name, color) {
      this.name  = name;
      this.color = color;
    }

    Gadget.prototype.rating = 3;

    var newToy = new Gadget('webcam', 'black');

    console.log(newToy.constructor.prototype.constructor.prototype.constructor.prototype);
    console.log(newToy.__proto__.__proto__.__proto__);


