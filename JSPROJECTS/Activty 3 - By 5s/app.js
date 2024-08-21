let count = 0;

const value = document.querySelector('#value');
const btns = document.querySelectorAll('.btn');
//console.log(btns)
btns.forEach((btn) => {
    console.log(btn)
    btn.addEventListener('click', (e) => {
        const styles = e.currentTarget.classList
        if(styles.contains('decrease')){
            count-=5
        }
        else if(styles.contains('increase')){
            count+=5
        }
        else {
            count = 0
        }
        value.textContent = count;

        if(count > 0){
            value.style.color = "green"
        }
        if(count == 0){
            value.style.color = "black"
        }
        if (count < 0){
            value.style.color = "red"
        }
    });
});
