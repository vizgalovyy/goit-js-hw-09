const form = document.querySelector('.feedback-form');
const input = document.querySelector('[name="email"]');
const comment = document.querySelector('[name="message"]');

const formData = {
  email: '',
  message: '',
};

const savedState = localStorage.getItem('feedback-form-state');
if (savedState) {
  const state = JSON.parse(savedState);
  input.value = state.email;
  formData.email = state.email;
  comment.value = state.message;
  formData.message = state.message;
}

form.addEventListener('input', () => {
  formData.email = input.value.trim();
  formData.message = comment.value.trim();
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
});

form.addEventListener('submit', event => {
  event.preventDefault();
  if (!formData.email || !formData.message) {
    alert('"Fill please all fields"');
  } else {
    console.log(formData);
    localStorage.removeItem('feedback-form-state');
    formData.email = '';
    formData.message = '';
    form.reset();
  }
});
