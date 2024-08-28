let count = 0;
let startCountDown = false; // To stop double checking timer.

const value = document.querySelector('#value');
const btns = document.querySelectorAll('.btn');
//console.log(btns)
btns.forEach((btn) => {
    console.log(btn)
    btn.addEventListener('click', (e) => {
        const styles = e.currentTarget.classList
        if(styles.contains('start-countdown') && !startCountDown){
            count=30;
            startCountDown = true;
           
            const timer = setInterval(function() {
                count--;    
                value.textContent = count;
                if(count > 15){
                    value.style.color = "green"
                }
                if (count <= 15){
                     value.style.color = "red"
                }
                if (count === 0) {
                    value.style.color = "black"
                    clearInterval(timer);
                    startCountDown = false;
                }
            }, 1000);
            
          
        }
    });
});
