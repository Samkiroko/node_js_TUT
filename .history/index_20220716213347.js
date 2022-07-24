const fs = require('fs')

fs.readFile("./02TUT/files/starter.txt", (err, data) => {
    if (err) throw err;
    console.log(data)
})