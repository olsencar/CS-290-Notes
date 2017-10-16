console.log("Javascript is being ran");

var thisIsAVariable;

var i = 16;
var pi = 3.1415;

var str = "abc";

var bool = true;
var boolf = false;

var array = [1, 2, 3, 4];

var func = function() { console.log("within func()") };
func();

console.log("typeof(t):", typeof(bool));

// all division is floating point division in JS
console.log("2 == '2':", 2 == '2');
console.log("2 === '2':", 2 === '2');
console.log("2 !== '2':", 2 !== '2');
console.log("2 !== 2:", 2 !== 2);

console.log("");
console.log("==================== Strings");

var str1 = "This is a string";
var str2 = 'This is also a string';
var greeting = "Hello, my name is: ";
var name = "Carter";
var greeting = greeting + name;
console.log("Greeting:", greeting);
console.log("Greeting.length:", greeting.length);

console.log("Decathalon.indexOf('cat')", "Decathalon".indexOf('cat'));
console.log("Decathalon.indexOf('team')", "team".indexOf('i'));

console.log("'I love dogs. Replace dog with cat", 'I love dogs'.replace('dog', 'cat'));

console.log("");
console.log("==================== Arrays");

var array1 = [1, 2, 3];
console.log(array1);
var arr2 = [1, true, "three"];
console.log("arr2:", arr2);

for (var j = 0; j < arr2.length; j++) {
    console.log("arr2[" + j + "]", arr2[j]);
}

console.log("'1,2,3,4'.split(',')", '1,2,3,4'.split(','));
console.log("'1,2,3,4'.join(',')", [1,2,3,4].join(','));
function printArrayElem(elem, idx) {
    console.log("Element at index", idx, "is:", elem);
}
// Loops through array and passes each element to function
// First param of function is going to be element and second is the index
arr2.forEach(printArrayElem);

function multBy2(val){
    return val * 2;
}

var arr1Times2 = array1.map(multBy2);
console.log("array1times2:", arr1Times2);

array1.push(4);
array1.push(5);
console.log("Array1 new:", array1);

array1.pop();
array1.pop();
console.log("Array1 new:", array1);
//adds to left
array1.unshift(-4);
array1.unshift(-5);
console.log("Array1 new:", array1);
//adds to right
array1.shift();
console.log("Array1 new:", array1);

// FUNCTOINS ****************************************************************************************
console.log("");
console.log("============================ Functions");

function addThreeThings(a, b, c) {
    return a + b + c;
}

console.log("addThreeThings(1, 2, 3):", addThreeThings(1, 2, 3));
console.log("addThreeThings('1', '2', '3'):", addThreeThings('1', '2', '3'));

function addManyThings() {
    var sum = arguments[0];
    for (var i = 1; i < arguments.length; i++) {
        sum += arguments[i];
    }
    return sum;
}

console.log("addManyThings(1, 2, 3):", addManyThings(1, 2, 3));
console.log("addManyThings(1, 2, 3):", addManyThings(1, 2, 3, 4, 5));
var val = 5;
array1.forEach( function(elem){
    val += elem;
    console.log(val);

});
// OBJECTS **************************************************************************************
console.log("");
console.log("============================ Objects");

var luke = {
    // Key: value
    firstName: "Luke",
    lastName: "Skywalker",
    age: 22,
    getFullName: function() {
        return this.firstName + " " + this.lastName;
    }

};

console.log("luke['firstName']", luke['firstName']);
console.log("luke.lastName:", luke.lastName);

var key = 'lastName';
console.log("luke[key]:", luke[key]);