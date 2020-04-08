import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Spinner from './Spinner'
import Home from '../pages/Home';

const Detail = lazy(() => import('../pages/Detail'));

const Routes = () => {
    return (
        <Router>
            <Suspense fallback={<Spinner />}>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/detail/:id" component={Detail} />
                </Switch>
            </Suspense>
        </Router>
    );
};

export default Routes;