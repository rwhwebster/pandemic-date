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
    var suffix;
    var ten = d.days % 10;
    var hund = d.days % 100;
    if (ten==1 && hund!=11) {
        suffix = "st";
    } else if (ten==2 && hund!=12) {
        suffix = "nd";
    } else if (ten==3 && hund!=13) {
        suffix = "rd";
    } else {
        suffix = "th";
    }
    dateSpan.innerHTML = `It's March ${d.days}<sup>${suffix}</sup> 2020<br>`;
  };

window.onload = function() {
    initDate('daydiv', marchFirst);
};