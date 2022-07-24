const fs = require('fs')
const path = require('path')

// fs.readFile("./starter.txt", "utf8", (err, data) => {
//     if (err) throw err;
//     console.log(data)
// })


// fs.readFile(path.join(__dirname, 'reply.txt'), (err, data) => {
//     if (err) throw err;
//     console.log(data)
// })

fs.writeFile(path.join(__dirname, 'reply.txt'), "happy birthday", (err) => {
    if (err) throw err;
    console.log('Write complete')
})