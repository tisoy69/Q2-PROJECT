document.getElementById('login-link').addEventListener('click', function() {
    document.getElementById('login-modal').style.display = 'block';
  });
  
  document.getElementsByClassName('close')[0].addEventListener('click', function() {
    document.getElementById('login-modal').style.display = 'none';
  });
  
  function performLogin() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
  
    if (username && password) {
      alert('Login successful!');
      document.getElementById('login-modal').style.display = 'none';
  
      document.getElementById('username-display').innerText = username;
    } else {
      alert('Invalid username or password. Please try again.');
    }
  }
  