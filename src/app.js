import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import authRoutes from './routes/auth.routes.js';
import taskRoutes from './routes/tasks.routes.js';
import groupRoutes from './routes/groups.routes.js';
import colaboradoresRoutes from './routes/colaboradores.routes.js';
import { FRONTEND_URL } from "./config.js";

const app = express();

app.use(cors({
  credentials: true,
  origin: FRONTEND_URL,
})
);

app.use(morgan('dev'));
app.use(express.json());
app.use(cookieParser());

app.use("/api", authRoutes);  
app.use("/api", taskRoutes);  
app.use("/api", groupRoutes);  
app.use("/api", colaboradoresRoutes);  

if (process.env.NODE_ENV === "production") {
  const path = await import("path");
  app.use(express.static("client/dist"));

  app.get("*", (req, res) => {
    console.log(path.resolve("client", "dist", "index.html") );
    res.sendFile(path.resolve("client", "dist", "index.html"));
  });
}

export default app;