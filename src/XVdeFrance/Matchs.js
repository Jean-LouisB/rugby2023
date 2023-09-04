import React from 'react';
import Match from './Match';
import { useState, useEffect } from 'react';
import axios from 'axios';

const API_KEY = process.env.REACT_APP_API_KEY;
const URL = process.env.REACT_APP_API_URL;
const URL_CM = process.env.REACT_APP_API_URL_CM;

const options = {
    method: 'GET',
    url: "https://"+URL_CM,
    headers: {
        'X-RapidAPI-Key': API_KEY,
        'X-RapidAPI-Host': URL,
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
            //console.log(data);
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
