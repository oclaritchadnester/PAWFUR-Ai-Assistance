document.addEventListener("DOMContentLoaded", () => {
  if (!PawFur.requireLogin()) return;
  const form = document.getElementById("vetSearchForm");
  const input = document.getElementById("vetLocation");
  if (form) form.addEventListener("submit", e => {
    e.preventDefault();
    const place = input.value.trim();
    if (!place) return;
    const url = "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent("veterinary clinic near " + place);
    window.open(url, "_blank", "noopener,noreferrer");
  });
});