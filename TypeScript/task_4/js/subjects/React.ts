namespace Subjects {
  interface Teacher {
    experienceTeachingReact?: number;
  }
  getRequirements(): string{
    return ('Here is the list of requirements for React');
  }
  getAvailableTeacher(): string {
    return (`Available Teacher: ${this.firstName}`);
  }
}