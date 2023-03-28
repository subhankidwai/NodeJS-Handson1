const http = require('http')

let data={
    Name:'Subhan',
    Batch:'EA18',
    Status:'Active'
}

const server=http.createServer((req,res)=>{
    if(req.url==='/'){
        res.write(`<body style='text-align:center'><h1>Welcome to Server Home.</h1><h4>Node.js is a cross-platform, open-source server environment that can run on Windows, Linux, Unix, macOS, and more. Node.js is a back-end JavaScript runtime environment, runs on the V8 JavaScript Engine, and executes JavaScript code outside a web browser.</h4> <h1><a href='./about'>About Page</a></h1></body>`)
        res.end()
    }else if(req.url==='/about'){
        res.write(`<body style='text-align:center'><h1><a href='/contact'>Contact Page</a></h1></body>`)
        res.write(JSON.stringify(data))
        res.end()
    }else if(req.url==='/contact'){
        res.write(`<body style='text-align:center'><h1>Contact Server. <br/><a href='/'>Home</a></h1><body/>`)
        res.end()
    }else{
        res.writeHead(404)          // Assign Error or Status Code
        res.end('Error')
    }
});

server.listen(3000,()=>{
    console.log('http://localhost:3000/')
})