let square=document.getElementById("square");

let cont=0;
setInterval(()=>{
    
    if(cont===360){
        cont=0;
    }
    cont=cont+1;
    square.style=`transform: rotate(${cont}deg);`;
    
},1000);
