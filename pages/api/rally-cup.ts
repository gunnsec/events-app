import {NextApiRequest, NextApiResponse} from 'next';
import {getRallyCupStandings} from '../../util/sheets';
import cors from 'cors';


const corsHandler = cors({origin: true});

// https://github.com/vercel/next.js/blob/canary/examples/api-routes-cors/pages/api/cors.ts
function runMiddleware(req: NextApiRequest, res: NextApiResponse, fn: Function) {
    return new Promise((resolve, reject) => {
        fn(req, res, (result: any) => {
            if (result instanceof Error) return reject(result);
            return resolve(result);
        })
    })
}

// GET /api/rally-cup
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    await runMiddleware(req, res, corsHandler);
    const standings = await getRallyCupStandings();
    res.json(standings);
}
