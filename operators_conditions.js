function Operator (){
 console.log(5=="5");
  console.log(5==="5");

age = 19;
if(age >= 18){
     console.log("Adult");
}else{
     console.log("minor");
}

isLoggedIn = false;
console.log(isLoggedIn ? "welcome" : "Join Fast man")

let day = "sun";

switch (day) {
    case "sun" :
    case "sat" : console.log("weekend");
    break;
    case "mon" : console.log("weekday");
    break;
    default: console.log("enter a valid day");
}

};
Operator();