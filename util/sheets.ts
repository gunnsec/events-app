import {google} from 'googleapis';


const auth = new google.auth.GoogleAuth({
    credentials: {
        client_email: process.env.CLIENT_EMAIL,
        private_key: process.env.PRIVATE_KEY!.replace(/\\n/g, '\n')
    },
    scopes: 'https://www.googleapis.com/auth/spreadsheets'
});

const sheets = google.sheets({ version: 'v4', auth });

// Returns all filled out rows in the events spreadsheet.
export type Event = {
    name: string, shortDesc: string, longDesc: string,
    date: string, finalized: boolean, image: string | null, imageCredits: string | null
}
export async function getEventsList(): Promise<Event[] | undefined> {
    const res = await sheets.spreadsheets.values.get({
        auth, spreadsheetId: process.env.SPREADSHEET_ID,
        range: '\'List of events\'!A2:H1000'
    });
    if (!res.data.values) return;

    return res.data.values.filter(row => row[0] && row[1] && row[2] && row[3] && row[4]).map(row => {
        const [name, shortDesc, longDesc, date, finalized, image, imageCredits] = row;
        return {
            name, shortDesc, longDesc, date, image: image || null, imageCredits: imageCredits || null,
            finalized: finalized === 'TRUE'
        }
    });
}

// Filters an array of events for those that occur after a given date. If no date is provided, the
// current date is used.
export function filterUpcomingEvents(events: Event[] | undefined, date = new Date()) {
    return events?.filter((event) => {
        // The first year of the school year (2021-2022 -> 2021). If the current month is less than 7 (july), assume
        // the current year is the second year of the school year.
        const year = (date.getMonth() + 1) < 7
            ? date.getFullYear() - 1
            : date.getFullYear();

        // If the month is less than 7 (july), assume it takes place in the second semester.
        const iso = (Number(event.date.split('-')[0]) < 7)
            ? `${year + 1}-${event.date}`
            : `${year}-${event.date}`;

        return iso > date.toISOString().slice(0, 10);
    });
}

export type RallyCupClassStandings = {name: string, total: number, events: RallyCupEvent[]};
type RallyCupEvent = {name: string, points: number}
export async function getRallyCupStandings(): Promise<RallyCupClassStandings[]> {
    // Dummy info; replace with spreadsheet fetching later.
    const standings: RallyCupClassStandings[] = [
        {name: '2023', total: 800, events: [{name: 'Rally A', points: 600}, {name: 'Rally B', points: 200}]},
        {name: '2024', total: 500, events: [{name: 'Rally A', points: 200}, {name: 'Rally B', points: 300}]},
        {name: '2025', total: 300, events: [{name: 'Rally A', points: 300}, {name: 'Rally B', points: 0}]},
        {name: '2026', total: 200, events: [{name: 'Rally A', points: 100}, {name: 'Rally B', points: 100}]},
    ];
    return standings;
}
