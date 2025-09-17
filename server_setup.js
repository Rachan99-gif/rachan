import http from 'http';
let a=10;
let b=20;
let sum=a+b;
console.log("The sum is",sum);
const server=http.createServer((req,res)=>{
    res.write("Mern Stack SDP");
    res.end('The sum is:',sum);
});
server.listen(3000,()=>{
    
    console.log("Server is running on http://localhost:3000");
});