interface Student{
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName:'Mike',
  lastName:'Johnson',
  age:20,
  location:'New York'
};

const student2: Student = {
  firstName:'Nicolas',
  lastName:'Cage',
  age:21,
  location:'Washington'
};

const studentList: Student[] = [student1, student2];

const table = document.createElement('table');

for (const student of studentList){
  const row = document.createElement('tr');
  const fName = document.createElement('td');
  const fNameText = document.createTextNode(student.firstName);
  fName.appendChild(fNameText);
  const loc = document.createElement('td');
  const locText = document.createTextNode(student.location);
  loc.appendChild(locText);
  row.appendChild(fName);
  row.append(loc);
  table.append(row)
}

document.body.appendChild(table);
