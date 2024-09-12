// src/stores/TransactionStore.ts
import { makeAutoObservable } from 'mobx';

interface Transaction {
  id: number;
  name: string;
  amount: number;
  type: 'income' | 'expense'; // New field to differentiate between income and expense
}

class TransactionStore {
  transactions: Transaction[] = [];
  nextId: number = 1;

  constructor() {
    makeAutoObservable(this);
    this.loadFromLocalStorage(); // Load data from localStorage
  }

  addTransaction(name: string, amount: number, type: 'income' | 'expense') {
    this.transactions.push({ id: this.nextId++, name, amount, type });
    this.saveToLocalStorage(); // Save to localStorage
  }

  removeTransaction(id: number) {
    this.transactions = this.transactions.filter(
      (transaction) => transaction.id !== id,
    );
    this.saveToLocalStorage();
  }

  editTransaction(
    id: number,
    name: string,
    amount: number,
    type: 'income' | 'expense',
  ) {
    const transaction = this.transactions.find((t) => t.id === id);
    if (transaction) {
      transaction.name = name;
      transaction.amount = amount;
      transaction.type = type;
      this.saveToLocalStorage();
    }
  }

  get totalIncome() {
    return this.transactions
      .filter((transaction) => transaction.type === 'income')
      .reduce((sum, transaction) => sum + transaction.amount, 0);
  }

  get totalExpense() {
    return this.transactions
      .filter((transaction) => transaction.type === 'expense')
      .reduce((sum, transaction) => sum + transaction.amount, 0);
  }

  get currentBudget() {
    return this.totalIncome - this.totalExpense;
  }

  // Save transactions to localStorage
  saveToLocalStorage() {
    localStorage.setItem('transactions', JSON.stringify(this.transactions));
  }

  // Load transactions from localStorage
  loadFromLocalStorage() {
    const data = localStorage.getItem('transactions');
    if (data) {
      this.transactions = JSON.parse(data);
      this.nextId =
        this.transactions.length > 0
          ? Math.max(...this.transactions.map((t) => t.id)) + 1
          : 1;
    }
  }
}

const transactionStore = new TransactionStore();
export default transactionStore;
