const express = require("express");
const path = require("path");
const compression = require("compression");
const helmet = require("helmet");

const app = express();

// Security middleware
app.use(helmet());

// Gzip compression
app.use(compression());

// Serve static files
app.use(express.static(path.join(__dirname, "dist")));

// Handle React routing (SPA support)
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Portfolio running on port ${PORT}`);
});
