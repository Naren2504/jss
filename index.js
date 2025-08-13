function updateClock(){
    var date=new Date();
    var hours=date.getHours().toString().padStart(2,'0');
    var mins=date.getMinutes().toString().padStart(2,'0');
    var secs=date.getSeconds().toString().padStart(2,'0');
    document.getElementById('clock').innerHTML=hours+":"+mins+":"+secs;
}

window.setInterval(updateClock,1000);
updateClock();
var card=document.getElementById('card');
var message=document.getElementById('message');
card.addEventListener('mouseover',function(){
    card.style.backgroundColor="green";
    card.innerHTML="You are in";

});

card.addEventListener('mouseout',function(){
    card.style.backgroundColor="red";
    card.innerHTML="You are out";

});

card.addEventListener('click',function(){
    card.style.backgroundColor="yellow";
    card.innerHTML="You Clicked Me!";

});
var clock = document.getElementById('clock');

clock.addEventListener('click', function() {
    clock.classList.add('clock-effect');
    setTimeout(() => {
        clock.classList.remove('clock-effect');
    }, 500);
});


