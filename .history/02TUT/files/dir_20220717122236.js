import fs from 'fs';

fs.mkdir('./new', (err) => {
    if (err) throw err
    console.log('Directory created')
})