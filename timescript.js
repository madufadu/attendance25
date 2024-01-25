// script.js

function updateTime() {
    var currentDate = new Date();
    var dateOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    var timeOptions = { hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true };

    document.getElementById('current-date').textContent = currentDate.toLocaleDateString('en-US', dateOptions);
    document.getElementById('current-time').textContent = currentDate.toLocaleTimeString('en-US', timeOptions);
}

function timeIn() {
    updateTime();
    alert('Time In recorded!');
}

function timeOut() {
    updateTime();
    alert('Time Out recorded!');
}
