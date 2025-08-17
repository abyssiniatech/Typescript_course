// types in 
// 1 string 


let name="suraele";
let bro:string="Welocome to me";
// by default if the variable declare like these typescript compiler know about
const address ="Hello these is the best app"

// numbers
let num1=12;
const num2:number=23;
const num3:number=0;

// boolean type
let isMarried=true;
// isMarried=12   // errors are happened 


// Array type
let nums=[1,2,3,4,5,6,7];  //the first method
let numbers:number[] = [12,34,45,56,67]
// you can redeclare the same values if the array is number only push number array


// object type
const obj={
    name:"surafel",
    age:23,
    Country:"Ethiopia"
}

// if declare different data types you can execute errors 
    //   example obj.age="9"

// another way to declare objects

type obj1={
    name:string,
    age:number,
}
const obj1={
    name:"surafel mengist",
    age:28,
}


//  2 types allies in typescript
type userTypes={
    name:string,
    age:number,
    isMarried:boolean,
}

 function types(user:userTypes){
    const info=console.log(`my name is ${name} and i am ${age} and  ${isMarried}`)
 }
 types({name:"surafel", age:34, isMarried:true})





//  function   in typescript
function Sayhello(num1:number){
   return num1*3
}
Sayhello("12")

