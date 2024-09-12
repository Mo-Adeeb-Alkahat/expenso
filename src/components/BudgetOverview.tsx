// src/components/BudgetOverview.tsx
import { observer } from 'mobx-react-lite';
import transactionStore from '../stores/TransactionStore';

const BudgetOverview = observer(() => {
  return (
    <div className="flex flex-col gap-2 rounded-md  border-4  border-double border-purple-500  bg-purple-950 p-2  text-center shadow-lg shadow-purple-800/50">
      <h2 className="mb-2 text-2xl text-purple-600 underline">
        Current Budget
      </h2>
      <p className=" mx-4 rounded-md   border-4  border-double border-purple-500  bg-purple-950 px-[2px]  text-center shadow-lg shadow-purple-800/50">
        Total Income: ${transactionStore.totalIncome}
      </p>
      <p className=" mx-4 rounded-md   border-4  border-double border-purple-500  bg-purple-950 px-[2px]  text-center shadow-lg shadow-purple-800/50">
        Total Expenses: ${transactionStore.totalExpense}
      </p>
      <h3 className=" mx-4 rounded-md   border-4  border-double border-purple-500  bg-purple-950 px-[2px]  text-center shadow-lg shadow-purple-800/50">
        Budget: ${transactionStore.currentBudget}
      </h3>
    </div>
  );
});

export default BudgetOverview;
