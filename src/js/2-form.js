const form = document.querySelector('.feedback-form');
const input = document.querySelector('[name="email"]');
const comment = document.querySelector('[name="message"]');

const formState = {
  email: '',
  message: '',
};

const savedState = localStorage.getItem('feedback-form-state');
if (savedState) {
  const state = JSON.parse(savedState);
  input.value = state.email;
  formState.email = state.email;
  comment.value = state.message;
  formState.message = state.message;
}

form.addEventListener('input', () => {
  formState.email = input.value.trim();
  formState.message = comment.value.trim();
  localStorage.setItem('feedback-form-state', JSON.stringify(formState));
});

form.addEventListener('submit', event => {
  event.preventDefault();
  if (!formState.email || !formState.message) {
    alert('"Fill please all fields"');
  } else {
    console.log(formState);
    localStorage.removeItem('feedback-form-state');
    formState.email = '';
    formState.message = '';
    form.reset();
  }
});
