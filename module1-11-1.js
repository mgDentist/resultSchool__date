const dateExample = new Date('December 7, 2006 03:24:00')

const getDateFormat = (date, separator) => {
    const timeArray = [];
    
    timeArray.push(date.getDate());
    timeArray.push(date.getMonth() + 1);
    timeArray.push(date.getFullYear());

    const modifiedTimeArray = timeArray.map((number) => {
        if (number < 10) {
            number = '0' + number;
        }
        return number;
    });
    const formatedDate = modifiedTimeArray.join(separator);
    console.log(formatedDate);
};

const showTheDate = getDateFormat(dateExample, '.');