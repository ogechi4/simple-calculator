let result = document.getElementById('inputext');
let calculate = (number)=>{
   result.value = result.value + number;
}
let Result = ()=>{
   try{
      result.value = eval(result.value)
   }
   catch(err){
      alert("Enter the valid input");
   }
}
let clr=()=>{
   result.value=" ";
}
function del(){
   result.value=result.value.slice(0,-1);
}