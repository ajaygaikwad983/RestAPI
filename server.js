const express = require('express');
const app = express();
const mongoose = require('mongoose');

// Database Connection
require("./mongo");

//model
require("./model/Post");

const Post = mongoose.model("Post");

app.get("/getData", async (req, res) => {
    try {
        const post = await Post.find({});
        res.send(post);
    } catch (error) {
        res.status(500);
    }
});

app.listen(3001, () => {
    console.log("server is running on port 3001");
});