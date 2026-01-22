const formEl = document.querySelector(".feedback-form");
const STORAGE_KEY = "feedback-form-state";

let formState = {
  email: "",
  message: "",
};

const savedState = localStorage.getItem(STORAGE_KEY);

if (savedState) {
  try {
    const parsedState = JSON.parse(savedState);

    formState = {
      email: parsedState.email ?? "",
      message: parsedState.message ?? "",
    };

    formEl.elements.email.value = formState.email;
    formEl.elements.message.value = formState.message;
  } catch (error) {
    localStorage.removeItem(STORAGE_KEY);
  }
}

formEl.addEventListener("input", (event) => {
  const { name, value } = event.target;

  if (name !== "email" && name !== "message") return;

  formState[name] = value.trim();
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formState));
});

formEl.addEventListener("submit", (event) => {
  event.preventDefault();

  const email = formState.email.trim();
  const message = formState.message.trim();

  if (!email || !message) {
  alert("Please fill in all fields.");
  return;
}


  console.log({ email, message });

  localStorage.removeItem(STORAGE_KEY);
  formState = { email: "", message: "" };
  formEl.reset();
});
