let today = new Date();
let y = today.getFullYear();
let m = today.getMonth();
let d = today.getDate();
export default [
    {
        title: 'All Day Event',
        start: new Date(y, m, 1)
    },
    {
        id: 999,
        title: 'Repeating Event',
        start: new Date(y, m, d-3, 16, 0),
        allDay: false,
        className: 'info'
    },
    {
        id: 999,
        title: 'Repeating Event',
        start: new Date(y, m, d+4, 16, 0),
        allDay: false,
        className: 'info'
    },
    {
        title: 'Meeting',
        start: new Date(y, m, d, 10, 30),
        allDay: false,
        className: 'important'
    },
    {
        title: 'Lunch',
        start: new Date(y, m, d, 12, 0),
        end: new Date(y, m, d, 14, 0),
        allDay: false,
        className: 'important'
    },
    {
        title: 'Birthday Party',
        start: new Date(y, m, d+1, 19, 0),
        end: new Date(y, m, d+1, 22, 30),
        allDay: false,
    },
    {
        title: 'Click for Google',
        start: new Date(y, m, 28),
        end: new Date(y, m, 29),
        url: 'http://google.com/',
        className: 'success'
    },
]