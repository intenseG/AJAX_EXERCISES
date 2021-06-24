let currentCategory = 'vegetable';
const categoryElm = document.getElementById('category');
const itemElm = document.getElementById('item');

let xhr = new XMLHttpRequest();

xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
        const json = xhr.responseText;
        const obj = JSON.parse(json);
        const target = obj[currentCategory];

        console.log(itemElm.options.length);
        for (let i = itemElm.options.length - 1; 0 <= i; --i) {
            itemElm.remove(i);
        }

        for (let j = 0; j < target.length; j++) {
            const opElm = document.createElement('option');
            opElm.setAttribute('value', target[j].value);
            opElm.textContent = target[j].name;
            itemElm.appendChild(opElm);
        }
    }
}

function changeCategory(event) {
    currentCategory = event.currentTarget.value;
    xhr.open('GET', './data.json');
    // xhr.open('GET', 'http://127.0.0.1:8080/data.json'); // URLで指定してもOK!!(ただし、localhostは使えない)
    xhr.send();
}

categoryElm.addEventListener('change', changeCategory);