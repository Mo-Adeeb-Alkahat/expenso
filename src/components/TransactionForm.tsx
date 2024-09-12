// src/components/TransactionForm.tsx
import { useState } from 'react';
import transactionStore from '../stores/TransactionStore';

interface TransactionFormProps {
  transactionId?: number; // If provided, the form will be in "edit mode"
  onClose: () => void; // Callback to close the form after adding/editing
}

const TransactionForm = ({ transactionId, onClose }: TransactionFormProps) => {
  const transaction = transactionStore.transactions.find(
    (t) => t.id === transactionId,
  );

  const [name, setName] = useState(transaction?.name || '');
  const [amount, setAmount] = useState(transaction?.amount || 0);
  const [type, setType] = useState<'income' | 'expense'>(
    transaction?.type || 'expense',
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (transactionId) {
      transactionStore.editTransaction(transactionId, name, amount, type);
    } else {
      transactionStore.addTransaction(name, amount, type);
    }

    onClose(); // Close the form after submission
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 sm:flex-row sm:justify-between"
    >
      <div>
        <label className="mx-2">Transaction Name :</label>
        <input
          className="mt-1 w-full rounded-sm bg-stone-700 p-1 sm:w-6/12"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div>
        <label className="mx-2">Amount :</label>
        <input
          className="mt-1 w-full rounded-sm bg-stone-700 p-1 sm:w-6/12"
          type="number"
          value={amount}
          onChange={(e) => setAmount(Number(e.target.value))}
          required
        />
      </div>
      <div>
        <label className="mx-2">Type :</label>
        <select
          className="mt-1 min-w-fit rounded-sm bg-stone-700 p-1 sm:w-6/12"
          value={type}
          onChange={(e) => setType(e.target.value as 'income' | 'expense')}
        >
          <option value="income">Income</option>
          <option value="expense">Expense</option>
        </select>
      </div>
      <button
        type="submit"
        className=" rounded-md  border-4 border-double  border-cyan-500 bg-cyan-950 p-1 text-center shadow-lg shadow-lime-800/50"
      >
        {transactionId ? 'Edit' : 'Add'} Transaction
      </button>
    </form>
  );
};

export default TransactionForm;
