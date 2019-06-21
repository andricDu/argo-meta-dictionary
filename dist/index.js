"use strict";
var donorSchema = require('/home/dandric/scratch/dictionary/donorSchema.json');
//console.log(donorSchema.fields);
var evalTest = function (field, func) {
    return eval(func) || false;
};
console.log(evalTest("22", "field.length > 3"));
//# sourceMappingURL=index.js.map