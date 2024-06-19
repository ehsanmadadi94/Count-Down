let inptCounter = document.querySelector('#inpt-counter');
let inptBtn = document.querySelector('#btn-counter');
let errorMsg = document.querySelector('#error-msg');
let timerShow = document.querySelector('.timer-show');
let circle = document.querySelector('.c100');
let inptBox = document.querySelector('.inpt-box');
let wrking = document.querySelector('.wrking');
let done = document.querySelector('.done');
let seconds , timeId , lastTime , percent , orgtime , remove;

inptBtn.addEventListener('click', function(e) {
    seconds = parseInt(inptCounter.value);
    if(isNaN(seconds)){
        errorMsg.classList.add('active');
        return;
    }else{
        errorMsg.classList.remove('active'); 
    }
    orgtime = seconds;
    timerShow.textContent = seconds;
    inptBox.classList.remove('active');
    circle.style.display = 'block';
    wrking.style.display= 'block';
    done.style.display = 'none';

    setInterval(() => {
        if(remove){
            circle.classList.remove(remove);
        }
        if(seconds <= 0){
            circle.style.display = 'none';
            inptBox.classList.add('active');
            wrking.style.display= 'none';
            done.style.display = 'block';
            inptCounter.value = "";
            return;
        }

        seconds--;
        timerShow.textContent = seconds;
        percent = Math.floor(((orgtime-seconds)/orgtime)*100)
        remove = `p${percent}`;
        circle.classList.add(`p${percent}`);

    }, 1000);

})