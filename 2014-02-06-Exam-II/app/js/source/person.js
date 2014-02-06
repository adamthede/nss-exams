/* jshint unused: false */

var Person = (function(){

  'use strict';

  function Person(name, gender, age, wght){
    this.name = name;
    this.gender = gender;
    this.age = age;
    this.weight = wght;
    this.foods = [];
  }

  Person.prototype.eat = function(food, servings){
    this.foods = this.foods.concat(food);
    this.weight += Math.round(food.caloriesPerServing * servings/3500);
  };

  Person.prototype.exercise = function(activity, minutes){
    if(this.gender === 'Male' && activity === 'Swim'){
      this.weight -= Math.round(minutes*(1/60)*900*(1/3500));
    }
    else if(this.gender === 'Male' && activity === 'Run'){
      this.weight -= Math.round(minutes*(1/60)*700*(1/3500));
    }
    else if(this.gender === 'Female' && activity === 'Swim'){
      this.weight -= Math.round(minutes*(1/60)*700*(1/3500));
    }
    else if(this.gender === 'Female' && activity === 'Run'){
      this.weight -= Math.round(minutes*(1/60)*500*(1/3500));
    }
  };

  Object.defineProperty(Person.prototype, 'crazyString', {
    get: function(){
      var foodArray = this.foods;
      var foodStrings = _.map(foodArray, function(x){
        return x.name;
      });
      foodStrings = _.uniq(foodStrings).reverse();
      foodStrings = _.map(foodStrings, function(string){
        if(string.length % 2 === 0){
          return string.toLowerCase();
        }
        else{
          return string.toUpperCase();
        }
      });
      foodStrings = foodStrings.join('--');
      return foodStrings;
    }
  });

  return Person;

})();
