let currentCategory = 'vegetable';
const categoryElm = document.getElementById('category');
const itemElm = document.getElementById('item');

async function changeCategory(event) {
    currentCategory = event.currentTarget.value;
    const response = await fetch('./data.json');
    const data = await response.json();
    const target = data[currentCategory];

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

categoryElm.addEventListener('change', changeCategory);