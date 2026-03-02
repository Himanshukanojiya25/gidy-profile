import dotenv from "dotenv";
import app from "./app";

dotenv.config();

const PORT: number = parseInt(process.env.PORT || "5000", 10);

app.listen(PORT, () => {
  console.log(`
  🚀 Server Started Successfully
  🌍 Environment: ${process.env.NODE_ENV || "development"}
  🔗 Listening on: http://localhost:${PORT}
  `);
});