const { v4: uuidv4 } = require('uuid');

class Transaction {
  constructor(type, category, amount, description) {
    this.id = uuidv4();
    this.type = type; // 'income', 'expense', 'savings', 'fun'
    this.category = category;
    this.amount = amount;
    this.description = description;
    this.date = new Date().toISOString();
  }
}

module.exports = Transaction;