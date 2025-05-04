import { fetchWithoutResponse, fetchWithResponse } from "./fetcher";

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

export function getJournalById(id){
    return fetchWithResponse(`journal-entries/${id}`,{
        headers: {
            Authorization: `Token ${localStorage.getItem('token')}`
        }
    })
}

export function getAllJournals() {
    return fetchWithResponse('journal-entries',{
        headers: {
            Authorization: `Token ${localStorage.getItem('token')}`
        }
    })
}

export const updateJournalById = async(id, journal) => {
    const response = await fetch(`http://localhost:8000/journal-entries/${id}`, {
        method:'PUT',
        headers:{
            Authorization: `Token ${localStorage.getItem('token')}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(journal)
    })
    if (response.status == 204) {
        return null
    }
    const data = await response.json()
    return data
    
}

export function deleteJournalById(id) {
    return fetchWithoutResponse(`journal-entries/${id}`, {
        method: "DELETE",
        headers: {
            Authorization: `Token ${localStorage.getItem('token')}`
        }
    })
}

export function getChoices(){
    return fetchWithResponse('journal-choices/',{
        method:'GET',
        headers: {
            Authorization: `Token ${localStorage.getItem('token')}`
        }
    })
}