# PawFur 2.0 — GitHub Pages Website

A modern, royal-blue-and-white animal-care website made with **HTML, CSS, and JavaScript**.

## Included pages
- `index.html` — public landing page
- `signup.html` / `login.html` — demo sign-up and login
- `dashboard.html` — user dashboard
- `ai-search.html` — animal-care question assistant (local demo responses)
- `find-vet.html` — opens a Google Maps search for veterinary clinics
- `appointments.html` — appointment request form and local request list
- `profile.html` — profile details

## Open locally
1. Download and extract the ZIP.
2. Open `index.html` in a browser.
3. Create a demo account on the Sign up page.
4. Log in and explore the dashboard.

You can also use Visual Studio Code with the Live Server extension for local testing.

## Publish using GitHub Pages
1. Create a GitHub repository named `PawFur` (or another name you prefer).
2. Upload the **contents** of this folder to the repository root. Make sure `index.html` is at the root.
3. In GitHub, open **Settings → Pages**.
4. Under Build and deployment, choose **Deploy from a branch**.
5. Choose branch `main` and folder `/ (root)`, then save.
6. Wait for GitHub Pages to publish. Your site URL will look like `https://YOUR-USERNAME.github.io/PawFur/`.

## Important demo limitations — read before public use
This version is a **frontend demonstration**:
- Login and sign-up use browser `localStorage`. This is not secure authentication. Users can inspect or alter browser storage, and accounts do not sync across devices. Do not use real or reused passwords.
- AI Animal Search currently uses built-in sample responses. It is not connected to a live AI model. To add real AI, connect a provider through a secure backend or serverless function. **Never put a private AI API key in frontend JavaScript or in a public GitHub repository.**
- Appointment requests are stored only in the current browser. They are not sent to a clinic and do not create confirmed bookings.
- Find a Vet opens an external Google Maps search. Listings are provided by Google, not verified by PawFur.
- There is no real database or secure user management in this static version.

For real accounts, cross-device data, live AI, and actual appointment submission, add a backend or trusted hosted services before using the site with real users.

## Customization
- Colors, spacing, responsive layout: `css/style.css`
- Login and sign-up demo: `js/auth.js`
- Animal assistant sample replies: `js/ai-search.js`
- Appointment form behavior: `js/appointments.js`
- Clinic search behavior: `js/vet.js`
