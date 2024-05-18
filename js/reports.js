// Retrieve the cow data from localStorage
let  cows = JSON.parse(localStorage.getItem('cowArr')) || [];
    
// Populate the table with cow data
let cowTable = document.getElementById('cowTable');

for (let cow of cows) {
    let row = cowTable.insertRow(-1);

    row.insertCell(0).innerHTML = cow.name;
    row.insertCell(1).innerHTML = cow.breed;
    row.insertCell(2).innerHTML = cow.father;
    row.insertCell(3).innerHTML = cow.mother;
    row.insertCell(4).innerHTML = cow.children;
    row.insertCell(5).innerHTML = cow.dob;
    row.insertCell(6).innerHTML = cow.age;
    row.insertCell(7).innerHTML = cow.birthDate;
}

// Retrieve the data from localStorage
let records = JSON.parse(localStorage.getItem('milkRecords')) || [];

// Populate the table
let table = document.getElementById('reportTable',);

for (let record of records) {
    let row = table.insertRow(-1);

    row.insertCell(0).innerHTML = record.cowID;
    row.insertCell(1).innerHTML = record.morning;
    row.insertCell(2).innerHTML = record.noon;
    row.insertCell(3).innerHTML = record.evening;
    row.insertCell(4).innerHTML = record.total;
    row.insertCell(5).innerHTML = record.difference;
}

// Populate the chart
const ctx = document.getElementById('myChart');

new Chart(ctx, {
    type: 'bar',
    data: {
        labels: records.map(record => record.cowID),
        datasets: [{
            label: 'Total Production',
            data: records.map(record => record.total),
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});