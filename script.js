const calculator = () => {
    //on and off
    const onBtn = document.querySelector('.on');
    const offBtn = document.querySelector('.off');

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

    //Prints message onto display
    const print = (message) => {
        const display = document.getElementById('display');
        display.innerHTML = display.innerHTML + message;
    }

    //Needs debug
    const printEqn = (input) => {
        display(input);
    }

    //ADD A CLEAR BUTTON

    //ADD operators and debug
    const onClicks = () => {
        onBtn.addEventListener('click', powerOn);
        offBtn.addEventListener('click', powerOff);

        if (powerStatus === 1) {
            decimal.addEventListener('click', printEqn(decimal.innerHTML));
            nine.addEventListener('click', printEqn(nine.innerHTML));
            eigth.addEventListener('click', printEqn(eight.innerHTML));
            seven.addEventListener('click', printEqn(seven.innerHTML));
            six.addEventListener('click', printEqn(six.innerHTML));
            five.addEventListener('click', printEqn(five.innerHTML));
            four.addEventListener('click', printEqn(four.innerHTML));
            three.addEventListener('click', printEqn(three.innerHTML));
            two.addEventListener('click', printEqn(two.innerHTML));
            one.addEventListener('click', printEqn(one.innerHTML));
            zero.addEventListener('click', printEqn(zero.innerHTML));

        }
    }

    onClicks();
}

calculator();

