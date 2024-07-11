const express = require('express');
const cors = require('cors');
const calculateTax = require('./taxCalculator');

const app = express();

app.use(cors());
app.use(express.json());

app.post('/calculate-tax', (req, res) => {
  const { income } = req.body;
  if (typeof income !== 'number' || income <= 0) {
    return res.status(400).json({ error: 'Invalid income' });
  }

  const tax = calculateTax(income);
  res.json({ income, tax });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
