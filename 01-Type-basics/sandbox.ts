/*====
====== String Number & Boolean Types ======
                                     ====*/

let character = 'mario';
let age = 30;
let isBlackBelt = false;

// character = 20;
character = 'legit';

// age = 'yoshi';
age = 23;

// isBlackBelt = 'yes';
isBlackBelt = true;

const circ = (diameter: number) => {
  return diameter * Math.PI;
};

console.log(circ(7.5));

/*====
====== Object & Array Types ======
                            ====*/

// Arrays
let names = ['luigi', 'adam', 'eve'];
names.push('toad');
// names.push(3);
// names[0] = 3;

let numbers = [12, 15, 18];
numbers.push(25);
// numbers[1] = 'shaun';

let mixed = ['ken', 4, 'chun-li', 8, 9];
mixed.push('ryu');
mixed.push(10);
mixed[0] = 2;

// Objects
let ninja = {
  name: 'mario',
  belt: 'black',
  age: 30,
};

ninja.age = 40;
ninja.name = 'ryu';
// ninja.age = '30';
// ninja.skills = ['fighting', 'sneaking'];

ninja = {
  name: 'yohsi',
  belt: 'orange',
  age: 40,
};
