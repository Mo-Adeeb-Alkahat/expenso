import Header from './components/Header';

// src/App.tsx
import React, { useState } from 'react';
import TransactionForm from './components/TransactionForm';
import TransactionList from './components/TransactionList';
import BudgetOverview from './components/BudgetOverview';

const App: React.FC = () => {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className=" flex h-screen flex-col items-center gap-10 bg-black text-white">
      <Header></Header>
      <button
        className=" mt-4 flex items-center justify-center rounded-md  border-4 border-double  border-lime-500 bg-lime-950 p-2 text-center shadow-lg shadow-lime-800/50 transition-transform sm:w-1/5"
        onClick={() => setShowForm(!showForm)}
      >
        {showForm ? 'Close' : 'Add New Transaction'}
      </button>

      {showForm && <TransactionForm onClose={() => setShowForm(false)} />}

      <TransactionList />
      <BudgetOverview />
    </div>
  );
};

export default App;
