const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.querySelector('.container');
const signUpForm = document.getElementById('signUpForm');
const signInForm = document.getElementById('signInForm');

// Switch between Sign Up and Sign In panels
signUpButton.addEventListener('click', () => {
    container.classList.add('right-panel-active');
});

signInButton.addEventListener('click', () => {
    container.classList.remove('right-panel-active');
});

// Handle Sign Up Form Submission
signUpForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(signUpForm);
    const data = Object.fromEntries(formData);
    
    // Here you would typically send this data to your server
    console.log('Sign Up Data:', data);
    
    // Clear form
    signUpForm.reset();
    alert('Sign Up Successful!');
});

// Handle Sign In Form Submission
signInForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(signInForm);
    const data = Object.fromEntries(formData);
    
    // Here you would typically send this data to your server for authentication
    console.log('Sign In Data:', data);
    
    // Clear form
    signInForm.reset();
    alert('Sign In Successful!');
});