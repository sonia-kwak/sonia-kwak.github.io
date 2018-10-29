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