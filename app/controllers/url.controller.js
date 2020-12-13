
// Create shorter version of url
exports.create = (req, res) => {
    if(!req.body.url) {
        res.status(400).send({
            message: "No url found"
        });
        return;
    }

    // // Create a Tutorial
    // const tutorial = {
    //     title: req.body.title,
    //     description: req.body.description,
    //     published: req.body.published ? req.body.published : false
    // };
    //
    // // Save Tutorial in the database
    // Tutorial.create(tutorial)
    //     .then(data => {
    //         res.send(data);
    //     })
    //     .catch(err => {
    //         res.status(500).send({
    //             message:
    //                 err.message || "Some error occurred while creating the Tutorial."
    //         });
    //     });

    res.send("tiny url");
};
