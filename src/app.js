import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './router/AppRouter';
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';
import { addExpense, removeExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/style.scss';   

const store = configureStore();

store.dispatch(addExpense({ description: 'Water Bill', amount: 1000, createdAt: 100 }));
store.dispatch(addExpense({ description: 'Gas Bill', amount: 300, createdAt: 100000 }));
const expense1 = store.dispatch(addExpense({ description: 'Mobile Bill', amount: 105000, createdAt: 5000 }));



// store.subscribe(() => {
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
    console.log(visibleExpenses);
//   });

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));

