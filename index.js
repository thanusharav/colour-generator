const a1=document.querySelector(".container");
for(let index=0;index<20;index++)
{
    const b1=document.createElement("div");
    b1.classList.add("color-container");
    a1.appendChild(b1);
}
const d1=document.querySelectorAll(".color-container");

gencolor();

function gencolor(){
 d1.forEach(
    (b1)=>{
        const newcolorcode=randomColor();
        b1.style.backgroundColor="#"+newcolorcode;
    });
 
}

function randomColor(){
    const c="0123456789abcdef";
    const len=6;
    let colo="";
    for(let index=0;index<len;index++)
    {
        const randnum=Math.floor(Math.random()*c.length);
        colo+=c.substring(randnum,randnum+1);
    }
        return colo;

    
}