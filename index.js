const Ajv = require('ajv');
const argoSchema = require('./argo-schema.json');
const donorSchema = require('./donor-schema.json');

var ajv = new Ajv(); // options can be passed, e.g. {allErrors: true}
var validate = ajv.compile(argoSchema);
var valid = validate(donorSchema);
if (!valid) console.log(validate.errors);
