import React from 'react';
import ReactDOM from 'react-dom';
import {Route,Link, BrowserRouter as Router} from 'react-router-dom'
import './index.css';
import App from './App';
import Users from "./Router/Users";
import Contact from "./Router/Contact";
import Notfound from './Router/notfound'
const routing = (
    <Router>
        <div>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/users">Users</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>

            </ul>
            <Route exact path="/" component={App} />
            <Route path="/users/:id" component={Users} />
            <Route path="/contact" component={Contact} />
            <Route component={Notfound} />
        </div>
    </Router>
)
ReactDOM.render(routing, document.getElementById('root'));

