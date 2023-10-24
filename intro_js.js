
// this function build the clock in both languages arabic and english
function clock() {
    timeString = "";
    currentTime = new Date();

    attr = document.getElementById(`clock`).getAttribute("class");

    if (attr === `en`) timeString = "Current Date : "

    else timeString = " التاريخ الحالي :   "

    timeString +=
        currentTime.getFullYear() + '/' + currentTime.getMonth() + '/' + currentTime.getDate() + ' ';

    if (attr === `en`) timeString += ` <br><br> Current Time : `

    else timeString += `  <br><br> الحالي الوقت :  `

    if (currentTime.getHours() % 12 > 0)
        timeString +=
            currentTime.getHours() % 12 + ' : ' + currentTime.getMinutes() + ' : ' + currentTime.getSeconds();
    else
        timeString +=
            ' 12' + ' : ' + currentTime.getMinutes() + ' : ' + currentTime.getSeconds();

    document.getElementById(`clock`).innerHTML = timeString;

}
clock();
setInterval(clock, 1000);
// ----------------------------------------------

// this function show and unshow the language options 
function show() {

    value = document.getElementById(`lang1`).style.display;

    console.log(value);

    if (value === `initial`) {

        document.getElementById(`lang1`).style.display = `none`;
        document.getElementById(`lang2`).style.display = `none`;
    }
    else {

        document.getElementById(`lang1`).style.display = `initial`;
        document.getElementById(`lang2`).style.display = `initial`;
    }
}
// ----------------------------------------------

