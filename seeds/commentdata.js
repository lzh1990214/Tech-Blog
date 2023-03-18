const Comment = require("../models/Comments");

const commentdata = [
    {
        comment_description: "Comment #1",
        commenter: 3,
        commenter_first: "John",
        commenter_last: "Doe",
        post_id: 1
    },
    {
        comment_description: "Comment #2",
        commenter: 4,
        commenter_first: "Steve",
        commenter_last: "Smith",
        post_id: 1
    },
    {
        comment_description: "Comment #3",
        commenter: 3,
        commenter_first: "John",
        commenter_last: "Doe",
        post_id: 2
    },
    {
        comment_description: "Comment #4",
        commenter: 4,
        commenter_first: "Steve",
        commenter_last: "Smith",
        post_id: 2
    },
    {
        comment_description: "Comment #5",
        commenter: 1,
        commenter_first: "Zhihao",
        commenter_last: "Li",
        post_id: 3
    },
    {
        comment_description: "Comment #6",
        commenter: 2,
        commenter_first: "Hui",
        commenter_last: "Li",
        post_id: 3
    },
]

const seedComment = () => Comment.bulkCreate(commentdata);

module.exports = seedComment;

