const nextBirthdayDate = new Date('Aug 9, 2023');

const getDaysBeforeBirthday = (date) => {
    const msToday = new Date().getTime();
    const msBday = date.getTime();

    const daysToBday = Math.round((msBday - msToday) / 1000 / 60 / 60 / 24);

    if (daysToBday < 0) {
        console.log(`Твой день рождения уже прошел! Введи дату следующего`)
    } else if (daysToBday === 0) {
        console.log(`Твой день рождения СЕГОДНЯ!`)
    } else {
        console.log(`Дней до твоего дня рождения: ${daysToBday}`);
    }
};

getDaysBeforeBirthday(nextBirthdayDate);
