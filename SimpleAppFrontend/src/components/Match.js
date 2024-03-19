import React from 'react';

// Change the icons, function names, and parameters 
// to fit your portfolio topic and schema.

import { MdOutlineRemoveCircle, MdEditNote } from 'react-icons/md';


function Match({ match, onEdit, onDelete }) {
    return (
        <tr>
            <td>{match.name}</td>
            <td>{match.wins}</td>
            <td>{match.losses}</td>
            <td>{match.lastPlayed.slice(0,10)}</td>
            
            {/* Update these icons to something that matches your style. */}
            <td><MdOutlineRemoveCircle onClick={() => onDelete(match._id)} /></td>
            <td><MdEditNote onClick={() => onEdit(match)} /></td>
        </tr>
    );
}

export default Match;