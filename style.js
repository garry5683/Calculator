//displayNumber()
// function displayNumber(num){
//     inpt.value+=num;
// }
            //OR
let displayNumber=(num)=>inpt.value+=num

// evaluateExpression()
// function evaluateExpression(){
//     let res=eval(inpt.value)
//     inpt.value=res;
// }
            //OR
//let evaluateExpression=()=>inpt.value=eval(inpt.value)
//or
//let evaluateExpression=()=>inpt.value==""?inpt.value=0:inpt.value=eval(inpt.value)
//or
let evaluateExpression=()=>{
    if(inpt.value==""){
        inpt.value=0
    }
    //for exeptional cases try catch is used 
    else{
        try{
            inpt.value=eval(inpt.value)
        }
        catch{
            inpt.value="error"
        }
    }
}

// clearBox()
// function clearBox(){
//     inpt.value="";
// }
            //OR
let clearBox=()=>inpt.value=""

// removeNumber()
// function removeNumber(){
//     inpt.value=inpt.value.slice(0,-1)
// }
            //OR
let removeNumber=()=>inpt.value=inpt.value.slice(0,-1)