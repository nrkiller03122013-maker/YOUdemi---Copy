const form = document.getElementById('form');
const firstname_input = document.getElementById('firstname-input');
const email_input = document.getElementById('email-input');
const password_input = document.getElementById('password-input');
const repeat_password_input = document.getElementById('repeat-password-input');
const error_message = document.getElementById('error-message');

form.addEventListener('submit', (e) => {
    // Clear previous error styles
    [firstname_input, email_input, password_input, repeat_password_input].forEach(input => {
        if (input) {
            input.parentElement.classList.remove('incorrect');
        }
    });

    let errors = [];

    if (firstname_input && firstname_input.offsetParent !== null) {
        // Signup form
        errors = getSignupFormErrors(
            firstname_input.value,
            email_input.value,
            password_input.value,
            repeat_password_input.value
        );
    } else {
        // Login form
        errors = getLoginFormErrors(email_input.value, password_input.value);
    }

    if (errors.length > 0) {
        e.preventDefault();
        error_message.innerText = errors.join('. ') + '.';
    }
    window.location.href = "index.html"
});

function getSignupFormErrors(firstname, email, password, repeatpassword) {
    let errors = [];

   if (!firstname || firstname.trim() === "") {
 
 
        errors.push('Firstname is required');
        firstname_input.parentElement.classList.add('incorrect');
    }

    if (email==""||email==null) {
        errors.push('Email is required');
        email_input.parentElement.classList.add('incorrect');
    }

    if (password==""||password==null) {
        errors.push('Password is required');
        password_input.parentElement.classList.add('incorrect');
    }
    if(password.length < 8){
        errors.push('Password must have atleast 8 character')
        password_input.parentElement.classList.add('incorrect')
    }
    if (repeatpassword==""||repeatpassword==null) {
        errors.push('Repeat password is required');
        repeat_password_input.parentElement.classList.add('incorrect');
    } else if (password !== repeatpassword) {
        errors.push('Passwords do not match');
        repeat_password_input.parentElement.classList.add('incorrect');
    }

    return errors;
}

// Example stub for login validation
function getLoginFormErrors(email, password) {
    const errors = [];
    if (email==""||email==null) {
        errors.push('Email is required');
        email_input.parentElement.classList.add('incorrect');
    }
    if (password==""||password==null) {
        errors.push('Password is required');
        password_input.parentElement.classList.add('incorrect');
    }
    return errors;
}
 function playVideo(videoPath) {
    const videoPlayer = document.getElementById('video-player');
    const videoSource = document.getElementById('video-source');
    const video = document.getElementById('video');

    videoSource.src = videoPath;
    video.load();
    videoPlayer.style.display = 'block';
    video.scrollIntoView({ behavior: 'smooth' });
  }