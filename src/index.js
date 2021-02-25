let numbers = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve'];
let endNumber = ['', '', 'twent', 'thirt', 'fort', 'fift', 'sixt', 'sevent', 'eight', 'ninet'];

function cNum(number){
    let n = number.toString().split('');
    let str = '';
    if (number === 0) {
        str = ''
    } else if (number <= 12) {
        str = numbers[number]
    } else if (number == 14) {
        str = 'fourteen';
    } else if (number > 12 && number < 20) {
        str = `${endNumber[n[1]]}een`;
    } else if (number % 10 === 0) {
        str = `${endNumber[n[0]]}y`;
    } else {
        str = `${endNumber[n[0]]}y ` + numbers[n[1]];
    }
    return str;
}

module.exports = function toReadable(number) {
    switch (number.toString().length) {
        case 1:
            return numbers[number];
        case 2:
            return cNum(number);
        case 3:
            let str = `${numbers[(number / 100) | 0]} hundred`;
            if (number % 100) {
                str += ` ${cNum(number % 100)}`;
            }
            return str;
    }
}
