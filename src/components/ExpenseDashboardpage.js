import React from 'react';
import ExpenseList from './ExpenseList';
import ExpenseListFilter from './ExpenseListFilter';

const ExpenseDashboardpage = () => (
    <div>
        <ExpenseListFilter />
        <ExpenseList />
    </div>
);

export default ExpenseDashboardpage;