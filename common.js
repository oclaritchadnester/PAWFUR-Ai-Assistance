// Shared PawFur helpers. Demo-only authentication uses localStorage and is NOT secure.
(function () {
  const USERS_KEY = "pawfur_demo_users";
  const SESSION_KEY = "pawfur_demo_session";
  window.PawFur = {
    getUsers() { try { return JSON.parse(localStorage.getItem(USERS_KEY) || "[]"); } catch { return []; } },
    saveUsers(users) { localStorage.setItem(USERS_KEY, JSON.stringify(users)); },
    getSession() { try { return JSON.parse(localStorage.getItem(SESSION_KEY) || "null"); } catch { return null; } },
    setSession(user) { localStorage.setItem(SESSION_KEY, JSON.stringify(user)); },
    clearSession() { localStorage.removeItem(SESSION_KEY); },
    requireLogin() {
      if (!this.getSession()) { window.location.href = "login.html"; return false; }
      return true;
    },
    getUserKey() { const s = this.getSession(); return s ? "pawfur_" + s.email.toLowerCase() : "pawfur_guest"; },
    getData(key, fallback) { try { return JSON.parse(localStorage.getItem(this.getUserKey() + "_" + key) || "null") ?? fallback; } catch { return fallback; } },
    setData(key, value) { localStorage.setItem(this.getUserKey() + "_" + key, JSON.stringify(value)); },
    escapeHTML(value) { return String(value).replace(/[&<>"']/g, c => ({ "&":"&amp;", "<":"&lt;", ">":"&gt;", '"':"&quot;", "'":"&#39;" }[c])); }
  };
  document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll("[data-year]").forEach(el => el.textContent = new Date().getFullYear());
    document.querySelectorAll("[data-logout]").forEach(btn => btn.addEventListener("click", () => {
      PawFur.clearSession(); window.location.href = "login.html";
    }));
  });
})();