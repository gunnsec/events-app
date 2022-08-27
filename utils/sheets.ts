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
    month: string, date: string, finalized: boolean,
    image: string | null, imageCredits: string | null
}
export async function getEventsList(): Promise<Event[] | undefined> {
    const res = await sheets.spreadsheets.values.get({
        auth, spreadsheetId: process.env.SPREADSHEET_ID,
        range: '\'List of events\'!A2:G1000'
    });
    if (!res.data.values) return;

    return res.data.values.filter(row => row[0] && row[1] && row[2] && row[3] && row[4] && row[5]).map(row => {
        const [name, shortDesc, longDesc, month, date, finalized, image, imageCredits] = row;
        return {
            name, shortDesc, longDesc, month, date, image: image || null, imageCredits: imageCredits || null,
            finalized: finalized === 'TRUE'
        }
    });
}
