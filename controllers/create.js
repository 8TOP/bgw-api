const createHandler = (req, res, db) => {
    const { type, text_value, coordx, coordy, zonex, zoney, test } = req.body;
    db('content_main')
        .insert({
            type: type,
            text_value: text_value,
            coordx: coordx,
            coordy: coordy,
            zonex: zonex,
            zoney: zoney,
            posted_date: new Date(),
            posted_by: "0",
            test: test
        })
        .returning('*')
        .then(response => {
            console.log("created", response);
            res.json(response[0]);
        })
        .catch(err => res.status(400).json(err))
}

module.exports = {
    createHandler: createHandler
}