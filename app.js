//---------------------------------------------------------------------- Class User
class User {
    constructor (name = '', lastName = '', books = [], pets = []) {
        this.name = name;
        this.lastName = lastName;
        this.books = books;
        this.pets = pets;
    }
    getFullName() {
        return `El nombre completo del usuario es ${this.name} ${this.lastName}.`;
    }
    addPet(petName) {
        this.pets.push(petName);
        return `Se agregó a ${petName} al listado de mascotas.`;
    }
    countPets() {
        let count = this.pets.length;
        return `${this.name} tiene ${count} mascotas.`;
    }
    addBook(title, author) {
        this.books.push({title, author});
        return `Se agregó "${title}" de ${author} a la lista de libros.`
    }
    getBooksName() {
        let booksNames = this.books.map(e => e.title).join(', ');
        return `Los libros de ${this.name} son: ${booksNames}.`;
    }
}

//---------------------------------------------------------------------- Class Count
class Count {
    constructor(counterName) {
        this.counterName = counterName;
        this.count = 0;
    }
    static globalCount = 0;
    addOne() {
        this.count++;
        Count.globalCount++;
    }
    getCounterName() {
        return `${this.counterName} es responsable de llevar la cuenta en esta instancia.`;
    }
    getCount() {
        return `${this.counterName} contó ${this.count} ${this.count>1 ? 'veces' : 'vez'}.`;
    }
    getGolbalCount() {
        return `El conteo global es ${Count.globalCount}.`;
    }
}

//---------------------------------------------------------------------- Ejecición
console.log('\n-----Primer programa-----');

let elon = new User('Elon', 'Musk');
console.log(elon.getFullName());
console.log(elon.addPet('Dogecoin'));
console.log(elon.countPets());
console.log(elon.addBook('Estructuras o por qué las cosas no se caen', 'J.E. Gordon'));
console.log(elon.addBook('Benjamin Franklin: An American Life', 'Walter Isaacson'));
console.log(elon.getBooksName());

console.log('\n-----Segundo programa-----');

let instance1 = new Count('John');
let instance2 = new Count('Stella');
instance1.addOne();
instance2.addOne();
instance2.addOne();
instance2.addOne();
console.log(instance1.getCounterName());
console.log(instance1.getCount());
console.log(instance2.getCounterName());
console.log(instance2.getCount());
console.log(instance1.getGolbalCount());
