//- Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)

function User(id, name, surname, email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}


let users = [];


users.push(new User(1, 'John', 'Doe', 'john.doe@example.com', '123-456-7890'));
users.push(new User(2, 'Jane', 'Smith', 'jane.smith@example.com', '234-567-8901'));
users.push(new User(3, 'Alice', 'Johnson', 'alice.johnson@example.com', '345-678-9012'));
users.push(new User(4, 'Bob', 'Brown', 'bob.brown@example.com', '456-789-0123'));
users.push(new User(5, 'Charlie', 'Davis', 'charlie.davis@example.com', '567-890-1234'));
users.push(new User(6, 'Diana', 'Evans', 'diana.evans@example.com', '678-901-2345'));
users.push(new User(7, 'Edward', 'Wilson', 'edward.wilson@example.com', '789-012-3456'));
users.push(new User(8, 'Fiona', 'Taylor', 'fiona.taylor@example.com', '890-123-4567'));
users.push(new User(9, 'George', 'Harris', 'george.harris@example.com', '901-234-5678'));
users.push(new User(10, 'Hannah', 'Clark', 'hannah.clark@example.com', '012-345-6789'));

console.log(users);


//- Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)

let evenIdUsers = users.filter(user => user.id % 2 === 0);

console.log(evenIdUsers);

//- Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

users.sort((a, b) => a.id - b.id);

console.log(users);

//- створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client

class Client {
    constructor(id, name, surname, email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
}

let clients = [];

clients.push(new Client(1, 'John', 'Doe', 'john.doe@example.com', '123-456-7890', ['item1', 'item2']));
clients.push(new Client(2, 'Jane', 'Smith', 'jane.smith@example.com', '234-567-8901', ['item3', 'item4', 'item5']));
clients.push(new Client(3, 'Alice', 'Johnson', 'alice.johnson@example.com', '345-678-9012', ['item6']));
clients.push(new Client(4, 'Bob', 'Brown', 'bob.brown@example.com', '456-789-0123', ['item7', 'item8']));
clients.push(new Client(5, 'Charlie', 'Davis', 'charlie.davis@example.com', '567-890-1234', ['item9', 'item10', 'item11']));
clients.push(new Client(6, 'Diana', 'Evans', 'diana.evans@example.com', '678-901-2345', ['item12']));
clients.push(new Client(7, 'Edward', 'Wilson', 'edward.wilson@example.com', '789-012-3456', ['item13', 'item14']));
clients.push(new Client(8, 'Fiona', 'Taylor', 'fiona.taylor@example.com', '890-123-4567', ['item15', 'item16', 'item17']));
clients.push(new Client(9, 'George', 'Harris', 'george.harris@example.com', '901-234-5678', ['item18', 'item19']));
clients.push(new Client(10, 'Hannah', 'Clark', 'hannah.clark@example.com', '012-345-6789', ['item20']));

console.log(clients);

//- Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)

clients.sort((a, b) => a.order.length - b.order.length);

console.log(clients);


// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

// Функція-конструктор для об'єктів Car
function Car(model, manufacturer, year, maxSpeed, engineVolume) {
    this.model = model;
    this.manufacturer = manufacturer;
    this.year = year;
    this.maxSpeed = maxSpeed;
    this.engineVolume = engineVolume;

    // Метод drive()
    this.drive = function() {
        console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
    };

    // Метод info()
    this.info = function() {
        console.log(`Модель - ${this.model}`);
        console.log(`Виробник - ${this.manufacturer}`);
        console.log(`Рік випуску - ${this.year}`);
        console.log(`Максимальна швидкість - ${this.maxSpeed}`);
        console.log(`Об'єм двигуна - ${this.engineVolume}`);
    };

    // Метод increaseMaxSpeed(newSpeed)
    this.increaseMaxSpeed = function(newSpeed) {
        this.maxSpeed += newSpeed;
    };

    // Метод changeYear(newValue)
    this.changeYear = function(newValue) {
        this.year = newValue;
    };

    // Метод addDriver(driver)
    this.addDriver = function(driver) {
        this.driver = driver;
    };
}

// Приклад створення об'єкта car та використання методів
let myCar = new Car('Model S', 'Tesla', 2020, 250, 85);

// Використання методу drive()
myCar.drive();

// Використання методу info()
myCar.info();

// Використання методу increaseMaxSpeed()
myCar.increaseMaxSpeed(30);
console.log(`Нова максимальна швидкість: ${myCar.maxSpeed}`);

// Використання методу changeYear()
myCar.changeYear(2022);
console.log(`Новий рік випуску: ${myCar.year}`);

// Використання методу addDriver()
myCar.addDriver({ name: 'John Doe', age: 30, experience: '5 years' });
console.log(`Водій: ${JSON.stringify(myCar.driver)}`);


// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car


// Клас Car
class  BigCar {
    constructor(model, manufacturer, year, maxSpeed, engineVolume) {
        this.model = model;
        this.manufacturer = manufacturer;
        this.year = year;
        this.maxSpeed = maxSpeed;
        this.engineVolume = engineVolume;
    }

    // Метод drive()
    drive() {
        console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
    }

    // Метод info()
    info() {
        console.log(`Модель - ${this.model}`);
        console.log(`Виробник - ${this.manufacturer}`);
        console.log(`Рік випуску - ${this.year}`);
        console.log(`Максимальна швидкість - ${this.maxSpeed}`);
        console.log(`Об'єм двигуна - ${this.engineVolume}`);
    }

    // Метод increaseMaxSpeed(newSpeed)
    increaseMaxSpeed(newSpeed) {
        this.maxSpeed += newSpeed;
    }

    // Метод changeYear(newValue)
    changeYear(newValue) {
        this.year = newValue;
    }

    // Метод addDriver(driver)
    addDriver(driver) {
        this.driver = driver;
    }
}

// Приклад створення об'єкта car та використання методів
let myBigCar = new BigCar('Model S', 'Tesla', 2020, 250, 85);

// Використання методу drive()
myBigCar.drive();

// Використання методу info()
myBigCar.info();

// Використання методу increaseMaxSpeed()
myBigCar.increaseMaxSpeed(30);
console.log(`Нова максимальна швидкість: ${myBigCar.maxSpeed}`);

// Використання методу changeYear()
myBigCar.changeYear(2022);
console.log(`Новий рік випуску: ${myBigCar.year}`);

// Використання методу addDriver()
myBigCar.addDriver({ name: 'John Doe', age: 30, experience: '5 years' });
console.log(`Водій: ${JSON.stringify(myBigCar.driver)}`);


//-створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// За допомоги циклу знайти яка попелюшка повинна бути з принцом.
// Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку


// Клас для об'єктів Попелюшка
class Cinderella {
    constructor(name, age, footSize) {
        this.name = name;
        this.age = age;
        this.footSize = footSize;
    }
}

// Створення масиву з 10 попелюшок
let cinderellas = [
    new Cinderella('Cinderella1', 18, 35),
    new Cinderella('Cinderella2', 19, 36),
    new Cinderella('Cinderella3', 20, 37),
    new Cinderella('Cinderella4', 21, 38),
    new Cinderella('Cinderella5', 22, 39),
    new Cinderella('Cinderella6', 23, 35),
    new Cinderella('Cinderella7', 24, 36),
    new Cinderella('Cinderella8', 25, 37),
    new Cinderella('Cinderella9', 26, 38),
    new Cinderella('Cinderella10', 27, 39)
];

// Клас для об'єктів Принц
class Prince {
    constructor(name, age, foundShoeSize) {
        this.name = name;
        this.age = age;
        this.foundShoeSize = foundShoeSize;
    }

    // Метод для пошуку Попелюшки за допомогою циклу
    findCinderella(cinderellas) {
        for (let cinderella of cinderellas) {
            if (cinderella.footSize === this.foundShoeSize) {
                return cinderella;
            }
        }
        return null;
    }

    // Метод для пошуку Попелюшки за допомогою методу find
    findCinderellaWithFind(cinderellas) {
        return cinderellas.find(cinderella => cinderella.footSize === this.foundShoeSize);
    }
}

// Створення об'єкта принц
let prince = new Prince('Prince Charming', 30, 37);

// Пошук Попелюшки за допомогою циклу
let foundCinderella = prince.findCinderella(cinderellas);
if (foundCinderella) {
    console.log(`Попелюшка, яка повинна бути з принцом : ${foundCinderella.name}`);
} else {
    console.log('Попелюшка не знайдена ');
}

// Пошук Попелюшки за допомогою методу find
let foundCinderellaWithFind = prince.findCinderellaWithFind(cinderellas);
if (foundCinderellaWithFind) {
    console.log(`Попелюшка, яка повинна бути з принцом : ${foundCinderellaWithFind.name}`);
} else {
    console.log('Попелюшка не знайдена ');
}

//Через Array.prototype. створити власний foreach, filter, map

// Власний forEach
Array.prototype.myForEach = function(callback) {
    for (let i = 0; i < this.length; i++) {
        callback(this[i], i, this);
    }
};

// Власний filter
Array.prototype.myFilter = function(callback) {
    const result = [];
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)) {
            result.push(this[i]);
        }
    }
    return result;
};

// Власний map
Array.prototype.myMap = function(callback) {
    const result = [];
    for (let i = 0; i < this.length; i++) {
        result.push(callback(this[i], i, this));
    }
    return result;
};

// Приклади використання
const arr = [1, 2, 3, 4, 5];

// Використання myForEach
arr.myForEach((element, index) => {
    console.log(`Element: ${element}, Index: ${index}`);
});

// Використання myFilter
const filteredArr = arr.myFilter(element => element > 2);
console.log(filteredArr);

// Використання myMap
const mappedArr = arr.myMap(element => element * 2);
console.log(mappedArr);


