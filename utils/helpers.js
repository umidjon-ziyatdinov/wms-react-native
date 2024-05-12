import moment from 'moment';

export const Formatter = {
    formatTime(time, format = 'YYYY-MM-DD, HH:mm:ss') {
        const dateTime = moment(time).utcOffset(`+09:00`);
        return dateTime.format(format);
      },
}