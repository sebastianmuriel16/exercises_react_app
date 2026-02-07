const baseUrlExercises = 'https://edb-with-videos-and-images-by-ascendapi.p.rapidapi.com/api/v1'

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

export const fetchExercises = async (endpoint) => {
    const url = `${baseUrlExercises}${endpoint}`;
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': import.meta.env.VITE_RAPIDAPI_EXERCISES_KEY,
            'x-rapidapi-host': 'edb-with-videos-and-images-by-ascendapi.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const result = await response.json();
        return result;
    } catch (error) {
        console.error(error);
    }

}