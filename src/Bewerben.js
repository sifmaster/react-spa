import React, { Component } from "react";

class Contact extends Component {
    render() {
        return (
            <main>
                <h3>Jetzt Bewerben!</h3>

                <div id="grid">

                    <div id="grid__content">
                        <div id="card">
                            <form class="form" action="post" method="post">


                                <div class="signup__field">
                                    <label for="first_name" class="label">Vorname</label>
                                    <input type="text" name="first_name" id="first_name" class="input-field" autofocus/>
                                </div>

                                <div class="signup__field">
                                    <label for="last_name" class="label">Nachname</label>
                                    <input type="text" name="last_name" id="last_name" class="input-field"/>
                                </div>

                                <div class="signup__field">
                                    <label for="email" class="label">E-Mail Adresse</label>
                                    <input type="email" name="email" id="email" class="input-field" required/>
                                </div>

                                <fieldset>
                                    <div class="signup__field">
                                        <div class="label">What's your favorite Ninja Turtle?</div>
                                        <div class="field__radio-inputs">
                                            <input type="radio" value="leo" id="nt_leo" name="ninja_turtle"/>
                                                <label for="nt_leo">Leo</label>

                                                <input type="radio" value="leo" id="nt_mikey" name="ninja_turtle"/>
                                                    <label for="nt_mikey">Mikey</label>

                                                    <input type="radio" value="donnie" id="nt_donnie" name="ninja_turtle"/>
                                                        <label for="nt_donnie">Donnie</label>

                                                        <input type="radio" value="raph" id="nt_raph" name="ninja_turtle"/>
                                                            <label for="nt_raph">Raph</label>
                                        </div>
                                    </div>

                                </fieldset>


                                <div class="signup__button">
                                    <button class="button" type="#">Bewerben</button>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>


            </main>
        );
    }
}

export default Contact;