// server.js
import express from "express";
import path from "path";
import compression from "compression";
import helmet from "helmet";
import { fileURLToPath } from "url";

// ES module helpers for __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.use(helmet());
app.use(compression());

app.use(express.static(path.join(__dirname, "dist")));

app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
  });

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Portfolio running on port ${PORT}`);
});
