# The Curious Corner

A modern, full-stack ready **Blog Website** built with **React**, **Vite**, **Tailwind CSS**, and **Redux**.
It comes with an **Admin Dashboard** for creating and managing posts, authentication flow, and a responsive UI for readers.

[🌐 Live Site](https://the-curious-corner.vercel.app)

---

## 🚀 Features

* 📰 **Blog System**

  * Browse blog posts
  * View single post with detailed content
  * Preview posts with summary cards

* 🔐 **Authentication**

  * Admin login system
  * Protected routes using a custom `PrivateRoute`

* 🛠️ **Admin Dashboard**

  * Create new posts
  * Edit existing posts
  * Delete posts
  * Manage all posts in one place

* 🎨 **UI/UX**

  * Responsive design with Tailwind CSS
  * Minimal and clean interface
  * Reusable components (`BlogCard`, `Navbar`, `PostPreview`)

---

## 🏗️ Tech Stack

* **Frontend Framework**: [React](https://react.dev/) (via [Vite](https://vitejs.dev/))
* **Styling**: [Tailwind CSS](https://tailwindcss.com/)
* **State Management**: [Redux Toolkit](https://redux-toolkit.js.org/)
* **Routing**: [React Router](https://reactrouter.com/)
* **Deployment**: [Vercel](https://vercel.com/) (configured with `vercel.json`)

---

## 📂 Project Structure

```
blog-website/
├── public/               # Static assets
├── src/
│   ├── components/       # Reusable UI components
│   │   ├── BlogCard.jsx
│   │   ├── Navbar.jsx
│   │   └── PostPreview.jsx
│   ├── data/             # Blog data (sample posts)
│   │   └── posts.js
│   ├── hooks/            # Custom hooks (auth, posts)
│   ├── pages/            # Application pages
│   │   ├── Home.jsx
│   │   ├── NotFound.jsx
│   │   ├── Blog/
│   │   │   ├── BlogList.jsx
│   │   │   └── BlogPost.jsx
│   │   └── Admin/
│   │       ├── AdminDashboard.jsx
│   │       ├── AdminLogin.jsx
│   │       ├── AdminPosts.jsx
│   │       ├── EditPost.jsx
│   │       └── NewPost.jsx
│   ├── routes/           # Route guards
│   │   └── PrivateRoute.jsx
│   ├── store/            # Redux store and slices
│   │   ├── store.js
│   │   ├── slices/authSlice.js
│   │   └── slices/postsSlice.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── tailwind.config.js
├── vite.config.js
├── vercel.json
└── .eslintrc.json
```

---

## ⚙️ Getting Started

### Prerequisites

* [Node.js](https://nodejs.org/) (v16+ recommended)
* npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/ratnesh2507/blog-website.git

# Move into the project directory
cd blog-website

# Install dependencies
npm install
```

### Development

```bash
npm run dev
```

Open your browser at `http://localhost:5173`

### Production Build

```bash
npm run build
```

---

## 🚀 Deployment

This project is configured for seamless deployment on **Vercel**.

* Push changes to the `main` branch → Vercel will auto-deploy.
* Deployment settings are managed in `vercel.json`.

---

## 🤝 Contributing

Contributions are welcome!
If you’d like to improve this project, please fork the repo and submit a pull request.

---

## 📜 License

This project is licensed under the [MIT License](LICENSE).
