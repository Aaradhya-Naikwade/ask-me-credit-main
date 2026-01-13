// import express from "express";
// import cors from "cors";
// import dotenv from "dotenv";
// import connectDB from "./config/db.js";

// import leadRoutes from "./routes/leadRoutes.js";
// import adminRoutes from "./routes/adminRoutes.js";

// dotenv.config();

// const app = express();

// /* ---------- MIDDLEWARE ---------- */

// // Parse JSON body
// app.use(express.json());

// // CORS (environment-based, no URL change needed in code)
// const allowedOrigins = [
//   "http://localhost:5173",          // local frontend
//   process.env.FRONTEND_URL          // production frontend (Vercel)
// ];


// // CORS (production-safe for Vercel + local)
// app.use(
//   cors({
//     origin: function (origin, callback) {
//       // Allow requests with no origin (Postman, server-side)
//       if (!origin) return callback(null, true);

//       // Allow local development
//       if (origin === "http://localhost:5173") {
//         return callback(null, true);
//       }

//       // Allow any Vercel frontend
//       if (origin.endsWith(".vercel.app")) {
//         return callback(null, true);
//       }

//       // Otherwise block
//       return callback(new Error("Not allowed by CORS"));
//     },
//     methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
//     allowedHeaders: ["Content-Type", "Authorization"]
//   })
// );

// // Allow preflight requests
// app.options("*", cors());


// /* ---------- DATABASE ---------- */
// connectDB();

// /* ---------- ROUTES ---------- */
// app.use("/api/leads", leadRoutes);
// app.use("/api/admin", adminRoutes);

// /* ---------- HEALTH CHECK ---------- */
// app.get("/", (req, res) => {
//   res.status(200).json({ message: "Ask Me Credit Backend Running" });
// });

// /* ---------- SERVER ---------- */
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//   console.log(`🚀 Server running on port ${PORT}`);
// });







import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";

import leadRoutes from "./routes/leadRoutes.js";
import adminRoutes from "./routes/adminRoutes.js";

dotenv.config();

const app = express();

/* ---------- MIDDLEWARE ---------- */
app.use(express.json());

/* ---------- CORS (PATCH FIXED) ---------- */
app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin) return callback(null, true);

      if (origin === "http://localhost:5173") {
        return callback(null, true);
      }

      if (origin.endsWith(".vercel.app")) {
        return callback(null, true);
      }

      return callback(new Error("Not allowed by CORS"));
    },
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"]
  })
);

app.options("*", cors());

/* ---------- DATABASE ---------- */
connectDB();

/* ---------- ROUTES ---------- */
app.use("/api/leads", leadRoutes);
app.use("/api/admin", adminRoutes);

/* ---------- HEALTH CHECK ---------- */
app.get("/", (req, res) => {
  res.status(200).json({ message: "Ask Me Credit Backend Running" });
});

/* ---------- SERVER ---------- */
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
