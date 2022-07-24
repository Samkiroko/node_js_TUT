const fs = require('fs')
const path = require('path')

fs.readFile("./starter.txt", "utf8", (err, data) => {
    if (err) throw err;
    console.log(data)
})