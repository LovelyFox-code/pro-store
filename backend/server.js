import express from "express";
import connectDB from "./config/db.js";
import dotenv from "dotenv";
import productRoutes from "./routes/productRoutes.js";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";

dotenv.config();

const port = process.env.PORT || 4000;

const app = express();
connectDB();
app.get("/", (req, res) => {
  res.send("API is running...");
});
app.use("/api/products", productRoutes);
// Error handling middleware
app.use(notFound);
app.use(errorHandler);
app.listen(port, () => {
  console.log(`server running on port ${port}`);
});
