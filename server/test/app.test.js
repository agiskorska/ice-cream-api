const request = require("supertest");

const app = require('../app');

describe("API", () => {

    let api;

    beforeAll(() => {
        // We start a version of the API that we can test on
        api = app.listen(3030);
    })

    afterAll(() => {
        api.close();
    })

    it("Responds to a GET requrest at / with a 200 status", () => {
        request(api).get("/").expect(200)
    })

})