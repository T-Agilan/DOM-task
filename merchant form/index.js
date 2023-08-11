function onSubmit() {
  var response = {};
  // let MyArray = [];
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
  

  // var Edit = editButton();
  // var Save = document.getElementById("Edt-button")

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
  cell15.innerHTML =
    "<button id='Edt-button'>Edit</button> <button id= 'save-button'>Save</button>";
  localStorage.setItem("entries", JSON.stringify(response));
  reset();
  onload();
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
  document.getElementsByName("type").checked = resetBussinessType();  
  document.getElementsByName("category-variety").selected = resetCategory();
  document.getElementById("percentage").value = " ";
  document.getElementById("duration").value = " ";
  document.getElementsByName("critical-account").checked = resetcAccount();
  document.getElementsByName("payment-options").checked = resetPaymentMethod();
}
function role() {
  var radio = document.getElementsByName("role");
  var selectedType = "";
  for (i = 0; i < radio.length; i++) {
    if (radio[i].checked) selectedType = radio[i].value;
  }
  return selectedType;
}
function cAccount(){
  var critical = document.getElementById("yes");
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
