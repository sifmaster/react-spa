import React, { Component } from "react";

class Contact extends Component {
    render() {
        return (
            <main>
                <h3>Jetzt Bewerben!</h3>
                <br/>

                <form>
                    <div class="form-row">
                        <div class="form-group col-md-6">
                            <label for="inputVornamel4">Vorname</label>
                            <input type="text" class="form-control" id="inputVornamel4" placeholder="Vorname"></input>
                        </div>
                        <div class="form-group col-md-6">
                            <label for="inputName4">Name</label>
                            <input type="text" class="form-control" id="inputName4" placeholder="Name"></input>
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="inputAddresse">Addresse</label>
                        <input type="text" class="form-control" id="inputAddresse" placeholder="Musterstrasse 14"></input>
                    </div>
                    <div class="form-row">
                        <div class="form-group col-md-6">
                            <label for="inputOrt">Ort</label>
                            <input type="text" class="form-control" id="inputOrt" placeholder="Zürich"></input>
                        </div>
                        <div class="form-group col-md-4">
                            <label for="inputKanton">Kanton</label>
                            <select id="inputKanton" class="form-control">
                                <option selected>Wählen</option>
                                <option>Aargau</option>
                                <option>Appenzell a.R.</option>
                                <option>Appenzell i.R.</option>
                                <option>Basel Land</option>
                                <option>Basel Stadt</option>
                                <option>Bern</option>
                                <option>Freiburg</option>
                                <option>Genf</option>
                                <option>Glarus</option>
                                <option>Graubünden</option>
                                <option>Jura</option>
                                <option>Luzern</option>
                                <option>Neuenburg</option>
                                <option>Nidwalden</option>
                                <option>Obwalden</option>
                                <option>Schaffhausen</option>
                                <option>Schwyz</option>
                                <option>Solothurn</option>
                                <option>St. Gallen</option>
                                <option>Tessin</option>
                                <option>Thurgau</option>
                                <option>Uri</option>
                                <option>Waadt</option>
                                <option>Wallis</option>
                                <option>Zug</option>
                                <option>Zürich</option>

                            </select>
                        </div>
                        <div class="form-group col-md-2">
                            <label for="inputPlz">Postleitzahl</label>
                            <input type="text" class="form-control" id="inputPlz"></input>
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary">Absenden</button>
                </form>


            </main>
        );
    }
}

export default Contact;