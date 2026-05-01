//Declaration fn

function declerations(){
    console.log("I Am A Decleration Function");
    };

declerations();

//expression fn

const expression = function exp(){
        console.log(`I am a n expression function`);
        
    };

expression();

//Arrow fn

const arr = () =>{
    console.log(`I am an arrow function`);
    
};

arr();

//IIFE fn

(function(){
    console.log(`I an an IIFE function`);
    
})();

//callback fn , is also a higer order fn coz either return or take as parameter

function call(name, back){
console.log(`I am a  callback fn`);
console.log(`hello ${name}`);
back();
}
 function bye(){
    console.log(`BYEEEEEEE`);
    
 }

 call("Khan" , bye)