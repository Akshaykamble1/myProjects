function clock() 
{
    var monthNames = ["Janauray", "Feburary", "March", "April", "May", "June",
        "July", "August", "September", "Octomber", "November", "December"];
    var dayNames = ["Sunday","Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Satursday"];

    var today = new Date();

    document.getElementById('Date').innerHTML = (dayNames[today.getDay()] + " " + today.getDate() + " " 
                                    + monthNames[today.getMonth()] + " " + today.getFullYear());

    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    var day = h < 11 ? 'AM' : 'PM';

    h = h < 10 ? '0' + h : h;
    m = m < 10 ? '0' + m : m;
    s = s < 10 ? '0' + s : s;

    document.getElementById('hours').innerHTML = h;
    document.getElementById('min').innerHTML = m;
    document.getElementById('sec').innerHTML = s;
}
 setInterval(clock, 1000);