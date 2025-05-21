document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('subscribe-form');
  const emailInput = document.getElementById('email');
  const message = document.getElementById('message');

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    const emailValue = emailInput.value.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(emailValue)) {
      console.log('Invalid email');
      emailInput.style.border = '2px solid red';
      emailInput.classList.add("errorImg");
      message.textContent = 'Please enter a valid email address.';
      message.classList.remove('success');
      message.classList.add('error');
      emailInput.placeholder = "";
      return;
    } else {
      emailInput.style.border = '1px solid hsl(0, 36%, 70%)';
      emailInput.classList.remove("errorImg");
      message.textContent = 'Thank you for subscribing!';
      message.classList.remove('error');
      message.classList.add('success');
      emailInput.placeholder = "Email Address";
      emailInput.value = "";
    }
  });

  emailInput.addEventListener('input', function () {
    emailInput.style.border = '1px solid hsl(0, 36%, 70%)';
    emailInput.classList.remove("errorImg");
    message.textContent = '';
    message.classList.remove('error');
    emailInput.placeholder = "Email Address" ;
  });
});
