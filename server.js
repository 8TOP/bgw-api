const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const load = require('./controllers/load');
const create = require('./controllers/create');

const db = [
    {
        id: 1,
        type: "text",
        phase: "set",
        value: "Joshua",
        coords: {
            x: 25,
            y: 180
        },
        zone: {
            x: "0",
            y: "0"
        },
        date: "unset",
        test: ""
    },
    {
        id: 2,
        type: "text",
        phase: "set",
        value: "Aaron",
        coords: {
            x: 750,
            y: 521
        },
        zone: {
            x: "1",
            y: "1"
        },
        date: "unset",
        test: ""
    },
    {
        id: 3,
        type: "text",
        phase: "set",
        value: "Guinness",
        coords: {
            x: 805,
            y: 16
        },
        zone: {
            x: "0",
            y: "-1"
        },
        date: "unset",
        test: ""
    },
    {
        id: 4,
        type: "text",
        phase: "set",
        value: "Cristen",
        coords: {
            x: 57,
            y: 921
        },
        zone: {
            x: "1",
            y: "0"
        },
        date: "unset",
        test: ""
    },
    {
        id: "c1",
        type: "cell",
        coords: {
            x: 0,
            y: 0
        },
        zone: {
            x: "0",
            y: "0"
        },
        test: ""
    },
    {
        id: "c2",
        type: "cell",
        coords: {
            x: 0,
            y: 0
        },
        zone: {
            x: "-1",
            y: "-1"
        },
        test: ""
    },
    {
        id: "c3",
        type: "cell",
        coords: {
            x: 0,
            y: 0
        },
        zone: {
            x: "0",
            y: "-1"
        },
        test: ""
    },
    {
        id: "c4",
        type: "cell",
        coords: {
            x: 0,
            y: 0
        },
        zone: {
            x: "1",
            y: "-1"
        },
        test: ""
    },
    {
        id: "c5",
        type: "cell",
        coords: {
            x: 0,
            y: 0
        },
        zone: {
            x: "-1",
            y: "0"
        },
        test: ""
    },
    {
        id: "c6",
        type: "cell",
        coords: {
            x: 0,
            y: 0
        },
        zone: {
            x: "1",
            y: "0"
        },
        test: ""
    },
    {
        id: "c7",
        type: "cell",
        coords: {
            x: 0,
            y: 0
        },
        zone: {
            x: "-1",
            y: "1"
        },
        test: ""
    },
    {
        id: "c8",
        type: "cell",
        coords: {
            x: 0,
            y: 0
        },
        zone: {
            x: "0",
            y: "1"
        },
        test: ""
    },
    {
        id: "c9",
        type: "cell",
        coords: {
            x: 0,
            y: 0
        },
        zone: {
            x: "1",
            y: "1"
        },
        test: ""
    }
]

const port = 3000;

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.get('/', (req, res) => { res.send(db) });
app.get('/zoneX/:x/zoneY/:y', (req, res) => load.loadHandler(req, res, db));
app.post('/create', (req, res) => create.createHandler(req, res, db));

app.listen(port, () => {
    console.log("server operational on port " + port);
})

/*

/sign-in > POST = success fail
/register > POST = user
/profile/:userid > GET = user
/inspect > GET

*/