const sinon = require("sinon");
const sandbox = sinon.createSandbox();
const urlController = require('../../app/controllers/url.controller');

// test logic controller
describe("Url controller", function() {

    let fakeReq, fakeRes = { "send": function () {} };

    describe("#create()", function() {
        beforeEach(function () {
            fakeReq = {
                "body": {"url": "http://google.com"}
            };
            // stubbed methods and requests
        });

        // restore stubs
        afterEach(function() {
            sandbox.restore();
        });

        let exercise = function() {
            urlController.create(fakeReq, fakeRes);
        };

        it("Should...", function() {
            exercise();
            // assertions or expected behaviour
        });

    });
});
