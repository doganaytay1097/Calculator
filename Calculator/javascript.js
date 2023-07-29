function validateForm(event) {
    event.preventDefault(); 
    var name = document.getElementById('name').value;
    var surname = document.getElementById('surname').value;
    var dob = document.getElementById('dob').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var gender = document.getElementById('gender').value;
    var interests = document.getElementsByName('interests');
  
   
    if (name === '') {
      alert('Please enter your name.');
      return;
    }
  
    if (surname === '') {
      alert('Please enter your surname.');
      return;
    }
  
    if (dob === '') {
      alert('Please enter your date of birth.');
      return;
    }
  
    if (email === '') {
      alert('Please enter your email.');
      return;
    }
  
    if (password === '') {
      alert('Please enter your password.');
      return;
    }
    window.location.href = 'calculator.html';
  }