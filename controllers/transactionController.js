const fs = require('fs');
const path = require('path');
const Transaction = require('../models/transaction');

const dataPath = path.join(__dirname, '../data/transactions.json');

const readData = () => {
  const data = fs.readFileSync(dataPath, 'utf-8');
  return data ? JSON.parse(data) : [];
};

const writeData = (data) => {
  fs.writeFileSync(dataPath, JSON.stringify(data, null, 2));
};

// Get all transactions
exports.getAll = (req, res) => {
  const transactions = readData();
  res.json(transactions);
};

// Add transaction
exports.add = (req, res) => {
  const { type, category, amount, description } = req.body;
  const transactions = readData();
  const newTransaction = new Transaction(type, category, amount, description);
  transactions.push(newTransaction);
  writeData(transactions);
  res.json(newTransaction);
};

// Delete transaction
exports.delete = (req, res) => {
  let transactions = readData();
  transactions = transactions.filter(t => t.id !== req.params.id);
  writeData(transactions);
  res.json({ message: 'Deleted successfully' });
};

// Get summary
exports.getSummary = (req, res) => {
  const transactions = readData();
  const summary = {
    income: 0,
    expense: 0,
    savings: 0,
    fun: 0,
    balance: 0
  };
  transactions.forEach(t => {
    summary[t.type] += parseFloat(t.amount);
  });
  summary.balance = summary.income - summary.expense - summary.savings - summary.fun;
  res.json(summary);
};