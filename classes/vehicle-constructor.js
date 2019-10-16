'use strict';

//we want to do the same things here but use a class

const Vehicle = function(name, wheels) {
  this.name = name;
  this.wheels = wheels;
};

Vehicle.prototype.drive = () => {
  return 'Moving Forward';
};

Vehicle.prototype.stop = () => {
  return 'Stopping';
};

// Car Constructor
const Car = function(name) {
  Vehicle.call(this, name, 4);
};
//taking all properties of vehicle and extdend to car
Car.prototype = new Vehicle();
//class car extends vehicle (using super)

const Motorcycle = function(name) {
  Vehicle.call(this,name,2);
};
//taking all properties of vehicle and extdend to motorcycle
Motorcycle.prototype = new Vehicle();

//wheelie method
Motorcycle.prototype.wheelie = () => {
  return 'Wheee!';
};

module.exports = {Car, Motorcycle};