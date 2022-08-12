import express from "express";
import morgan from "morgan";
import cors from "cors";
import path from "path";

//import routes
import evento from "./routes/event.routes";
import userRoutes from "./routes/user.routes";
import authRoutes from "./routes/auth.routes";

//express intance and settings
const app = express();
app.use(morgan("dev"));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//config for files
app.use("/api/v1/files", express.static(path.join(__dirname, "public/files")));

app.use("/api/v1/eventos", evento);

app.use("/api/v1/users", userRoutes);

app.use("/api/v1/auth", authRoutes);

app.use("/api/v1/", (req, res) => {
  res.json({ msg: "Welcome to Waqya API" });
});

//prevent access to any other direction
app.use("*", (req, res) => {
  res.status(404).json({ error: `not found` });
});

export default app;
