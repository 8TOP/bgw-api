const createHandler = (req, res, db) => {
    db.push(req.body);
    res.json("added");
}

module.exports = {
    createHandler: createHandler
}