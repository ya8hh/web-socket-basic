const http = require("http");
const express = require ('express');
const app = express();
const path = require("path");
const { Server} = require("socket.io");
const server = http.createServer(app);
const io = new Server(server);
app.use(express.static(path.resolve("./public")));



//server.io
io.on('connection',(socket)=>{
    socket.on("user-message",(message)=>{
        io.emmit("message",message);
    });
});



app.get('/',(req,res)=>{
    return res.sendFile('/public/index.html')
})

server.listen(9000,()=>{
    console.log(`Server Started At https://localhost:${9000}`);
    
})

