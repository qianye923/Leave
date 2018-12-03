
/**
 * 工厂模式
 * @param {} name 
 * @param {*} age 
 */
function createPerson(name, age) {
    var newObj = new Object();
    newObj.name = name;
    newObj.age = age;
    newObj.fun = function () {
        console.log("object start")
    };
    return newObj;
}


var person1 = createPerson("20181203开始的时间", 26)
var person2= createPerson("lcf", 26)
console.log(person1)
console.log(person2)






/**
 * 构造函数的方式
 */

function Person(name, age) {
    this.name = name;
    this.age = age;
    this.sayName = function() {
        console.log(this.name)
    };
}
var tj2 = new Person('tj2', 23)
console.log(tj2)