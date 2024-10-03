let calculation = localStorage.getItem('calculation') || '';

const displayCalculation = () => {
  document.querySelector('.js-calculation').innerHTML = calculation;
};

const updateCalculation = (value) => {
  calculation += value;
  displayCalculation();
  localStorage.setItem('calculation', calculation);
};

displayCalculation();
