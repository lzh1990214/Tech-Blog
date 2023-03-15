const Post = require('../models/Posts');

const postdata = [
    {
        author: 1,
        // responder: 2,
        // responder_first_name: "Hui",
        // responder_last_name: "Li",
        post_title: "Tech Post #1",
        post_description: "Tech post description #1."
        // post_date: "2023-03-01",
        // post_time: "09: 00 am",
    },
    {
        author: 2,
        // responder: 3,
        // responder_first_name: "John",
        // responder_last_name: "Doe",
        post_title: "Tech Post #2",
        post_description: "Tech post description #2."
    },
    {
        author: 3,
        // responder: 4,
        // responder_first_name: "Steve",
        // responder_last_name: "Smith",
        post_title: "Tech Post #3",
        post_description: "Tech post description #3."
    }
]

const seedPost = () => Post.bulkCreate(postdata);

module.exports = seedPost;