class Person {
constructor(name, age) {
this.name = name;
this.age = age;
}
}
class Employee extends Person {
constructor(name, age, title, salary) {
super(name, age);
this.title = title;
this.salary = salary;
}
}
const args = ["John Doe", 30, "Software Engineer", 100000];
const arr = Reflect.construct(Array, args);
console.log(newEmployee);
