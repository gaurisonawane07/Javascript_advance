//falsy values
//false,0,-0,BigInt 0n,"",null,undefined,NaN

//truthy values
//"0",'false',"  ",[],{},function(){}
const userEmail = "gauri@03";
if(userEmail.length === 0){
    console.log("Array is empty");
}

//nullish coalscing Operator(??):null undefined
let val1;
val1 = 5 ?? 10
console.log(val1);
let val2 = null ?? 10;
console.log(val2);

//terniary operator

const iceTeaPrice = 100
iceTeaPrice>= 80 ? console.log("Less Than 80"):console.log("More then 80");