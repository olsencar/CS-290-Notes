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