document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', () => {

        button.classList.add('clicked');

        setTimeout(() => {
            button.classList.remove('clicked');
        }, 100);
    });
});

let currentInput = '';
let display = document.getElementById('display');

function appendToDisplay(value) {
    currentInput += value;
    display.value = currentInput;
}

function clearDisplay() {
    currentInput = '';
    display.value = '';
}

function calculateResult() {
    try {
        currentInput = eval(currentInput);
        display.value = currentInput;
    } catch (error) {
        display.value = 'Erro';
        currentInput = '';
    }
}

document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', () => {
        button.classList.add('active');
        setTimeout(() => {
            button.classList.remove('active');
        }, 100);
    });
});

document.addEventListener('keydown', function (event) {
    const key = event.key;

    if (/[\d\+\-\*\/=]/.test(key)) {
        appendToDisplay(key);
    }

    if (key === 'c' || key === 'C' || key === 'Escape') {
        clearDisplay();
    }

    if (key === 'Enter') {
        calculateResult();
    }
});