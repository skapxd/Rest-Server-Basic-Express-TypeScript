import routes from './router/router';
import Server from './server';

new Server({
    port: process.env.PORT || 3000,
    routes: [
        routes
    ]
});
