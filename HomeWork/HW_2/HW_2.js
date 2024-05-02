 //----------Array-----------//
 let array = [1,'hello',null,undefined,true,3.14,'owu','com','ua',10];

 console.log(array);

 //----------Book-----------//

 let book1 = {title: "Book One", pageCount: 300, genre: "Fantasy"};

 let book2 = {title: "Book Two", pageCount: 150, genre: "Science Fiction"};

 let book3 = {title: "Book Three", pageCount: 450, genre: "Mystery"};

 console.log(book1);

 console.log(book2);

 console.log(book3);

 //----------bookWithAuthors-----------//

 let bookWithAuthors1 = {
  title: "Advanced Book One",
  pageCount: 320,
  genre: "Fantasy",
  authors: [{name: "John Doe", age: 35}, {name: "Jane Doe", age: 28}]
 };

 let bookWithAuthors2 = {
  title: "Advanced Book Two",
  pageCount: 220,
  genre: "Horror",
  authors: [{name: "Jim Beam", age: 40}]
 };

 let bookWithAuthors3 = {
  title: "Advanced Book Three",
  pageCount: 500,
  genre: "Historical Fiction",
  authors: [{name: "Alice Johnson", age: 32}, {name: "Bob Smith", age: 45}]
 };

 console.log(bookWithAuthors1);

 console.log(bookWithAuthors2);

 console.log(bookWithAuthors3);


 //----------Users-----------//

 let users = [

  {name: "Alice", username: "alice2024", password: "pass123"},

  {name: "Bob", username: "bob2024", password: "pass456"},

  {name: "Carol", username: "carol2024", password: "pass789"},

  {name: "Dave", username: "dave2024", password: "pass012"},

  {name: "Eve", username: "eve2024", password: "pass345"},

  {name: "Frank", username: "frank2024", password: "pass678"},

  {name: "Grace", username: "grace2024", password: "pass901"},

  {name: "Hank", username: "hank2024", password: "pass234"},

  {name: "Irene", username: "irene2024", password: "pass567"},

  {name: "John", username: "john2024", password: "pass890"}
 ];

console.log(users);


 //----------WeekTemperatures-----------//


 let weekTemperatures = [
  [12, 18, 10], // Day 1
  [13, 19, 11], // Day 2
  [14, 20, 12], // Day 3
  [15, 21, 13], // Day 4
  [16, 22, 14], // Day 5
  [17, 23, 15], // Day 6
  [18, 24, 16]  // Day 7
 ];

 console.log(weekTemperatures);


 //----------Логічні розгалуження-----------//



 //----------Task-1------------//



 let x = 1;
 if (x !== 0) {
  console.log('Вірно');
 } else {
  console.log('Невірно');
 }

 x = 0;
 if (x !== 0) {
  console.log('Вірно');
 } else {
  console.log('Невірно');
 }

 x = -3;
 if (x !== 0) {
  console.log('Вірно');
 } else {
  console.log('Невірно');
 }


 //---------- Task-2-----------//

 let time = 10;
 if (time >= 0 && time < 15) {
  console.log('Перша чверть години');
 } else if (time >= 15 && time < 30) {
  console.log('Друга чверть години');
 } else if (time >= 30 && time < 45) {
  console.log('Третя чверть години');
 } else if (time >= 45 && time <= 59) {
  console.log('Четверта чверть години');
 }

 //---------- Task-3-----------//

 let day = 15;
 if (day >= 1 && day <= 10) {
  console.log('Перша декада');
 } else if (day > 10 && day <= 20) {
  console.log('Друга декада');
 } else if (day > 20 && day <= 31) {
  console.log('Третя декада');
 }

 //---------- Task-4-----------//

 let dayNumber = 3;
 switch (dayNumber) {
  case 1:
   console.log('Monday');
   break;
  case 2:
   console.log('Tuesday');
   break;
  case 3:
   console.log('Wednesday');
   break;
  case 4:
   console.log('Thursday');
   break;
  case 5:
   console.log('Friday');
   break;
  case 6:
   console.log('Saturday');
   break;
  case 7:
   console.log('Sunday');
   break;
  default:
   console.log('Invalid day');
 }

 //---------- Task-5-----------//

 let num1 = 10;
 let num2 = 20;

 if (num1 > num2) {
  console.log(num1);
 } else if (num2 > num1) {
  console.log(num2);
 } else {
  console.log("Числа рівні");
 }

 //---------- Task-6-----------//

 let value = 0;

 let xx = value || "default";
 console.log(xx);

 //---------- coursesAndDurationArray-----------//


 let coursesAndDurationArray = [
  {title: 'JavaScript Complex', monthDuration: 5},
  {title: 'Java Complex', monthDuration: 6},
  {title: 'Python Complex', monthDuration: 6},
  {title: 'QA Complex', monthDuration: 4},
  {title: 'FullStack', monthDuration: 7},
  {title: 'Frontend', monthDuration: 4}
 ];

 if (coursesAndDurationArray[0].monthDuration > 5) {
  console.log("Супер");
 }
 if (coursesAndDurationArray[1].monthDuration > 5) {
  console.log("Супер");
 }
 if (coursesAndDurationArray[2].monthDuration > 5) {
  console.log("Супер");
 }
 if (coursesAndDurationArray[3].monthDuration > 5) {
  console.log("Супер");
 }
 if (coursesAndDurationArray[4].monthDuration > 5) {
  console.log("Супер");
 }
 if (coursesAndDurationArray[5].monthDuration > 5) {
  console.log("Супер");
 }
