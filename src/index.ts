interface IRequired {
    default: {
        value: string;
    }
}

interface IRestriction {
    required?: IRequired;
    codeList?: string;
    regExp?: string;
    script?: string;
    foreignKey?: string;
    unique?: boolean;
}

interface IDictionaryField {
    name: string;
    description: string;
    restriction: IRestriction;
}

interface IDictionaryFile {
    name: string;
    description: string;
    fields: IDictionaryField[];
}



const donorSchema = require('/home/dandric/scratch/dictionary/donorSchema.json') as IDictionaryFile;

//console.log(donorSchema.fields);


const evalTest = (row: any, ctx: any, func: string) : boolean => {
    return eval(func) || false;
};

console.log(evalTest("22", "field.length > 3"));


ctx.icd10Code().contains(row.icd10_code)