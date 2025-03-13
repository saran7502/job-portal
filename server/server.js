// import './config/instrument.js'
// import express from 'express'
// import cors from 'cors'
// import 'dotenv/config'
// import connectDB from './config/db.js'
// import * as Sentry from "@sentry/node";
// import { clerkWebhooks } from './controllers/webhooks.js';
// import companyRoutes from './routes/companyRoutes.js'
// import connectCloudinary from './config/cloudinary.js'




// //Initialize Express

// const app = express()

// // Connect to database

// await connectDB()
// await connectCloudinary()


// //Middlewars

// app.use(cors())
// app.use(express.json())

// //Routes

// app.get('/', (req, res) => res.send("API WORKING"))
// app.get("/debug-sentry", function mainHandler(req, res) {
//     throw new Error("My first Sentry error!");
// });

// app.post('/webhooks', clerkWebhooks)
// app.use('/api/company',companyRoutes)

// // const startServer = async () => {
// //   try {
// //     await connectDB();
// //     await connectCloudinary();

// //     // Port
// //     const PORT = process.env.PORT || 5000;

// //     // Start the server
// //     app.listen(PORT, () => {
// //       console.log(`Server is running on port ${PORT}`);
// //     });
// //   } catch (error) {
// //     console.error("Error starting server:", error);
// //   }
// // };

// // // Start the server
// // startServer();

// // Sentry.setupExpressErrorHandler(app);

//         // Port

// const PORT = process.env.PORT || 5000

// Sentry.setupExpressErrorHandler(app);

//         app.listen(PORT, () => {
//             console.log(`Server is running on port ${PORT}`);


//         });








// import express from "express";
// import cors from "cors";
// import "dotenv/config";
// import connectDB from "./config/db.js";

// // Initialize Express
// const app = express();

// // Middlewares
// app.use(cors());
// app.use(express.json());

// // Routes
// app.get("/", (req, res) => res.send("API WORKING"));

// // Connect to database and start server
// const startServer = async () => {
//   try {
//     await connectDB();
//     console.log("Database Connected");
//     // Port
//     const PORT = process.env.PORT || 5000;
//     app.listen(PORT, () => {
//       console.log(`Server is Running on port ${PORT}`);
//     });
//   } catch (error) {
//     console.error("Failed to connect to the database", error);
//     process.exit(1);
//   }
// };

// startServer();








import "./config/instrument.js";
import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDB from "./config/db.js";
import * as Sentry from "@sentry/node";
import { clerkWebhooks } from "./controllers/webhooks.js";
import companyRoutes from "./routes/companyRoutes.js";
import connectCloudinary from "./config/cloudinary.js";
import jobRoutes from './routes/jobRoutes.js'
import userRoutes from './routes/userRoutes.js'
import {clerkMiddleware} from "@clerk/express"

// Initialize Express
const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(clerkMiddleware())

// Routes
app.get("/", (req, res) => res.send("API WORKING"));
app.get("/debug-sentry", function mainHandler(req, res) {
  throw new Error("My first Sentry error!");
});

app.post("/webhooks", clerkWebhooks);
app.use("/api/company", companyRoutes);
app.use('/api/jobs', jobRoutes)
app.use('/api/users',userRoutes)

// Async function to connect to the database and cloudinary, and start the server
const startServer = async () => {
  try {
    await connectDB();
    await connectCloudinary();

    // Initialize Sentry only in production
    if (process.env.NODE_ENV === "production") {
      Sentry.init({ dsn: process.env.SENTRY_DSN });
    }

    // Port
    const PORT = process.env.PORT || 5000;

    // Start the server
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (error) {
    console.error("Error starting server:", error);
  }
};

// Start the server
startServer();

Sentry.setupExpressErrorHandler(app);

