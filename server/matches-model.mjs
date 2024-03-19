// Models for the Match Collection

// Import dependencies.
import mongoose from 'mongoose';
import 'dotenv/config';

// Connect based on the .env file parameters.
mongoose.connect(
    process.env.MONGODB_CONNECT_STRING,
    { useNewUrlParser: true }
);
const db = mongoose.connection;

// Confirm that the database has connected and print a message in the console.
db.once("open", (err) => {
    if(err){
        res.status(500).json({ Error: 'An error occurred.' });
    } else  {
        console.log('Success: Connected to databse.');
    }
});

// SCHEMA: Define the collection's schema.
const matchSchema = mongoose.Schema({
    name: { type: String, required: true },
    wins: { type: Number, required: true, default: 0 },
    losses: { type: Number, required: true, default: 0 },
    lastPlayed: { type: Date, required: true, default: Date.now }
});

// Compile the model from the schema 
// by defining the collection name "matches".
const matches = mongoose.model('Match', matchSchema);


// CREATE model *****************************************
const createMatch = async (name, wins, losses, lastPlayed) => {
    const match = new matches({ 
        name: name, 
        wins: wins, 
        losses: losses, 
        lastPlayed: lastPlayed 
    });
    return match.save();
}


// RETRIEVE model *****************************************
// Retrieve all documents and return a promise.
const retrieveMatches = async () => {
    const query = matches.find();
    return query.exec();
}

// RETRIEVE by ID
const retrieveMatchByID = async (_id) => {
    const query = matches.findById({_id: _id});
    return query.exec();
}

// DELETE model based on _id  *****************************************
const deleteMatchById = async (_id) => {
    const result = await matches.deleteOne({_id: _id});
    return result.deletedCount;
};


// UPDATE model *****************************************************
const updateMatch = async (_id, name, wins, losses, lastPlayed) => {
    const result = await matches.replaceOne({_id: _id }, {
        name: name, 
        wins: wins, 
        losses: losses, 
        lastPlayed: lastPlayed 
    });
    return { 
        _id: _id, 
        name: name, 
        wins: wins, 
        losses: losses, 
        lastPlayed: lastPlayed 
    }
}

// EXPORT the variables for use in the controller file.
export { createMatch, retrieveMatches, retrieveMatchByID, updateMatch, deleteMatchById }