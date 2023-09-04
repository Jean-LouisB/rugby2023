import React from 'react'
import { formatDate } from 'personnal-function';


export default function Match({ matchData }) {
    return (
        <div class="card mb-3 p-0">
            <div class="card-body w-100">
                <h5 class="card-title bg-dark text-white p-3">
                    {matchData['home']} ({matchData['home_score']})- {matchData['away']} ({matchData['away_score']})
                </h5>
                <p class="card-text">
                    {formatDate(matchData['date']).dateToString}
                </p>
                <p>au {matchData['venue']}</p>
                <div>
                    footer
                </div>
            </div>
        </div>
    )
}

//{formatDate(item['date'])['dateToString']} : {item['home']} Vs {item['away']}