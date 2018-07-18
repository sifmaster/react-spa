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
                <div className="main-container">

                    <header>
                        <h1>Web-Entwickler (m/w)</h1>
                        <h3>100%, Zürich</h3>
                    </header>

                    <nav>
                     <ul className="navigation">
                        <li><NavLink exact to="/">Home</NavLink></li>
                        <li><NavLink to="/prospective">Prospective</NavLink></li>
                        <li><NavLink to="/bewerben">Bewerben</NavLink></li>
                    </ul>
                    </nav>

                    <div className="content">
                        <Route exact path="/" component={Home}/>
                        <Route path="/prospective" component={Prospective}/>
                        <Route path="/bewerben" component={Bewerben}/>
                    </div>


                    <footer>
                        <div className="footer-share">

                        <h5>Erzähle jemandem von dieser Stelle</h5>


                            <a class="resp-sharing-button__link" href="https://facebook.com/sharer/sharer.php?u=https%3A%2F%2Fwww.prospective.ch%2F" target="_blank" rel="noopener noreferrer" aria-label="">
                                <div class="resp-sharing-button resp-sharing-button--facebook resp-sharing-button--small"><div aria-hidden="true" class="resp-sharing-button__icon resp-sharing-button__icon--normal">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.77 7.5H14.5V5.6c0-.9.6-1.1 1-1.1h3V.54L14.17.53C10.24.54 9.5 3.48 9.5 5.37V7.5h-3v4h3v12h5v-12h3.85l.42-4z"/></svg>
                                </div>
                                </div>
                            </a>

                            <a class="resp-sharing-button__link" href="https://twitter.com/intent/tweet/?text=Hey!%20Ich%20habe%20eine%20super%20Stelle%20f%C3%BCr%20dich%20gefunden.%20Schau%20sie%20dir%20an!&amp;url=https%3A%2F%2Fwww.prospective.ch%2F" target="_blank" rel="noopener noreferrer" aria-label="">
                                <div class="resp-sharing-button resp-sharing-button--twitter resp-sharing-button--small"><div aria-hidden="true" class="resp-sharing-button__icon resp-sharing-button__icon--normal">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M23.4 4.83c-.8.37-1.5.38-2.22.02.94-.56.98-.96 1.32-2.02-.88.52-1.85.9-2.9 1.1-.8-.88-2-1.43-3.3-1.43-2.5 0-4.55 2.04-4.55 4.54 0 .36.04.7.12 1.04-3.78-.2-7.12-2-9.37-4.75-.4.67-.6 1.45-.6 2.3 0 1.56.8 2.95 2 3.77-.73-.03-1.43-.23-2.05-.57v.06c0 2.2 1.57 4.03 3.65 4.44-.67.18-1.37.2-2.05.08.57 1.8 2.25 3.12 4.24 3.16-1.95 1.52-4.36 2.16-6.74 1.88 2 1.3 4.4 2.04 6.97 2.04 8.36 0 12.93-6.92 12.93-12.93l-.02-.6c.9-.63 1.96-1.22 2.57-2.14z"/></svg>
                                </div>
                                </div>
                            </a>

                            <a class="resp-sharing-button__link" href="mailto:?subject=Hey!%20Ich%20habe%20eine%20super%20Stelle%20f%C3%BCr%20dich%20gefunden.%20Schau%20sie%20dir%20an!&amp;body=https%3A%2F%2Fwww.prospective.ch%2F" target="_self" rel="noopener noreferrer" aria-label="">
                                <div class="resp-sharing-button resp-sharing-button--email resp-sharing-button--small"><div aria-hidden="true" class="resp-sharing-button__icon resp-sharing-button__icon--normal">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M23.5 18c0 .8-.7 1.5-1.5 1.5H2c-.8 0-1.5-.7-1.5-1.5V6c0-.8.7-1.5 1.5-1.5h20c.8 0 1.5.7 1.5 1.5v12zm-3-9.5L12 14 3.5 8.5m0 7.5L7 14m13.5 2L17 14"/></svg>
                                </div>
                                </div>
                            </a>

                            <a class="resp-sharing-button__link" href="whatsapp://send?text=Hey!%20Ich%20habe%20eine%20super%20Stelle%20f%C3%BCr%20dich%20gefunden.%20Schau%20sie%20dir%20an!%20https%3A%2F%2Fwww.prospective.ch%2F" target="_blank" rel="noopener noreferrer" aria-label="">
                                <div class="resp-sharing-button resp-sharing-button--whatsapp resp-sharing-button--small"><div aria-hidden="true" class="resp-sharing-button__icon resp-sharing-button__icon--normal">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path stroke-width="1px" d="M20.1 3.9C17.9 1.7 15 .5 12 .5 5.8.5.7 5.6.7 11.9c0 2 .5 3.9 1.5 5.6L.6 23.4l6-1.6c1.6.9 3.5 1.3 5.4 1.3 6.3 0 11.4-5.1 11.4-11.4-.1-2.8-1.2-5.7-3.3-7.8zM12 21.4c-1.7 0-3.3-.5-4.8-1.3l-.4-.2-3.5 1 1-3.4L4 17c-1-1.5-1.4-3.2-1.4-5.1 0-5.2 4.2-9.4 9.4-9.4 2.5 0 4.9 1 6.7 2.8 1.8 1.8 2.8 4.2 2.8 6.7-.1 5.2-4.3 9.4-9.5 9.4zm5.1-7.1c-.3-.1-1.7-.9-1.9-1-.3-.1-.5-.1-.7.1-.2.3-.8 1-.9 1.1-.2.2-.3.2-.6.1s-1.2-.5-2.3-1.4c-.9-.8-1.4-1.7-1.6-2-.2-.3 0-.5.1-.6s.3-.3.4-.5c.2-.1.3-.3.4-.5.1-.2 0-.4 0-.5C10 9 9.3 7.6 9 7c-.1-.4-.4-.3-.5-.3h-.6s-.4.1-.7.3c-.3.3-1 1-1 2.4s1 2.8 1.1 3c.1.2 2 3.1 4.9 4.3.7.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.6-.1 1.7-.7 1.9-1.3.2-.7.2-1.2.2-1.3-.1-.3-.3-.4-.6-.5z"/></svg>
                                </div>
                                </div>
                            </a>



                        </div>
                    </footer>

                </div>
            </HashRouter>
        );
    }
}

export default Main;