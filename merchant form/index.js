var values = null;
var row;
var myArr = [];
function onSubmit() {
  let fetchData = localStorage.getItem("entries");
  if (fetchData != null) {
    myArr = JSON.parse(fetchData);
  }

  if (values == null) {
    insertNewData();
  } else updateRow();
  localStorage.setItem("entries", JSON.stringify(myArr));
  reset();
}
window.onload = function () {
  localStorage.removeItem("entries");
};
function insertNewData() {
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
  response.critical = cAccount();
  response.payment = callPayment();
  myArr.push(response);

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
  var cell15 = row.insertCell(14);
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
  cell13.innerHTML = response.critical;
  cell14.innerHTML = response.payment;
  var editButton = document.createElement("button");
  editButton.innerHTML = "Edit";
  editButton.addEventListener("click", function () {
    editRow(response);
  });

  var deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  deleteButton.addEventListener("click", function () {
    deleteRow(response); // Pass the response object to the deleteRow function
  });
  cell15.appendChild(editButton);
  cell15.appendChild(deleteButton);
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

function cAccount() {
  var critical = document.getElementsByName("critical-account");
  var criticalAcc = [];
  for (i = 0; i < critical.length; i++) {
    if (critical[i].checked) criticalAcc.push(critical[i].value);
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
function resetCategory() {
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
function resetPaymentMethod() {
  var payment = document.getElementsByName("payment");
  for (var i = 0; i < payment.length; i++) {
    payment[i].checked = false;
  }
}

// <-------------------------------------Edit-functions------------------------>

function editRow(data) {
  values = 1;
  document.getElementById("fname").value = data.name;
  document.getElementById("mail").value = data.email;
  document.getElementById("number").value = data.phone;
  document.getElementById("website").value = data.website;
  document.getElementById("contact-Name").value = data.contactName;
  document.getElementById("contact-number").value = data.contactNumber;
  document.getElementById("Contact-email").value = data.contactMail;
  document.getElementById("notes").value = data.notes;
  findBusinessType(data.type);
  findCategory(data.category);
  document.getElementById("percentage").value = data.percentage;
  document.getElementById("duration").value = data.duration;
  findCritical(data.critical);
  findPaymentMethod(data.payment);

  var retrieveData = JSON.parse(localStorage.getItem("entries"));
  var index = retrieveData.findIndex(function (obj) {
    return obj.email === data.email && obj.phone === data.phone;
  });

  row = index;
  // localStorage.setItem("entries", JSON.stringify(retrieveData));
}

function findCategory(data) {
  let fnCategory = document.getElementsByName("critical-account");
  for (var i = 0; i < fnCategory.length; i++) {
    for (var j = 0; j < data.length; j++) {
      if (fnCategory[i].value == data[j]) {
        fnCategory[i].selected = true;
      }
    }
  }
}
function findCritical(data) {
  data;
  let fnCritical = document.getElementsByName("critical-account");
  if (fnCritical[0] == false) fnCritical[1].checked = true;
  else fnCritical[0].checked = true;
}

function findBusinessType(data) {
  data;
  let fnAccount = document.getElementsByName("role");
  if (fnAccount[0] == false) fnAccount[1].checked = true;
  else fnAccount[0].checked = true;
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

// <------------------------------------------updateRow-------------------------->

function updateRow() {
  let newData = {};
  var retrieveData = JSON.parse(localStorage.getItem("entries"));
  newData.name = document.getElementById("fname").value;
  newData.email = document.getElementById("mail").value;
  newData.phone = document.getElementById("number").value;
  newData.website = document.getElementById("website").value;
  newData.contactName = document.getElementById("contact-Name").value;
  newData.contactPhone = document.getElementById("contact-number").value;
  newData.contactMail = document.getElementById("Contact-email").value;
  newData.notes = document.getElementById("notes").value;
  newData.type = role();
  newData.category = document.getElementById("category-variety").value;
  newData.percentage = document.getElementById("percentage").value;
  newData.duration = document.getElementById("duration").value;
  newData.critical = cAccount();
  newData.payment = callPayment();

  var table = document.getElementById("dataTable");
  var editRow = table.rows[row + 1 ];
  editRow.cells[0].innerHTML = newData.name;
  editRow.cells[1].innerHTML = newData.email;
  editRow.cells[2].innerHTML = newData.phone;
  editRow.cells[3].innerHTML = newData.website;
  editRow.cells[4].innerHTML = newData.contactName;
  editRow.cells[5].innerHTML = newData.contactPhone;
  editRow.cells[6].innerHTML = newData.contactMail;
  editRow.cells[7].innerHTML = newData.notes;
  editRow.cells[8].innerHTML = newData.type;
  editRow.cells[9].innerHTML = newData.category;
  editRow.cells[10].innerHTML = newData.percentage;
  editRow.cells[11].innerHTML = newData.duration;
  editRow.cells[12].innerHTML = newData.critical;
  editRow.cells[13].innerHTML = newData.payment;
  myArr[row] = newData;
  localStorage.setItem("entries", JSON.stringify(retrieveData));
}

// <-------------------------------------delete table row------------------->
function deleteRow(data) {
  var retrieveData = JSON.parse(localStorage.getItem("entries"));

  var index = retrieveData.findIndex(function (obj) {
    return obj.email === data.email && obj.phone === data.phone;
  });

  if (index !== -1) {
    retrieveData.splice(index, 1);

    var table = document.getElementById("dataTable");
    table.deleteRow(index + 1);
  }
  localStorage.setItem("entries", JSON.stringify(retrieveData));
}
function Filter() {

  //filter out  data by category name for radio buttons
var category = JSON.parse(localStorage.getItem("entries"));
console.log(category);
  var FilterType = document.getElementsByName("role");
  for (var i = 0; i < FilterType.length; i++) {
    FilterType[i].addEventListener("click", function () {
      filterAndDisplayData();
    });
    console.log(FilterType);
  }

  function filterAndDisplayData() {
    var selectedCategory = getSelectedCategory();
    clearTableRows();
    var filteredData = myArr.filter(function (item) {
      return item.category === selectedCategory;
    });

    filteredData.forEach(function (item) {
      insertNewDataRow(item);
    });
    console.log(filteredData);
  }
  function getSelectedCategory() {
    var FilterType = document.getElementsByName("role");
    for (var i = 0; i < FilterType.length; i++) {
      if (FilterType[i].checked) {
        return FilterType[i].value;
      }
    }
    console.log("getSelectedCategory");
    // return null;
  }
  //clearing table rows
  function clearTableRows() {
    var table = document.getElementById("dataTable");
    while (table.rows.length > 1) {
      table.deleteRow(0);
    }
  }
  function insertNewDataRow(data) {
    insertNewData(data);
  }
}
