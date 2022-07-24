const { format } = require('date-fns')
const { v4: uuid } = require('uuid')
const fs = require('fs')
const fsPromises = require('fs').promises
const path = require('path')


const logEvents = async(message) => {
    const dataTime = `${format(new Date(), 'yyymmdd\tHH:mm:ss')}`
    const logItem = `${dateTime}\t${uuid()}\t${message}`
    console.log(logItem)
    try {
        await fsPromises.appendFile(path.join(__dirname, 'logs', 'eventlog.txt'), logItem)
    } catch (error) {
        console.log(error)
    }
}

console.log(format(new Date(), 'yyymmdd\tHH:mm:ss'))

console.log(uuid())

module.exports = logEvents