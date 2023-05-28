// import express from 'express';
// import App from './services/ExpressApp';
// import dbConnection from './services/Database';
// import { PORT } from './config';

// const startServer = async () => {
//     const app = express();

//     await dbConnection();
//     await App(app);

//     app.listen(PORT, () => {
//         console.log(`Listening to port ${PORT}`);
//     })
// }

// startServer();

import express, { Request, Response } from 'express'

const app = express()
const port = process.env.PORT || 8080

app.get('/', (_req: Request, res: Response) => {
    return res.send('Express Typescript on Vercel')
})

app.get('/ping', (_req: Request, res: Response) => {
    return res.send('pong 🏓')
})

app.listen(port, () => {
    return console.log(`Server is listening on ${port}`)
})