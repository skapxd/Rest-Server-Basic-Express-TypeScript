import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import { Router } from 'express';

interface Constructor {
    routes?: Router[]
    port: string | number 
}

export default class Server {

    public app = express();

    constructor({
        routes,
        port   
    } : Constructor ) {
        
        this.app.use( cors() );
        this.app.use( morgan('dev') );
        this.app.use( express.json() );
    
        this.app.listen( port, () => {
            console.log(`Server at http://localhost:${ port }`)
        })

        if (routes) {
            this.app.use(...routes)
        }

    }

}