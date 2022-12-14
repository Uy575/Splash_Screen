const {body} = document;

function changingBg(numbers){
   
    console.log(numbers);
    if(numbers == 1){
       (body.className === "firstBg")? body.className = " " : body.classList.add("firstBg");
        body.classList.replace("secondBg","firstBg");
        body.classList.replace("thirdBg","firstBg");
    }
 
    if(numbers == 2){
        (body.className =" ")? body.classList.add("secondBg") : false;
        body.classList.replace("firstBg","secondBg");
        body.classList.replace("thirdBg","secondBg");
        
    }

    if(numbers == 3){
        (body.className =" ")? body.classList.add("thirdBg") : false;
        body.classList.replace("secondBg","thirdBg");
         body.classList.replace("firstBg","thirdBg");
    
    }
}