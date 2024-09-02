// ! Task 1
// let studentName = prompt("Adınızı daxil edin");
// let studentSurname = prompt("Soyadınızı daxil edin");
// let studentAge = prompt("Yaşınızı daxil edin");
// let studentProfession = prompt("Peşənizi daxil edin");

// const student = {
//     name : studentName,
//     surname : studentSurname,
//     age : studentAge,
//     profession : studentProfession,
//     personalInfo : function (){
//         console.log(`Mənim adım ${this.name}. Mənim ${this.age} yaşım var.`);
//     },
// };
// student.personalInfo();

// ! Task 2

// const car = {
//   model: "century",
//   year: 2018,
//   color: "black",
// };

// function carProperties(owner, color, year) {
//   owner.owner = "Jack";
//   color.color = "white";
//   delete year.year;
//   console.log(car);
// };
// carProperties(car, car.color, car.year);

// function carProperties(propety) {
//     propety.owner = "Jack";
//     propety.color = "white";
//     delete propety.year;
//     console.log(car);
// };
// carProperties(car);

// ! Task 3

// const school = {
//   schoolName: "Innoway",
//   schoolAdress: {
//     street : "Nizami 241",
//     city : "Baku",
//     country : "Azerbaijan",
//   },
//   fullAdress : function () {
//     console.log(`${this.schoolName} tədris mərkəsi yerləşir, ${this.schoolAdress.street}, ${this.schoolAdress.city}, ${this.schoolAdress.country} `);
//   }
// };
// school.fullAdress();

// ! Task 4
// let books = [
//   {
//     title: "Carta Al Padre",
//     author: "Franz Kafka",
//     yearPublished: 1919,
//   },
//   {
//     title: "White Nights",
//     author: "Fyodor Dostoevsky",
//     yearPublished: 1848,
//   },
// ];
// function addNewBook(newTitle, newAuthor, newYear) {
//   books.push({ title: newTitle, author: newAuthor, yearPublished: newYear });
// }
// addNewBook("I Never Promised You a Rose Garden", "Joanne Greenberg", 1964);
// function titleOfBooks() {
//   for (let i = 0; i < books.length; i++) {
//     console.log(books[i].title);
//   }
// }
// titleOfBooks();

// ! Task 5
// let firstStudent = {
//     studentName : "Phillip",
//     studentage : 12,
//     studentGrade : 90,
// }
// let secondStudent = {
//     studentName : "Jack",
//     studentage : 12,
//     studentGrade : 100,
//     compareGrades : function () {
//         if (this.studentGrade > firstStudent.studentGrade) {
//             console.log(`"${this.studentName}" adlı şagirdin nəticəsi yüksəkdir. Topladığı bal: ${this.studentGrade}`);
//         }else if(this.studentGrade < firstStudent.studentGrade){
//             console.log(`"${secondStudent.studentName}" adlı şagirdin nəticəsi yüksəkdir. Topladığı bal: ${secondStudent.studentGrade}`);
//         }else{
//             console.log("Hər ikisinin nəticəsi eynidir"); 
//         }
//     }
// }
// secondStudent.compareGrades();

// ! Task 7
const calculator = {
    addition: function(a, b) {
        console.log(a + b);
    },
    subtraction: function(a, b) {
        console.log(a - b);
    },
    multiplication: function(a, b) {
        console.log(a * b);
    },
    division: function(a, b) {
        console.log(a / b);
    },
    // calculate : function (a, b){
    // }
};
// calculator.calculate(5, 3);
calculator.addition(5, 3);
calculator.subtraction(10, 4);
calculator.multiplication(7, 2);
calculator.division(20, 5);

