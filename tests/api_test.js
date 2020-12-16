const axios = require('axios');
const API_URL = "http://localhost:8000"
// clients, dogs, diseases, breeds, services, consultations, localities
const testString = `TestString_${(new Date()).toISOString()}`
const resources = {
    clients:{
        "firstname": testString,
        "lastname": testString,
        "isFemale": false,
        "email": "loic.viret@gmail.com",
        "phone": "+41793440735",
        "street": "Près-les-Bois 26a"
    },
    dogs: {
        "noun": testString,
        "birthdate": "2011-01-01",
        "isSterilized": true,
        "isChemical": true,
        "isFemale": false,
        "color": "Vert",
        "isDead": false,
        "client": 5,
        "breed": 7,
        "crossbreed": null
    },
    
}
async function a() {
    for (const resourceName in resources) {
        const resourceData = resources[resourceName];
        const resourceBaseUrl = `${API_URL}/${resourceName}`;
        let skipUpdate = false;
        let lastData = false;

        console.log(`____${resourceName.toUpperCase()}____`);
        
        //POST
        try {
            let res = await axios.post(resourceBaseUrl, resourceData);
            console.log("✅ post ok");
        } catch (error) {
            skipUpdate = true;
            console.error(`❌ post error, skipping resource modifications (${error})`);
        }

        //GET ALL
        try {
            let res = await axios.get(resourceBaseUrl);
            lastData = res.data.sort((a, b) => b.id - a.id)[0];
            console.log("✅ get_all ok");
        } catch (error) {
            console.error(`❌ get_all error (${error})`);
        }

        //GET ONE
        try {
            let res = await axios.get(`${resourceBaseUrl}/${lastData.id}`);
            console.log("✅ get_one ok");
        } catch (error) {
            console.error(`❌ get_one error (${error})`);
        }

        if(skipUpdate){
            console.error(`⭕ skipping patch`);
            console.error(`⭕ skipping delete`);
            continue;
        }

        //UPDATE
        try {
            let res = await axios.patch(`${resourceBaseUrl}/${lastData.id}`, resourceData);
            console.log("✅ patch ok");
        } catch (error) {
            console.error(`❌ patch error (${error})`);
        }

        //delete
        //UPDATE
        try {
            let res = await axios.delete(`${resourceBaseUrl}/${lastData.id}`);
            console.log("✅ delete ok");
        } catch (error) {
            console.error(`❌ delete error (${error})`);
        }
    }
}
a();