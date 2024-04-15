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

const submitForm = () => {
  let grossIncome = parseInt(document.getElementById("grossIncome").value);
  let extraIncome = parseInt(document.getElementById("extraIncome").value);
  let ageGroup = document.getElementById("ageGroup").value;
  let deductions = parseInt(document.getElementById("deductions").value);
  
  validateField("grossIncome");
  validateField("extraIncome");
  validateField("ageGroup");
  validateField("deductions");
  if (!grossIncome || !extraIncome || !ageGroup || !deductions) {
    return;
  }

  let tax = calculateTax(grossIncome, extraIncome, ageGroup, deductions);
  let modalIncome = document.getElementById("exampleModalIncome");
  var myModal = new bootstrap.Modal(
    document.getElementById("exampleModal"),
    {}
  );
  modalIncome.textContent = grossIncome + extraIncome - deductions - tax;
  myModal.show();
};
function validateField(name) {
    let field = document.getElementById(name);
    console.log(field.type);
    let value =field.value;
    if(field.type=="text"){
        value =parseInt(field.value);
    }
    if (!value) {    
        field.classList.add("is-invalid");
    } else {   
        field.classList.remove("is-invalid");
    }
  
}

