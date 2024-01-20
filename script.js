// variables

const userInput = document.getElementById('text-input');
const checkPalindromeBtn = document.getElementById('check-btn');
const resultDiv = document.getElementById('result');

// Palindrome checking function

const checkForPalindrome = input => {
    const originalInput = input; 

    // Input validation
    if (input === '') {
        alert('Please input a value')
        return;
    }

    // Removing the previous result
    resultDiv.replaceChildren();

    // conversion of input
    const lowerCaseStr = input.replace(/[^A-Za-z0-9]/gi, '').toLowerCase();
    let resultMsg = `<strong>${originalInput}</strong> ${lowerCaseStr === [...lowerCaseStr].reverse().join('')? 'is' : 'is not'} a palindrome.`;
    
    // Creating a paragraph element to show the result
    const pTag = document.createElement('p');
    pTag.className = 'user-input';
    pTag.innerHTML = resultMsg;
    resultDiv.appendChild(pTag);

    // Show the result
    resultDiv.classList.remove('hidden');
};

// Event listeners(Mouse-click)

checkPalindromeBtn.addEventListener('click', () => {
    checkForPalindrome(userInput.value);
    userInput.value = '';
});

// Event Listeners (key-down)

userInput.addEventListener('keydown', e => {
    if (e.key === 'Enter') {
        checkForPalindrome(userInput.value);
        userInput.value = '';
    }
});

