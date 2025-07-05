# Innotm – Frontend

Innotm is a responsive Angular-based frontend for a digital payment wallet. It allows users to log in, check balances, add money, transfer funds, and view transaction history by connecting with the ASP.NET Core backend APIs.

🔗 **Backend Repo:** [Innotm-API-project](https://github.com/Piyushthourani/Innotm-API-project)

---

## 🚀 Features

- 🔐 Signup and login forms
- 💼 Dashboard with wallet balance
- ➕ Add money to wallet
- 💸 Send money to other users
- 📜 Transaction history
- 👥 User list display
- 🧭 Sidebar navigation
- 📱 Fully responsive design using Bootstrap

---

## 🛠️ Tech Stack

- **Framework**: Angular
- **Languages**: TypeScript, HTML, CSS
- **Routing**: Angular Router (`app.routes.ts`)
- **API Handling**: Angular `HttpClient`
- **IDE**: Visual Studio Code / Angular CLI

---

## 📁 Project Structure

```
src/
├── app/
│ ├── add-money/
│ ├── dash-board/
│ ├── payment/
│ ├── sidebar/
│ ├── signup-form/
│ ├── transaction-history/
│ └── user-list/
├── app.css / app.html
├── app.routes.ts
├── app.ts / app.spec.ts
├── myservice.ts / myservice.spec.ts
├── index.html
└── main.ts
```

---

## 🧪 Setup Instructions

1. Clone the repository:
   ```bash
   git clone https://github.com/Piyushthourani/Innotm
   cd Innotm
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Update API URL:
   In `myservice.ts` set your backend API base::
   ```ts
   apiUrl = 'https://localhost:44377/api'; // Update if deployed

   ```

4. Run the app:
   ```bash
   ng serve
   ```

5. Open in browser:
   ```
   http://localhost:4200/
   ```

---

## 📜 License

MIT License  
© 2025 [Piyush Thourani](https://github.com/Piyushthourani)
