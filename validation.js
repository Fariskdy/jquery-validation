$(document).ready(function() {
    $('#accountForm').validate({
        rules: {
            name: {
                required: true,
                minlength: 3,
                maxlength: 50
            },
            email: {
                required: true,
                email: true
            },
            phone: {
                required: true,
                minlength: 10,
                maxlength: 14,
                digits: true
            },
            age: {
                required: true,
                range: [18, 120]
            },
            gender: {
                required: true,
                minlength: 4,
                maxlength: 15
            },
            address: {
                maxlength: 50
            }
        },
        messages: {
            name: {
                required: "Please enter your name",
                minlength: "Name must be at least 3 characters long",
                maxlength: "Name cannot be longer than 50 characters"
            },
            email: {
                required: "Please enter your email address",
                email: "Please enter a valid email address"
            },
            phone: {
                required: "Please enter your phone number",
                minlength: "Phone number must be at least 10 digits long",
                maxlength: "Phone number cannot be longer than 14 digits",
                digits: "Please enter only digits"
            },
            age: {
                required: "Please enter your age",
                range: "Age must be between 18 and 120"
            },
            gender: {
                required: "Please enter your gender",
                minlength: "Gender must be at least 4 characters long",
                maxlength: "Gender cannot be longer than 15 characters"
            },
            address: {
                maxlength: "Address cannot be longer than 50 characters"
            }
        },
        submitHandler: function(form) {
            alert('Form submitted successfully!');
        }
    });
});