var counter=document.getElementById("counters");
var followers=document.getElementById("followers");
let count=1;
setInterval(()=>{
   if(count<1000){
    count++;
    counter.innerText=count;
}
},1);

setTimeout(() => {
    followers.innerText="follwers on Insta  !!"
}, 4500);