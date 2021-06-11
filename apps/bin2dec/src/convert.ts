export default class Convert {
    value: string;
    digits: string[];

    constructor(input: string = '0') {
        this.value = input;
        this.digits = [];
    }

    toBinary(): number {
        this.convertIntoReversedArray();

        let result = 0;

        for (let i = 0; i < this.digits.length; i++) {
            if (this.digits[i] === '1') {
                result += Math.pow(2, i);
            }
        }

        return result;
    }

    toDecimal(): string {
        return Number(this.value).toString(2);
    }

    convertIntoReversedArray() {
        // convert to array and reverse the values
        this.digits = this.value.split("").reverse();
    }
}