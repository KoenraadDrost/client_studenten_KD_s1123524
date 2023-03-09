import {Model} from "./model.js";

const model = new Model();

class HogerLagerFeature{
    init(){
        console.log('HogerLagerFeature init');

//student uitwerking
        this.eventListeners();

    }

    eventListeners(){
        document.getElementById('btnSubmit')
            .addEventListener('click', this.submitGuess);
    }

    async submitGuess(event){
        console.log("submitGuess werkt")

//student uitwerking

    }
}

export {HogerLagerFeature};
