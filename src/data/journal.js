import { fetchWithResponse } from "./fetcher";

export function createNewJournal(journal){
    return fetchWithResponse('journal-entries', {
        method: 'POST',
        headers: {
            Authorization: `Token ${localStorage.getItem('token')}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(journal)
    })
}