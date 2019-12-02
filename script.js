Array.prototype.max = function (){
  return this.sort (function (a,b){
      return a-b
  }).pop()
}

console.log ([1,2,3,50,-100].max());

//===================================================================

const array1 = [1,2,3,4];

Array.prototype.arrFill = function (a,b,c){
  return array1.slice()
}

array1.arrFill(0, 2, 4);
array1.arrFill(5, 1);
array1.arrFill(6);

//====================================================================

function askPassword(ok, fail) {
  let password = prompt("Password?", '');
  if (password == "rockstar") ok();
  else fail();
}

let user = {
  name: 'Вася',

  loginOk() {
    alert(`${this.name} logged in`);
  },

  loginFail() {
    alert(`${this.name} failed to log in`);
  },

};

askPassword(user.loginOk.bind(user), user.loginFail.bind(user));
//====================================================================

class Animal {
  constructor (name) {
      this.name = name;
      this.paws = 4;
  }

  greeting(){
      console.log(`Hello, I am ${this.name} and I am an animal`)
  }
}

class Cat extends Animal {
  sayMeow(){
      console.log(`I have ${this.paws} paws!`)
  }
}

class Dog extends Animal{
  voice(){
      console.log('Bark!')
  }
}

let animal = new Animal('Zebra');
console.log(animal.name);
animal.greeting();

let cat = new Cat('Hacker');
console.log (cat.name);
cat.sayMeow();
cat.greeting();

let dog= new Dog('Rax');
console.log (dog.name);
dog.voice(); 
dog.greeting();
