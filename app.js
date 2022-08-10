// https://calculator.swiftutors.com/enthalpy-change-calculator.html

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const enthalpyChangeRadio = document.getElementById('enthalpyChangeRadio');
const H1Radio = document.getElementById('H1Radio');
const H2Radio = document.getElementById('H2Radio');

let enthalpyChange;
let H1 = v1;
let H2 = v2;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');

enthalpyChangeRadio.addEventListener('click', function() {
  variable1.textContent = 'H1 (KJ/mol)';
  variable2.textContent = 'H2 (KJ/mol)';
  H1 = v1;
  H2 = v2;
  result.textContent = '';
});

H1Radio.addEventListener('click', function() {
  variable1.textContent = '(ΔH) Enthalpy Change (KJ/mol)';
  variable2.textContent = 'H2 (KJ/mol)';
  enthalpyChange = v1;
  H2 = v2;
  result.textContent = '';
});

H2Radio.addEventListener('click', function() {
  variable1.textContent = '(ΔH) Enthalpy Change (KJ/mol)';
  variable2.textContent = 'H1 (KJ/mol)';
  enthalpyChange = v1;
  H1 = v2;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(enthalpyChangeRadio.checked)
    result.textContent = `Enthalpy Change = ${computeEnthalpyChange().toFixed(2)} KJ/mol`;

  else if(H1Radio.checked)
    result.textContent = `H1 = ${computeH1().toFixed(2)} KJ/mol`;

  else if(H2Radio.checked)
    result.textContent = `H2 = ${computeH2().toFixed(2)} KJ/mol`;
})

// calculation

function computeEnthalpyChange() {
  return Number(H2.value) - Number(H1.value);
}

function computeH1() {
  return Number(H2.value) - Number(enthalpyChange.value);
}

function computeH2() {
  return Number(enthalpyChange.value) + Number(H1.value);
}