# TypeScript type Basics

- Boolean
- String
- Number
- Array
- Tuples
- Function
- Enum
- Object
- Type Alias/Interface
- Classes
- Union
- Any

## Static Typing ⚔️ Dynamic Typing

**Static typing**: variables have a set data type (e.g. string, integer) that is checked at compile-time. This can catch errors early in the development process.

**Dynamic typing**: variables can change type at runtime, and their type is checked at runtime. This can be more flexible, but can also lead to unexpected errors.


## TypeScript Types with code snippets

### Boolean
Works the same way as they do in JavaScript
<details open>
    <summary>Boolean type</summary>

```typescript
const myBool: boolean = false;
```
</details>


### String
Works the same way as they do in JavaScript
<details open>
    <summary>String type</summary>

```typescript
let myString: string = 'bacon';
```
</details>

### Number
Works the same way as they do in JavaScript
<details open>
    <summary>Number type</summary>

```typescript
const myNum: number = 1207;
```
</details>


### Array
Similar to arrays in JavaScript
<details open>
    <summary>Array type</summary>

```typescript
const myArr: number[] = [12, 90, 71];

const myArr: Array<number> = [12, 90, 71];
// generic way type set to number
```
</details>


### Tuples
Unique to TypeScript - arrays with a fixed number of elements.
<details open>
    <summary>Typles type</summary>

```typescript
let mine: [number, string];

mine[0] = 14;  //✔️
mine[0] = 'Steve'; //❌

mine[0] = ['Dave', 71]; //❌
mine = [121, 'Dave', 'Steve']; //❌
mine = [121, 'bacon'];  ✔️
```
</details>


### Function
Can be as explicit as you want - types applied to the parameters and returned values.
<details open>
    <summary>Function type</summary>

```typescript
function numCheck(): number {
  return 91;
  // explicitly define the type of value
  // we expect this function to return
}


function numCheck(name: string, age: number) {
  return `${name} is ${age} years old.`;
  // defining the types of parameters we expect
}


function numCheck(): void {
  console.log('This function returns no value');
  // with void it should not return a value.
  // If it does return a value, I'll get an error.
}
```
</details>


### Enums
user friendly approach to giving names to numeric values.
<details open>
    <summary>Enum type</summary>

```typescript
enum Foods {'bacon' = 18, 'tomato', 'lettuce'};

console.log(Foods['bacon']); // 18
console.log(Foods[18]); // 'bacon'
```
</details>


### Objects
defined in similar ways as objects in JavaScript - we can be as implicit or explicit with our definition
<details open>
    <summary>Enum type</summary>

```typescript
let data: = {name: 'Jonathan', age: 30, hobbies: ['running','swimming','coding']}; //✔️

let data: {name: string, age: number, hobbies: string[]} = {name: 'Jonathan', age: 30, hobbies: ['running','swimming','coding']}; //✔️

let data: {} = {
ages: [10, 31, 42, 65],
hobbies: ['hiking', 'travelling', 'swimming'],
output: function(test: boolean): number[] {
    return this.ages;
 }
}
```
</details>