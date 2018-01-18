import React from 'react';
import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';

const ExpenseDashboard = () => (
    <div>This is the Expense Dashboard</div>
);

const AddExpense = () => (
    <div>This is the AddExpense Dashboard</div>
);

const About = () => (
    <div>This is the DeleteExpense Dashboard</div>
);

const NotFoundPage = () => (
    <div>404!</div>
);

const Header = () => (
    <header>
        <h1>Expensify</h1>
        <NavLink to="/" activeClassName="is-active" exact={true}>Dashboard </NavLink>
        <NavLink to="/create" activeClassName="is-active">Create </NavLink>
        <NavLink to="/about" activeClassName="is-active">About </NavLink>
    </header>
);

const AppRouter = () => (
    <BrowserRouter>
    <div>
    <Header />
    <Switch>
        <Route path="/" component={ExpenseDashboard} exact={true} />
        <Route path="/create" component={AddExpense}  />
        <Route path="/about" component={About} />
        <Route component={NotFoundPage} />
    </Switch>
    </div>
</BrowserRouter>
);

export default AppRouter;