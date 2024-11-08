
const myFetch = (url, options = {}) => {
    const token = localStorage.getItem('logged_user')

    const data = {
        ...options,
        body: JSON.stringify(options.body),
        headers: {
            ...options.headers,
            accept: 'application/json',
            'content-type': 'application/json',
            authentication: `jwt ${token}`
        }
    }

    return fetch(url, data)
}


export default myFetch