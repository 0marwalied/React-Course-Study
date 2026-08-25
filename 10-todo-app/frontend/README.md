# Todo App

A modern Todo frontend built with React, TypeScript, and Vite, connected to a Strapi backend API for authentication and todo management.

## Overview

This project provides a complete client-side experience for a todo platform:

- User registration and login using Strapi auth
- Protected routes for authenticated users
- Todo listing with pagination and sorting
- Profile page for signed-in users
- Reusable UI components and form validation

## Features

- Authentication
- Register (`/register`)
- Login (`/login`)
- Persisted session using `localStorage`
- Route protection and auth-aware redirects
- Todo Management
- Fetch todos from Strapi
- Server-side pagination
- Sort by oldest/newest
- Generate sample todos (faker-powered)
- User Experience
- Responsive layout
- Reusable UI components (`Button`, `Input`, `Form`, `Select`, `Paginator`, etc.)
- Toast notifications for success/error states
- Error page fallback for invalid routes/runtime errors

## Tech Stack

### Frontend

- React 19
- TypeScript
- Vite
- React Router
- TanStack Query
- Axios
- React Hook Form + Yup
- Tailwind CSS 4
- React Hot Toast
- Lucide React

### Backend (expected)

- Strapi (JWT authentication)
- SQLite or PostgreSQL (based on backend setup)

## API Integration

Configured base URL in [src/config/axios.config.ts](src/config/axios.config.ts):

```ts
baseURL: "http://localhost:1337/api";
```

Authentication endpoints used:

- `POST /api/auth/local/register`
- `POST /api/auth/local`

Todos endpoint used:

- `GET /api/todos`
- `POST /api/todos` (used for sample todo generation in this client)

## Project Structure

```text
10-todo-app/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── errors/
│   │   ├── notification/
│   │   └── ui/
│   ├── config/
│   ├── data/
│   ├── hooks/
│   ├── interfaces/
│   ├── pages/
│   │   ├── auth/
│   │   ├── error/
│   │   └── layouts/
│   ├── routes/
│   ├── utils/
│   └── validation/
├── index.html
├── package.json
└── vite.config.ts
```

## Getting Started

### 1. Clone the repository

```bash
git clone <your-repo-url>
cd 10-todo-app
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start development server

```bash
npm run dev
```

Frontend runs at:

- `http://localhost:5173`

### 4. Build for production

```bash
npm run build
```

### 5. Preview production build

```bash
npm run preview
```

## Backend Requirements

This frontend expects a running Strapi backend at:

- `http://localhost:1337`

Make sure your Strapi app has:

- Authentication enabled (`/auth/local`, `/auth/local/register`)
- A `todo` content type with appropriate permissions for authenticated users

## Available Scripts

- `npm run dev` - Start Vite dev server
- `npm run build` - Type-check and create production build
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint

## Screenshots

> Below are the screenshots currently included in this repository.

### Authentication Pages

![Login / Register 1](src/assets/Screenshot%202026-05-30%20152448.png)
![Login / Register 2](src/assets/Screenshot%202026-05-30%20152514.png)

### Todo Pages and Features

![Todos 1](src/assets/Screenshot%202026-05-30%20152538.png)
![Todos 2](src/assets/Screenshot%202026-05-30%20152545.png)
![Todos 3](src/assets/Screenshot%202026-05-30%20152552.png)
![Todos 4](src/assets/Screenshot%202026-05-30%20152600.png)
![Todos 5](src/assets/Screenshot%202026-05-30%20152613.png)
![Todos 6](src/assets/Screenshot%202026-05-30%20152619.png)

### Profile / Additional Views

![View 1](src/assets/Screenshot%202026-05-30%20152634.png)
![View 2](src/assets/Screenshot%202026-05-30%20152642.png)

## Usage Flow

1. Register a new account.
2. Login with your credentials.
3. Access protected pages.
4. View and manage todos with sorting and pagination.
5. Use generated sample todos for quick testing.

## Future Improvements

- Add create/update/delete controls directly in the todo UI
- Add search and filtering
- Add category/tags support
- Add due dates and reminders
- Add end-to-end tests

## License

This project is licensed under the MIT License.
