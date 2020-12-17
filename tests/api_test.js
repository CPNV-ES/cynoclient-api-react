const axios = require('axios');
const API_URL = "http://localhost:8000"
const testString = ()=>`TestString_${(new Date()).toISOString()}`
const testBool = ()=>Math.random() < 0.5
const testEmail = ()=>`${testString()}@gmail.com`
const testNum = (max = 10)=>Math.round(Math.random() * max)
const testDate = ()=>`201${testNum(9)}-${testNum(12)}-${testNum(28)}`;
const resources = {
    clients:{
        "firstname": testString(),
        "lastname": testString(),
        "isFemale": testBool(),
        "email": testEmail(),
        "phone": "+41793440735",
        "street": testString()
    },
    dogs: {
        "noun": testString(),
        "birthdate": testDate(),
        "isSterilized": testBool(),
        "isChemical": testBool(),
        "isFemale": testBool(),
        "color": testString(),
        "isDead": testBool(),
        "client": 1,
        "breed": 1,
        "crossbreed": testBool()
    },
    diseases:{
        "noun": testString(),
        "description": testString(),
        "symptoms": testString(),
        "preventive": testString(),
        "curative": testString(),
        "isVaccinable": testBool(),
        "isZoonosis": testBool()
    },
    breeds:{
        "link": testString(),
        "picture": testString(),
        "noun": testString(),
        "morphotype": testString(),
        "classification": testString(),
        "min_size_female": testNum(50),
        "max_size_female": testNum(50),
        "min_size_male": testNum(50),
        "max_size_male": testNum(50),
        "min_weight_female": testNum(20),
        "max_weight_female": testNum(20),
        "min_weight_male": testNum(20),
        "max_weight_male": testNum(20),
        "life_expectancy": testNum(25)
    },
    services: {
        "moment": testDate(),
        "duration": testNum(100) / 10,
        "type": testString(),
        "description": testString(),
        "street": testString(),
        "locality": 1
    },
    consultations: {
        "situation": testString(),
        "goal": testString(),
        "deadline": testString(),
        "solution": testString(),
        "medicines": testString(),
        "argumentation": testString(),
        "service": 1
    },
    localities: {
        "noun": testString(),
        "zip": testNum(10000),
        "zip_complement": 0,
        "toponym": testString(),
        "department": "TE",
        "language": testString()
    },
}
async function run() {
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
run();