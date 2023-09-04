
import axios from 'axios';

const options = {
    method: 'GET',
    url: 'https://rugby-live-data.p.rapidapi.com/fixtures/1272/2024',
    headers: {
        'X-RapidAPI-Key': '97c5eb555amsh8bf0acdd5341152p1cea7ejsn9881dc91c38c',
        'X-RapidAPI-Host': 'rugby-live-data.p.rapidapi.com'
    }
};


const getResultats = async () => {
    try {
        const response = await axios.request(options);
        const resultats = response.data['results']
        resultats.forEach(match => {
            if(match.home == 'France' || match.away == 'France'){
                console.log(match);
            }
        });
       
    } catch (error) {
        console.error(error);
    }
}
getResultats();