const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const load = require('./controllers/load');
const create = require('./controllers/create');
const knex = require('knex');

const port = (process.env.PORT ? proess.env.PORT : 3000);
const dbConnection = {};
if (port === 3000) {
    console.log("backend running on localhost");
    dbConnection = {
        host: '127.0.0.1',
        user: 'Joshua',
        password: '',
        database: 'big-giant-wall-db'
    }
} else {
    dbConnection = {
        connectionString: process.env.DATABASE_URL,
        ssl: true
    }
}

const db = knex({
    client: 'pg',
    connection: dbConnection
});


//db.select('*').from('content_main').then(info => console.log(info));

const app = express();
app.use(bodyParser.json());
app.use(cors());

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