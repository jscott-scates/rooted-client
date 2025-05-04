const API_URL = 'http://localhost:8000'

//if a fetchWithoutResponse contains an error, throw the error status, else pass the 204 or other similar status through
const checkError = (res) => {
    if (!res.ok) {
        throw Error(res.status)
    }
    return res
}

const checkErrorJson = (res) => {
    //if the resource was NOT successfully called or created it throws an error
    if (res.status !==200 && res.status !==201) {
        throw Error(res.status)
    } else {
        return res.json()
    }
}

const catchError = (err) => {
    //user is unauthorized to access the resource, routes to login for user to sign in
    if (err.message === '401') {
        window.location.href = '/login'
    }
    //resource is not found
    //if (err.message === '404') {
      //  throw new Error(err.message)
    //}
}

export const fetchWithResponse = (resource, options) => fetch(`${API_URL}/${resource}`,options)
    .then(checkErrorJson)
    .catch(catchError)

export const fetchWithoutResponse = (resource,options) => fetch(`${API_URL}/${resource}`, options)
    .then(checkError)
    .catch(catchError)
