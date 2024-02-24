let numbers=[41,28,35,18];
const comparator =(a,b)=>a-b;
numbers.sort(comparator);
console.log(numbers);

const john = new Person('john','smith',28);
console.log(john);
const peter = new Person('peter','jackson',35);
console.log(peter);
const tigran = new  Person('tigran','petrosian',41);
console.log(tigran);
const mary = new  Person('mary','smith',28);
console.log(mary);
function  Person(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.fullName = function (dear){
        return `{${this.firstName} ${this.lastName}`;
    }
}
