var selectedRow = null

function onFormSubmit(e) {
    event.preventDefault();
    var formData = readFormData();
    if (selectedRow == null) {
        insertNewRecord(formData);
    } else {
        updateRecord(formData);
    }
    resetForm();
}

//Retrieve the data
function readFormData() {
    var formData = {};
    formData["imagen"] = document.getElementById("imagen").value;
    formData["descripcion"] = document.getElementById("descripcion").value;
    formData["precio"] = document.getElementById("precio").value;
    formData["stock"] = document.getElementById("stock").value;
    return formData;
}

//Insert the data
function insertNewRecord(data) {
    var table = document.getElementById("storeList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.imagen;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.descripcion;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.precio;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.stock;
    cell4 = newRow.insertCell(4);
    cell4.innerHTML = `<button onClick="onEdit(this)">Edit</button> <button onClick="onDelete(this)">Delete</button>`;
}

//Edit the data
function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("imagen").value = selectedRow.cells[0].innerHTML;
    document.getElementById("descripcion").value = selectedRow.cells[1].innerHTML;
    document.getElementById("precio").value = selectedRow.cells[2].innerHTML;
    document.getElementById("stock").value = selectedRow.cells[3].innerHTML;
}

function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.imagen;
    selectedRow.cells[1].innerHTML = formData.descripcion;
    selectedRow.cells[2].innerHTML = formData.precio;
    selectedRow.cells[3].innerHTML = formData.stock;
}

//Delete the data
function onDelete(td) {
    if (confirm('Do you want to delete this record?')) {
        row = td.parentElement.parentElement;
        document.getElementById('storeList').deleteRow(row.rowIndex);
        resetForm();
    }
}

//Reset the data
function resetForm() {
    document.getElementById("imagen").value = '';
    document.getElementById("descripcion").value = '';
    document.getElementById("precio").value = '';
    document.getElementById("stock").value = '';
    selectedRow = null;
}