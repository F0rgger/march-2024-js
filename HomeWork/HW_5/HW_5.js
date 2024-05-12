// створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
const rectangle = (a, b) => {
    let result = a * b;
    console.log(result);
};
rectangle(50, 60);

// створити функцію яка обчислює та повертає площу кола з радіусом r
const circle = (r) => {
    const pi = 3.14;
    let result = pi * r * r;
    console.log(result);
};
circle(45);

// створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
const cylinder = (h, r) => {
    const pi = 3.14;
    let result = 2 * pi * r * (r + h);
    console.log(result);
};
cylinder(45, 66);

// створити функцію яка приймає масив та виводить кожен його елемент
const elements = (arr) => {
    arr.forEach(item => console.log(item));
};
elements([1, 2, 3, 4, 5]);

//створити функцію яка створює параграф з текстом. Текст задати через аргумент
const createParagraph = (text) => {
    document.write(`<p>${text}</p>`);
};
createParagraph("Text");

// створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
const ulList = (innerText) => {
    document.write("<ul>");
    Array.from({ length: 3 }).forEach(() => {
        document.write(`<li>${innerText}</li>`);
    });
    document.write("</ul>");
};
ulList('Text');

// створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
const createUlLis = (Text, Count) => {
    document.write("<ul>");
    Array.from({ length: Count }).forEach(() => {
        document.write(`<li>${Text}</li>`);
    });
    document.write("</ul>");
};
createUlLis('Text', 3);

// створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
const arrList = (items) => {
    document.write('<ul>');
    items.forEach(item => {
        document.write(`<li>${item}</li>`);
    });
    document.write('</ul>');
};
arrList([1, 'Text', true, 42, 'Forger', false]);

// створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
const renderUserData = dataArray => {
    for (const dataItem of dataArray) {
        document.write("<div style='border: 2px solid grey; padding: 5px; margin-bottom: 10px;'>");
        for (const attribute in dataItem) {
            document.write(`<p><strong>${attribute}:</strong> ${dataItem[attribute]}</p>`);
        }
        document.write("</div>");
    }
};

const users = [
    { id: 1, name: "Max", age: 21 },
    { id: 2, name: "Tim", age: 32 },
    { id: 3, name: "Forger", age: 24 }
];

renderUserData(users);

// створити функцію яка повертає найменьше число з масиву
const findMinimum = (array) => array.length === 0 ? undefined : Math.min(...array);
console.log(findMinimum([5, 3, 10, -2, 4]));

// створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
const sum = (arr) => arr.reduce((total, num) => total + num, 0);
console.log(sum([1, 2, 10]));

//створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
const swap = (arr, index1, index2) => {
    if (index1 < 0 || index1 >= arr.length || index2 < 0 || index2 >= arr.length) {
        return arr;
    }
    [arr[index1], arr[index2]] = [arr[index2], arr[index1]];
    return arr;
};
console.log(swap([11, 22, 33, 44], 0, 1));

// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250
const exchange = (sumUAH, currencyValues, exchangeCurrency) => {
    let currency = currencyValues.find(c => c.currency === exchangeCurrency);
    if (!currency) {
        document.write("Указанная валюта не найдена.");
        return;
    }
    let result = sumUAH / currency.value;
    document.write(`Сумма в ${currency.currency}: ${result.toFixed(2)}`);
};
exchange(10000, [{currency: 'USD', value: 40}, {currency: 'EUR', value: 42}], 'USD');
