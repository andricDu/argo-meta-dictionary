const Ajv = require('ajv');
const argoSchema = require('./argoMetaSchema.json');
const donorSchema = require('./donorSchema.json');

var ajv = new Ajv(); // options can be passed, e.g. {allErrors: true}
var validate = ajv.compile(argoSchema);
var valid = validate(donorSchema);
if (!valid) console.log(validate.errors);
