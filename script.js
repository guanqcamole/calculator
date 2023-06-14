const numbers = () => {
    const numberBtns = document.querySelector('#numberBtns');

    for (let i = 0; i < 10; i++) {
        const numberBtn = document.createElement('button');
        numberBtn.classList.add('btn');
        numberBtn.textContent = i;
        numberBtns.appendChild(numberBtn);    
    }
}

numbers();
