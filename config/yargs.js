require('colors');
const argv = require('yargs')
                .option('b', {
                    alias: 'base',
                    type: 'number',
                    demandOption: true,
                    describe: 'Es la base de la tabla de multiplicar'.green
                })
                .option('l', {
                    alias: 'listar',
                    type: 'boolean',
                    default: false,
                    describe: 'Muestra la tabla en consola'.grey
                })
                .option('h',{
                    alias: 'hasta',
                    type: 'number',
                    default: 10,
                    describe: 'Es hasta que numero queres que llegue la tabla'.red
                })
                .check((argv,options) =>{
                    if (isNaN(argv.b)) {
                        throw 'La base tiene que ser un numero'
                    }
                    return true;
                })
                .argv;


module.exports = argv;