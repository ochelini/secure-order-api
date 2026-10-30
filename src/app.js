const express = require("express");

const app = express();

app.get("/health", (req, res) => {
  res.json({
    status: "healthy"
  });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
