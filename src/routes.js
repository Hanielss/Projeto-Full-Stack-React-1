import React from 'react';
import { BrowserRouter as Router, Switch, Route, Routes as RoutesDOM} from 'react-router-dom';


import Home from './containers/Home'
import Users from './containers/Users'



function Routes() {

    return (

        <Router >
          <RoutesDOM>
            <Route exact path="/" component={Home} />
            <Route exact path="/usuarios" component={Users} />
         </RoutesDOM>
        </Router >
    )

}

export default Routes