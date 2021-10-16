
// polyphill for reverse
Array.prototype.kReverse=function(){
    let newArr =[];
    for(let i=this.length-1;i>=0;i--){
      newArr.push(this[i]);
    }
    return newArr;
  }
  
  let arr = [7,5,6,9,241,789045,6784];
  console.log("newReverse -- ",arr.kReverse()) // done by me
  console.log("Inbuilt reverse -- ",arr.reverse()) // inbuilt


// Polyphill for split
let str = "my-name-is-krishna";
String.prototype.newsplit = function(del){
    let newStr = this.replaceAll(del,"/");
    // console.log(newStr);
    let arr = [];
    if(del === ""){
      for(let char of this){
       arr.push(char)
      }
    }
    else if(newStr.includes("/")){
      let pointer1=0,pointer2;
      for(let i=0;i<newStr.length;i++){
        if(newStr.charAt(i) === "/"){
          pointer2=i;
          arr.push(newStr.slice(pointer1,pointer2));
          pointer1=pointer2+1;
        }
      }
      arr.push(newStr.slice(pointer2+1))
    }
    else{
      arr.push(this);
    }
    return arr;
}

console.log("newsplit -- ",str.newsplit("-")); // self made 
console.log("Inbuilt split -- ",str.split("-")); // Inbuilt

// polyphill for join
let arr = [4,6,7,8,777,412345,455545];

Array.prototype.krishnaJoin = function(separate) {
  let str = "";
  if(separate === "") {
    for(let i of this){
        str+=i
    }

  }else if(separate === undefined){
    for(let i of this){
        str+=i + ","
    }
  }else{
      for(let i of this){
          str+=i + separate
      }
  }
  let a =  str.slice(0,str.indexOf(this[this.length - 1])) + this[this.length - 1]

   if(separate===""){
     return str;
   }else{
     return a
   }

}

console.log("KrishnaJoin --- ",arr.krishnaJoin("$")) // done by me(Krishna)
console.log('Inbuilt Join --- ',arr.join("$")); // inbulit




