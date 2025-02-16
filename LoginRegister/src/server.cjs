const express = require("express");
const jwt = require("jsonwebtoken");
const { LocalStorage } = require("node-localstorage");
const cors = require("cors");

const app = express();
const port = 8080;
const localStorage = new LocalStorage("./storage");
const SECRET_KEY = "secretLoginRegisterKey";

app.use(
  cors({
    origin: "http://localhost:5173",
    methods: "GET,POST",
    credentials: true,
  })
);

app.use(express.json());

app.post("/register", (req, res) => {
  console.log("Received data:", req.body);

  const { firstName, lastName, email, password } = req.body;

  if (!firstName || !lastName || !email || !password) {
    return res.status(400).json({ message: "Missing required fields" });
  }

  if (!email.match(/\S+@\S+\.\S+/)) {
    return res.status(400).json({ message: "Invalid email format" });
  }

  if (password.length < 6) {
    return res
      .status(400)
      .json({ message: "Password must be at least 6 characters" });
  }

  const users = JSON.parse(localStorage.getItem("users") || "[]");
  if (users.some((user) => user.email === email)) {
    return res.status(400).json({ message: "Email already registered" });
  }

  const newUser = { firstName, lastName, email, password };
  users.push(newUser);
  localStorage.setItem("users", JSON.stringify(users));

  return res
    .status(200)
    .json({ message: "User registered successfully!", user: newUser });
});

app.post("/login", (req, res) => {
  const { email, password } = req.body;

  const users = JSON.parse(localStorage.getItem("users") || "[]");

  const user = users.find((u) => u.email === email);

  if (!user) {
    return res.status(401).json({ message: "User not found" });
  }

  if (user.password !== password) {
    return res.status(401).json({ message: "Invalid credentials" });
  }

  const token = jwt.sign({ email: user.email }, SECRET_KEY, {
    expiresIn: "1h",
  });

  return res.json({ token });
});

app.get("/user", (req, res) => {
  const token = req.headers["authorization"]?.split(" ")[1];
  if (!token) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  jwt.verify(token, SECRET_KEY, (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: "Invalid or expired token" });
    }

    const users = JSON.parse(localStorage.getItem("users") || "[]");
    const user = users.find((u) => u.email === decoded.email);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    return res.json(user);
  });
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
