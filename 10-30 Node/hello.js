console.log('hello world!');

for (var i=0; i < process.argv.length; i++) {
    console.log("== argument", i, ":", process.argv[i]);
}

console.log("== MY_ENV_VARIABLE:", process.env.MY_ENV_VARIABLE);
console.log("_dirname:", __dirname);
console.log("_filename:", __filename); // two underscores

var fs = require('fs');

var circumference = require('./circumference');

console.log("== circumference of radius 4:", circumference(4));

var circle = require('./lib/circle.js');

console.log("== circle.area(4):", circle.area(4));
console.log("== circle.circumference(4):", circle.circumference(4));

var figlet = require('figlet');

figlet('Carter', function (err, data) {
    //if we have data with no errors then print it.
    if (data) {
        console.log(data);
    }
});
