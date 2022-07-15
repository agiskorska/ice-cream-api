const request = require("supertest");

const app = require('../app');

describe("API", () => {

    let api;

    beforeAll(() => {
        // We start a version of the API that we can test on
        api = app.listen(3030);
    })
    // done - callback from jest to confirm the tests are finished (not totally necessary here)
    afterAll((done) => {
        api.close(done);
    })

    it("Responds to a GET requrest at / with a 200 status", (done) => {
        request(api).get("/").expect(200, done);
    })

})