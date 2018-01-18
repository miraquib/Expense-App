import React from 'react';
import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';
import NotFoundPage from '../components/NotFoundPage';
import Header from '../components/Header';
import Help from '../components/Help';
import CreateExpense from '../components/CreateExpense';
import Dashboard from '../components/Dashboard';
import EditExpense from '../components/EditExpense';

const AppRouter = () => (
    <BrowserRouter>
    <div>
    <Header />
    <Switch>
        <Route path="/" component={Dashboard} exact={true} />
        <Route path="/create" component={CreateExpense}  />
        <Route path="/edit" component={EditExpense}  />
        <Route path="/help" component={Help} />
        <Route component={NotFoundPage} />
    </Switch>
    </div>
</BrowserRouter>
);

export default AppRouter;