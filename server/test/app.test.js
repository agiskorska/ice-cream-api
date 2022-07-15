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

    it("Responds to a GET requrest at /flavours with a 200 status", (done) => {
        request(api).get("/flavours").expect(200, done);
    })

    it("Responds to a GET requrest at /flavours with a JSON object", (done) => {
        request(api).get("/flavours").expect("Content-Type", /json/, done);
    })

    // it("Responds to a GET requrest at /flavours with a JSON object that has a flavours key", (done) => {
    //     request(api).get("/flavours").end((err, res) => {
    //         const data = res.body;

    //         done();
    //     });
    // })

})