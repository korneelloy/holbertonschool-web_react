namespace Subjects {
  interface Teacher {
    experienceTeachingJava?: number;
  }
  getRequirements(): string{
    return ('Here is the list of requirements for React');
  }
  getAvailableTeacher(): string {
    return (`Available Teacher: ${this.firstName}`);
  }
}