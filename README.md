# 🔗 Urlio - URL Shortener

**Urlio** is a full-stack URL shortening web application that allows users to easily generate short, shareable links from long URLs — just like Bitly, TinyURL, or Rebrandly, but custom-built.

---

## 🚀 Features

- ✅ Shorten long URLs into clean, shareable short links
- 🔄 Automatically redirect short URLs to their original links
- 📊 Track click analytics (optional future enhancement)
- 🧑‍💻 Simple and elegant UI with Tailwind CSS
- 🌐 Built with MERN Stack (MongoDB, Express.js, React.js, Node.js)

---

## 🧰 Tech Stack

| Tech        | Description                             |
|-------------|-----------------------------------------|
| React.js    | Frontend Framework                      |
| Tailwind CSS| Utility-first CSS framework for styling |
| Node.js     | Backend runtime                         |
| Express.js  | Web framework for Node.js               |
| MongoDB     | Cloud database (MongoDB Atlas)          |
| Mongoose    | MongoDB ODM for Node.js                 |

---

## 📦 Installation

### 1. Clone the repository

```bash
git clone https://github.com/Keerthana379/urlio.git
cd urlio
```

### 2. Install dependencies

```bash
# For backend
cd server
npm install

# For frontend
cd ../client
npm install
```

### 3. Set up environment variables

Create a `.env` file in the `/server` directory:

```env
PORT=5000
MONGO_URI=your_mongodb_atlas_connection_string
BASE_URL=http://localhost:5000
```

### 4. Run the development servers

```bash
# In /server
npm run dev

# In /client (new terminal)
npm run dev
```

Open the app in your browser at: [http://localhost:5173](http://localhost:5173)

---

## 📁 Project Structure

```
urlio/
├── client/              # React frontend
│   ├── src/
│   └── tailwind.config.js
├── server/              # Express backend
│   ├── models/
│   ├── routes/
│   └── controllers/
└── README.md
```

---

## 💻 Screenshots

![homePage](/images/home.png)

---

## 🤝 Contributing

Feel free to fork this repo, make changes, and submit a pull request. Contributions are welcome!

---

## 🧑‍💻 Author

**Keerthana Reddy**

- GitHub: [@keerthanareddy379](https://github.com/keerthanareddy379)
- LinkedIn: [Keerthana Singareddy](https://linkedin.com/in/keerthanareddy379)
