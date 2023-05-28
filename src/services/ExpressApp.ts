import express, { Application, Request, Response } from 'express';
import path from 'path';

import { AdminRoute, CustomerRoute, ShoppingRoute, VendorRoute } from '../routes';

export default async (app: Application) => {

    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    app.use(express.static(path.join(__dirname, 'uploads')));

    app.get('/ping', (req: Request, res: Response) => {
        return res.send('ping pong')
    })

    app.use('/admin', AdminRoute);
    app.use('/vendor', VendorRoute);
    app.use('/customer', CustomerRoute)
    app.use('/', ShoppingRoute)
    return app;
}