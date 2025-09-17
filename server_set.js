const http = require('http');
const server= http.createServer((req,res)=>{
    res.end('hello dncnk ekmcolmc');

});
server.listen(3001,()=> {
    let a=3;
    let b=4;
    let sum=a+b;
    console.log(`the sum of ${a} and ${b} is ${sum}`);
    console.log("sever is running on http://localhost:3000");

});