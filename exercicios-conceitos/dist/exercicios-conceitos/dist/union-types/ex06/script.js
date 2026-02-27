export let total = 200;
total = '500';
function isNumber(total) {
    if (typeof total === 'number') {
        return true;
    }
    else {
        return false;
    }
}
console.log(isNumber("200"));
const button = document.querySelector('button');
button?.click();
//# sourceMappingURL=script.js.map