class Data {

    async getGetal(gok) {

//student uitwerking
        const response = await fetch("http://localhost:3000/getal?gok=" + gok);
        // return response.arrayBuffer();

        let data = await response.json();
        return data.result;
    }

}

export {Data};
