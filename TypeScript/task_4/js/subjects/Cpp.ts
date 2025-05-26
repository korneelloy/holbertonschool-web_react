import { Subject } from './Subject';

namespace Subjects {
  interface Teacher {
    experienceTeachingC?: number;
  }
  export class Cpp extends Subject {
    getRequirements(): string {
      return ('Here is the list of requirements for Cpp');
    }
    getAvailableTeacher(): string {
      return (`Available Teacher: ${this.firstName}`);
    }
  }
  

}