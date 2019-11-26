const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const load = require('./controllers/load');
const create = require('./controllers/create');
const knex = require('knex');

const connection = (process.env.PORT ? "remote" : "local");
console.log("connection: ", connection);
let port;
let dbConnection;
let db;
if (connection === "local") {
    console.log("backend running on localhost");
    port = 3000;
    db = knex({
        client: 'pg',
        connection: {
            host: '127.0.0.1',
            user: 'Joshua',
            password: '',
            database: 'big-giant-wall-db'
        }
    });
} else {
    console.log("backend running on remote");
    port = proess.env.PORT;
    db = knex({
        client: 'pg',
        connection: dbConnection
    });
}

const app = express();
app.use(bodyParser.json());
app.use(cors());
// app.options('*', cors());

app.get('/', (req, res) => { res.send("wall backend connected.") });
app.get('/zoneX/:x/zoneY/:y', (req, res) => load.loadHandler(req, res, db));
app.post('/create', (req, res) => create.createHandler(req, res, db));

app.listen(port, () => {
    console.log(`server operational on port ${port}`);
})

/*

/sign-in > POST = success fail
/register > POST = user
/profile/:userid > GET = user
/inspect > GET

*/