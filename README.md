# Securelytix Placement Drive Assignment

This project is a submission for the Full Stack Developer role at Securelytix. It includes a responsive login page and a dashboard that fetches and displays data.

---

###  Live Demo

- Frontend (Vercel):  https://securelytix-ass.vercel.app/

> **Note on the Deployed Version:** The live demo hosted on Vercel uses static data embedded directly in the dashboard component. The local setup instructions below use a `json-server` mock API to simulate a backend during development.

---

###  Setup and Running Locally

To run this project on your own machine, please follow these steps:

**1. Clone the repository:**
```bash
git clone https://github.com/lakshya1112/securelytix-ass.git
cd securelytix-ass
```

**2. Install dependencies:**
```bash
npm install
```

**3. Run the Backend Server:**
Open a terminal and run the following command to start the mock API server.
```bash
npx json-server --watch db.json --port 3001
```

**4. Run the Frontend Application:**
Open a **second terminal** and run the following command to start the React app.
```bash
npm run dev
```
The application will be available at `http://localhost:5173`.

---

###  Features

- Responsive login page for all screen sizes.
- Email and password validation.
- "Show/Hide Password" and "Remember Me" bonus features.
- Redirection to a dashboard upon successful login.
- Dashboard with dropdowns for "Clients" and "Employees" populated from a mock API.
- Details of the selected item are displayed dynamically.