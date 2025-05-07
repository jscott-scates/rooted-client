import { fetchWithResponse } from './fetcher';
import { fetchWithoutResponse } from './fetcher';

export function getEntryCards(id) {
    return fetchWithResponse(`entry-cards?journal-entry=${id}`, {
        headers: {
            Authorization: `Token ${localStorage.getItem('token')}`,
        },
    });
}
