const { createFile, showTable } = require('./multiplicar/multiplicar');
const { argv } = require('./config/yargs');
const colors = require('colors');


let command = argv._[0];

switch(command) {
    case 'listar':
        showTable(argv.base, argv.limit)
            .then(table => console.log(table))
            .catch(err => console.log(err));
    break;
    case 'crear': 
        createFile(argv.base, argv.limit)
            .then(archivo => console.log(`Archivo ${archivo} creado correctamente`.rainbow))
            .catch(err => console.log(err));
    break;
    default:
        console.log('Comando no reconocido');
}

