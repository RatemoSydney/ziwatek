let cowForm = document.getElementById('cowForm'),
    reset = function (){
        dataField = document.querySelectorAll('<input>');
        dataField ='';
    };

cowForm.addEventListener('submit',function(e){
    e.preventDefault();

    // Get form data
    let cow_name = document.getElementById('name').value,
        breed = document.getElementById('breed').value,
        father = document.getElementById('father').value,
        mother = document.getElementById('mother').value,
        children = document.getElementById('children').value,
        dob = document.getElementById('dob').value,
        age = document.getElementById('age').value,
        birthDate = document.getElementById('birthDate').value;

    // Validate form data
    if (!cow_name || !breed || !father || !mother || !children || !dob || !age || !birthDate) {
        alert('Please fill out all fields.');
        return;
    }

    // Add form data to table
    let row = document.createElement('tr'),
        nameCell =document.createElement('td'),
        breedCell = document.createElement('td'),
        fatherCell = document.createElement('td'),
        motherCell = document.createElement('td'),
        childrenCell = document.createElement('td'),
        dobCell = document.createElement('td'),
        ageCell = document.createElement('td'),
        birthDateCell = document.createElement('td');

    nameCell.textContent = cow_name;
    row.appendChild(nameCell);

    breedCell.textContent = breed;
    row.appendChild(breedCell);

    fatherCell.textContent = father;
    row.appendChild(fatherCell);

    motherCell.textContent = mother;
    row.appendChild(motherCell);

    childrenCell.textContent = children;
    row.appendChild(childrenCell);

    dobCell.textContent = dob;
    row.appendChild(dobCell);

    ageCell.textContent = age;
    row.appendChild(ageCell);

    birthDateCell.textContent = birthDate;
    row.appendChild(birthDateCell);

    document.getElementById('cowTable').appendChild(row);
    
    /****** Store data in local storage ******/

    // Convertng 'cow' object to an array
    let cowArr = [],
     cowData = JSON.parse(localStorage.getItem('cowArr')) || [];

    cowData.push({
        name: cow_name,
        breed: breed,
        father: father,
        mother: mother,
        children: children,
        dob: dob,
        age: age,
        birthDate: birthDate
    });

    localStorage.setItem('cowArr', JSON.stringify(cowData));

    cowForm.reset()
});