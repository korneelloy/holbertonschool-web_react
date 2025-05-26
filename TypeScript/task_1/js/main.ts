interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [any_attribute: string]: any;
}

interface Directors extends Teacher {
  numberOfReports: number;
}

interface printTeacherFunction{
  (firstName: string, lastName: string) : string;
}

const printTeacher:printTeacherFunction = (firstName: string, lastName: string) => `${firstName[0]}. ${lastName}`;

interface StudentClassConstructor{
  (firstName: string, lastName: string) : StudentClass;
}

interface StudentClassInterface{
  firstName: string;
  lastName: string;
}

class StudentClass implements StudentClassInterface{
  firstName: string;
  lastName: string;
  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  /*constructor(public firstName: string, public lastName: string) {}*/
  workOnHomework(){
    return ('Currently working');
  }
  displayName(){
    return (this.firstName);

  }
}
