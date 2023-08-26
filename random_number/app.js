const express = require('express');
const app = express();
const port = 5000;

app.get('/random', (req, res) => {
  const randomNum = Math.floor(Math.random() * 10) + 1;
  res.json({ random: randomNum });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
