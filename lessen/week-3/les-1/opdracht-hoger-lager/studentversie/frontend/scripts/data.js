class Data {

    async getGetal(gok) {

//student uitwerking
        let response = await fetch("http://localhost:3000/getal?gok=" + gok)

    }

}

export {Data};
