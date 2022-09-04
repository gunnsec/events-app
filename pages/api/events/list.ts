import {NextApiRequest, NextApiResponse} from 'next';
import {getEventsList} from '../../../util/sheets';


// GET /api/events/list
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const events = await getEventsList();
    res.json(events);
}
