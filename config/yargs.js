const opts = {
    base: { demand: true, alias: 'b' },
    limit: { alias: 'l', default: 10 } 
}

const argv = require('yargs')
    .command('listar', 'Imprime en consola la tabla de multiplicar requerida', opts)
    .command('crear', 'Crea un archivo de texto que contiene la tabla de multiplicar requerida', opts)
    .help()
    .argv;

module.exports = {
    argv
}