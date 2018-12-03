/***
 *     每个函数都有protoType的属性 这个属性是一个指针，指向一个对象
 *     指向的对象用途： 是包含可以由特定类型的实例共享的属性和方法。
 *  
 */



//  原型的方式
// function Person() {
      
// }
  
// Person.prototype.name = "tj";
// Person.prototype.age = "20";
// Person.prototype.fun = function () {
//     console.log("this.name")
// }


//  优化通过Protype的方式添加的属性和方法
// Person.prototype = {
//     name = "tj",
//     age = "20",
//     fun = function () {
//             console.log("this.name")
//     }
// }
  

// var tjs = new Person();




/***
 * 
 * 最优解决  构造函数的方式和原型的方式结合
 * 
 */

function Person(name, age, job) {
    this.name = name;
    this.age = age;
    this.job = job;
    this.sayName = function() {
        alert(this.name)
    }
}

Person.prototype = {
    sayJob : function() {
        console.log(this.job);
    }
}

var person1 = new Person('tj', 22 , 'fe');