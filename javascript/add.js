function calculate(){
    let num1=document.querySelector("#num1").value
    let num2=document.querySelector("#num2").value
    let sum=parseInt(num1)+parseInt(num2)
    console.log(sum);
    let result= document.querySelector("h1")
    result.innerHTML=sum
    
}