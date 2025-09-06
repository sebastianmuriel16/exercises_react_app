export const youtubeOptions = {
    method: 'GET',
    headers: {
        'x-rapidapi-key': import.meta.env.VITE_RAPIDAPI_KEY,
        'x-rapidapi-host': 'youtube-search-and-download.p.rapidapi.com'
    }
};

export const youtubeFetch = async (url) => {
    const response = await fetch(url, youtubeOptions)
    const data = await response.json();

    return data

};

export const fetchData = async (url) => {
    const response = await fetch(url)
    const data = await response.json()
    const exercises = data.data
    return exercises
}