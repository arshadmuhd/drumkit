// function handleclick(){
//     alert("hello")
// }
var key
var numberDrumBtn=document.querySelectorAll(".drum").length;
for(var i=0;i<numberDrumBtn;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
        var buttonInnerHtml=this.innerHTML;
        switch(buttonInnerHtml){
            case 'q'&&'Q':var tom1=new Audio("./sounds/tom-1.mp3")
            tom1.play();
            break;
        
            case 'w'&&'W':var tom2=new Audio("./sounds/tom-2.mp3")
            tom2.play();
            break;
        
            case 'e'&&'E':var tom3=new Audio("./sounds/tom-3.mp3")
            tom3.play();
            break;
            
            case 'r'&&'R':var tom4=new Audio("./sounds/tom-4.mp3")
            tom4.play();
            break;
        
            case 't'&&'T':var snare=new Audio("./sounds/snare.mp3")
            snare.play();
            break;
        
            case 'y'&&'Y':var kick=new Audio("./sounds/kick-bass.mp3")
            kick.play();
            break;
        
            case 'u'&&'U':var crash=new Audio("./sounds/crash.mp3")
            crash.play();
            break;
        
            default:break;
        

        }

       
        // document.querySelectorAll(".drum")[i].addEventListener("click",function(){
        //     alert("i got clicked")
    })
}
// }
// var i=0;
// while(i<numberDrumBtn){

//     document.querySelectorAll("button")[i].addEventListener("click",function(){
//         var audio=new Audio("/sounds/crash.mp3")
//         audio.play();
//         i++;
//         // document.querySelectorAll(".drum")[i].addEventListener("click",function(){
//         //     alert("i got clicked")
//     })

// }

// document.querySelectorAll(".drum").classList.add(".w")


// function bellBoy1(name,age){
//     this.name;
//     this.age;
// }
// var bellboy=new bellBoy1("arshu",function(){
//     alert("hi this is constructed function method")
// })

// console.log(bellboy)
// document.addEventListener("keypress",function(event){
    

//     switch(event.key){
//         case 'q':var tom1=new Audio("./sounds/tom-1.mp3")
//         tom1.play();
//         break;
    
//         case 'w':var tom2=new Audio("./sounds/tom-2.mp3")
//         tom2.play();
//         break;
    
//         case 'e':var tom3=new Audio("./sounds/tom-3.mp3")
//         tom3.play();
//         break;
        
//         case 'r':var tom4=new Audio("./sounds/tom-4.mp3")
//         tom4.play();
//         break;
    
//         case 't':var snare=new Audio("./sounds/snare.mp3")
//         snare.play();
//         break;
    
//         case 'y':var kick=new Audio("./sounds/kick-bass.mp3")
//         kick.play();
//         break;
    
//         case 'u':var crash=new Audio("./sounds/crash.mp3")
//         crash.play();
//         break;
    
//         default:break;
    
//     }
   
// })



document.addEventListener("keypress",function(event){
    makesound(event.key)
})

function makesound(key){
    
    switch(event.key){
        case 'q':var tom1=new Audio("./sounds/tom-1.mp3")
        tom1.play();
        break;
    
        case 'w':var tom2=new Audio("./sounds/tom-2.mp3")
        tom2.play();
        break;
    
        case 'e':var tom3=new Audio("./sounds/tom-3.mp3")
        tom3.play();
        break;
        
        case 'r':var tom4=new Audio("./sounds/tom-4.mp3")
        tom4.play();
        break;
    
        case 't':var snare=new Audio("./sounds/snare.mp3")
        snare.play();
        break;
    
        case 'y':var kick=new Audio("./sounds/kick-bass.mp3")
        kick.play();
        break;
    
        case 'u':var crash=new Audio("./sounds/crash.mp3")
        crash.play();
        break;
    
        default:break;
    
    }

}