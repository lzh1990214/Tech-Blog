const Comment = require("../models/Comments");

const commentdata = [
    {
        comment_description: "Comment #1",
        commenter: 3,
        post_id: 1
    },
    {
        comment_description: "Comment #2",
        commenter: 4,
        post_id: 1
    },
    {
        comment_description: "Comment #3",
        commenter: 3,
        post_id: 2
    },
    {
        comment_description: "Comment #4",
        commenter: 4,
        post_id: 2
    },
    {
        comment_description: "Comment #5",
        commenter: 1,
        post_id: 3
    },
    {
        comment_description: "Comment #6",
        commenter: 2,
        post_id: 3
    },
]

const seedComment = () => Comment.bulkCreate(commentdata);

module.exports = seedComment;

