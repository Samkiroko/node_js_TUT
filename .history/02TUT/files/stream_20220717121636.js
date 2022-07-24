const fs = require('fs')

const rs = fs.createReadStream('lorem.txt', { encoding: 'utf8' })

const we = fs.createWriteStream('new-lorem.txt')

rs.on('data', (dataChunk) => {
    WSH.write(dataChunk)
})