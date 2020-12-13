const tinyURL = require("tinyurl");

// create shorter version of url
module.exports.create = (req, res) => {
    const givenUrl = req.body.url;

    // error control
    if(!givenUrl) {
        res.status(400).send({
            message: "No url found"
        });
        return;
    } else if(!givenUrl.startsWith("https://") && !givenUrl.startsWith("http://")) {
        res.status(401).send({
            message: "Invalid input"
        });
        return;
    }

    tinyURL.shorten(givenUrl.toString(), function(result, error) {
        if (error){
            res.status(500).send({
                message: error.message || "Server error"
            });
        } else {
            res.send(result);
        }
    });
};
