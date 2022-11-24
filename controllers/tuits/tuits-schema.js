import mongoose from 'mongoose';
// Note: Whenever a new Tuit is created or new data fields needs to be added in the DB,
// This is where you want to add new fields for the DB to be able to read and understand
const schema = mongoose.Schema({
    tuit: String,
    likes: Number,
    liked: Boolean,
    dislikes: Number,
    userName: String,
    handle: String,
    time: String,
    avatarIcon: String,
}, {collection: 'tuits'});
export default schema;
