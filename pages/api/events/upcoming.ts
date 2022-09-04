import {NextApiRequest, NextApiResponse} from 'next';
import {filterUpcomingEvents, getEventsList} from '../../../util/sheets';


// GET /api/events/upcoming
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const events = await getEventsList();
    const filtered = filterUpcomingEvents(events);
    res.json(filtered);
}
