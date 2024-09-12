// src/components/TransactionList.tsx
import { observer } from 'mobx-react-lite';
import transactionStore from '../stores/TransactionStore';
import { useState } from 'react';
import TransactionForm from './TransactionForm';

const TransactionList = observer(() => {
  const [editingId, setEditingId] = useState<number | null>(null);

  return (
    <div className="flex flex-col rounded-md   border-4  border-double border-pink-500  bg-pink-950 p-2  text-center shadow-lg shadow-pink-800/50">
      <h2 className="mb-2 text-2xl text-pink-600 underline">Transactions</h2>
      <ul>
        {transactionStore.transactions.map((transaction) => (
          <li className="mb-2" key={transaction.id}>
            {transaction.name} - ${transaction.amount} ({transaction.type})
            <button
              className=" mx-4 rounded-md   border-4  border-double border-pink-500  bg-pink-950 px-[2px]  text-center shadow-lg shadow-pink-800/50"
              onClick={() => transactionStore.removeTransaction(transaction.id)}
            >
              Remove
            </button>
            <button
              className=" mx-4 rounded-md   border-4  border-double border-pink-500  bg-pink-950 px-[2px]  text-center shadow-lg shadow-pink-800/50"
              onClick={() => setEditingId(transaction.id)}
            >
              Edit
            </button>
          </li>
        ))}
      </ul>
      {editingId && (
        <TransactionForm
          transactionId={editingId}
          onClose={() => setEditingId(null)}
        />
      )}
    </div>
  );
});

export default TransactionList;
