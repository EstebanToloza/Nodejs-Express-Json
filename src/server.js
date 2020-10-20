const { get } = require('./app')
const app = require('./app')

async function main () {
    await app.listen(app.get('port'))
    console.log('server', app.get('port'))
}

main()