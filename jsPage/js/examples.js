//#region example 1
document.getElementById("demo1").onclick = function(){
    alert('This is a dialog box')
};
function showDialogExample1(){
    alert('This is a dialog box');
}
//#endregion

//#region number square
function numberSquare(button, number){
    button.parentElement.children[2].innerHTML = number * number;
}
//#endregion

//#region digital clock
setInterval(simpleDigitalClock, 1000);
function simpleDigitalClock(){
    let date = new Date();
    let hour = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    document.getElementById('digitalClock').innerHTML = formatTime(hour) + " : " + formatTime(minutes) + " : " + formatTime(seconds);
}
function formatTime(time){
    return time < 10 ? "0" + time : time;
}
//#endregion