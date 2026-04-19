const readline = require('readline');
const { exec } = require('child_process');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function mostrarMenu() {
    console.log('\n===== MENÚ TP2 FILESYSTEM =====');
    console.log('1. Ejecutar ms.js (sincrónico)');
    console.log('2. Ejecutar mac.js (callbacks)');
    console.log('3. Ejecutar maptc.js (promises then/catch)');
    console.log('4. Ejecutar mapaa.js (async/await)');
    console.log('0. Salir');

    rl.question('Elegí una opción: ', (opcion) => {
        ejecutarOpcion(opcion);
    });
}

function ejecutarOpcion(opcion) {
    let comando = '';

    switch (opcion) {
        case '1':
            comando = 'node ms.js';
            break;
        case '2':
            comando = 'node mac.js';
            break;
        case '3':
            comando = 'node maptc.js';
            break;
        case '4':
            comando = 'node mapaa.js';
            break;
        case '0':
            console.log('Saliendo...');
            rl.close();
            return;
        default:
            console.log('Opción inválida');
            return mostrarMenu();
    }

    exec(comando, (error, stdout, stderr) => {
        if (error) {
            console.error(`Error: ${error.message}`);
        } else if (stderr) {
            console.error(`Stderr: ${stderr}`);
        } else {
            console.log('\n--- Resultado ---');
            console.log(stdout);
        }

        mostrarMenu();
    });
}

mostrarMenu();