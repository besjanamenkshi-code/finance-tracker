const express = require('express');
const path = require('path');
const app = express();

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

const transactionRoutes = require('./routes/transactions');
app.use('/api/transactions', transactionRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Finance Tracker running on http://localhost:${PORT}`);
});