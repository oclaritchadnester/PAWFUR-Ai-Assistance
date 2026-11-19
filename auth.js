document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById("loginForm");
  const signupForm = document.getElementById("signupForm");
  const msg = document.getElementById("formMessage");
  const show = (text, success = false) => { if (msg) { msg.textContent = text; msg.className = "form-message" + (success ? " success" : ""); } };
  if (loginForm) loginForm.addEventListener("submit", e => {
    e.preventDefault();
    const email = document.getElementById("email").value.trim().toLowerCase();
    const password = document.getElementById("password").value;
    const user = PawFur.getUsers().find(u => u.email === email && u.password === password);
    if (!user) return show("We couldn't find a matching demo account. Check your details or sign up.");
    PawFur.setSession({ name: user.name, email: user.email });
    window.location.href = "dashboard.html";
  });
  if (signupForm) signupForm.addEventListener("submit", e => {
    e.preventDefault();
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim().toLowerCase();
    const password = document.getElementById("password").value;
    const confirm = document.getElementById("confirmPassword").value;
    if (password.length < 6) return show("Please use at least 6 characters for this demo password.");
    if (password !== confirm) return show("Your passwords do not match.");
    const users = PawFur.getUsers();
    if (users.some(u => u.email === email)) return show("An account with this email already exists. Please log in.");
    users.push({ name, email, password });
    PawFur.saveUsers(users);
    PawFur.setSession({ name, email });
    window.location.href = "dashboard.html";
  });
});