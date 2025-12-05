// Створіть об'єкт "bankAccount" з властивостями "ownerName", "accountNumber", "balance". Додайте до об'єкту метод "deposit", який дозволяє додавати гроші на рахунок, та метод "withdraw", який дозволяє знімати гроші з рахунку. Використайте confirm() щоб поповнити рахунок або отримати готівку та prompt() щоб дізнатися сумму. Після проведення операції виводити повідомлення про залишок на рахунку. 

const bankAccount = {
    ownerName: "Микола",
    accountNumber: 829487,
    balance: 2750,

    deposit(amount) {
        this.balance += amount
    },

    withdraw(amount) {
        if (this.balance < amount) {
            return `Недостатньо коштів`
        }
        this.balance -= amount
    },
}

if (confirm("Бажаєте поповнити рахунок?")) {
        const amount = Number(prompt("Введіть суму для поповнення"))
        if (amount > 0) {
            bankAccount.deposit(amount)
        }
        }else if(confirm("Бажаєте зняти гроші?")){
            const amount = Number(prompt("Введіть суму для зняття"));
            bankAccount.withdraw(amount)
        }
console.log(bankAccount);

// ---------------------------------------------------------------------------------------------------------------------------

// Створіть об'єкт "weather" з властивостями "temperature", "humidity", "windSpeed". Додайте до об'єкту метод, який повертає "true", якщо температура нижче 0 градусів Цельсія, та "false", якщо температура вище або рівна 0 градусів Цельсія. Температуру потрібно отримати з prompt(). Якщо метод повернув "true" вивести повідомлення “температура нижче 0 градусів Цельсія” і навпаки

const weather = {
    temperature: 26,
    humidity: 36,
    windSpeed: 4,

    checkTemperature(newTemperature){
        const celsia = prompt("Задайте температуру");
        if (celsia <= 0) {
            return false,
            console.log("температура нижче 0 градусів Цельсія");
        }

        if (celsia > 0) {
            return true,
            console.log("температура більше 0 градусів Цельсія");
        }

        this.temperature = newTemperature;
    }
}
weather.checkTemperature()
console.log(weather);

// --------------------------------------------------------------------------------------------------------------------------

// Створіть об’єкт "user", який буде мати властивості "name", "email", "password". Додайте метод "login", який буде перевіряти правильність введеного email та password. 

const emails = ["vvev.eh33@gmail.com", "olena.tarador@gmail.com","oleksa.dudko@gmail.com", "ramires.ssura@gmail.com"];
const passwords = ["g34g33g4g", "hbgsdhv72", "jktrcsq1362", "fbe38g3b3", "ee7be7beb"]

const user = {
    name: "Oleksii",
    email: "oleksa.dudko@gmail.com",
    password: "jktrcsq1362",

    login(){
        if (emails.includes(this.email) && passwords.includes(this.password)) {
            console.log("Ви успішно увійшли на свій акаунт");
        }else{
            console.log("Неправильний email або пароль");
        }
    }
}
user.login()
console.log(user);

// -------------------------------------------------------------------------------------------------------------------------

// Створіть об'єкт "movie" з властивостями "title", "director", "year", "rating". Додайте до об'єкту метод, який повертає "true", якщо рейтинг фільму вище 8, та "false", якщо рейтинг фільму 8 або нижче. Вивести значення властивостей в консоль. 

const movie = {
    title: "vgbnfc hv bcgf",
    director: "Cvgbncf",
    year: 2013,
    rating: 7,

    checkRating(){
        if (this.rating <= 8) {
            console.log(false);
        }else{
            console.log(true);
        }
    }
}
movie.checkRating();
console.log(movie);
