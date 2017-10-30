//If you have multiple fuctions on an import, then you can use an object

module.exports = {
    circumference: function (radius) {
        return 2 * Math.PI * radius;
    },

    area: function(radius) {
        return Math.PI * radius * radius;
    }
};