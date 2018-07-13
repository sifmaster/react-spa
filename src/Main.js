import React, { Component } from "react";
import {
    Route,
    NavLink,
    HashRouter
} from "react-router-dom";
import Home from "./Home";
import Prospective from "./Prospective";
import Bewerben from "./Bewerben";

class Main extends Component {
    render() {
        return (
            <HashRouter>
                <div>

                    <header>
                        <h1>Web-Entwickler (m/w)</h1>
                        <h3>100%, Zürich</h3>
                    </header>

                     <ul className="nav">
                        <li><NavLink exact to="/">Home</NavLink></li>
                        <li><NavLink to="/prospective">Prospective</NavLink></li>
                        <li><NavLink to="/bewerben">Bewerben</NavLink></li>
                    </ul>

                    <div className="content">
                        <Route exact path="/" component={Home}/>
                        <Route path="/prospective" component={Prospective}/>
                        <Route path="/bewerben" component={Bewerben}/>
                    </div>

                    <footer>
                        <p>(c) djurango</p>
                    </footer>

                </div>
            </HashRouter>
        );
    }
}

export default Main;