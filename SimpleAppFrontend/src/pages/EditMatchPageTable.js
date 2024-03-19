import React, { useState }  from 'react';
import { useNavigate } from "react-router-dom";

export const EditMatchPageTable = ({ matchToEdit }) => {
 
    const [name, setName]       = useState(matchToEdit.name);
    const [wins, setWins]         = useState(matchToEdit.wins);
    const [losses, setLosses] = useState(matchToEdit.losses);
    const [lastPlayed, setLastPlayed] = useState(matchToEdit.lastPlayed.slice(0,10));
    
    const redirect = useNavigate();

    const editMatch = async () => {
        const response = await fetch(`https://simpleappbackend.onrender.com/matches/${matchToEdit._id}`, {
            method: 'PUT',
            body: JSON.stringify({ 
                name: name, 
                wins: wins, 
                losses: losses,
                lastPlayed: lastPlayed
            }),
            headers: {'Content-Type': 'application/json',},
        });

        if (response.status === 200) {
            alert(`Successfully updated match info.`);
        } else {
            const errMessage = await response.json();
            alert(`Failed to update match info. ${response.status}. ${errMessage.Error}`);
        }
        redirect("/matches");
    }

    return (
        <>
        <article>
            <h2>Edit a match</h2>
            <p>Paragraph about this page.</p>
            <table id="matches">
                <caption>Which match are you adding?</caption>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Wins</th>
                        <th>Losses</th>
                        <th>Last Played</th>
                    </tr>
                </thead>
                <tbody>
                <tr>
                <td><label for="title">Commander Name</label>
                        <input
                            type="text"
                            placeholder="Name of the played Commander"
                            value={name}
                            onChange={e => setName(e.target.value)} 
                            id="name" />
                    </td>

                    <td><label for="wins">Times Won</label>
                        <input
                            type="number"
                            value={wins}
                            placeholder="Number of wins"
                            onChange={e => setWins(e.target.value)} 
                            id="wins" />
                    </td>

                    <td><label for="losses">Times lost</label>
                        <input
                            type="number"
                            value={losses}
                            placeholder="Number of losses"
                            onChange={e => setLosses(e.target.value)} 
                            id="losses" />
                    </td>

                    <td><label for="lastPlayed">Last Played</label>
                        <input
                            type="Date"
                            placeholder="Date of the last match"
                            value={lastPlayed}
                            onChange={e => setLastPlayed(e.target.value)} 
                            id="lastPlayed" />
                    </td>

                    <td>
                    <label for="submit">Commit</label>
                        <button
                            type="submit"
                            onClick={editMatch}
                            id="submit"
                        >Edit</button>
                    </td>
                </tr>
                </tbody>
            </table>
            </article>
        </>
    );
}
export default EditMatchPageTable;