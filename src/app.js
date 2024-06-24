const express = require('express');
const bodyParser = require('body-parser');
const receiptRoutes = require('./routes/receiptRoutes');

const app = express();
app.use(bodyParser.json());

app.use('/receipts', receiptRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});