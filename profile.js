document.addEventListener("DOMContentLoaded", () => {
  if (!PawFur.requireLogin()) return;
  const user = PawFur.getSession();
  const nameInput = document.getElementById("profileName");
  const emailInput = document.getElementById("profileEmail");
  const avatar = document.getElementById("profileAvatar");
  const message = document.getElementById("profileMessage");
  nameInput.value = user.name || ""; emailInput.value = user.email || "";
  const updateAvatar = () => { avatar.textContent = nameInput.value.trim().charAt(0).toUpperCase() || "P"; };
  updateAvatar(); nameInput.addEventListener("input", updateAvatar);
  document.getElementById("profileForm").addEventListener("submit", e => {
    e.preventDefault();
    const name = nameInput.value.trim();
    if (!name) return;
    const users = PawFur.getUsers();
    const index = users.findIndex(u => u.email === user.email);
    if (index >= 0) { users[index].name = name; PawFur.saveUsers(users); }
    PawFur.setSession({ name, email: user.email });
    message.textContent = "Profile updated."; message.className = "form-message success";
    document.querySelectorAll("#topAvatar").forEach(el => el.textContent = name.charAt(0).toUpperCase());
  });
});