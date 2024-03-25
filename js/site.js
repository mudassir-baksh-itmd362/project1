document.getElementById('content').addEventListener('submit', function(event) {
    var email = document.getElementById('email').value;
    if (email === '') {
      event.preventDefault();
      alert('Please enter your email address');
    } else {
      alert("Congratulations! You're one step closer to becoming a millionaire");
    }
  });
  