const fs = require('fs')

// fs.mkdir('./new', (err) => {
//     if (err) throw err
//     console.log('Directory created')
// })

// check if the file exist

if (!fs.existsSync('./new')) {
    fs.mkdir('./new', (err) => {
        if (err) throw err
        console.log('Directory created')
    })
}

// remove dir
if (fs.existsSync('./new')) {
    fs.rmdir('./new', (err) => {
        if (err) throw err
        console.log('Directory removed')
    })
}