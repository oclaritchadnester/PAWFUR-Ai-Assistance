document.addEventListener("DOMContentLoaded", () => {
  if (!PawFur.requireLogin()) return;
  const form = document.getElementById("appointmentForm");
  const list = document.getElementById("appointmentList");
  const msg = document.getElementById("appointmentMessage");
  const dateInput = document.getElementById("appointmentDate");
  if (!form || !list) return;
  const today = new Date(); dateInput.min = new Date(today.getTime() - today.getTimezoneOffset()*60000).toISOString().slice(0,10);
  function render() {
    const items = PawFur.getData("appointments", []);
    list.innerHTML = items.length ? items.map((x,i) => `<article class="appointment-item"><strong>${PawFur.escapeHTML(x.animalName)} · ${PawFur.escapeHTML(x.animalType)}</strong><p>${PawFur.escapeHTML(x.reason)}<br>${PawFur.escapeHTML(x.date)} · ${PawFur.escapeHTML(x.time)}<br>${PawFur.escapeHTML(x.clinic || "Clinic not specified")}</p><span class="status-pill">Request saved · Not confirmed</span></article>`).join("") : '<p class="empty-state">No requests yet. Your requests will appear here.</p>';
  }
  render();
  form.addEventListener("submit", e => {
    e.preventDefault();
    const request = { animalName: document.getElementById("animalName").value.trim(), animalType: document.getElementById("animalType").value, reason: document.getElementById("visitReason").value, clinic: document.getElementById("clinicName").value.trim(), date: dateInput.value, time: document.getElementById("appointmentTime").value, notes: document.getElementById("appointmentNotes").value.trim() };
    const items = PawFur.getData("appointments", []); items.unshift(request); PawFur.setData("appointments", items);
    msg.textContent = "Your request has been saved in this browser. Please contact the clinic to confirm."; msg.className = "form-message success";
    form.reset(); render();
  });
});