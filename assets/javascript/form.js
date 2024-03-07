function validateForm() {
    let formValue = document.getElementById('registrationForm');
    let fName = formValue.elements['firstname'].value;
    let lName = formValue.elements['lastname'].value;
    let email = formValue.elements['email'].value;
    let phone = formValue.elements['Phone'].value;
    let password = formValue.elements['password'].value;
    let confirmPassword = formValue.elements['confirmPassword'].value;

    if (fName == '' || lName == '' || email == '' || phone == '' || password == '' || confirmPassword == '') {
        alert("Please enter all the required details");
    } else if (phone.length < 9  || phone.length > 14) {
        alert("Number is not a valid phone number");
    }else if(password.length < 4){
        alert('Password is too short');
    } else if (password != confirmPassword) {
        alert("Passwords do not match. Please confirm with the same password");
    } else {
        alert('Account created successfully');
    }
}