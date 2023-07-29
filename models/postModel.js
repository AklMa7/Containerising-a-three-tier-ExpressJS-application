const mongoose  = require("mongoose");

const postSchema = new mongoose.Schema({
    title: {
        type: String,
        require: [true, "A title is required"]
    },
    body: {
        type: String,
        require: [true, "A body is required" ]
    },
});

const Post = mongoose.model("Post", postSchema);
module.exports = Post;