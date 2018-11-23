import moment from 'moment'

export const formatDate = function (date, form) {
    if (!date) {
        return null;
    } else if (date.toLowerCase() === 'now') {
        return 'Now';
    } else {
        return moment(date).format(form);
    }
}

export const slugify = function (text) {
    if (!text)
        return;
    else {
        return text.toString().toLowerCase()
            .replace(/\s+/g, '-')           // Replace spaces with -
            .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
            .replace(/\-\-+/g, '-')         // Replace multiple - with single -
            .replace(/^-+/, '')             // Trim - from start of text
            .replace(/-+$/, '');            // Trim - from end of text
    }
}
