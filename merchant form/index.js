// document
//   .getElementById("MerchantForm")
//   .addEventListener("submit", function (event) {
//     event.preventDefault();
//     var name = document.getElementById("fname").value;
//     var email = document.getElementById("mail").value;
//     var number = document.getElementById("number").value;

//     var newRow = document.createElement("tr");
//     var nameCell = document.createElement("td");
//     var emailCell = document.createElement("td");
//     var numbercell = document.createElement("td");
//     nameCell.textContent = name;
//     emailCell.textContent = email;
//     numbercell.textContent = number;
//     newRow.appendChild(nameCell);
//     newRow.appendChild(emailCell);
//     newRow.appendChild(numbercell);
//     document.querySelector("#displayTable tbody").appendChild(newRow);
//     document.getElementById("name").value = " ";
//     document.getElementById("mail").value = " ";
//     document.getElementById("number").value = " ";
//   });

//   const form = event.target;
//   const formData = new FormData(form);
//   for (let x of formData.entries()) {
//     console.log(x[0] + ":" + x[1]);
//   }
// });
function submit(e) {
  e.preventDefault()
  // var name = document.getElementById("fname").value;
  // var mail = document.getElementById("mail").value;
  // var phone = document.getElementById("number").value;
  

  // var table = document.getElementById("displayTable");
  // var row = table.insertRow(table.rows.length);
  // var cell1 = row.insertCell(0);
  // var cell2 = row.insertCell(1);
  // var cell3 = row.insertCell(2);

  // cell1.innerHTML = name;
  // cell2.innerHTML = mail;
  // cell3.innerHTML = phone;

  // document.getElementById("fname").value = "";
  // document.getElementById("mail").value = "";
  // document.getElementById("number").value = "";
  
}