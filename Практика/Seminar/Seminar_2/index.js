"use strict";

// Создайте объект Person, представляющий человека, с
// следующими свойствами: name, age и gender. Добавьте
// также методы introduce и changeName. Метод introduce
// должен выводить информацию о человеке, включая его
// имя, возраст и пол. Метод changeName должен изменять
// имя человека на новое заданное значение.
// Person.name = "John";
// Person.age = 25;
// Person.gender = "male";
// Person.introduce(); // Ожидаемый результат: My name is
// John. I'm 25 years old and I identify as male.
// Person.changeName("Mike");

const Person1 = {
  name: "",
  age: "",
  gender: "",
  introduce: function () {
    console.log(
      `My name is ${this.name}. I'm ${this.age} years old and I identify as ${this.gender}.`
    );
  },
  changeName: function (newName) {
    this.name = newName;
  },
};

Person1.name = "John";
Person1.age = 25;
Person1.gender = "male";
Person1.introduce(); // Ожидаемый результат: My name is John. I'm 25 years old and I identify as male.
Person1.changeName("Mike");
Person1.introduce(); // Ожидаемый результат: My name is John. I'm 25 years old and I identify as male.

// 1. Создайте объект Animal со свойством name и методом eat(), который
// выводит сообщение о том, что животное ест. Создайте объект Dog со
// свойством name и методом bark(), который выводит сообщение о
// том, что собака лает. Используйте одалживание метода eat() из
// объекта Animal для объекта Dog, чтобы вывести сообщение о том,
// что собака ест.
// // Одалживание метода eat() из объекта Animal к объекту Dog
// Dog.eat = Animal.eat;
// Dog.eat(); // Вывод: Rex is eating.

const Animal = {
  name: "",
  eat: function () {
    console.log(`${this.name} is eating.`);
  },
};
const Dog = {
  name: "",
  bark: function () {
    console.log(`${this.name} is barking.`);
  },
};
Animal.name = "barsik";
Dog.name = "bobik";
Dog.eat = Animal.eat;
Dog.eat(); // Вывод: Rex is eating.

// Задание 3 (call, apply 20 минут)
// 1. Создайте объект calculator с методами add(), subtract() и multiply(),
// которые выполняют соответствующие математические операции над
// двумя числами. Используйте методы call и apply для вызова этих
// методов с передачей аргументов.
// console.log(calculator.add.call(null, 5, 3)); // Вывод: 8
// console.log(calculator.subtract.apply(null, [5, 3])); // Вывод: 2

const Calculator = {
  add: function () {
    return this.num1 + this.num2;
  },
  subtract: function () {
    return a - b;
  },
  multiple: function (a, b) {
    return a * b;
  },
};

const calc = {
  num1: 10,
  num2: 18,
};

const calc2 = {
  num1: 100,
  num2: 180,
};

console.log(Calculator.add.call(calc));
console.log(Calculator.subtract.apply(null, [num1, num2])); // Вывод: 2

// Создайте класс Person, который имеет свойства name и age, а также
// метод introduce(), который выводит сообщение с представлением
// имени и возраста персоны.
// const person = new Person("John", 25);
// person.introduce(); // Вывод: My name is John and I'm 25 years old.

class Person {
  // name = '';
  // age = '';

  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  // getName() {
  //     return this.name;
  // }
  //
  // setName(value) {
  //     this.name = value;
  // }
  //
  // getAge() {
  //     return this.age;
  // }
  //
  // setAge(value) {
  //     this.age = value;
  // }

  // introduce(){
  //     console.log(`My name is ${this.getName()} and I'm ${this.getAge()} years old`)
  // }
  introduce() {
    console.log(`My name is ${this.name} and I'm ${this.age} years old`);
  }
}

const john = new Person("John", 25);
// john.setName('John');
// john.setAge(25);

john.introduce();

// Создайте класс BankAccount, который представляет банковский счет.
// У него должны быть свойства accountNumber (номер счета) и balance
// (баланс), а также методы deposit(amount) для пополнения счета и
// withdraw(amount) для снятия денег со счета. Класс должен иметь
// также статическое свойство bankName, которое содержит название
// банка.
// const account1 = new BankAccount("1234567890", 1000);
// account1.deposit(500); // Вывод: Deposited 500 into account
// 1234567890. New balance: 1500
// account1.withdraw(200); // Вывод: Withdrawn 200 from account
// 1234567890. New balance: 1300
// account1.withdraw(1500); // Вывод: Insufficient funds in account
// 1234567890

class BankAccount {
  static bankName = "HSBC";

  #balance = "";

  get balance() {
    return this._balance;
  }

  set balance(value) {
    this._balance = value;
  }

  constructor(accNo, balance) {
    this.accountNumber = accNo;
    this.#balance = balance;
    this._balance = balance;
  }

  deposit(amount) {
    this.#balance += amount;
    console.log(
      `${BankAccount.bankName}: Deposited ${amount} into account ${
        this.accountNumber
      }. New balance: ${this.#balance}`
    );
  }

  withdraw(amount) {
    if (amount <= this.#balance) {
      this.#balance -= amount;
      console.log(`${BankAccount.bankName}: Withdrawn ${amount} from account ${
        this.accountNumber
      }. 
            New balance: ${this.#balance}`);
    } else {
      console.log(
        `${BankAccount.bankName}: Insufficient funds in ${this.accountNumber}`
      );
    }
  }
}

class DepositAccount extends BankAccount {}

const acc = new BankAccount("12345", 5000);
const dep = new DepositAccount("65432", 40000);

console.log(acc);
console.log(dep);
dep.balance = 7000;

console.log(acc.balance);
console.log(dep.balance);

acc.deposit(4500);
dep.withdraw(12000);

console.log(acc.balance);
console.log(dep.balance);
