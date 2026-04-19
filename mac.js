const fs = require('fs');

fs.readFile('package.json', 'utf-8', (err, contenidoStr) => {
    if (err) {
        return console.error('Error lectura:', err.message);
    }

    try {
        const contenidoObj = JSON.parse(contenidoStr);

        fs.stat('package.json', (err, stats) => {
            if (err) {
                return console.error('Error stats:', err.message);
            }

            let info = {
                contenidoStr,
                contenidoObj,
                size: stats.size
            };

            console.log(info);

            fs.writeFile('info.txt', JSON.stringify(info, null, '\t'), (err) => {
                if (err) {
                    return console.error('Error escritura:', err.message);
                }
            });
        });

    } catch (error) {
        console.error('Error parse:', error.message);
    }
});