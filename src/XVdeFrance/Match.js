import React from 'react'
import { formatDate } from 'personnal-function';


export default function Match({ matchData }) {
    return (
        <div className="card mb-3 p-0">
            <div className="card-body w-100 rounded-top p-0">
                <h5 className="card-title bg-primary text-white p-3 w-100 rounded-top">
                    {matchData['home']} ({matchData['home_score']})- {matchData['away']} ({matchData['away_score']})
                </h5>
                <p className="card-text">
                    {formatDate(matchData['date']).dateToString}
                </p>
                <p>au {matchData['venue']}</p>
                <hr/>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">Equipe</th>
                            <th scope="col">nb essais</th>
                        </tr>

                    </thead>
                    <tbody>
                        <tr>
                            
                            <th className={matchData['home'] === "France" ? 'text-primary' : ''}>
                                {matchData['home']}
                            </th>
                            <td>
                                {matchData['home_tries']}
                            </td>
                        </tr>
                        <tr>
                            <th className={matchData['away'] === "France" ? 'text-primary' : ''}>
                                {matchData['away']}
                            </th>
                            <td>
                                {matchData['away_tries']}
                            </td>
                        </tr>

                    </tbody>
                </table>
                <div>
                    status :  {matchData['status']}
                </div>
            </div>
        </div>
    )
}

