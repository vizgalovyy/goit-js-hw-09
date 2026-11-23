const form = document.querySelector('.feedback-form');
const input = document.querySelector('.feedback-input');
const comment = document.querySelector('.feedback-message');

const formState = {
  email: '',
  message: '',
};

const savedState = localStorage.getItem('feedback-form-state');
if (savedState) {
  const state = JSON.parse(savedState);
  formState.email = state.email;
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
    form.reset;
  }
});
