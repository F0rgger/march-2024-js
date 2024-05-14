//- Знайти та вивести довижину настипних стрінгових значень
//     'hello world', 'lorem ipsum', 'javascript is cool'

let str1 = 'hello world';
let str2 = 'lorem ipsum';
let str3 = 'javascript is cool';

console.log(str1.length);
console.log(str2.length);
console.log(str3.length);

//- Перевести до великого регістру наступні стрінгові значення
//       'hello world', 'lorem ipsum', 'javascript is cool'

let toUpperCase1 = 'hello world';
let toUpperCase2 = 'lorem ipsum';
let toUpperCase3 = 'javascript is cool';

console.log(toUpperCase1.toUpperCase());
console.log(toUpperCase2.toUpperCase());
console.log(toUpperCase3.toUpperCase());

//- Перевести до нижнього регістру настипні стрінгові значення
//       'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'

let toLowerCase1 = 'HELLO WORLD';
let toLowerCase2 = 'LOREM IPSUM';
let toLowerCase3 = 'JAVASCRIPT IS COOL';

console.log(toLowerCase1.toLowerCase());
console.log(toLowerCase2.toLowerCase());
console.log(toLowerCase3.toLowerCase());

//- Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.

let str = ' dirty string   ';
let cleanedStr = str.trim();
console.log(cleanedStr);

// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']

function stringToarray(str) {
    return str.split(' ');
}

let strr = 'Ревуть воли як ясла повні';
let arr = stringToarray(strr);
console.log(arr);

//- є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.
// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
// let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]

function sortNums(array, direction) {
    if (direction === 'ascending') {
        return array.sort((a, b) => a - b);
    } else if (direction === 'descending') {
        return array.sort((a, b) => b - a);
    } else {
        throw new Error('owu');
    }
}

let nums = [11, 21, 3];
console.log(sortNums(nums, 'ascending'));
console.log(sortNums(nums, 'descending'));

//- є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
//  -- відсортувати його за спаданням за monthDuration

let coursesAndDurationArray1 = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

coursesAndDurationArray1.sort((a, b) => b.monthDuration - a.monthDuration);

console.log(coursesAndDurationArray1);


// - є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців


let coursesAndDurationArray2 = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

let filteredCourses = coursesAndDurationArray2.filter(course => course.monthDuration > 5);

console.log(filteredCourses);

// - є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

let transformedArray = coursesAndDurationArray.map((course, index) => {
    return {
        id: index + 1, // або `index` для початку з 0
        title: course.title,
        monthDuration: course.monthDuration
    };
});

console.log(transformedArray);

// описати колоду карт (від 6 до туза без джокерів)
// - знайти піковий туз
// - всі шістки
// - всі червоні карти
// - всі буби
// - всі трефи від 9 та більше
//
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//         value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//     color:'', // 'red','black'
// }

let cardSuit = ['spade', 'diamond', 'heart', 'clubs'];
let values = ['6', '7', '8', '9', '10', 'ace', 'jack', 'queen', 'king', 'joker'];

let cards = cardSuit.reduce((acc, suit) => {
    values.forEach(value => {
        let color = (suit === 'diamond' || suit === 'heart') ? 'red' : 'black';
        acc.push({
            suit: suit,
            value: value,
            color: color
        });
    });
    return acc;
}, []);

console.log("All cards:", cards);

// Знаходимо пікового туза
let aceOfSpades = cards.find(card => card.suit === 'spade' && card.value === 'ace');
console.log("Піковий туз:", aceOfSpades);

// Знаходимо всі шістки
let sixes = cards.filter(card => card.value === '6');
console.log("Всі шістки:", sixes);

// Знаходимо всі червоні карти
let redCards = cards.filter(card => card.color === 'red');
console.log("Всі червоні карти:", redCards);

// Знаходимо всі буби
let diamonds = cards.filter(card => card.suit === 'diamond');
console.log("Всі буби:", diamonds);

// Знаходимо всі трефи від 9 та більше
let clubsNineAndAbove = cards.filter(card => card.suit === 'clubs' && ['9', '10', 'ace', 'jack', 'queen', 'king', 'joker'].includes(card.value));
console.log("Всі трефи від 9 та більше:", clubsNineAndAbove);


//Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//     diamonds:[],
//     hearts:[],
//     clubs:[]
// }



let cardSuit1 = ['spade', 'diamond', 'heart', 'clubs'];
let values1 = ['6', '7', '8', '9', '10', 'ace', 'jack', 'queen', 'king', 'joker'];

let cards1 = cardSuit1.reduce((acc, suit) => {
    values1.forEach(value => {
        let color = (suit === 'diamond' || suit === 'heart') ? 'red' : 'black';
        acc.push({
            suit: suit,
            value: value,
            color: color
        });
    });
    return acc;
}, []);

let cardsBySuit = cards1.reduce((acc, card) => {
    if (!acc[card.suit]) {
        acc[card.suit] = [];
    }
    acc[card.suit].push(card);
    return acc;
}, {});

console.log(cardsBySuit);

// взяти з arrays.js (який лежить в папці 2023 plan) масив coursesArray
// --написати пошук всіх об'єктів, в який в modules є sass
// --написати пошук всіх об'єктів, в який в modules є docker

let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];

// Знаходимо всі об'єкти, які мають модуль 'sass'
let coursesWithSass = coursesArray.filter(course => course.modules.includes('sass'));
console.log("Courses with 'sass':", coursesWithSass);

// Знаходимо всі об'єкти, які мають модуль 'docker'
let coursesWithDocker = coursesArray.filter(course => course.modules.includes('docker'));
console.log("Courses with 'docker':", coursesWithDocker);