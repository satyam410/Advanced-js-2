let start = document.getElementById('start');
let stop = document.getElementById('stop');
let timer = null;  


stop.addEventListener("click", function(){
  if(timer !== null){
    clearInterval(timer);  
    timer = null;  
  }
});


start.addEventListener('click',function(){
   if(timer == null) {
    showTime();
  }
})

function showTime(){
  timer = setInterval(runClock, 1000);
  function runClock() {
    clock.textContent = new Date().toLocaleTimeString();           
 }
};
showTime();

