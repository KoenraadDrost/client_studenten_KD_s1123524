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
        event.preventDefault();

        const guess = document.getElementById("guess");
        const result = await model.data.getGetal(guess.value);

        const answer = document.getElementById("answer");
        answer.innerHTML = result;

//student uitwerking

    }
}

export {HogerLagerFeature};
