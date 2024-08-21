let count = 0;
let lastNum = 0;
let condition = '';

const value = document.querySelector('#value');
const btns = document.querySelectorAll('.btn');
const valueAddOrSubtracted = document.querySelector('#valueAddOrSubtracted');
const conditionText = document.querySelector('#condition');
//console.log(btns)
btns.forEach((btn) => {
    console.log(btn)
    btn.addEventListener('click', (e) => {
        const styles = e.currentTarget.classList
        lastNum = Math.floor((Math.random() * 100) + 1)
        if(styles.contains('decrease')){
            count-= lastNum
            condition = 'Subtracted'
        }
        else if(styles.contains('increase')){
            count+= lastNum
            condition = 'Added'
        }
        else {
            count = 0
        }
        value.textContent = count;
        valueAddOrSubtracted.textContent = lastNum;

        if(!styles.contains('reset')){
            conditionText.textContent = condition + ' by: ';
        } else {
            conditionText.textContent = null;
            valueAddOrSubtracted.textContent = null;

        }
        


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
