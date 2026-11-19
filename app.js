document.addEventListener("DOMContentLoaded", () => {
  if (!PawFur.requireLogin()) return;
  const user = PawFur.getSession();
  const name = user?.name || "Animal lover";
  const welcome = document.getElementById("welcomeName");
  if (welcome) welcome.textContent = name.split(" ")[0];
  document.querySelectorAll("#topAvatar").forEach(el => el.textContent = name.charAt(0).toUpperCase());
  const recent = document.getElementById("recentSearches");
  if (recent) {
    const items = PawFur.getData("searches", []).slice(0, 4);
    recent.innerHTML = items.length ? items.map(x => `<div class="recent-item"><span>${PawFur.escapeHTML(x.question)}</span><span>✦</span></div>`).join("") : '<p class="empty-state">Your recent questions will appear here.</p>';
  }
  const requests = document.getElementById("recentAppointments");
  if (requests) {
    const items = PawFur.getData("appointments", []).slice(0, 3);
    requests.innerHTML = items.length ? items.map(x => `<div class="recent-item"><span>${PawFur.escapeHTML(x.animalName)} · ${PawFur.escapeHTML(x.date)}</span><span>Pending</span></div>`).join("") : '<p class="empty-state">You have no appointment requests yet.</p>';
  }
  const toggle = document.getElementById("menuToggle");
  const sidebar = document.getElementById("sidebar");
  if (toggle && sidebar) toggle.addEventListener("click", () => sidebar.classList.toggle("open"));
});