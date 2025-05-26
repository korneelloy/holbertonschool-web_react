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
    if (typeof (salary) === 'number' && salary < 500) {
        return new Teacher;
    }
    else {
        return new Director;
    }
}
console.log(createEmployee(200));
console.log(createEmployee(1000));
console.log(createEmployee('$500'));

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQWNBO0lBQUE7SUFVQSxDQUFDO0lBVEMsK0JBQVksR0FBWjtRQUNFLE9BQU8sQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO0lBQy9CLENBQUM7SUFDRCxpQ0FBYyxHQUFkO1FBQ0UsT0FBTyxDQUFDLHdCQUF3QixDQUFDLENBQUM7SUFDcEMsQ0FBQztJQUNELG9DQUFpQixHQUFqQjtRQUNFLE9BQU8sQ0FBQywyQkFBMkIsQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7SUFDSCxlQUFDO0FBQUQsQ0FBQztBQUVEO0lBQUE7SUFVQSxDQUFDO0lBVEMsOEJBQVksR0FBWjtRQUNFLE9BQU8sQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDO0lBQ25DLENBQUM7SUFDRCxnQ0FBYyxHQUFkO1FBQ0UsT0FBTyxDQUFDLHFCQUFxQixDQUFDLENBQUM7SUFDakMsQ0FBQztJQUNELGtDQUFnQixHQUFoQjtRQUNFLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO0lBQzdCLENBQUM7SUFDSCxjQUFDO0FBQUQsQ0FBQztBQUVELFNBQVMsY0FBYyxDQUFFLE1BQXVCO0lBQzlDLElBQUksT0FBTSxDQUFDLE1BQU0sQ0FBQyxLQUFLLFFBQVEsSUFBSSxNQUFNLEdBQUcsR0FBRyxFQUFHO1FBQ2hELE9BQU8sSUFBSSxPQUFPLENBQUM7S0FDcEI7U0FBTTtRQUNMLE9BQU8sSUFBSSxRQUFRLENBQUM7S0FDckI7QUFDSCxDQUFDO0FBQ0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztBQUNqQyxPQUFPLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0FBQ2xDLE9BQU8sQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90eXBlc2NyaXB0X2RlcGVuZGVuY2llcy8uL2pzL21haW4udHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW50ZXJmYWNlIERpcmVjdG9ySW50ZXJmYWNle1xuICB3b3JrRnJvbUhvbWUoKTogc3RyaW5nO1xuICBnZXRDb2ZmZWVCcmVhaygpOiBzdHJpbmc7IFxuICB3b3JrRGlyZWN0b3JUYXNrcygpOiBzdHJpbmc7XG59XG5cblxuaW50ZXJmYWNlIFRlYWNoZXJJbnRlcmZhY2Uge1xuICB3b3JrRnJvbUhvbWUoKTogc3RyaW5nO1xuICBnZXRDb2ZmZWVCcmVhaygpOiBzdHJpbmc7XG4gIHdvcmtUZWFjaGVyVGFza3MoKTogc3RyaW5nO1xufVxuXG5cbmNsYXNzIERpcmVjdG9yIGltcGxlbWVudHMgRGlyZWN0b3JJbnRlcmZhY2Uge1xuICB3b3JrRnJvbUhvbWUoKSB7XG4gICAgcmV0dXJuICgnV29ya2luZyBmcm9tIGhvbWUnKTtcbiAgfVxuICBnZXRDb2ZmZWVCcmVhaygpIHtcbiAgICByZXR1cm4gKCdHZXR0aW5nIGEgY29mZmVlIGJyZWFrJyk7XG4gIH1cbiAgd29ya0RpcmVjdG9yVGFza3MoKSB7XG4gICAgcmV0dXJuICgnR2V0dGluZyB0byBkaXJlY3RvciB0YXNrcycpO1xuICB9XG59XG5cbmNsYXNzIFRlYWNoZXIgaW1wbGVtZW50cyBUZWFjaGVySW50ZXJmYWNlIHtcbiAgd29ya0Zyb21Ib21lKCl7XG4gICAgcmV0dXJuICgnQ2Fubm90IHdvcmsgZnJvbSBob21lJyk7XG4gIH0gXG4gIGdldENvZmZlZUJyZWFrKCkge1xuICAgIHJldHVybiAoJ0Nhbm5vdCBoYXZlIGEgYnJlYWsnKTtcbiAgfSBcbiAgd29ya1RlYWNoZXJUYXNrcygpIHtcbiAgICByZXR1cm4gKCdHZXR0aW5nIHRvIHdvcmsnKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBjcmVhdGVFbXBsb3llZSAoc2FsYXJ5OiBudW1iZXIgfCBzdHJpbmcpOiBEaXJlY3RvciB8IFRlYWNoZXIge1xuICBpZiAodHlwZW9mKHNhbGFyeSkgPT09ICdudW1iZXInICYmIHNhbGFyeSA8IDUwMCkgIHtcbiAgICByZXR1cm4gbmV3IFRlYWNoZXI7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIG5ldyBEaXJlY3RvcjtcbiAgfVxufVxuY29uc29sZS5sb2coY3JlYXRlRW1wbG95ZWUoMjAwKSk7XG5jb25zb2xlLmxvZyhjcmVhdGVFbXBsb3llZSgxMDAwKSk7XG5jb25zb2xlLmxvZyhjcmVhdGVFbXBsb3llZSgnJDUwMCcpKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==