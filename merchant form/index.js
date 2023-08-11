function onSubmit() {
  var response = {};
  response.name = document.getElementById("fname").value;
  response.email = document.getElementById("mail").value;
  response.phone = document.getElementById("number").value;
  response.website = document.getElementById("website").value;
  response.contactName = document.getElementById("contact-Name").value;
  response.contactNumber = document.getElementById("contact-number").value;
  response.contactMail = document.getElementById("Contact-email").value;
  response.notes = document.getElementById("notes").value;
  response.type = role();
  response.category = document.getElementById("category-variety").value;
  response.percentage = document.getElementById("percentage").value;
  response.duration = document.getElementById("duration").value;
  response.critical =  cAccount();
  response.payment = callPayment();
  
  var table = document.getElementById("dataTable");
  var row = table.insertRow(table.rows.length);
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  var cell3 = row.insertCell(2);
  var cell4 = row.insertCell(3);
  var cell5 = row.insertCell(4);
  var cell6 = row.insertCell(5);
  var cell7 = row.insertCell(6);
  var cell8 = row.insertCell(7);
  var cell9 = row.insertCell(8);
  var cell10 = row.insertCell(9);
  var cell11 = row.insertCell(10);
  var cell12 = row.insertCell(11);
  var cell13 = row.insertCell(12);
  var cell14 = row.insertCell(13);
  var cell15 = row.insertCell(14)
  // var cell14 = row.insertCell(13);

  cell1.innerHTML = response.name;
  cell2.innerHTML = response.email;
  cell3.innerHTML = response.phone;
  cell4.innerHTML = response.website;
  cell5.innerHTML = response.contactName;
  cell6.innerHTML = response.contactNumber;
  cell7.innerHTML = response.contactMail;
  cell8.innerHTML = response.notes;
  cell9.innerHTML = response.type;
  cell10.innerHTML = response.category;
  cell11.innerHTML = response.percentage;
  cell12.innerHTML = response.duration;
  // cell13.innerHTML = logo;
  cell13.innerHTML = response.critical
  cell14.innerHTML = response.payment;
  // cell15.innerHTML =
  //  "<button id='Edt-button'onClick=createEditHandler()>Edit</button> <button id= 'del-button'>Delete</button>";
  var editButton = document.createElement("button");
  editButton.innerHTML = "Edit";
  editButton.addEventListener("click", function() {
    editRow(response);
  });
  localStorage.setItem("entries", JSON.stringify(response));

  reset();
  
}

function reset() {
  document.getElementById("fname").value = " ";
  document.getElementById("mail").value = " ";
  document.getElementById("number").value = " ";
  document.getElementById("website").value = " ";
  document.getElementById("contact-Name").value = " ";
  document.getElementById("contact-number").value = " ";
  document.getElementById("Contact-email").value = " ";
  document.getElementById("notes").value = " ";
  document.getElementsByName("type").checked = resetBusiness();  
  document.getElementsByName("category-variety").selected = resetCategory();
  document.getElementById("percentage").value = " ";
  document.getElementById("duration").value = " ";
  document.getElementsByName("critical-account").checked = resetCAccount();
  document.getElementsByName("payment").checked = resetPaymentMethod();
}

// <--------------------------function for checkboxes----------------------->

function role() {
  var radio = document.getElementsByName("role");
  var selectedType = "";
  for (i = 0; i < radio.length; i++) {
    if (radio[i].checked) selectedType = radio[i].value;
  }
  return selectedType;
}

function cAccount(){
  var critical = document.getElementsByName("critical-account");
  var criticalAcc = [];
  for (i=0; i < critical.length;i++){
    if(critical[i].checked) criticalAcc.push(critical[i].value)
  }
return criticalAcc;
}
function callPayment() {
  var transaction = document.getElementsByName("payment");
  var selectedType = [];
  for (i = 0; i < transaction.length; i++) {
    if (transaction[i].checked) selectedType.push(transaction[i].value);
  }
  return selectedType;
}

/*<---------------------- reset functions--------------------> */

function resetBusiness() {
  var Type = document.getElementsByName("role");
  for (var i = 0; i < Type.length; i++) {
    Type[i].checked = false;
  }
}
function resetCategory(){
  var Type = document.getElementsByName("category");
  for (var i = 0; i < Type.length; i++) {
    Type[i].checked = false;
  }
}
function resetCAccount() {
  var criticalAccount = document.getElementsByName("critical-account");
  for (var i = 0; i < criticalAccount.length; i++) {
    criticalAccount[i].checked = false;
  }
}
function resetPaymentMethod(){
  var payment = document.getElementsByName("payment");
  for (var i = 0; i < payment.length; i++) {
    payment[i].checked = false;
  }
}
// <-------------------------------------Edit-functions------------------------>

function createEditHandler(data) {
  return function () {
    populateForm(data);
  }
}
function populateForm(data) {
  document.getElementById("submit").innerText = "Update";
  document.getElementById("fname").value = data.Name;
  document.getElementById("mail").value = data.Email;
  document.getElementById("number").value = data.Phone;
  document.getElementById("website").value = data.Website;
  document.getElementById("contact-Name").value = data.ContactName;
  document.getElementById("contact-number").value = data.ContactPhone;
  document.getElementById("Contact-email").value = data.ContactEmail;
  document.getElementById("notes").value = data.Notes;
  findBusinessType(data.businessType);
  findCategory(data.selectCategory);
  document.getElementById("percentage").value = data.CommissionPercentage;
  document.getElementById("duration").value = data.ActiveFrom;
  findPaymentMethod(data.paymentMethod);
  newData = false;

}
function findCategory(data) {
  let fnCategory = document.getElementsByName("category");
  for (var i = 0; i < fnCategory.length; i++) {
    for (var j = 0; j < data.length; j++) {
      if (fnCategory[i].value == data[j]) {
        fnCategory[i].selected = true;
      }
    }
  }
}
function findAccountType(data) {
  let fnAccount = document.getElementsByName("critical-account");
  if (fnAccount[0] == data[0])
    fnAccount[1].checked = true;
  else
    fnAccount[0].checked = true;
}
function findPaymentMethod(data) {
  let fnPayment = document.getElementsByName("payment");
  for (var i = 0; i < fnPayment.length; i++) {
    for (var j = 0; j < data.length; j++) {
      if (fnPayment[i].value == data[j]) {
        fnPayment[i].checked = true;
      }
    }
  }
}