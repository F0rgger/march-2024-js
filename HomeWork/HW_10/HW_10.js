
//Стоврити форму з трьома полями для name,sruname,age та кнопкою. При натисканні на кнопку зчитати данні з полів, та вивести об'єкт в документ. Іншими словами : заповниои форму, натиснули кнопку, під формою з'явився блок з вашим об'єктом
function handleSubmit() {
    let name = document.getElementById('name').value;
    let surname = document.getElementById('surname').value;
    let age = document.getElementById('age').value;
    let result = { name, surname, age };
    document.getElementById('result').innerText = JSON.stringify(result);
}

//є сторінка, на якій є блок, я кому знаходиьтся цифра. написати код, який при кожному перезавантажені сторінки буде додавати до неї +1

document.addEventListener('DOMContentLoaded', () => {
    let counter = localStorage.getItem('counter');
    counter = counter ? parseInt(counter) + 1 : 1;
    localStorage.setItem('counter', counter);
    document.getElementById('counter').innerText = counter;
});

//Є сторінка index.html (назва довільна), при відвідуванні якої в локальне сховще, в масив sessions зберігається інформація про дату та час відвідування сторінки. Є ще сторінка sessions.html (назва довільна), при відвідуванні якої потрібно відмалювати всю інформацію про відвідування сторінки index.html. Інфу НЕ виводити в консоль, а побудувати дом структуру під кожну сессію
document.addEventListener('DOMContentLoaded', () => {
    let sessions = JSON.parse(localStorage.getItem('sessions')) || [];
    sessions.push(new Date().toLocaleString());
    localStorage.setItem('sessions', JSON.stringify(sessions));
});


document.addEventListener('DOMContentLoaded', () => {
    let sessions = JSON.parse(localStorage.getItem('sessions')) || [];
    let sessionsContainer = document.getElementById('sessions');
    sessions.forEach(session => {
        let sessionElement = document.createElement('div');
        sessionElement.innerText = session;
        sessionsContainer.appendChild(sessionElement);
    });
});

//зробити масив на 100 об'єктів та дві кнопки prev next
// при завантажені сторінки з'являються перші 10 об'єктів.
// При натисканні next виводяться настпні 10 об'єктів
// При натисканні prev виводяться попередні 10 об'єктів

let items = Array.from({ length: 100 }, (_, i) => `Об'єкт ${i + 1}`);
let currentPage = 0;

function renderItems() {
    let start = currentPage * 10;
    let end = start + 10;
    let visibleItems = items.slice(start, end);
    document.getElementById('items').innerHTML = visibleItems.join('<br>');
}

function prevPage() {
    if (currentPage > 0) {
        currentPage--;
        renderItems();
    }
}

function nextPage() {
    if ((currentPage + 1) * 10 < items.length) {
        currentPage++;
        renderItems();
    }
}

document.addEventListener('DOMContentLoaded', renderItems);

//- Створити довільний елемент з id = text та створити кнопку.Використовуючи JavaScript, зробіть так, щоб при натисканні на кнопку зникав елемент з id="text".

function hideText() {
    document.getElementById('text').style.display = 'none';
}


//- створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача

function checkAge() {
    let age = parseInt(document.getElementById('ageInput').value);
    document.getElementById('ageMessage').innerText = age < 18 ? 'Вам менше 18 років.' : 'Вам 18 років або більше.';
}