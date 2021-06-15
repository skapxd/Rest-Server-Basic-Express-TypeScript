import cluster from "cluster";
import os from "os";

import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import { Router, Request, Response } from 'express';


const Ddos = require('ddos')

export enum ViewEngine{
    EJS = 'ejs' 
}

interface Constructor {
    routes?: Router[]
    port: string | number 
    viewEngine?: ViewEngine
    ifProductionMode?: boolean
    routError?: (req: Request, res: Response) => void;
}


export default class Serve {

    public app = express();

    private ddos = new Ddos({burst:10, limit:15})

    private numCpu = os.cpus().length;

    constructor({
        port,
        routes,
        routError,
        viewEngine,
        ifProductionMode: productionMode
    } : Constructor ) {
        
        // middlewares 
        this.app.use( cors() );
        this.app.use( morgan('dev') );
        this.app.use( express.json() );
        this.app.use( this.ddos.express);

        // Eliminar encabezado
        this.app.disable('x-powered-by');

        // Static content
        this.app.use( express.static( 'public' ) );
        
        // List of routes
        if (routes) {

            this.app.use(...routes)
        }

        // If the server is a web service
        if (viewEngine) {
            
            this.app.set('view engine', viewEngine);
            this.app.set('views', './public');
        }
        
        // If the path does not exist
        if (routError) {

            this.app.use(routError);
        } 

        if (productionMode) {

            // User All thread enable
            if (cluster.isMaster) {
                for (let i = 0; i < this.numCpu; i++) {
                    
                    cluster.fork();
                }
                cluster.on('exit', (worker, code, signal) => {
                    console.log(`worker ${ worker.process.pid } die`);
                    cluster.fork();
                })
            
            } else {
                this.app.listen( port, () => {
                    console.log(`Server at ${ process.pid } @ http://localhost:${ port }`)
                });
            }
            
        } else {

            this.app.listen( port, () => {
                console.log(`Server at ${ process.pid } @ http://localhost:${ port }`)
            });
        }
    }
}