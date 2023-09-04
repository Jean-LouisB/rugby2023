import React from 'react';
import Match from './Match';
import { useState, useEffect } from 'react';
import {formatDate} from 'personnal-function';
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
        const france =[]
        resultats.forEach(match => {
            if(match.home === 'France' || match.away === 'France'){
                france.push(match)
            }
        });
        return france
       
    } catch (error) {
        console.error(error);
    }
}

export default function Matchs() {
    const [france, setFrance] = useState([{message:"bonjour c'est vide"}]);
    useEffect(()=>{
        getResultats()
        .then((data)=>{
            console.log(data);
            setFrance(data)
        })
        .catch((error)=>{console.log('erreur');})
    },[])

  return (
    <div class="container">
        <div class="container">
            <h3 className="text-center">Les matches de France</h3>
            <hr/>
        </div>
        
        <ul>
        {france.map((item, index)=>(<Match key={index} matchData={item}/>))}
      </ul>
    </div>
  );
}
