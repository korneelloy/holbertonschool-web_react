/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/*!********************!*\
  !*** ./js/main.ts ***!
  \********************/

var Director = /** @class */ (function () {
    function Director() {
    }
    Director.prototype.workFromHome = function () {
        return ('Working from home');
    };
    Director.prototype.getCoffeeBreak = function () {
        return ('Getting a coffee break');
    };
    Director.prototype.workDirectorTasks = function () {
        return ('Getting to director tasks');
    };
    return Director;
}());
var Teacher = /** @class */ (function () {
    function Teacher() {
    }
    Teacher.prototype.workFromHome = function () {
        return ('Cannot work from home');
    };
    Teacher.prototype.getCoffeeBreak = function () {
        return ('Cannot have a break');
    };
    Teacher.prototype.workTeacherTasks = function () {
        return ('Getting to work');
    };
    return Teacher;
}());
function createEmployee(salary) {
    if (typeof salary === 'number' && salary < 500) {
        return new Teacher();
    }
    else {
        return new Director();
    }
}
function isDirector(employee) {
    return employee instanceof Director;
}
function executeWork(employee) {
    if (isDirector(employee)) {
        console.log(employee.workDirectorTasks());
    }
    else {
        console.log(employee.workTeacherTasks());
    }
}
function teachClass(todayClass) {
    if (todayClass === 'Math') {
        return ('Teaching Math');
    }
    else {
        return ('Teaching History');
    }
}
console.log(teachClass('Math'));
console.log(teachClass('History'));

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQWNBO0lBQUE7SUFVQSxDQUFDO0lBVEMsK0JBQVksR0FBWjtRQUNFLE9BQU8sQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO0lBQy9CLENBQUM7SUFDRCxpQ0FBYyxHQUFkO1FBQ0UsT0FBTyxDQUFDLHdCQUF3QixDQUFDLENBQUM7SUFDcEMsQ0FBQztJQUNELG9DQUFpQixHQUFqQjtRQUNFLE9BQU8sQ0FBQywyQkFBMkIsQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7SUFDSCxlQUFDO0FBQUQsQ0FBQztBQUVEO0lBQUE7SUFVQSxDQUFDO0lBVEMsOEJBQVksR0FBWjtRQUNFLE9BQU8sQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDO0lBQ25DLENBQUM7SUFDRCxnQ0FBYyxHQUFkO1FBQ0UsT0FBTyxDQUFDLHFCQUFxQixDQUFDLENBQUM7SUFDakMsQ0FBQztJQUNELGtDQUFnQixHQUFoQjtRQUNFLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO0lBQzdCLENBQUM7SUFDSCxjQUFDO0FBQUQsQ0FBQztBQUVELFNBQVMsY0FBYyxDQUFDLE1BQXVCO0lBQzdDLElBQUksT0FBTyxNQUFNLEtBQUssUUFBUSxJQUFJLE1BQU0sR0FBRyxHQUFHLEVBQUc7UUFDL0MsT0FBTyxJQUFJLE9BQU8sRUFBRSxDQUFDO0tBQ3RCO1NBQU07UUFDTCxPQUFPLElBQUksUUFBUSxFQUFFLENBQUM7S0FDdkI7QUFDSCxDQUFDO0FBRUQsU0FBUyxVQUFVLENBQUMsUUFBNEI7SUFDOUMsT0FBTyxRQUFRLFlBQVksUUFBUSxDQUFDO0FBQ3RDLENBQUM7QUFFRCxTQUFTLFdBQVcsQ0FBQyxRQUE0QjtJQUMvQyxJQUFJLFVBQVUsQ0FBQyxRQUFRLENBQUMsRUFBRTtRQUN4QixPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDLENBQUM7S0FDM0M7U0FBTTtRQUNMLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLGdCQUFnQixFQUFFLENBQUMsQ0FBQztLQUMxQztBQUNILENBQUM7QUFJRCxTQUFTLFVBQVUsQ0FBQyxVQUFvQjtJQUN0QyxJQUFJLFVBQVUsS0FBSyxNQUFNLEVBQUU7UUFDekIsT0FBTSxDQUFDLGVBQWUsQ0FBQyxDQUFDO0tBQ3pCO1NBQU07UUFDTCxPQUFNLENBQUMsa0JBQWtCLENBQUMsQ0FBQztLQUM1QjtBQUNILENBQUM7QUFFRCxPQUFPLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO0FBQ2hDLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90eXBlc2NyaXB0X2RlcGVuZGVuY2llcy8uL2pzL21haW4udHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW50ZXJmYWNlIERpcmVjdG9ySW50ZXJmYWNle1xuICB3b3JrRnJvbUhvbWUoKTogc3RyaW5nO1xuICBnZXRDb2ZmZWVCcmVhaygpOiBzdHJpbmc7IFxuICB3b3JrRGlyZWN0b3JUYXNrcygpOiBzdHJpbmc7XG59XG5cblxuaW50ZXJmYWNlIFRlYWNoZXJJbnRlcmZhY2Uge1xuICB3b3JrRnJvbUhvbWUoKTogc3RyaW5nO1xuICBnZXRDb2ZmZWVCcmVhaygpOiBzdHJpbmc7XG4gIHdvcmtUZWFjaGVyVGFza3MoKTogc3RyaW5nO1xufVxuXG5cbmNsYXNzIERpcmVjdG9yIGltcGxlbWVudHMgRGlyZWN0b3JJbnRlcmZhY2Uge1xuICB3b3JrRnJvbUhvbWUoKSB7XG4gICAgcmV0dXJuICgnV29ya2luZyBmcm9tIGhvbWUnKTtcbiAgfVxuICBnZXRDb2ZmZWVCcmVhaygpIHtcbiAgICByZXR1cm4gKCdHZXR0aW5nIGEgY29mZmVlIGJyZWFrJyk7XG4gIH1cbiAgd29ya0RpcmVjdG9yVGFza3MoKSB7XG4gICAgcmV0dXJuICgnR2V0dGluZyB0byBkaXJlY3RvciB0YXNrcycpO1xuICB9XG59XG5cbmNsYXNzIFRlYWNoZXIgaW1wbGVtZW50cyBUZWFjaGVySW50ZXJmYWNlIHtcbiAgd29ya0Zyb21Ib21lKCl7XG4gICAgcmV0dXJuICgnQ2Fubm90IHdvcmsgZnJvbSBob21lJyk7XG4gIH0gXG4gIGdldENvZmZlZUJyZWFrKCkge1xuICAgIHJldHVybiAoJ0Nhbm5vdCBoYXZlIGEgYnJlYWsnKTtcbiAgfSBcbiAgd29ya1RlYWNoZXJUYXNrcygpIHtcbiAgICByZXR1cm4gKCdHZXR0aW5nIHRvIHdvcmsnKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBjcmVhdGVFbXBsb3llZShzYWxhcnk6IG51bWJlciB8IHN0cmluZyk6IERpcmVjdG9yIHwgVGVhY2hlciB7XG4gIGlmICh0eXBlb2Ygc2FsYXJ5ID09PSAnbnVtYmVyJyAmJiBzYWxhcnkgPCA1MDApICB7XG4gICAgcmV0dXJuIG5ldyBUZWFjaGVyKCk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIG5ldyBEaXJlY3RvcigpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGlzRGlyZWN0b3IoZW1wbG95ZWU6IERpcmVjdG9yIHwgVGVhY2hlcik6IGVtcGxveWVlIGlzIERpcmVjdG9yIHtcbiAgcmV0dXJuIGVtcGxveWVlIGluc3RhbmNlb2YgRGlyZWN0b3I7XG59IFxuXG5mdW5jdGlvbiBleGVjdXRlV29yayhlbXBsb3llZTogRGlyZWN0b3IgfCBUZWFjaGVyKSB7XG4gIGlmIChpc0RpcmVjdG9yKGVtcGxveWVlKSkge1xuICAgIGNvbnNvbGUubG9nKGVtcGxveWVlLndvcmtEaXJlY3RvclRhc2tzKCkpO1xuICB9IGVsc2Uge1xuICAgIGNvbnNvbGUubG9nKGVtcGxveWVlLndvcmtUZWFjaGVyVGFza3MoKSk7XG4gIH1cbn1cblxudHlwZSBTdWJqZWN0cyA9ICdNYXRoJyB8ICdIaXN0b3J5JztcblxuZnVuY3Rpb24gdGVhY2hDbGFzcyh0b2RheUNsYXNzOiBTdWJqZWN0cyk6IHN0cmluZyB7XG4gIGlmICh0b2RheUNsYXNzID09PSAnTWF0aCcpIHtcbiAgICByZXR1cm4oJ1RlYWNoaW5nIE1hdGgnKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4oJ1RlYWNoaW5nIEhpc3RvcnknKTtcbiAgfVxufVxuXG5jb25zb2xlLmxvZyh0ZWFjaENsYXNzKCdNYXRoJykpO1xuY29uc29sZS5sb2codGVhY2hDbGFzcygnSGlzdG9yeScpKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==