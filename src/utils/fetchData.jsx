import { StayPrimaryPortrait } from "@mui/icons-material";

export const exerciseOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
      'X-RapidAPI-Key': import.meta.env.VITE_RAPID_API_KEY
    }
  };

export async function fetchData(url, options) {
    const response = await fetch(url, options);
    const data = await response.json();

    return data;
}