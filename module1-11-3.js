const dateFrom = new Date('Feb 24, 2022')

const addDays = (date, days) => {
const msFromDays = days * 24 * 60 * 60 * 1000; 
const newDate = new Date(date.getTime() + msFromDays);
console.log(`Обновленная дата: ${newDate}`)
};

addDays(dateFrom, 511);
