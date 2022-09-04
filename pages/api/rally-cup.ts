import {NextApiRequest, NextApiResponse} from 'next';
import {getRallyCupStandings} from '../../util/sheets';


// GET /api/rally-cup
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const standings = await getRallyCupStandings();
    res.json(standings);
}
