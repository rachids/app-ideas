import Radius from "./Radius";

const borderTopLeft = <HTMLInputElement> document.getElementById('border-top-left');
const borderTopRight = <HTMLInputElement> document.getElementById('border-top-right');
const borderBottomLeft = <HTMLInputElement> document.getElementById('border-bottom-left');
const borderBottomRight = <HTMLInputElement> document.getElementById('border-bottom-right');

const preview = document.getElementById('preview');
const codeBox = document.getElementById('code-box');
const codeBoxValue = document.getElementById('code-box-value');

let radius = new Radius();

[borderTopLeft, borderTopRight, borderBottomLeft, borderBottomRight].forEach(item => {
    item.addEventListener('change', event => triggerPreview(<HTMLInputElement> event.target));
});

// Apply the generated CSS to the preview div
function triggerPreview(event: HTMLInputElement) {
    let cssCode = radius.setValue(event.dataset.name, parseInt(event.value))
    preview.style.borderRadius = cssCode;
    codeBoxValue.innerHTML = radius.getCssCode();
}

// Copy the code to clipboard
codeBox.addEventListener('click', async event => await navigator.clipboard.writeText(radius.getCssCode()));