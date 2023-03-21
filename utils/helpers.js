const Handlebars = require("handlebars");

module.exports = {
    // Format date as MM/DD/YYYY
    format_date: (date) => {
        return date.toLocaleDateString();
    },
    // Slice text to only show first 150 characters
    post_brief: str => {
        const first150 = str.slice(0, 300);
        return first150;
    },
    // Preserve the breaklines in long paragraphs
    breaklines: (text) => {
        text = Handlebars.Utils.escapeExpression(text);
        text = text.replace(/(\r\n|\n|\r)/gm, '<br>');
        return new Handlebars.SafeString(text);
    }
};
