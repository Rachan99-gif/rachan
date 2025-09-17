const readline =require("readline");
const r1=readline.createInterface({
    input: process.stdin,
    output:process.stdout
});
r1.question("Enter the first number:",(num1)=>{
    r1.question("Enter the second number:",(num2)=>{
        num1=Number(num1);
        num2=Number(num2);

        let sum=num1 +num2;
        console.log("The sum is",sum);
        r1.close();
    })
})  