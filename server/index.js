const express = require("express");
const cors = require("cors");

const port = process.env.PORT || 4000;

const app = express();
app.use(cors());

app.get("/", (req, res) => {
  res.download("./new Resume.docx");
});

try {
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
} catch (err) {
  process.exit(1);
}
