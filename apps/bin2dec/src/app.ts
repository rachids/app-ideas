import Convert from './convert';

const inputField = <HTMLInputElement> document.getElementById('binaryInput');
const actionButton = document.getElementById('convertBtn');
const sectionResult = document.getElementById('sectionResult');
const resultSpan = document.getElementById('resultSpan');
const directionBin2Dec = <HTMLInputElement> document.getElementById('bin2dec');
const directionDec2Bin = <HTMLInputElement> document.getElementById('dec2bin');

actionButton.addEventListener('click', function(event){

    let value = inputField.value;
    let converter = new Convert(value);

    sectionResult.classList.remove('invisible');

    let result = '?';

    if(directionBin2Dec.checked) {
        result = converter.toBinary().toString();
    } else if(directionDec2Bin.checked) {
        result = converter.toDecimal().toString();
    }
    resultSpan.innerText = result;
});