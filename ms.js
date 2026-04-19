const fs = require('fs');

try {
    const contenidoStr = fs.readFileSync('package.json', 'utf-8');

    const contenidoObj = JSON.parse(contenidoStr);

    const size = fs.statSync('package.json').size;

    let info = {
        contenidoStr,
        contenidoObj,
        size
    };

    console.log(info);

    fs.writeFileSync('info.txt', JSON.stringify(info, null, '\t'));

} catch (error) {
    console.error('Error:', error.message);
}