const refs = {
  form: document.querySelector(".login-form"),
};

const onSubmit = (e) => {
  e.preventDefault();
  const {
    email: { value: emailValue },
    password: { value: passwordValue },
  } = e.target.elements;
  const messageAlert = "Усі поля мають бути заповнені";
  if (emailValue === "" || passwordValue === "") {
    alert(messageAlert);
  } else {
    console.log({ emailValue, passwordValue });
    refs.form.reset();
  }
};

refs.form.addEventListener("submit", onSubmit);
