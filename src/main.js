
const marchFirst = '2020-03-01';

function daysElapsed(startDate){
    const total = Date.parse(new Date()) - Date.parse(startDate);
    const days = Math.floor(total/(1000*60*60*24)) + 1;

    return {
        total,
        days
    };
};

function initDate(id, startDate) {
    const dateField = document.getElementById(id);
    const dateSpan = dateField.querySelector('.days');
    const d = daysElapsed(startDate);
    var ending;
    switch (d.days % 10) {
        case 1:
            ending = "st";
        case 2:
            ending = "nd";
        case 3:
            ending = "rd";
        default:
            ending = "th";
    }
    dateSpan.innerHTML = `It's March ${d.days}<sup>${ending}</sup> 2020<br>`;
  };

window.onload = function() {
    initDate('daydiv', marchFirst);
};