let A=[1,2,3,4,5,6,7]

let B=[9,6,4,2,1]

function Medain(a,b){
   let aa=a.length
   let bb=b.length
   let sum=aa+bb
   if(sum%2===0){
   	 return parseInt((sum + 1)/2)
   }else{
     return parseInt(sum/2)
   }
}

let result=Medain(A,B)
console.log(result)