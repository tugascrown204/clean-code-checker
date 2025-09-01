// Clean Code Checker Entry Point

const { analyzeCode } = require('./analyzer');

function run(args) {
    const codeBasePath = args[0];
    analyzeCode(codeBasePath);
}

if (require.main === module) {
    run(process.argv.slice(2));
}