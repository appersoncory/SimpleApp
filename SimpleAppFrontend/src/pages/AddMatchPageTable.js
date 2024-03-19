import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

// Change the icons, function names, and parameters 
// to fit your portfolio topic and schema.

export const AddMatchPageTable = () => {

    const [name, setName]       = useState('');
    const [wins, setWins]         = useState('');
    const [losses, setLosses]         = useState('');
    const [lastPlayed, setLastPlayed]         = useState('');

    const redirect = useNavigate();

    const addMatch = async () => {
        const newMatch = { name, wins, losses, lastPlayed};
        const response = await fetch('https://simpleappbackend.onrender.com/matches', {
            method: 'post',
            body: JSON.stringify(newMatch),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if(response.status === 201){
            alert(`Successfully recorded match.`);
        } else {
            alert(`Error adding match = ${response.status}`);
        }
        redirect("/matches");
    };


    return (
        <>
        <article>
            <h2>Add a match</h2>
            <p>Paragraph about this page.</p>
            
            <table id="matches">
                <caption>Which match are you adding?</caption>
                <thead>
                    <tr>
                        <th>Names</th>
                        <th>Wins</th>
                        <th>Losses</th>
                        <th>Last Played</th>
                    </tr>
                </thead>
                <tbody>
                <tr>
                <td><label for="name">Commander Name</label>
                        <input
                            type="text"
                            placeholder="Name of the Commander"
                            value={name}
                            onChange={e => setName(e.target.value)} 
                            id="name" />
                    </td>

                    <td><label for="wins">Times Won</label>
                        <input
                            type="number"
                            value={wins}
                            onChange={e => setWins(e.target.value)} 
                            id="wins" />
                    </td>

                    <td><label for="losses">Times Lost</label>
                        <input
                            type="number"
                            value={losses}
                            onChange={e => setLosses(e.target.value)} 
                            id="losses" />
                    </td>

                    <td><label for="lastPlayed">Last Played</label>
                        <input
                            type="date"
                            value={lastPlayed}
                            onChange={e => setLastPlayed(e.target.value)} 
                            id="lastPlayed" />
                    </td>

                    <td>
                    <label for="submit">Commit</label>
                        <button
                            type="submit"
                            onClick={addMatch}
                            id="submit"
                        >Add</button>
                    </td>
                </tr>
                </tbody>
            </table>
        </article>
    </>
);
}

export default AddMatchPageTable;