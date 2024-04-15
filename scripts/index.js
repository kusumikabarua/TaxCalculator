

const calculateTax = (grossIncome, extraIncome, ageGroup, deductions) => {
  let income = grossIncome + extraIncome - deductions;
  let tax = 0;

  if (income <= 800000) {
    return tax;
  }
  if (ageGroup == "< 40") {
    tax = (30 / 100) * (income - 800000);
  } else if (ageGroup == "40-60") {
    tax = (40 / 100) * (income - 800000);
  } else {
    tax = (10 / 100) * (income - 800000);
  }
  return tax;
};

const validate= () => {
 
  let grossIncome = parseInt(document.getElementById("grossIncome").value);
  let extraIncome = parseInt(document.getElementById("extraIncome").value);
  let ageGroup = document.getElementById("ageGroup").value;
  let deductions = parseInt(document.getElementById("deductions").value);
  const taxForm = document.getElementById("taxForm");
  console.log("grossIncome",grossIncome);
  console.log("extraIncome",extraIncome);
  console.log("ageGroup",ageGroup);
  console.log("deductions",deductions);

 if(!grossIncome ||!extraIncome ||!ageGroup ||!deductions){
    taxForm.classList.add('was-validated');
    return;
 }

  let tax = calculateTax(grossIncome, extraIncome, ageGroup, deductions);
  let modalIncome = document.getElementById("exampleModalIncome");
  var myModal = new bootstrap.Modal(document.getElementById('exampleModal'), {})
  modalIncome.textContent= grossIncome + extraIncome - deductions-tax;
  console.log("tax",tax);
  myModal.show();
  console.log("show");
};
