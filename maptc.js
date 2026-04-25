const fs = require('fs').promises;

fs.readFile('package.json', 'utf-8')
    .then(contenidoStr => {
        const contenidoObj = JSON.parse(contenidoStr);

        return fs.stat('package.json')
            .then(stats => {
                const info = {
                    contenidoStr,
                    contenidoObj,
                    size: stats.size
                };

                console.log(info);

                return fs.writeFile('info.txt', JSON.stringify(info, null, '\t'));
            });
    })
    .catch(error => {
        console.error('Error:', error.message);
    });