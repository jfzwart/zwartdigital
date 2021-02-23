import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import '../stylesheets/app.scss';
import history from '../history'
import Home from './Home';
import Contact from './Contact';
import Navbar from './Navbar';
import Footer from './Footer';

class App extends React.Component {
    render() {
        return (
            <div className="App">
                <Router history={history}>
                <div>
                    <Navbar />
                    <Switch>
                        <Route path='/' exact component={Home}/>
                        <Route path='/contact' exact component={Contact} />
                        {/* <Route path='/art' exact component={Portfolio}/>
                        <Route path='/sessions' exact component={Resume}/>
                         /> */}
                    </Switch>
                    <Footer />
                </div>
                </Router>
            </div>
        );
    }
}

library.add(fab)

export default App;