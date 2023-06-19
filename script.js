const calculator = () => {
    //on and off
    const onBtn = document.querySelector('.on');
    const offBtn = document.querySelector('.off');

    //clear
    const clrBtn = document.getElementById('clr');

    //operators
    const add = document.getElementById('add');
    const subtract = document.getElementById('subtract');
    const multiply = document.getElementById('multiply');
    const divide = document.getElementById('divide');
    const equal = document.getElementById('equal');

    //numbers
    const decimal = document.getElementById('decimal');
    const nine = document.getElementById('9');
    const eight = document.getElementById('8');
    const seven = document.getElementById('7');
    const six = document.getElementById('6');
    const five = document.getElementById('5');
    const four = document.getElementById('4');
    const three = document.getElementById('3');
    const two = document.getElementById('2');
    const one = document.getElementById('1');
    const zero = document.getElementById('0');
    
    //Status of calculator: on (1) or off (0)
    let powerStatus = 0;
    

    //Turns calculator on
    const powerOn = () => {
        print('HELLO WORLD');
        powerStatus = 1;
    }

    //Turns calculator off
    const powerOff = () => {
        location.reload();
    }

    //Clear the screen
    const clrScr = () => {

    }

    //Prints message onto display
    const print = (message) => {
        const display = document.getElementById('display');
        display.innerHTML = message;
    }

    const printEqn = (input) => {
        print(input);
    }

    //ADD A CLEAR BUTTON

    //ADD operators and debug
    const onClicks = () => {
        //Turns on calculator
        onBtn.addEventListener('click', powerOn);
        //Turns off calculator
        offBtn.addEventListener('click', powerOff);

        decimal.addEventListener('click', () => {
            print('clicked .');
        });
        nine.addEventListener('click', printEqn(nine));
        eight.addEventListener('click', printEqn(eight));
        seven.addEventListener('click', printEqn(seven));
        six.addEventListener('click', printEqn(six));
        five.addEventListener('click', printEqn(five));
        four.addEventListener('click', printEqn(four));
        three.addEventListener('click', printEqn(three));
        two.addEventListener('click', printEqn(two));
        one.addEventListener('click', printEqn(one));
        zero.addEventListener('click', printEqn(zero));

        

        while (powerStatus === 1) {
            
        }
    }

    onClicks();
}

calculator();

