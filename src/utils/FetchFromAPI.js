import axios from "axios";

const BASE_URL = 'https://youtube-v31.p.rapidapi.com';

const options = {
  params: {maxResults: '50'},
  headers: {
    'X-RapidAPI-Key': 'f9cb661661msh69a39f55d9be286p114cb2jsn38e83c13409b',
    // 'X-RapidAPI-Key': 'e9e3721849msh98a491b00a0da97p1a43e8jsn9a00507d6d5f',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};

export const fetchFromAPI = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options)
  return data;
}