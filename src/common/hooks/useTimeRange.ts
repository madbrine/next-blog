import moment from "moment";

function useTimeRange(dateString: string): string {

    
    const parsedDate = moment(dateString, 'YYYY-MM-DD-HH-mm-ss');
    const now = moment();

    // Вычисляем разницу в минутах, часах и днях
    const diffInMinutes = now.diff(parsedDate, 'minutes');
    const diffInHours = now.diff(parsedDate, 'hours');
    const diffInDays = now.diff(parsedDate, 'days');

    if (diffInMinutes < 1) {
        return 'менее минуты назад';
    } else if (diffInMinutes < 60) {
        return `${diffInMinutes} минут назад`;
    } else if (diffInHours < 24) {
        return `${diffInHours} часов назад`;
    } else if (diffInDays === 1) {
        return 'вчера';
    } else {
        return parsedDate.format('D MMMM YYYY');
    }
}

export default useTimeRange;