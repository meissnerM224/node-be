## Node.js Backend Learning Project

This repository is a learning project focused on building a full-stack application with a Node.js backend and a React frontend.

### Project goals
- Learn how to build and structure a backend API with Node.js and Express
- Connect the application to MongoDB using Mongoose
- Implement authentication and user management patterns
- Expose REST API endpoints for frontend consumption
- Prepare a clean separation between backend logic and frontend UI code

### Current architecture

The backend is located in the `backend/` folder and uses:
- Node.js
- Express
- MongoDB / Mongoose
- Environment variables via `.env`

A frontend application is planned to live in a separate `frontend/` directory, so the project follows a clean separation of concerns:

- `backend/` contains the API, database models, routes, and server logic
- `frontend/` contains the React app, UI components, and client-side logic
- `api/` contains API collection files such as Bruno/OpenCollection definitions

### Typical project structure

```text
node-be/
├── backend/
│   └── src/
│       ├── config/
│       ├── controllers/
│       ├── models/
│       ├── routes/
│       ├── middleware/
│       └── index.js
├── frontend/
│   ├── src/
│   ├── public/
│   └── package.json
├── api/
│   └── opencollection.yml
├── .env
├── package.json
├── README.md
└── .gitignore
```

### Planned stack

- Backend: Node.js, Express, MongoDB, Mongoose
- Frontend: React, Vite (planned)
- API tooling: Bruno/OpenCollection

### Notes

This project is intended as a practical learning repository for backend development and for gradually expanding into a full-stack application. The focus is on understanding how frontend and backend communicate through APIs while keeping the codebase organized.

### Running the backend

```bash
npm install
npm run dev
```

### Planned frontend setup

The frontend will be created as a separate React app in a `frontend/` directory, allowing the backend and UI to be developed independently while still integrating through API calls.
