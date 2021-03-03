class Author {
  constructor(name, email, gender) {
    this.name = name;
    this.email = email;
    this.gender = gender;
  }
  get name() {
    return this._name;
  }
  set name(value) {
    this._name = value;
  }
  get email() {
    return this._email;
  }
  set email(value) {
    this._email = value;
  }
  get gender() {
    return this._gender;
  }
  set gender(value) {
    this._gender = value;
  }
  toString() {
    console.log(`My name is ${this.name}, and I am a writer`);
  }
}
class Book extends Author {
  constructor(title, name, price, quantity) {
    super(name);
    this.title = title;
    this.price = price;
    this.quantity = quantity;
  }
  get title() {
    return this._title;
  }
  set title(value) {
    this._title = value;
  }
  get price() {
    return this._price;
  }
  set price(value) {
    this._price = value;
  }
  get quantity() {
    return this._quantity;
  }
  set quantity(value) {
    this._quantity = value;
  }
  getProfit() {
    return (this.quantity * this.price) / 10;
  }
  toString() {
    return "This is a great book";
  }
}

//2.
class Account {
  constructor(id, name, balance) {
    this._id = id;
    this.name = name;
    this.balance = balance;
  }
  get id() {
    return this._id;
  }
  get name() {
    return this._name;
  }
  set name(value) {
    this._name = value;
  }
  get balance() {
    return this._balance;
  }
  set balance(value) {
    this._balance = value;
  }
  credit(amount) {
    return (this.balance += amount);
  }
  debit(amount) {
    if (amount < this.balance) {
      return (this.balance -= amount);
    } else {
      alert("Amount exceeded balance.");
    }
  }
  transferTo(anotherAccount, amount) {
    if (amount < this.balance) {
      return (this.balance -= amount);
      anotherAccount.balance += amount; //??????
    } else {
      alert("Amount exceeded balance.");
    }
  }
  static identifyAccounts(accountFirst, accountSecond) {
    return Object.values(accountFirst).join(" ") ===
      Object.values(acountSecond).join(" ")
      ? true
      : false;
  }
  toString() {
    return "Charity Account";
  }
}
//3.
class Person {
  constructor(firstName, lastName, gender, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.gender = gender;
    this.age = age;
  }
  get firstName() {
    return this._firstName;
  }
  set firstName(value) {
    this._firstName = value;
  }
  get lastName() {
    return this._lastName;
  }
  set lastName(value) {
    this._lastName = value;
  }
  get gender() {
    return this._gender;
  }
  set gender(value) {
    this._gender = value;
  }
  get age() {
    return this._age;
  }
  set age(value) {
    this._age = value;
  }
  toString() {
    return `My name is ${this.firstName} ${this.lastName}`;
  }
}
class Student extends Person {
  constructor(program, year, fee) {
    super();
    this.program = program;
    this.year = year;
    this.fee = fee;
    this.totalScore = 0;
  }
  get program() {
    return this._program;
  }
  set program(subjects) {
    this._program = subjects;
  }
  get year() {
    return this._year;
  }
  set year(value) {
    this._year = value;
  }
  get fee() {
    return this._fee;
  }
  set fee(value) {
    this._fee = value;
  }

  passExam(subject, grade) {
    this.totalScore += grade;
    if (this.totalScore === 150) {
      this.year++;
    }
    if (grade === 50 || grade === "great") {
      console.log("passed");
    } else {
      console.log("failed");
    }
  }
  toString() {
    return `I study the following subjects: ${this.program.join(", ")}`;
  }
}

let Bob = new Student(["history", "math", "physics"], 2, 300);
Bob.passExam("history", 50);

class Teacher extends Person {
  constructor(program, pay) {
    super();
    this.program = WebGLProgram;
    this.pay = pay;
  }
  get program() {
    return this._program;
  }
  set program(value) {
    this._program = value;
  }
  get pay() {
    return this._pay;
  }
  set pay(value) {
    this._pay = value;
  }
  toString() {
    return `My salary is $ ${this.pay}`;
  }
}
