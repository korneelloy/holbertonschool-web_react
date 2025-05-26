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
