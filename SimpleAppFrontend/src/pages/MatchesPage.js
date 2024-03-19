import { React, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import MatchList from '../components/MatchList';

function MatchesPage({ setMatch }) {
    // Use the Navigate for redirection
    const redirect = useNavigate();

    // Use state to bring in the data
    const [matches, setMatches] = useState([]);

    // RETRIEVE the entire list of matches
    const loadMatches = async () => {
        const response = await fetch('https://simpleappbackend.onrender.com/matches');
        const matches = await response.json();
        setMatches(matches);
    } 
    

    // UPDATE a single match
    const onEditMatch = async match => {
        setMatch(match);
        redirect("/update");
    }

    // DELETE a single match  
    const onDeleteMatch = async _id => {
        const response = await fetch(`https://simpleappbackend.onrender.com/matches/${_id}`, { method: 'DELETE' });
        if (response.status === 200) {
            const getResponse = await fetch('https://simpleappbackend.onrender.com/matches');
            const matches = await getResponse.json();
            setMatches(matches);
        } else {
            console.error(`Error deleting match record. = ${_id}, status code = ${response.status}`)
        }
    }

    // LOAD all the matches
    useEffect(() => {
        loadMatches();
    }, []);

    // DISPLAY the matches
    return (
        <>
            <h2>List of played Commander Matches</h2>
            <p>Shows a list of commander matches that I've played, including details such as the commander, numbers of wins and losses, and the date last played..</p>
            <MatchList 
                matches={matches} 
                onEdit={onEditMatch} 
                onDelete={onDeleteMatch} 
            />
        </>
    );
}

export default MatchesPage;