import { fetchWithResponse } from './fetcher';

export function getDeckById(id) {
    return fetchWithResponse(`decks/${id}`, {
        headers: {
            Authorization: `Token ${localStorage.getItem('token')}`,
        },
    });
}

