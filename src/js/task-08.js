const formRef = document.querySelector('.login-form');

function onSubmit(e) {
  e.preventDefault();
  const { email, password } = e.currentTarget.elements;
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();
  if (!emailValue || !passwordValue) {
    return alert('Всі поля повинні бути заповнені');
  }
  console.log({ email: emailValue, passwordValue: passwordValue });
  e.currentTarget.resert();
}
formRef.addEventListener('submit', onSubmit);
