/*====
====== String Number & Boolean Types ======
                                     ====*/
var character = 'mario';
var age = 30;
var isBlackBelt = false;
// character = 20;
character = 'legit';
// age = 'yoshi';
age = 23;
// isBlackBelt = 'yes';
isBlackBelt = true;
var circ = function (diameter) {
    return diameter * Math.PI;
};
console.log(circ(7.5));
/*====
====== Object & Array Types ======
                            ====*/
// Arrays
var names = ['luigi', 'adam', 'eve'];
names.push('toad');
// names.push(3);
// names[0] = 3;
var numbers = [12, 15, 18];
numbers.push(25);
// numbers[1] = 'shaun';
var mixed = ['ken', 4, 'chun-li', 8, 9];
mixed.push('ryu');
mixed.push(10);
mixed[0] = 2;
// Objects
var ninja = {
    name: 'mario',
    belt: 'black',
    age: 30
};
ninja.age = 40;
ninja.name = 'ryu';
// ninja.age = '30';
// ninja.skills = ['fighting', 'sneaking'];
ninja = {
    name: 'yohsi',
    belt: 'orange',
    age: 40
};
