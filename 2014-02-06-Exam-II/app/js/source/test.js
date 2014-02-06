/* global Food:false, Person:false, test:false, ok:false, deepEqual:false */

'use strict';

/* function Food(name_of_food, calories_per_serving){} */
test('Food#new', function(){
  var f1 = new Food('Banana', 100);

  ok(f1 instanceof Food, 'f1 is Food');
  deepEqual(f1.name, 'Banana', 'f1 is a Banana');
  deepEqual(f1.caloriesPerServing, 100, 'f1 has 100 cals/serv');
});

/* function Person(name_of_person, gender, age, weight){} */
test('Person#new', function(){
  var p1 = new Person('Bob', 'Male', 30, 180);

  ok(p1 instanceof Person, 'Bob is a Person');
  deepEqual(p1.name, 'Bob', 'p1 is Bob');
  deepEqual(p1.gender, 'Male', 'Bob is Male');
  deepEqual(p1.age, 30, 'Bob is 30');
  deepEqual(p1.weight, 180, 'Bob weighs 180');
  deepEqual(p1.foods.length, 0, 'Bob has eaten no food');
});

/* function eat(the_food_being_eaten, number_of_servings){} */
test('Person#eat', function(){
  var p1 = new Person('Bob', 'Male', 30, 180);

  var f1 = new Food('Banana', 100);
  var f2 = new Food('Pasta', 400);
  var f3 = new Food('Taco', 250);
  var f4 = new Food('Fries', 150);
  var f5 = new Food('Cake', 500);

  p1.eat(f1, 2);
  p1.eat(f1, 4);
  p1.eat(f2, 5);
  p1.eat(f3, 8);
  p1.eat(f4, 9);
  p1.eat(f4, 9);
  p1.eat(f5, 8);

  /* 3500 calories per 1 pound of weight */
  /* Round weight to nearest integer */

  deepEqual(p1.foods, [f1,f1,f2,f3,f4,f4,f5], 'Foods eaten by Bob');
  deepEqual(p1.weight, 183, 'Bob gained weight');
});

/* function exercise(name_of_exercise, minutes_spent_exercising){} */
test('Person#exercise', function(){
  var p1 = new Person('Bob', 'Male', 30, 180);
  var p2 = new Person('Liz', 'Female', 22, 105);

  p1.exercise('Swim', 30);
  p1.exercise('Run', 230);
  p1.exercise('Swim', 820);

  p2.exercise('Run', 100);
  p2.exercise('Run', 520);
  p2.exercise('Swim', 980);

  /* A male burns 900 cal/hour for swimming, 700 cal/hour running */
  /* A female burns 700 cal/hour for swimming, 500 cal/hour running */
  /* 3500 calories per 1 pound of weight */
  /* Round weight to nearest integer */

  deepEqual(p1.weight, 175, 'Bob lost weight');
  deepEqual(p2.weight, 101, 'Liz lost weight');
});

/* function getter crazyString(){} */
test('Person#crazyString', function(){
  var p1 = new Person('Bob', 'Male', 30, 180);

  var f1 = new Food('Banana', 100);
  var f2 = new Food('Pasta', 400);
  var f3 = new Food('Taco', 250);
  var f4 = new Food('Fries', 150);
  var f5 = new Food('Cake', 500);

  p1.eat(f1, 2);
  p1.eat(f1, 4);
  p1.eat(f2, 5);
  p1.eat(f3, 8);
  p1.eat(f4, 9);
  p1.eat(f4, 9);
  p1.eat(f5, 8);

  /* this is a getter function
   * it should take all the foods eaten by the user
   * do not show duplicate foods
   * reverse the order
   * even length strings are lowercase
   * odd length strings are uppercase
   * words should have to dashes between them
   */

  deepEqual(p1.crazyString, 'cake--FRIES--taco--PASTA--banana', 'should be a crazy string');
});

