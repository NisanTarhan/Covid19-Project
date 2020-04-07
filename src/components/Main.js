import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from '../pages/Home';

const Detail = lazy(() => import('../pages/Detail'));

const Main = () => {
    return (
        <Router>
            <Suspense fallback={<h1>LOADING</h1>}>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/detail/:id" component={Detail} />
                </Switch>
            </Suspense>
        </Router>
    );
};



export default Main;