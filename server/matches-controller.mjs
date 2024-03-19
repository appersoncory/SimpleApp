// Controllers for the Match Collection

import 'dotenv/config';
import express from 'express';
import * as matches from './matches-model.mjs';

const PORT = process.env.PORT;
const app = express();
app.use(express.json());  // REST needs JSON MIME type.


// CREATE controller ******************************************
app.post ('/matches', (req,res) => { 
    matches.createMatch(
        req.body.name, 
        req.body.wins, 
        req.body.losses, 
        req.body.lastPlayed
        )
        .then(match => {
            console.log(`"${match.name}" was added to the collection.`);
            res.status(201).json(match);
        })
        .catch(error => {
            console.log(error);
            res.status(400).json({ Error: 'Unable to create match entry, bad request.' });
        });
});


// RETRIEVE controller ****************************************************
app.get('/matches', (req, res) => {
    matches.retrieveMatches()
        .then(matches => { 
            if (matches !== null) {
                console.log(`All match entries were retrieved from the collection.`);
                res.json(matches);
            } else {
                res.status(404).json({ Error: 'Match entry was not found.' });
            }         
         })
        .catch(error => {
            console.log(error);
            res.status(400).json({ Error: 'Unable to retrieve match entry, bad request.' });
        });
});


// RETRIEVE by ID controller
app.get('/matches/:_id', (req, res) => {
    matches.retrieveMatchByID(req.params._id)
    .then(match => { 
        if (match !== null) {
            console.log(`"${match.name}" was retrieved, based on its ID.`);
            res.json(match);
        } else {
            res.status(404).json({ Error: 'Match entry not found.' });
        }         
     })
    .catch(error => {
        console.log(error);
        res.status(400).json({ Error: 'Unable to retrieve match entry, bad request..' });
    });

});


// UPDATE controller ************************************
app.put('/matches/:_id', (req, res) => {
    matches.updateMatch(
        req.params._id, 
        req.body.name, 
        req.body.wins, 
        req.body.losses, 
        req.body.lastPlayed
    )
    .then(match => {
        console.log(`"${match.name}" was updated.`);
        res.json(match);
    })
    .catch(error => {
        console.log(error);
        res.status(400).json({ Error: 'Unable to update entry, bad request.' });
    });
});


// DELETE Controller ******************************
app.delete('/matches/:_id', (req, res) => {
    matches.deleteMatchById(req.params._id)
        .then(deletedCount => {
            if (deletedCount === 1) {
                console.log(`Based on its ID, ${deletedCount} match was deleted.`);
                res.status(200).send({ Success: 'Match entry successfully deleted.' });
            } else {
                res.status(404).json({ Error: 'Unable to delete entry, match not found.' });
            }
        })
        .catch(error => {
            console.error(error);
            res.send({ Error: 'Unable to delete entry, bad request.' });
        });
});


app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});