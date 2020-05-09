# bgw-api
big-giant-wall backend

to run locally: open server.js and set the const "connection" (first declared variable) to "local". Can be alternately set to "remote".

running locally under these settings, database must be called 'big-giant-wall-db'.

I think this will handle dependencies: https://flaviocopes.com/update-npm-dependencies/

PostgreSQL documentation: https://www.postgresqltutorial.com/
(install postgreSQL via npm, "pg": https://www.npmjs.com/package/pg)

after installation of PostgreSQL, create the database and then run the following query to initialize the primary content table:
CREATE TABLE content_main (
    id serial PRIMARY KEY,
    type VARCHAR(20) NOT NULL,
    text_value text NOT NULL,
    coordX SMALLINT NOT null,
    coordY SMALLINT NOT null,
    zoneX text NOT null,
    zoneY text NOT null,
    posted_date TIMESTAMP NOT null,
    posted_by text NOT NULL,
    test text
)

use 'npm start' to launch server.
