import axios from "axios";

export const baseUrl = "https://bayut.p.rapidapi.com"

export const fetchApi = async (url) => {
    const { data } = await axios.get((url), {
        headers: {
            'X-RapidAPI-Key': 'ef0bcccca0msha4365a2bf536068p1903d2jsn3f6ef814edb7',
            'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
        }
    }
    );
    return data;
}