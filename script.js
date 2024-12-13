const form = document.getElementById('form');
const fname = document.getElementById('fname');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');
const mname = document.getElementById('mname'); // Optional
const lname = document.getElementById('lname');
const gender = document.getElementsByName('gender');
const dob = document.getElementById('dob');


// Prevent the default form submission and run input validation
form.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs();
});

// Sets an error message on the specified input element
const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}

// Sets an secces message on the specified input element
const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

// Validates the email format using a regular expression.
const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}


const validateInputs = () => { // Retrieve and trim all input field values to prepare them for validation checks
    const fnameValue = fname.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();
    const mnameValue = mname.value.trim(); // Optional
    const lnameValue = lname.value.trim();
    const dobValue = dob.value.trim();

    // Further validation logic goes here

    // First Name Validation
    if (fnameValue === '') {
        setError(fname, 'First name is required');
    } else {
        setSuccess(fname);
    }

    // Email Validation
    if (emailValue === '') {
        setError(email, 'Email is required');
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Provide a valid email address');
    } else {
        setSuccess(email);
    }

    // Password Validation
    if (passwordValue === '') {
        setError(password, 'Password is required');
    } else if (passwordValue.length < 8) {
        setError(password, 'Password must be at least 8 characters');
    } else {
        setSuccess(password);
    }

    if (password2Value === '') {
        setError(password2, 'Please confirm your password');
    } else if (password2Value !== passwordValue) {
        setError(password2, "Passwords don't match");
    } else {
        setSuccess(password2);
    }

    // Middle Name Validation (optional)
    setSuccess(mname);

    // Last Name Validation
    if (lnameValue === '') {
        setError(lname, 'Last Name is required');
    } else {
        setSuccess(lname);
    }

    // Gender Validation
    let genderSelected = false;
    for (const g of gender) {
        if (g.checked) {
            genderSelected = true;
            break;
        }
    }

    if (!genderSelected) {
        setError(gender[0].parentElement, 'Gender selection is required');
    } else {
        setSuccess(gender[0].parentElement);
    }

    // DOB Validation
    if (dobValue === '') {
        setError(dob, 'Date of Birth is required');
    } else {
        const dobDate = new Date(dobValue);
        const today = new Date();
        const age = today.getFullYear() - dobDate.getFullYear();
        const monthDiff = today.getMonth() - dobDate.getMonth();
        const dayDiff = today.getDate() - dobDate.getDate();

        // Check if the entered age is under 18 or over 100 based on month and day differences.
        // If under 18 or over 100, display an error message. Otherwise, mark it as valid.
        const isUnder18 =
            age < 18 ||
            (age === 18 && (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)));
        const isOver100 =
            age > 100 ||
            (age === 100 && (monthDiff > 0 || (monthDiff === 0 && dayDiff > 0)));

        if (isUnder18) {
            setError(dob, 'You must be at least 18 years old');
        } else if (isOver100) {
            setError(dob, 'Age cannot exceed 100 years');
        } else {
            setSuccess(dob);
        }
    }
};
