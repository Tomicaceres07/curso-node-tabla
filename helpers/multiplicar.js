const fs = require('fs');
const colors = require('colors');


const crearArchivo = async(base = 5, listar = false, hasta = 10) => {

    try {
        let salida = '';
        let consola = '';

        for (let i = 1; i <= hasta; i++) {
            salida += `${base} x ${i} = ${base*i}\n`;
            consola += `${base} ${'x'.green} ${i} = ${base*i}\n`;
        }
        if (listar) {
            console.log('==============='.green);
            console.log('   Tabla del:'.green, colors.blue(base));
            console.log('==============='.green);
            console.log(consola);
        }
        const nombreArchivo = `./salida/tabla-${base}.txt`;

        fs.writeFileSync( nombreArchivo, salida);


        return nombreArchivo;

    } catch (error) {
        throw error;
    }

}

module.exports = {
    crearArchivo
}