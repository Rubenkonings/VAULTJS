
//var numberbutton = document.getElementById("number-button");
var codecontainer =document.getElementById("code-container")
var buttons= document.getElementsByClassName("buttons")
var greenblock =document.getElementById("greenblock")
var intervalTimer=0;
var clickcounter = 0;
var numberone;
var numbertwo;
var numberthree;

var blink = setInterval(function blink(){ 
    intervalTimer++;
    if (greenblock.style.visibility ='hidden') {
        greenblock.style.visibility ='visible';
    }
    else {
        greenblock.style.visibility ='hidden'
    }
    if (intervaltimer==10) { 
        clearInterval(blink);        
    }


},500)

function getNumber(clickedbutton)
{
    clickcounter++;

    codecontainer.innerHTML += clickedbutton.value;
    console.log(clickcounter)

if (clickcounter== 1) 
{
    numberone = clickedbutton.value;
}
else if (clickcounter== 2) 
{
    numbertwo = clickedbutton.value;
}
else if (clickcounter== 3) 
{
    numberthree = clickedbutton.value;
}


if(clickcounter==3 )
{    
    if (numberone ==3 && numbertwo ==3&& numberthree==1 ) 
        {          
            codecontainer.innerHTML="you are right"; 
            blink();
        }else 
        {            
            codecontainer.innerHTML="you are wrong";           
            disablebuttons();
        }

}
if (clickcounter ==4) 
{
    numberone;
    numbertwo;
    numberthree;
    codecontainer.innerHTML="";
    clickcounter  =0;
}
function disablebuttons(){
for ( i = 0; i < buttons.length; i++) {    
    buttons[i].setAttribute('disabled', 'disabled');    
}

}   
function enabalebuttons(){
    for ( i = 0; i < buttons.length; i++) {    
        buttons[i].removeAttribute('disabled');        
    }
}
}