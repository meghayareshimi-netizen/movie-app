const authForm = document.getElementById('auth-form');
const authTitle = document.getElementById('auth-title');
const authButton = document.getElementById('auth-button');
const authToggleLink = document.getElementById('auth-toggle-link');
const authToggleText = document.getElementById('auth-toggle-text');

let isLogin = true;

authToggleLink.addEventListener('click', (e) => {
    e.preventDefault();
    isLogin = !isLogin;

    if (isLogin) {
        authTitle.innerText = 'Sign In';
        authButton.innerText = 'Sign In';
        authToggleText.innerText = 'New to Netflix?';
        authToggleLink.innerText = 'Sign up now.';
    } else {
        authTitle.innerText = 'Sign Up';
        authButton.innerText = 'Sign Up';
        authToggleText.innerText = 'Already have an account?';
        authToggleLink.innerText = 'Sign in now.';
    }
});

authForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // Simulate authentication
    console.log(isLogin ? 'Logging in...' : 'Registering...');

    // Smooth transition effect (optional) context here is redirection
    alert(`${isLogin ? 'Login' : 'Registration'} successful! Welcome to Netflix.`);

    // Redirect to main landing page
    window.location.href = 'dashboard.html';
});
