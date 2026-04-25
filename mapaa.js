const fs = require('fs').promises;

async function main() {
    try {
        const contenidoStr = await fs.readFile('package.json', 'utf-8');

        const contenidoObj = JSON.parse(contenidoStr);

        const stats = await fs.stat('package.json');

        let info = {
            contenidoStr,
            contenidoObj,
            size: stats.size
        };

        console.log(info);

        await fs.writeFile('info.txt', JSON.stringify(info, null, '\t'));

    } catch (error) {
        console.error('Error:', error.message);
    }
}

main();