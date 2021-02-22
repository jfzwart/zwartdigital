import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import history from '../history'
import Navbar from './Navbar';

class App extends React.Component {
    render() {
        return (
            <div className="App">
                <Router history={history}>
                <div>
                    <Navbar />
                    <Switch>
                        {/* <Route path='/' exact component={Home}/> */}
                        {/* <Route path='/art' exact component={Portfolio}/>
                        <Route path='/sessions' exact component={Resume}/>
                        <Route path='/contact' exact component={Contact} /> */}
                    </Switch>
                </div>
                </Router>
            </div>
        );
    }
}

export default App;