module.exports = function toReadable (number) {
    let ed = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    let dec = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    let tenToNineteen = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];

    if(number === 0) {
        return 'zero';
    }

    if(number > 0 && number < 10) {
        for(let i = 0; i < ed.length; i++) {
            if(i === number - 1) {
                return ed[i];
            }
        }
    } else if(number >= 10 && number < 20) {
        for(let i = 0; i < tenToNineteen.length; i++) {
            if(i === number - 10) {
                return tenToNineteen[i];
            }
        }
    } else if(number >= 20 && number < 100) {
        let firstNum = Math.floor(number / 10);
        let secondNum  = number % 10;

            if(firstNum === 2 && number != 20) {
                return dec[0] + ' ' + ed[secondNum - 1];
            }

            if(number % 10 === 0) {
                return dec[number / 10 - 2];
            }
        let result = dec[firstNum - 2] + ' ' + ed[secondNum - 1];
        return result;   

    } else if(number % 100 === 0) {
        return ed[number / 100 - 1] + ' ' + 'hundred';

    } else if(number > 100 && number <= 999) {
        let firstNumFromThree = Math.floor(number / 100);
        let secondFromThree  = Math.floor((number % 100) / 10);
        let thirdFromThree = number % 10;

            if(number % 100 === 10) {
                return ed[firstNumFromThree - 1] + ' ' + 'hundred' + ' ' + tenToNineteen[0];
            }

            if(thirdFromThree === 0) {
                return ed[firstNumFromThree - 1] + ' ' + 'hundred' + ' ' + dec[secondFromThree - 2];
            }

            if(secondFromThree === 0) {
                return ed[firstNumFromThree - 1] + ' ' + 'hundred' + ' ' +ed[thirdFromThree - 1];
            }

            if(number % 100 >= 11 && number % 100 <= 19) {
                return ed[firstNumFromThree - 1] + ' ' + 'hundred' + ' ' + tenToNineteen[number % 100 - 10];
            }

            

            

        let resultStr = ed[firstNumFromThree - 1] + ' ' + 'hundred' + ' ' + dec[secondFromThree - 2] + ' ' + ed[thirdFromThree - 1];

        return resultStr;
    }
}
