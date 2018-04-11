import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import registerServiceWorker from './registerServiceWorker';
import NotFound from './components/NotFound';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

const Root = () => {
    return (
        <Router>
            <Switch>    
                <Route exact path="/" component={App}/>
                {/* <Route/> */}
                <Route component={NotFound}/>
            </Switch>   
        </Router>
    )
}

ReactDOM.render(<Root />, document.getElementById('root'));
// registerServiceWorker();
