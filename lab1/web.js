//khai báo module http  
const http = require('http')
//khai báo server host
const host = 'localhost'  //127.0.0.1
//khai báo server port
const port = 5000
//tạo web server
const server = http.createServer((request, respond) => {
   respond.end('Hello everyone. I am learning NodeJs !')
})
//chạy server
server.listen(port, () => {
   console.log('Server is running at http://' + host + ":" + port)
})
