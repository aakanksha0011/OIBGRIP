//----------------------------------------------JavaScript------------------------------------//
var screen=document.querySelector('#screen');
var btn=document.querySelectorAll('.btn');

for(item of btn)
{
    item.addEventListener('click',(e)=>{
        btntext=e.target.innerText;
        if(btntext=='÷')
        {
            btnText='/';
        }
        if(btntext=='x')
        {
            btnText='*';
        }
        screen.value+=btntext;
        
    });
}
// With help of js_math function //
function backspa(){
    screen.value=screen.value.substr(0,screen.value.length-1);
}
function sin(){
    screen.value=Math.cos(screen.value);
}
function cos(){
    screen.value=Math.cos(screen.value);
}
function tan(){
    screen.value=Math.tan(screen.value);
}
function sqrt(){
    screen.value=Math.sqrt(screen.value,2);
}
function log(){
    screen.value=Math.log(screen.value);
}
function pi(){
    screen.value= 3.14159;
}
function e(){
    screen.value= 2.71828182;
}
function fact(){
    var i, num, f;
    f=1
    num=screen.value;
    for(i=1;i<=num;i++){
        f=f*i;
    }
    i=i-1;
    screen.value=f;
}
function pow(){
    screen.value=Math.pow(screen.value,2);
}