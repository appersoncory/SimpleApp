import React from 'react';
import Match from './Match';
import { Link } from 'react-router-dom';
import { RxCardStackPlus } from "react-icons/rx";

// Change the function names and parameters 
// to fit your portfolio topic and schema.

function MatchList({ matches, onDelete, onEdit }) {
    return (
        <table id="matches">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Wins</th>
                    <th>Losses</th>
                    <th>LastPlayed</th>
                    <th>Delete</th>
                    <th>Edit</th>
                    <th><Link to="/create"><strong><RxCardStackPlus /></strong></Link></th>
                </tr>
            </thead>
            <tbody>
                {matches.map((match, i) => 
                    <Match 
                        match={match} 
                        key={i}
                        onDelete={onDelete}
                        onEdit={onEdit} 
                    />)}
            </tbody>
        </table>
    );
}

export default MatchList;
