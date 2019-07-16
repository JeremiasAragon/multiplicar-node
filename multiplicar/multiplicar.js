const fs = require('fs');
const colors = require('colors');

let createFile = (base, limit) => {
    return new Promise((resolve, reject) => {

        if(!Number(base) || !Number(limit)) {
            reject('La base o el límite no son valores numéricos.');
            return;
        }

        let data = '';
        
        for (let i = 1; i <= limit; i++) {
            data += `${base} * ${i} = ${(base * i)}\n`;
        }
        
        fs.writeFile(`tablas-multiplicar/tabla-${base}.txt`, data, (err) => {
            if (err) { 
                reject(err);
            } else {
                resolve(`tabla-${base}.txt`);
            }
        });
    });
}

let showTable = async (base, limit) => {

    if(!Number(base) || !Number(limit)) {
        throw new Error('La base o el límite no son valores numéricos.');
    }

    let data = ''
    
    for(let i = 1; i <= limit; i++) {
        data += `${base} * ${i} = ${(base * i)}\n`;
    }

    return data;
}

module.exports = {
    createFile,
    showTable
};
