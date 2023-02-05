const http = require('http')

const server = http.createServer((request, response) => {
    console.log('Alguien me hizo una peticion . . .')
    //response.end('Hola mundo')
    response.end({ name: "Shakira" })
})

server.listen(8080, () => console.log('Server up!'))
