const loadHandler = (req, res, db) => {
    const rune = "0123456789abcdefghijklmnopqrstuvwxyz".split("");
    const zoneDif = (c, contentZone) => {
        const reticleZone = req.params;
        const contentZoneSign = (contentZone[c].charAt(0) === "-" ? -1 : 1)
        const reticleZoneSign = (reticleZone[c].charAt(0) === "-" ? -1 : 1);
        const contentZoneIndex = rune.indexOf(contentZone[c].charAt(contentZone[c].length - 1));
        const reticleZoneIndex = rune.indexOf(reticleZone[c].charAt(reticleZone[c].length - 1));
        let result = (contentZoneSign * contentZoneIndex) - (reticleZoneSign * reticleZoneIndex);
        return (Math.abs(result) === 35 ? 1 * contentZoneSign * reticleZoneSign : result);
    }
    //const { x, y } = req.params;
    const inScope = [];
    db.forEach((item) => {
        if (Math.abs(zoneDif("x", item.zone)) < 3 &&
            Math.abs(zoneDif("y", item.zone)) < 3) {
            inScope.push(item);
        }
    })
    res.json(inScope);
}

module.exports = {
    loadHandler: loadHandler
}