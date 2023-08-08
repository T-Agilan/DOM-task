function addData() {
    var name = document.getElementById("name").value
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var website = document.getElementById("website").value;
    

    var table = document.getElementById("dataTable");
    var row = table.insertRow(table.rows.length);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);

    cell1.innerHTML = name;
    cell2.innerHTML = email;
    cell3.innerHTML = phone;
    cell4.innerHTML = website;

    document.getElementById("name").value = ""
    document.getElementById("email").value = ""
    document.getElementById("phone").value = "";
    document.getElementById("website").value = "";
    }