import mongoose from "mongoose";
mongoose.connect(
    process.env.MONGODB_URI || 'mongodb://127.0.0.1/berry-fine'
)
module.exports = mongoose.connection