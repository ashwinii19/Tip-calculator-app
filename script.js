const billInput = document.getElementById('bill');
const tipButtons = document.querySelectorAll('.tip-button');
const peopleInput = document.getElementById('people');
const tipAmount = document.getElementById('tip-amount');
const total = document.getElementById('total');
const resetButton = document.getElementById('reset');

function calculateTip() {
    const bill = parseFloat(billInput.value);
    const tipPercentage = parseFloat(document.querySelector('.tip-button.active').id) / 100;
    const people = parseInt(peopleInput.value);

    const tipAmountPerPerson = (bill * tipPercentage) / people;
    const totalPerPerson = (bill / people) + tipAmountPerPerson;

    tipAmount.textContent = `$${tipAmountPerPerson.toFixed(2)}`;
    total.textContent = `$${totalPerPerson.toFixed(2)}`;
}

tipButtons.forEach(button => {
    button.addEventListener('click', () => {
        tipButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        calculateTip();
    });
});

billInput.addEventListener('input', calculateTip);
peopleInput.addEventListener('input', calculateTip);

resetButton.addEventListener('click', () => {
    billInput.value = '';
    peopleInput.value = '1';
    tipButtons.forEach(button => {
        button.classList.remove('active');
    });
    tipButtons[2].classList.add('active');
    tipAmount.textContent = '$0.00';
    total.textContent = '$0.00';
});

calculateTip();