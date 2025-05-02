import colors from 'colors'
const logger = (req, res, next) => {
    const methodColors = {
        GET: 'green',
        POST: 'red'

    }
    const color = methodColors[req.method] || white
    console.log(`${req.method}://${req.get('host')}${req.originalUrl}` [color])
    //console.log("loggg")
    next()
}

export default logger;