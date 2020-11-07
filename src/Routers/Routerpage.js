import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Personal from '../components/Task_types/Personal'
import Planned from '../components/Task_types/Planned'
import Today from '../components/Task_types/Today'
import Work_type from '../components/Task_types/Work_type'
import Todo from '../components/Todoviews/Todo'
import Login from '../components/Authpages/Login';
import Signup from '../components/Authpages/Signup';
import { SnackbarProvider } from 'notistack'

export default function Routerpage() {
    return (
        <div>
            <SnackbarProvider maxSnack={3}>
            <Switch>
                <Route exact path="/" component={Login} />
                <Route exact path="/signup" component={Signup} />
                <Route exact path="/NewTask" component={Todo} />
                <Route exact path="/Today" component={Today} />
                <Route exact path="/Personal" component={Personal} />
                <Route exact path ="/Planned" component={Planned} />
                <Route exact path="/Work" component={Work_type} />
            </Switch>
            </SnackbarProvider>
        </div>
    )
}
