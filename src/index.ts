import express from 'express';
import morgan from 'morgan';
import cors from 'cors';

const port = process.env.PORT || 3000;

const app = express();

// middlewares
app.use( cors() );
app.use( morgan('dev') );
app.use( express.json() );

// Init Server
app.listen( port, () => {
    console.log(`Server at http://localhost:${ port }`)
})

