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

// fs.writeFile(path.join(__dirname, 'reply.txt'), "happy birthday", (err) => {
//     if (err) throw err;
//     console.log('Write complete')
// })

// fs.appendFile(path.join(__dirname, 'reply2.txt'), "\n \nhappy birthday", (err) => {
//     if (err) throw err;
//     console.log('Write complete')
// })

// using Async

const fileOps = async() => {
    try {
        const data = await fsPromises.readFile(path.join(__dirname, 'files', 'starter.txt'), console.log(data))
        await fsPromises.unlink(path.join(__dirname, 'files', 'starter.txt'))
        await fsPromises.writeFile(path.join(__dirname))
    } catch (error) {}
}