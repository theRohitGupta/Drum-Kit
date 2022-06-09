$(window).on('load',function(){
    $('#PRELOADER').delay(1000);
    $('#PRELOADER').fadeOut(1000);
    $('#CONTENT').fadeIn(1000);
})



// detecting Mouse Press

for(var i=0;i<document.querySelectorAll(".drum").length;i++)
    {
        document.querySelectorAll(".drum")[i].addEventListener("click",function(){
            makeSound(this.innerHTML);         
        });

    }

// detcting Keyboard Press

document.addEventListener("keypress",function(event){
    makeSound(event.key);
});

// Make Sound From Here

function makeSound(key)
{
    switch (key) 
            {
            case "w":
            case "W":
            var tom3=new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
            
            case "a":
            case "A":
                var kick=new Audio("sounds/kick-bass.mp3");
                kick.play();
                break;

            case "s":
            case "S":
                var tom1=new Audio("sounds/tom-1.mp3");
                tom1.play();
                break;

            case "d":
            case "D":
                var snare=new Audio("sounds/snare.mp3");
                snare.play();
                break;

            case "j":
            case "J":
                var tom2= new Audio("sounds/tom-2.mp3");
                tom2.play();
                break;

            case "k":
            case "K":
                var crash= new Audio("sounds/crash.mp3")
                crash.play();
                break;

            case "l":
            case "L":
                var tom4= new Audio("sounds/tom-4.mp3");
                tom4.play();
                break;

            default:
                console.log("this.innerHTML")
                break;
            }
}



// for( var i=0;i<document.querySelectorAll(".drum").length;i++)
// {
//     document.querySelectorAll(".drum")[i].addEventListener("click",function()
//     {

//         switch (this.innerHTML) {
//             case "w":
//                 var tom3=new Audio("sounds/tom-3.mp3");
//                 tom3.play();
//                 break;
            
//             case "a":
//                 var kick=new Audio("sounds/kick-bass.mp3");
//                 kick.play();
//                 break;

//             case "s":
//                 var tom1=new Audio("sounds/tom-1.mp3");
//                 tom1.play();
//                 break;

//             case "d":
//                 var snare=new Audio("sounds/snare.mp3");
//                 snare.play();
//                 break;

//             case "j":
//                 var tom2= new Audio("sounds/tom-2.mp3");
//                 tom2.play();
//                 break;

//             case "k":
//                 var crash= new Audio("sounds/crash.mp3")
//                 crash.play();
//                 break;

//             case "l":
//                 var tom4= new Audio("sounds/tom-4.mp3");
//                 tom4.play();
//                 break;

//             default:
//                 console.log("this.innerHTML")
//                 break;
//         }
        

    
//         // if(this.innerHTML=="w")
//         // {
//         //     var audio=new Audio("sounds/tom-3.mp3");
//         //     audio.play();
//         // }
//         // else if(this.innerHTML=="a")
//         // {
//         //     var audio=new Audio("sounds/kick-bass.mp3");
//         //     audio.play();
//         // }
//         // else if(this.innerHTML=="s")
//         // {
//         //     var audio=new Audio("sounds/tom-1.mp3");
//         //     audio.play();
//         // }
//         // else if(this.innerHTML=="d")
//         // {
//         //     var audio=new Audio("sounds/snare.mp3");
//         //     audio.play();
//         // }
//         // else if(this.innerHTML=="j")
//         // {
//         //     var audio=new Audio("sounds/tom-2.mp3");
//         //     audio.play();
//         // }
//         // else if(this.innerHTML=="k")
//         // {
//         //     var audio=new Audio("sounds/crash.mp3");
//         //     audio.play();
//         // }
//         // else if(this.innerHTML=="l")
//         // {
//         //     var audio=new Audio("sounds/tom-4.mp3");
//         //     audio.play();
//         // }
//         // else
//         // {
//         //     var audio=new Audio("");
//         //     audio.play();
//         // }
//     });
// }



// // var audio=new Audio("sounds/tom-1.mp3");
// //         audio.play();