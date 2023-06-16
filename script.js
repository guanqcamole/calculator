// const onClicks = () => {
//     const onBtn = document.querySelector('on');
//     const offBtn = document.querySelector('off');
//     const add = document.querySelector('add');
//     const subtract = document.querySelector('subtract');
//     const multiply = document.querySelector('multiply');
//     const divide = document.querySelector('divide');
//     const equal = document.querySelector('equal');


// }



window.onload=function(){
    const calculator = () => {

        const onBtn = document.querySelector('on');
        const offBtn = document.querySelector('off');
    
        onBtn.addEventListener('click', powerOn);
        offBtn.addEventListener('click', powerOff);
    
        const powerOn = () => {
            print('HELLO WORLD');
        }
    
        const powerOff = () => {
    
        }
    
    
        const print = (message) => {
            const display = document.querySelector('#display');
            display.innerHTML = message;
        }
    }
    
    calculator();
}

